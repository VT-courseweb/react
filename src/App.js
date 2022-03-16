// powershell에 작성 npm install bootstrap후
import 'bootstrap/dist/css/bootstrap.min.css'; // 리액트에 부트스트랩연결시 
import React from 'react';
import { Route, Routes} from 'react-router-dom';  //라우터
import { Main, Login, Join, Info } from './pages';
import Header from './pages/Header';  //페이지 헤더만든부분
import {Button} from "react-bootstrap"; //부트스트랩중 버튼  연결



//console.log(React.version);     //리엑트버전확인
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
        <Routes>
            <Route exact ={true} path="/" element={<Main/>}/>
            <Route path="/join" element={<Join/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/info" element={<Info/>} />
        </Routes>
      </header>
      <Button>Boot strap</Button>
    </div>
  );
}

export default App;
