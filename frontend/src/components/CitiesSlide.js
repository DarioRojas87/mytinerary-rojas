const CitiesSlide = ({ cities }) => {
  return (
    <>
      {cities.map((city) => {
        return (
          <div
            key={city.id}
            style={{
              backgroundImage: `url("/assets/img/${city.name}")`,
            }}
            className="slideHijo"
          >
            <h2>{city.title}</h2>
          </div>
        );
      })}
    </>
  );
};

export default CitiesSlide;
