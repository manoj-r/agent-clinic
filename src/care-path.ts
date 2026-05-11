import type { CareRecommendation, TriageResult } from './domain';

export function recommendCarePath(triage: TriageResult): CareRecommendation {
  switch (triage.recommendedAction) {
    case 'request-clarification':
      return {
        action: triage.recommendedAction,
        summary: 'Pause the work and ask for the missing acceptance criteria before continuing.',
      };
    case 'reduce-scope':
      return {
        action: triage.recommendedAction,
        summary: 'Trim the request to one clear next step before accepting more changes.',
      };
    case 'escalate':
      return {
        action: triage.recommendedAction,
        summary: 'Escalate the conflict or timeline pressure before the agent burns another cycle.',
      };
    case 'rest':
      return {
        action: triage.recommendedAction,
        summary: 'Route the agent to a short reset before assigning follow-up work.',
      };
  }
}
