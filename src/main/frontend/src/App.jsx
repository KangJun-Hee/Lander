import "./App.css";
import Pages from "./pages/Pages";
import SideCategory from "./components/SideCategory";
import TopToolBar from "./components/TopToolBar";

import Join from "./pages/Join";

import { BrowserRouter } from "react-router-dom";
// import { ThemeProvider } from "../../context/ThemeContext";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <BrowserRouter>
          <SideCategory />
          <div className="ToolAndPages">
            <TopToolBar />
            <Pages />
          </div>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
