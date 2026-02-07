import { useEffect, useState } from 'react';

export function Logo() {
    const [filled, setFilled] = useState(false);

    useEffect(() => {
        // Start filling after the stroke animation (approx 2.5s)
        const timer = setTimeout(() => {
            setFilled(true);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1559.1 878.7"
            className={`h-96 md:h-[32rem] w-auto transition-all duration-1000 ${filled ? 'drop-shadow-[0_0_15px_rgba(34,197,94,0.5)]' : ''
                }`}
        >
            <defs>
                <style>
                    {`
            .logo-path {
              fill: transparent;
              stroke: white;
              stroke-width: 5;
              stroke-dasharray: 4000;
              stroke-dashoffset: 4000;
              animation: draw 2.5s ease-in-out forwards;
            }
            
            .logo-path.filled {
              fill: white;
              stroke: transparent;
              transition: fill 1s ease, stroke 0.5s ease;
            }

            @keyframes draw {
              0% {
                stroke-dashoffset: 4000;
              }
              100% {
                stroke-dashoffset: 0;
              }
            }
          `}
                </style>
            </defs>
            <g>
                <g id="Layer_1">
                    <path className={`logo-path ${filled ? 'filled' : ''}`} d="M558.1,426.3c0,7.7-6.2,13.9-14.2,13.9h-97.8c6,17,21.8,29.2,40.8,29.2s18.1-.6,31.7-9.4c6.5-4.3,15.3-.3,18.7,6.5,3.4,7.1-.3,14.5-6.8,18.7-18.7,12.5-33.2,12.2-43.7,12.2-39.4,0-71.1-32-71.1-71.1s31.7-71.1,71.1-71.1,71.1,24.9,71.1,71.1ZM446.1,412.1h81.9c-6-19.8-24.1-28.9-41.1-28.9s-34.9,12.2-40.8,28.9Z" />
                    <path className={`logo-path ${filled ? 'filled' : ''}`} d="M573.1,436c-2.6-2.6-4-6.2-4-9.9s1.4-7.1,4-9.9c2.8-2.6,6.2-4,9.9-4s7.4,1.4,9.9,4c2.8,2.8,4.3,6.2,4.3,9.9s-1.4,7.4-4.3,9.9c-2.6,2.8-6.2,4.3-9.9,4.3s-7.1-1.4-9.9-4.3Z" />
                    <path className={`logo-path ${filled ? 'filled' : ''}`} d="M814.6,413.5c.3.6.3.9.3,1.4v68.9c0,7.9-6.5,14.2-14.2,14.2s-13.9-6.2-13.9-14.2v-71.4c0-15.9-13-28.6-28.9-28.6s-28.9,12.8-28.9,28.6v71.4c0,7.9-6.2,14.2-13.9,14.2s-14.2-6.2-14.2-14.2v-71.4c0-15.9-12.8-28.6-28.6-28.6s-28.9,12.8-28.9,28.6v71.4c0,7.9-6.2,14.2-13.9,14.2s-14.2-6.2-14.2-14.2v-71.4c0-31.2,25.5-56.7,57-56.7s32.3,7.4,42.8,19.6c10.5-12.2,25.8-19.6,42.8-19.6,31.5,0,57,25.5,57,56.7s0,.9-.3,1.1Z" />
                    <path className={`logo-path ${filled ? 'filled' : ''}`} d="M973.3,427.4v55.6c0,8.2-6,14.2-14.2,14.2s-13.6-6-13.6-14.2c-12.2,10.2-25.8,14.2-42,14.2-40,0-71.7-29.8-71.7-69.7s31.7-71.7,71.7-71.7,69.7,31.7,69.7,71.7ZM945.5,427.4c0-23.8-18.1-43.9-42-43.9s-43.9,20.1-43.9,43.9,20.1,42,43.9,42,42-18.1,42-42Z" />
                    <path className={`logo-path ${filled ? 'filled' : ''}`} d="M1069.7,369.3c0,7.7-6.2,14.2-14.2,14.2h-20.1v100.1c0,7.7-6.2,14.2-14.2,14.2s-13.9-6.5-13.9-14.2v-100.1h-20.4c-7.7,0-13.9-6.5-13.9-14.2s6.2-13.9,13.9-13.9h20.4v-56.7c0-7.7,6.2-13.9,13.9-13.9s14.2,6.2,14.2,13.9v56.7h20.1c7.9,0,14.2,6.2,14.2,13.9Z" />
                    <path className={`logo-path ${filled ? 'filled' : ''}`} d="M1211.4,426.3c0,7.7-6.2,13.9-14.2,13.9h-97.8c6,17,21.8,29.2,40.8,29.2s18.1-.6,31.7-9.4c6.5-4.3,15.3-.3,18.7,6.5,3.4,7.1-.3,14.5-6.8,18.7-18.7,12.5-33.2,12.2-43.7,12.2-39.4,0-71.1-32-71.1-71.1s31.7-71.1,71.1-71.1,71.1,24.9,71.1,71.1ZM1099.5,412.1h81.9c-6-19.8-24.1-28.9-41.1-28.9s-34.9,12.2-40.8,28.9Z" />
                </g>
            </g>
        </svg>
    );
}
