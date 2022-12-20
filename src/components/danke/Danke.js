import React from "react";
import classes from "./danke.module.css";
import stern from "../../assets/img/stern.jpg";

const Danke = () => {
  return (
    <div id="danke">
      <div className={classes["danke-container"]}>
        <h2 className={classes["danke-titel"]}> Ein großes Dankeschön ...</h2>
        <div className={classes["danke-container-1"]}>
          <img src={stern} className={classes["danke-img"]} alt="" />
          <div className={classes["danke-content"]}>
            <h4 className={classes["danke-subtitle"]}>
              ...an Euch alle für die herzliche Anteilnahme.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Danke;
