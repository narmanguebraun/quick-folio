import Link from "next/link";
import { ArrowUpRightIcon } from "./Icons";
import { Tag } from "./Tag";

export type RepoCardProps = {
  html_url: string;
  name: string;
  description: string;
  topics: string[];
};

export function RepoCard({
  name,
  html_url,
  description,
  topics,
}: RepoCardProps) {
  return (
    <Link href={html_url}>
      <div className="bg-black p-4 min-h-[260px] rounded-lg border border-gray-700 group hover:border-white flex flex-col justify-between relative">
        <div>
          <h2 className="text-sm font-semibold">{name}</h2>

          <div className="gap-4 mt-4">
            {topics?.map((topic) => (
              <Tag key={topic}>{topic}</Tag>
            ))}
          </div>
        </div>
        <div className="text-gray-400 text-xs mt-4">
          {description && <>{description}</>}
        </div>
      </div>
    </Link>
  );
}
