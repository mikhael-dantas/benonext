// import React, { useState } from 'react';
// import styles from './yay.module.css';
// import 'tailwindcss/tailwind.css';

// const Yay: React.FC = () => {
//   const [isAnimating, setIsAnimating] = useState(false);

//   const handleClick = () => {
//     setIsAnimating(true);
//     setTimeout(() => {
//       setIsAnimating(false);
//     }, 3000);
//   };

//   return (
//     <div className="relative">
//       <button
//         className="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded shadow focus:outline-none"
//         onClick={handleClick}
//       >
//         Yay!
//       </button>
//       {isAnimating && (
//         <div className={styles.animationContainer}>
//           <div className={`${styles.square} ${styles.square1}`}></div>
//           <div className={`${styles.square} ${styles.square2}`}></div>
//           <div className={`${styles.square} ${styles.square3}`}></div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Yay;























import React, { useState } from 'react';
import styles from './yay.module.css';
import 'tailwindcss/tailwind.css';

const Line: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 2000);
  };

  return (
    <div className="relative">
      <button
        className="fixed bottom-4 left-4 bg-blue-500 text-white px-4 py-2 rounded shadow focus:outline-none"
        onClick={handleClick}
      >
        Draw Line
      </button>
      {isAnimating && (
        <div className={styles.animationContainer}>
          <div className={styles.square}>
            <svg className={styles.svgContainer}>
              <line className={styles.line} 
              x1="0" y1="0" 
              x2="14rem" y2="12rem"
              />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default Line;
