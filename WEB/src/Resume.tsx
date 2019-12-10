import React from 'react';
import './Home.css';
import './Resume.css';
import ResumeSection from './component/resume_section';
import axios from 'axios';

type Props = {
}

type State = {
    query:any[]
}

class Resume extends React.Component<Props,State>{

    constructor(props:Props,state:State){
        super(props,state);
        this.state = {query:[]};
        this.getQuery = this.getQuery.bind(this);
    }

    componentDidMount(){
        axios.get('http://34.85.20.103:9000/resume', {})
        .then(this.getQuery)
        .catch(function(error){
            console.log(error)
        });
    }

    element = new Array();

    getQuery(response:any){
        for(let i = 0; i < response.data.length; i++)
            this.element.push(<ResumeSection key={i} resume_id={response.data[i].resume_id} join_date={response.data[i].join_date} company={response.data[i].company} summary={response.data[i].summary}/>);
        this.setState({query:this.element})
    }

    render(){;
    
      return (
        <div className="Resume">
            <div className="wrap">
                {(this.state.query !== null)?this.state.query:""}
            </div>
        </div>
      );
    }

}

export default Resume;