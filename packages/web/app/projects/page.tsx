import { Icon } from "@/components/Icon";
import { ProjectCard } from "@/components/ProjectCard";

export default async function Page() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl my-5">Projects</h1>
      <div
        className="my-5 rounded-xl"
        style={{
          backgroundColor: "gray",
        }}
      >
        <h2 className="text-2xl font-bold">Vash Software</h2>
        <p>A global, asynchronic software company.</p>

        <div>
          <h3 className="text-xl font-semibold">Vash Esports (Pre-Alpha)</h3>
          <p>The best way to play games competitively.</p>

          <div>
            <h4 className="text-l font-semibold">Web App</h4>
          </div>

          <div>
            <h4 className="text-l font-semibold">iOS App</h4>
          </div>

          <div>
            <h4 className="text-l font-semibold">Vash Gaming Network</h4>
          </div>

          <div>
            <h4 className="text-l font-semibold">osu! Match Streamer</h4>
          </div>
        </div>
      </div>

      <div className="my-5">
        <h2 className="text-2xl my-5">Personal Projects (3)</h2>
        <div className="grid grid-cols-2 gap-4">
          <ProjectCard
            title="This Website"
            description="Despite being a simple, mostly static website, there's a lot
                more behind the scenes."
            link="https://github.com/stanrunge/personal-website"
          />
          <ProjectCard
            title="Spotify osu! Map Finder"
            description="A tool to find osu! maps based on Spotify playlists."
            link="https://github.com/stanrunge/spotify-map-finder"
          />
          <ProjectCard
            title="Livvie MC Tournament Plugin"
            description="A Minecraft plugin to run tournaments on a server."
            link="https://github.com/stanrunge/livvie-mc-tournament-plugin"
          />
        </div>
      </div>
    </div>
  );
}
