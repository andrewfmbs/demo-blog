import { FC, useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import {
  Menu,
  Button,
  Collapse,
  List,
  Comment,
  Tooltip,
  Input,
  Dropdown,
  Space,
} from "antd";
import {
  onCreateComment,
  subscribeToEventComments,
} from "../../graphql/subscriptions";
import { listComments } from "../../graphql/queries";
import Observable from "zen-observable-ts";
import { createComment } from "../../graphql/mutations";
import _ from "lodash";

type Props = {
  postId: string;
  comments?: any[];
};
const CommentSection: FC<Props> = ({ postId }) => {
  const [comments, setComments] = useState<any[]>([]);
  useEffect(() => {
    getComments();
    const createCommentsListener = (
      API.graphql(
        graphqlOperation(subscribeToEventComments, {
          postCommentsId: postId,
        })
      ) as Observable<any>
    ).subscribe({
      next: (commentData) => {
        console.log(commentData);
        const newComment = commentData.value.data.subscribeToEventComments;
        setComments((prevState) => {
          const prevComments = prevState.filter(
            (comment: any) => comment.id !== newComment.id
          );
          console.log(newComment, prevComments);
          const updatedComments = [newComment, ...prevComments];
          return updatedComments;
        });
      },
    });
    return () => createCommentsListener.unsubscribe();
  }, []);

  const getComments = async () => {
    const result: any = await API.graphql(
      graphqlOperation(listComments, {
        filter: {
          postCommentsId: {
            eq: postId,
          },
        },
      })
    );

    if (result.data.listComments.items.length) {
      setComments(
        _.orderBy(result.data.listComments.items, ["createdAt"], "desc")
      );
      // console.log(result.data.listComments.items);
    }
  };

  return (
    <Collapse accordion>
      <Collapse.Panel header="Comments" key="1" data-testid="comments-panel">
        <Space direction="vertical" style={{ width: "100%" }}>
          <CommentForm postId={postId} />
          <SortButton />
          <Comments comments={comments} />
        </Space>
      </Collapse.Panel>
    </Collapse>
  );
};

const CommentForm: FC<Props> = ({ postId }) => {
  const [body, setBody] = useState("");
  const onCreateComment = async () => {
    const input = {
      commentOwnerId: "2",
      commentOwnerUsername: "andrew",
      postCommentsId: postId,
      content: body,
      createdAt: new Date().toISOString(),
    };
    await API.graphql(graphqlOperation(createComment, { input }));
    setBody("");
  };

  return (
    <>
      <Input.TextArea
        placeholder="Add your comment"
        onChange={(e) => setBody(e.target.value)}
        value={body}
      />
      <Button type="primary" onClick={onCreateComment}>
        Add Comment
      </Button>
    </>
  );
};

type CommentsProps = {
  comments?: any[];
};
const Comments: FC<CommentsProps> = ({ comments = [] }) => {
  console.log(comments);
  return (
    <List
      className="comment-list"
      header={`${comments.length} replies`}
      itemLayout="horizontal"
      dataSource={comments}
      renderItem={(comment: any) => (
        <li>
          <Comment
            actions={["actions go here"]}
            author={comment.commentOwnerUsername}
            avatar={"https://joeschmoe.io/api/v1/random"}
            content={comment.content}
            datetime={comment.createdAt}
          />
        </li>
      )}
    />
  );
};

const SortButton = () => {
  const menu = (
    <Menu>
      <Menu.Item key="1">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item key="2">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Item key="3">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item
        </a>
      </Menu.Item>
    </Menu>
  );
  return (
    <Dropdown overlay={menu} placement="bottomCenter">
      <Button>Sort by</Button>
    </Dropdown>
  );
};

export default CommentSection;
