const tasks = {
  "Draft a support reply": ["Read tickets", "Draft replies"],
  "Summarise audit logs": ["Read logs"],
  "Send an approved reply": ["Read tickets", "Send replies"]
};
const permissions = ["Read tickets", "Draft replies", "Send replies", "Read logs", "Change access"];
function review(required, granted) {
  return {
    excess: granted.filter(p => !required.includes(p)),
    missing: required.filter(p => !granted.includes(p))
  };
}

if (typeof module !== "undefined") module.exports = { review, tasks };
