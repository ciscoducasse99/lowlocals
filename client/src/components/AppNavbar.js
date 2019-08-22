import React, { Component } from 'react'
import {
    Container,
    Navbar,
    NavbarBrand
} from 'reactstrap'
import NavbarModal from './NavbarModal';

class AppNavbar extends Component {

    state={
        isOpen:false
    }

    toggle = () =>{
        this.setState({
            isOpen:!this.state.isOpen
        })
    }

    render() {

      let currentTime = Date.now();
      let lastTimeVisited = localStorage.getItem('last-visited');
      localStorage.setItem('last-visited', currentTime);
      let twelveHoursInMS = 12 * 60 * 60 * 1000;

      if((currentTime-lastTimeVisited) >= twelveHoursInMS){
        this.setState({
          isOpen:true
        })

      }
        return (
            <div>
                <Navbar className="shadow-sm mb-3 ">
                    <Container>
                        <NavbarBrand className="mr-auto">Locals シ</NavbarBrand>
                        <i onClick={this.toggle} className="ml-auto far fa-2x fa-question-circle btn-circle" />
                    </Container>
                    <NavbarModal isOpen={this.state.isOpen} toggle={this.toggle}/>
                </Navbar>
            </div>
        )
    }
}

export default AppNavbar
