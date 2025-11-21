// src/app/api/hero/route.ts
// Використовуємо 127.0.0.1 замість localhost для серверного рендерингу
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:3002/api/v1";

// Вимкнути кешування для отримання свіжих даних
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  const url = `${API_BASE_URL}/public/hero`;
  console.log("[API Route] Fetching hero from:", url);
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

    console.log("[API Route] Response status:", response.status);
    console.log("[API Route] Response ok:", response.ok);
    
    if (!response.ok) {
      const errorText = await response.text().catch(() => '');
      console.error("[API Route] Backend error:", response.status, response.statusText);
      console.error("[API Route] Error body:", errorText);
      throw new Error(`Backend responded with ${response.status}: ${errorText}`);
    }

    const data = await response.json();
    console.log("[API Route] Hero data from backend:", JSON.stringify(data));
    return Response.json(data);
  } catch (error) {
    console.error("[API Route] Proxy error:", error);
    console.error("[API Route] Error type:", error instanceof Error ? error.constructor.name : typeof error);
    console.error("[API Route] Error message:", error instanceof Error ? error.message : String(error));
    console.error("[API Route] Error stack:", error instanceof Error ? error.stack : 'No stack');
    
    // Fallback data
    return Response.json({
      title: "RekoGrinik",
      subtitle: "Professional Renovation Services",
      description:
        "Professional renovation services, apartment reconstruction, bathroom renovation, office renovation",
    });
  }
}
