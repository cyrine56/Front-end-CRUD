import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddEquipement() {
  let navigate = useNavigate();

  const [Equipement, setEquipement] = useState({
    codeb: "",
    bur: "",
    numSerieGAB: "",
    dateVisitepre: "",   
    dateLiv: "",
    dateMiseEnService: "",
    dateFormation: "",
    telephone: "",
    modelPC: "",
    modelEcran: "",
    os: "",
    paramReseau: "",
    tech: "",
    fiche: "",
    observation: "",
    etat: "",
    dateReception: "",
  });

  const { codeb, bur, numSerieGAB  ,dateVisitepre ,dateLiv ,dateMiseEnService ,dateFormation , telephone ,modelPC ,modelEcran ,os ,paramReseau , tech ,fiche ,observation,etat,dateReception, } = Equipement;

  const onInputChange = (e) => {
    setEquipement({ ...Equipement, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/Equ", Equipement);
    navigate("/dash/equipement");//c'est pour nous diriger vers la page afficher equipement si le nouv equ est ajouté avec succée
  };

  return (
      <div className="container-fluid">
      <div className="row">
        <div className="col-md-8 offset-md-3 border rounded p-4  mt-1 shadow">
          <h2 className="text-center m-2">Ajouter un nouveau equipement</h2>

          <form onSubmit={(e) => onSubmit(e)}>
  <div className="mb- row">
    <label htmlFor="Name" className="col-sm-3 col-form-label">
      Code bureau
    </label>
    <div className="col-sm-9">
      <input
        type={"text"}
        className="form-control"
        placeholder="saisir le code bureau"
        name="codeb"
        value={codeb}
        onChange={(e) => onInputChange(e)}
      />
    </div>
  </div>
  <div className="mb-1 row">
    <label htmlFor="Username" className="col-sm-3 col-form-label">
      bureau
    </label>
    <div className="col-sm-9">
      <input
        type={"text"}
        className="form-control"
        placeholder="saisir le bureau"
        name="bur"
        value={bur}
        onChange={(e) => onInputChange(e)}
      />
    </div>
  </div>
  <div className="mb-1 row">
    <label htmlFor="Email" className="col-sm-3 col-form-label">
      numéro Serie GAB
    </label>
    <div className="col-sm-9">
      <input
        type={"text"}
        className="form-control"
        placeholder="saisir le numéro de série GAB"
        name="numSerieGAB"
        value={numSerieGAB}
        onChange={(e) => onInputChange(e)}
      />
    </div>
  </div>
  <div className="mb-1 row">
  <label htmlFor="Email" className="col-sm-3 col-form-label">
    visite préliminaire
  </label>
  <div className="col-sm-9">
    <input
      type={"date"} /* Modifier le type de l'input à "date" */
      className="form-control"
      placeholder="saisir la date de visite préliminaire"
      name="dateVisitepre"
      value={dateVisitepre}
      onChange={(e) => onInputChange(e)}
    />
  </div>
</div>

<div className="mb-1 row">
  <label htmlFor="Email" className="col-sm-3 col-form-label">
     livraison
  </label>
  <div className="col-sm-9">
    <input
      type={"date"} /* Modifier le type de l'input à "date" */
      className="form-control"
      name="dateLiv"
      value={dateLiv}
      onChange={(e) => onInputChange(e)}
    />
  </div>
</div>

<div className="mb-1 row">
  <label htmlFor="Email" className="col-sm-3 col-form-label">
    Mise en service
  </label>
  <div className="col-sm-9">
    <input
      type={"date"} /* Modifier le type de l'input à "date" */
      className="form-control"
      name="dateMiseEnService"
      value={dateMiseEnService}
      onChange={(e) => onInputChange(e)}
    />
  </div>
</div>

<div className="mb-1 row">
  <label htmlFor="Email" className="col-sm-3 col-form-label">
Formation  </label>
  <div className="col-sm-9">
    <input
      type={"date"} /* Modifier le type de l'input à "date" */
      className="form-control"
      name="dateFormation"
      value={dateFormation}
      onChange={(e) => onInputChange(e)}
    />
  </div>
</div>

  <div className="mb-1 row">
    <label htmlFor="Email" className="col-sm-3 col-form-label">
      Téléphone
    </label>
    <div className="col-sm-9">
      <input
        type={"text"}
        className="form-control"
        placeholder="Saisir le téléphone"
        name="telephone"
        value={telephone}
        onChange={(e) => onInputChange(e)}
      />
    </div>
  </div>
  <div className="mb-1 row">
    <label htmlFor="Email" className="col-sm-3 col-form-label">
      Model pc
    </label>
    <div className="col-sm-9">
      <input
        type={"text"}
        className="form-control"
        placeholder="Saaisir le model du pc"
        name="modelPC"
        value={modelPC}
        onChange={(e) => onInputChange(e)}
      />
    </div>
  </div>
  <div className="mb-1 row">
    <label htmlFor="Email" className="col-sm-3 col-form-label">
      Model écran
    </label>
    <div className="col-sm-9">
      <input
        type={"text"}
        className="form-control"
        placeholder="Saisir le model écran"
        name="modelEcran"
        value={modelEcran}
        onChange={(e) => onInputChange(e)}
      />
    </div>
  </div>
  <div className="mb-1 row">
    <label htmlFor="Email" className="col-sm-3 col-form-label">
      os
    </label>
    <div className="col-sm-9">
      <input
        type={"text"}
        className="form-control"
        placeholder="Saisir l'os"
        name="os"
        value={os}
        onChange={(e) => onInputChange(e)}
      />
    </div>
    
  </div>
  <div className="mb-1 row">
    <label htmlFor="Email" className="col-sm-3 col-form-label">
    Paramétre réseau
    </label>
    <div className="col-sm-9">
      <input
        type={"text"}
        className="form-control"
        placeholder="Saisir les paramétre réseau"
        name="paramReseau"
        value={paramReseau}
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
        type={"text"}
        className="form-control"
        placeholder="Saisir le nom du technicien"
        name="tech"
        value={tech}
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
        placeholder="Saisir le numéro de la fiche "
        name="fiche"
        value={fiche}
        onChange={(e) => onInputChange(e)}
      />
    </div>
    
  </div>
  <div className="mb-1 row">
    <label htmlFor="Email" className="col-sm-3 col-form-label">
    observation
    </label>
    <div className="col-sm-9">
      <input
        type={"text"}
        className="form-control"
        placeholder="Saisir l'observation"
        name="observation"
        value={observation}
        onChange={(e) => onInputChange(e)}
      />
    </div>
    
  </div>
  <div className="mb-1 row">
    <label htmlFor="Email" className="col-sm-3 col-form-label">
    etat
    </label>
    <div className="col-sm-9">
      <input
        type={"text"}
        className="form-control"
        placeholder="Saisir l'état de l'équipement"
        name="etat"
        value={etat}
        onChange={(e) => onInputChange(e)}
      />
    </div>
    
  </div>
  <div className="mb-1 row">
  <label htmlFor="Email" className="col-sm-3 col-form-label">
  Réception
  </label>
  <div className="col-sm-9">
    <input
      type={"date"} /* Modifier le type de l'input à "date" */
      className="form-control"
      name="dateReception"
      value={dateReception}
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
