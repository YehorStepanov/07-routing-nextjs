'use client';

import React from 'react';
import NotePreview from '@/components/NotePreview/NotePreview';
import { Note } from '@/types/note';

interface Props {
  note: Note;
}

export default function NotePreviewClient({ note }: Props) {
  return <NotePreview note={note} />;
}
