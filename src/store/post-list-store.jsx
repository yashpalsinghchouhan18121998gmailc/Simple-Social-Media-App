import { createContext, useEffect, useReducer } from "react";

export const PostList = createContext({
  // here we are just giving the default structure for auto completeion //
  postList: [],
  addPost: () => {},
  addInitialPosts: () => {},
  deletePost: () => {},
});

const postListReducer = (CurrPostList, action) => {
  // reducer function which hanldes the change in using action
  let newPostList = CurrPostList;

  if (action.type === "DELETE_POST") {
    newPostList = CurrPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_INITIAL_POST") {
    newPostList = action.payload.posts;
    // console.log(newPostList);
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...CurrPostList];
  }

  return newPostList;
};

const PostListProvider = ({ children }) => {
  // wrapping function which wraps childrens
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    [] // it can also be said as current postlist in in postlist reducer function
  );

  const addPost = (userId, title, body, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: title,
        body: body,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };

  // useEffect(() => {
  //   console.log("hiiiii");
  //   async () => {
  //     const api = await fetch("https://dummyjson.com/posts");
  //     const newapi = await api.json();
  //     // const postLists = newapi.posts;
  //     const posts = newapi.posts;
  //     console.log("hiiiii");
  //     dispatchPostList({
  //       type: "ADD_INITIAL_POST",
  //       payload: {
  //         posts,
  //       },
  //     });
  //   };
  // });

  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POST",
      payload: {
        posts,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({ type: "DELETE_POST", payload: { postId } });
  };

  return (
    <PostList.Provider
      value={{ postList, addPost, deletePost, addInitialPosts }}
    >
      {children}
    </PostList.Provider>
  );
};

// const DEFAULT_POST_LIST = [
//   {
//     id: "1",
//     title: "Going Mumbai",
//     body: "hello i am going to mumbai ",
//     reactions: 2,
//     userId: "user-9",
//     tags: ["vacation", "mumbai", "enjoying"],
//   },
//   {
//     id: "2",
//     title: "weather is great",
//     body: "hello this is amazing day ",
//     reactions: 4,
//     userId: "user-8",
//     tags: ["vacation", "mumbai", "enjoying"],
//   },
// ];

export default PostListProvider;
