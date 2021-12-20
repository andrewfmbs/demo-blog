import { API, graphqlOperation } from "aws-amplify";
import { useState } from "react";
import { Avatar, Button, Card, Typography, Space, Row, Col } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { createLike, deleteLike } from "../graphql/mutations";
import DisplayComments from "./DisplayComments/DisplayComments";
import _ from "lodash";

const { Title } = Typography;

const Post = ({ post }: { post: any }) => {
  const [isLiked, setIsLiked] = useState(false);

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
                  <Space direction="vertical" style={{ paddingTop: "5px" }}>
                    <Button onClick={() => toggleLiked(post.id)}>
                      {isLiked ? "Unlike" : "Like"}
                    </Button>
                  </Space>
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
