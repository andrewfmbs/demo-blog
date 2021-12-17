import { listPosts } from "../graphql/queries";
import { API, graphqlOperation } from "aws-amplify";
import { useEffect, useState } from "react";
import { createPost } from "../graphql/mutations";
import { onCreatePost } from "../graphql/subscriptions";
import Observable from "zen-observable-ts";

const DisplayPosts = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    getPosts();
    const createPostListener = (
      API.graphql(graphqlOperation(onCreatePost)) as Observable<any>
    ).subscribe({
      next: (postData) => {
        const newPost = postData.value.data.onCreatePost;
        setPosts((prevState) => {
          const prevPosts = prevState.filter((post: any) => post.id !== newPost.id);
          const updatedPosts = [newPost, ...prevPosts];
          return updatedPosts
        });
      },
    });
    return () => createPostListener.unsubscribe();
  }, []);

  const getPosts = async () => {
    const result: any = await API.graphql(graphqlOperation(listPosts));
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

      {posts.map((post , i) => (
        <div key={i}>{post.postBody}</div>
      ))}
    </div>
  );
};

export default DisplayPosts;
