import { FormWrapper } from "./FormWrapper";

type userData = {
  firstName: string;
  lastName: string;
  age: string;
};

type userFormProps = userData & {
  updateFields: (field: Partial<userData>) => void;
};

export function UserForm({
  firstName,
  lastName,
  age,
  updateFields,
}: userFormProps) {
  return (
    <FormWrapper title="User Details">
      <label>First Name</label>
      <input
        type="text"
        autoFocus
        required
        value={firstName}
        onChange={(e) => updateFields({ firstName: e.target.value })}
      />
      <label>Last Name</label>
      <input
        type="text"
        required
        value={lastName}
        onChange={(e) => updateFields({ lastName: e.target.value })}
      />
      <label>Age</label>
      <input
        type="number"
        required
        min={1}
        value={age}
        onChange={(e) => updateFields({ age: e.target.value })}
      />
    </FormWrapper>
  );
}
