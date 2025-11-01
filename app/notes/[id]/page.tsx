
import NotePreview from "@/components/NotePreview/NotePreview";
import { fetchNoteById } from "@/lib/api";
import { notFound } from "next/navigation";

interface Props {
  params: { id: string };
}

export default async function NotePage({ params }: Props) {
  const note = await fetchNoteById(params.id);

  if (!note) return notFound();

  return <NotePreview note={note} />;
}
