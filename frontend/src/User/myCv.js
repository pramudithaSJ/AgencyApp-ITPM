import React from "react";
import axios from "axios";

const MyCv = () => {
  const [selectedFile, setSelectedFile] = React.useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("cv", selectedFile);
    const userId = localStorage.getItem("id");

    axios
      .post(`http://localhost:8020/cv/upload-cv`, {
        userId: userId,
        cv: formData,
      })
      .then((response) => {
        console.log(response.data); // Handle the response data
        alert("CV uploaded successfully.");
      })
      .catch((error) => {
        console.error(error);
        alert("An error occurred while uploading the CV.");
      });
  };
  return (
    <section>
      <div className="font-bold text-lg">My Cv</div>
      <div>
        <h1>Upload CV</h1>
        <input
          type="file"
          name="cv"
          accept="application/pdf"
          onChange={handleFileChange}
        />
        <button onClick={handleUpload}>Upload</button>
      </div>
    </section>
  );
};

export default MyCv;
