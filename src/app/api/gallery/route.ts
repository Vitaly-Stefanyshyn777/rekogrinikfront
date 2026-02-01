// src/app/api/gallery/route.ts
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const album = searchParams.get("album") || "general";

    const response = await fetch(
      `https://rekogrinikfrontbeck-production.up.railway.app/api/v1/public/gallery/albums/${album}`
    );

    if (!response.ok) {
      throw new Error(`Backend responded with ${response.status}`);
    }

    const data = await response.json();
    return Response.json(data);
  } catch (error) {
    console.error("Gallery proxy error:", error);
    // Fallback data
    return Response.json({
      photos: [],
      collections: [],
      pairs: [],
    });
  }
}
