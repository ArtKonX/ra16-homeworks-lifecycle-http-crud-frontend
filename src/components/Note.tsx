import apiRequests from "../api/apiRequests"

const Note = ({ url, setNotes, note }: { url: string, setNotes: (notes: INotes[]) => void, note: INotes }) => {

    const removeNote = () => {

        apiRequests({
            action: 'removeNote', url, id: note.id, callback: (data) => {
                setNotes(data);

                console.log(data)
            }
        });

        apiRequests({
            action: 'getNotes', url, callback: (data) => {
                setNotes(data)
            }
        })
    }

    return (
        <div className="note-remove">
            <button className="remove-note" onClick={removeNote}></button>
            <p className="note">{note.content}</p>
        </div>
    )
}

export default Note