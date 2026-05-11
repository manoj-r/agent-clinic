export const agentStrains = [
  'missing-context',
  'scope-churn',
  'urgency-pressure',
  'contradictory-instruction',
] as const;

export type AgentStrain = (typeof agentStrains)[number];

export interface IntakeRequest {
  agentId: string;
  summary: string;
  reportedStrains: AgentStrain[];
}

export interface TriageResult {
  strain: AgentStrain;
  severity: 'low' | 'moderate' | 'high';
  recommendedAction: 'request-clarification' | 'reduce-scope' | 'escalate' | 'rest';
}

export interface CareRecommendation {
  action: TriageResult['recommendedAction'];
  summary: string;
}
