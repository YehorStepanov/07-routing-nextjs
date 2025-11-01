import NoteList from '@/components/NoteList/NoteList';
import ErrorMessage from '@/components/ErrorMessage/ErrorMessage';
import { fetchNotes } from '@/lib/api';
import { Tag } from '@/types/note';

interface Props {
  params: { tag?: Tag[] };
}

export default async function NotesByTagPage({ params }: Props) {
  const tagParam = params.tag?.[0] ?? 'all';
  const tag: Tag| null = tagParam === 'all' ? null : tagParam;

  const notesData = await fetchNotes(1, '', tag); 
  return (
    <>
      {notesData ? (
        <NoteList notes={notesData.notes} />
      ) : (
        <ErrorMessage />
      )}
    </>
  );
}
