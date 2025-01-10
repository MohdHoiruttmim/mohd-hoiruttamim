import Card from "./Card";

export default function Blog() {
  return (
    <>
      <h1 className="text-slate-100 text-4xl md:text-6xl font-bold font-figtree underline decoration-wavy decoration-cyan-400 text-center mb-10 mt-20">Blog📜</h1>
      <p className="text-slate-100 text-center text-md md:text-2xl font-figtree my-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel consequuntur quidem cum perspiciatis earum ut quam, totam similique. Consectetur placeat officia quas ut debitis hic </p>
      <div className="blog-wrapper font-figtree flex flex-col md:flex-row justify-center items-center">
        <Card className="md:p-10"/>
        <Card className="md:p-10"/>
        <Card className="md:p-10"/>
      </div>
    </>
  )
}