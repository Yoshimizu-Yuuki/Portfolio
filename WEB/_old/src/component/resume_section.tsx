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

        return (
            <div className="piece">
                <h3>{this.props.join_date}　{this.props.company}</h3>
                <p>・{this.props.summary}</p>
                <ReasemeTag resume_id={this.props.resume_id}/>
            </div>
        );
    }

}

  
  export default ResumeSection;