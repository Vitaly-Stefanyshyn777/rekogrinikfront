// src/app/api/gallery/route.ts
// Використовуємо 127.0.0.1 замість localhost для серверного рендерингу
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:3002/api/v1";

// Вимкнути кешування для отримання свіжих даних
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const album = searchParams.get("album") || "general";
  const url = `${API_BASE_URL}/public/gallery/albums/${album}`;
  
  console.log("[API Route] Fetching gallery from:", url);
  console.log("[API Route] Album parameter:", album);
  console.log("[API Route] API_BASE_URL:", API_BASE_URL);

  try {
    console.log("[API Route] Starting fetch to:", url);
    
    const response = await fetch(url, {
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    });

    console.log("[API Route] Gallery response status:", response.status);
    console.log("[API Route] Gallery response ok:", response.ok);
    console.log("[API Route] Gallery response headers:", Object.fromEntries(response.headers.entries()));

    if (!response.ok) {
      const errorText = await response.text().catch(() => '');
      console.error("[API Route] Gallery backend error:", response.status, response.statusText);
      console.error("[API Route] Error body:", errorText);
      throw new Error(`Backend responded with ${response.status}: ${errorText}`);
    }

    const data = await response.json();
    console.log("[API Route] Gallery data from backend - photos count:", data.photos?.length || 0);
    console.log("[API Route] Gallery data from backend - pairs count:", data.pairs?.length || 0);
    console.log("[API Route] Gallery data from backend - collections count:", data.collections?.length || 0);
    
    // Перевіряємо, чи є дані
    if (!data || (!data.photos && !data.pairs && !data.collections)) {
      console.warn("[API Route] Empty or invalid data structure received");
    }
    
    return Response.json(data);
  } catch (error) {
    console.error("[API Route] Gallery proxy error:", error);
    console.error("[API Route] Error type:", error instanceof Error ? error.constructor.name : typeof error);
    console.error("[API Route] Error message:", error instanceof Error ? error.message : String(error));
    console.error("[API Route] Error stack:", error instanceof Error ? error.stack : 'No stack');
    console.error("[API Route] Error cause:", error instanceof Error ? error.cause : 'No cause');
    
    // Fallback data
    console.warn("[API Route] Returning fallback empty data");
    return Response.json({
      photos: [],
      collections: [],
      pairs: [],
    });
  }
}
