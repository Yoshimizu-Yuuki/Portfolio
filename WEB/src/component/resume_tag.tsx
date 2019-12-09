import React from 'react';
import '../Home.css';
import '../Resume.css';

type Props = {
    tagname: Array<string>;
}
class ResumeTag extends React.Component<Props>{

    render(){

        //Array型を展開してくれる
        let tags = new Array();
        this.props.tagname.forEach(element => {
            tags.push(<li>{element}</li>);
        });

        return (
            <div className="resumetag">
                <ul className="tags">
                    {tags}
                </ul>
            </div>);
    }

}

export default ResumeTag;