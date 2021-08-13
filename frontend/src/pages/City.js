import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const City = (props) => {
  const [city, setCity] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/city/${props.match.params.id}`)
      .then((res) => setCity(res.data.response));
    console.log(props.match.params.id);
  }, [props.match.params.id]);

  return (
    <div className="contentCity">
      {console.log(city)}
      <h1>{city.title}</h1>
      <h2>{city.subtitle}</h2>
      <img
        alt="una imagen de la ciudad"
        src={`"public/assets/img/${city.name}"`}
      ></img>
      <Link to="/cities">VOLVER A CITIES</Link>
      {console.log(city.name)}
      {/* <div
        style={{
          backgroundImage: `url("public/assets/img/${city.name}")`,
        }}
      ></div> */}
    </div>
  );
};

export default City;
