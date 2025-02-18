import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Hello!</h1>
      <p className="mb-4">
        {`My name is Frank Fan: graduate student at Columbia University and machine learning researcher passionate about building scalable systems, enhancing AI interpretability, and creating impactful technology.`}
      </p>
      {/* <div className="my-8">
        <BlogPosts />
      </div> */}
    </section>
  );
}
