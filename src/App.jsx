import { useRef, useState } from "react";

function App() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    if (!playing) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setPlaying(!playing);
  };

  return (
    <div>

      <audio ref={audioRef} src="/cancion.mp3" />

      {/* Botón flotante */}
      <button
        onClick={toggleMusic}
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          padding: 15,
          borderRadius: "50%",
          fontSize: 16
        }}
      >
        {playing ? "⏸" : "▶"}
      </button>

      {/* Sección 1 */}
      <section style={sectionStyle}>
        <h1>Bienvenidos</h1>
        <p>Esta es nuestra página.</p>
      </section>

      {/* Sección 2 */}
      <section style={sectionStyle}>
        <h2>Nuestra historia</h2>
        <p>Acá va tu texto.</p>
      </section>

      {/* Sección 3 */}
      <section style={sectionStyle}>
        <h2>Fotos</h2>
        <img src="/foto1.jpg" style={{ width: "100%" }} />
      </section>

    </div>
  );
}

const sectionStyle = {
  minHeight: "100vh",
  padding: 30,
  boxSizing: "border-box"
};

export default App;
