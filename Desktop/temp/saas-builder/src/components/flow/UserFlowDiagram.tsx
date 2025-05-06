import React from 'react';
import { UserFlow } from '../../types';

interface UserFlowDiagramProps {
  userFlow: UserFlow;
}

// A simple flow diagram renderer - in a real app, you'd use a proper flow library
const UserFlowDiagram: React.FC<UserFlowDiagramProps> = ({ userFlow }) => {
  return (
    <div className="flex h-[500px] w-full items-center justify-center rounded-lg border border-slate-200 bg-white p-4">
      <div className="relative h-full w-full overflow-hidden">
        {/* Draw nodes */}
        {userFlow.nodes.map((node) => {
          const nodeStyles: React.CSSProperties = {
            position: 'absolute',
            left: `${node.x}px`,
            top: `${node.y}px`,
            transform: 'translate(-50%, -50%)',
          };
          
          let nodeClasses = 'p-3 rounded-md shadow-sm';
          
          switch (node.type) {
            case 'page':
              nodeClasses += ' bg-blue-100 border border-blue-300';
              break;
            case 'decision':
              nodeClasses += ' bg-amber-100 border border-amber-300';
              break;
            case 'action':
              nodeClasses += ' bg-green-100 border border-green-300';
              break;
            default:
              nodeClasses += ' bg-slate-100 border border-slate-300';
          }
          
          return (
            <div key={node.id} style={nodeStyles} className={nodeClasses}>
              <div className="text-sm font-medium">{node.label}</div>
              <div className="text-xs text-slate-600">{node.type}</div>
            </div>
          );
        })}
        
        {/* This is a simplified representation - in a real app, use a proper library for edge rendering */}
        <svg className="absolute inset-0 h-full w-full">
          {userFlow.edges.map((edge) => {
            const sourceNode = userFlow.nodes.find((n) => n.id === edge.source);
            const targetNode = userFlow.nodes.find((n) => n.id === edge.target);
            
            if (!sourceNode || !targetNode) return null;
            
            return (
              <g key={edge.id}>
                <line
                  x1={sourceNode.x}
                  y1={sourceNode.y}
                  x2={targetNode.x}
                  y2={targetNode.y}
                  stroke="#94a3b8"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead)"
                />
                {edge.label && (
                  <text
                    x={(sourceNode.x + targetNode.x) / 2}
                    y={(sourceNode.y + targetNode.y) / 2 - 10}
                    textAnchor="middle"
                    className="fill-slate-600 text-xs"
                  >
                    {edge.label}
                  </text>
                )}
              </g>
            );
          })}
          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="7"
              refX="9"
              refY="3.5"
              orient="auto"
            >
              <polygon points="0 0, 10 3.5, 0 7" fill="#94a3b8" />
            </marker>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default UserFlowDiagram;