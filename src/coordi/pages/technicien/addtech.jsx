import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddIntervention() {
  let navigate = useNavigate();

  const [tech, setTechnicien] = useState({
    nom: "",
    prénom: "",
    gsm: "",
    zone: "",   
  });

  const { nom, prénom, gsm  ,zone , } = tech;

  const onInputChange = (e) => {
    setTechnicien({ ...tech, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/tech", tech);
    navigate("/coord/technicien");//c'est pour nous diriger vers la page afficher equipement si le nouv equ est ajouté avec succée
  };

  return (
      <div className="container-fluid">
      <div className="row">
        <div className="col-md-8 offset-md-3 border rounded p-4  mt-5 shadow">
          <h2 className="text-center mb-5">Ajouter un nouveau technicien</h2>

          <form onSubmit={(e) => onSubmit(e)}>
  <div className="mb- row">
    <label htmlFor="Name" className="col-sm-3 col-form-label">
    Nom
    </label>
    <div className="col-sm-9">
      <input
        type={"text"}
        className="form-control"
        placeholder="saisir le nom du client"
        name="nom"
        value={nom}
        onChange={(e) => onInputChange(e)}
      />
    </div>
  </div>
  <div className="mb-1 row">
    <label htmlFor="Username" className="col-sm-3 col-form-label">
    Prénom
    </label>
    <div className="col-sm-9">
      <input
        type={"text"}
        className="form-control"
        placeholder="saisir l'adresse"
        name="prénom"
        value={prénom}
        onChange={(e) => onInputChange(e)}
      />
    </div>
  </div>
  <div className="mb-1 row">
    <label htmlFor="Email" className="col-sm-3 col-form-label">
    Numéro GSM
    </label>
    <div className="col-sm-9">
      <input
        type={"text"}
        className="form-control"
        placeholder="saisir le contact"
        name="gsm"
        value={gsm}
        onChange={(e) => onInputChange(e)}
      />
    </div>
  </div>
  <div className="mb-1 row">
  <label htmlFor="Email" className="col-sm-3 col-form-label">
    Zone
  </label>
  <div className="col-sm-9">
    <input
      type={"text"} 
      className="form-control"
      placeholder="saisir le telephone"
      name="zone"
      value={zone}
      onChange={(e) => onInputChange(e)}
    />
  </div>
</div>



  <div className="mb-1">
    <button type="submit" className="btn btn-outline-primary">
      ajouter 
    </button>
    <Link className="btn btn-outline-danger mx-2" to="/dash/client">
      annuler
    </Link>
  </div>
</form>

        </div>
      </div>
    </div>
  );
}
