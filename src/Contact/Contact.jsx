import linkedinIcon from '../assets/linkedin.svg';
import mailIcon from '../assets/envelope.svg';
import githubIcon from '../assets/github.svg';
import instagramIcon from '../assets/instagram.svg';

export default function Contact() {
  return (
    <div id="contact" className="contact-warpper font-figtree mt-20">
      <h1 className="text-center text-4xl md:text-6xl text-slate-100 font-bold">Connect with me just only tap 🎯</h1>
      <div className="mt-6 footer text-slate-100 bg-cyan-400 text-2xl md:text-5xl font-bold rounded-t-xl p-10 mt-3 w-full bottom-[-5] bg-opacity-10 bg-[url('/src/assets/ournaments/ournament.png')] bg-cover md:bg-center">
        <h1>Have a question?</h1>
        <h1>or any project ideas?</h1>
        <h1>feel free discuss with me 👋</h1>
        <div className="social-links flex mt-10">
          <a href="https://www.linkedin.com/in/mohammad-hoiruttamim-24866a208/" className="social-link me-5" target="_blank">
            <img src={linkedinIcon} alt="linkedin" className="text-slate-100"/>
          </a>
          <a href="https://github.com/mohdhoiruttmim" className="social-link me-5" target="_blank">
            <img src={githubIcon} alt="github" />
          </a>
          <a href="https://instagram.com/mohd_hoiruttmim" className="social-link me-5" target="_blank">
            <img src={instagramIcon} alt="instagram" />
          </a>
          <a href="mailto:mohammad.hoiruttamim@gmail.com" className="social-link">
            <img src={mailIcon} alt="gmail" />
          </a>
        </div>
        <div className="footnote text-sm md:text-lg text-center text-slate-400 mt-10">
          <p>Created using react.js, inspired by <a href="https://helmisatria.com/" className="underline decoration-cyan-500" target="_blank">Helmi Satria</a></p>
        </div>
      </div>
    </div>
  );
}