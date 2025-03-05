export const getPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
};

const PostsPage = async () => {
  const posts = await getPosts();
  console.log(posts);
  return (
    <div className="lg:grid grid-cols-3 gap-3">
      {posts.map((post) => (
        <div key={post.id} className="border-3 p-2">
          <h2 className="text-xl font-semibold">{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostsPage;
