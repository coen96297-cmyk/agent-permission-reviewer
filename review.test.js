const test = require("node:test");
const assert = require("node:assert/strict");
const { review, tasks } = require("./logic.js");

test("flags unnecessary sending access", () => {
  assert.deepEqual(review(tasks["Draft a support reply"], ["Read tickets", "Draft replies", "Send replies"]), { excess: ["Send replies"], missing: [] });
});
test("identifies missing permissions", () => {
  assert.deepEqual(review(["Read logs"], ["Read tickets"]), { excess: ["Read tickets"], missing: ["Read logs"] });
});
test("accepts minimum grants", () => {
  for (const required of Object.values(tasks)) assert.deepEqual(review(required, required), { excess: [], missing: [] });
});
