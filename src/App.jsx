import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

// The app component
function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
