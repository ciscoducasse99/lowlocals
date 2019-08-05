import React,  {Fragment} from 'react';
import {
  ModalHeader,
  ModalBody
} from 'reactstrap';

const FinalStep = props =>{
    return(
      <Fragment>
        <ModalHeader title="Something should be here" toggle={props.toggle}>Step 4</ModalHeader>
        <ModalBody>
          <p className="text-center">Step 4</p>
        </ModalBody>
      </Fragment>
    )

}

export default FinalStep;
