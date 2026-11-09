import { motion } from "framer-motion";

export default function HeaderClase({ tituloTema, subtitulo, horario }) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      style={{
        background: "linear-gradient(135deg, #12528a, #0e4269)",
        color: "white",
        padding: "25px",
        borderRadius: "20px",
        textAlign: "center",
        boxShadow: "0 4px 12px rgba(196, 33, 33, 0.15)",
        marginBottom: "20px"
      }}
    >
      <h1 style={{ margin: 0, fontSize: "2rem" }}>{tituloTema}</h1>
      <h3 style={{ color: "#d48f8f", margin: "20px 0" }}>{subtitulo}</h3>
      <p style={{ color: "#d6e4f0", margin: 0 }}>{horario}</p>
    </motion.header>
  );
}