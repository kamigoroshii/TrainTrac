import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Bars3Icon, 
  XMarkIcon,
  ChevronDownIcon,
  RocketLaunchIcon,
  TicketIcon,
  MagnifyingGlassIcon,
  ClockIcon,
  UserGroupIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const navItems = [
    { 
      name: 'Live Status', 
      path: '/live-status',
      icon: RocketLaunchIcon,
      description: 'Track trains in real-time'
    },
    { 
      name: 'PNR Status', 
      path: '/pnr-status',
      icon: TicketIcon,
      description: 'Check your booking status'
    },
    { 
      name: 'Train Search', 
      path: '/train-search',
      icon: MagnifyingGlassIcon,
      description: 'Find trains between stations'
    },
    { 
      name: 'Train Schedule', 
      path: '/train-schedule',
      icon: ClockIcon,
      description: 'View complete timetables'
    },
    { 
      name: 'Seat Availability', 
      path: '/seat-availability',
      icon: UserGroupIcon,
      description: 'Check seat availability'
    },
    { 
      name: 'Analytics', 
      path: '/analytics',
      icon: ChartBarIcon,
      description: 'Train performance insights'
    }
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu when route changes
  const handleNavigation = () => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <nav className="bg-primary-800/90 backdrop-blur-sm sticky top-0 z-50 border-b border-primary-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <RocketLaunchIcon className="h-8 w-8 text-accent-500" />
            <span className="text-2xl font-bold text-white">TrainTracker</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-1 text-gray-300 hover:text-accent-500 transition-colors px-4 py-2 rounded-lg hover:bg-primary-700/50"
              >
                <span>Services</span>
                <ChevronDownIcon className={`h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Desktop Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-primary-800 rounded-xl shadow-xl border border-primary-700/50 overflow-hidden">
                  <div className="p-2">
                    {navItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        onClick={handleNavigation}
                        className="flex items-start space-x-3 p-3 hover:bg-primary-700/50 rounded-lg group transition-colors"
                      >
                        <item.icon className="h-6 w-6 text-accent-400 group-hover:text-accent-500" />
                        <div>
                          <div className="text-gray-200 group-hover:text-white font-medium">
                            {item.name}
                          </div>
                          <div className="text-sm text-gray-400 group-hover:text-gray-300">
                            {item.description}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Contact & Help */}
            <Link 
              to="/contact" 
              className="text-gray-300 hover:text-accent-500 transition-colors px-4 py-2 rounded-lg hover:bg-primary-700/50"
            >
              Contact
            </Link>
            <Link 
              to="/help" 
              className="text-gray-300 hover:text-accent-500 transition-colors px-4 py-2 rounded-lg hover:bg-primary-700/50"
            >
              Help
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white p-2"
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary-800 border-t border-primary-700/50">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={handleNavigation}
                className="flex items-center space-x-3 p-3 hover:bg-primary-700/50 rounded-lg group transition-colors"
              >
                <item.icon className="h-5 w-5 text-accent-400 group-hover:text-accent-500" />
                <div>
                  <div className="text-gray-200 group-hover:text-white font-medium">
                    {item.name}
                  </div>
                  <div className="text-sm text-gray-400 group-hover:text-gray-300">
                    {item.description}
                  </div>
                </div>
              </Link>
            ))}
            
            {/* Mobile Contact & Help */}
            <div className="border-t border-primary-700/50 pt-2">
              <Link
                to="/contact"
                onClick={handleNavigation}
                className="block px-3 py-2 text-gray-300 hover:text-accent-500 transition-colors"
              >
                Contact
              </Link>
              <Link
                to="/help"
                onClick={handleNavigation}
                className="block px-3 py-2 text-gray-300 hover:text-accent-500 transition-colors"
              >
                Help
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}