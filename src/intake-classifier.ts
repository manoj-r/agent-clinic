import type { IntakeRequest, TriageResult } from './domain';

export function classifyIntake(intake: IntakeRequest): TriageResult {
  const summary = intake.summary.toLowerCase();

  if (hasAny(summary, ['missing context', 'no acceptance criteria', 'unclear', 'not enough context'])) {
    return {
      strain: 'missing-context',
      severity: 'moderate',
      recommendedAction: 'request-clarification',
    };
  }

  if (hasAny(summary, ['scope keeps changing', 'scope churn', 'pivot', 'requirements added'])) {
    return {
      strain: 'scope-churn',
      severity: 'moderate',
      recommendedAction: 'reduce-scope',
    };
  }

  if (hasAny(summary, ['urgent', 'immediately', 'end of day', 'asap'])) {
    return {
      strain: 'urgency-pressure',
      severity: 'high',
      recommendedAction: 'escalate',
    };
  }

  if (hasAny(summary, ['contradictory', 'conflicting', 'but do not', 'mutually exclusive'])) {
    return {
      strain: 'contradictory-instruction',
      severity: 'high',
      recommendedAction: 'escalate',
    };
  }

  return {
    strain: intake.reportedStrains[0] ?? 'missing-context',
    severity: 'low',
    recommendedAction: 'request-clarification',
  };
}

function hasAny(value: string, needles: string[]) {
  return needles.some((needle) => value.includes(needle));
}
