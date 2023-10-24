import Image from "next/image";
import Link from "next/link";

import { getUser } from "@/features/getUser";
import { GitHubIcon, TwitterIcon } from "./ui/Icons";

export default async function UserProfile() {
  const user = await getUser();
  return (
    <div className="flex flex-col items-center justify-center my-16">
      <Image
        src={user.avatar_url}
        width={96}
        height={96}
        alt={`${user.name}`}
        title={`${user.name}`}
        className="rounded-full"
        priority
      />
      <h1 className="m-4">{user.name}</h1>
      {user.bio && <div className="text-sm m-4">{user.bio}</div>}
      <div className="flex flex-row gap-4 items-center justify-center">
        <Link href={user.html_url} className="hover:text-gray-700">
          <GitHubIcon />
        </Link>
        {user.twitter_username && (
          <Link
            href={`https://twitter.com/${user.twitter_username}`}
            className="hover:text-gray-700"
          >
            <TwitterIcon />
          </Link>
        )}
      </div>
    </div>
  );
}
