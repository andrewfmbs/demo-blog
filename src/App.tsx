import "antd/dist/antd.css";
import { Layout, Row, Col } from "antd";
import Nav from "./components/Nav/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./Pages/Profile/Profile";
import DisplayPosts from "./Pages/DisplayPosts/DisplayPosts";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { API, Auth, graphqlOperation } from "aws-amplify";
import { createUser } from "./graphql/mutations";

const { Header, Content, Footer } = Layout;

const App = () => {
  const onSignUp = (args: any) => {
    const { attributes, password, username } = args;

    const inputs = {};
    return Auth.signUp({
      username,
      password,
      attributes,
    }).then((res) => {
      console.log(res);
      API.graphql(graphqlOperation(createUser, inputs));
      return res;
    });
  };

  return (
    <Authenticator
      services={{
        handleSignUp: onSignUp,
      }}
    >
      {({ signOut, user }) => {
        console.log(user);
        return (
          <BrowserRouter>
            <Layout>
              <Header>
                <Nav />
              </Header>
              <Layout>
                <Content>
                  <Row>
                    <Col
                      xs={{ offset: "1", span: "22" }}
                      sm={{ offset: "2", span: "20" }}
                      md={{ offset: "4", span: "16" }}
                      lg={{ offset: "6", span: "12" }}
                    >
                      <Routes>
                        <Route path="/" element={<DisplayPosts />} />
                        <Route path="/profile" element={<Profile />} />
                      </Routes>
                    </Col>
                  </Row>
                </Content>
              </Layout>
              <Footer></Footer>
            </Layout>
          </BrowserRouter>
        );
      }}
    </Authenticator>
  );
};

export default App;
