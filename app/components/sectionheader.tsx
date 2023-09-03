const SectionHeader = (prop: any) => {
  return (
    <div>
      <div className="flex items-center text-3xl uppercase text-slate-200 font-medium mb-6 after:block after:ml-4 after:content-[' '] after:w-48 after:h-px after:bg-slate-200 after:max-lg:w-full">
        <span className="text-sky-400">{prop.index}.</span> {prop.title}
      </div>
    </div>
  );
};

export default SectionHeader;
