// powershell에 작성 npm install bootstrap후
import 'bootstrap/dist/css/bootstrap.min.css'; // 리액트에 부트스트랩연결시 
import React from 'react';
import { Route, Routes} from 'react-router-dom';  //라우터
import { Main, Login, Regester, Datasetes, Upload, Library, Info, Dos } from './pages';
import Header2 from './pages/Header2';
//import {Button} from "react-bootstrap"; //부트스트랩중 버튼  연결
import Copywriter from './pages/Copywriter';
//console.log(React.version);     //리엑트버전확인


function App() {
  return (
    <div className="App">
      <Header2></Header2>
        <Routes>
            <Route exact ={true} path="/" element={<Main/>}/>
            <Route path="/Dos" element={<Dos/>} />
            <Route path="/Library" element={<Library/>} />
            <Route path="/Datasetes" element={<Datasetes/>} />
            <Route path="/Upload" element={<Upload/>} />
            <Route path="/Regester" element={<Regester/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/info" element={<Info/>} />
        </Routes>
        <br/>
      <Copywriter></Copywriter>
      
      
    </div>
  );
}

export default App;
