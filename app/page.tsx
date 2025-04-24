import { Post, PostProps } from "@/components/post";
// type Props = {
//   feed: PostProps[];
// };

export default function Home() {
  const feed = [
    {
      id: "1",
      title: "Prisma is the perfect ORM for Next.js",
      content:
        "[Prisma](https://github.com/prisma/prisma) and Next.js go _great_ together!",
      published: false,
      author: {
        name: "Nikolas Burk",
        email: "burk@prisma.io",
      },
    },
  ];
  return (
    <div>
      <h1 className="p-8">首页</h1>
      <main className="px-8">
        {feed.map((post) => (
          <div className="post" key={post.id}>
            <Post post={post}></Post>
          </div>
        ))}
      </main>
    </div>
  );
}
