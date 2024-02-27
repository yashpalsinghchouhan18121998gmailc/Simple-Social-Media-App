import React, { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import "../App.css";
import WelcomeMsg from "./WelcomeMsg";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);

  const handleOnClick = async () => {
    const api = await fetch("https://dummyjson.com/posts");
    const newapi = await api.json();
    const postLists = newapi.posts;
    addInitialPosts(postLists);
    // console.log(postLists);
    // newapi.posts.map((posts) => {
    //   // console.log(posts);  sari posts nikl gyi
    // });
    // return postList;
    // console.log(newapi.posts[0]);
  };

  return (
    <div className="flx-postlist">
      {postList.length === 0 && <WelcomeMsg handleOnClick={handleOnClick} />}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
