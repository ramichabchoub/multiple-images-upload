import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createMagasin } from "./redux/magasinSlice";

function CreateMagasin() {
  const [rs, setRs] = useState("");
  const [adresse, setAdresse] = useState("");
  const [email, setEmail] = useState("");
  const [telephone_1, setTelephone_1] = useState("");
  const [ville, setVille] = useState("");
  const [logo, setLogo] = useState("");
  const [images, setImages] = useState([]);
  const dispatch = useDispatch();
  const status = useSelector((state) => state.magasin.status);

  // handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // create form data object to send the files
    const formData = new FormData();
    formData.append("rs", rs);
    formData.append("adresse", adresse);
    formData.append("email", email);
    formData.append("telephone_1", telephone_1);
    formData.append("ville", ville);
    formData.append("logo", logo);
    console.log(logo);
    console.log(images);
    for (let i = 0; i < images.length; i++) {
      console.log(images[i]);
      formData.append("images", images[i]);
    }
    // dispatch the createMagasin async thunk
    try {
      await dispatch(createMagasin(formData));
      console.log("Magasin created successfully");
    } catch (err) {
      console.log("Error creating magasin", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="RS"
        value={rs}
        onChange={(e) => setRs(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Adresse"
        value={adresse}
        onChange={(e) => setAdresse(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="tel"
        placeholder="Telephone"
        value={telephone_1}
        onChange={(e) => setTelephone_1(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Ville"
        value={ville}
        onChange={(e) => setVille(e.target.value)}
        required
      />
      <input
        type="file"
        required
        onChange={(e) => setLogo(e.target.files[0])}
      />
      <input
        type="file"
        multiple
        // required
        onChange={(e) => setImages(e.target.files)}
      />
      <br />
      <button type="submit">Create Magasin</button>

      {status === "pending" && <p>Loading...</p>}
      {status === "rejected" && <p>Error creating magasin</p>}
      {status === "fulfilled" && <p>Magasin created successfully</p>}
    </form>
  );
}

export default CreateMagasin;
