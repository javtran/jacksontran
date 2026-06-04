"use client";
import Image, { StaticImageData } from "next/image";

type ProjectCardProps = {
  title: string;
  description: string;
  url?: string;
  skills?: string[];
  image?: StaticImageData;
  image_alt?: string;
  image_position?: string;
  links?: { title: string; url: string }[];
};

const ProjectCard = ({
  title,
  description,
  url,
  skills,
  image,
  image_alt,
  image_position = "object-top",
  links,
}: ProjectCardProps) => {
  // Collect all destinations: main url first, then sub-links
  const allLinks = [
    ...(url ? [{ title: "Live", url }] : []),
    ...(links ?? []),
  ];

  return (
    <div className="group flex flex-col h-full overflow-hidden rounded-lg bg-slate-800/40 border border-slate-700/50 hover:border-sky-400/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-400/10">
      {/* Image */}
      <div className="relative overflow-hidden h-48 bg-slate-900/60">
        {image ? (
          <Image
            src={image}
            alt={image_alt ?? ""}
            fill
            className={`object-cover ${image_position}`}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-600 text-sm">
            No preview
          </div>
        )}
        {/* Description overlay on hover */}
        <div className="absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
          <p className="text-slate-300 text-sm text-center leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 flex flex-col gap-3 flex-1">
        <span className="text-slate-200 font-medium">{title}</span>

        {skills && (
          <ul className="flex flex-wrap gap-2">
            {skills.map((skill, i) => (
              <li key={i}>
                <span className="bg-sky-400/20 px-3 py-0.5 rounded-full text-sky-400 font-medium text-xs">
                  {skill}
                </span>
              </li>
            ))}
          </ul>
        )}

        {allLinks.length > 0 && (
          <div className="flex gap-3 mt-auto pt-2 border-t border-slate-700/50">
            {allLinks.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                className="text-sm font-medium text-slate-400 hover:text-sky-400 transition-colors duration-200"
              >
                {link.title} ↗
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
