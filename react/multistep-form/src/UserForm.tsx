export function UserForm() {
  return (
    <>
      <label>First Name</label>
      <input type="text" autoFocus required />
      <label>Last Name</label>
      <input type="text" required />
      <label>Age</label>
      <input type="number" required min={1} />
    </>
  );
}
