import React from 'react';
import {Link} from "react-router-dom";

// 다음 오류 사항 (5월 27일 수정예정)
// webtoon_list.json의 id를 3개로 줄임.
// 각각 1개씩 맡아서 제작하는 게 좋을 것으로 생각.
// 동형이는 3번 자유게시판 소스코드를 활용하여 제작.
// 나와 학준이는 1번 졸업점수 계산기 구축을 하는 것을 목표.
// 1번에서는 처음에는 스마트융합대학 버튼을 만들고 관련학과의 졸업점수계산을 1차 목표로.
const WebtoonList = (props) => {
    return (
      <ul className="list_webtoon">
        {
          // 이 부분을 주석처리하면 웹툰리스트들이 사라짐.
          // 원리는 props.list.map에서 webtoon의 index를 받아 해당 id오 썸네일, title의 해당하는 값을 불러오는 것으로 추측된다.
          // 이어서 props(properties)는 '임의의 입력'을 뜻하며, 어떠한 값을 컴포넌트에 전달할 때 사용된다.
          props.list.map((webtoon, index) => (
            <li key={index}>
              <Link to={`/webtoon/${webtoon.id}`} className="link_webtoon">
                <img
                  src={webtoon.thumbnail}
                  // src를 새로운 js파일로 이동하는 걸로 설정할것!
                  className="img_webtoon"
                  alt={webtoon.title}
                  // img 태그를 넣을 땐 alt를 무조건 넣을 것
                  // alt의 값은 빈 문자열을 만들어야 하기에 최대한 속성이나 func을 넣는 것이 좋음
                />
                <div className="info_webtoon">
                  <strong className="tit_webtoon">{webtoon.title}</strong>
                  {webtoon.artist}
                </div>
              </Link>
            </li>
          ))
        }
      </ul>
    );
}

export default WebtoonList;