import React from 'react';
import { Link } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';

// const StartClick = () => {
//     window.open("","_blank");
// }



const EpisodeList = (props) => (
  <ul className = "Btn">

    <li>
      <Link to="/" className="RealStart">
        시작하기
      </Link>
    </li>

    <br />

    <li>
      <Link to="/about">독수리 이미지 파일 놓을 자리</Link>
    </li>
  </ul>

  // 아래의 문을 주석처리하는 것으로 에피소드 객체가 표시되지 않음.
  // 아래의 코드 수정 : 하나의 큰 사용설명서와 그 아래에 차례로 시작버튼과 독수리 이미지를 넣음
  // 시작버튼을 누르면 list_episode와 같이 슬라이드가 넘어가는 형식으로 진행.
  // <ul className="list_webtoon list_episode">
  //   {props.episodes.map((episode, index) => (
  //     <li key={index}>
  //       <Link to={`/viewer/${episode.id}`} className="link_webtoon">
  //         <img
  //           src={episode.thumbnailImage.url}
  //           className="Link_webtoon"
  //           alt={episode.title}
  //         />
  //         <div className="info_webtoon">
  //           <strong className="tit_webtoon">{episode.title}</strong>
  //           {`${episode.dateCreated.substr(
  //             0,
  //             4
  //           )}.${episode.dateCreated.substr(
  //             4,
  //             2
  //           )}.${episode.dateCreated.substr(6, 2)}`}
  //         </div>
  //       </Link>
  //     </li>
  //   ))}
  // </ul>

  // <ul>
  //     <li>
  //         {/* <button onClick={StartClick} className="StartBtn">시작하기</button> */}
  //         {/* <link to ="">시작하기</link> */}
  //     </li>
  // </ul>
  // link를 통해서 js파일(계산기 웹페이지)을 만들어 해당 링크로 들어가도록 유도.
);

export default EpisodeList;
