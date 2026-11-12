const task = document.querySelector("#task");
for (const name of Object.keys(tasks)) task.add(new Option(name, name));
const checkboxes = permissions.map((permission, index) => {
  const label = document.createElement("label");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.value = permission;
  checkbox.checked = index < 3;
  label.append(checkbox, " " + permission);
  document.querySelector("#grants").append(label);
  checkbox.addEventListener("change", refresh);
  return checkbox;
});
function refresh() {
  const granted = checkboxes.filter(c => c.checked).map(c => c.value);
  const { excess, missing } = review(tasks[task.value], granted);
  document.querySelector("#result").textContent = [
    "Excess access: " + (excess.join(", ") || "None"),
    "Missing access: " + (missing.join(", ") || "None"),
    !excess.length && !missing.length ? "Permissions match the assigned task." : ""
  ].filter(Boolean).join("\n");
}
task.addEventListener("change", refresh);
document.querySelector("#apply").addEventListener("click", () => {
  for (const checkbox of checkboxes) checkbox.checked = tasks[task.value].includes(checkbox.value);
  refresh();
});
refresh();
