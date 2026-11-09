import HeaderClase from "./Components/HeaderClase";
import ObjetivosCard from "./Components/ObjetivosCard";
import ActividadItem from "./Components/ActividadItem";

export default function App() {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px", fontFamily: "'Segoe UI', sans-serif" }}>
      {/* 1. Encabezado Animado */}
      <HeaderClase
        tituloTema="DELITOS INFORMÁTICOS" 
        subtitulo="SEGUNDO BÁSICO"
        horario="Lunes 7:00 - 8:20 AM"
      />

      {/* 2. Tarjeta de Objetivos Interactiva */}
      <ObjetivosCard
        indicador="Desarrolla componentes React reutilizables incorporando animaciones fluidas con Framer Motion."
        competencia="Dominar herramientas frontend modernas para el diseño de recursos educativos digitales."
      />

      {/* 3. Lista de Actividades de la Sesión */}
      <h3 style={{ color: "#0f4c81", marginTop: "25px" }}>📋 Secuencia Didáctica de la Clase</h3>
      <p style={{ color: "#eff3f8", marginBottom: "20px" }}>
        Instituto Nacional de Educación Básica Telesecundaria
        <br />
        Aldea Panabajal, San Juan Comalapa
      </p>

      <ActividadItem titulo="DIAGNOSTICO" tiempo="5 minutos" tipo="Diagnóstico" descripcion="Pregunta ¿Qué es un delito informático? Padlet." />
      <ActividadItem titulo="LECTURA DIRIGIDA: Delitos informaticos" tiempo="25 minutos" tipo="Construcción" descripcion="Tipos de delito informatico" />
      <ActividadItem titulo="Buscar en el internet imagenes de delitos informaticos" tiempo="25 minutos" tipo="Aplicación" descripcion="Elaboración de una infografía digital." />
    </div>
  );
}