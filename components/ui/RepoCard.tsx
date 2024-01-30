import Link from "next/link";
import { Tag } from "./Tag";
import DateFormatter from "../Dateformatter";

export type RepoCardProps = {
  id: string;
  html_url: string;
  name: string;
  description: string;
  topics: string[];
  pushed_at: string;
};

export function RepoCard({
  name,
  html_url,
  description,
  topics,
  pushed_at,
}: RepoCardProps) {
  return (
    <Link href={html_url}>
      <div className="bg-black p-4 min-h-[260px] rounded-lg border border-gray-700 group hover:border-white flex flex-col justify-between relative">
        <div>
          <div className="flex justify-between items-center">
            <h2 className="text-sm font-semibold">{name}</h2>
            <DateFormatter dateString={pushed_at} />
          </div>
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
