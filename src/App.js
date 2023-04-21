// import './App.css';
import { Route, Routes } from "react-router-dom";
import Register1 from "./pages/register/component/Form";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Register1 />} />
      </Routes>
    </div>
  );
}

export default App;
