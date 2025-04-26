

import { auth } from "@/lib/auth";
import Link from "next/link";
import { SignOutButton } from "./sign-out-button";
import { SignInButton } from "./sign-in-button";
export default async function Header() {
  
  const session = await auth();
  console.log(session);
  
  if(session?.user) {
    return (
      <div>
        <Link href="/user-info">UserInfo</Link>
        <SignOutButton />
      </div>
    )
  }
  return (
    
      <div>
        <SignInButton />
      </div>
    
  );
}
