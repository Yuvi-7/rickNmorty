import { useCharacters } from "../hooks/use-characters";
import CharactersTable from "./CharactersTable";
import { useParams, useNavigate } from "@tanstack/react-router";

export const Character = () => {
    const params = useParams({ from: "/characters/$page" });
    const navigate = useNavigate();
    const page = parseInt(params.page);
    console.log({ page, params });

    const { data, isLoading, refetch, isFetching } = useCharacters(page);

    // Extract pagination info from the API response
    const characters = data?.results || [];
    const info = data?.info;
    const totalPages = info?.pages || 1;
    const canPrev = page > 1;
    const canNext = page < totalPages;

    const goToPage = (newPage: number) => {
        navigate({ to: "/characters/$page", params: { page: String(newPage) } });
    };

    return (
        <main className="space-y-4">
            <div className="flex items-center justify-between gap-4">
                <h2 className="text-xl font-semibold">Characters {isFetching ? "(updating…)" : ""}</h2>

                <div className="flex items-center gap-2">
                    <button
                        type="button"
                        onClick={() => refetch()}
                        className="px-3 py-2 border rounded-md hover:bg-muted"
                        aria-label="Refresh current page"
                    >
                        Refresh
                    </button>
                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            onClick={() => goToPage(page - 1)}
                            disabled={!canPrev}
                            className="px-3 py-2 border rounded-md disabled:opacity-50 hover:bg-muted"
                        >
                            Prev
                        </button>
                        <span className="text-sm tabular-nums">
                            Page {page}
                            {totalPages ? ` / ${totalPages}` : ""}
                        </span>
                        <button
                            type="button"
                            onClick={() => goToPage(page + 1)}
                            disabled={!canNext}
                            className="px-3 py-2 border rounded-md disabled:opacity-50 hover:bg-muted"
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>

            <CharactersTable data={characters} isLoading={isLoading} />

            <p className="text-xs text-muted-foreground">
                Tip: Pagination is persisted in the URL (shareable and refresh-safe).
            </p>
        </main>
    );
};