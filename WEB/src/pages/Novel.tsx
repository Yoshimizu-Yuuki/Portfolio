import React from 'react';

import MyNavbar from '../components/MyNavbar'
import MyPagetitle from '../components/MyPagetitle'
import MyContents from '../components/novel/MyContents'

import { 
    Container
} from 'react-bootstrap';

type Props = {
}

type State = {
}

class Novel extends React.Component<Props,State>{

    constructor(props:Props,state:State){
        super(props,state);
    }

    componentDidMount(){
    }

    render(){;    
      return (
        <div className="Novel">
          <MyNavbar />
          <Container fluid={true}>
            <MyPagetitle
              title="趣味で書いた小説"
              summary="一人でも楽しんでくれたらそれで充分なのだ"
            />
            <MyContents />
          </Container>
        </div>
      );
    }

}

export default Novel;