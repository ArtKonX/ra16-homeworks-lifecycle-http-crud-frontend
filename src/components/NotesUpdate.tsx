import apiRequests from "../api/apiRequests";

const NotesUpdate = ({ url, setNotes }: { url: string, setNotes: (notes: INotes[]) => void }) => {

    const update = async () => {

        apiRequests({action: 'getNotes', url, callback: (data) => {
            setNotes(data)
        }})
    }

    return (
        <div className="update-notes">
            <h1 className="crud-title">Notes</h1>
            <button type='button' className="update-notes-btn" onClick={update}></button>
        </div>
    )

}

export default NotesUpdate