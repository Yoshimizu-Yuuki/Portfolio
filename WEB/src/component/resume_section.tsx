import React from 'react';
import '../Home.css';
import '../Resume.css';
import ReasemeTag from './resume_tag';
import axios from 'axios';


type Props = {
    resume_id:number;
    join_date:string;
    company:string;
    summary:string
}
class ResumeSection extends React.Component<Props>{

    render(){

        let tag_result;
        axios.post('http://127.0.0.1:9000/tag/' + this.props.resume_id, {
        })
        .then(function(response){
            tag_result = response.data
        })
        .catch(function(error){});

        return (
            <div className="piece">
                <h3>{this.props.join_date}　{this.props.company}</h3>
                <p>・{this.props.summary}</p>
                {tag_result}
                <ReasemeTag tagname={["aaa","bbb"]}/>
            </div>
        );
    }

}

  
  export default ResumeSection;