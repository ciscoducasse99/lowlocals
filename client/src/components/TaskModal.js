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
    <Modal isOpen={props.isOpened} backdrop="true">
      <ModalHeader toggle={props.onClose}>{props.taskData.name}</ModalHeader>
      <ModalBody>
        <CardImg
          top
          width="100%"
          src={props.taskData.image}
        />
        <h4>{props.taskData.description}</h4>
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
