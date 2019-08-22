import '../App.css'
import React from 'react';
import {
  Button,
  Navbar,
  NavbarBrand
} from 'reactstrap'

const FullSized = ({toggle}) =>{
  return(
    <div id="full-modal">
      <Navbar className="ml-auto" style={{backgroundColor:"white"}}>
        <NavbarBrand>How to</NavbarBrand>
        <i className="far fa-times-circle fa-2x ml-auto" onClick={toggle}/>
      </Navbar>
      <div className="full-modal-container">
        <div className="mx-auto text-center">
          <p>Hi.</p>
          <Button color="primary" className="btn-lg px-4" onClick={toggle} style={{borderRadius:"50px"}}>Close</Button>
        </div>
      </div>
    </div>
  )
}

export default FullSized;
