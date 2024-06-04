export default async function Page() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl">Certificates (1)</h1>

      {[1, 2, 3].map((certificate) => (
        <div className="text-center my-10">
          <b>Mathematics for Machine Learning: Linear Algebra</b>
          <p>Imperial College London</p>
          <a
            className="text-blue-500"
            href="https://coursera.org/share/11b0e4d6cf00b44869dcf9c4bec70865"
          >
            Link to Certificate
          </a>
        </div>
      ))}
    </div>
  );
}
