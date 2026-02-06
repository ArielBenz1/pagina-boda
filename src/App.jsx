import { useEffect, useState, useRef } from "react";
import "./App.css";

function App() {
  const weddingDate = new Date("2026-04-18T00:00:00");
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = weddingDate - now;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  useEffect(() => {
  const petals = document.querySelector(".petals");

  const interval = setInterval(() => {
    const petal = document.createElement("span");

    petal.style.left = Math.random() * window.innerWidth + "px";
    petal.style.animationDuration = 6 + Math.random() * 4 + "s";

    petals.appendChild(petal);

    setTimeout(() => {
      petal.remove();
    }, 10000);

  }, 300);

  return () => clearInterval(interval);
}, []);

  const audioRef = useRef(null);
const [playing, setPlaying] = useState(false);

const toggleMusic = () => {
  if (playing) {
    audioRef.current.pause();
  } else {
    audioRef.current.play();
  }
  setPlaying(!playing);
};

  return (
    <>
    <div className="petals"></div>
      <section className="hero">
        <h1>NICOLE & ARIEL</h1>
        <p>18 de Abril 2026</p>
        <span>¡Nos casamos!</span>

        <div className="countdown">
          <div>
            <strong>{timeLeft.days}</strong>
            <small>Días</small>
          </div>

          <div>
            <strong>{timeLeft.hours}</strong>
            <small>Horas</small>
          </div>

          <div>
            <strong>{timeLeft.minutes}</strong>
            <small>Min</small>
          </div>

          <div>
            <strong>{timeLeft.seconds}</strong>
            <small>Seg</small>
          </div>
        </div>
      </section>
      <section className="section">
  <h2>Ceremonia Civil</h2>
  <p>16 de Abril 2026</p>
  <p>Juzgado de paz, Sarmiento 53, Tafi Viejo, Tucumán</p>
  <p>10:00 hs</p>
  <h2>Conferencia Biblica</h2>
  <p>18 de Abril 2026</p>
  <p>Av. Peru Norte 349, Salon del Reino de los Testigos de Jehova, Tafi Viejo, Tucumán</p>
  <p>10:00 hs</p>
  <h2 style={{ marginTop: "40px" }}>Fiesta</h2>
  <p>18 de Abril 2026</p>
  <p>Salón La Casa de Manolo</p>
  <p>12:30 hs</p>
</section>
<section className="section">
  <h2>Nuestros Momentos</h2>

  <div className="gallery">
    <img src="/foto1.jpeg" />
    <img src="/foto2.jpeg" />
    <img src="/foto3.jpeg" />
  </div>
</section>

<section className="section">
  <h2>Te esperamos</h2>
  <a
  href="https://wa.me/5493814434964?text=Hola!%20Confirmo%20mi%20asistencia%20a%20la%20boda%20💍"
  target="_blank"
  className="confirm"
>
  Confirmar asistencia
</a>

  <p>Gracias por acompañarnos en este día tan especial</p>
</section>

<audio ref={audioRef} src="/cancion.mp3" />

<button className="music" onClick={toggleMusic}>
  {playing ? "❚❚" : "▶"}
</button>

    </>
  );
}

export default App;
