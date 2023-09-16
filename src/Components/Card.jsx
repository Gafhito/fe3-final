import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Card = ({ name, username, id, typeButton }) => {
  const [dentistSelected, setDentistSelected] = useState({});

  const url = "https://jsonplaceholder.typicode.com/users/" + id;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDentistSelected(data));
  }, []);

  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
    const favs = JSON.parse(localStorage.getItem('favs'));
    const existsDentist = favs.find((element) => element.id === dentistSelected.id);

    if (existsDentist) {
      alert("Este dentista ya está en tu lista de favoritos");
    } else {
      alert("Se agrego el dentista");
      favs.push(dentistSelected);
      localStorage.setItem('favs', JSON.stringify(favs));
      Location.reload();
    }
  };

  const delFav = () => {
    const favs = JSON.parse(localStorage.getItem('favs'));
    const index = favs.findIndex((element) => element.id === dentistSelected.id);
    if (index > -1) {
      if (window.confirm("Está seguro de eliminar este dentista de su lista de favoritos") == true) {
        favs.splice(index, 1);
        localStorage.setItem('favs', JSON.stringify(favs));
        window.location.reload();
      }
    }
  }

  return (
    <div className="card" key={id}>
      <img className="doctor-img" src="./images/doctor.jpg" alt="DH-logo" />
      <h3>{id}</h3>
      <h2>{name}</h2>
      <h3>{username}</h3>
      <Link key={id} to={"/dentist/" + id}>
        Details
      </Link>
      {
        typeButton ? 
        <button onClick={addFav} className="favButton">🖤</button> :
        <button onClick={delFav} className="favButton">🗑️</button>
      }
    </div>
  );
};

export default Card;
