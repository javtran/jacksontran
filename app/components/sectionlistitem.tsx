import Link from "../../public/link.svg";
import Image from "next/image";

/**
 *
 * @param prop
 *      title: title of project
 *      role: role of job
 *      company: role of company
 *      description: description of role/project
 *      url: main url intended for this role/project
 *      links: other relevant sub links
 *      skills: skills used for this role/project
 *      image: image url of project
 *      image_alt: alternative text for image
 *      start_date: start date of job
 *      end_date: end date of job
 *      index: index of item
 * @returns
 */
const SectionListItem = (prop: any) => {
  return (
    <a
      href={prop.url}
      target="_blank"
      className="group grid sm:grid-cols-12 gap-4 p-8 hover:bg-black/20 rounded"
    >
      {prop.start_date && prop.end_date && (
        <p className="text-sm uppercase font-semibold text-slate-500 sm:col-span-2 tracking-wide mt-1 mb-2">
          {prop.start_date} — {prop.end_date}
        </p>
      )}
      {prop.image && (
        <div
          className={
            "relative sm:col-span-6 max-sm:order-last " +
            `${prop.index % 2 && "sm:order-last "}`
          }
        >
          <Image
            src={prop.image}
            alt={prop.image_alt}
            width={500}
            height={300}
            className="h-72 object-cover object-center"
          />
        </div>
      )}

      <div className={prop.image ? "sm:col-span-6" : "sm:col-span-10"}>
        <a
          href={prop.url}
          target="_blank"
          className="text-lg font-medium text-slate-200 group-hover:text-sky-400 focus-visible:text-sky-400"
        >
          {prop.title && <span>{prop.title}</span>}
          {prop.role && (
            <span>
              {prop.role} · {prop.company}
            </span>
          )}
        </a>
        <p className="mt-2">{prop.description}</p>
        {prop.links && (
          <ul className="mt-2 flex flex-wrap">
            {prop.links.map((link: any, i: number) => {
              return (
                <li key={i} className="mr-4 mt-2">
                  <a
                    href={link.url}
                    target="_blank"
                    className="text-sm inline-flex items-center font-medium text-slate-300 hover:text-sky-400 focus-visible:text-sky-400 fill-slate-200 hover:fill-sky-400 focus-visible:fill-sky-400"
                  >
                    <Link className="fill-inherit mr-1" />
                    <span>{link.title}</span>
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
    </a>
  );
};
export default SectionListItem;
