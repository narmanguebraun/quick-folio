import { GITHUB_USERNAME } from "@/data/constants";

const user = GITHUB_USERNAME;

export interface GitHubProfile {
  avatar_url: string;
  name: string;
  html_url: string;
  bio: string;
  twitter_username: string;
}

export async function getUser(): Promise<GitHubProfile> {
  const res = await fetch(`https://api.github.com/users/${user}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
