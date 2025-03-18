const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const sizes = [
  { size: 16, name: "favicon-16x16.png" },
  { size: 32, name: "favicon-32x32.png" },
  { size: 192, name: "android-chrome-192x192.png" },
  { size: 512, name: "android-chrome-512x512.png" },
  { size: 180, name: "apple-touch-icon.png" },
];

const sourceImage = path.join(__dirname, "../public/icons/pfp.jpeg");
const outputDir = path.join(__dirname, "../public");

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Generate icons for each size
sizes.forEach(({ size, name }) => {
  sharp(sourceImage)
    .resize(size, size, {
      fit: "cover",
      position: "center",
    })
    .toFile(path.join(outputDir, name))
    .then(() => console.log(`Generated ${name}`))
    .catch((err) => console.error(`Error generating ${name}:`, err));
});
