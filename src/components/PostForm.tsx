import { Button, Input } from "antd";
import { API, graphqlOperation } from "aws-amplify";
import { useState } from "react";
import { createPost } from "../graphql/mutations";

const { TextArea } = Input;

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addPost = async () => {
    const input = {
      userPostId: "c4fd77aa-eb26-4632-95ec-67ef8c153e0c",
      postTitle: title,
      postBody: body,
      createdAt: new Date().toISOString(),
    };
    console.log(input);
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
