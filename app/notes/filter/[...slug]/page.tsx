import { dehydrate, QueryClient, HydrationBoundary } from "@tanstack/react-query";
import { fetchNotes } from "@/lib/api";
import { Tag } from "@/types/note";
import NotesClient from "./NotePreview.client";

interface Props {
  params: Promise<{ slug?: Tag[] }>;
}

export default async function NotesByTagPage({ params }: Props) {
  const { slug } = await params;
  const tag = slug?.[0] ?? "all";
  const tagFilter = tag === "all" ? null : tag;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["notes", 1, "", tagFilter],
    queryFn: () => fetchNotes(1, "", tagFilter),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient tag={tagFilter} />
    </HydrationBoundary>
  );
}
