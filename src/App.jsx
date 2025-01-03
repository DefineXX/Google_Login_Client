import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Redirect from "./pages/Redirect";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/oauth" element={<Redirect />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
