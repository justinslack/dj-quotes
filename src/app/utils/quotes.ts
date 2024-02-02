// Define the Quote interface if you haven't already
export interface Quote {
  id: number; // Adding an ID for easier management
  text: string;
  author: string;
}

// Array of quotes
export const quotes: Quote[] = [
  { id: 1, text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { id: 2, text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  // Add as many quotes as you like
];
