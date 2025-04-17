---
title: "Updating Safari Tinting for Your Website"
date: "2024-07-18"
time: "08:35"
---

I was developing my portfolio-v3 and found out that there were black bars at the top, while my portfolio was white on white. It didn’t look right. Instead of a clean, seamless experience, the top bar stood out awkwardly.

That’s when I realized: **I needed to update Safari's tinting** to match my design.

> Before Safari Tinting

![Before Safari Tinting](port-tint-before.png)

## What Is Safari Tinting?

Safari 15+ on iOS and macOS dynamically changes the UI (like the address bar and tab color) based on the website’s theme color. This is called **“Safari tinting”**, and it helps create a more immersive experience.

By default, if you don’t set a theme color, Safari picks a neutral tone. But I wanted control—so here’s how I fixed it.

## The Fix: Updating the `<meta>` Tag

I needed to add (or update) a simple meta tag in my `<head>` section:

```html
<meta name="theme-color" content="#ffffff">
```

This tells Safari (and other browsers) to use `#ffffff` (pure white) as the primary theme color.

> After Safari Tinting

![After Safari Tinting](port-tint-after.png)

### Fine-Tuning for Light and Dark Mode

But wait—what about users who prefer dark mode? Safari lets us set different colors for light and dark themes:

```html
<meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#1a1a1a" media="(prefers-color-scheme: dark)">
```

With this setup:
- Light mode users get a clean white look.
- Dark mode users get a sleek black-gray.

## Testing the Changes

After updating the `<meta>` tags, I tested the site in Safari:
1. **On iPhone & iPad** – Open Safari, visit the site, and observe the color change.
2. **On Mac** – Enable “Show tab bar” and switch between light and dark mode.
3. **Bonus Check** – Clear cache (`Shift + Reload`) to ensure Safari picks up the new color.

And just like that, the black bars were gone! My portfolio now looked polished, with a seamless experience across devices.

## Final Thoughts

Updating Safari tinting is a small but impactful tweak. It helps reinforce branding and makes the browsing experience feel more cohesive. If you haven’t set a theme color yet, try it out—your website (and visitors) will thank you!

^_^
---

