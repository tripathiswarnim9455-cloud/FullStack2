const MediaUpload = ({ image, setImage }) => {

  return (

    <div>

      <h3>Upload Image</h3>

      <input
        type="file"
        accept="image/*"
        onChange={(e) =>
          setImage(e.target.files[0])
        }
      />

      {image && (

        <p>

          Selected:
          {" "}
          {image.name}

        </p>

      )}

    </div>

  );

};

export default MediaUpload;