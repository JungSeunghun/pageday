"use client"

import { useAuth } from "@/app/_context/AuthContext";
import Link from "next/link";

export default function Header() {
  const { isSignin, signout } = useAuth();

  return (
    <header className={"header"}>
      <h1>PageDay</h1>
      <nav>
        {isSignin ? (
          <a href="#" onClick={signout}>로그아웃</a>
        ) : (
          <>
            <Link href="/signin">로그인</Link>
            <Link href="/signup">회원가입</Link>
          </>
        )}
      </nav>
    </header>
  );
}
