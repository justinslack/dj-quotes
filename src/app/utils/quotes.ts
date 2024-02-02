// Define the Quote interface if you haven't already
export interface Quote {
  id: number; // Adding an ID for easier management
  text: string;
  author: string;
}

// Array of quotes
export const quotes: Quote[] = [
  { id: 1, text: "Killed it bro", author: "John Lennon" },
  { id: 2, text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { id: 3, text: "Legend!", author: "Walt Disney" },
  { id: 4, text: "Masterclass!!", author: "Walt Disney" },
  { id: 5, text: "Yes queen!", author: "Walt Disney" },
  { id: 6, text: "Iconic!", author: "Walt Disney" },
  { id: 7, text: "So grateful for that crowd!", author: "Walt Disney" },
];
