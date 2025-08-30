import { useNavigate, useParams } from "@tanstack/react-router";
import { useCharacterDetails } from "../hooks/use-character-details";

export const CharacterDetails = () => {
    const params = useParams({ from: "/character/$id" });
    const navigate = useNavigate();
    const id = parseInt(params.id);
    const { data, isLoading, isFetching } = useCharacterDetails(id);

  
  if (isLoading) {
    return (
      <main className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Loading character...</h2>
        </div>
        <section className="flex flex-col md:flex-row gap-4">
          <div className="shrink-0">
            <div className="w-[300px] h-[300px] bg-gray-200 rounded-md border animate-pulse"></div>
          </div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </section>
      </main>
    );
  }

  if (!data) {
    return (
      <main className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Character not found</h2>
        </div>
      </main>
    );
  }

  return (
    <main className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">
          {data.name} {isFetching ? "(updating…)" : ""}
        </h2>
        <div className="flex items-center gap-2">
          <button type="button" onClick={() => navigate({ to: "/characters/$page", params: { page: "1" } })} className="px-3 py-2 border rounded-md hover:bg-muted">
            Back
          </button>
        </div>
      </div>

      <section className="flex flex-col md:flex-row gap-4">
        <div className="shrink-0">
          <img
            src={data.image || "https://placehold.co/300x300/png"}
            alt={`${data.name} portrait`}
            width={300}
            height={300}
            className="rounded-md border"
          />
        </div>

        <div className="space-y-2 text-left">
          <p>
            <span className="font-medium">Status:</span> {data?.status || "N/A"}
          </p>
          <p>
            <span className="font-medium">Species:</span> {data?.species || "N/A"}
          </p>
          <p>
            <span className="font-medium">Gender:</span> {data?.gender || "N/A"}
          </p>
          <p>
            <span className="font-medium">Origin:</span> {data?.origin?.name || "Unknown"}
          </p>
          <p>
            <span className="font-medium">Location:</span> {data?.location?.name || "Unknown"}
          </p>
          <p>
            <span className="font-medium">Episodes:</span> {data?.episode?.length ?? 0}
          </p>
        </div>

      </section>
    </main>
)
}