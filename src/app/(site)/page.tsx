import Image from "next/image";
import { getProjects } from "@/sanity/sanity-utils";
import Link from "next/link";

const HomePage = async () => {
  const projects = await getProjects();

  return (
    <div>
      <h1 className="text-7xl font-extrabold">
        Hello I am{" "}
        <span className="bg-gradient-to-tr from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
          Indranil!
        </span>
      </h1>

      <p className="mt-3 text-xl text-gray-600">
        Aloha everyone! check out my projects!
      </p>

      <h2 className="mt-24 font-bold text-gray-700 text-3xl">My Projects</h2>

      <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link
            href={`/project/${project.slug}`}
            key={project._id}
            className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition-all"
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={750}
                height={300}
                className="object-contain rounded-lg border border-gray-500"
              />
            )}
            <div className="mt-2 font-extrabold bg-gradient-to-tr from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
              {project.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
