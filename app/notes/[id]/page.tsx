import NotePreview from "@/components/NotePreview/NotePreview";
import { fetchNoteById } from "@/lib/api";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function NotePage({ params }: Props) {
  const { id } = await params; 
  const note = await fetchNoteById(id);

  if (!note) return notFound();

  return <NotePreview note={note} />;
}
