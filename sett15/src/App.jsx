import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import MyNavbar from './components/MyNavbar';
import UsersPage from './pages/UsersPage';
import MyFooter from './components/MyFooter';

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/posts/:id" element={<DetailPage />} />
            <Route path="/users" element={<UsersPage />} />
          </Routes>
        <MyFooter />
        </BrowserRouter>
    </>
  );
}

export default App;
