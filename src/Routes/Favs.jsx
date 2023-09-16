import Card from "../Components/Card";
import { useDentistStates } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { themeState } = useDentistStates();
  const favourites = JSON.parse(localStorage.getItem("favs"));

  return (
    <div className={themeState.theme ? "App" : "dark"}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favourites.map((dentist) => (
          <Card key={dentist.id} name={dentist.name} username={dentist.username} id={dentist.id} typeButton={false} />
        ))}
      </div>
    </div>
  );
};

export default Favs;
