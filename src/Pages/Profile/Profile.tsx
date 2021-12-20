import { Card, Col, Row, Space, Skeleton, Divider } from "antd";
import Meta from "antd/lib/card/Meta";
import Layout, { Content } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import Text from "antd/lib/typography/Text";
import Title from "antd/lib/typography/Title";
import { API, graphqlOperation } from "aws-amplify";
import { useEffect } from "react";
import { useState } from "react";
import { Post as PostType } from "../../API";
import Post from "../../components/Post";
import { getUser } from "../../graphql/queries";
import {
  onDeletePost,
  subscribeToEventNewPost,
} from "../../graphql/subscriptions";
import useListener from "../../hooks/useListener";

interface User {
  name?: string;
  age?: number;
  location?: string;
  post: {
    items: PostType[];
  };
  id: string;
}

const Profile = () => {
  const [userData, setUserData] = useState<User>({
    name: "",
    age: NaN,
    location: "",
    post: { items: [] },
    id: "",
  });

  useListener(
    subscribeToEventNewPost,
    (postData: any) => {
      setUserData((prevUserData: User) => {
        const newUserData: User = { ...prevUserData };
        newUserData.post.items.unshift(
          postData.value.data.subscribeToEventNewPost
        );
        return newUserData;
      });
    },
    { userPostId: (userData as User)?.id },
    [userData?.id]
  );

  useListener(onDeletePost, (postData: any) => {
    setUserData((prevUserData: User) => {
      const newUserData: User = { ...prevUserData };
      newUserData.post.items = postData;
      return newUserData;
    });
  });

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    // make call
    const result: any = await API.graphql(
      graphqlOperation(getUser, {
        id: "c4fd77aa-eb26-4632-95ec-67ef8c153e0c",
      })
    );

    setUserData(result.data.getUser);
  };

  if (!userData.id) {
    return (
      <>
        <Skeleton active />
        <Divider />
        <Skeleton active />
        <Divider />
        <Skeleton active />
        <Divider />
      </>
    );
  }
  return (
    <Layout>
      <Space direction="vertical">
        <Content>
          <Row>
            <Col>
              <Title level={2}>{userData?.name}</Title>
              <Space direction="vertical">
                <Text>Age: {userData?.age}</Text>
                <Text>Location: {userData?.location}</Text>
              </Space>
            </Col>
          </Row>
        </Content>
        <div>
          <Title level={3}>Posts</Title>
          <Row></Row>
          <Space direction="vertical" style={{ width: "100%" }}>
            {userData?.post.items.map((post) => (
              <div key={post.id}>
                <Post post={post} />
              </div>
            ))}
          </Space>
        </div>
      </Space>
    </Layout>
  );
};

export default Profile;
