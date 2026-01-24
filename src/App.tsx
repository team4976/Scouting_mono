import "./index.css";
import { BrowserRouter, Routes} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Route } from 'react-router-dom';
//Page Imports
import { HomePage } from "./HomePage";
import { PrePage } from "./PreGame";
import { AutoTransPage } from "./AutoTransPage";
import { Active1Page, Active2Page } from "./ActivePage";
import { Inactive1Page, Inactive2Page } from "./InactivePage";
import { EndPage } from "./EndPage";
import { PostPage } from "./PostPage";

let routes = ["/", "/pre", "/auto", "/active1", "/inactive1", "/active2", "/inactive2", "/end", "/post"]

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
      {/*
      <HomePage/>
      _______________________________________
      <PrePage/>
      _______________________________________
      <AutoTransPage/>
      _______________________________________
      <Active1Page/>
      _______________________________________
      <Inactive1Page/>
      _______________________________________
      <Active2Page/>
      _______________________________________
      <Inactive2Page/>
      _______________________________________
      <EndPage/>
      _______________________________________
      <PostPage/>
      */}
    </div>
  );
}
//Navigation Buttons
export function StartBut() {
  return(
   <button className="navBut">
        Start Scouting
    </button>

  );
}

export function SettBut() {
  return(
    <button className="navBut">
      Settings
    </button>
  )
}

export function QrBut() {
  return(
    <button className="navBut">
      Scan QR
    </button>
  )
}

export function HistoryBut() {
  return(
   <button className="navBut">
        Match History
    </button>

  );
}

export function Nav() {
  return(
    <div className="row">
      <div className="left">
        <button className="navBut sNavBut">
          &lt;
        </button>
      </div>
      <div className="rigt">
        <button className="navBut sNavBut">
          &gt;
        </button>
      </div>
    </div>
  )
}

export default App;
