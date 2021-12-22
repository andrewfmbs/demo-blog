import { Button, Pagination, PageHeader, Space, Skeleton, Divider } from "antd";
import PostForm from "../../components/PostForm";
import Post from "../../components/Post";
import useDisplayPosts from "../../hooks/useDisplayPosts";

const DisplayPosts = () => {
  const { page, posts, showAdd, setShowAdd, onChange } = useDisplayPosts();

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
