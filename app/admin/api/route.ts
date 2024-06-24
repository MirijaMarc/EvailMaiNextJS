import { getStatsByAnnee } from "@/app/lib/data"
export const dynamic = 'force-dynamic';
export async function GET(request : Request) {
    const { searchParams } = new URL(request.url)
    const annee = searchParams.get('annee') ?? 2024;
    const annees = await getStatsByAnnee(+annee);
   
    return Response.json({ annees })
  }