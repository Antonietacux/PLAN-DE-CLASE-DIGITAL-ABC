import HeaderClase from "./Components/HeaderClase";
import ObjetivosCard from "./Components/ObjetivosCard";
import ActividadItem from "./Components/ActividadItem";
import EvaluacionForm from "./Components/EvaluacionForm"; // 1. Importa el componente aquí

export default function App() {
  // 2. Define las preguntas que aparecerán en la evaluación
  const preguntasDelitos = [
    {
      pregunta: "¿Cuál de los siguientes ejemplos se considera un delito informático o ciberdelito?",
      opciones: [
        "Apagar la computadora de un compañero de manera repentina",
        "El robo de identidad o suplantación de perfil en redes sociales",
        "Descargar una imagen de dominio público para una tarea",
        "Actualizar el sistema operativo sin permiso de la tableta"
      ],
      correcta: 1
    },
    {
      pregunta: "¿Qué acción digital responsable debemos tomar al navegar en internet?",
      opciones: [
        "Compartir nuestras contraseñas con nuestro mejor amigo",
        "Ignorar las advertencias de seguridad de los sitios web que nos dan nuestros amigos",
        "Verificar fuentes confiables y proteger nuestra información personal",
        "Hacer clic en enlaces sospechosos que prometen premios y sorpresas"
      ],
      correcta: 2
    }
  ];

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px", fontFamily: "'Segoe UI', sans-serif" }}>
      
      {/* 1. Institución y Título General */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <p style={{ color: "#f5f0f0", fontSize: "0.95rem", fontWeight: "900", margin: "0 0 5px 0" }}>
          Instituto Nacional de Educación Básica Telesecundaria
          <br />
          Aldea Panabajal, San Juan Comalapa
        </p>
        <h3 style={{ color: "#e4e7eb", margin: "10px 0 0 0" }}>📋 PLAN DE CLASE DIGITAL</h3>
      </div>

      {/* 2. Encabezado Animado del Tema */}
      <HeaderClase
        tituloTema="DELITOS INFORMÁTICOS" 
        subtitulo="SEGUNDO BÁSICO"
        horario="Lunes 7:00 - 8:20 AM"
      />

      {/* 3. Tarjeta de Objetivos Interactiva */}
      <ObjetivosCard
        indicador="Identifica los diferentes tipos de delitos informáticos y su impacto en el entorno digital mediante la creación de una infografía."
        competencia="Utiliza herramientas tecnológicas y el internet de manera responsable para investigar y analizar los delitos informáticos."
      />

      {/* 4. Lista de Actividades de la Sesión */}
      <h2 style={{ color: "#eaeef1", marginTop: "25px" }}>Secuencia Didáctica de la Clase</h2>

      <ActividadItem 
        titulo="DIAGNÓSTICO. Actividad inicial: ¿Qué es un delito informático? Ingresan al enlace de Padlet." 
        tiempo="5 minutos" 
        tipo="Diagnóstico" 
        descripcion="Pregunta generadora: ¿Qué es un delito informático? Participación en Padlet." 
      />
      <ActividadItem 
        titulo="LECTURA DIRIGIDA: Delitos informáticos, en sus tabletas leerán los tipos de delitos informáticos que existen en Guatemala." 
        tiempo="25 minutos" 
        tipo="Construcción" 
        descripcion="Revisión de conceptos y tipos de delitos informáticos." 
      />
      <ActividadItem 
      
        titulo="Buscaran en el internet imágenes de delitos informáticos" 
        tiempo="25 minutos" 
        tipo="Aplicación" 
        descripcion="Elaboración de una infografía digital basada en la investigación." 
      />

      {/* 5. Evaluación Formativa Interactiva (Cierre) */}
      <h3 style={{ color: "#f0f3f7", marginTop: "25px" }}>Evaluación Formativa de Cierre</h3>
      <EvaluacionForm 
        preguntaData={preguntasDelitos} 
        onFinalizar={(notaFinal) => {
          console.log("Nota final del estudiante:", notaFinal);
        }}
      />

    </div>
  );
}