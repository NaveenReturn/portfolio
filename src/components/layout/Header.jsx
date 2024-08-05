import {useState} from "react";
const Header = () => {
        const [isOpen, setIsOpen] = useState(false);
      
        const toggleMenu = () => {
          setIsOpen(!isOpen);
        };
        return (
            <nav className="bg-white w-full dark:bg-gray-900 sticky top-0">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                  <div className="flex-shrink-0 flex items-center">
                    <a href="/" className="text-2xl font-bold text-white">
                      NAVEEN
                    </a>
                  </div>
                  <div className="hidden md:flex space-x-8">
                    <a href="#home" className="text-white hover:text-green-600">
                      Home
                    </a>
                    <a href="#docs" className="text-white hover:text-green-600">
                      Docs
                    </a>
                    <a href="#skill" className="text-white hover:text-green-600">
                       Experience
                    </a>
                    <a href="#web-site" className="text-white hover:text-green-600">
                      Projects
                    </a>
                  </div>
                  <div className="md:hidden flex items-center">
                    <button
                      onClick={toggleMenu}
                      className="text-gray-800 hover:text-blue-600 focus:outline-none"
                    >
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {isOpen ? (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        ) : (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16m-7 6h7"
                          />
                        )}
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              {isOpen && (
                <div className="md:hidden">
                  <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  <a href="#home" className="block text-white hover:text-green-600">
                      Home
                    </a>
                    <a href="#docs" className="block text-white hover:text-green-600">
                      Docs
                    </a>
                    <a href="#skill" className="block text-white hover:text-green-600">
                       Experience
                    </a>
                    <a href="#web-site" className="block text-white hover:text-green-600">
                      Projects
                    </a>
                  </div>
                </div>
              )}
            </nav>
          );
  }
  
  export default Header