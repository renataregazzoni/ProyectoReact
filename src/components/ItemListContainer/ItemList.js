import "bulma/css/bulma.css";

const ItemList = ({ greeting }) => {
  return (
    <div className="columns is-centered">
      <div className="column is-half">
        <h3 className="has-text-centered">{greeting}</h3>
      </div>
    </div>
  );
};

export default ItemList;
