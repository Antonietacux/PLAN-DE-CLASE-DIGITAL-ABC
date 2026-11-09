import { useState } from "react";
import { motion } from "framer-motion";

export default function ActividadItem({ titulo, tiempo }) {
    const [completada, setCompletada] = useState(false);

    return (
        <motion.div 
            layout
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ 
                background: completada ? '#e8f5e9' : '#f8fafc', 
                border: '1px solid #cbd5e1', 
                padding: '12px 18px', 
                borderRadius: '6px', 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                marginBottom: '10px'
            }}
        >
            <span style={{ 
                textDecoration: completada ? 'line-through' : 'none',
                color: completada ? '#146618' : '#334155',
                fontWeight: completada ? 'normal' : '600'
            }}>
                {titulo} ({tiempo})
            </span>

            <motion.button 
                whileHover={{ scale: 2.05 }}
                whileTap={{ scale: 1.98 }}
                onClick={() => setCompletada(!completada)}
                style={{
                    background: completada ? '#1a8a20' : '#0f4c81',
                    color: 'white',
                    border: 'none',
                    padding: '6px 12px',
                    borderRadius: '7px',
                    cursor: 'pointer',
                    fontSize: '0.85em'
                }}
            >
                {completada ? "✓ Listo" : "Marcar avance"}
            </motion.button>
        </motion.div>
    );
}