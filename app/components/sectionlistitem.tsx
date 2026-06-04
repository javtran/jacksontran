import Link from "../../public/icons/link.svg";
import Image, { StaticImageData } from "next/image";

type SectionLink = { title: string; url: string };

type SectionListItemProps = {
  title?: string;
  role?: string;
  company?: string;
  description?: string;
  url?: string;
  links?: SectionLink[];
  skills?: string[];
  image?: StaticImageData;
  image_alt?: string;
  start_date?: string;
  end_date?: string;
  index?: number;
};

const SectionListItem = (prop: SectionListItemProps) => {
  return (
    <a
      href={prop.url}
      target="_blank"
      className="group grid sm:grid-cols-12 gap-4 py-4 px-2  sm:p-8 hover:bg-black/20 rounded"
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
            `${prop.index !== undefined && prop.index % 2 && "sm:order-last "}`
          }
        >
          <Image
            src={prop.image}
            alt={prop.image_alt ?? ""}
            width={500}
            height={300}
            className="h-72 object-cover object-center"
          />
        </div>
      )}

      <div className={prop.image ? "sm:col-span-6" : "sm:col-span-10"}>
        <div className="text-lg font-medium text-slate-200 group-hover:text-sky-400 focus-visible:text-sky-400">
          {prop.title && <span>{prop.title}</span>}
          {prop.role && (
            <span>
              {prop.role} · {prop.company}
            </span>
          )}
        </div>
        <p className="mt-2 text-slate-400">{prop.description}</p>
        {prop.links && (
          <ul className="mt-2 flex flex-wrap">
            {prop.links.map((link, i) => {
              return (
                <li key={i} className="mr-4 mt-2">
                  <a
                    href={link.url}
                    target="_blank"
                    onClick={(e) => e.stopPropagation()}
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
            {prop.skills.map((skill, i) => {
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
    </a>
  );
};
export default SectionListItem;
