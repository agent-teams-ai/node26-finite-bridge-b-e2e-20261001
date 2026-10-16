import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';
import { test } from 'node:test';

test('public TEST checkpoint has an exact finite synthetic contract', () => {
  const state = JSON.parse(readFileSync(new URL('./checkpoint.json', import.meta.url), 'utf8'));
  const keys = (object, expected) => {
    assert.ok(object && typeof object === 'object' && !Array.isArray(object));
    assert.deepEqual(Object.keys(object).sort(), expected.sort());
  };
  keys(state, ['version', 'repository', 'checkpoint', 'toyPublication']);
  keys(state.repository, ['name', 'id', 'organizationId', 'owner', 'ownerId']);
  assert.equal(state.version, 1);
  assert.deepEqual(state.repository, {
    name: 'agent-teams-ai/node26-finite-bridge-b-e2e-20261001', id: 1399379762,
    organizationId: 280712041, owner: '777genius', ownerId: 13103045,
  });
  assert.ok([327, 326, 325, 323, 322].includes(state.checkpoint));
  assert.equal(state.toyPublication, [325, 323, 322].includes(state.checkpoint));
});
