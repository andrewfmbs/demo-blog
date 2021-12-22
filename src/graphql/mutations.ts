/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
      id
      postOwner {
        id
        age
        location
        post {
          nextToken
        }
        name
        cognitoID
        createdAt
        updatedAt
      }
      postTitle
      postBody
      createdAt
      comments {
        items {
          id
          commentOwnerId
          commentOwnerUsername
          content
          createdAt
          updatedAt
          postCommentsId
        }
        nextToken
      }
      likes {
        items {
          id
          numberLikes
          likeOwnerId
          likeOwnerUsername
          createdAt
          updatedAt
          postLikesId
        }
        nextToken
      }
      updatedAt
      userPostId
    }
  }
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
      id
      postOwner {
        id
        age
        location
        post {
          nextToken
        }
        name
        cognitoID
        createdAt
        updatedAt
      }
      postTitle
      postBody
      createdAt
      comments {
        items {
          id
          commentOwnerId
          commentOwnerUsername
          content
          createdAt
          updatedAt
          postCommentsId
        }
        nextToken
      }
      likes {
        items {
          id
          numberLikes
          likeOwnerId
          likeOwnerUsername
          createdAt
          updatedAt
          postLikesId
        }
        nextToken
      }
      updatedAt
      userPostId
    }
  }
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
      id
      postOwner {
        id
        age
        location
        post {
          nextToken
        }
        name
        cognitoID
        createdAt
        updatedAt
      }
      postTitle
      postBody
      createdAt
      comments {
        items {
          id
          commentOwnerId
          commentOwnerUsername
          content
          createdAt
          updatedAt
          postCommentsId
        }
        nextToken
      }
      likes {
        items {
          id
          numberLikes
          likeOwnerId
          likeOwnerUsername
          createdAt
          updatedAt
          postLikesId
        }
        nextToken
      }
      updatedAt
      userPostId
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      commentOwnerId
      commentOwnerUsername
      post {
        id
        postOwner {
          id
          age
          location
          name
          cognitoID
          createdAt
          updatedAt
        }
        postTitle
        postBody
        createdAt
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        updatedAt
        userPostId
      }
      content
      createdAt
      updatedAt
      postCommentsId
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      id
      commentOwnerId
      commentOwnerUsername
      post {
        id
        postOwner {
          id
          age
          location
          name
          cognitoID
          createdAt
          updatedAt
        }
        postTitle
        postBody
        createdAt
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        updatedAt
        userPostId
      }
      content
      createdAt
      updatedAt
      postCommentsId
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      id
      commentOwnerId
      commentOwnerUsername
      post {
        id
        postOwner {
          id
          age
          location
          name
          cognitoID
          createdAt
          updatedAt
        }
        postTitle
        postBody
        createdAt
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        updatedAt
        userPostId
      }
      content
      createdAt
      updatedAt
      postCommentsId
    }
  }
`;
export const createLike = /* GraphQL */ `
  mutation CreateLike(
    $input: CreateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    createLike(input: $input, condition: $condition) {
      id
      numberLikes
      likeOwnerId
      likeOwnerUsername
      post {
        id
        postOwner {
          id
          age
          location
          name
          cognitoID
          createdAt
          updatedAt
        }
        postTitle
        postBody
        createdAt
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        updatedAt
        userPostId
      }
      createdAt
      updatedAt
      postLikesId
    }
  }
`;
export const updateLike = /* GraphQL */ `
  mutation UpdateLike(
    $input: UpdateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    updateLike(input: $input, condition: $condition) {
      id
      numberLikes
      likeOwnerId
      likeOwnerUsername
      post {
        id
        postOwner {
          id
          age
          location
          name
          cognitoID
          createdAt
          updatedAt
        }
        postTitle
        postBody
        createdAt
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        updatedAt
        userPostId
      }
      createdAt
      updatedAt
      postLikesId
    }
  }
`;
export const deleteLike = /* GraphQL */ `
  mutation DeleteLike(
    $input: DeleteLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    deleteLike(input: $input, condition: $condition) {
      id
      numberLikes
      likeOwnerId
      likeOwnerUsername
      post {
        id
        postOwner {
          id
          age
          location
          name
          cognitoID
          createdAt
          updatedAt
        }
        postTitle
        postBody
        createdAt
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        updatedAt
        userPostId
      }
      createdAt
      updatedAt
      postLikesId
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      age
      location
      post {
        items {
          id
          postTitle
          postBody
          createdAt
          updatedAt
          userPostId
        }
        nextToken
      }
      name
      cognitoID
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      age
      location
      post {
        items {
          id
          postTitle
          postBody
          createdAt
          updatedAt
          userPostId
        }
        nextToken
      }
      name
      cognitoID
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      age
      location
      post {
        items {
          id
          postTitle
          postBody
          createdAt
          updatedAt
          userPostId
        }
        nextToken
      }
      name
      cognitoID
      createdAt
      updatedAt
    }
  }
`;
