import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes, Link, useParams} from "react-router-dom";
import NoMatch from './NoMatch';
import UserProfile from './UserProfile';

function Home() {
  return <div>
    <Header />
    Home
    </div>;
}

function About() {
  return <p>About</p>;
}

function UserProfile1() {
  const params = useParams();
  return <p>{JSON.stringify(params)}</p>;
}


function Header() {
  return (<div>
  {Array(10)
      .fill()
      .map((ignoredValue, index) => index + 1)
      .map((id) => (
        <div key={id}>
          <Link to={`/user/${id}`}>User {id}</Link>
  </div>)
)}
</div>)

}

function App() {
  return (
    

<BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route path="/user/:userId/post/:postId" element={<UserProfile1 />} />
      <Route path="/user/:userId" element={<UserProfile />} />
    </Routes> 
</BrowserRouter>

   
  );
}

export default App;
