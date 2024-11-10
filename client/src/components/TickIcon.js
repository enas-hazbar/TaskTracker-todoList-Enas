import { useEffect, useState } from 'react';

const TickIcon = ({ taskId, progress }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  // Automatically set completion status based on progress
  useEffect(() => {
    if (progress === 100) {
      setIsCompleted(true);
      localStorage.setItem(`taskStatus_${taskId}`, JSON.stringify(true));
    } else {
      setIsCompleted(false);
      localStorage.setItem(`taskStatus_${taskId}`, JSON.stringify(false));
    }
  }, [progress, taskId]);

  // Set the color based on completion status (green if completed, red if not)
  const iconColor = isCompleted ? 'rgb(141, 181, 145)' : 'rgb(255, 99, 71)';

  return (
    <svg
      className="tick"
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 512 512"
    >
      <title>ionicons-v5-e</title>
      <path
        d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z"
        fill={iconColor}
      />
      <polyline
        points="352 176 217.6 336 160 272"
        fill="none"
        stroke={iconColor}
        strokeWidth="30"
      />
    </svg>
  );
};

export default TickIcon;
