import React, { useContext, useRef } from "react";
import "../App.css";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const titleElement = useRef();
  const bodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmt = (event) => {
    // values nikalne k liye taki addpost me dal ske
    event.preventDefault();
    // event liya taki prevent default kar ske jiska mtlb hota h ki apn uski normal kam ko rok kar
    // apna assign kiya hua kaam usse krwaye
    const userId = userIdElement.current.value;
    // current value means jab submit button dbaya gya tab jo jo inputs me values thi vo
    // usedId ke paas chali jaye
    const title = titleElement.current.value;
    const body = bodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");
    //giving space a

    addPost(userId, title, body, reactions, tags);
    // this function add new post based on
    userIdElement.current.value = "";
    titleElement.current.value = "";
    bodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";
  };

  return (
    <div className="form-edit-div">
      <form className="form-edit" onSubmit={handleSubmt}>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            User Id
          </label>
          <input
            type="text"
            ref={userIdElement}
            className="form-control"
            id="userId"
            aria-describedby="emailHelp"
            placeholder="Enter Your User i'd here"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            ref={titleElement}
            aria-describedby="emailHelp"
            placeholder="How are you feeling today"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post content
          </label>
          <textarea
            type="text"
            ref={bodyElement}
            className="form-control"
            id="body"
            aria-describedby="emailHelp"
            placeholder="Tell us more about it "
          />
        </div>

        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">
            Reactions
          </label>
          <input
            type="text"
            ref={reactionsElement}
            className="form-control"
            id="reactions"
            aria-describedby="emailHelp"
            placeholder="How many people reacted to this post "
          />
        </div>

        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Tags
          </label>
          <input
            type="text"
            className="form-control"
            ref={tagsElement}
            id="tags"
            aria-describedby="emailHelp"
            placeholder="Enter tags using space  "
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
