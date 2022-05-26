import React from 'react';
import {Link} from "react-router-dom";

// 한남대학교 마이포탈
const handleClick1 = () => {
    window.open("https://my.hnu.kr/html/main/sso.html","_blank");
}
// 한남대학교 하이클래스
const handleClick2 = () => {
    window.open("https://hiclass.hannam.ac.kr/learningx/main","_blank");
}
// 한남대학교 공식사이트
const handleClick3 = () => {
    window.open("http://www.hannam.ac.kr/kor/main/","_blank");
}

// MY-Portal을 클릭하면 to= "/?day=mon" 경로로 이동하고, ?day=mon 컴포넌트 내용을 확인할 수 있다.
// day의 속성인 mon일 때
const Gnb = (props) => (
  <ul className="gnb">
    <li>
      <button onClick={handleClick1} className="myportal"> MY-Portal </button>
    </li>
    
    <li>
      <button onClick={handleClick2} className="myportal"> Hi-Class </button>
    </li>

    <li>
      <button onClick={handleClick3} className="myportal"> 한남대학교 </button>
    </li>
  </ul>
);

export default Gnb;