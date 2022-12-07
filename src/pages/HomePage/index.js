import "./homePage.css";
import React, { useState, createRef } from "react";
import { useDispatch } from "react-redux";
import { postMeme } from "../../store/memes/thunks";
import { Text } from "../../components";
import { useForm } from "react-hook-form";
import { exportComponentAsJPEG } from "react-component-export-image";
import { Container, Title, Button } from "../../styled";

const HomePage = () => {
  const dispatch = useDispatch();
  const [image, setImage] = useState("");
  const [count, setCount] = useState(0);

  const memeRef = createRef();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    //Send this information inside the dispatch with data.top or data.bottom
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
    <Container>
      <Title>Homepage</Title>
      <div ref={memeRef}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            Select an Image <input type="file" onChange={uploadImage} />
          </label>
          <img
            src={
              image
                ? image
                : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
            }
            alt="preview"
            style={{ width: "300px" }}
          />
          {Array(count)
            .fill(0)
            .map((e) => (
              <Text />
            ))}

          <Button type="submit">Create MEHMEH</Button>
        </form>
        <Button onClick={addText}>add text</Button>
        <Button
          variant="success"
          onClick={(e) => exportComponentAsJPEG(memeRef)}
        >
          Download
        </Button>
      </div>
    </Container>
  );
};

export { HomePage };
