import { useRouter } from "next/router";

function PostPage() {
  const router = useRouter();
  return (
    <div>
      <h1>This is the One Post Page</h1>
      <p>show contents of single post here no {router.query.postId}</p>
    </div>
  );
}

export default PostPage;
