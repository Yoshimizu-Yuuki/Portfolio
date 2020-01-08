import React from 'react';

import { 
    Row,
    Col,
} from 'react-bootstrap';

import img1 from './../img/common_appeal.png';

type Props = {}
type State = {}
class MyAppeal extends React.Component<Props,State>{

    constructor(props:Props,state:State){
        super(props,state);
    }

    componentDidMount(){
    }

    render(){;    
      return (
        <Row className="my-3">
            <Col className="offset-1 col-10">
                <img src={img1} className="d-block w-100" alt="..." />
            </Col>
        </Row>
      );
    }

}

export default MyAppeal;