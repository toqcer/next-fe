const TextArea = ({ className = '', ...rest }) => {
  return (
    <textarea
      cols="30"
      rows="15"
      className={`${className} bg-white outline-1 outline-muted border-0 w-full h-48 py-2 px-4`}
      {...rest}
    ></textarea>
  );
};

export default TextArea;
