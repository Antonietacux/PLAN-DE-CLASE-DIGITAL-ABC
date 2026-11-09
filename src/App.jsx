import HeaderClase from "./Components/HeaderClase";
import ObjetivosCard from "./Components/ObjetivosCard";
import ActividadItem from "./Components/ActividadItem";

export default function App() {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px", fontFamily: "'Segoe UI', sans-serif" }}>
      
      {/* 1. Institución y Título General (Arriba de todo) */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <p style={{ color: "#333", fontSize: "0.95rem", fontWeight: "600", margin: "0 0 5px 0" }}>
          Instituto Nacional de Educación Básica Telesecundaria
          <br />
          Aldea Panabajal, San Juan Comalapa
        </p>
        <h3 style={{ color: "#0f4c81", margin: "10px 0 0 0" }}>📋 PLAN DE CLASE DIGITAL</h3>
      </div>

      {/* 2. Encabezado Animado del Tema */}
      <HeaderClase
        tituloTema="DELITOS INFORMÁTICOS" 
        subtitulo="SEGUNDO BÁSICO"
        horario="Lunes 7:00 - 8:20 AM"
      />

      {/* 3. Tarjeta de Objetivos Interactiva */}
      <ObjetivosCard
        indicador="Identifica los diferentes tipos de delitos informaticos y su impacto en el entorno digital mediante la creación de una infografía."
        competencia="Utiliza herramientas tecnologicas y el internet de manera responsable para investigar, analizar los delitos informaticos."
      />

      {/* 4. Lista de Actividades de la Sesión */}
      <h3 style={{ color: "#0f4c81", marginTop: "25px" }}>Secuencia Didáctica de la Clase</h3>

      <ActividadItem 
        titulo="DIAGNOSTICO. Actividad inicial: ¿Qué es un delito informático? ingresan al enlace de Padlet." 
        tiempo="5 minutos" 
        tipo="Diagnóstico" 
        descripcion="Pregunta ¿Qué es un delito informático? Padlet." 
      />
      <ActividadItem 
        titulo="LECTURA DIRIGIDA: Delitos informaticos, en sus tabletas leeran los tipos de delitos informaticos que existen en Guatemala" 
        tiempo="25 minutos" 
        tipo="Construcción" 
        descripcion="Tipos de delito informatico" 
      />
      <ActividadItem 
        titulo="Buscar en el internet imagenes de delitos informaticos" 
        tiempo="25 minutos" 
        tipo="Aplicación" 
        descripcion="Elaboración de una infografía digital." 
      />
    </div>
  );
}