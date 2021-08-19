import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../components/Header";

const City = (props) => {
  const [city, setCity] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/city/${props.match.params.id}`)
      .then((res) => {
        if (res.data.success) {
          setCity(res.data.response);
        } else {
          throw new Error();
        }
      })
      .catch((err) => {
        toast.error("Something went wrong! Redirecting to Cities", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setTimeout(() => {
          props.history.push("/cities");
        }, 5000);
        return () => clearTimeout;
      });
    console.log(props.match.params.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
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
        <ToastContainer />
      </div>
    </>
  );
};

export default City;
