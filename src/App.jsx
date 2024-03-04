import { useRef } from 'react';

import gsap from 'gsap'; // <-- import GSAP
import { useGSAP } from '@gsap/react'; // <-- import the hook from our React package

import Lottie from 'lottie-react';
import AnimC from './assets/anim-3.json';

import { getRandom } from './hooks/useMath';

// import './App.css'

const TITLE_LIST = [
   'Сколько стоит?',
   'Что выбрать?',
   'Какие есть способы<br> замешивания?',
   'Что такое смесь?',
   'В чем смысл жизни?',
   'Как мешать?',
   'Можно оптом?',
   'Какую смесь приготовить<br> для штукатурки глиной?',
];

const Form = ({ children }) => {
   return (
      <form className="form-component flex flex-col items-center">
         <h3 className="text-center caption-32 text-white">{children}</h3>
         <div className="form-fields flex flex-col">
            <div className="form-prop_list">
               <div className="form-prop form-prop-name">
                  <input className="norm-input text-16 text-blue" type="text" name="NAME" placeholder="Имя" />
               </div>
               <div className="form-prop form-prop-phone">
                  <input className="norm-input text-16 text-blue" type="tel" name="PHONE" required minLength="18" placeholder="Телефон*" />
               </div>
               <div className="form-prop form-prop-email">
                  <input className="norm-input text-16 text-blue" type="email" name="EMAIL" placeholder="E-mail" />
               </div>
               <div className="form-prop form-prop-q">
                  <textarea className="norm-input text-16 text-blue" name="QUESTION" placeholder="Напишите свои вопросы"></textarea>
               </div>
               <div>
                  <button className="submit-button" type="submit">
                     <p className="caption-20oo text-blue">Отправить</p>
                  </button>
               </div>
            </div>
            <div className="form-check">
               <div className="checkbox-wrap">
                  <input className="checkbox-input" type="checkbox" name="CONFIRM_PRIVACY" required id="check-privacy" />
                  <label className="checkbox-label" htmlFor="check-privacy">
                     <svg className="active-check" xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 23" fill="none">
                        <rect x="1.5" y="1" width="21" height="21" rx="7" fill="#F0C6FB" stroke="#F0C6FB" strokeWidth="2" />
                        <path d="M7.5 11L10.5 14.5L17 8.5" stroke="#4328EB" strokeWidth="2" strokeLinecap="round" />
                     </svg>
                     <div className="disable-check-wrap">
                        <svg className="disable-check" xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 23" fill="none">
                           <rect x="1.5" y="1" width="21" height="21" rx="7" fill="var(--blue)" />
                        </svg>
                     </div>
                  </label>
               </div>
               <p className="text-16 text-white">
                  Принимаю условия <a href="/politics">политики конфиденциальности</a>
               </p>
            </div>
         </div>
      </form>
   );
};

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

            console.log(title);
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
               {TITLE_LIST.map((item, index) => {
                  return (
                     <p key={index} ref={setAnimTitle} className="rounded-title anim-title white-style" data-item-index={index}>
                        {item}
                     </p>
                  );
               })}
            </div>
         </section>
      </div>
   );
};

export default App;
