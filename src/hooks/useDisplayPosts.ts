import { API, graphqlOperation } from "aws-amplify";
import { useEffect, useState } from "react";
import { onCreatePost, onDeletePost } from "../graphql/subscriptions";
import { listPosts, testHttpCall } from "../graphql/queries";
import _ from "lodash";
import useListener from "./useListener";

const useDisplayPosts = () => {
  const [page, setPage] = useState(0);
  const [posts, setPosts] = useState<any[]>([]);
  const [showAdd, setShowAdd] = useState<boolean>(false);

  useListener(onCreatePost, (postData: any) => {
    const newPost = postData.value.data.onCreatePost;
    setPosts((prevState) => {
      const prevPosts = prevState.filter((post: any) => post.id !== newPost.id);
      const updatedPosts = [newPost, ...prevPosts];
      console.log(updatedPosts);
      return updatedPosts;
    });
  });

  useListener(onDeletePost, (postData: any) => {
    console.log(postData);
    const deletedPost = postData.value.data.onDeletePost;
    setPosts((prevState) => {
      return prevState.filter((post: any) => post.id !== deletedPost.id);
    });
  });

  useEffect(() => {
    getPosts();
    getBondCardData();
  }, []);

  const getBondCardData = async () => {
    const bondCardData = await API.graphql(
      graphqlOperation(testHttpCall, {
        params: {
          code: "BAQK0lnKtoflUHCRkiONjGVhICZh1457Yx6qEF7GTIjSYQXb7iDBZA==",
        },
      })
    );
    console.log(bondCardData);
  };

  const getPosts = async () => {
    const result: any = await API.graphql(
      graphqlOperation(listPosts, { limit: 10 })
    );
    setPosts(_.orderBy(result.data.listPosts.items, ["createdAt"], "desc"));
  };

  const onChange = (page: number, pageSize: number) => {
    console.log(page);
  };

  return {
    page,
    setPage,
    posts,
    showAdd,
    setShowAdd,
    onChange,
  };
};

export default useDisplayPosts;
