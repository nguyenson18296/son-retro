import { Download } from 'lucide-react';

export function ResumeContent() {
  return (
    <div className="space-y-6 max-w-2xl">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl">Resume</h2>
        <button className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg hover:shadow-lg transition-all flex items-center gap-2">
          <Download className="w-4 h-4" />
          Download PDF
        </button>
      </div>
      
      <div className="space-y-6">
        {/* Experience */}
        <section>
          <h3 className="text-lg mb-4 pb-2 border-b-2 border-indigo-500">Experience</h3>
          <div className="space-y-6">
            <div className="relative pl-6 border-l-2 border-indigo-200">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-500" />
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4>Senior Developer</h4>
                  <p className="text-sm text-gray-600">Tech Company Inc.</p>
                </div>
                <span className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                  2022 - Present
                </span>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Led development of core platform features serving 100K+ users</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Mentored junior developers and established best practices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Improved application performance by 40% through optimization</span>
                </li>
              </ul>
            </div>

            <div className="relative pl-6 border-l-2 border-indigo-200">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-300" />
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4>Full Stack Developer</h4>
                  <p className="text-sm text-gray-600">Startup Co.</p>
                </div>
                <span className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                  2020 - 2022
                </span>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Built responsive web applications from ground up</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Implemented RESTful APIs and database architecture</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Collaborated with design team on UX improvements</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section>
          <h3 className="text-lg mb-4 pb-2 border-b-2 border-purple-500">Education</h3>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-5 border border-purple-200">
            <div className="flex justify-between items-start">
              <div>
                <h4>B.S. in Computer Science</h4>
                <p className="text-sm text-gray-600">University Name</p>
                <p className="text-sm text-gray-500 mt-1">GPA: 3.8/4.0</p>
              </div>
              <span className="text-xs px-3 py-1 bg-white text-gray-700 rounded-full border border-purple-300">
                2016 - 2020
              </span>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section>
          <h3 className="text-lg mb-4 pb-2 border-b-2 border-cyan-500">Certifications</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center gap-3 p-3 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg border border-gray-200">
              <div className="w-2 h-2 bg-cyan-500 rounded-full" />
              <span className="text-sm">AWS Solutions Architect</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg border border-gray-200">
              <div className="w-2 h-2 bg-cyan-500 rounded-full" />
              <span className="text-sm">Professional Scrum Master</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
