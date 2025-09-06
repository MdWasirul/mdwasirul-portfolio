import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/pages/Footer";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto ">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
export default App;
