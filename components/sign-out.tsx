"use client";

import { signOut } from "next-auth/react";
import { Button } from "./ui/button";

export default function SignOut() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        signOut();
      }}
    >
      <Button type="submit">ログアウト</Button>
    </form>
  );
}
