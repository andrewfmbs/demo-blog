import { API, graphqlOperation } from "aws-amplify";
import { useContext, useState } from "react";
import { Avatar, Button, Card, Typography, Space, Row, Col } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { createLike, deleteLike, deletePost } from "../graphql/mutations";
import DisplayComments from "./DisplayComments/DisplayComments";
import { Post as PostType, User as UserType } from "../API";
import { UserContext } from "../App";
import { Link } from "react-router-dom";

const { Title } = Typography;

const Post = ({ post }: { post: PostType }) => {
  const [isLiked, setIsLiked] = useState(false);
  const userData: UserType = useContext(UserContext);

  const toggleLiked = async () => {
    if (isLiked) {
      await API.graphql(
        graphqlOperation(createLike, {
          input: {
            likeOwnerId: post.userPostId,
            likeOwnerUsername: userData.name,
            postLikesId: post.id,
          },
        })
      );
    } else {
      await API.graphql(
        graphqlOperation(deleteLike, {
          input: {
            id: post.id,
          },
        })
      );
    }
    setIsLiked((b) => !b);
  };
  const callDeletePost = async () => {
    await API.graphql(
      graphqlOperation(deletePost, {
        input: {
          id: post.id,
        },
      })
    );
  };
  return (
    <div>
      <Card
        key={post.id}
        title={
          <Row justify="space-between">
            <Col>
              <Title level={3} data-testid="post-title">
                {post.postTitle || <>&nbsp;</>}
              </Title>
              <Title level={4} data-testid="post-owner-name">
                <Link to={`/profile/${post.postOwner?.name}`}>
                  {post.postOwner?.name || <>&nbsp;</>}
                </Link>
              </Title>
            </Col>
            <Col>
              <Row>
                <Col>
                  <Space direction="vertical" style={{ paddingTop: "5px" }}>
                    <Avatar size="large" icon={<UserOutlined />} />
                  </Space>
                </Col>
              </Row>
              <Row>
                <Col>
                  {post.userPostId === userData.id ? (
                    <Space direction="vertical" style={{ paddingTop: "5px" }}>
                      <Button
                        onClick={callDeletePost}
                        danger
                        data-testid="post-delete-button"
                      >
                        Delete
                      </Button>
                    </Space>
                  ) : (
                    <Space direction="vertical" style={{ paddingTop: "5px" }}>
                      <Button
                        onClick={toggleLiked}
                        data-testid="post-like-button"
                      >
                        {isLiked ? "Unlike" : "Like"}
                      </Button>
                    </Space>
                  )}
                </Col>
              </Row>
            </Col>
          </Row>
        }
      >
        <p data-testid="post-body">{post.postBody || <>&nbsp;</>}</p>
      </Card>
      <DisplayComments postId={post.id} />
    </div>
  );
};

export default Post;
