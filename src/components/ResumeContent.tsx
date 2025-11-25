import { Download } from "lucide-react";

export function ResumeContent() {
  return (
    <div className="space-y-6 max-w-2xl">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl">Resume</h2>
        <a
          href="/SonNguyen-SoftwareEngineer.pdf"
          download="SonNguyen-SoftwareEngineer.pdf"
          className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
        >
          <Download className="w-4 h-4" />
          Download PDF
        </a>
      </div>

      <div className="space-y-6">
        {/* Experience */}
        <section>
          <h3 className="text-lg mb-4 pb-2 border-b-2 border-indigo-500">
            Experience
          </h3>
          <div className="space-y-6">
            <div className="relative pl-6 border-l-2 border-indigo-200">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-500" />
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4>Senior Web Engineer</h4>
                  <p className="text-sm text-gray-600">Glo Digital Inc.</p>
                </div>
                <span className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                  11/2024 - Present
                </span>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>
                    Develop high-quality, scalable, and maintainable frontend
                    applications.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>
                    Collaborate with product managers, designers, and backend
                    engineers to deliver seamless user experiences.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>
                    Review code, enforce best practices for performance and
                    accessibility.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>
                    Write unit test, automation test using Jest, Vitest,
                    Playwright,...
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>
                    Set up and manage the CI/CD pipeline using GitHub Actions
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Migrate old web framework EmberJS to NextJS.</span>
                </li>
              </ul>
            </div>

            <div className="relative pl-6 border-l-2 border-indigo-200">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-300" />
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4>Senior Web Engineer</h4>
                  <p className="text-sm text-gray-600">Cloudsky Vietnam.</p>
                </div>
                <span className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                  01/2024 - 10/2024
                </span>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>
                    Working on multiple Japanese projects across domains.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>
                    Collaborate with product managers, designers, and backend
                    engineers to deliver seamless user experiences.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>
                    Review code, enforce best practices for performance and
                    accessibility.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Maintained and improved legacy features.</span>
                </li>
              </ul>
            </div>

            <div className="relative pl-6 border-l-2 border-indigo-200">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-300" />
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4>Web Engineer</h4>
                  <p className="text-sm text-gray-600">LHV software</p>
                </div>
                <span className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                  06/2021 - 12/2023
                </span>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Contribute to various GoodData code repositories.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Provide daily progress updates to manager.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>
                    Collaborate and communicate effectively with Czech
                    colleagues using English in a remote, cross-cultural
                    environment.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>
                    Present and demo new features to the frontend team in
                    English.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>
                    Work closely with PM, designers, and backend engineers to
                    deliver smooth and user-friendly experiences.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>
                    Write automated tests for the features I’m responsible for.
                  </span>
                </li>
              </ul>
            </div>

            <div className="relative pl-6 border-l-2 border-indigo-200">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-300" />
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4>Web Engineer</h4>
                  <p className="text-sm text-gray-600">Arrow ltd.</p>
                </div>
                <span className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                  03/2020 - 05/2021
                </span>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>
                    Take ownership of the front-end implementation across
                    assigned projects.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>
                    Research and integrate third-party libraries to enhance
                    website functionality.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>
                    Continuously read and explore technical articles to identify
                    performance optimization opportunities.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>
                    Review project documentation carefully and implement
                    features as specified.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>
                    Develop, maintain, and improve front-end features to ensure
                    a seamless user experience.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>
                    Work closely with PM, designers, and backend engineers to
                    deliver smooth and user-friendly experiences.
                  </span>
                </li>
              </ul>
            </div>

            <div className="relative pl-6 border-l-2 border-indigo-200">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-300" />
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4>Web Engineer</h4>
                  <p className="text-sm text-gray-600">Rockship</p>
                </div>
                <span className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                  10/2018 - 02/2020
                </span>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>
                    Take ownership of the front-end implementation across
                    assigned projects.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>
                    Research and integrate third-party libraries to enhance
                    website functionality.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>
                    Continuously read and explore technical articles to identify
                    performance optimization opportunities.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>
                    Review project documentation carefully and implement
                    features as specified.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>
                    Develop, maintain, and improve front-end features to ensure
                    a seamless user experience.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>
                    Work closely with PM, designers, and backend engineers to
                    deliver smooth and user-friendly experiences.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section>
          <h3 className="text-lg mb-4 pb-2 border-b-2 border-purple-500">
            Education
          </h3>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-5 border border-purple-200">
            <div className="flex justify-between items-start">
              <div>
                <h4>MATHEMATICS AND COMPUTER</h4>
                <p className="text-sm text-gray-600">University of Science</p>
              </div>
              <span className="text-xs px-3 py-1 bg-white text-gray-700 rounded-full border border-purple-300">
                2014 - 2018
              </span>
            </div>
          </div>
        </section>

        {/* Certifications */}
        {/* <section>
          <h3 className="text-lg mb-4 pb-2 border-b-2 border-cyan-500">
            Certifications
          </h3>
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
        </section> */}
      </div>
    </div>
  );
}
