/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePostInput = {
  id?: string | null,
  postOwnerId: string,
  postOwnerUsername: string,
  postTitle: string,
  postBody: string,
  createdAt?: string | null,
};

export type ModelPostConditionInput = {
  postOwnerId?: ModelStringInput | null,
  postOwnerUsername?: ModelStringInput | null,
  postTitle?: ModelStringInput | null,
  postBody?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Post = {
  __typename: "Post",
  id: string,
  postOwnerId: string,
  postOwnerUsername: string,
  postTitle: string,
  postBody: string,
  createdAt?: string | null,
  comments?: ModelCommentConnection | null,
  likes?: ModelLikeConnection | null,
  updatedAt: string,
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection",
  items:  Array<Comment >,
  nextToken?: string | null,
};

export type Comment = {
  __typename: "Comment",
  id: string,
  commentOwnerId: string,
  commentOwnerUsername: string,
  post?: Post | null,
  content: string,
  createdAt: string,
  updatedAt: string,
  postCommentsId?: string | null,
};

export type ModelLikeConnection = {
  __typename: "ModelLikeConnection",
  items:  Array<Like >,
  nextToken?: string | null,
};

export type Like = {
  __typename: "Like",
  id: string,
  numberLikes: number,
  likeOwnerId: string,
  likeOwnerUsername: string,
  post?: Post | null,
  createdAt: string,
  updatedAt: string,
  postLikesId?: string | null,
};

export type UpdatePostInput = {
  id: string,
  postOwnerId?: string | null,
  postOwnerUsername?: string | null,
  postTitle?: string | null,
  postBody?: string | null,
  createdAt?: string | null,
};

export type DeletePostInput = {
  id: string,
};

export type CreateCommentInput = {
  id?: string | null,
  commentOwnerId: string,
  commentOwnerUsername: string,
  content: string,
  createdAt?: string | null,
  postCommentsId?: string | null,
};

export type ModelCommentConditionInput = {
  commentOwnerId?: ModelStringInput | null,
  commentOwnerUsername?: ModelStringInput | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
  postCommentsId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateCommentInput = {
  id: string,
  commentOwnerId?: string | null,
  commentOwnerUsername?: string | null,
  content?: string | null,
  createdAt?: string | null,
  postCommentsId?: string | null,
};

export type DeleteCommentInput = {
  id: string,
};

export type CreateLikeInput = {
  id?: string | null,
  numberLikes: number,
  likeOwnerId: string,
  likeOwnerUsername: string,
  postLikesId?: string | null,
};

export type ModelLikeConditionInput = {
  numberLikes?: ModelIntInput | null,
  likeOwnerId?: ModelStringInput | null,
  likeOwnerUsername?: ModelStringInput | null,
  and?: Array< ModelLikeConditionInput | null > | null,
  or?: Array< ModelLikeConditionInput | null > | null,
  not?: ModelLikeConditionInput | null,
  postLikesId?: ModelIDInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateLikeInput = {
  id: string,
  numberLikes?: number | null,
  likeOwnerId?: string | null,
  likeOwnerUsername?: string | null,
  postLikesId?: string | null,
};

export type DeleteLikeInput = {
  id: string,
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null,
  postOwnerId?: ModelStringInput | null,
  postOwnerUsername?: ModelStringInput | null,
  postTitle?: ModelStringInput | null,
  postBody?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items:  Array<Post >,
  nextToken?: string | null,
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  commentOwnerId?: ModelStringInput | null,
  commentOwnerUsername?: ModelStringInput | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
  postCommentsId?: ModelIDInput | null,
};

export type ModelLikeFilterInput = {
  id?: ModelIDInput | null,
  numberLikes?: ModelIntInput | null,
  likeOwnerId?: ModelStringInput | null,
  likeOwnerUsername?: ModelStringInput | null,
  and?: Array< ModelLikeFilterInput | null > | null,
  or?: Array< ModelLikeFilterInput | null > | null,
  not?: ModelLikeFilterInput | null,
  postLikesId?: ModelIDInput | null,
};

export type CreatePostMutationVariables = {
  input: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    id: string,
    postOwnerId: string,
    postOwnerUsername: string,
    postTitle: string,
    postBody: string,
    createdAt?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        commentOwnerId: string,
        commentOwnerUsername: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        postCommentsId?: string | null,
      } >,
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        numberLikes: number,
        likeOwnerId: string,
        likeOwnerUsername: string,
        createdAt: string,
        updatedAt: string,
        postLikesId?: string | null,
      } >,
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type UpdatePostMutation = {
  updatePost?:  {
    __typename: "Post",
    id: string,
    postOwnerId: string,
    postOwnerUsername: string,
    postTitle: string,
    postBody: string,
    createdAt?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        commentOwnerId: string,
        commentOwnerUsername: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        postCommentsId?: string | null,
      } >,
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        numberLikes: number,
        likeOwnerId: string,
        likeOwnerUsername: string,
        createdAt: string,
        updatedAt: string,
        postLikesId?: string | null,
      } >,
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type DeletePostMutationVariables = {
  input: DeletePostInput,
  condition?: ModelPostConditionInput | null,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
    id: string,
    postOwnerId: string,
    postOwnerUsername: string,
    postTitle: string,
    postBody: string,
    createdAt?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        commentOwnerId: string,
        commentOwnerUsername: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        postCommentsId?: string | null,
      } >,
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        numberLikes: number,
        likeOwnerId: string,
        likeOwnerUsername: string,
        createdAt: string,
        updatedAt: string,
        postLikesId?: string | null,
      } >,
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type CreateCommentMutationVariables = {
  input: CreateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type CreateCommentMutation = {
  createComment?:  {
    __typename: "Comment",
    id: string,
    commentOwnerId: string,
    commentOwnerUsername: string,
    post?:  {
      __typename: "Post",
      id: string,
      postOwnerId: string,
      postOwnerUsername: string,
      postTitle: string,
      postBody: string,
      createdAt?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
    postCommentsId?: string | null,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input: UpdateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type UpdateCommentMutation = {
  updateComment?:  {
    __typename: "Comment",
    id: string,
    commentOwnerId: string,
    commentOwnerUsername: string,
    post?:  {
      __typename: "Post",
      id: string,
      postOwnerId: string,
      postOwnerUsername: string,
      postTitle: string,
      postBody: string,
      createdAt?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
    postCommentsId?: string | null,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input: DeleteCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type DeleteCommentMutation = {
  deleteComment?:  {
    __typename: "Comment",
    id: string,
    commentOwnerId: string,
    commentOwnerUsername: string,
    post?:  {
      __typename: "Post",
      id: string,
      postOwnerId: string,
      postOwnerUsername: string,
      postTitle: string,
      postBody: string,
      createdAt?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
    postCommentsId?: string | null,
  } | null,
};

export type CreateLikeMutationVariables = {
  input: CreateLikeInput,
  condition?: ModelLikeConditionInput | null,
};

export type CreateLikeMutation = {
  createLike?:  {
    __typename: "Like",
    id: string,
    numberLikes: number,
    likeOwnerId: string,
    likeOwnerUsername: string,
    post?:  {
      __typename: "Post",
      id: string,
      postOwnerId: string,
      postOwnerUsername: string,
      postTitle: string,
      postBody: string,
      createdAt?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    postLikesId?: string | null,
  } | null,
};

export type UpdateLikeMutationVariables = {
  input: UpdateLikeInput,
  condition?: ModelLikeConditionInput | null,
};

export type UpdateLikeMutation = {
  updateLike?:  {
    __typename: "Like",
    id: string,
    numberLikes: number,
    likeOwnerId: string,
    likeOwnerUsername: string,
    post?:  {
      __typename: "Post",
      id: string,
      postOwnerId: string,
      postOwnerUsername: string,
      postTitle: string,
      postBody: string,
      createdAt?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    postLikesId?: string | null,
  } | null,
};

export type DeleteLikeMutationVariables = {
  input: DeleteLikeInput,
  condition?: ModelLikeConditionInput | null,
};

export type DeleteLikeMutation = {
  deleteLike?:  {
    __typename: "Like",
    id: string,
    numberLikes: number,
    likeOwnerId: string,
    likeOwnerUsername: string,
    post?:  {
      __typename: "Post",
      id: string,
      postOwnerId: string,
      postOwnerUsername: string,
      postTitle: string,
      postBody: string,
      createdAt?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    postLikesId?: string | null,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    id: string,
    postOwnerId: string,
    postOwnerUsername: string,
    postTitle: string,
    postBody: string,
    createdAt?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        commentOwnerId: string,
        commentOwnerUsername: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        postCommentsId?: string | null,
      } >,
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        numberLikes: number,
        likeOwnerId: string,
        likeOwnerUsername: string,
        createdAt: string,
        updatedAt: string,
        postLikesId?: string | null,
      } >,
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      postOwnerId: string,
      postOwnerUsername: string,
      postTitle: string,
      postBody: string,
      createdAt?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } >,
    nextToken?: string | null,
  } | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment?:  {
    __typename: "Comment",
    id: string,
    commentOwnerId: string,
    commentOwnerUsername: string,
    post?:  {
      __typename: "Post",
      id: string,
      postOwnerId: string,
      postOwnerUsername: string,
      postTitle: string,
      postBody: string,
      createdAt?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
    postCommentsId?: string | null,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      commentOwnerId: string,
      commentOwnerUsername: string,
      post?:  {
        __typename: "Post",
        id: string,
        postOwnerId: string,
        postOwnerUsername: string,
        postTitle: string,
        postBody: string,
        createdAt?: string | null,
        updatedAt: string,
      } | null,
      content: string,
      createdAt: string,
      updatedAt: string,
      postCommentsId?: string | null,
    } >,
    nextToken?: string | null,
  } | null,
};

export type GetLikeQueryVariables = {
  id: string,
};

export type GetLikeQuery = {
  getLike?:  {
    __typename: "Like",
    id: string,
    numberLikes: number,
    likeOwnerId: string,
    likeOwnerUsername: string,
    post?:  {
      __typename: "Post",
      id: string,
      postOwnerId: string,
      postOwnerUsername: string,
      postTitle: string,
      postBody: string,
      createdAt?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    postLikesId?: string | null,
  } | null,
};

export type ListLikesQueryVariables = {
  filter?: ModelLikeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLikesQuery = {
  listLikes?:  {
    __typename: "ModelLikeConnection",
    items:  Array< {
      __typename: "Like",
      id: string,
      numberLikes: number,
      likeOwnerId: string,
      likeOwnerUsername: string,
      post?:  {
        __typename: "Post",
        id: string,
        postOwnerId: string,
        postOwnerUsername: string,
        postTitle: string,
        postBody: string,
        createdAt?: string | null,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      postLikesId?: string | null,
    } >,
    nextToken?: string | null,
  } | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    id: string,
    postOwnerId: string,
    postOwnerUsername: string,
    postTitle: string,
    postBody: string,
    createdAt?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        commentOwnerId: string,
        commentOwnerUsername: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        postCommentsId?: string | null,
      } >,
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        numberLikes: number,
        likeOwnerId: string,
        likeOwnerUsername: string,
        createdAt: string,
        updatedAt: string,
        postLikesId?: string | null,
      } >,
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
    id: string,
    postOwnerId: string,
    postOwnerUsername: string,
    postTitle: string,
    postBody: string,
    createdAt?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        commentOwnerId: string,
        commentOwnerUsername: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        postCommentsId?: string | null,
      } >,
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        numberLikes: number,
        likeOwnerId: string,
        likeOwnerUsername: string,
        createdAt: string,
        updatedAt: string,
        postLikesId?: string | null,
      } >,
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    id: string,
    postOwnerId: string,
    postOwnerUsername: string,
    postTitle: string,
    postBody: string,
    createdAt?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        commentOwnerId: string,
        commentOwnerUsername: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        postCommentsId?: string | null,
      } >,
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        numberLikes: number,
        likeOwnerId: string,
        likeOwnerUsername: string,
        createdAt: string,
        updatedAt: string,
        postLikesId?: string | null,
      } >,
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment?:  {
    __typename: "Comment",
    id: string,
    commentOwnerId: string,
    commentOwnerUsername: string,
    post?:  {
      __typename: "Post",
      id: string,
      postOwnerId: string,
      postOwnerUsername: string,
      postTitle: string,
      postBody: string,
      createdAt?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
    postCommentsId?: string | null,
  } | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment?:  {
    __typename: "Comment",
    id: string,
    commentOwnerId: string,
    commentOwnerUsername: string,
    post?:  {
      __typename: "Post",
      id: string,
      postOwnerId: string,
      postOwnerUsername: string,
      postTitle: string,
      postBody: string,
      createdAt?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
    postCommentsId?: string | null,
  } | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment?:  {
    __typename: "Comment",
    id: string,
    commentOwnerId: string,
    commentOwnerUsername: string,
    post?:  {
      __typename: "Post",
      id: string,
      postOwnerId: string,
      postOwnerUsername: string,
      postTitle: string,
      postBody: string,
      createdAt?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
    postCommentsId?: string | null,
  } | null,
};

export type OnCreateLikeSubscription = {
  onCreateLike?:  {
    __typename: "Like",
    id: string,
    numberLikes: number,
    likeOwnerId: string,
    likeOwnerUsername: string,
    post?:  {
      __typename: "Post",
      id: string,
      postOwnerId: string,
      postOwnerUsername: string,
      postTitle: string,
      postBody: string,
      createdAt?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    postLikesId?: string | null,
  } | null,
};

export type OnUpdateLikeSubscription = {
  onUpdateLike?:  {
    __typename: "Like",
    id: string,
    numberLikes: number,
    likeOwnerId: string,
    likeOwnerUsername: string,
    post?:  {
      __typename: "Post",
      id: string,
      postOwnerId: string,
      postOwnerUsername: string,
      postTitle: string,
      postBody: string,
      createdAt?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    postLikesId?: string | null,
  } | null,
};

export type OnDeleteLikeSubscription = {
  onDeleteLike?:  {
    __typename: "Like",
    id: string,
    numberLikes: number,
    likeOwnerId: string,
    likeOwnerUsername: string,
    post?:  {
      __typename: "Post",
      id: string,
      postOwnerId: string,
      postOwnerUsername: string,
      postTitle: string,
      postBody: string,
      createdAt?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    postLikesId?: string | null,
  } | null,
};
