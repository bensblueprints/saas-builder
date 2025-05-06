import React from 'react';
import { motion } from 'framer-motion';
import { Home, Lightbulb, Kanban, GitBranch, BarChart3 } from 'lucide-react';

type NavItem = {
  name: string;
  href: string;
  icon: React.ReactNode;
};

const navItems: NavItem[] = [
  { name: 'Home', href: '/', icon: <Home className="h-5 w-5" /> },
  { name: 'Ideas', href: '/ideas', icon: <Lightbulb className="h-5 w-5" /> },
  { name: 'Flow', href: '/flow', icon: <GitBranch className="h-5 w-5" /> },
  { name: 'Kanban', href: '/kanban', icon: <Kanban className="h-5 w-5" /> },
  { name: 'Progress', href: '/progress', icon: <BarChart3 className="h-5 w-5" /> },
];

export const Navigation: React.FC = () => {
  const [active, setActive] = React.useState('/');

  return (
    <nav className="flex items-center space-x-4">
      {navItems.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className="relative px-3 py-1.5 text-sm font-medium transition-colors"
          onClick={(e) => {
            e.preventDefault();
            setActive(item.href);
          }}
        >
          <div className="flex items-center gap-2">
            {item.icon}
            <span>{item.name}</span>
          </div>
          {item.href === active && (
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
              layoutId="navbar-indicator"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
          )}
        </a>
      ))}
    </nav>
  );
};