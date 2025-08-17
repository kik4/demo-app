"use client";

import { signOut } from "next-auth/react";

export default function SignOut() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        signOut();
      }}
    >
      <button type="submit">ログアウト</button>
    </form>
  );
}
