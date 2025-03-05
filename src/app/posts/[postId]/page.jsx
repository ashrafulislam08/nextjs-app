export const getSinglePost = async (postId) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const data = await response.json();
  return data;
};

const SinglePost = async ({ params }) => {
  const { postId } = params;
  const singlePost = await getSinglePost(postId);
  return (
    <div className="w-1/3 border-2 border-green-400 p-3 rounded-md">
      <h2 className="font-bold text-2xl">{singlePost.title}</h2>
      <p className="text-md font-normal">{singlePost.body}</p>
    </div>
  );
};

export default SinglePost;
