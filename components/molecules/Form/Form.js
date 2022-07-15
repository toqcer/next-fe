function Form({ title, children, onSubmit, autoComplete = 'off' }) {
  return (
    <form
      className="w-full bg-gay text-black p-8 rounded-lg"
      onSubmit={onSubmit}
      autoComplete={autoComplete}
    >
      <h3 className="text-center text-xl font-bold mb-4">{title}</h3>
      {children}
    </form>
  );
}

export default Form;
