import React, { useContext } from "react";
import { MdDelete, MdAddReaction } from "react-icons/md";
import "../App.css";
import { PostList } from "../store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  return (
    <div className="card post-card" style={{ width: "28rem", margin: "20px" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <MdDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span className="badge text-bg-primary tag" key={tag}>
            {tag}
          </span>
        ))}

        <div className="alert alert-success" role="alert">
          This post has {post.reactions} <MdAddReaction />
        </div>
      </div>
    </div>
  );
};

export default Post;
