import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function EvaluacionForm({ preguntaData, onFinalizar }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQuestion = preguntaData[currentStep];

  const handleSelect = (index) => {
    setSelectedOption(index);
  };

  const handleNext = () => {
    const isCorrect = selectedOption === currentQuestion.correcta;
    const newScore = isCorrect ? score + 1 : score;
    
    if (isCorrect) {
      setScore(newScore);
    }

    if (currentStep < preguntaData.length - 1) {
      setCurrentStep(currentStep + 1);
      setSelectedOption(null);
    } else {
      setIsCompleted(true);
      if (onFinalizar) onFinalizar(newScore);
    }
  };

  return (
    /* Contenedor principal con estilo de tarjeta idéntico a tus otros componentes */
    <div style={{
      background: "#ffffff",
      borderRadius: "12px",
      padding: "20px",
      margin: "15px 0",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      border: "1px solid #e5e7eb",
      color: "#1f2937",
      textAlign: "left"
    }}>
      <AnimatePresence mode="wait">
        {!isCompleted ? (
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 2, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            {/* Cabecera con indicador de progreso */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px", fontSize: "0.85rem", fontWeight: "600", color: "#6b7280" }}>
              <span>Pregunta {currentStep + 1} de {preguntaData.length}</span>
              <span style={{ background: "#e0e7ff", color: "#4f46e5", padding: "2px 10px", borderRadius: "12px", fontSize: "0.75rem" }}>
                Evaluación Formativa
              </span>
            </div>

            {/* Enunciado */}
            <h4 style={{ color: "#1f2937", fontSize: "1.05rem", fontWeight: "bold", marginBottom: "20px", lineHeight: "1.4" }}>
              {currentQuestion.pregunta}
            </h4>

            {/* Opciones */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "20px" }}>
              {currentQuestion.opciones.map((opcion, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => handleSelect(index)}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    padding: "12px 16px",
                    borderRadius: "8px",
                    border: selectedOption === index ? "2px solid #070435" : "1px solid #5f96e9",
                    backgroundColor: selectedOption === index ? "#98a5cf" : "#ffffff",
                    color: selectedOption === index ? "#312e81" : "#374151",
                    fontWeight: "500",
                    fontSize: "0.95rem",
                    cursor: "pointer",
                    transition: "all 0.2s ease"
                  }}
                >
                  {opcion}
                </motion.button>
              ))}
            </div>

            {/* Botón Siguiente */}
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button
                disabled={selectedOption === null}
                onClick={handleNext}
                style={{
                  padding: "10px 20px",
                  borderRadius: "8px",
                  fontWeight: "600",
                  fontSize: "0.9rem",
                  color: "#ffffff",
                  backgroundColor: selectedOption === null ? "#9ca3af" : "#195a92",
                  border: "none",
                  cursor: selectedOption === null ? "not-allowed" : "pointer",
                  boxShadow: selectedOption === null ? "none" : "0 2px 4px rgba(0,0,0,0.1)"
                }}
              >
                {currentStep === preguntaData.length - 1 ? 'Finalizar evaluación' : 'Siguiente pregunta'}
              </button>
            </div>
          </motion.div>
        ) : (
          /* Pantalla de Resultados dentro de la misma caja */
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 250, damping: 20 }}
            style={{ textAlign: "center", padding: "20px 0" }}
          >
            <div style={{ width: "50px", height: "50px", backgroundColor: "#dbccae", color: "#059669", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 15px auto",
               fontSize: "1.5rem", fontWeight: "bold" }}>
              ✓
            </div>
            <h4 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#101f38", marginBottom: "8px" }}>¡Evaluación completada!</h4>
            <p style={{ color: "#0e2953", marginBottom: "20px", fontSize: "0.95rem" }}>
              Tu puntaje final es de <span style={{ fontWeight: "bold", color: "#0f4c81" }}>{score}</span> sobre {preguntaData.length}.
            </p>
            <button
              onClick={() => {
                setCurrentStep(0);
                setScore(0);
                setSelectedOption(null);
                setIsCompleted(false);
              }}
              style={{
                padding: "10px 16px",
                backgroundColor: "#2b57af",
                color: "#eaedf3",
                border: "1px solid #e3e6eb",
                borderRadius: "8px",
                fontWeight: "500",
                cursor: "pointer"
              }}
            >
              Reiniciar evaluación
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}