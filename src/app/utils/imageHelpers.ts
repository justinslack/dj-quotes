// utils/imageHelpers.ts

export function downloadQuoteAsImage(quote: string, author: string): void {
  // Create a canvas element
  const canvas = document.createElement('canvas');
  canvas.width = 800; // Width of the canvas
  canvas.height = 200; // Height of the canvas
  const ctx = canvas.getContext('2d');

  if (!ctx) return; // Exit if the context is not available

  // Set the text styles
  ctx.font = '24px Arial';
  ctx.textAlign = 'center';
  ctx.fillStyle = '#000';

  // Draw the quote and author text onto the canvas
  ctx.fillText(quote, canvas.width / 2, canvas.height / 2 - 10);
  ctx.font = '20px Arial';
  ctx.fillText(`- ${author}`, canvas.width / 2, canvas.height / 2 + 30);

  // Convert the canvas to a data URL
  const imageURL = canvas.toDataURL('image/png');

  // Create a link and set the URL as the href
  const link = document.createElement('a');
  link.href = imageURL;
  link.download = 'quote.png'; // Set the filename for the download

  // Append the link to the document, trigger the click, and then remove it
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
