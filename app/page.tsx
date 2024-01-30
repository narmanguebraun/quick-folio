import RepositoryList from "@/components/RepositoryList";

export default async function Home() {
  return (
    <main>
      <div className="grid grid-cols-2 gap-4">
        <RepositoryList />
      </div>
    </main>
  );
}
