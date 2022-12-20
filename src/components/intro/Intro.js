import React from "react";
import classes from "./intro.module.css";
import foto from "../../assets/img/WhatsApp Bild 2022-12-09 um 18.08.12.jpg";
import auto from "../../assets/img/auto.png";

const Intro = () => {
  return (
    <div className={classes["intro-container"]} id="intro">
      <img
        className={` ${classes["slide-in-blurred-right"]} ${classes["img-title"]}`}
        src={auto}
        alt=""
      />
      <h2 className={classes["intro-titel"]}>
        {" "}
        In Gedenken an unseren lieben Robbi
      </h2>

      <h3 className={classes["intro-sub"]}>1970-2022</h3>

      <div className={classes["intro-container-carousel"]}>
        <img src={foto} className={classes["intro-img"]} alt="" />
        <div className={classes["intro-content"]}>
          <h2 className={classes["intro-titel"]}>
            "Auch ein Kämpfer hat irgendwann keine Kraft mehr"
          </h2>
          <h4 className={classes["intro-subtitle"]}>
            Für alle lieben Menschen, die gerne noch einmal in Robbis
            wundervolle Welt voller bunter, aufregender und facettenreicher
            Zeiten eintauchen möchten. Eine kleine Zeitreise beginnend Anfang
            der 70er Jahre, über die wilden 80er und 90er bis hin zu den etwas
            mehr gesetzten 2000ern...
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Intro;
