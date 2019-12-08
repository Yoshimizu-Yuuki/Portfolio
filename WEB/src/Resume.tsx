import React from 'react';
import './Home.css';
import './Resume.css';

const Resume: React.FC = () => {
  return (
    <div className="Resume">
        <div className="wrap">

          <div className="piece">
              <h3>2017年3月　TECH.C卒業</h3>
              <p>・ゲームプログラミングしたり、企画立ててゲーム制作に携わる</p>
              <div>
                  <ul className="tags">
                      <li>#C++</li>
                      <li>#Direct3D11</li>
                      <li>#Direct2D</li>
                      <li>#DirectWrite</li>
                      <li>#HLSL</li>
                      <li>#C#</li>
                      <li>#Unity</li>
                      <li>#プランナー</li>
                  </ul>
              </div>
          </div>

          <div className="piece">
              <h3>2017年10月　株式会社コーエーテクモゲームス入社</h3>
              <p>・ガンダムヒーローズの開発にゲームプランナーとして携わる。</p>
              <div>
                  <ul className="tags">
                      <li>#プランナー</li>
                  </ul>
              </div>
          </div>

          <div className="piece">
              <h3>2018年9月　株式会社ブレイントラスト入社</h3>
              <p>・外国人向け受験システムの開発に携わる。</p>
              <div>
                  <ul className="tags">
                      <li>#PHP5</li>
                      <li>#Vagrant</li>
                      <li>#Laravel</li>
                      <li>#apache</li>
                      <li>#OracleDB</li>
                      <li>#HTML</li>
                      <li>#CSS</li>
                      <li>#JQuery</li>
                  </ul>
              </div>
          </div>

          <div className="piece">
              <h3>2019年3月　日本システム・エイト株式会社入社</h3>
              <p>・英語の受験システムの開発に携わる。</p>
              <div>
                  <ul className="tags">
                      <li>#PHP7</li>
                      <li>#Materialize</li>
                      <li>#Azure</li>
                      <li>#PostgreSQL</li>
                      <li>#HTML</li>
                      <li>#CSS</li>
                      <li>#JS</li>
                  </ul>
              </div>
          </div>

          <div className="piece">
              <h3>2019年8月　Unlimited入社</h3>
              <p>・ゲーム部プロジェクトに携わる</p>
              <div>
                  <ul className="tags">
                      <li>#VTuber</li>
                      <li>#ゲーム部</li>
                      <li>#動画プロデューサー</li>
                      <li>#チームマネジメント</li>
                      <li>#動画ディレクター</li>
                      <li>#動画編集</li>
                  </ul>
              </div>
          </div>
        </div>
    </div>
  );
}

export default Resume;