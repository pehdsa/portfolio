import brackets from "./Brackets";

const TagLine = ({ className, children }: { className?: string, children: React.ReactNode }) => {
  return (
    <div className={`tagline flex items-center ${className || ""}`}>
      {brackets("left")}
      <div className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80 mx-2">{children}</div>
      {brackets("right")}
    </div>
  );
};

export default TagLine;