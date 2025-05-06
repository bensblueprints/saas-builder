import React, { useState } from 'react';
import { KanbanTicket } from '../../types';
import KanbanColumn from './KanbanColumn';
import KanbanTicketCard from './KanbanTicketCard';

interface KanbanBoardProps {
  tickets: KanbanTicket[];
  onTicketStatusChange?: (ticketId: string, status: 'todo' | 'inProgress' | 'done') => void;
}

const KanbanBoard: React.FC<KanbanBoardProps> = ({ tickets, onTicketStatusChange }) => {
  const [draggedTicket, setDraggedTicket] = useState<string | null>(null);

  const todoTickets = tickets.filter((ticket) => ticket.status === 'todo');
  const inProgressTickets = tickets.filter((ticket) => ticket.status === 'inProgress');
  const doneTickets = tickets.filter((ticket) => ticket.status === 'done');

  const handleDragStart = (ticketId: string) => {
    setDraggedTicket(ticketId);
  };

  const handleDrop = (status: 'todo' | 'inProgress' | 'done') => {
    if (draggedTicket && onTicketStatusChange) {
      onTicketStatusChange(draggedTicket, status);
      setDraggedTicket(null);
    }
  };

  return (
    <div className="flex flex-col gap-6 md:flex-row">
      <KanbanColumn 
        title="To Do" 
        count={todoTickets.length}
        onDrop={() => handleDrop('todo')}
      >
        {todoTickets.map((ticket) => (
          <KanbanTicketCard 
            key={ticket.id} 
            ticket={ticket} 
            onDragStart={() => handleDragStart(ticket.id)}
          />
        ))}
      </KanbanColumn>

      <KanbanColumn 
        title="In Progress" 
        count={inProgressTickets.length}
        onDrop={() => handleDrop('inProgress')}
      >
        {inProgressTickets.map((ticket) => (
          <KanbanTicketCard 
            key={ticket.id} 
            ticket={ticket} 
            onDragStart={() => handleDragStart(ticket.id)}
          />
        ))}
      </KanbanColumn>

      <KanbanColumn 
        title="Done" 
        count={doneTickets.length}
        onDrop={() => handleDrop('done')}
      >
        {doneTickets.map((ticket) => (
          <KanbanTicketCard 
            key={ticket.id} 
            ticket={ticket} 
            onDragStart={() => handleDragStart(ticket.id)}
          />
        ))}
      </KanbanColumn>
    </div>
  );
};

export default KanbanBoard;