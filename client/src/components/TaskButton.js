import React, {Component} from 'react';
import {
Modal,
ModalHeader,
ModalBody,
ModalFooter,
Button
} from 'reactstrap';
import ImageUploader from 'react-images-upload'
import { postTask } from '../actions/taskActions'
import { connect } from 'react-redux'
import '../App.css'

class TaskButton extends Component{

  constructor(props){
    super(props);

    this.state={
      image:"https://static.umotive.com/img/product_image_thumbnail_placeholder.png",
      name:"",
      eta:"",
      description:"",
      contact:"",
      isOpen:false
    }

    this.onDrop = this.onDrop.bind(this);
    this.toggle = this.toggle.bind(this);
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);

  }

  toggle = () =>{
    this.setState({
      isOpen:!this.state.isOpen
    });
  }

  onDrop = (picture) =>{
    this.setState({
      pictures: this.state.pictures.concat(picture),
    });
  }

  handleChange = (e) =>{
     console.log(e.target.name+ ': ' + e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e =>{

    e.preventDefault();

    const taskForm = {
      name:this.state.name,
      eta:this.state.eta,
      image:this.state.image,
      description:this.state.description,
      contact:this.state.contact,
    }

    this.props.postTask(taskForm);
    this.toggle();
  }

  render(){
    return(
      <div>

        <button
          className="btn task-btn bg-primary rounded-0"
          onClick={this.toggle}
        >
          <i className="text-white fas fa-plus primary" />
        </button>

        <Modal
          isOpen={this.state.isOpen}
          fade={false}
          autoFocus={true}
          scrollable={true}
        >
          <ModalHeader toggle={this.toggle}>New Task</ModalHeader>


          <form method="post" onSubmit={this.handleSubmit} className="overflow-auto">
            <ModalBody>
              <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                name='pictures'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
              />

              <div className="form-group mb-3">
                <label htmlFor="task-user-name" className="font-weight-bolder">Name:</label>
                <input
                  type="input"
                  className="form-control input-rounded"
                  id="task-user-name"
                  name="name"
                  placeholder="Enter your name"
                  onChange={this.handleChange}/>
              </div>

              <div className="form-group">
                <label htmlFor="task-time-selection" className="font-weight-bold">Estimated time for completion:</label>
                <select
                  className="custom-select"
                  id="task-time-selection"
                  onChange={this.handleChange}
                  name="eta"
                >
                  <option defaultValue value="15 minutes" >15 Minutes</option>
                  <option value="30 minutes">30 Minutes</option>
                  <option value="45 minutes">45 Minutes</option>
                  <option value="60 minutes">1 Hour</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="task-description" className="font-weight-bolder">What do you need help with?</label>
                <textarea
                  id="task-description"
                  className="form-control input-rounded"
                  aria-label="With textarea"
                  placeholder="Briefly explain what you need some extra hands with"
                  style={{
                    resize:"none"
                  }}
                  rows="5"
                  onChange={this.handleChange}
                  name="description"
                />
              </div>

              <div className="form-group">
                <label htmlFor="task-contact" className="font-weight-bolder">Zip Code:</label>
                <input
                  type="input"
                  className="form-control input-rounded"
                  id="task-contact"
                  placeholder="Enter your zip code"
                  onChange={this.handleChange}
                  name="zipcode"
                />
                <small id="contactHelp" className="form-text text-muted">We can only work with a selected area. Email us if you have any questions.</small>
              </div>

              <div className="form-group">
                <label htmlFor="task-contact" className="font-weight-bolder">Contact Info:</label>
                <input
                  type="input"
                  className="form-control input-rounded"
                  id="task-contact"
                  placeholder="Enter contact information"
                  name="contact"
                  onChange={this.handleChange}/>
                <small id="contactHelp" className="form-text text-muted">You can enter an email address or phone number, whatever you prefer.</small>
              </div>

            </ModalBody>

            <ModalFooter className="mx-auto">
            <small className="form-text text-muted">
              By clicking "Submit", you're agreeing to this site's <a href="#link">"Terms of Use"</a> as well as it's <a href="#link">"Policy agreement"</a>.
            </small>
              <Button color="danger"  onClick={this.toggle} style={{borderRadius:"20px"}}>
                Close
              </Button>
              <Button color="primary"  onClick={this.handleSubmit} style={{borderRadius:"20px"}}>
                Submit
              </Button>

              </ModalFooter>
            </form>
        </Modal>
      </div>
    )
  }

}

const mapStateToProps = state => ({
  tasks: state.tasks
});

export default connect(
  mapStateToProps,
  { postTask }
)(TaskButton);
