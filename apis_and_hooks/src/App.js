import logo from './logo.svg';
import './App.css';
import EffectOnce from './EffectOnce';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProfileEffect from './ProfileEffect';
import EffectCleanUp from './EffectCleanUp';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/effect_once" element={<EffectOnce />} />
      <Route path="/profile_effect" element={<ProfileEffect />} />
      <Route path="/profile_effectcleanup" element={<EffectCleanUp />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
