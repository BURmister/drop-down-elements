// packajes
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

// hooks
import { getRandom } from '../hooks/useMath';

export const AnimTitle = ({ children, overlayHeight }) => {
   const title = useRef(null);

   useGSAP(() => {
      const offsetY = overlayHeight + (title.current.offsetHeight + title.current.offsetWidth) * 2;
      let duration = getRandom(6, 10);
      if (window.innerWidth < 480) duration = getRandom(9, 13);

      gsap.to(title.current, {
         y: offsetY,
         rotation: getRandom(-60, 60),
         duration: duration,
         delay: getRandom(0, 8),
         repeat: -1,
         ease: `power${getRandom(1, 4)}.in`,
      });
   });

   return (
      <p ref={title} className="rounded-title anim-title white-style">
         {children}
      </p>
   );
};
