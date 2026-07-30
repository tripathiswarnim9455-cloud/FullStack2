import platforms from "../data/platforms";

const CharacterCounter = ({
  count,
  selectedPlatforms,
}) => {

  return (

    <div>

      {selectedPlatforms.map((platform) => {

        const info = platforms.find(
          (p) => p.name === platform
        );

        return (

          <p key={platform}>

            {platform}: {count}/{info.limit}

          </p>

        );

      })}

    </div>

  );

};

export default CharacterCounter;
