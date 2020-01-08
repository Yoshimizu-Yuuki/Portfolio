import React from 'react';

type Props = {
    title:string,
    summary:string
}
type State = {}
class MyPagetitle extends React.Component<Props,State>{

    constructor(props:Props,state:State){
        super(props,state);
    }

    componentDidMount(){
    }

    render(){;    
      return (
        <div>
            <div className="row mt-5">
            </div>

            <div className="row mt-5">
                <div className="offset-1 col-10 text-center">
                  <h1 className="display-5">#{this.props.title}</h1>
                </div>
            </div>

            <div className="row">
                <div className="offset-1 col-10 text-center">
                  <p className="border-dark border-bottom">{this.props.summary}</p>
                </div>
            </div>
        </div>
      );
    }

}

export default MyPagetitle;