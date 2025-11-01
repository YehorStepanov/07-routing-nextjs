import NoteList from '@/components/NoteList/NoteList';
import { fetchNotes } from '@/lib/api';
import { Tag } from '@/types/note';

interface Props {
  params: Promise<{ slug?: string[] }>;
}

export default async function NotesByTagPage({ params }: Props) {
  const { slug } = await params; 
  const tagParam = slug?.[0] ?? 'all';
  const tag: Tag | null = tagParam === 'all' ? null : (tagParam as Tag);

  const notesData = await fetchNotes(1, '', tag);
  console.log('tag:', tag);

  return (
        <NoteList notes={notesData.notes} />
  );
}
