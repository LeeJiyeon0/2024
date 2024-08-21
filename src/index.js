import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//.import App from './App';
import reportWebVitals from './reportWebVitals';


// import Library from './chepter_03/Library';
// import Clock from './chepter_04/Clock';
// import CommentList from './chepter_05/CommentList';
// import NotificationList from './chepter_06/NotificationList';
// import Accommodate from './chepter_07/Accommodate';
// import ConfirmButton from './chepter_08/ConfirmButton';
// import LandingPage from './chepter_09/LandingPage';
// import AttendanceBook from './chepter_10/AttendanceBook';
// import SignUp from './chepter_11/SignUp';
// import Calculator from './chepter_12/Calculator';
// import ProfileCard from './chepter_13/ProfileCard';
//import Dark0Light from './chepter_14/Dark0Light';
import Blocks from './chepter_15/Blocks';





const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Blocks />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
