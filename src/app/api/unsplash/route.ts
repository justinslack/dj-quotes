// app/api/unsplash.ts

import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

interface UnsplashImage {
  id: string;
  urls: {
    regular: string;
  };
  alt_description?: string;
}

export async function GET(request: NextRequest) {
  const collectionId = process.env.NEXT_PUBLIC_UNSPLASH_COLLECTION_ID;
  const accessKey = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;

  // Check for the existence of the Unsplash API key
  if (!accessKey || !collectionId) {
    return new NextResponse(JSON.stringify({ message: 'Unsplash API key or Collection ID is missing.' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  try {
    const unsplashResponse = await fetch(`https://api.unsplash.com/collections/${collectionId}/photos?client_id=${accessKey}&orientation=landscape`);
    if (!unsplashResponse.ok) {
      // If the response is not OK, throw to catch block
      throw new Error(`Failed to fetch images from Unsplash: ${unsplashResponse.statusText}`);
    }

    const images: UnsplashImage[] = await unsplashResponse.json();
    const image = images[Math.floor(Math.random() * images.length)];

    // Return the selected image as a JSON response
    return new NextResponse(JSON.stringify(image), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error(error);
    // Return a server error response
    return new NextResponse(JSON.stringify({ message: 'Failed to fetch image from Unsplash.' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
