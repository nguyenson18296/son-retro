import { ExternalLink } from "lucide-react";

export function WorkContent() {
  const projects = [
    {
      title: "Glo Platform",
      year: "2024 - Present",
      link: "https://www.glo.com",
      description: [
        "Website: https://www.glo.com",
        "Developing new features for Glo platform - a yoga streaming platform.",
      ],
      tech: [
        "React",
        "NextJS",
        "TypeScript",
        "EmberJS",
        "Docker",
        "Playwright",
        "Tailwind",
        "Vitest",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Travelist",
      year: "01/2024 - 10/2024",
      link: "https://travelist.jp/",
      description: [
        "Website: https://travelist.jp/",
        "Building a website that allows customers to purchase airplane tickets.",
      ],
      tech: ["Vue2", "Vue3", "TypeScript", "..."],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "GoodData",
      year: "06/2021 - 12/2023",
      link: "http://gooddata.com/",
      description: [
        "Website: http://gooddata.com/",
        "Platform for data processing, collection and visualization",
      ],
      tech: [
        "React",
        "Redux",
        "Storybook",
        "Jest",
        "Enzyme",
        "Cypress",
        "Docker",
        "TypeScript",
        "...",
      ],
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Admin Dashboard",
      year: "04/2020 - 05/2021",
      description: [
        "Building CMS to management users, transactions, databases,...",
      ],
      tech: ["React", "WebSocket", "Socket.io"],
      color: "from-green-500 to-blue-500",
    },
    {
      title: "Sporta",
      year: "09/2020 - 02/2021",
      link: "https://www.sporta.vn/",
      description: [
        "https://www.sporta.vn/",
        "A social network for individuals or teams to find and organize football matches, tournaments",
      ],
      tech: ["NextJS", "ChartJS", "Styled component", "Redux", "..."],
      color: "from-green-500 to-blue-500",
    },
    {
      title: "Some outsource projects",
      year: "10/2018 - 03-2020",
      description: [
        "Take responsibility for the development of some outsource projects",
      ],
      tech: ["ReactJS", "VueJS", "Redux", "Vuex", "..."],
      color: "from-green-500 to-blue-500",
    },
  ];

  return (
    <div className="space-y-6 max-w-2xl">
      <h2 className="text-2xl mb-3">Featured Work</h2>

      <div className="space-y-4">
        {projects.map((project, index) => (
          <a href={project.link} target="_blank" className="my-6 block">
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all cursor-pointer"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="flex items-center gap-2 group-hover:text-indigo-600 transition-colors">
                    {project.title}
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <span className="text-sm text-gray-500">{project.year}</span>
                </div>
              </div>

              <ul
                className="text-gray-600 mb-4 leading-relaxed"
                style={{ listStyleType: "disc" }}
              >
                {project.description.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 border border-gray-300"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
        <p className="text-sm text-blue-900">
          💡 <strong>Tip:</strong> Click on any project to view the live demo
          and source code.
        </p>
      </div>
    </div>
  );
}
