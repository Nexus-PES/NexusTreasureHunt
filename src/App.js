import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"

//pages
import Challenges from './pages/Challenges';
import Scoreboard from './pages/Scoreboard';
import Question1 from './pages/Question1';
import Login from "./pages/Login"
import PageNotFound from './pages/PageNotFound';

function App() {
    // setTimeout(()=>{
    //   {console.log("done")}
    //   return (
    //     <BrowserRouter>
    //       <Routes>
    //         <Route path="/" element={<PageNotFound />} />
    //         <Route path="/about" element={<About />} />
    //         <Route path="/challenges" element={<Challenges />} />
    //         <Route path="/scoreboard" element={<Scoreboard />} />
    //         <Route path="/challenges/question1" element={<Question1 />} />
    //         <Route path="*" element={<PageNotFound />} />
    //       </Routes>
    //     </BrowserRouter>
    //   );
    // }, 5000);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/challenges" element={<Challenges />} />
        <Route path="/scoreboard" element={<Scoreboard />} />
        <Route path="/challenges/question1" element={<Question1 />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );

  
}

export default App;
