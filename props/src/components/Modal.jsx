
import "./Modal.css"

const Modal = ({ children,  isOpen, onClose }) => {
return(isOpen &&

    <div className="reactmodaloverlay" onClick={onClose}>
<div className="reactmodalwrapper" onClick={e => e.stopPropagation()}>

<div className="reactmodalcontent">

{children}
<button type="button" onClick={onClose} className="real"> close </button>

</div>



</div>




    </div>



)




}
export default Modal