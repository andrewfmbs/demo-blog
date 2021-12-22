/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePostInput = {
  id?: string | null,
  postTitle: string,
  postBody: string,
  createdAt?: string | null,
  userPostId?: string | null,
};

export type ModelPostConditionInput = {
  postTitle?: ModelStringInput | null,
  postBody?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
  userPostId?: ModelIDInput | null,
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

export type Post = {
  __typename: "Post",
  id: string,
  postOwner: User,
  postTitle: string,
  postBody: string,
  createdAt?: string | null,
  comments?: ModelCommentConnection | null,
  likes?: ModelLikeConnection | null,
  updatedAt: string,
  userPostId?: string | null,
};

export type User = {
  __typename: "User",
  id: string,
  age: number,
  location: string,
  post?: ModelPostConnection | null,
  name: string,
  cognitoID: string,
  createdAt: string,
  updatedAt: string,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items:  Array<Post >,
  nextToken?: string | null,
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
  postTitle?: string | null,
  postBody?: string | null,
  createdAt?: string | null,
  userPostId?: string | null,
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

export type CreateUserInput = {
  id?: string | null,
  age: number,
  location: string,
  name: string,
  cognitoID: string,
};

export type ModelUserConditionInput = {
  age?: ModelIntInput | null,
  location?: ModelStringInput | null,
  name?: ModelStringInput | null,
  cognitoID?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type UpdateUserInput = {
  id: string,
  age?: number | null,
  location?: string | null,
  name?: string | null,
  cognitoID?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type BondCard = {
  __typename: "BondCard",
  data?: BondCardData | null,
};

export type BondCardData = {
  __typename: "BondCardData",
  bondName: string,
  previousClose: string,
  currentPrice: string,
  nineThirtyPrice?: string | null,
  tenPrice?: string | null,
  tenThirtyPrice?: string | null,
  elevenPrice?: string | null,
  elevenThirtyPrice?: string | null,
};

export type SearchablePostFilterInput = {
  id?: SearchableIDFilterInput | null,
  postTitle?: SearchableStringFilterInput | null,
  postBody?: SearchableStringFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  userPostId?: SearchableIDFilterInput | null,
  and?: Array< SearchablePostFilterInput | null > | null,
  or?: Array< SearchablePostFilterInput | null > | null,
  not?: SearchablePostFilterInput | null,
};

export type SearchableIDFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
  range?: Array< string | null > | null,
};

export type SearchableStringFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
  range?: Array< string | null > | null,
};

export type SearchablePostSortInput = {
  field?: SearchablePostSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchablePostSortableFields {
  id = "id",
  postTitle = "postTitle",
  postBody = "postBody",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  userPostId = "userPostId",
}


export enum SearchableSortDirection {
  asc = "asc",
  desc = "desc",
}


export type SearchablePostAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchablePostAggregateField,
};

export enum SearchableAggregateType {
  terms = "terms",
  avg = "avg",
  min = "min",
  max = "max",
  sum = "sum",
}


export enum SearchablePostAggregateField {
  id = "id",
  postTitle = "postTitle",
  postBody = "postBody",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  userPostId = "userPostId",
}


export type SearchablePostConnection = {
  __typename: "SearchablePostConnection",
  items:  Array<Post >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult >,
};

export type SearchableAggregateResult = {
  __typename: "SearchableAggregateResult",
  name: string,
  result?: SearchableAggregateGenericResult | null,
};

export type SearchableAggregateGenericResult = SearchableAggregateScalarResult | SearchableAggregateBucketResult


export type SearchableAggregateScalarResult = {
  __typename: "SearchableAggregateScalarResult",
  value: number,
};

export type SearchableAggregateBucketResult = {
  __typename: "SearchableAggregateBucketResult",
  buckets?:  Array<SearchableAggregateBucketResultItem | null > | null,
};

export type SearchableAggregateBucketResultItem = {
  __typename: "SearchableAggregateBucketResultItem",
  key: string,
  doc_count: number,
};

export type SearchableUserFilterInput = {
  id?: SearchableIDFilterInput | null,
  age?: SearchableIntFilterInput | null,
  location?: SearchableStringFilterInput | null,
  name?: SearchableStringFilterInput | null,
  cognitoID?: SearchableStringFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  and?: Array< SearchableUserFilterInput | null > | null,
  or?: Array< SearchableUserFilterInput | null > | null,
  not?: SearchableUserFilterInput | null,
};

export type SearchableIntFilterInput = {
  ne?: number | null,
  gt?: number | null,
  lt?: number | null,
  gte?: number | null,
  lte?: number | null,
  eq?: number | null,
  range?: Array< number | null > | null,
};

export type SearchableUserSortInput = {
  field?: SearchableUserSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableUserSortableFields {
  id = "id",
  age = "age",
  location = "location",
  name = "name",
  cognitoID = "cognitoID",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableUserAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableUserAggregateField,
};

export enum SearchableUserAggregateField {
  id = "id",
  age = "age",
  location = "location",
  name = "name",
  cognitoID = "cognitoID",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableUserConnection = {
  __typename: "SearchableUserConnection",
  items:  Array<User >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult >,
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null,
  postTitle?: ModelStringInput | null,
  postBody?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
  userPostId?: ModelIDInput | null,
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

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  age?: ModelIntInput | null,
  location?: ModelStringInput | null,
  name?: ModelStringInput | null,
  cognitoID?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User >,
  nextToken?: string | null,
};

export type CreatePostMutationVariables = {
  input: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    id: string,
    postOwner:  {
      __typename: "User",
      id: string,
      age: number,
      location: string,
      post?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      name: string,
      cognitoID: string,
      createdAt: string,
      updatedAt: string,
    },
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
    userPostId?: string | null,
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
    postOwner:  {
      __typename: "User",
      id: string,
      age: number,
      location: string,
      post?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      name: string,
      cognitoID: string,
      createdAt: string,
      updatedAt: string,
    },
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
    userPostId?: string | null,
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
    postOwner:  {
      __typename: "User",
      id: string,
      age: number,
      location: string,
      post?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      name: string,
      cognitoID: string,
      createdAt: string,
      updatedAt: string,
    },
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
    userPostId?: string | null,
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
      postOwner:  {
        __typename: "User",
        id: string,
        age: number,
        location: string,
        name: string,
        cognitoID: string,
        createdAt: string,
        updatedAt: string,
      },
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
      userPostId?: string | null,
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
      postOwner:  {
        __typename: "User",
        id: string,
        age: number,
        location: string,
        name: string,
        cognitoID: string,
        createdAt: string,
        updatedAt: string,
      },
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
      userPostId?: string | null,
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
      postOwner:  {
        __typename: "User",
        id: string,
        age: number,
        location: string,
        name: string,
        cognitoID: string,
        createdAt: string,
        updatedAt: string,
      },
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
      userPostId?: string | null,
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
      postOwner:  {
        __typename: "User",
        id: string,
        age: number,
        location: string,
        name: string,
        cognitoID: string,
        createdAt: string,
        updatedAt: string,
      },
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
      userPostId?: string | null,
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
      postOwner:  {
        __typename: "User",
        id: string,
        age: number,
        location: string,
        name: string,
        cognitoID: string,
        createdAt: string,
        updatedAt: string,
      },
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
      userPostId?: string | null,
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
      postOwner:  {
        __typename: "User",
        id: string,
        age: number,
        location: string,
        name: string,
        cognitoID: string,
        createdAt: string,
        updatedAt: string,
      },
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
      userPostId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    postLikesId?: string | null,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    age: number,
    location: string,
    post?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        postTitle: string,
        postBody: string,
        createdAt?: string | null,
        updatedAt: string,
        userPostId?: string | null,
      } >,
      nextToken?: string | null,
    } | null,
    name: string,
    cognitoID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    age: number,
    location: string,
    post?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        postTitle: string,
        postBody: string,
        createdAt?: string | null,
        updatedAt: string,
        userPostId?: string | null,
      } >,
      nextToken?: string | null,
    } | null,
    name: string,
    cognitoID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    age: number,
    location: string,
    post?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        postTitle: string,
        postBody: string,
        createdAt?: string | null,
        updatedAt: string,
        userPostId?: string | null,
      } >,
      nextToken?: string | null,
    } | null,
    name: string,
    cognitoID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type TestHttpCallQuery = {
  testHttpCall?:  {
    __typename: "BondCard",
    data?:  {
      __typename: "BondCardData",
      bondName: string,
      previousClose: string,
      currentPrice: string,
      nineThirtyPrice?: string | null,
      tenPrice?: string | null,
      tenThirtyPrice?: string | null,
      elevenPrice?: string | null,
      elevenThirtyPrice?: string | null,
    } | null,
  } | null,
};

export type SearchPostsQueryVariables = {
  filter?: SearchablePostFilterInput | null,
  sort?: Array< SearchablePostSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchablePostAggregationInput | null > | null,
};

export type SearchPostsQuery = {
  searchPosts?:  {
    __typename: "SearchablePostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      postOwner:  {
        __typename: "User",
        id: string,
        age: number,
        location: string,
        name: string,
        cognitoID: string,
        createdAt: string,
        updatedAt: string,
      },
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
      userPostId?: string | null,
    } >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } >,
  } | null,
};

export type SearchUsersQueryVariables = {
  filter?: SearchableUserFilterInput | null,
  sort?: Array< SearchableUserSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchableUserAggregationInput | null > | null,
};

export type SearchUsersQuery = {
  searchUsers?:  {
    __typename: "SearchableUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      age: number,
      location: string,
      post?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      name: string,
      cognitoID: string,
      createdAt: string,
      updatedAt: string,
    } >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } >,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    id: string,
    postOwner:  {
      __typename: "User",
      id: string,
      age: number,
      location: string,
      post?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      name: string,
      cognitoID: string,
      createdAt: string,
      updatedAt: string,
    },
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
    userPostId?: string | null,
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
      postOwner:  {
        __typename: "User",
        id: string,
        age: number,
        location: string,
        name: string,
        cognitoID: string,
        createdAt: string,
        updatedAt: string,
      },
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
      userPostId?: string | null,
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
      postOwner:  {
        __typename: "User",
        id: string,
        age: number,
        location: string,
        name: string,
        cognitoID: string,
        createdAt: string,
        updatedAt: string,
      },
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
      userPostId?: string | null,
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
        postTitle: string,
        postBody: string,
        createdAt?: string | null,
        updatedAt: string,
        userPostId?: string | null,
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
      postOwner:  {
        __typename: "User",
        id: string,
        age: number,
        location: string,
        name: string,
        cognitoID: string,
        createdAt: string,
        updatedAt: string,
      },
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
      userPostId?: string | null,
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
        postTitle: string,
        postBody: string,
        createdAt?: string | null,
        updatedAt: string,
        userPostId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      postLikesId?: string | null,
    } >,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    age: number,
    location: string,
    post?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        postTitle: string,
        postBody: string,
        createdAt?: string | null,
        updatedAt: string,
        userPostId?: string | null,
      } >,
      nextToken?: string | null,
    } | null,
    name: string,
    cognitoID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      age: number,
      location: string,
      post?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      name: string,
      cognitoID: string,
      createdAt: string,
      updatedAt: string,
    } >,
    nextToken?: string | null,
  } | null,
};

export type SubscribeToEventCommentsSubscriptionVariables = {
  postCommentsId: string,
};

export type SubscribeToEventCommentsSubscription = {
  subscribeToEventComments?:  {
    __typename: "Comment",
    id: string,
    commentOwnerId: string,
    commentOwnerUsername: string,
    post?:  {
      __typename: "Post",
      id: string,
      postOwner:  {
        __typename: "User",
        id: string,
        age: number,
        location: string,
        name: string,
        cognitoID: string,
        createdAt: string,
        updatedAt: string,
      },
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
      userPostId?: string | null,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
    postCommentsId?: string | null,
  } | null,
};

export type SubscribeToEventNewPostSubscriptionVariables = {
  userPostId: string,
};

export type SubscribeToEventNewPostSubscription = {
  subscribeToEventNewPost?:  {
    __typename: "Post",
    id: string,
    postOwner:  {
      __typename: "User",
      id: string,
      age: number,
      location: string,
      post?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      name: string,
      cognitoID: string,
      createdAt: string,
      updatedAt: string,
    },
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
    userPostId?: string | null,
  } | null,
};

export type SubscribeToEventDeletePostSubscriptionVariables = {
  userPostId: string,
};

export type SubscribeToEventDeletePostSubscription = {
  subscribeToEventDeletePost?:  {
    __typename: "Post",
    id: string,
    postOwner:  {
      __typename: "User",
      id: string,
      age: number,
      location: string,
      post?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      name: string,
      cognitoID: string,
      createdAt: string,
      updatedAt: string,
    },
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
    userPostId?: string | null,
  } | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    id: string,
    postOwner:  {
      __typename: "User",
      id: string,
      age: number,
      location: string,
      post?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      name: string,
      cognitoID: string,
      createdAt: string,
      updatedAt: string,
    },
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
    userPostId?: string | null,
  } | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
    id: string,
    postOwner:  {
      __typename: "User",
      id: string,
      age: number,
      location: string,
      post?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      name: string,
      cognitoID: string,
      createdAt: string,
      updatedAt: string,
    },
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
    userPostId?: string | null,
  } | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    id: string,
    postOwner:  {
      __typename: "User",
      id: string,
      age: number,
      location: string,
      post?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      name: string,
      cognitoID: string,
      createdAt: string,
      updatedAt: string,
    },
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
    userPostId?: string | null,
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
      postOwner:  {
        __typename: "User",
        id: string,
        age: number,
        location: string,
        name: string,
        cognitoID: string,
        createdAt: string,
        updatedAt: string,
      },
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
      userPostId?: string | null,
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
      postOwner:  {
        __typename: "User",
        id: string,
        age: number,
        location: string,
        name: string,
        cognitoID: string,
        createdAt: string,
        updatedAt: string,
      },
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
      userPostId?: string | null,
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
      postOwner:  {
        __typename: "User",
        id: string,
        age: number,
        location: string,
        name: string,
        cognitoID: string,
        createdAt: string,
        updatedAt: string,
      },
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
      userPostId?: string | null,
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
      postOwner:  {
        __typename: "User",
        id: string,
        age: number,
        location: string,
        name: string,
        cognitoID: string,
        createdAt: string,
        updatedAt: string,
      },
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
      userPostId?: string | null,
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
      postOwner:  {
        __typename: "User",
        id: string,
        age: number,
        location: string,
        name: string,
        cognitoID: string,
        createdAt: string,
        updatedAt: string,
      },
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
      userPostId?: string | null,
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
      postOwner:  {
        __typename: "User",
        id: string,
        age: number,
        location: string,
        name: string,
        cognitoID: string,
        createdAt: string,
        updatedAt: string,
      },
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
      userPostId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    postLikesId?: string | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    age: number,
    location: string,
    post?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        postTitle: string,
        postBody: string,
        createdAt?: string | null,
        updatedAt: string,
        userPostId?: string | null,
      } >,
      nextToken?: string | null,
    } | null,
    name: string,
    cognitoID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    age: number,
    location: string,
    post?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        postTitle: string,
        postBody: string,
        createdAt?: string | null,
        updatedAt: string,
        userPostId?: string | null,
      } >,
      nextToken?: string | null,
    } | null,
    name: string,
    cognitoID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    age: number,
    location: string,
    post?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        postTitle: string,
        postBody: string,
        createdAt?: string | null,
        updatedAt: string,
        userPostId?: string | null,
      } >,
      nextToken?: string | null,
    } | null,
    name: string,
    cognitoID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
