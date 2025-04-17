---
title: "BitmapIt: A Lightweight JavaScript Library For Generating Bitmap-Style ASCII Art."
date: "2025-02-09"
time: "02:00"
---

A lightweight JavaScript library for generating bitmap-style ASCII art text. BitmapIt allows you to create customizable retro-style text displays with various styling options and character sets.

[![Demo](https://img.shields.io/badge/Try%20Demo-Live-blue)](https://bitmapit.ompreetham.com)
[![npm](https://img.shields.io/npm/v/bitmapit)](https://www.npmjs.com/package/bitmapit)
[![License](https://img.shields.io/badge/license-MIT-green)](https://github.com/OmPreetham/bitmapit/blob/main/LICENSE)

## Features
---

- Convert text to customizable bitmap patterns
- Multiple display characters (blocks, symbols, custom characters)
- Adjustable font dimensions and spacing
- Clean and simple API
- HTML output with custom colors
- Mobile-friendly and responsive
- Zero dependencies

## Installation
---

```bash
npm install bitmapit
```

Or include directly in your HTML:

```html
<script type="module">
  import { BitmapFontGenerator } from './path/to/bitmapit/index.js';
</script>
```

## Basic Usage
---

```javascript
import { BitmapFontGenerator, defaultFont } from 'bitmapit';

// Create generator
const generator = new BitmapFontGenerator();

// Define characters
Object.entries(defaultFont).forEach(([char, pattern]) => {
  generator.defineCharacter(char, pattern);
});

// Generate text
const bitmap = generator.generateText('HELLO');
console.log(generator.toAscii(bitmap));
```

## Customization
---

### Font Dimensions

```javascript
const generator = new BitmapFontGenerator({
  width: 8,    // Character width
  height: 8,   // Character height
  spacing: 1   // Space between characters
});
```

### Display Options

```javascript
const generator = new BitmapFontGenerator({
  onChar: '█',           // Character for filled pixels
  offChar: ' ',          // Character for empty pixels
  color: '#ffffff',      // Text color (HTML only)
  backgroundColor: '#000000'  // Background color (HTML only)
});
```

## API Reference
---

### Constructor

```javascript
new BitmapFontGenerator(options)
```

Options:
- `width` (Number, default: 8): Width of each character
- `height` (Number, default: 8): Height of each character
- `spacing` (Number, default: 1): Space between characters
- `onChar` (String, default: '█'): Character for filled pixels
- `offChar` (String, default: ' '): Character for empty pixels

### Methods

#### defineCharacter(char, pattern)
Define a new character pattern.

```javascript
generator.defineCharacter('A', [
  [0,1,1,1,0],
  [1,0,0,0,1],
  [1,1,1,1,1],
  [1,0,0,0,1],
  [1,0,0,0,1]
]);
```

#### generateText(text)
Generate a bitmap pattern for the given text.

```javascript
const bitmap = generator.generateText('HELLO');
```

#### toAscii(bitmap, options)
Convert a bitmap to ASCII art.

```javascript
const ascii = generator.toAscii(bitmap, { 
  on: '█', 
  off: ' ' 
});
```

#### toHtml(bitmap, options)
Convert a bitmap to HTML with styling.

```javascript
const html = generator.toHtml(bitmap, {
  color: '#ff0000',
  backgroundColor: '#000000',
  on: '█',
  off: ' '
});
```

#### setDimensions(width, height)
Update the font dimensions.

```javascript
generator.setDimensions(10, 10);
```

#### setSpacing(spacing)
Set the spacing between characters.

```javascript
generator.setSpacing(2);
```

## Browser Support
---

- Chrome 61+
- Firefox 60+
- Safari 11+
- Edge 16+

## Examples
---

Visit our [demo page](https://bitmapit.vercel.app) to try BitmapIt live and see various examples in action.

## Contributing
---

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License
---

This project is licensed under the MIT License - see the [LICENSE](https://github.com/OmPreetham/bitmapit/blob/main/LICENSE) file for details.

## Author
---

Created by Om Preetham

## Support
---

- Report issues on [GitHub](https://github.com/OmPreetham/bitmapit/issues)

^_^
---

