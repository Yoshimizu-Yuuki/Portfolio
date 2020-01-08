import React from 'react';

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
            <div className="offset-md-1 col-md-10 offset-sm-0 col-sm-12 my-2">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title border-primary border-bottom">由水優輝の出来ること</h5>
                        <p className="card-text">
                        ・WEBプログラミング（PHP,Laravel,Node.js,React,Docker,PostgreSQL,MariaDB...など）
                        </p>
                        <p className="card-text">
                        ・ゲームプランナー
                        </p>
                        <p className="card-text">
                        ・小説を書く⇒<a href="#">小説一覧</a>
                        </p>
                        <p className="card-text">
                        ・チームマネジメント
                        </p>
                        <p className="card-text">
                        ・動画編集（AfterEffects&PremirePro）⇒<a href="#">動画一覧</a>
                        </p>
                        <p className="card-text">
                        ・画像加工（Photoshop）
                        </p>
                        <p className="card-text">
                        ・履歴書と職務経歴書のアドバイス（5回中途入社した知見）
                        </p>
                        <p className="card-text">
                        ・昼寝
                        </p>
                        <p className="card-text">
                        ・冷えすぎるギャグ
                        </p>
                        <a href="#" className="btn btn-primary">会ってみる！</a>
                    </div>
                </div>
            </div>
        </div>
      );
    }

}

export default MyContents;