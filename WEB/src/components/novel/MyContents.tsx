import React from 'react';

import { 
  Accordion,
  Button
} from 'react-bootstrap';

type Props = {}
type State = {}
class MyContents extends React.Component<Props,State>{

    constructor(props:Props,state:State){
        super(props,state);
    }

    componentDidMount(){
    }

    render(){
      return (
        <div className="row mb-5 mx-5">
            <div className="offset-md-1 col-md-10 offset-sm-0 col-sm-12 my-2">
              <Accordion>
                <div className="card">
                  <div className="card-header" id="headingOne">
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                      #虹の果てに集う少女のカタチ
                    </Accordion.Toggle>
                  </div>
                  <Accordion.Collapse eventKey="0">
                    <div className="card-body">
                      <p className="card-text">
                          <a href="#">・ああ</a>
                      </p>
                    </div>
                  </Accordion.Collapse>
                </div>


                <div className="card">
                  <div className="card-header" id="headingOne">
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                      #綺麗な少女は心の中で微笑んだ
                    </Accordion.Toggle>
                  </div>
                  <Accordion.Collapse eventKey="1">
                    <div className="card-body">
                      <p className="card-text">
                          <a href="#">・ああ</a>
                      </p>
                    </div>
                  </Accordion.Collapse>
                </div>


                <div className="card">
                  <div className="card-header" id="headingOne">
                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                      #短編集
                    </Accordion.Toggle>
                  </div>
                  <Accordion.Collapse eventKey="2">
                    <div className="card-body">
                      <p className="card-text">
                          <a href="#">・ああ</a>
                      </p>
                    </div>
                  </Accordion.Collapse>
                </div>
              </Accordion>
            </div>
        </div>
      );
    }

}

export default MyContents;