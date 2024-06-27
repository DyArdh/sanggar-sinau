const IconButton = ({ children, onClick, className }) => {
  return (
    <button onClick={onClick} className={`rounded-md p-2 ${className}`}>
      {children}
    </button>
  );
};

export default IconButton;
