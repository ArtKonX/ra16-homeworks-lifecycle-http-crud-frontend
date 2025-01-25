import Note from "./Note"

const NotesList = ({ url, notes, setNotes }: { url: string, notes: INotes[], setNotes: (notes: INotes[]) => void }) => {

    return (
        <ul className="notes-list">
            {notes.map(note => (<li key={note.id} className="note-elem">
                <Note url={url} setNotes={setNotes} note={note} />
            </li>))}
        </ul>
    )
}

export default NotesList