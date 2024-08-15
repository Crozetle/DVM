import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<div>Главная страница</div>} />
      <Route path="/user" element={<div>Страница пользователя</div>} />
      <Route path="/register" element={<div>Страница регистрации</div>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
