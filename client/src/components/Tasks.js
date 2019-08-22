import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardImg,
  CardBody,
  CardTitle
} from "reactstrap";
import TaskModal from './TaskModal';
import { connect } from 'react-redux';
import { getTasks } from '../actions/taskActions'

class Tasks extends Component {
  state = {
    viewed:null,
    isOpen:false,
  }

  componentDidMount(){
    this.props.getTasks();
  }

  handleShow = title => {
    this.setState({
      viewed: title,
      isOpen: !this.state.isOpened
    })
  }

  handleClose = () => {
    this.setState({
      viewed: null,
      isOpen: !this.state.isOpened
    })
  }

  render() {

    const { isOpen, viewed } = this.state;
    const { tasks } = this.props.tasks;

    return (
      <div>
        {viewed && (
          <TaskModal
            isOpen={isOpen}
            task={tasks.find(task => task.title === viewed)}
            onClose={this.handleClose}
          />
        )}
        <Container color="light">
          <Row className="flex-row">
            {tasks.map(({ _id, title, image, eta }) => (
                <Col key={_id}
                  xs="11"
                  sm="6"
                  lg="4"
                  className="mx-auto my-sm-2 my-lg-1"
                  >
                    <Card
                      className="task-card border-0 shadow my-3"
                      style={{borderRadius:"17px "}}
                    >
                      <CardImg
                        top
                        width="100%"
                        src={image}
                        className="border-0"
                        style={{
                          width: "100%",
                          height: "45vh",
                          objectFit: "cover",
                          backgroundColor:"gray",
                          borderRadius:"17px 17px 0px 0px"
                        }}/>

                      <CardBody>
                        <CardTitle className="card-title m-0 text-left text-truncate">{title}</CardTitle>
                        <p style={{fontSize:'12px'}} className="text-left text-secondary">ETA: {eta}</p>
                      </CardBody>
                        <Button
                          color="primary"
                          className="w-50 mb-4 mx-auto shadow btn-task-modal"
                          onClick={()=> this.handleShow(title)}
                          style={{
                            borderRadius:"20px",
                            background:"#0070f3",
                            borderColor:"#0070f3"
                          }}
                          > View Task
                        </Button>
                    </Card>
                </Col>
            ))}
          </Row>

        </Container>
      </div>
    );
  }
}

const mapStateToProps = state =>({
  tasks: state.tasks
})

export default connect(
  mapStateToProps,
  {getTasks}
)(Tasks);
