import "./homePage.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postMeme } from "../../store/memes/thunks";
import Text from "../../components/Text";

const HomePage = () => {
  const [image, setImage] = useState();
  const [count, setCount] = useState(0);

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(postMeme(image));
  };

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "pvsnqwpt");

    console.log(uploadImage);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dmdxlz22b/image/upload",
      { method: "POST", body: data }
    );
    const file = await res.json();
    console.log("file", file);
    setImage(file.url); //put the url in local state, next step you can send it to the backend
  };
  const addText = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>Homepage</h1>
      <form onSubmit={handleSubmit}>
        <p>
          <label>
            Image: <input type="file" onChange={uploadImage} />
          </label>
        </p>

        <img
          src={
            image
              ? image
              : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
          }
          alt="preview"
          style={{ width: "200px" }}
        />
        {Array(count)
          .fill(0)
          .map((e) => (
            <Text />
          ))}
        <button onClick={addText}>add text</button>
      </form>
      <button type="submit">Create MEHMEH</button>
    </div>
  );
};

export { HomePage };
