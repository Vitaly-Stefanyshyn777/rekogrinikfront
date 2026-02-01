// src/app/api/hero/route.ts
export async function GET() {
  try {
    const response = await fetch(
      "https://rekogrinikfrontbeck-production-a699.up.railway.app/api/v1/public/hero"
    );

    if (!response.ok) {
      throw new Error(`Backend responded with ${response.status}`);
    }

    const data = await response.json();
    return Response.json(data);
  } catch (error) {
    console.error("Proxy error:", error);
    // Fallback data
    return Response.json({
      title: "RekoGrinik",
      subtitle: "Professional Renovation Services",
      description:
        "Professional renovation services, apartment reconstruction, bathroom renovation, office renovation",
    });
  }
}
