import "./index.css";
import {StartBut, SettBut, QrBut, HistoryBut} from "./App.tsx" 

export function HomePage() {
    return(
        <div className="screen">
            <div className="title">HOME PAGE</div>
                  <StartBut/>
                  <SettBut/>
                  <HistoryBut/>
        </div>
    )
}