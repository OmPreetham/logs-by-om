---
title: "Embedded HTML Within SVG Inside an Image in a README"
date: "2024-07-06"
time: "09:00"
---

Recently, I set out to update my GitHub profile with a visually appealing README that would showcase my work and skills. A big part of this was trying to add an animated graph showing my GitHub contributions—something that would give visitors a quick look at my activity.

![GitHub Contribution Graph](https://github.com/OmPreetham/ompreetham/blob/main/page-light.gif?raw=true)

## The Challenges I Faced
---
At first, I tried using SVG graphics made in Figma. I spent time making them look good and adding cool animations, like making the graph move horizontally. However, when I tried embedding them into my README, things didn’t work smoothly. The animations didn’t display correctly on different screens or with GitHub’s light and dark themes. It was frustrating, but I didn’t give up.

## Switching to a New Approach
---
I decided to go back to basics and use HTML to build the graph myself. This gave me more control over its appearance and movement. I converted this HTML graph into an SVG format and then inserted it into my README using an image tag. This approach ensured that the animation worked properly and looked good on any device or theme.

### Sample Code for HTML Embedded in SVG
---
```xml
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <foreignObject width="100%" height="100%">
    <body xmlns="http://www.w3.org/1999/xhtml">
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 0;
        }
        .content {
          font-size: 20px;
          color: rgba(137, 43, 226, 0.656);
        }
        .content p {
          margin: 10px 0;
        }
      </style>
      <div class="content">
        <p>Hello, this is HTML inside SVG!</p>
        <p>Enjoy styling and scripting here.</p>
      </div>
    </body>
  </foreignObject>
</svg>
```

### Breakdown of the Code
---
- `<svg>`: Defines the SVG container with a specified width and height.
- `<foreignObject>`: Allows embedding foreign content (like HTML) inside the SVG. It takes up the full width and height of the SVG.
- `<body>`: Defines the HTML content within the `<foreignObject>`. It uses the XHTML namespace.
- `<style>`: Contains CSS styles for the embedded HTML content, including styles for the body and elements inside the content div.
- `<div>`: Contains the HTML content, including standard HTML tags like `<p>`.

## Shades of Blue
---
I chose blue shades for my Contribution Graph because they represent trust and familiarity. This aligns with GitHub’s web interface, which prominently features blue text. This color choice enhances readability and professionalism while ensuring my GitHub profile remains visually cohesive and engaging.

## Improving and Polishing
---
I kept tweaking the animation until it flowed smoothly. Ensuring compatibility with both light and dark themes was important to make my profile easy to read for everyone who visits.

### Finally, Good. Job. Done.


^-^
---

