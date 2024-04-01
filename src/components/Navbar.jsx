import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return(
    <nav>
      {/* a 태그 역할*/}
      <Link to='/' style={{marginRight: '10px'}}>Home</Link> {/* home으로 가라는 뜻*/}
      <Link to='/board'>Board</Link> {/* board로 가라는 뜻*/}
    </nav>
  );
}