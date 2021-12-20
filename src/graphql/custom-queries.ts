export const PostsPaginated = (pageSize: number, page: number) => {
  return `
        query listPosts(
            $filter: ModelPostFilterInput
            $limit: Int
            $nextToken: String
        ) {
            listPosts(first: ${pageSize}, offset: ${
    page * pageSize
  }, filter: $filter, limit: $limit, nextToken: $nextToken) {
                items {
                    id
                    postOwnerId
                    postOwnerUsername
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
                }
                nextToken
            }
        }
    `;
};
