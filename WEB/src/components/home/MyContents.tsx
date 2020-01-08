import React from 'react';

import { 
    Row,
    Col,
} from 'react-bootstrap';

import img1 from './../../img/top_card_1.png';

type Props = {}
type State = {}
class MyContents extends React.Component<Props,State>{

    constructor(props:Props,state:State){
        super(props,state);
    }

    componentDidMount(){
    }

    render(){;    
      return (
        <div className="row mb-5 mx-5">
            <div className="col-md-4 col-sm-12 my-2">
                <div className="card">
                    <img src={img1} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">由水優輝とは？</h5>
                        <p className="card-text">1995年2月生まれの魚座。温厚な性格と時々見せる冷静さと、とち狂った性格が持ち味と言われているが、そもそも由水優輝とはいったいどんな人物なのだろうか――。</p>
                        <a href="#" className="btn btn-primary">※絶対に押さないでください</a>
                    </div>
                    </div>
            </div>

            <div className="col-md-4 col-sm-12 my-2">
                <div className="card">
                    <img src={img1} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">由水優輝が出来ること</h5>
                        <p className="card-text">社会人二年目にして4度の転職を成功させてきた由水優輝。しかし、様々な企業から由水優輝が選ばれるのには理由がありました。</p>
                        <a href="#" className="btn btn-primary">PUSH ON THIS</a>
                    </div>
                </div>
            </div>

            <div className="col-md-4 col-sm-12 my-2">
                <div className="card">
                    <img src={img1} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">由水優輝が関わった動画達</h5>
                        <p className="card-text">由水優輝のクリエイティブのほんの一部。というより思い出。チームの人達と皆で作りました。一人じゃ絶対作れない宝物達。</p>
                        <a href="#" className="btn btn-primary">WOTCHする</a>
                    </div>
                </div>
            </div>
        </div>
      );
    }

}

export default MyContents;