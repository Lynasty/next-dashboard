'use server';
const API_KEY = process.env.NEXT_PUBLIC_STRAPI_API_KEY;
const BASE_URL: string = "http://localhost:1337/api";
const HEADERS: HeadersInit = {
  'Authorization': `Bearer ${API_KEY}`,
} 

export const fetchProducts = async (): Promise<any> => {
  try {
    const response = await fetch(`${BASE_URL}/products?populate=*`, {
      method: "GET",
      headers: {
        ...HEADERS,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    return await response.json();
  } catch (error: any) {
    console.error("Error fetching products:", error);
    throw error;
  }
};