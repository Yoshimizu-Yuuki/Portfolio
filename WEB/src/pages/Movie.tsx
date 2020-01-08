import React from 'react';

import MyNavbar from '../components/MyNavbar'
import MyAppeal from '../components/MyAppeal'
import MyPagetitle from '../components/MyPagetitle'
import MyContents from '../components/movie/MyContents'

import { 
    Container
} from 'react-bootstrap';

type Props = {
}

type State = {
}

class Movie extends React.Component<Props,State>{

    constructor(props:Props,state:State){
        super(props,state);
    }

    componentDidMount(){
    }

    render(){;    
      return (
        <div className="Movie">
          <MyNavbar />
          <Container fluid={true}>
            <MyPagetitle
              title="参加動画"
              summary="宝物達。チームのみんなと一生懸命作りました。"
            />
            <MyContents />
            <MyAppeal />
          </Container>
        </div>
      );
    }

}

export default Movie;