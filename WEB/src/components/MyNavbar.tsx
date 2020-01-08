import React from 'react';

import { 
    Nav,
    Navbar,
} from 'react-bootstrap';


type Props = {
}

type State = {
}

class MyNavbar extends React.Component<Props,State>{

    constructor(props:Props,state:State){
        super(props,state);
    }

    componentDidMount(){
    }

    render(){;    
      return (
        <header>
            <Navbar bg="light" expand={false} fixed="top" >
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Brand href="#">＋Yoshimizu Yuuki's Portfolio Site＋</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">概要</Nav.Link>
                        <Nav.Link href="/resume">経歴</Nav.Link>
                        <Nav.Link href="/movie">参加動画</Nav.Link>
                        <Nav.Link href="/novel">小説</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
      );
    }

}

export default MyNavbar;