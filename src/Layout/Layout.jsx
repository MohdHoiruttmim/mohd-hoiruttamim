import Home from '../Home/Home.jsx';

export default function Layout() {
  return (
    <>
    <div className="container-fluid bg-[#0B0B22] w-full h-screen">
      <div className="md:w-[50vw] md:h-[50vw] w-60 h-60 bg-[#FCA016] rounded-full absolute top-20 z-10 md:left-[-200px]"></div>  
      <div className="md:w-[50vw] md:h-[50vw] w-60 h-60 bg-[#16FCD2] rounded-full absolute left-40 top-[-40px]"></div>
      <div className="md:w-[50vw] md:h-[50vw] w-60 h-60 bg-[#FC165B] rounded-full absolute md:right-[100px] right-[-100px] md:top-[-100px]"></div>

      <div className="absolute w-full h-screen bg-[#0B0B22] bg-opacity-65 md:bg-opacity-80 backdrop-filter backdrop-blur-[100px] z-20 md:p-20 p-10">
        <Home />
      </div>
    </div>
    </>
  );
}
  