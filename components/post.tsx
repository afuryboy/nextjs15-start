
"use client"
import {useRouter} from "next/navigation";
export function Post({post}: {post:any}) {
    const router = useRouter();
    const authorName = post.author ? post.author.name : "Unknown author";
    return (
        <div className="p-8 bg-slate-300" onClick={() => router.push(`/p/${post.id}`)}>
            <h2>{post.title}</h2>
            <small>by {authorName}</small>
            <p>{post.content}</p>
        </div>
    )
}