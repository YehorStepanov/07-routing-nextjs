import css from "./NotePreview.module.css";

interface NotePreviewProps {
  note: {
    title: string;
    content: string;
    tag: string;
    createdAt: string;
    updatedAt?: string;
  };
}

export default function NotePreview({ note }: NotePreviewProps) {
  const formattedDate = note.updatedAt
    ? `Updated at: ${new Date(note.updatedAt).toLocaleString()}`
    : `Created at: ${new Date(note.createdAt).toLocaleString()}`;

  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>{note.title}</h2>
      <p className={css.content}>{note.content}</p>
      <p className={css.tag}>Tag: {note.tag}</p>
      <p className={css.date}>{formattedDate}</p>
    </div>
  );
}
