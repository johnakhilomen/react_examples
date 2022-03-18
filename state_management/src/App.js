import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ComplexForm from './ComplexForm';
import ArraysAndObjects from './ArraysAndObjects';
import StateOverMultipleComponents from './StateOverMultipleComponents';

function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="/form" element={<ComplexForm />} />
      <Route path="/cointoss" element={<ArraysAndObjects />} />
      <Route path="/headerandcontent" element={<StateOverMultipleComponents />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
