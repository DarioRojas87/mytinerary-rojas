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
      <h3 style={{ fontSize: 60 }}>UNDER CONSTRUCTION</h3>
      <img
        style={{
          width: 500,
        }}
        src={`/assets/img/${city.name}`}
        alt=""
      />
      <Link to="/cities">Go Back to Cities</Link>
      {console.log(city.name)}
    </div>
  );
};

export default City;
