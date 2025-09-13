// This is the "root route" localhost:3000/

import Link from "next/link";

// export a react funtional componen
export default function Home() {
  return (
    <>
      <h1>Welcome home, anhao!</h1>
      <p>This is the root route <em>app/page.tsx</em></p>
      <Link href="/blog">Blog</Link>
      <Link href="/products">Products</Link>
    </>
  );
}
