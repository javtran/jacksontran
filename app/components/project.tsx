const Project = (prop: any) => {
  console.log(prop);
  return (
    <div className="grid sm:grid-cols-2 gap-4 mb-12">
      <div className="border">image</div>
      <div>
        <a
          href={prop.project_url}
          target="_blank"
          className="text-lg font-medium text-slate-200 hover:text-sky-400 focus-visible:text-sky-400"
        >
          <span>{prop.title}</span>
        </a>
        <p className="mt-2">{prop.description}</p>
        {prop.skills && (
          <ul className="mt-2 flex flex-wrap">
            {prop.skills.map((skill: any, i: number) => {
              return (
                <li key={i} className="mr-2 mt-2">
                  <span className="bg-sky-400/20 px-4 py-1 rounded-full text-sky-400 font-medium text-sm">
                    {skill}
                  </span>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Project;
