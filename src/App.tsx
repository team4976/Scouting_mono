import "./index.css";
import { BrowserRouter, Routes, useNavigate, Route, useLocation} from 'react-router-dom';
import { vlars } from "./Functions";
//Page Imports
import { HomePage } from "./HomePage";
import { PrePage } from "./PreGame";
import { AutoTransPage } from "./AutoTransPage";
import { Active1Page, Active2Page } from "./ActivePage";
import { Inactive1Page, Inactive2Page } from "./InactivePage";
import { EndPage } from "./EndPage";
import { PostPage } from "./PostPage";

let routes = ["/", "/pre", "/auto", "/active1", "/inactive1", "/active2", "/inactive2", "/end", "/post"]

type NavProps = {
  last: number;
  next: number;
};
export function App() {
  return (          
    <div className="screen">
      Ver 1
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/pre" element={<PrePage/>} />
            <Route path="/auto" element={<AutoTransPage/>} />
            <Route path="/active1" element={<Active1Page/>} />
            <Route path="/active2" element={<Active2Page/>} />
            <Route path="/inactive1" element={<Inactive1Page/>} />
            <Route path="/inactive2" element={<Inactive2Page/>} />
            <Route path="/end" element={<EndPage/>} />
            <Route path="/post" element={<PostPage/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}
//Navigation Buttons
export function StartBut({}) {
  const navigate = useNavigate(); 
  const handleClick = () => {
    navigate('pre')
  };
  return(
   <button className="navBut" onClick={handleClick}>
        Start Scouting
    </button>

  );
}

export function SettBut() {
  const navigate = useNavigate(); 
  const handleClick = () => {
    navigate('/settings');
  };
  return(
    <button className="navBut" onClick={handleClick}>
      Settings
    </button>
  )
}

export function QrBut() {
  const navigate = useNavigate(); 
  const handleClick = () => {
    navigate('/qr');
  };
  return(
    <button className="navBut" onClick={handleClick}>
      Scan QR
    </button>
  )
}

export function HistoryBut() {
  const navigate = useNavigate(); 
  const handleClick = () => {
    navigate('/history');
  };
  return(
   <button className="navBut" onClick={handleClick}>
        Match History
    </button>

  );
}

export function Nav({last, next}) {
  const navigate = useNavigate(); 
  const handleClick1 = () => {
    navigate(String(routes[last]))
  };
  const handleClick2 = () => {
    navigate(String(routes[next]))
    console.log(vlars)
  }
  return(
    <div className="row">
      <div className="left">
        <button className="navBut sNavBut" onClick={handleClick1}>
          &lt;
        </button>
      </div>
      <div className="right">
        <button className="navBut sNavBut" onClick={handleClick2}>
          &gt;
        </button>
      </div>
    </div>
  )
}

export default App;
