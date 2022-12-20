import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/nav/NavigationBar";
import Intro from "./components/intro/Intro";
import React, { useState, useEffect } from "react";
import song from "./assets/audio/the-beat-of-nature-122841.mp3";
import PhotosCarousel from "./components/carousel/PhotosCarousel";
import Danke from "./components/danke/Danke";
import Spenden from "./components/spenden/Spenden";

function App() {
  const [isAudioOn, setIsAudionOn] = useState(true);
  const [audio] = useState(new Audio(song));

  useEffect(() => {
    !isAudioOn ? audio.play() : audio.pause();
  }, [isAudioOn]);

  useEffect(() => {
    audio.addEventListener("ended", () => setIsAudionOn(false));
    return () => {
      audio.removeEventListener("ended", () => setIsAudionOn(false));
    };
  }, []);

  const toggleAudio = () => {
    setIsAudionOn(() => {
      console.log(isAudioOn);
      return !isAudioOn;
    });
  };
  return (
    <div className="App">
      <NavigationBar onToggleAudio={toggleAudio} onIsAudioOn={isAudioOn} />
      <Intro />
      <PhotosCarousel />
      <Danke />
      <Spenden id="spenden" />
    </div>
  );
}

export default App;
