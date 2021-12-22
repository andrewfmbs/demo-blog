import { Col, Row, Space, Skeleton, Divider } from "antd";
import Layout, { Content } from "antd/lib/layout/layout";
import Text from "antd/lib/typography/Text";
import Title from "antd/lib/typography/Title";
import { useContext } from "react";
import { User as UserType } from "../../API";
import { UserContext } from "../../App";
import Post from "../../components/Post";
import useProfile from "../../hooks/useProfile";

const Profile = ({ userData }: { userData: UserType }) => {
  console.log(userData);
  useProfile(userData?.id || "", userData?.post?.items || []);

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
              <Title level={2}>{userData.name}</Title>
              <Space direction="vertical">
                <Text>Age: {userData.age}</Text>
                <Text>Location: {userData.location}</Text>
              </Space>
            </Col>
          </Row>
        </Content>
        <div>
          <Title level={3}>Posts</Title>
          <Row></Row>
          <Space direction="vertical" style={{ width: "100%" }}>
            {userData.post?.items?.map((post) => (
              <div key={post.id}>
                <Post post={post} />
              </div>
            ))}
          </Space>
        </div>
      </Space>
      {/* <iframe
        width="420"
        height="345"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
      ></iframe> */}
    </Layout>
  );
};

export default Profile;
