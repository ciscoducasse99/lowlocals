import React, { Fragment} from 'react';
import{
  ModalHeader,
  ModalBody,
} from 'reactstrap';

const HowToP1 = props =>{
    return (
      <Fragment>
        <ModalHeader title="Something should be here" toggle={props.toggle}>Step 2</ModalHeader>
        <ModalBody>
          <p className="text-center">Step 2</p>
        </ModalBody>
      </Fragment>
    )

}

export default HowToP1;
