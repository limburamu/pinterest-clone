// import logo from './logo.svg';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
// import MainBoard from './components/MainBoard';
import MainRoute from './Routes/MainRoute';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <MainRoute />
      {/* <MainBoard /> */}
    </BrowserRouter>
  );
}

export default App;
