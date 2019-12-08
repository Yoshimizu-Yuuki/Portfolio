CREATE TABLE	resume	(		
    resume_id	serial,
    join_date	text	NOT NULL	,
    company	text	NOT NULL	,
    summary	text	NOT NULL	,
	PRIMARY KEY (resume_id)
);

CREATE TABLE	tag	(		
    tag_id	serial,
    resume_id	int	NOT NULL	,
    tag_name	text	NOT NULL	,
	PRIMARY KEY (tag_id)
);



INSERT INTO	resume(join_date,company,summary) VALUES(
	'2017年3月'	,
	'東京デザインテクノロジーセンター専門学校卒業'	,
	'ゲームプログラミングしたり、企画立ててゲーム制作に携わる。'	
),		
(		
	'2017年10月'	,
	'株式会社コーエーテクモゲームス入社'	,
	'ガンダムヒーローズの開発にゲームプランナーとして携わる。'	
),		
(		
	'2018年9月'	,
	'株式会社ブレイントラスト入社'	,
	'外国人向け受験システムの開発に携わる。'	
),		
(		
	'2019年3月'	,
	'日本システム・エイト株式会社入社'	,
	'英語の受験システムの開発に携わる。'	
),		
(		
	'2019年8月'	,
	'株式会社Unlimited入社'	,
	'ゲーム部プロジェクトに携わる。'	
);


INSERT INTO	tag(resume_id, tag_name)VALUES
(1,	'C++'),
(1,	'Direct3D11'),
(1,	'Direct2D'),
(1,	'DirectWrite'),
(1,	'HLSL'),
(1,	'C#'),
(1,	'Unity'),
(1,	'プランナー'),		
(2,	'プランナー'),
(3,	'PHP5'),
(3,	'Vagrant'),
(3,	'Laravel'),
(3,	'apache'),
(3,	'OracleDB'),
(3,	'HTML'),
(3,	'CSS'),
(3,	'JQuery'),
(4,	'PHP7'),
(4,	'Materialize'),
(4,	'Azure'),
(4,	'PostgreSQL'),
(4,	'HTML'),
(4,	'CSS'),
(4,	'JS'),
(5,	'VTuber'),
(5,	'ゲーム部'),
(5,	'動画プロデューサー'),
(5,	'チームマネジメント'),
(5,	'動画ディレクター'),
(5,	'動画編集');