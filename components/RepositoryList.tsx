import { getRepositories } from "@/features/getRepositories";
import { RepoCard } from "./ui/RepoCard";

export default async function RepositoryList() {
  const repos = await getRepositories();

  const sortedRepos = repos
    .map((repo) => {
      return {
        id: repo.id,
        html_url: repo.html_url,
        name: repo.name,
        description: repo.description,
        topics: repo.topics,
        pushed_at: repo.pushed_at,
      };
    })
    .sort((repo1, repo2) => (repo1.pushed_at > repo2.pushed_at ? -1 : 1));

  return (
    <>
      {sortedRepos.map((repo) => (
        <RepoCard key={repo.id} {...repo} />
      ))}
    </>
  );
}
