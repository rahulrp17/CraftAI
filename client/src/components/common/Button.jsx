const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`
      bg-green-800
      hover:bg-green-900
      text-white
      px-6
      py-3
      rounded-xl
      transition-all
      duration-300
      ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;