import React from 'react';

import MyNavbar from '../components/MyNavbar'
import MyAppeal from '../components/MyAppeal'
import MyPagetitle from '../components/MyPagetitle'
import MyContents from '../components/resume/MyContents'

import { 
    Container
} from 'react-bootstrap';

type Props = {
}

type State = {
}

class Resume extends React.Component<Props,State>{

    constructor(props:Props,state:State){
        super(props,state);
    }

    componentDidMount(){
    }

    render(){;    
      return (
        <div className="Resume">
          <MyNavbar />
          <Container fluid={true}>
            <MyPagetitle
              title="由水優輝が出来ること"
              summary="これは5度の転職を経たものだけが辿り着ける境地（大嘘）"
            />
            <MyAppeal />
            <MyContents />

          </Container>
        </div>
      );
    }

}

export default Resume;