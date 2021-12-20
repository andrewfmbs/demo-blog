/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const subscribeToEventComments = /* GraphQL */ `
  subscription SubscribeToEventComments($postCommentsId: String!) {
    subscribeToEventComments(postCommentsId: $postCommentsId) {
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
export const subscribeToEventNewPost = /* GraphQL */ `
  subscription SubscribeToEventNewPost($userPostId: String!) {
    subscribeToEventNewPost(userPostId: $userPostId) {
      id
      postOwner {
        id
        age
        location
        post {
          nextToken
        }
        name
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
export const subscribeToEventDeletePost = /* GraphQL */ `
  subscription SubscribeToEventDeletePost($userPostId: String!) {
    subscribeToEventDeletePost(userPostId: $userPostId) {
      id
      postOwner {
        id
        age
        location
        post {
          nextToken
        }
        name
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
      id
      postOwner {
        id
        age
        location
        post {
          nextToken
        }
        name
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
      id
      postOwner {
        id
        age
        location
        post {
          nextToken
        }
        name
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
      id
      postOwner {
        id
        age
        location
        post {
          nextToken
        }
        name
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
export const onCreateLike = /* GraphQL */ `
  subscription OnCreateLike {
    onCreateLike {
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
export const onUpdateLike = /* GraphQL */ `
  subscription OnUpdateLike {
    onUpdateLike {
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
export const onDeleteLike = /* GraphQL */ `
  subscription OnDeleteLike {
    onDeleteLike {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
      createdAt
      updatedAt
    }
  }
`;
