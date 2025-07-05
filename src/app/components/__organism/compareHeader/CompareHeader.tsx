const CompareHeader = () => {
  return (
    <div className="w-full md:flex-1 flex flex-row items-center justify-between">
      {["Basic", "Pro", "Business"].map((label, i) => (
        <p
          key={i}
          className="flex-1 text-xs font bold uppercase tracking-[2px] text-center"
        >
          {label}
        </p>
      ))}
    </div>
  );
};

export default CompareHeader;
