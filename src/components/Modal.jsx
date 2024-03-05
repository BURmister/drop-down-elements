import { useState, useEffect } from 'react';

export const Modal = ({ showModal, children, preventForm }) => {
   const [show, setShow] = useState(false);

   const handleOpen = () => {
      setShow(true);
      document.documentElement.style.overflow = 'hidden';
   };

   const handleClose = () => {
      setShow(false);
      document.documentElement.style.overflow = 'auto';

      if (preventForm) preventForm();
   };

   useEffect(() => {
      setShow(showModal);
   }, []);

   return (
      <>
         <div className={`modal-wrapper ${show && 'open'}`}>
            <div className="modal-overlay" onClick={() => handleClose()}></div>
            <div className="modal _block_rounded _block_blue-gr-radiant">
               <button className="modal-close" type="button" onClick={() => handleClose()}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                     <path
                        d="M17.0936 2.71929C17.5942 2.21868 17.5942 1.40703 17.0936 0.906428C16.593 0.405822 15.7813 0.405822 15.2807 0.906428L9 7.18714L2.71929 0.906429C2.21868 0.405822 1.40703 0.405822 0.906428 0.906428C0.405822 1.40703 0.405822 2.21868 0.906428 2.71929L7.18714 9L0.906429 15.2807C0.405822 15.7813 0.405822 16.593 0.906428 17.0936C1.40703 17.5942 2.21868 17.5942 2.71929 17.0936L9 10.8129L15.2807 17.0936C15.7813 17.5942 16.593 17.5942 17.0936 17.0936C17.5942 16.593 17.5942 15.7813 17.0936 15.2807L10.8129 9L17.0936 2.71929Z"
                        fill="white"
                     />
                  </svg>
               </button>
               {children}
            </div>
         </div>
      </>
   );
};
