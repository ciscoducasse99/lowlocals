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
        <CardImg
          top
          width="100%"
          src={props.task.image}
        />
        <h4>{props.task.description}</h4>
      </ModalBody>
      <ModalFooter>
        <Button
          onClick={props.onClose}
          color="danger"
        > Close </Button>
      </ModalFooter>
    </Modal>
  )
}

export default TaskModal;
