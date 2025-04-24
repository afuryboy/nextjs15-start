import { Post, PostProps } from "@/components/post";
import Link from "next/link";
import prisma from "@/lib/prisma";
type Params = {
  slug: string
}
export default async function DetailPage({
  params,
}: {
  params: Params;
}) {
  // const post = {
  //   id: "1",
  //   title: "Prisma is the perfect ORM for Next.js",
  //   content:
  //     "[Prisma](https://github.com/prisma/prisma) and Next.js go _great_ together!",
  //   published: false,
  //   author: {
  //     name: "Nikolas Burk",
  //     email: "burk@prisma.io",
  //   },
  // };
  
  const {slug} = await params
  const post:PostProps = await prisma.post.findUnique({
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
