import React, {Fragment} from 'react';
import {
  ModalHeader,
  ModalBody
} from 'reactstrap';

const SitePurpose = props =>{
    return (
      <Fragment>
        <ModalHeader title="Something should be here" toggle={props.toggle}>The Idea</ModalHeader>
        <ModalBody>
          <p className="text-center">This part explains what the point of the site is. No money being involved, just a way to get involved with the communitiy, FOR FREE.</p>
        </ModalBody>
      </Fragment>
    )
}

export default SitePurpose;
