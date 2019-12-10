import React from 'react';
import '../Home.css';
import '../Resume.css';
import axios from 'axios'

type Props = {
    resume_id:number
}
type State = {
    query: any[];
}

class ResumeTag extends React.Component<Props,State>{

    constructor(props:Props,state:State){
        super(props,state);
        this.state = {query:[]};
        this.getQuery = this.getQuery.bind(this);
    }

    tags = new Array();

    componentDidMount(){
        
        axios.get('http://34.85.20.103:9000/tag/' + this.props.resume_id, {
        })
        .then(this.getQuery)
        .catch(function(error:any){
            console.log(error);
        });
    }

    element = new Array();

    getQuery(response:any){
        for(let i = 0; i < response.data.length; i++)
            this.element.push(<li key={i}>{response.data[i].tag_name}</li>);
        this.setState({query:this.element})
    }

    render(){

        return (
            <div className="resumetag">
                <ul className="tags">
                {(this.state.query !== null)?this.state.query:""}
                </ul>
            </div>);
    }

}

export default ResumeTag;