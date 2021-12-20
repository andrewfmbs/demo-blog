import { API, graphqlOperation } from "aws-amplify";
import { useEffect, useState } from "react";
import Observable from "zen-observable-ts";
import {
  Avatar,
  Button,
  Card,
  Typography,
  Pagination,
  PageHeader,
  Space,
  Row,
  Col,
  Skeleton,
  Divider,
} from "antd";
import { UserOutlined } from "@ant-design/icons";
import { onCreatePost } from "../../graphql/subscriptions";
import { listPosts } from "../../graphql/queries";
import { createLike, deleteLike } from "../../graphql/mutations";
import PostForm from "../../components/PostForm";
import DisplayComments from "../../components/DisplayComments/DisplayComments";
import _ from "lodash";
import Post from "../../components/Post";

const { Title } = Typography;

const DisplayPosts = () => {
  const [page, setPage] = useState(0);
  const [posts, setPosts] = useState<any[]>([]);
  const [showAdd, setShowAdd] = useState<boolean>(false);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    getPosts();
    const createPostListener = (
      API.graphql(graphqlOperation(onCreatePost)) as Observable<any>
    ).subscribe({
      next: (postData) => {
        const newPost = postData.value.data.onCreatePost;
        setPosts((prevState) => {
          const prevPosts = prevState.filter(
            (post: any) => post.id !== newPost.id
          );
          const updatedPosts = [newPost, ...prevPosts];
          return updatedPosts;
        });
      },
    });
    return () => createPostListener.unsubscribe();
  }, []);

  const getPosts = async () => {
    const result: any = await API.graphql(graphqlOperation(listPosts));
    setPosts(_.orderBy(result.data.listPosts.items, ["createdAt"], "desc"));
    console.log(result.data);
  };

  const onChange = (page: number, pageSize: number) => {
    console.log(page);
  };

  const toggleLiked = async (id: string) => {
    if (isLiked) {
      await API.graphql(
        graphqlOperation(createLike, {
          input: {
            likeOwnerId: "2",
            likeOwnerUsername: "andrew",
            postLikesId: id,
          },
        })
      );
    } else {
      await API.graphql(
        graphqlOperation(deleteLike, {
          input: {
            id,
          },
        })
      );
    }
    setIsLiked((b) => !b);
  };

  return (
    <div>
      <PageHeader title="Posts" />
      <Button type="primary" onClick={() => setShowAdd((p) => !p)}>
        New Post
      </Button>
      {showAdd && <PostForm />}

      {posts.length > 0 ? (
        <Space direction="vertical" style={{ width: "100%" }}>
          {posts.map((post) => (
            <Post post={post} />
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
    </div>
  );
};

export default DisplayPosts;
