import logo from './logo.svg';
import './App.css';
import Nav from './components/Header';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import Api from './api/Api';
import Main from './components/Main';

function App() {
  const [profile, setProfile] = useState({})
  useEffect(() => {
    Api().get()
    .then(response=>setProfile(response.data))
    .catch(err=>console.log(err));

  }, [profile])
  return (
    <div className="App">
     
       <Header userData={profile}/>
       <Main userData={profile} />

    </div>
  );
}

export default App;
