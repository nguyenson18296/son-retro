export function AboutContent() {
  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h2 className="text-2xl mb-3">About Me</h2>
        <p className="text-gray-600 leading-relaxed">
          Hello! I'm a creative developer with a passion for building unique digital experiences.
          Welcome to my portfolio inspired by the elegant simplicity of macOS.
        </p>
      </div>
      
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200">
        <h3 className="mb-4">Profile</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center py-2 border-b border-gray-200">
            <span className="text-gray-600">Name</span>
            <span>Your Name</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-200">
            <span className="text-gray-600">Role</span>
            <span>Full Stack Developer</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-200">
            <span className="text-gray-600">Location</span>
            <span>San Francisco, CA</span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span className="text-gray-600">Experience</span>
            <span>5+ Years</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="mb-3">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {['React', 'TypeScript', 'Node.js', 'Python', 'Design', 'UI/UX'].map(skill => (
            <span
              key={skill}
              className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full text-sm shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <p className="text-gray-600 leading-relaxed">
        I love creating beautiful, intuitive experiences that blend modern technology with 
        thoughtful design. This portfolio is a tribute to Apple's iconic design philosophy.
      </p>
    </div>
  );
}
