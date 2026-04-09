import Header from "../../components/home/Header";
import Body from "../../components/home/Body";
import Footer from "../../components/home/Footer";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
