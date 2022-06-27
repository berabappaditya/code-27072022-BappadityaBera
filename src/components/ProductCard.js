import "./ProductCard.css";
export const ProductCard = (props) => {
  return (
    <div className="productCard col-sm-6">
      <div className="productCard__image">
        <img src={props.image} alt="product" />
      </div>
      <div className="productCard__info transparent_block row info-margin">
        <div className="productCard__info col-8 ">
          {" "}
          <p
            style={{
              fontSize: "16px",
              fontWeight: "500",
              marginBottom: "10px",
              color: "black",
            }}
          >
            {props.title}
          </p>
          <button className="grd_btn" style={{ padding: "5px 18px" }}>
            {props.price}
          </button>
          <button
            className="grd_btn"
            style={{ padding: "3px 18px", marginLeft: "40px" }}
          >
            {props.size}
          </button>
        </div>
        <div className="productCard__book col-4 d-flex center-center">
          <button className="grd_btn" style={{ padding: "15px 25px" }}>
            <b> Book!</b>
          </button>
        </div>
      </div>
    </div>
  );
};

export const AboutCard = (props) => {
  return (
    <div className={`aboutCard  ${props.cstClass}`}>
      <div className="aboutCard__image" style={props.abtcardimg}>
        <img src={props.image} alt="product" />
      </div>
      <div className="aboutCard__info transparent_block info-margin">
        <div>
          <p
            style={{
              fontSize: "24px",
              fontWeight: "700",
              margin: "5px 0 10px 0 ",
            }}
          >
            {props.title}
          </p>

          {props.details}
        </div>
      </div>
    </div>
  );
};
