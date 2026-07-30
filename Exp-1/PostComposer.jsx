import { useState } from "react";
import platforms from "../data/platforms";
import PlatformSelector from "./PlatformSelector";
import CharacterCounter from "./CharacterCounter";
import ValidationMessage from "./ValidationMessage";
import MediaUpload from "./MediaUpload";

const PostComposer = () => {

  const [post, setPost] = useState("");
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const [image, setImage] = useState(null);

  const validate = () => {

    let errors = [];

    selectedPlatforms.forEach((platform) => {

      const info = platforms.find((p) => p.name === platform);

      if (post.length > info.limit) {

        errors.push(
          `${platform} limit exceeded (${info.limit} characters)`
        );
      }

      if (platform === "Instagram") {

        if (post.includes("http")) {

          errors.push(
            "Instagram captions should avoid clickable links."
          );
        }
      }

      if (platform === "Twitter/X") {

        const hashtags = post.match(/#/g);

        if (hashtags && hashtags.length > 5) {

          errors.push(
            "Twitter/X recommends maximum 5 hashtags."
          );
        }
      }

    });

    return errors;

  };

  const errors = validate();

  return (

    <div className="composer">

      <textarea
        rows="7"
        placeholder="Write your post..."
        value={post}
        onChange={(e) => setPost(e.target.value)}
      />

      <CharacterCounter
        count={post.length}
        selectedPlatforms={selectedPlatforms}
      />

      <PlatformSelector
        selectedPlatforms={selectedPlatforms}
        setSelectedPlatforms={setSelectedPlatforms}
      />

      <MediaUpload image={image} setImage={setImage} />

      <ValidationMessage errors={errors} />

      <button
        disabled={
          errors.length > 0 || selectedPlatforms.length === 0
        }
      >
        Publish
      </button>

    </div>

  );

};

export default PostComposer;
