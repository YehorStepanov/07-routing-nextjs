'use client';

import React from 'react';
import NoteList from '@/components/NoteList/NoteList';
import { Note } from '@/types/note';

interface Props {
  notes: Note[];
}

export default function NotesClient({ notes }: Props) {
  return <NoteList notes={notes} />;
}
