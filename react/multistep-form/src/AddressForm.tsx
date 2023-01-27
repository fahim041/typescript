export function AddressForm() {
  return (
    <>
      <label>Street</label>
      <input type="text" required autoFocus />
      <label>City</label>
      <input type="text" required />
      <label>State</label>
      <input type="text" required />
      <label>Zip</label>
      <input type="text" required />
    </>
  );
}
