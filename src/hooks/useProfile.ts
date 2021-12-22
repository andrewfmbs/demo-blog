import { useState, useEffect, useContext } from "react";
import useListener from "./useListener";
import { API, graphqlOperation } from "aws-amplify";
import { Post } from "../API";
import { listUsers, searchUsers } from "../graphql/queries";
import {
  onDeletePost,
  subscribeToEventDeletePost,
  subscribeToEventNewPost,
} from "../graphql/subscriptions";
import { AuthContext } from "../App";

interface User {
  name?: string;
  age?: number;
  location?: string;
  post: {
    items: Post[];
  };
  id: string;
}

const useProfile = (userID: string, initialPosts: Post[] = []) => {
  const [posts, setPosts] = useState(initialPosts);

  useListener(
    subscribeToEventNewPost,
    (postData: any) => {
      setPosts((prePosts) => {
        const newPosts: Post[] = [...prePosts];
        newPosts.unshift(postData.value.data.subscribeToEventNewPost);
        return newPosts;
      });
    },
    { userPostId: userID },
    [userID]
  );

  useListener(
    subscribeToEventDeletePost,
    (postData: any) => {
      setPosts((prevPosts: Post[]) => {
        return postData;
      });
    },
    { userPostId: userID },
    [userID]
  );

  return null;
};

export default useProfile;
