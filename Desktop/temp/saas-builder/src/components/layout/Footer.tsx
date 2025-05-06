import React from 'react';
import { Github, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-auto bg-slate-50 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-slate-600">
            © {new Date().getFullYear()} SaaS Blueprint. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-blue-600"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-blue-600"
            >
              <Twitter className="h-4 w-4" />
              <span>Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;