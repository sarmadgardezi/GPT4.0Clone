import React from 'react';

const navigationItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Packages', href: '/Packages' },
  { name: 'Contact', href: '/contact' },
];

const Menu: React.FC = () => {
  return (
    <nav className="pt-10  top-0 left-0 w-full flex justify-center items-center "> {/* Fixed, transparent background */}
      <ul className="flex rounded-full overflow-hidden px-4 py-2 shadow-md md:shadow-lg border border-white border-b-2 border-gradient-to-r from-purple-500 to-indigo-500"> {/* Rounded edges, overflow hidden, border with gradient */}
        {navigationItems.map((item) => (
          <li key={item.name} className="mr-4 text-lg font-bold text-white"> {/* White text */}
            <a href={item.href} className="block py-2 px-3 transition duration-300 ease-in-out transform hover:-translate-y-1"> {/* Link styling */}
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
