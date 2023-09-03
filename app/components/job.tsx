import Link from "../../public/link.svg";

const Job = (prop: any) => {
  return (
    <div className="grid sm:grid-cols-12 gap-4 mb-12">
      <p className="text-sm uppercase font-semibold text-slate-500 sm:col-span-2 tracking-wide mt-1 mb-2">
        {prop.start_date} — {prop.end_date}
      </p>
      <div className="sm:col-span-10">
        <a
          href={prop.company_url}
          target="_blank"
          className="text-lg font-medium text-slate-200 hover:text-sky-400 focus-visible:text-sky-400"
        >
          <span>
            {prop.role} · {prop.company}
          </span>
        </a>
        <p className="mt-2">{prop.description}</p>
        {prop.projects && (
          <ul className="mt-2 flex flex-wrap">
            {prop.projects.map((project: any, i: number) => {
              return (
                <li key={i} className="mr-4 mt-2">
                  <a
                    href={project.url}
                    target="_blank"
                    className="text-sm inline-flex items-center font-medium text-slate-300 hover:text-sky-400 focus-visible:text-sky-400 fill-slate-200 hover:fill-sky-400 focus-visible:fill-sky-400"
                  >
                    <Link className="fill-inherit mr-1" />
                    <span>{project.title}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        )}
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
        <ul className="mt-2 flex flex-wrap"></ul>
      </div>
    </div>
  );
};

export default Job;
