import React from 'react';
import MyNavbar from '../components/MyNavbar'
import MyCarousel from '../components/home/MyCarousel'
import MyAppeal from '../components/home/MyContents'

import { 
    Container
} from 'react-bootstrap';


type Props = {
}

type State = {
}

class Home extends React.Component<Props,State>{

    constructor(props:Props,state:State){
        super(props,state);
    }

    componentDidMount(){
    }

    render(){;    
      return (
        <div className="Home">
            <MyNavbar />
            <Container fluid={true}>
                <MyCarousel />
                <MyAppeal />
            </Container>
        </div>
      );
    }

}

export default Home;