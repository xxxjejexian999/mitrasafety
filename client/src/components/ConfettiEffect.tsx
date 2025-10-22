import { motion } from "framer-motion";

interface ConfettiPieceProps {
  id: number;
  color: string;
  size: number;
  position: { x: number; y: number };
}

const ConfettiPiece = ({ id, color, size, position }: ConfettiPieceProps) => {
  return (
    <motion.div
      key={id}
      className="absolute rounded-sm"
      style={{
        backgroundColor: color,
        width: size,
        height: size,
        left: position.x,
        top: position.y,
      }}
      initial={{ 
        opacity: 1,
        y: 0,
        rotate: 0,
        x: 0
      }}
      animate={{ 
        y: [0, -100, -200],
        rotate: [0, 90, 180, 270, 360],
        x: [0, 20, -20, 10, -10],
        opacity: [1, 1, 0]
      }}
      transition={{ 
        duration: 1.5,
        times: [0, 0.5, 1],
        ease: "easeOut"
      }}
    />
  );
};

interface ConfettiEffectProps {
  isActive: boolean;
  onComplete: () => void;
}

export default function ConfettiEffect({ isActive, onComplete }: ConfettiEffectProps) {
  if (!isActive) return null;

  const colors = ["#FF5733", "#33FF57", "#3357FF", "#F3FF33", "#FF33F3"];
  const pieces = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    color: colors[Math.floor(Math.random() * colors.length)],
    size: Math.random() * 8 + 4,
    position: { 
      x: Math.random() * 100, 
      y: Math.random() * 20 
    }
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {pieces.map((piece) => (
        <ConfettiPiece
          key={piece.id}
          id={piece.id}
          color={piece.color}
          size={piece.size}
          position={piece.position}
        />
      ))}
    </div>
  );
}
