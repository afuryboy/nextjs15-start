const blogs = [
  {
    id: "1",
    title: "nextjs15",
    author: {
      name: "Mark"
    },
    content: "blog 1 content is here",
  },

  {
    id: "2",
    title: "nextjs15",
    author: {
      name: "Mark"
    },
    content: "blog 2 content is here",
  },

  {
    id: "3",
    title: "nextjs15",
    author: {
      name: "Mark"
    },
    content: "blog 3 content is here",
  },
];

export async function GET(request: Request) {
    return new Response(JSON.stringify(blogs),{
        status:200,
        headers:{ "Content-Type": "application/json" }
    })
}
