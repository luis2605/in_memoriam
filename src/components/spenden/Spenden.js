import React from "react";
import classes from "./spenden.module.css";
import butterfly from "../../assets/img/onlyButterflies.jpg";

const Spenden = () => {
  return (
    <div>
      <div id="spenden" className={classes["spenden-container"]}>
        <h2 className={classes["spenden-titel"]}>
          {" "}
          Spenden zum Gedenken an Robbi ...
        </h2>
        <div className={classes["spenden-container-1"]}>
          <img src={butterfly} className={classes["spenden-img"]} alt="" />
          <div className={classes["spenden-content"]}>
            <h4 className={classes["spenden-subtitle"]}>
              ...werden wir auf seinen Wunsch hin an den Förderverein der
              Palliativstation Waldbröl und an ein Kinderhospiz tätigen.
            </h4>
          </div>
        </div>
        <div>
          <h2
            className={`${classes["spenden-titel"]} ${classes["spenden-link"]}  `}
          >
            {" "}
            <a
              href="https://www.palliativverein-waldbroel.de/unterstuetzen/"
              target="_blank"
              rel="noreferrer"
            >
              Link zum Spenden Seite der Palliativstation des Kreiskrankenhauses
              Waldbröl ...
            </a>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Spenden;
