import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddIntervention() {
  let navigate = useNavigate();

  const [Intervention, setIntervention] = useState({
    date: "",
    heure: "",
    client: "",
    modelMachine: "",   
    panne: "",
    technicien: "",
    dateDebut: "",
    heureDebut: "",
    dateFin: "",
    heureFin: "",
    numFiche: "",
  });

  const { date, heure, client  ,modelMachine ,panne ,technicien ,dateDebut , heureDebut ,dateFin ,heureFin ,numFiche , } = Intervention;

  const onInputChange = (e) => {
    setIntervention({ ...Intervention, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/interv", Intervention);
    navigate("/coord/interv");//c'est pour nous diriger vers la page afficher equipement si le nouv equ est ajouté avec succée
  };

  return (
      <div className="container-fluid">
      <div className="row">
        <div className="col-md-8 offset-md-3 border rounded p-4  mt-1 shadow">
          <h2 className="text-center mb-2">Ajouter une nouvelle intervention</h2>

          <form onSubmit={(e) => onSubmit(e)}>
  <div className="mb- row">
    <label htmlFor="Name" className="col-sm-3 col-form-label">
    date
    </label>
    <div className="col-sm-9">
      <input
        type={"date"}
        className="form-control"
        placeholder="saisir la date"
        name="date"
        value={date}
        onChange={(e) => onInputChange(e)}
      />
    </div>
  </div>
  <div className="mb-1 row">
    <label htmlFor="Username" className="col-sm-3 col-form-label">
    heure
    </label>
    <div className="col-sm-9">
      <input
        type={"text"}
        className="form-control"
        placeholder="saisir l'heure"
        name="heure"
        value={heure}
        onChange={(e) => onInputChange(e)}
      />
    </div>
  </div>
  <div className="mb-1 row">
    <label htmlFor="Email" className="col-sm-3 col-form-label">
    client
    </label>
    <div className="col-sm-9">
      <input
        type={"text"}
        className="form-control"
        placeholder="saisir le client"
        name="client"
        value={client}
        onChange={(e) => onInputChange(e)}
      />
    </div>
  </div>
  <div className="mb-1 row">
  <label htmlFor="Email" className="col-sm-3 col-form-label">
  modelMachine
  </label>
  <div className="col-sm-9">
    <input
      type={"text"} /* Modifier le type de l'input à "date" */
      className="form-control"
      placeholder="saisir le modelMachine"
      name="modelMachine"
      value={modelMachine}
      onChange={(e) => onInputChange(e)}
    />
  </div>
</div>

<div className="mb-1 row">
  <label htmlFor="Email" className="col-sm-3 col-form-label">
  panne
  </label>
  <div className="col-sm-9">
    <input
      type={"text"} /* Modifier le type de l'input à "date" */
      className="form-control"
      placeholder="saisir la panne"
      name="panne"
      value={panne}
      onChange={(e) => onInputChange(e)}
    />
  </div>
</div>

<div className="mb-1 row">
  <label htmlFor="Email" className="col-sm-3 col-form-label">
  technicien
  </label>
  <div className="col-sm-9">
    <input
      type={"text"} /* Modifier le type de l'input à "date" */
      className="form-control"
      placeholder="saisir le technicien"
      name="technicien"
      value={technicien}
      onChange={(e) => onInputChange(e)}
    />
  </div>
</div>

<div className="mb-1 row">
  <label htmlFor="Email" className="col-sm-3 col-form-label">
  dateDebut  </label>
  <div className="col-sm-9">
    <input
      type={"date"} /* Modifier le type de l'input à "date" */
      className="form-control"
      name="dateDebut"
      value={dateDebut}
      onChange={(e) => onInputChange(e)}
    />
  </div>
</div>

  <div className="mb-1 row">
    <label htmlFor="Email" className="col-sm-3 col-form-label">
    heureDebut
    </label>
    <div className="col-sm-9">
      <input
        type={"text"}
        className="form-control"
        placeholder="Saisir le heureDebut"
        name="heureDebut"
        value={heureDebut}
        onChange={(e) => onInputChange(e)}
      />
    </div>
  </div>
  <div className="mb-1 row">
    <label htmlFor="Email" className="col-sm-3 col-form-label">
    date Fin
    </label>
    <div className="col-sm-9">
      <input
        type={"date"}
        className="form-control"
        placeholder="Saaisir le dateFIN"
        name="dateFin"
        value={dateFin}
        onChange={(e) => onInputChange(e)}
      />
    </div>
  </div>
  <div className="mb-1 row">
    <label htmlFor="Email" className="col-sm-3 col-form-label">
      Heure fin
    </label>
    <div className="col-sm-9">
      <input
        type={"text"}
        className="form-control"
        placeholder="Saisir le model écran"
        name="heureFin"
        value={heureFin}
        onChange={(e) => onInputChange(e)}
      />
    </div>
  </div>
  <div className="mb-1 row">
    <label htmlFor="Email" className="col-sm-3 col-form-label">
      Numéro fiche
    </label>
    <div className="col-sm-9">
      <input
        type={"text"}
        className="form-control"
        placeholder="Saisir le mnuméro de fiche"
        name="numFiche"
        value={numFiche}
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
