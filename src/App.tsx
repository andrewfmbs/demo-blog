import "antd/dist/antd.css";
import { Layout, Row, Col } from "antd";
import Nav from "./components/Nav/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./Pages/Profile/Profile";
import DisplayPosts from "./Pages/DisplayPosts/DisplayPosts";

const { Header, Content, Footer } = Layout;

const App = () => {
  return (
    <>
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
                    <Route path="/" element={<DisplayPosts />}></Route>
                    <Route path="/profile" element={<Profile />}></Route>
                  </Routes>
                </Col>
              </Row>
            </Content>
          </Layout>
          <Footer></Footer>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default App;
