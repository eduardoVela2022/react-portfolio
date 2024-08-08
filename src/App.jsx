import { Outlet } from "react-router-dom";
import Header from "./components/Header";

// The app component
function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
