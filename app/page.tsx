import { Post } from "@/components/post";
import prisma from '@/lib/prisma'

export default async function Home() {
  
  const feed  = await prisma.post.findMany({
    where: {published: true},
    include: {
      author: {
        select: { name: true },
      },
    }
  })
  const data = await fetch('http://localhost:3001/api/blog')
    const list: any[] = await data.json()
  return (
    <div>
      <h1 className="p-8">首页</h1>
      <main className="px-8">
        {feed.map((post) => (
          <div className="post" key={post.id}>
            <Post post={post}></Post>
          </div>
        ))}
        
        {list.map((post) => (
          <div className="post" key={post.id}>
            <Post post={post}></Post>
          </div>
        ))}
      </main>
    </div>
  );
}
