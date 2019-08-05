import React, {Fragment} from 'react';
import {
  ModalHeader,
  ModalBody
} from 'reactstrap';

const Deletion = props =>{
    return (
      <Fragment>
        <ModalHeader title="Something should be here" toggle={props.toggle}>Step 3</ModalHeader>
        <ModalBody>
          <p className="text-center">Step 3</p>
        </ModalBody>
      </Fragment>
    )
}

export default Deletion;
