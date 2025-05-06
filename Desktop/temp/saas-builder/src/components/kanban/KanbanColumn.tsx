import React from 'react';

interface KanbanColumnProps {
  title: string;
  count: number;
  children: React.ReactNode;
  onDrop: () => void;
}

const KanbanColumn: React.FC<KanbanColumnProps> = ({ title, count, children, onDrop }) => {
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    onDrop();
  };

  return (
    <div 
      className="flex w-full flex-col rounded-lg border border-slate-200 bg-slate-50 md:w-1/3"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div className="border-b border-slate-200 p-3">
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-slate-700">{title}</h3>
          <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-slate-200 px-2 text-xs font-medium">
            {count}
          </span>
        </div>
      </div>
      <div className="flex-1 overflow-auto p-3 space-y-2 min-h-[200px]">
        {children}
      </div>
    </div>
  );
};

export default KanbanColumn;