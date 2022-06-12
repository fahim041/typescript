interface ChildProps {
  color: string;
  children: string;
}

export const Child: React.FC<ChildProps> = ({ color, children }) => {
  return (
    <div>
      <p>{color}</p>
      <p>{children}</p>
    </div>
  );
};
