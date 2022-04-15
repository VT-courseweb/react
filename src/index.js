import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
//import './index.css';
import reportWebVitals from './reportWebVitals';
// powershell에 작성 npm install bootstrap후
import 'bootstrap/dist/css/bootstrap.min.css'; // 리액트에 부트스트랩연결시 
import { Route, Routes} from 'react-router-dom';  //라우터
import { Main, Login, Register, Datasets,Datasetsdetail, Code,Codedetail, Upload, Library, FindPW, Docs } from './pages';
import Header2 from './pages/Header2';
// import Header from './pages/Header';
import Copywriter from './pages/Copywriter';
//console.log(React.version);     //리엑트버전확인



ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
  <div className="index">
    <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0"/>
      <div className="index-header">
        <Header2></Header2>
        {/* <Header></Header> */}
      </div>
      <div className="index-body">
        <Routes>
            <Route exact ={true} path="/" element={<Main/>}/>
            <Route path="/Docs" element={<Docs/>} />
            <Route path="/Library" element={<Library/>} />
            <Route path="/Datasets" element={<Datasets/>} />
            <Route path="/Datasetsdetail" element={<Datasetsdetail/>} />
            <Route path="/Code" element={<Code/>} />
            <Route path="/Codedetail" element={<Codedetail/>} />
            <Route path="/Upload" element={<Upload/>} />
            <Route path="/Register" element={<Register/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/FindPW" element={<FindPW/>} />
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
