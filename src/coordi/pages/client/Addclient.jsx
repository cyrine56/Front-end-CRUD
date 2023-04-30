import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddIntervention() {
  let navigate = useNavigate();

  const [Client, setClient] = useState({
    nom: "",
    adresse: "",
    contact: "",
    telephone: "",   
  });

  const { nom, adresse, contact  ,telephone , } = Client;

  const onInputChange = (e) => {
    setClient({ ...Client, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/customs", Client);
    navigate("/dash/clients");//c'est pour nous diriger vers la page afficher equipement si le nouv equ est ajouté avec succée
  };

  return (
      <div className="container-fluid">
      <div className="row">
        <div className="col-md-8 offset-md-3 border rounded p-4  mt-5 shadow">
          <h2 className="text-center mb-5">Ajouter un nouveau client</h2>

          <form onSubmit={(e) => onSubmit(e)}>
  <div className="mb- row">
    <label htmlFor="Name" className="col-sm-3 col-form-label">
    Client
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
    Adresse
    </label>
    <div className="col-sm-9">
      <input
        type={"text"}
        className="form-control"
        placeholder="saisir l'adresse"
        name="adresse"
        value={adresse}
        onChange={(e) => onInputChange(e)}
      />
    </div>
  </div>
  <div className="mb-1 row">
    <label htmlFor="Email" className="col-sm-3 col-form-label">
    contact
    </label>
    <div className="col-sm-9">
      <input
        type={"text"}
        className="form-control"
        placeholder="saisir le contact"
        name="nomt"
        value={nom}
        onChange={(e) => onInputChange(e)}
      />
    </div>
  </div>
  <div className="mb-1 row">
  <label htmlFor="Email" className="col-sm-3 col-form-label">
  telephone
  </label>
  <div className="col-sm-9">
    <input
      type={"text"} /* Modifier le type de l'input à "date" */
      className="form-control"
      placeholder="saisir le telephone"
      name="telephone"
      value={telephone}
      onChange={(e) => onInputChange(e)}
    />
  </div>
</div>



  <div className="mb-1">
    <button type="submit" className="btn btn-outline-primary">
      ajouter 
    </button>
    <Link className="btn btn-outline-danger mx-2" to="/dash/equipement">
      annuler
    </Link>
  </div>
</form>

        </div>
      </div>
    </div>
  );
}
