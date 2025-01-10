export default function Card({ className }) {
return (
  <>
    <div
      className={`card text-slate-100 bg-slate-100 bg-opacity-5 max-w-screen ${className} p-5 mx-2 rounded-lg drop-shadow-lg border border-slate-600 backdrop-blur hover:border-slate-500 transition-colors mb-5`}>
      <div className="header">
        <div className="author mb-4">
          <h1 className="font-bold text-xl">Anonymouse</h1>
          <p className="">Oct 11, 2024</p>
        </div>
      </div>
      <div className="card-body">
        <h1 className="font-bold text-3xl">Lorem ..</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt mollitia, accusantium adipisci soluta corrupti, Lorem ipsum, do
        </p>
      </div>
    </div>
  </>
  )
}
