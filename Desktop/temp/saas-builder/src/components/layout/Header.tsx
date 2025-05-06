import React from 'react';
import { Navigation } from './Navigation';
import { LayoutGroup } from 'framer-motion';
import { Zap } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-b-slate-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Zap className="h-8 w-8 text-blue-600" />
          <span className="text-xl font-semibold">SaaS Blueprint</span>
        </div>
        <LayoutGroup>
          <Navigation />
        </LayoutGroup>
      </div>
    </header>
  );
};

export default Header;