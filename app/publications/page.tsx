export default async function Index() {
  return (
    <div className="flex flex-col items-center">
      <div className="my-3 flex flex-col items-center">
        <h1 className="text-4xl">Stan's Blog</h1>
        <p className="text-sm my-1">
          <i>but what do I know</i>
        </p>
      </div>

      <h2 className="mt-3 text-2xl">Posts ({[].length})</h2>
      {/* 
      <ul>
        <li>
          <a href="/blog/neural-nets">Neural Networks</a>
        </li>
        <li>
          <a href="/blog/nextjs">Next.js</a>
        </li>
      </ul> */}
    </div>
  );
}
