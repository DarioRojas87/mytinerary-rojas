const Header = (props) => {
  return (
    <div
      className="header"
      style={{
        backgroundImage: `url("/assets/img/${props.headerContent.background}")`,
      }}
    >
      <span className="animate__animated animate__fadeInDownBig">
        {props.headerContent.subtitle}
      </span>
      <h1 className=" animate__animated animate__fadeInUp animate__delay-1s">
        {props.headerContent.title}
      </h1>

      <div className="mouse">
        <span></span>
      </div>
    </div>
  );
};

export default Header;
