import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

import { Route, Routes } from 'react-router';
import Signin from './Pages/Signin';
import { AuthContextProvider } from './context/AuthContext';

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Navbar />
       <Signin/>
      </AuthContextProvider>
    </div>
  );
}

export default App;
