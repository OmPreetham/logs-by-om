import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

// Add this line to mark this as server-only code
export const dynamic = 'force-dynamic'

const postsDirectory = path.join(process.cwd(), 'content')

export function getAllPostSlugs() {
  try {
    const fileNames = fs.readdirSync(postsDirectory)
    return fileNames
      .filter((fileName) => fileName.endsWith('.md'))
      .map((fileName) => {
        return {
          slug: fileName.replace(/\.md$/, ''),
        }
      })
  } catch (error) {
    console.error('Error reading posts directory:', error)
    return []
  }
}

export async function getAllPosts() {
  try {
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames
      .filter((fileName) => fileName.endsWith('.md'))
      .map((fileName) => {
        // Remove ".md" from file name to get slug
        const slug = fileName.replace(/\.md$/, '')

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents)

        // Combine the data with the slug
        return {
          slug,
          ...(matterResult.data as { title: string; date: string }),
        }
      })

    // Sort posts by date
    return allPostsData.sort((a, b) => {
      if (a.date < b.date) {
        return 1
      } else {
        return -1
      }
    })
  } catch (error) {
    console.error('Error getting all posts:', error)
    return []
  }
}

export async function getPostBySlug(slug: string) {
  try {
    console.log(`Attempting to get post with slug: ${slug}`)

    if (!slug) {
      console.error('No slug provided')
      return null
    }

    const fullPath = path.join(process.cwd(), 'content', `${slug}.md`)
    console.log(`Looking for file at path: ${fullPath}`)

    // Check if file exists first
    if (!fs.existsSync(fullPath)) {
      console.error(`File not found: ${fullPath}`)
      // List available files for debugging
      try {
        const availableFiles = fs.readdirSync(
          path.join(process.cwd(), 'content')
        )
        console.log(
          `Available files in content directory: ${availableFiles.join(', ')}`
        )
      } catch (err) {
        console.error('Error listing content directory:', err)
      }
      return null
    }

    console.log(`File found, reading contents`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Parse the markdown file with gray-matter
    console.log(`Parsing with gray-matter`)
    const { data, content } = matter(fileContents)

    // Convert markdown to HTML
    console.log(`Converting markdown to HTML`)
    const processedContent = await remark().use(html).process(content)

    const contentHtml = processedContent.toString()
    console.log(`Successfully processed post: ${slug}`)

    return {
      slug,
      title: data.title,
      date: data.date,
      content: contentHtml,
    }
  } catch (error) {
    console.error(`Error getting post ${slug}:`, error)
    return null
  }
}
