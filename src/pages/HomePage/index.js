import "./homePage.css";
import React, { useState, createRef } from "react";
import { useDispatch } from "react-redux";
import { postMeme } from "../../store/memes/thunks";
import { Text } from "../../components";
import { useForm } from "react-hook-form";
import { exportComponentAsJPEG } from "react-component-export-image";

const HomePage = () => {
  const dispatch = useDispatch();
  const [image, setImage] = useState("");
  const [count, setCount] = useState(0);
  const [uploadedImage, setUploadedImage] = useState("");

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
      <h1>Homepage</h1>
      <div>
        <div style={{ margin: 20 }}>
          <b>1.</b> Add image url to start editing:{" "}
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        {/* <form onSubmit={handleSubmit(onSubmit)}> */}
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
        {/* </form> */}
        <div style={{ margin: 20 }}>
          <button onClick={addText}>2. add text</button>
        </div>
        <div style={{ margin: 20 }}>
          <button
            variant="success"
            onClick={(e) => exportComponentAsJPEG(memeRef)}
          >
            3. Download
          </button>
        </div>
        <div style={{ margin: 20 }}>
          <label>
            4. Save image to Database:{" "}
            <input type="file" onChange={uploadImage} />
          </label>
        </div>
        <button onClick={onSubmit}>5. Create MEHMEH</button>
      </div>
    </div>
  );
};

export { HomePage };
