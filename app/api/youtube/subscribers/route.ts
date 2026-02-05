import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
    const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID || "UCgJwbyzi0jrX5BuwLS_pJ1A";

    if (!YOUTUBE_API_KEY) {
      // Return cached/fallback value when no API key
      return NextResponse.json({
        subscribers: "5.2K+",
        isLive: false,
        error: "API key not configured"
      });
    }

    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CHANNEL_ID}&key=${YOUTUBE_API_KEY}`,
      {
        next: { revalidate: 300 } // Cache for 5 minutes
      }
    );

    if (!response.ok) {
      throw new Error('YouTube API request failed');
    }

    const data = await response.json();

    if (!data.items || data.items.length === 0) {
      throw new Error('Channel not found');
    }

    const subscriberCount = parseInt(data.items[0].statistics.subscriberCount);

    // Format subscriber count
    let formattedCount: string;
    if (subscriberCount >= 1000000) {
      formattedCount = `${(subscriberCount / 1000000).toFixed(1)}M`;
    } else if (subscriberCount >= 1000) {
      formattedCount = `${(subscriberCount / 1000).toFixed(1)}K`;
    } else {
      formattedCount = subscriberCount.toString();
    }

    return NextResponse.json({
      subscribers: formattedCount,
      subscribersRaw: subscriberCount,
      isLive: true
    });

  } catch (error) {
    console.error('Error fetching YouTube subscribers:', error);

    // Return fallback value
    return NextResponse.json({
      subscribers: "5.2K+",
      isLive: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
