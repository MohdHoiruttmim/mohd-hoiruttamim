import Home from '../Home/Home.jsx';
import Work from '../Work/Work.jsx';
import Contact from '../Contact/Contact.jsx';
import Navbar from '../Navbar/Navbar.jsx';
import Blog from '../components/Blog.jsx';

export default function Layout() {
  return (
    <>
    <Navbar />
    <div className="relative container-fluid bg-[#0B0B22] w-full h-screen overflow-x-hidden scroll-smooth">
      <div className="md:w-[50vw] md:h-[50vw] w-60 h-60 bg-[#FCA016] rounded-full absolute top-20 z-10 md:left-[-200px]"></div>  
      <div className="md:w-[50vw] md:h-[50vw] w-60 h-60 bg-[#16FCD2] rounded-full absolute left-40 top-[-40px]"></div>
      <div className="md:w-[50vw] md:h-[50vw] w-60 h-60 bg-[#FC165B] rounded-full absolute md:right-[100px] right-[-100px] md:top-[-100px]"></div>
      <div className="md:w-[50vw] md:h-[50vw] w-60 h-60 bg-[#16FCD2] rounded-full absolute md:left-[-700px] md:bottom-[-900px] left-[-100px] bottom-[-100px]"></div>
      <div className="md:w-[50vw] md:h-[50vw] w-60 h-60 bg-[#FC165B] rounded-full absolute right-[-50px] md:right-[-200px] bottom-[-500px] md:bottom-[-1000px]"></div>

      <div className="absolute w-full bg-[#0B0B22] bg-opacity-80 backdrop-filter backdrop-blur-[100px] z-20 md:p-20 p-10 md:pb-0 pb-0">
        <Home />
        <Work />
        <Blog />
        <Contact />
      </div>
    </div>
    </>
  );
}
  