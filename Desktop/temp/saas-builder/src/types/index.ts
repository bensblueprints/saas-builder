import { AIAnalysisResult } from '../services/ai';

export interface SaasIdea {
  name: string;
  description: string;
  targetAudience: string;
  aiAnalysis?: AIAnalysisResult;
}

export interface CorePillar {
  name: string;
  description: string;
  score: number;
  suggestions: string[];
}

export interface TechStackItem {
  category: string;
  name: string;
  description: string;
}

export interface CoreFeature {
  id: string;
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
}

export interface UserFlowNode {
  id: string;
  type: 'page' | 'decision' | 'action';
  label: string;
  x: number;
  y: number;
}

export interface UserFlowEdge {
  id: string;
  source: string;
  target: string;
  label?: string;
}

export interface UserFlow {
  nodes: UserFlowNode[];
  edges: UserFlowEdge[];
}

export interface KanbanTicket {
  id: string;
  title: string;
  description: string;
  status: 'todo' | 'inProgress' | 'done';
  priority: 'high' | 'medium' | 'low';
  feature: string;
}

export interface PricingTier {
  name: string;
  price: number;
  features: string[];
  recommended: boolean;
}

export interface SaasBlueprint {
  idea: SaasIdea;
  pillars: CorePillar[];
  techStack: TechStackItem[];
  coreFeatures: CoreFeature[];
  userFlow: UserFlow;
  kanbanTickets: KanbanTicket[];
  pricingModel: PricingTier[];
  validationScore: number;
}