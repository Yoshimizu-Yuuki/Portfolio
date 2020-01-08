import React from 'react';

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
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title border-primary border-bottom">由水優輝とは？</h5>
                        <p className="card-text">
                        1995年2月21日生まれの24歳。性別は男。
                        </p>
                        <p className="card-text">
                        社会人3年目にして5度の中途入社を経験した転職の猛者。エンジニアやってないで、いっそ『転職アドバイザー』にでもなった方が良さそうな程である。
                        </p>
                        <p className="card-text">
                        ⇒ということで転職アドバイス始めました。履歴書と職務経歴書を送って頂き、それを見て私が色々とアドバイスするサービスです。需要があれば使ってみてください。人のいいところを見つけるのが得意です。
                        </p>
                        <a href="#" className="btn btn-primary disabled">転職アドバイザー使ってみる</a>
                        <p className="card-text mt-5">
                        学生時代はゲームプログラミングを学び、仕事としてゲームプランナーやったり、WEBエンジニアやったり、月間再生数日本一を取ったVTuberの動画企画やったり、趣味で小説を書いたり絵を描いたり。色々とやってるみたいです。
                        転職アドバイザーってサービス立ち上げて始めました。
                        </p>
                        <p className="card-text">
                        性格は温厚な性格とよく他人から言われます。その温厚さから時々仏とか言われるほどです。まぁ容姿が大仏みたいだからかもしれませんがｗ
                        </p>
                        <p className="card-text">
                        Twitter⇒<a href="#">@yui_ksmz</a>
                        </p>
                        <p className="card-text">
                        Qiita⇒<a href="#">@YoshimizuYuuki</a>
                        </p>
                        <p className="card-text">
                        関わった動画⇒<a href="#">＿＿＿＿</a>
                        </p>
                        <a href="#" className="btn btn-primary">で、何が出来るの？</a>
                    </div>
                </div>
            </div>
        </div>
      );
    }

}

export default MyContents;