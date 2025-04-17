---
title: "Hush: How I Built an Open-Source Alternative to InterviewCoder"
date: "2025-03-06"
time: "09:00"
---

# Breaking Free from $60/Month: Building Hush, the Invisible AI Assistant

When I discovered InterviewCoder.co was charging $60/month for what's essentially a wrapper around existing AI APIs, I knew there had to be a better way. The price tag felt like highway robbery for such a simple utility. That's what motivated me to build **Hush**.

> JUST TOOK 2 HOURS TO BUILD WITH CURSOR.

## What is Hush?

Hush is an open-source desktop application that provides AI-powered coding assistance while remaining completely invisible during screen sharing. It's designed for developers who need discreet help during coding sessions, pair programming, or presentations.

The key difference? **It's completely free** (minus the cost of an API key, which Google currently offers with generous free tiers).

## Why I Built It

InterviewCoder.co offers a decent product, but charging $60/month for basic AI API integration is simply unreasonable. I believed developers deserved:

1. An **open-source alternative** they could modify and improve
2. A **free solution** that only required an API key
3. **More control** over the AI prompts and analysis

## How It Works

Hush operates with a simple principle: stay invisible until summoned. Here's the workflow:

1. Launch Hush before your screen sharing session
2. When you need help, press ⌘H to capture a screenshot
3. The AI analyzes your code and provides suggestions
4. Review the analysis in a minimal, floating window
5. Press ⌘B to toggle visibility when needed

The magic happens through a combination of:
- Electron for the desktop application
- Google's Gemini 1.5 Pro for AI analysis
- System-level keyboard shortcuts
- Transparent window management

## Key Features

- **Truly invisible mode** during screen sharing
- **One-key screenshot capture** (⌘H)
- **AI-powered code analysis** using Google's Gemini 1.5 Pro
- **Customizable analysis templates** for different scenarios
- **Keyboard-first design** with no mouse interaction required
- **Secure API key storage**
- **Multi-monitor support**

## The Development Process

Building Hush took about three weeks of evenings and weekends. The biggest challenges were:

### 1. Window Transparency

Making a window truly invisible during screen sharing while keeping it interactive was tricky. Most screen sharing software will capture even "transparent" windows. The solution involved a combination of:

```javascript
// Setting up a transparent, frameless window
const mainWindow = new BrowserWindow({
  width: 800,
  height: 600,
  frame: false,
  transparent: true,
  alwaysOnTop: true,
  webPreferences: {
    nodeIntegration: true,
    contextIsolation: false
  }
});

// Toggle visibility with opacity
function toggleVisibility() {
  const isVisible = mainWindow.getOpacity() > 0;
  mainWindow.setOpacity(isVisible ? 0 : 1);
}
```

### 2. Screenshot Capture

Capturing high-quality screenshots without UI interference required diving into Electron's desktopCapturer API:

```javascript
async function captureScreen() {
  const sources = await desktopCapturer.getSources({
    types: ['screen'],
    thumbnailSize: { width: 1920, height: 1080 }
  });
  
  const primaryDisplay = sources.find(source => 
    source.display_id === electron.screen.getPrimaryDisplay().id);
    
  return primaryDisplay.thumbnail.toDataURL();
}
```

### 3. AI Integration

Connecting to Google's Gemini API was straightforward, but crafting effective prompts for code analysis took experimentation:

```javascript
async function analyzeCode(screenshot, apiKey) {
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
  
  const prompt = `
    Analyze this code screenshot. Identify:
    1. Potential bugs or issues
    2. Optimization opportunities
    3. Best practices being violated
    Provide specific suggestions with code examples.
  `;
  
  const result = await model.generateContent({
    contents: [
      { role: "user", parts: [{ text: prompt }, { inlineData: { data: screenshot, mimeType: "image/png" } }] }
    ]
  });
  
  return result.response.text();
}
```

## Real-World Testing & Feedback

I tested Hush with a small group of developer friends preparing for interviews. Their feedback was invaluable:

> "I used Hush during three mock interviews and the interviewers had no idea I was getting AI assistance. It helped me solve a tricky dynamic programming problem I would have otherwise struggled with." — Friend at a FAANG company

> "The keyboard shortcuts are intuitive, and I love that I can customize the AI prompts for different types of problems." — Bootcamp graduate

Based on early feedback, I made several improvements:

1. Added template presets for different problem types (algorithms, system design, debugging)
2. Implemented a history feature to review previous analyses
3. Added an emergency "hide" button (Escape key) for quick concealment

## The Cost Comparison

| Feature | InterviewCoder.co | Hush |
|---------|-------------------|------|
| Price | $60/month | Free (open-source) |
| API Cost | Included | ~$0-5/month (Google AI API) |
| Customization | Limited | Full (source code access) |
| Updates | Company-dependent | Community-driven |
| Privacy | Company policy | Local-only, your control |

## Getting Started

Using Hush is simple:

1. Clone the repository: 

```bash
git clone https://github.com/OmPreetham/hush.git
```
2. Install dependencies: 
```bash
npm install
```

3. Get a Google AI API key (free tier available)
4. Configure your API key in the settings
5. Start the app: 
```bash
npm start
```

## Lessons Learned

This project taught me several valuable lessons:

### 1. The Power of Electron

Despite its critics, Electron proved perfect for this use case. The ability to create transparent, frameless windows with system-level integration was essential.

### 2. Prompt Engineering Matters

The quality of AI assistance depends heavily on how you structure your prompts. I spent almost as much time refining prompts as I did writing code.

### 3. User Experience in Invisible Apps

Designing an app that's meant to be invisible most of the time presents unique UX challenges. Audio cues and keyboard feedback became crucial when visual feedback wasn't an option.

### 4. Open Source as Protest

Sometimes, the best way to challenge expensive software is to build a free alternative. This project reinforced my belief in open source as a democratizing force in technology.

## The Future of Hush

This is just the beginning. I've open-sourced Hush on GitHub, and I'm excited to see how the community might extend it. Some ideas for future development:

- Support for more AI models (Claude, GPT-4, etc.)
- Team collaboration features
- Custom themes and layouts
- Language-specific analysis templates
- Integration with IDE extensions
- Voice command support for truly hands-free operation

## Conclusion

Building Hush reminded me why I love the open-source community. There's something powerful about creating alternatives to expensive proprietary software and making them freely available.

If you're preparing for technical interviews or frequently share your screen while coding, give Hush a try. All you need is a Google Generative AI API key (which has a generous free tier), and you're set.

Check out the project on GitHub: [github.com/OmPreetham/hush](https://github.com/OmPreetham/hush)

^_^
---

