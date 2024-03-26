import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Route, Routes,Navigate, BrowserRouter } from "react-router-dom";
import StudentDashboard from './pages/students/studentDashboard';
import MentorDashboard from './pages/mentors/mentorDashboard';
import MarkAttnd from './pages/mentors/markAttendance';
import FloatOpp from './pages/mentors/floatOppurtunity';
import ModDashboard from './pages/mod/modDashboard';
function App() {
  return (
    <BrowserRouter>
    <Routes>
       <Route path='/'>
         
         <Route index element={<ModDashboard/>}/>
         <Route path='mark-Attendance' element={<MarkAttnd/>}/>
         <Route path='float-Oppurtunity' element={<FloatOpp/>}/>
       </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
