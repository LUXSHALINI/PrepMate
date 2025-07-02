export const Badge = ({ children, className = "" }) => {
    return (
      <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${className}`}>
        {children}
      </span>
    );
  };
  