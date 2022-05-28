import React from 'react';

const WebtoonInfo = (props) => {
  const webtoon = props.webtoon;
  // webtoon.thumbnail은 '썸네일' webtoon json의 thumbnail을 가져온다.
  // webtoon_detail.json과 연결되어있다.
  return (
    <div className="wrap_webtoon">
      <img
        src={webtoon.thumbnail}
        className="img_webtoon"
        alt={webtoon.title}
      />
      
      <div className="info_webtoon">
        <strong className="tit_webtoonb">{webtoon.title}</strong>
        {/* {
                    webtoon.genre.map((g, index) => (
                        <span key={index} className="txt_genre">{g}</span>
                    ))
                } */}
        <span className="num_score"> 평점 : {webtoon.score}</span>
      </div>
    </div>
  );
};


export default WebtoonInfo;