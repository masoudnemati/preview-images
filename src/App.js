import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);

    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });

    setSelectedImages((previousImages) => previousImages.concat(imagesArray));
  };

  return (
    <section>
      <label>
        + Add Images
        <br />
        <span> up to 10 images</span>
        <input
          name="images"
          type="file"
          onChange={onSelectFile}
          accept="image/png, image/jpeg, image/webp"
          multiple
        />
      </label>
      <br />
      {selectedImages.length > 0 &&
        (selectedImages.length > 10 ? (
          <p className="error">
            You can't upload more than 10 images! <br />
            <span>
              please delete
              <b> {selectedImages.length - 10} </b>
              of them
            </span>
          </p>
        ) : (
          <button
            className="upload-btn"
            onClick={() => {
              console.log("UPLOAD IMAGES");
            }}
          >
            UPLOAD {selectedImages.length} IMAGE
            {selectedImages.length === 1 ? "" : "S"}
          </button>
        ))}
      <div className="images">
        {selectedImages &&
          selectedImages.map((image, index) => {
            return (
              <div key={image} className="image">
                <img src={image} alt="" height="200" />
                <button
                  key={image}
                  onClick={() =>
                    setSelectedImages(selectedImages.filter((e) => e !== image))
                  }
                >
                  delete image
                </button>
                <p>{index + 1}</p>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default App;

// 1. project setup
// 2. console.log the selected images and show FileList
// 3. Display images in the browser
// 4. Fix problems
