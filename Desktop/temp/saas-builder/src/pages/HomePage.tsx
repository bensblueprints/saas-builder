import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Lightbulb, GitBranch, Kanban } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const HomePage: React.FC = () => {
  const features = [
    {
      icon: <Lightbulb className="h-8 w-8 text-amber-500" />,
      title: 'Idea Validation',
      description: 'Validate your SaaS idea against our six core pillars to ensure market viability.',
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-500" />,
      title: 'Tech Stack Builder',
      description: 'Get intelligent recommendations for the perfect tech stack for your specific needs.',
    },
    {
      icon: <GitBranch className="h-8 w-8 text-purple-500" />,
      title: 'User Flow Generator',
      description: 'Automatically create visual user flow diagrams connecting all pages of your app.',
    },
    {
      icon: <Kanban className="h-8 w-8 text-green-500" />,
      title: 'Kanban Board',
      description: 'Convert your core features into actionable Kanban tickets to track development.',
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
      <div className="text-center">
        <motion.h1
          className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="block">Turn your SaaS idea into a</span>
          <span className="block text-blue-600">visual blueprint</span>
        </motion.h1>
        <motion.p
          className="mx-auto mt-4 max-w-2xl text-xl text-slate-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Validate, visualize, and plan your SaaS app with AI-powered tools that help you build better products faster.
        </motion.p>
        <motion.div
          className="mt-8 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button
            size="lg"
            rightIcon={<ArrowRight className="h-4 w-4" />}
            onClick={() => window.location.href = '/ideas'}
          >
            Start Building
          </Button>
        </motion.div>
      </div>

      <motion.div
        className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        {features.map((feature, index) => (
          <Card key={index} className="transition-transform hover:-translate-y-1">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-slate-100 p-3">{feature.icon}</div>
              <h3 className="mb-2 text-lg font-medium">{feature.title}</h3>
              <p className="text-sm text-slate-600">{feature.description}</p>
            </div>
          </Card>
        ))}
      </motion.div>

      <div className="mt-20 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white shadow-lg">
        <div className="md:flex md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Ready to build your SaaS?</h2>
            <p className="mt-2 text-lg">Get a visual blueprint in minutes with our AI-powered tools.</p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button
              variant="outline"
              className="bg-white text-blue-600 hover:bg-blue-50"
              onClick={() => window.location.href = '/ideas'}
            >
              Start Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;