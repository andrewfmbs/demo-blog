import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Post from "./Post";
import { Post as PostType } from "../API";

const post: PostType = {
  __typename: "Post",
  id: "1",
  postBody: "This is a test post body",
  postTitle: "This is a test post",
  updatedAt: new Date().toISOString(),
  postOwner: {
    __typename: "User",
    id: "1",
    age: 28,
    location: "Holmdel, NJ",
    name: "Michael",
    cognitoID: "1",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  comments: {
    __typename: "ModelCommentConnection",
    items: [
      {
        __typename: "Comment",
        commentOwnerId: "2",
        commentOwnerUsername: "Brady",
        content: "This is a test comment",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        id: "1",
      },
    ],
  },
};

beforeAll(() => {
  window.matchMedia = (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  });
});

describe("post renders", () => {
  test("renders post title", () => {
    render(<Post post={post} />);
    const titleElement = screen.getByTestId("post-title");
    expect(titleElement).toHaveTextContent(post.postTitle);
  });
  test("renders post body", () => {
    render(<Post post={post} />);
    const bodyElement = screen.getByTestId("post-body");
    expect(bodyElement).toHaveTextContent(post.postBody);
  });
  /* Once we have users, add a test to check delete button */
  test("renders like button", () => {
    render(<Post post={post} />);
    const buttonElement = screen.getByTestId("post-like-button");
    expect(buttonElement).toHaveTextContent(/^Like$/i);
  });
  test("renders post owners names", () => {
    render(<Post post={post} />);
    const nameElement = screen.getByTestId("post-owner-name");
    expect(nameElement).toHaveTextContent("Michael");
  });
  /*
    This test breaks and needs fixed, also this test might be better elsewhere
    .. not sure, it involves itself and components within itself
  */
  // test("comments tab clicks open", async () => {
  //   render(<Post post={post} />);
  //   const commentsTabElement = screen.getByRole(/^tab$/i);
  //   fireEvent.click(commentsTabElement);
  //   await waitFor(() => screen.getByText(/^Add Comment$/i));
  //   expect(
  //     screen.getByPlaceholderText(/^Add your comment$/i)
  //   ).toBeInTheDocument();
  //   expect(screen.getByText(/^Add Comment$/i)).toBeInTheDocument();
  //   expect(screen.getByText(/^1 reply$/i)).toBeInTheDocument();
  //   expect(screen.getByText(/^This is a test comment$/i)).toBeInTheDocument();
  // });
});
