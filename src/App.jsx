import { useEffect, useState, useRef } from "react";
import "./App.css";

const IconCalendar = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="3" y="4" width="18" height="18" rx="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
  </svg>
);

const IconPin = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M12 21s7-5.5 7-11a7 7 0 0 0-14 0c0 5.5 7 11 7 11z"/>
    <circle cx="12" cy="10" r="2"/>
  </svg>
);

const IconClock = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="12" cy="12" r="9"/>
    <polyline points="12 7 12 12 15 15"/>
  </svg>
);

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
const fotos = [
  "/foto1.jpeg",
  "/foto2.jpeg",
  "/foto3.jpeg",
  "/foto4.jpeg",
  "/foto5.jpeg",
];
const [slide, setSlide] = useState(0);
const touchStart = useRef(0);
const touchEnd = useRef(0);

// autoplay
useEffect(() => {
  const auto = setTimeout(() => {
    setSlide((s) => (s + 1) % fotos.length);
  }, 4000);

  return () => clearTimeout(auto);
}, [slide]);


const handleTouchStart = e => {
  touchStart.current = e.touches[0].clientX;
};

const handleTouchEnd = e => {
  touchEnd.current = e.changedTouches[0].clientX;

  if (touchStart.current - touchEnd.current > 50) next();
  if (touchEnd.current - touchStart.current > 50) prev();
};



const next = () => setSlide((slide + 1) % fotos.length);
const prev = () =>
  setSlide((slide - 1 + fotos.length) % fotos.length);


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
      <section>
        <div>
          <h1>TEXTO biblico</h1>
        </div>
      </section>
      <section className="section">
  <h2>Ceremonia Civil</h2>
  <p><IconCalendar /> 16 de Abril 2026</p>
<p><IconPin /> Juzgado de paz, Sarmiento 53, Tafí Viejo, Tucumán</p>
<a
  className="maps-btn"
  href="https://www.google.com/maps/search/?api=1&query=Juzgado+de+paz+Sarmiento+53+Tafí+Viejo+Tucumán"
  target="_blank"
>
  Cómo llegar
</a>
<p><IconClock /> 12:00 hs</p>

  <h2>Conferencia Biblica</h2>
  <p><IconCalendar />18 de Abril 2026</p>
  <p><IconPin />Av. Peru Norte 349, Salon del Reino de los Testigos de Jehova, Tafi Viejo, Tucumán</p>
  <a
  className="maps-btn"
  href="https://www.google.com/maps/search/?api=1&query=Av+Peru+Norte+349+Salon+del+Reino+Tafí+Viejo+Tucumán"
  target="_blank"
>
  Cómo llegar
</a>

  <p><IconClock />10:00 hs</p>

  <h2 style={{ marginTop: "40px" }}>Fiesta</h2>
  <p><IconCalendar />18 de Abril 2026</p>
  <p><IconPin />Salón La Casa de Manolo, Av. Saenz Peña 833, Tafi Viejo, Tucumán</p>
<a
  className="maps-btn"
  href="https://www.google.com/maps/search/?api=1&query=Salón+La+Casa+de+Manolo+Av+Saenz+Peña+833+Tafí+Viejo+Tucumán"
  target="_blank"
>
  Cómo llegar
</a>

  <p><IconClock />12:00 hs</p>
</section>
<section className="section">
  <h2>Nuestros Momentos</h2>

  <div className="slider">

  <div
  className="slides"
  onTouchStart={handleTouchStart}
  onTouchEnd={handleTouchEnd}
>
  {fotos.map((foto, i) => (
    <div key={i} className={`slide ${i === slide ? "active" : ""}`}>
      <img src={foto} />
    </div>
  ))}
</div>


  <div className="dots">
    {fotos.map((_, i) => (
      <span
        key={i}
        className={i === slide ? "dot active" : "dot"}
        onClick={() => setSlide(i)}
      />
    ))}
  </div>

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
