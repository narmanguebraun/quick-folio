import { GITHUB_USERNAME } from "@/data/constants";

const user = GITHUB_USERNAME;

export interface Repository {
  html_url: string;
  name: string;
  description: string;
}

export async function getRepositories(): Promise<Repository[]> {
  const res = await fetch(`https://api.github.com/users/${user}/repos`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
