import BookDetails from "@/lib/models/BookDetails";
import clientPromise from "../../../lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("BookBistro");
    const books : BookDetails[] = await db
      .collection<BookDetails>("BookDetails")
      .find({})
      .sort({ metacritic: -1 })
      .limit(10)
      .toArray();
    return Response.json(books);
  } catch (e) {
    console.error(e);
  }
}
