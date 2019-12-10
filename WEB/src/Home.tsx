import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="Home">
        <div className="typetext">
            <h1 className="myh1">Yoshimizu Yuuki's</h1>
            <h1 className="myh1">Portfolio SITE</h1>
        </div>
        <div className="mylinks">
            <ul>
                <li>Twitter：<a href="https://twitter.com/yui_ksmz" target="_blank">@yui_ksmz</a></li>
                <li>なろう：<a href="https://mypage.syosetu.com/959497/" target="_blank">@yui_ksmz</a></li>
                <li>スキル⇒<a href="/skill">＿＿＿＿</a></li>
                <li>経歴⇒<a href="/resume">＿＿＿＿</a></li>
            </ul>
        </div>
        <div className="myfooter">
            <h1 className="myh2">小説が書けて</h1>
            <h1 className="myh2">動画編集も出来る </h1>
            <h1 className="myh2">エンジニア</h1>
        </div>
    </div>
  );
}

export default Home;