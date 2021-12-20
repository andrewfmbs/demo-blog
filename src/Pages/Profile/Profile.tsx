import { Card, Col, Row, Space } from "antd";
import Meta from "antd/lib/card/Meta";
import Layout, { Content } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import Text from "antd/lib/typography/Text";
import Title from "antd/lib/typography/Title";
import { API, graphqlOperation } from "aws-amplify";
import { useEffect } from "react";
import { useState } from "react";
import { getUser } from "../../graphql/queries";

interface User {
  name?: String;
  age?: Number;
  location?: String;
}

const Profile = () => {
  const [userData, setUserData] = useState<User>({});

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    // make call
    const result: any = await API.graphql(
      graphqlOperation(getUser, {
        id: 1,
      })
    );

    console.log(result);

    const _user: User = {
      name: "Brady",
      age: 34,
      location: "Old Bridge, NJ",
    };

    setUserData(_user);
  };
  return (
    <>
      <Layout>
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
        <Sider>
          <Title level={3}>Posts</Title>
          <Row></Row>
        </Sider>
      </Layout>
    </>
  );
};

export default Profile;
