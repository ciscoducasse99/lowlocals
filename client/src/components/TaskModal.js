import React from 'react';
import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  CardImg,
  Button
} from 'reactstrap';

const TaskModal = (props) =>{
  return (
    <Modal isOpen={props.isOpen} backdrop={true}>
      <ModalHeader toggle={props.onClose}>{props.task.title}</ModalHeader>
      <ModalBody>
        <img
          style={{minWidth:"100%"}}
          src={props.task.image}
        />
        <h4>{props.task.description}</h4>
      </ModalBody>
        <div>
          <Button
            onClick={props.onClose}
            color="danger"
          > Close </Button>
        </div>
    </Modal>
  )
}

export default TaskModal;
