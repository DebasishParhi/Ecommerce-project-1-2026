import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<h1>Product list component</h1>}></Route>
          <Route path='/add' element={<h1>Add list component</h1>}></Route>
          <Route path='/update' element={<h1>Update list component</h1>}></Route>
          <Route path='/logout' element={<h1>Logout component</h1>}></Route>
          <Route path='/profile' element={<h1>Profile component</h1>}></Route>
        </Routes>
      </BrowserRouter>

      <Footer/>

    </div>
  );
}

export default App;
