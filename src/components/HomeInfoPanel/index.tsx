import React from 'react';

import styles from './Container.module.css';

// use talwindcss to remake the properties
const HomeInfoPanel: React.FC = () => {
    return (
        <div
        className={styles['container'] + `
        w-[100%] 
        flex sm:flex-col md:flex-col lg:flex-row
        justify-between
        gap-10
        mb-20
        mt-20
        `}
        >
            <div className={`${styles['container']} ` + ` ${styles['feature-card']} ` + `
                gap-5
            `}>
                <svg className={styles['feature-icon']} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="magic" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="true" style={{width: '2rem', height: '2rem'}}>
                    <path fill="currentColor" d="M224 96l16-32 32-16-32-16-16-32-16 32-32 16 32 16 16 32zM80 160l26.66-53.33L160 80l-53.34-26.67L80 0 53.34 53.33 0 80l53.34 26.67L80 160zm352 128l-26.66 53.33L352 368l53.34 26.67L432 448l26.66-53.33L512 368l-53.34-26.67L432 288zm70.62-193.77L417.77 9.38C411.53 3.12 403.34 0 395.15 0c-8.19 0-16.38 3.12-22.63 9.38L9.38 372.52c-12.5 12.5-12.5 32.76 0 45.25l84.85 84.85c6.25 6.25 14.44 9.37 22.62 9.37 8.19 0 16.38-3.12 22.63-9.37l363.14-363.15c12.5-12.48 12.5-32.75 0-45.24zM359.45 203.46l-50.91-50.91 86.6-86.6 50.91 50.91-86.6 86.6z"></path>
                </svg>
                <div className={styles['feature-title']}>
                    Using the best technologies
                </div>
                <div className={styles['feature-desc']}>
                    CSS Scan is built with React, Next.js, Chakra UI, and Tailwind CSS. It is also using the latest CSS features like CSS Grid, Flexbox, and CSS Variables.
                </div>
            </div>
            <div className={`${styles['container']} ${styles['feature-card']} ` + `
            gap-5
            `}>
                <div className={styles['feature-icon']}>
                {'</>'}
                </div>
                <div className={styles['feature-title']}>
                The smartest browser extension for CSS inspection
                </div>
                <div className={styles['feature-desc']}>
                No unuseful, duplicated, overridden, or longhand CSS. CSS Scan runs hundreds of real-time advanced optimizations on the code to make it shorter, crystal clear, and prettier. Exactly the way you like it.
                </div>
            </div>
            <div className={`${styles['container']} ${styles['feature-card']} ` + `
            gap-5
            `}>
                <div className={styles['feature-icon']}>
                {'person'}
                </div>
                <div className={styles['feature-title']}>
                    By the best type of developer
                </div>
                <div className={styles['feature-desc']}>
                    CSS Scan is built by a developer who loves CSS and has been working with it for more than 10 years. He is also a CSS expert and a CSS author.
                </div>
            </div>
        </div>
    )
}

export default HomeInfoPanel;