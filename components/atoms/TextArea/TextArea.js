const TextArea = ({className = "" , ...rest}) => {
  return (
    <textarea 
      cols="30" 
      rows="10" 
      className={`${className} bg-white outline-none h-full border-0 w-full py-2 px-4`}
      {...rest}>
    </textarea>
  )
}

export default TextArea