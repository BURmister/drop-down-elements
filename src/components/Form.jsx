import { useState } from 'react';
import { useIMask } from 'react-imask';
import Lottie from 'lottie-react';

import { Modal } from './Modal';

import AnimD from '../assets/anim-4.json';

export const Form = ({ children }) => {
   const [successSubmitted, setSuccessSubmitted] = useState(false);

   const { ref } = useIMask({
      mask: '{+7 (9}00{) }000{-}00{-}00',
   });

   const handleSubmit = (event) => {
      event.preventDefault();

      const formData = new FormData(event.target);
      const data = Object.fromEntries(formData.entries());
      console.log(data);

      setTimeout(() => setSuccessSubmitted(true), 0);
   };

   const preventForm = () => {
      setSuccessSubmitted(false);
   };

   return (
      <>
         <form className="form-component flex flex-col items-center" onSubmit={(event) => handleSubmit(event)}>
            <h3 className="text-center caption-32 text-white">{children}</h3>
            <div className="form-fields flex flex-col">
               <div className="form-prop_list">
                  <div className="form-prop form-prop-name">
                     <input className="norm-input text-16 text-blue" type="text" name="NAME" placeholder="Имя" />
                  </div>
                  <div className="form-prop form-prop-phone">
                     <input
                        ref={ref}
                        className="norm-input text-16 text-blue"
                        type="tel"
                        name="PHONE"
                        required
                        minLength="18"
                        placeholder="Телефон*"
                     />
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
                     <input className="checkbox-input" type="checkbox" name="CONFIRM_PRIVACY" required id="check-privacy" defaultChecked={true} />
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
                  <p className="text-16 text-white">Принимаю условия политики конфиденциальности</p>
               </div>
            </div>
         </form>
         {successSubmitted && (
            <Modal showModal={successSubmitted} preventForm={() => preventForm()}>
               <div className="form-component haveSubmited flex flex-col">
                  <div className="haveSubmitted_caption flex flex-col">
                     <h3 className="caption-32 text-white">Спасибо за Ваши вопросы!</h3>
                     <p className="text-20 text-white">Мы свяжемся с Вами в ближайшее время, ожидайте звонка.</p>
                  </div>
                  <div className="json-animation-wrapper">
                     <div className="lottie-animation-container">
                        <Lottie animationData={AnimD} />
                     </div>
                  </div>
                  <svg
                     className="line-vector left-line"
                     width="569"
                     height="285"
                     viewBox="0 0 569 285"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                     <path
                        d="M1.5 38.0001C20.3333 19.0001 66.3 -13.2999 99.5 9.50014C141 38.0001 100.5 104 83 99.5C65.5 95 113 30 162 51C211 72 192 244.5 162 244.5C132 244.5 197.607 138 396.5 138C492.5 138 567.5 182 567.5 283.5"
                        stroke="#FFD747"
                        strokeWidth="2"
                        strokeLinecap="round"
                     />
                  </svg>
                  <svg
                     className="line-vector right-line"
                     width="201"
                     height="327"
                     viewBox="0 0 201 327"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                     <path
                        d="M199.5 1C149.167 3.5 46.2 18.4 37 58C25.5 107.5 140.5 142.5 168.5 141C196.5 139.5 148 121 64.5002 141C-18.9998 161 -14.4998 216.5 47.0002 234C108.5 251.5 180.5 267 164.5 291C151.7 310.2 128.167 322 118 325.5"
                        stroke="#FFD747"
                        strokeWidth="2"
                        strokeLinecap="round"
                     />
                  </svg>
               </div>
            </Modal>
         )}
      </>
   );
};
