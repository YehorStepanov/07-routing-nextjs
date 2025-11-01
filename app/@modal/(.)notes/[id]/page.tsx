import Modal from "@/components/Modal/Modal";
import NotePreview from "@/components/NotePreview/NotePreview";
import { fetchNoteById } from "@/lib/api";
import { notFound } from "next/navigation";

interface Props {
  params: { id: string };
}

export default async function NoteModalPage({ params }: Props) {
   const { id } = await params; 
  const note = await fetchNoteById(id);

  if (!note) return notFound();

  return (
    <Modal>
      <NotePreview note={note} />
    </Modal>
  );
}
