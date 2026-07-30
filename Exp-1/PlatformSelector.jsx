import platforms from "../data/platforms";

const PlatformSelector = ({
  selectedPlatforms,
  setSelectedPlatforms,
}) => {

  const toggle = (name) => {

    if (selectedPlatforms.includes(name)) {

      setSelectedPlatforms(
        selectedPlatforms.filter((p) => p !== name)
      );

    } else {

      setSelectedPlatforms([
        ...selectedPlatforms,
        name,
      ]);

    }

  };

  return (

    <div>

      <h3>Select Platforms</h3>

      {platforms.map((platform) => (

        <label key={platform.name}>

          <input
            type="checkbox"
            checked={selectedPlatforms.includes(platform.name)}
            onChange={() => toggle(platform.name)}
          />

          {platform.name}

        </label>

      ))}

    </div>

  );

};

export default PlatformSelector;
