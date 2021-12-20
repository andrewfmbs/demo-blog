import { API, graphqlOperation } from "aws-amplify";
import { useEffect, useState } from "react";
import { Button, Pagination, PageHeader, Space, Skeleton, Divider } from "antd";
import { onCreatePost } from "../../graphql/subscriptions";
import { listPosts } from "../../graphql/queries";
import PostForm from "../../components/PostForm";
import _ from "lodash";
import Post from "../../components/Post";
import useListener from "../../hooks/useListener";

const DisplayPosts = () => {
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

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const result: any = await API.graphql(
      graphqlOperation(listPosts, { limit: 10 })
    );
    setPosts(_.orderBy(result.data.listPosts.items, ["createdAt"], "desc"));
  };

  const onChange = (page: number, pageSize: number) => {
    console.log(page);
  };

  return (
    <>
      <PageHeader title="Posts" />
      <Button type="primary" onClick={() => setShowAdd((p) => !p)}>
        New Post
      </Button>
      {showAdd && <PostForm />}

      {posts.length > 0 ? (
        <Space direction="vertical" style={{ width: "100%" }}>
          {posts.map((post) => (
            <div key={post.id}>
              <Post post={post} />
            </div>
          ))}
        </Space>
      ) : (
        <>
          <Skeleton active />
          <Divider />
          <Skeleton active />
          <Divider />
          <Skeleton active />
          <Divider />
        </>
      )}
      <Pagination current={page} onChange={onChange} total={posts.length} />
    </>
  );
};

export default DisplayPosts;
