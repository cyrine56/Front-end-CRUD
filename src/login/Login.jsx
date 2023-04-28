import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

const Login = () => {
  const [username, setUsername] = useState('');// gérer l'état du champ de formulaire pour le nom d'utilisateur
      //créer une variable username et une fonction setUsername qui permettent de gérer l'état d'un champ de formulaire de nom d'utilisateur.
  const [password, setPassword] = useState('');//gèrent l'état du champ de formulaire pour le mot de passe
  const navigate = useNavigate();
  const [error, setError] = useState('');// gérer l'état du message d'erreur

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { username: username, password: password };

    axios.post('http://localhost:8080/api/login', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        console.log(response.data);
        // redirection switch
        if (response.data.redirect === "/client") {
            navigate('/client'); // redirect to the client page
        } else if (response.data.redirect === "/coordinateur") {
            navigate('/coord'); 
        } else if (response.data.redirect === "/gest") {
            navigate('/gest'); 
        } else if (response.data.redirect === "/technicien") {
            navigate('/tech');
        } else {
          setError('informations incorrectes');         
        }
    })
    .catch(error => {
        console.log(error.response.data);
        // afficher l'erreur dans la console
    });
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      <h1 style={{ color: "#e62626eb", fontFamily: "Arial, Helvetica, sans-serif", fontSize: "30px" }}>Connexion</h1>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form style={{ width: "80%", maxWidth: "600px" }} onSubmit={handleSubmit}>
        <Form.Group className="mb-8" controlId="formBasicEmail">
          <Form.Label style={{ color: "black", fontStyle: "Arial", fontWeight: "lighter" }} >Nom d'utilisateur  </Form.Label>
          <Form.Control
            type="text"
            name="username"
            placeholder="saisir votre nom "
            style={{ marginBottom: "20px", width: "100%" }}
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label style={{ color: "black", fontStyle: "Arial", fontWeight: "lighter" }}>Mot de passe </Form.Label>
          <Form.Control
            style={{ width: "100%" }}
            type="password"
            name="password"
            placeholder="Saisir votre mot de passe"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </Form.Group>

        <Button className="btn btn-danger" type="submit" style={{ width: "120px", color: "white", backgroundColor: "#e62626eb", border: "none", marginTop: "5%",marginLeft:"40%" }}>
          se connecter
        </Button>

      </Form>
      <a style={{ color: "grey", margin: "20px", textDecoration: "none" }} href="https://www.w3schools.com/html/" title="">Mot de passe oublié?</a>
    </div>
  )
}

export default Login;
