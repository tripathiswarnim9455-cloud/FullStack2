const ValidationMessage = ({ errors }) => {

  if (errors.length === 0) {

    return (
      <p className="success">
        ✔ Ready to Publish
      </p>
    );

  }

  return (

    <div className="error">

      {errors.map((error, index) => (

        <p key={index}>{error}</p>

      ))}

    </div>

  );

};

export default ValidationMessage;