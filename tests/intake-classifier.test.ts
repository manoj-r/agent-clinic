import { describe, expect, test } from 'vitest';
import { classifyIntake } from '../src/intake-classifier';

describe('classifyIntake', () => {
  test('detects missing context', () => {
    const result = classifyIntake({
      agentId: 'agent-1',
      summary: 'Please build the workflow but there is missing context and no acceptance criteria.',
      reportedStrains: [],
    });

    expect(result).toEqual({
      strain: 'missing-context',
      severity: 'moderate',
      recommendedAction: 'request-clarification',
    });
  });

  test('detects scope churn', () => {
    const result = classifyIntake({
      agentId: 'agent-2',
      summary: 'The scope keeps changing with another pivot and more requirements added.',
      reportedStrains: [],
    });

    expect(result.strain).toBe('scope-churn');
    expect(result.recommendedAction).toBe('reduce-scope');
  });

  test('detects urgency pressure', () => {
    const result = classifyIntake({
      agentId: 'agent-3',
      summary: 'This is urgent and must be done immediately by end of day.',
      reportedStrains: [],
    });

    expect(result.strain).toBe('urgency-pressure');
    expect(result.severity).toBe('high');
  });

  test('detects contradictory instruction', () => {
    const result = classifyIntake({
      agentId: 'agent-4',
      summary: 'The instructions are contradictory: use Fastify but do not add a server.',
      reportedStrains: [],
    });

    expect(result.strain).toBe('contradictory-instruction');
    expect(result.recommendedAction).toBe('escalate');
  });
});
