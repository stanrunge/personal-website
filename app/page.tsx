export default async function Index() {
  return (
    <div>
      <div className="flex items-center place-content-center gap-10 py-10">
        <img src="stan.jpg" alt="Stan Runge" className="rounded-xl size-64" />
        <div className="text-center">
          <h1 className="text-5xl my-3">Stan Runge</h1>
          <a href="mailto:stan@stanrunge.dev">stan@stanrunge.dev</a>
          <p>The Hague, Netherlands</p>
        </div>
      </div>

      <div className="text-center my-10">
        <h2 className="text-3xl">Experience</h2>
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
        <h2 className="text-3xl">Education</h2>
        <b>The Hague University of Applied Sciences</b>
        <p>BSc Software Engineering</p>
        <p>Minor: Deep Learning</p>
      </div>

      <div className="text-center my-10">
        <h2 className="text-3xl">Skills</h2>
        <div className="text-center my-10">
          <b>Programming Languages</b>
          <p>JavaScript, TypeScript, Python, C#, SQL</p>
        </div>

        <div className="text-center my-10">
          <b>Frameworks/Libraries</b>
          <p>
            React, Next.js, Node.js, .NET, SvelteKit, SQL Server, PostgreSQL,
            MySQL
          </p>
        </div>

        <div className="text-center my-10">
          <b>Natural Languages</b>
          <p>English, Dutch, Spanish, Papiamentu, Korean</p>
        </div>
      </div>

      <div className="text-center my-10">
        <h2 className="text-3xl">Links</h2>
        <ul>
          <li>
            <a href="https://github.com/stanrunge" className="text-blue-500">
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/stanrunge"
              className="text-blue-500"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
