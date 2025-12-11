import React,{ useState, useEffect, useRef, Suspense } from 'react'
import {Students , NewStudent} from './components/students/student'
import Button from './UI/buttons/button';
import './App.css'
import Toolbar from './components/students/countaiers/Header/Toolbar/Toolbar';
import { BrowserRouter, Route ,Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
const AddStudent = React.lazy(()=> import('./pages/AddStudent'));
import EditStudent from './pages/EditStudent';
import NotFound from './pages/NOtFound';
import { AuthContextProvider } from './context/authContext';
import {StudentProvider} from './context/StudentsContext';
function App() {


  return (
    <BrowserRouter>
    <AuthContextProvider>
      <StudentProvider>
     
      <Toolbar></Toolbar>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/add-student' element={

          <Suspense fallback={<p>loading</p>}>
              <AddStudent/>
          </Suspense>
        }></Route>
        <Route path='/student/:id' element={<EditStudent/>} exact></Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
  
      </StudentProvider>
      </AuthContextProvider>
       
      </BrowserRouter>
  
  );
}

export default App
