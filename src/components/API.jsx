export const getReclam = () => {
    return fetch("http://localhost:8080/nbintervs").then((res) => res.json());
  }; 
  export const getEquipment = () => {
    return fetch("http://localhost:8080/nbequipement").then((res) => res.json());
  };
  export const getClient = () => {
    return fetch("http://localhost:8080/nbclients").then((res) => res.json());
  };
  export const getTechnicien = () => {
    return fetch("http://localhost:8080/nbtech").then((res) => res.json());//manquante en backend 
  };