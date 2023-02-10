import react from 'react';
import { Link } from 'react-router-dom';

function Header () {
    return (
        <>
            <h1>헤더부분</h1>
            <Link to="/">홈으로</Link>
            <br/>
            <Link to="productList">리스트 보기</Link>
        </>
    )
}

export default Header;