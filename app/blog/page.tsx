import getPostMetadata from "@/components/getPostMetadata";
import PostPreview from "@/components/PostPreview";
import { Metadata } from "next";
import Newsletter from "@/components/Newsletter";

export const metadata:Metadata = {
  title: "Blog",
  description: `Here are posts written by VU2XSB.`,
};

const Blog = () => {
  const postMetadata = getPostMetadata().sort((a,b) =>
  new Date(b.date).getTime() - new Date(a.date).getTime());
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <main>
      <h1 className="bold-32 md:bold-40 lg:bold-64 text-center justify-center mt-10 bg-linear-to-r from-pink-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent">BLOG</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 m-10 gap-4 ">{postPreviews}</div>
      <div>
        <Newsletter />
      </div>
    </main>
  );
};

export default Blog;
