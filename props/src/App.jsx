import { useState} from "react";

import Modal from "./components/Modal"


function App() {

const [openModal, setopenModal] = useState(false)

  return (
    <>

<br />
<button onClick={() => setopenModal(!openModal)}>Warning!</button>

<Modal isOpen={openModal} onClose={() => setopenModal(false)}> 
<h1 className="important">Important Notice</h1>
<p className="impotext">This is an important message
  regarding recent updates to our terms of service. Please
  take moment to review the changes</p></Modal>

</>
  )
}

export default App
