import "./index.css";
import { BrowserRouter, Routes, useNavigate, Route, useLocation} from 'react-router-dom';
import { vlars} from "./Functions";
//Page Imports
import { HomePage } from "./HomePage";
import { PrePage } from "./PreGame";
import { AutoTransPage } from "./AutoTransPage";
import { Active1Page, Active2Page } from "./ActivePage";
import { Inactive1Page, Inactive2Page } from "./InactivePage";
import { EndPage } from "./EndPage";
import { PostPage } from "./PostPage";
import { GenPage } from "./GenPage";
import { SettingsPage } from "./SettingsPage";

let routes = ["/", "/pre", "/auto", "/active1", "/inactive1", "/active2", "/inactive2", "/end", "/post", "/gen", "/settings"]

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
            <Route path="/gen" element={<GenPage/>} />
            <Route path="/settings" element={<SettingsPage/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}
//Navigation Buttons
export function StartBut({}) {
  const navigate = useNavigate(); 
  const handleClick = () => {
    navigate('/pre')
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


export function Nav(props: NavProps) {
  const { last, next } = props;

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
type NavIAProps = {
  lastwin: Number
  lastlose: Number
  nextwin: Number
  nextlose: Number
}
export function NavIA(props: NavIAProps) {
  const {nextlose, nextwin, lastlose, lastwin} = props;
  const navigate = useNavigate(); 
  const handleClick1 = () => {
    if(vlars.autowin == true) {
      navigate(String(routes[Number(lastwin)]))
    } else{
      navigate(String(routes[Number(lastlose)]))
    }
  }
  const handleClick2 = () => {
    if(vlars.autowin == true){
      navigate(String(routes[Number(nextwin)]))
    } else {
      navigate(String(routes[Number(nextlose)]))
    }
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
export function HomeBut() {
  const navigate = useNavigate(); 
  const handleClick = () => {
    navigate('/');
  };
  return(
   <button className="navBut" onClick={handleClick}>
        Home
    </button>

  );
}

export default App;
