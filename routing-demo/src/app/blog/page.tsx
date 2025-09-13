// ~/blog
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "blog page",
  },
};

export default function Blog() {
  return <>
    <h1>My blog</h1>
    <p>Inside <code>blog/page.tsx</code></p>
  </>
}
