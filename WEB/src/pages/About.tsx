import React from 'react';

import MyNavbar from '../components/MyNavbar'
import MyAppeal from '../components/MyAppeal'
import MyPagetitle from '../components/MyPagetitle'
import MyContents from '../components/about/MyContents'

import { 
    Container
} from 'react-bootstrap';


type Props = {
}

type State = {
}

class About extends React.Component<Props,State>{

    constructor(props:Props,state:State){
        super(props,state);
    }

    componentDidMount(){
    }

    render(){;    
      return (
        <div className="About">
          <MyNavbar />
          <Container fluid={true}>
            <MyPagetitle
              title="由水優輝とは？"
              summary="”それは人である”　あるいは　”頭のおかしい人”　いずれにしても人である"
            />
            <MyAppeal />
            <MyContents />

          </Container>
        </div>
      );
    }

}

export default About;