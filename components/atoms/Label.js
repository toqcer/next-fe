const Label = ({ text, ...rest }) => {
  return (
    <label className="capitalize text-primary font-bold text-lg w-64" {...rest}>
      {text}
    </label>
  );
};

export default Label;
