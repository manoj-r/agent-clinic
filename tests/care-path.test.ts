import { describe, expect, test } from 'vitest';
import { recommendCarePath } from '../src/care-path';

describe('recommendCarePath', () => {
  test('maps triage to a short operational care recommendation', () => {
    const recommendation = recommendCarePath({
      strain: 'missing-context',
      severity: 'moderate',
      recommendedAction: 'request-clarification',
    });

    expect(recommendation).toEqual({
      action: 'request-clarification',
      summary: 'Pause the work and ask for the missing acceptance criteria before continuing.',
    });
  });
});
