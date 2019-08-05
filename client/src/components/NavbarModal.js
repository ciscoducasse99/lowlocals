import React, {Component} from 'react';
import {
  Modal,
  ModalFooter,
  Button
} from 'reactstrap';
import Deletion from './NavModal/Deletion';
import FinalStep from './NavModal/FinalStep';
import HowToP1 from './NavModal/HowToP1';
import SitePurpose from './NavModal/SitePurpose';

class NavbarModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 1
    }

    this.nextStep = this.nextStep.bind(this);
    this.prevStep = this.prevStep.bind(this);

  }

  //Used to render new ModalBody components
  nextStep = () => {
    this.setState({
      step: this.state.step + 1
    })
  }

  prevStep = () => {
    this.setState({
      step: this.state.step - 1
    })
  }

  render() {

    const {step} = this.state;
    let previousButton;
    let nextButton;
    if(this.state.step >=2){
      previousButton = <Button color="secondary" onClick={this.prevStep}>Go back</Button>
    } else{
      previousButton= null;
    }
    if(this.state.step <4){
      nextButton = <Button color="primary" onClick={this.nextStep}>Continue</Button>
    } else{
      nextButton= null;
    }

    return (
      <Modal className="modal-lg" isOpen={this.props.isOpen} toggle={this.props.toggle}>
      {(() => {
        switch(step){
          case 1:
            return(
              //Explains what the whole purpose of the site is
              <SitePurpose
                toggle={this.props.toggle}
              />
            )
          case 2:
            return(
              //Explains how to initate new tasks
              <HowToP1
                toggle={this.props.toggle}
              />
            )
          case 3:
            return(
              //Explains What infomation is needed and WHY it's needed
              <Deletion
                toggle={this.props.toggle}
              />
            )
          case 4:
            return(
              //Explains what happens with your information
              <FinalStep
                toggle={this.props.toggle}
              />
            )
          default: return(<SitePurpose/>);
      }
  })()}
        <ModalFooter className="clearfix">
          {previousButton}
          {nextButton}
        </ModalFooter>
      </Modal>
    )
  }
}
export default NavbarModal;
