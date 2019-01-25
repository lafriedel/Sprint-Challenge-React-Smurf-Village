import React from "react";
import { Link } from "react-router-dom";

const Smurf = props => {
  return (
    <Link to={`/smurf/${props.id}`}>
      <div className="Smurf">
        <h3>{props.name}</h3>
      </div>
    </Link>
  );
};

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
