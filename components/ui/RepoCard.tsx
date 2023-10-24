import Link from "next/link";
import { ArrowUpRightIcon } from "./Icons";

export type RepoCardProps = {
  html_url: string;
  name: string;
  description: string;
};

export function RepoCard({ name, html_url, description }: RepoCardProps) {
  return (
    <Link href={html_url}>
      <div className="bg-gray-950 p-4 min-h-[160px] rounded-lg border border-gray-700 group hover:border-white flex flex-col justify-between">
        <h2 className="text-sm font-semibold">{name}</h2>
        <div className="text-gray-400 text-xs mt-4">
          {description && <>{description}</>}
        </div>
      </div>
    </Link>
  );
}
