import Link from "next/link";
import prisma from "@/lib/prisma";
type Params = Promise<{slug: string}>
export default async function DetailPage({
  params,
}: {
  params: Params;
}) {
  const {slug} = await params
  const post:any = await prisma.post.findUnique({
    where: {
      id: String(slug)
    },
    include: {
      author: {
        select: {name: true}
      }
    }
  })
  const authorName = post.author ? post.author.name : "Unknown author";
  return (
    <div>
      <Link href="/">首页 </Link>
      <div className="p-8 bg-slate-300">
        <h2>{post.title}</h2>
        <small>by {authorName}</small>
        <p>{post.content}</p>
      </div>
    </div>
  );
}
