import { useRef } from 'react';
import Lottie from 'lottie-react';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import { getRandom } from './hooks/useMath';
import { Form } from './components/Form';

import AnimC from './assets/anim-3.json';
import { AnimTitle } from './components/AnimTitle';
// import './App.css'

const TITLE_LIST = [
   'Сколько стоит?',
   'Что выбрать?',
   'Какие есть способы\n замешивания?',
   'Что такое смесь?',
   'В чем смысл жизни?',
   'Как мешать?',
   'Можно оптом?',
   'Какую смесь приготовить\n для штукатурки глиной?',
];

const App = () => {
   const container = useRef();
   const animTitleList = useRef([]);

   const setAnimTitle = (title) => {
      if (title) animTitleList.current.push(title);
   };

   useGSAP(
      () => {
         animTitleList.current.forEach((title) => {
            const offsetY = container.current.offsetHeight + (title.offsetHeight + title.offsetWidth) * 2;
            let duration = getRandom(6, 10);
            if (window.innerWidth < 480) duration = getRandom(9, 13);

            // console.log(title);
            gsap.to(title, {
               y: offsetY,
               rotation: getRandom(-60, 60),
               duration: duration,
               delay: getRandom(0, 8),
               repeat: -1,
               ease: `power${getRandom(1, 4)}.in`,
            });
         });
      },
      { scope: container },
   );

   return (
      <div className="content-wrapper">
         <section ref={container} className="_block_rounded _block_blue block-questions_wrapper">
            <div className="block_questions">
               <Form>
                  Засыпьте нас
                  <br />
                  вопросами
               </Form>
               <div className="lottie-animation-container">
                  <Lottie animationData={AnimC} />
               </div>
            </div>
            <div className="questions_overlay">
               {TITLE_LIST.map((title, index) => {
                  return (
                     <div key={index} ref={setAnimTitle} data-item-index={index}>
                        <AnimTitle>{title}</AnimTitle>
                     </div>
                  );
               })}
            </div>
         </section>
      </div>
   );
};

export default App;
