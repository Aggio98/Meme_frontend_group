import "./homePage.css";
import React, { useState, createRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postMeme } from "../../store/memes/thunks";
import { Text } from "../../components";
import { useForm } from "react-hook-form";
import { selectToken } from "../../store/user/selectors";
import { exportComponentAsJPEG } from "react-component-export-image";
import { Container, Title, Button, Input } from "../../styled";

const HomePage = () => {
  const dispatch = useDispatch();
  const [image, setImage] = useState("");
  const [count, setCount] = useState(0);
  const [uploadedImage, setUploadedImage] = useState("");
  const token = useSelector(selectToken);
  const memeRef = createRef();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    //Send this information inside the dispatch with data.top or data.bottom
    dispatch(postMeme(uploadedImage));
  };

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "pvsnqwpt");

    // console.log(uploadImage);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dmdxlz22b/image/upload",
      { method: "POST", body: data }
    );
    const file = await res.json();
    console.log("file", file);
    setUploadedImage(file.url); //put the url in local state, next step you can send it to the backend
  };

  const addText = () => {
    setCount(count + 1);
  };

  return (
    <div>
      {!token ? (
        <div className="homepage">
          <Title>Login to make your own MEhMEh</Title>
          <iframe
            src="https://giphy.com/embed/oBYB0gqUy3xxBf89aT"
            width="480"
            height="366"
          ></iframe>
        </div>
      ) : (
        <Container>
          <Title>Let's MEh-genie !</Title>
          <div className="genieForm">
            <div style={{ margin: 20 }}>
              <input
                className="genieFormInput"
                placeholder="1. Add your image url here"
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
            <div style={{ margin: 20 }} ref={memeRef}>
              {image && (
                <img src={image} alt="preview" style={{ width: "300px" }} />
              )}

              {Array(count)
                .fill(0)
                .map((e) => (
                  <Text />
                ))}
            </div>
            <div style={{ margin: 20 }}>
              <button className="genieFormButton" onClick={addText}>
                2. Add text
              </button>
            </div>
            <div style={{ margin: 20 }}>
              <button
                className="genieFormButton"
                variant="success"
                onClick={(e) => exportComponentAsJPEG(memeRef)}
              >
                3. Download
              </button>
            </div>
            <div style={{ margin: 20 }} className="step4">
              4. Upload the downloaded image here{" "}
              <input
                className="step4Input"
                type="file"
                onChange={uploadImage}
              />
            </div>
            <button className="genieFormButton" onClick={onSubmit}>
              5. Create MEHMEH
            </button>
          </div>
        </Container>
      )}
    </div>
  );
};

export { HomePage };
