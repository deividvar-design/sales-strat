
export enum TeamSize {
  SOLOPRENEUR = 'Solopreneur',
  SMALL_TEAM = 'Small Team (2-10)',
  MID_SCALE = 'Mid-Scale (10-20)'
}

export enum ToolCategory {
  CRM = 'CRM',
  SALES_ENGAGEMENT = 'Sales Engagement',
  CONTACTS = 'Contacts & Intelligence',
  SCHEDULING = 'Scheduling',
  INFRASTRUCTURE = 'Infrastructure (Mailbox)'
}

export interface Tool {
  id: string;
  name: string;
  category: ToolCategory;
  description: string;
  bestFor: TeamSize[];
  pricingTier: 'Low' | 'Medium' | 'High';
  website: string;
  pros: string[];
  cons: string[];
  channels?: string[];
}

export interface StrategyGuide {
  id: string;
  title: string;
  teamSize: TeamSize;
  summary: string;
  recommendedStack: string[]; // IDs of tools
  focusArea: string;
  steps: string[]; // SOP Checklist steps
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
  isThinking?: boolean;
}
