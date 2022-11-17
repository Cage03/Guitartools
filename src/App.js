import './App.css';
import ChordsPage from './Pages/ChordsPage';
import ScalesPage from "./Pages/ScalesPage";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/Chords" element={<ChordsPage/>}/>
                <Route path="/Scales" element={<ScalesPage/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
