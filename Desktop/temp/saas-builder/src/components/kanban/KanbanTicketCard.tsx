import React from 'react';
import { KanbanTicket } from '../../types';

interface KanbanTicketCardProps {
  ticket: KanbanTicket;
  onDragStart: () => void;
}

const KanbanTicketCard: React.FC<KanbanTicketCardProps> = ({ ticket, onDragStart }) => {
  const getPriorityColor = () => {
    switch (ticket.priority) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-amber-100 text-amber-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-slate-100 text-slate-800';
    }
  };
  
  return (
    <div 
      className="rounded-md border border-slate-200 bg-white p-3 shadow-sm cursor-move"
      draggable
      onDragStart={onDragStart}
    >
      <div className="mb-2 flex items-center justify-between">
        <span className="text-xs text-slate-500">#{ticket.id.slice(0, 6)}</span>
        <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${getPriorityColor()}`}>
          {ticket.priority}
        </span>
      </div>
      <h4 className="font-medium text-slate-800">{ticket.title}</h4>
      <p className="mt-1 text-xs text-slate-600">{ticket.description}</p>
      <div className="mt-3 text-xs text-slate-500">Feature: {ticket.feature}</div>
    </div>
  );
};

export default KanbanTicketCard;