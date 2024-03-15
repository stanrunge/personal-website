export default async function Index() {
  return (
    <div>
      <div className="flex items-center place-content-center gap-10 py-10">
        <img src="stan.jpg" alt="Stan Runge" className="rounded-xl size-64" />
        <h1 className="text-5xl">Stan Runge</h1>
      </div>

      <div className="text-center my-10">
        <h2>Experience</h2>
        <b>Founder</b>
        <p>Vash Software</p>
      </div>
      <div className="text-center my-10">
        <b>Software Engineer Intern</b>
        <p>H5mag</p>
      </div>
      <div className="text-center my-10">
        <b>Junior IT Specialist</b>
        <p>Finance Plus</p>
      </div>
      <div className="text-center my-10">
        <h2>Education</h2>
        <b>The Hague University of Applied Sciences</b>
      </div>
    </div>
  );
}
