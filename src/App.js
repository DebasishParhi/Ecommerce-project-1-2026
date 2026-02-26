import './App.css';
import Footer from './components/Footer';
import Login from './components/Login';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateComponent from './components/privateComponent';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route element={<PrivateComponent/>}>
            <Route path='/' element={<h1>Product list component</h1>}></Route>
            <Route path='/add' element={<h1>Add list component</h1>}></Route>
            <Route path='/update' element={<h1>Update list component</h1>}></Route>
            <Route path='/logout' element={<h1>Logout component</h1>}></Route>
            <Route path='/profile' element={<Profile/>}></Route>
          </Route>
          <Route path='/login' element={<Login />}></Route>

        </Routes>
      </BrowserRouter>

      <Footer />

    </div>
  );
}

export default App;
