import "./ProductCard.css";
export const ProductCard = (props) => {
  return (
    <div className="productCard col-sm-6">
      <div className="productCard__image">
        <img src={props.image} alt="product" />
      </div>
      <div className="productCard__info transparent_block row">
        <div className="productCard__info col-8 ">
          {props.title}
          <br />
          <button className="grd_btn">{props.price}</button>
          <button className="grd_btn">{props.size}</button>
        </div>
        <div className="productCard__book col-4">
          <button className="grd_btn">Book!</button>
        </div>
      </div>
    </div>
  );
};

export const AboutCard = (props) => {
  return (
    <div className="productCard col-sm-6">
      <div className="productCard__image" style={props.abtcardimg}>
        <img src={props.image} alt="product" />
      </div>
      <div className="aboutCard__info transparent_block">
        <div>
          {props.title}
          <br />
          {props.details}
        </div>
      </div>
    </div>
  );
};
