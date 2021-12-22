import { Button, Input } from "antd";
import { API, graphqlOperation } from "aws-amplify";
import { useContext, useState } from "react";
import { AuthContext, UserContext } from "../App";
import { createPost } from "../graphql/mutations";

const { TextArea } = Input;

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const user = useContext(UserContext);

  console.log(user);
  const addPost = async () => {
    const input = {
      userPostId: user.id,
      postTitle: title,
      postBody: body,
      createdAt: new Date().toISOString(),
    };
    await API.graphql(graphqlOperation(createPost, { input }));
  };

  return (
    <div>
      <Input
        placeholder="Title"
        onChange={({ target }) => setTitle(target.value)}
        value={title}
      />
      <TextArea
        placeholder="Add your post"
        onChange={({ target }) => setBody(target.value)}
        value={body}
      />
      <Button onClick={addPost}>Submit</Button>
    </div>
  );
};

export default PostForm;
