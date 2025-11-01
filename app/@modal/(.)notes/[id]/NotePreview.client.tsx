'use client';

import { useQuery } from "@tanstack/react-query";
import { fetchNoteById } from "@/lib/api";
import Modal from "@/components/Modal/Modal";
import { useParams} from "next/navigation";
import NotePreview from "@/components/NotePreview/NotePreview";

export default function NotePreviewClient() {
  const { id } = useParams<{ id: string }>();

  const { data: note, isLoading, error } = useQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
    refetchOnMount: false,
  });

  if (isLoading) return <Modal>Loading...</Modal>;
  if (error || !note) return <Modal>Error loading note.</Modal>;

  return (
    <Modal>
      <NotePreview note={note} />
    </Modal>
  );
}
