import puprIcon from '../assets/pupr.svg';
import utmIcon from '../assets/utm.svg';

export default function Work() {
return (
<>
  <div id="workExperience" className="title-gradient relative w-fit mx-auto font-figtree">
    <h1 className="text-slate-100 text-4xl md:text-6xl font-bold ">Work Experience💻</h1>
    <div
      className="absolute w-full h-1/3 left-1 top-5 md:top-6 rotate-[-2deg] bg-gradient-to-r from-red-500 text-red-500 z-[-10]">
    </div>
  </div>
  <div className="intro">
    <p className="text-slate-100 text-center text-md md:text-2xl font-figtree my-5">I have experience worked on several
      projects in fullstack web developmet</p>
  </div>
  <div className="tiles-wrapper">
    <div
      className="tiles font-figtree text-slate-100 flex md:justify-between md:flex-row flex-col mb-5">
      <div className="tile relative bg-slate-100 bg-opacity-5 md:flex-1 w-full md:p-10 p-5 me-5 rounded-lg overflow-hidden drop-shadow-lg">
        <div className="card-header flex md:items-center flex-col md:flex-row">
          <img src={puprIcon} alt="logo-pupr"
            className="w-48 md:w-64 me-3 absolute top-[-50px] right-[-50px] z-[-10] opacity-20 md:opacity-40" />
          <div className="title">
            <h1 className="font-bold md:text-3xl">Balai Pengembangan Kompetensi PUPR</h1>
            <p
              className="text-md md:text-xl font-bold bg-slate-100 md:bg-opacity-5 bg-opacity-10 py-2 px-4 rounded-lg drop-shadow-md my-3 w-fit">
              Full Stack Developer</p>
          </div>
        </div>
        <div className="card-body md:w-2/3 md:mt-10 mt-5">
          <h1 className="year font-bold md:text-2xl text-xl">Jan 2024 - May 2024</h1>
          <p className="md:text-xl mt-3">Worked (intern) on the development of a facility management system to monitor
            room usage, focusing on performance and data security.</p>
        </div>
      </div>
      <div className="tile bg-cyan-400 md:flex-none w-64 opacity-5 hidden md:block rounded-lg">
      </div>
    </div>
    <div className="tiles relative font-figtree text-slate-100 flex justify-between mb-10 overflow-hidden">
      <div className="tile bg-red-500 flex-none w-64 opacity-5 me-5 hidden md:block rounded-lg">
      </div>
      <div className="tile bg-slate-100 bg-opacity-5 flex-1 w-full md:p-10 p-5 rounded-lg drop-shadow-lg">
        <div className="card-header flex md:items-center flex-col md:flex-row">
            <img src={utmIcon} alt="logo-utm-trunojoyo-madura" className="w-48 md:w-80 me-3 absolute bottom-0 z-[-10] opacity-20 md:opacity-40 right-[-50px] md:right-[-60px] top-[-50px] md:top-[-50px]" />
          <div className="title">
            <h1 className="font-bold md:text-3xl">Trunojoyo University of Madura</h1>
          <p className="text-md md:text-xl font-bold bg-slate-100 md:bg-opacity-5 bg-opacity-10 py-2 px-4 rounded-lg drop-shadow-md my-3 w-fit">
            Laboratory Assistant</p>
          </div>
        </div>
        <div className="card-body md:w-2/3 md:mt-5 mt-5">
      <h1 className="year font-bold md:text-2xl text-xl">Aug 2022 - Aug 2023</h1>
      <p className="md:text-xl mt-3">Worked as an laboratory assistant who helped provide technical guidance and learning for new
        students in courses related to programming, such as Programming Algorithms, Data Structures, and Web Application
        Development.</p>
        </div>
      </div>
    </div>

  </div>
</>
);
}