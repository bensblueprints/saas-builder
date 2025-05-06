import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import KanbanBoard from '../components/kanban/KanbanBoard';
import { KanbanTicket } from '../types';
import { mockData } from '../data/mockData';

const KanbanPage: React.FC = () => {
  const [tickets, setTickets] = useState<KanbanTicket[]>(mockData.kanbanTickets);
  
  const handleTicketStatusChange = (ticketId: string, status: 'todo' | 'inProgress' | 'done') => {
    setTickets(
      tickets.map((ticket) =>
        ticket.id === ticketId ? { ...ticket, status } : ticket
      )
    );
  };
  
  return (
    <Layout>
      <div className="container mx-auto max-w-7xl px-4 py-8">
        <h1 className="mb-6 text-2xl font-bold md:text-3xl">Development Kanban</h1>
        
        <div className="mb-6 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold">Track Your Progress</h2>
          <p className="text-slate-700">
            Organize and track the development of your SaaS features. Drag and drop tickets 
            between columns to update their status.
          </p>
        </div>
        
        <div className="mb-8">
          <KanbanBoard 
            tickets={tickets} 
            onTicketStatusChange={handleTicketStatusChange} 
          />
        </div>
        
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold">MCP Integration</h2>
          <p className="text-slate-700 mb-4">
            Your project is ready to be connected to Cursor AI agent for automated development assistance.
          </p>
          <div className="flex items-center gap-4 rounded-lg border border-dashed border-slate-300 bg-slate-50 p-4">
            <div className="rounded-full bg-blue-100 p-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                <path d="M7 22a5 5 0 0 1-2-4" />
                <path d="M7 16.93c.96.43 1.96.74 2.99.91" />
                <path d="M3.34 14A6.8 6.8 0 0 1 2 10c0-4.42 4.48-8 10-8s10 3.58 10 8a7.19 7.19 0 0 1-.33 2" />
                <path d="M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                <path d="M14.33 22h-.09a.35.35 0 0 1-.24-.32v-10a.34.34 0 0 1 .33-.34c.08 0 .15.03.21.08l7.34 6a.33.33 0 0 1-.21.59h-4.49l-2.57 3.85a.35.35 0 0 1-.28.14v0z" />
              </svg>
            </div>
            <div>
              <div className="font-medium">Connect to Cursor AI Agent</div>
              <div className="text-sm text-slate-600">Let AI move tickets and generate code for your application</div>
            </div>
            <button className="ml-auto rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
              Connect
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default KanbanPage;