// This is the "root route" localhost:3000/

import Link from "next/link";

// export a react funtional componen
export default function Home() {
  return (
    <>
      <h1>Welcome home, anhao!</h1>
      <p>This is the root route inside: <code>app/page.tsx</code></p>
      <p>The root layout is inside: <code>app/layout.tsx</code>. It contains the header & footer.</p>
      <Link href="/blog">Blog</Link>
      <Link href="/products">Products</Link>
    </>
  );
}
