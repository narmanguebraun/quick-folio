import { getRepositories } from "@/features/getRepositories";
import { RepoCard } from "./ui/RepoCard";

export default async function RepositoryList() {
  const repos = await getRepositories();

  return (
    <>
      {repos.map((repo) => (
        <RepoCard key={repo.html_url} {...repo} />
      ))}
    </>
  );
}
