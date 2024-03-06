// packajes
import { useEffect, useState, useRef } from 'react';
import Lottie from 'lottie-react';

// components
import { Form } from './components/Form';
import { AnimTitle } from './components/AnimTitle';

// other
import AnimC from './assets/anim-3.json';
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
   const [overlayHeight, setOverlayHeight] = useState(0);
   const animOverlay = useRef(null);

   useEffect(() => {
      setOverlayHeight(animOverlay.current.offsetHeight);
   }, []);
   
   return (
      <div className="content-wrapper">
         <section ref={animOverlay} className="_block_rounded _block_blue block-questions_wrapper">
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
               {overlayHeight && TITLE_LIST.map((title, index) => (
                  <AnimTitle key={index} overlayHeight={overlayHeight}>
                     {title}
                  </AnimTitle>
               ))}
            </div>
         </section>
      </div>
   );
};

export default App;
