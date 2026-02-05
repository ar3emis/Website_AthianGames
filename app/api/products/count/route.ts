import { NextResponse } from 'next/server';
import { productDetails } from '@/lib/products/productData';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const productCount = Object.keys(productDetails).length;

    return NextResponse.json({
      count: productCount,
      products: Object.keys(productDetails)
    });

  } catch (error) {
    console.error('Error counting products:', error);
    return NextResponse.json({
      count: 10,
      error: 'Failed to count products'
    });
  }
}
