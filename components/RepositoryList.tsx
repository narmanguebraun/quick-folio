import { getRepositories } from "@/features/getRepositories";
import { RepoCard } from "./ui/RepoCard";

export default async function RepositoryList() {
  const repos = await getRepositories();

  return (
    <div className="grid grid-cols-2 gap-4">
      {repos.map((repo) => (
        <RepoCard key={repo.html_url} {...repo} />
      ))}
    </div>
  );
}
