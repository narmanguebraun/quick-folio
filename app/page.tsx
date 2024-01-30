import RepositoryList from "@/components/RepositoryList";

export default async function Home() {
  return (
    <main>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <RepositoryList />
      </div>
    </main>
  );
}
