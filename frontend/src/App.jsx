import "./App.css";
import { Button } from "./components/ui/button";
import QRCodeGenerator from "./components/QRCodeGenerator";
import QRCodeScanner from "./components/QRCodeScanner";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import QRContent from "./components/QRContent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />

              <div className="App flex flex-col gap-3 items-center justify-center md:flex-row">
                <QRCodeGenerator />
                <QRCodeScanner />
              </div>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
