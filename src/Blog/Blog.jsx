import Card from "../components/Card";
import { useNavigate } from "react-router-dom";
import returnIcon from "../assets/return.svg";

export default function Blog() {
  const navigate = useNavigate();

  return (
    <>
      <div className="container-fluid bg-slate-900 font-figtree p-10">
        <div className="container w-[80vw] mx-auto">
          <div className="header">
            <img src={returnIcon} 
            alt="back-to-home"
            className="cursor-pointer mb-2"
            onClick={() => navigate("/")} />
            <h1 className="text-3xl md:text-6xl font-bold text-slate-100 mb-5">mohd hoiruttamim <span className="bg-cyan-400 rounded-xl py-1 px-2 md:py-2 md:px-4 text-white">Blog's</span>✨</h1>
            <p className="text-slate-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error architecto nemo odit dicta exercitationem harum, accusantium at facilis iste nihil laudantium facere repellat soluta quis debitis minima nesciunt consectetur voluptate!</p>
          </div>
          <div className="blogs">
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </>
  )
}