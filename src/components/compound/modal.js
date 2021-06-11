import React from 'react';
import Reveal from 'foundation-sites/js/foundation.reveal';

const Modal = (props) => {
    return (
        <>  
            <div className="modal-trigger text-color-changer">{props.title}</div>
            <div className="modal-reveal">

            </div>
        </>
    );
};

export default Modal;