import "antd/dist/antd.css";
import { Layout, Row, Col, Input } from "antd";
import Nav from "./components/Nav/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./Pages/Profile/Profile";
import DisplayPosts from "./Pages/DisplayPosts/DisplayPosts";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { API, Auth, graphqlOperation } from "aws-amplify";
import { createUser } from "./graphql/mutations";
import { createContext, FC, useEffect, useState } from "react";
import { User, Post } from "./API";
import { CognitoUser } from "amazon-cognito-identity-js";
import { listUsers } from "./graphql/queries";

const { Header, Content, Footer } = Layout;

export const AuthContext: React.Context<any> = createContext({});
export const UserContext: React.Context<User> = createContext({
  __typename: "User",
  id: "",
  age: 0,
  location: "",
  post: null,
  name: "",
  cognitoID: "",
  createdAt: "",
  updatedAt: "",
} as User);

const App = () => {
  const [location, setLocation] = useState<string>();
  const [age, setAge] = useState<number>();

  useEffect(() => {
    console.log(age, location);
  }, [age, location]);

  const onSignUp = (args: any) => {
    const { attributes, password, username } = args;
    console.log(args);
    const inputs = {
      name: username,
      cognitoID: "",
      location: "Holmdel, NJ",
      age: "30",
    };
    return Auth.signUp({
      username,
      password,
      attributes,
    }).then(async (res) => {
      console.log(res);
      inputs.cognitoID = res.userSub;

      try {
        const ourUser = await API.graphql(
          graphqlOperation(createUser, { input: inputs })
        );
        console.log(ourUser);
      } catch (err) {
        console.log(err);
      }
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
        return <Page user={user} />;
      }}
    </Authenticator>
  );
};

const Page: FC<{ user: any }> = ({ user }) => {
  const [userData, setUserData] = useState<User>({
    __typename: "User",
    id: "",
    age: 0,
    location: "",
    post: null,
    name: "",
    cognitoID: "",
    createdAt: "",
    updatedAt: "",
  } as User);

  useEffect(() => {
    getSetUser();
  }, []);

  const getSetUser = async () => {
    const result: any = await API.graphql(
      graphqlOperation(listUsers, {
        filter: {
          cognitoID: {
            eq: user.attributes.sub,
          },
        },
      })
    );
    console.log(result.data.listUsers);
    setUserData(result.data.listUsers.items[0]);
  };

  return (
    <BrowserRouter>
      <AuthContext.Provider value={user}>
        <UserContext.Provider value={userData as User}>
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
                      <Route
                        path="/profile"
                        element={<Profile userData={userData as User} />}
                      />
                    </Routes>
                  </Col>
                </Row>
              </Content>
            </Layout>
            <Footer></Footer>
          </Layout>
        </UserContext.Provider>
      </AuthContext.Provider>
    </BrowserRouter>
  );
};

export default App;
