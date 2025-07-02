export const Card = ({ children, className }) => (
    <div className={`p-6 rounded-lg shadow-md bg-white/10 border ${className}`}>{children}</div>
  );
  
  export const CardHeader = ({ children }) => <div className="mb-4">{children}</div>;
  export const CardContent = ({ children, className }) => <div className={className}>{children}</div>;
  export const CardDescription = ({ children }) => <p className="text-white/70 text-sm">{children}</p>;
  export const CardTitle = ({ children, className }) => <h2 className={`text-xl font-bold ${className}`}>{children}</h2>;
  