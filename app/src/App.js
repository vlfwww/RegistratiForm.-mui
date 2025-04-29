import './App.css';
import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.js'
import LoginPage from './pages/LoginPage/LoginPage.js'
import SignUpPage from './pages/SignUpPage/SignUpPage.js'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/login" element={<LoginPage/>}></Route>
      <Route path="/signUp" element={<SignUpPage/>}></Route>
    </Routes>
  );
}

export default App;
