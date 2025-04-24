import { Post ,PostProps } from "@/components/post";
import Link from "next/link";

export default  async function DetailPage({ params } : {params:Promise<{ post: PostProps }>}) {
    const post = {
      id: "1",
      title: "Prisma is the perfect ORM for Next.js",
      content:
        "[Prisma](https://github.com/prisma/prisma) and Next.js go _great_ together!",
      published: false,
      author: {
        name: "Nikolas Burk",
        email: "burk@prisma.io",
      },
    }
  return (
    <div>
      <Link href="/">首页 </Link>
      <Post post={post}></Post>
    </div>
  );
}
