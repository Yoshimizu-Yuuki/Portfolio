import React from 'react';

import { 
    Row,
    Col,
    Carousel
} from 'react-bootstrap';

import img1 from './../../img/top_slider_1.png';
import img2 from './../../img/top_slider_2.png';
import img3 from './../../img/top_slider_3.png';

type Props = {}
type State = {}
class MyCarousel extends React.Component<Props,State>{

    constructor(props:Props,state:State){
        super(props,state);
    }

    componentDidMount(){
    }

    render(){
      return (
        <Row className="my-5">
            <Col>
                <Carousel>
                    <Carousel.Item>
                        <img src={img1} className="d-block w-100" alt="..." />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={img2} className="d-block w-100" alt="..." />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={img3} className="d-block w-100" alt="..." />
                    </Carousel.Item>
                </Carousel>
            </Col>
        </Row>
      );
    }

}

export default MyCarousel;