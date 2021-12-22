import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import DisplayComments from "./DisplayComments";

const postId = "";

// beforeAll(() => {
//   window.matchMedia = (query) => ({
//     matches: false,
//     media: query,
//     onchange: null,
//     addListener: jest.fn(), // deprecated
//     removeListener: jest.fn(), // deprecated
//     addEventListener: jest.fn(),
//     removeEventListener: jest.fn(),
//     dispatchEvent: jest.fn(),
//   });
// });

describe("post renders", () => {
  test("renders comments tab", () => {
    render(<DisplayComments postId={postId} />);
    const commentsTabElement = screen.getByTestId("comments-panel");
    expect(commentsTabElement).toHaveTextContent(/^Comments$/i);
  });
});
