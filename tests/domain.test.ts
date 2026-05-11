import { describe, expect, test } from 'vitest';
import { agentStrains } from '../src/domain';
import type { AgentStrain, IntakeRequest, TriageResult } from '../src/domain';

describe('domain types', () => {
  test('support framework-independent intake and triage records', () => {
    const strain: AgentStrain = 'missing-context';
    const intake: IntakeRequest = {
      agentId: 'agent-7',
      summary: 'Asked to implement a feature with no acceptance criteria.',
      reportedStrains: [strain],
    };
    const triage: TriageResult = {
      strain,
      severity: 'moderate',
      recommendedAction: 'request-clarification',
    };

    expect(agentStrains).toContain('missing-context');
    expect(intake.reportedStrains).toContain('missing-context');
    expect(triage).toEqual({
      strain: 'missing-context',
      severity: 'moderate',
      recommendedAction: 'request-clarification',
    });
  });
});
