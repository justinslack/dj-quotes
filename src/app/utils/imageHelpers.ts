export async function downloadQuoteAsImage(quote: string, author: string, quality: number = 0.92): Promise<void> {
  const canvas = document.createElement('canvas');
  canvas.width = 800; // Adjust as per your design
  canvas.height = 600; // Adjust based on expected text length
  const ctx = canvas.getContext('2d');

  if (!ctx) return;

  // Assuming custom font is loaded, set text properties
  await document.fonts.load('24px Arial'); // Adjust for your chosen font
  ctx.fillStyle = '#fff'; // Background color
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.font = '24px Arial'; // Example: Change to your desired font
  ctx.fillStyle = '#000'; // Text color
  ctx.textAlign = 'left';

  // Calculate lines for wrapped text
  const lines: string[] = getLines(ctx, quote, canvas.width - 100); // Adjust maxWidth as needed

  // Draw text line by line
  lines.forEach((line, index) => {
    ctx.fillText(line, 50, 60 + index * 30); // Adjust x, y start position, and line height as needed
  });

  // Draw author
  ctx.font = '20px Arial'; // Smaller font for the author
  ctx.fillText(`- ${author}`, 50, 60 + lines.length * 30 + 20); // Adjust position as needed

  // Convert the canvas to an image and download
  const imageURL = canvas.toDataURL('image/jpeg', quality);
  const link = document.createElement('a');
  link.href = imageURL;
  link.download = `quote_${new Date().getTime()}.jpg`; // Unique filename using current timestamp
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Helper function to calculate wrapped text lines
function getLines(ctx: CanvasRenderingContext2D, text: string, maxWidth: number): string[] {
  const words: string[] = text.split(' ');
  const lines: string[] = [];
  let currentLine: string = words[0];

  for (let i = 1; i < words.length; i++) {
    const word = words[i];
    const width = ctx.measureText(`${currentLine} ${word}`).width;
    if (width < maxWidth) {
      currentLine += ` ${word}`;
    } else {
      lines.push(currentLine);
      currentLine = word;
    }
  }
  lines.push(currentLine); // Add the last line

  return lines;
}
