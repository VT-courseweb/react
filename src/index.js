import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
// powershell에 작성 npm install bootstrap후
import 'bootstrap/dist/css/bootstrap.min.css'; // 리액트에 부트스트랩연결시 
import { Route, Routes} from 'react-router-dom';  //라우터
import { Main, Login, Regester, Datasetes, Upload, Library, Info, Dos } from './pages';
import Header2 from './pages/Header2';

import Copywriter from './pages/Copywriter';
//console.log(React.version);     //리엑트버전확인



ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
  <div className="index">
      <div className="index-header">
        <Header2></Header2>
      </div>
      <div className="index-body">
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
      </div>
      <div className="index-footer">
      <Copywriter></Copywriter>
      </div>
    </div>
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
reportWebVitals();
