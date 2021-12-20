import { API, graphqlOperation } from "aws-amplify";
import { useState } from "react";
import { Avatar, Button, Card, Typography, Space, Row, Col } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { createLike, deleteLike, deletePost } from "../graphql/mutations";
import DisplayComments from "./DisplayComments/DisplayComments";
import _ from "lodash";

const { Title } = Typography;

const userID = "c4fd77aa-eb26-4632-95ec-67ef8c153e0c";
const Post = ({ post }: { post: any }) => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLiked = async () => {
    if (isLiked) {
      await API.graphql(
        graphqlOperation(createLike, {
          input: {
            likeOwnerId: userID,
            likeOwnerUsername: "andrew",
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
              <Title level={3}>{post.postTitle || <>&nbsp;</>}</Title>
              <Title level={4}>{post.postOwnerUsername || <>&nbsp;</>}</Title>
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
                  {post.userPostId === userID ? (
                    <Space direction="vertical" style={{ paddingTop: "5px" }}>
                      <Button onClick={callDeletePost} danger>
                        Delete
                      </Button>
                    </Space>
                  ) : (
                    <Space direction="vertical" style={{ paddingTop: "5px" }}>
                      <Button onClick={toggleLiked}>
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
        <p>{post.postBody || <>&nbsp;</>}</p>
      </Card>
      <DisplayComments postId={post.id} />
    </div>
  );
};

export default Post;
