import { listPosts } from "../graphql/queries";
import { API, graphqlOperation } from "aws-amplify";
import { useEffect, useRef, useState } from "react";
import { createPost } from "../graphql/mutations";
import { onCreatePost } from "../graphql/subscriptions";

const DisplayPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    const createPostListener = API.graphql(
      graphqlOperation(onCreatePost)
    ).subscribe({
      next: (postData) => {
        const newPost = postData.value.data.onCreatePost;
        const prevPosts = posts.filter((post) => post.id !== newPost.id);
        const updatedPosts = [newPost, ...prevPosts];
        setPosts(updatedPosts);
      },
    });
    
    return () => createPostListener.unsubscribe();
  }, [posts]);

  const getPosts = async () => {
    const result = await API.graphql(graphqlOperation(listPosts));
    setPosts(result.data.listPosts.items);
    console.log(result.data);
  };

  const addPost = async () => {
    const input = {
      postOwnerId: "2",
      postOwnerUsername: "andrew",
      postTitle: "my title",
      postBody: "body",
      createdAt: new Date().toISOString(),
    };
    await API.graphql(graphqlOperation(createPost, { input }));
  };
  return (
    <div>
      <button onClick={addPost}>Click me</button>

      {posts.map((post, i) => (
        <div key={i}>{post.postBody}</div>
      ))}
    </div>
  );
};

export default DisplayPosts;
