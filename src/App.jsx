import './App.css';
import Newsmall from './Routes/Newsmall';
import PatientForm from './Routes/PatientForm';
import Header from './components/Header';
import Small from './components/Small';
import { BrowserRouter as Router,Routes,Route,Navigate } from 'react-router-dom';

function App() {
 

  return (
    
    <Router>
      <Routes>
        <Route path='/' element={<Newsmall/>} />
        <Route path='/patients-form' element={<PatientForm/>} />
      </Routes>
    </Router>
      
    
  )
}

export default App
