import { ExternalLink } from 'lucide-react';

export function WorkContent() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      year: '2024',
      description: 'Built a full-stack e-commerce platform with real-time inventory management and seamless checkout experience.',
      tech: ['React', 'Node.js', 'PostgreSQL'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Task Management App',
      year: '2023',
      description: 'Developed a collaborative task management tool with real-time updates and team collaboration features.',
      tech: ['TypeScript', 'WebSocket', 'MongoDB'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Portfolio Website',
      year: '2023',
      description: 'Created a macOS-inspired portfolio showcasing projects with an elegant, intuitive interface.',
      tech: ['React', 'Tailwind', 'Motion'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="space-y-6 max-w-2xl">
      <h2 className="text-2xl mb-3">Featured Work</h2>
      
      <div className="space-y-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all cursor-pointer"
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
            
            <p className="text-gray-600 mb-4 leading-relaxed">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {project.tech.map(tech => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 border border-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
        <p className="text-sm text-blue-900">
          💡 <strong>Tip:</strong> Click on any project to view the live demo and source code.
        </p>
      </div>
    </div>
  );
}
