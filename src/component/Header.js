import React from 'react';
import {Link} from "react-router-dom";


// (오류) header부분의 HANVIS를 클릭시 메인 홈으로 되돌아가지 않음.
// 0528 갑자기 해결됨(????)
const Header = () => (
    <div className="header">
        <Link to="/" className="header">HANVIS</Link>
    </div>
)

export default Header;