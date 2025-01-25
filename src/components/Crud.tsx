import { useEffect, useState } from "react"
import NotesUpdate from "./NotesUpdate"
import NotesList from "./NotesList";
import CrudForm from "./CrudForm";
import apiRequests from "../api/apiRequests";

import VITE_BACKEND_URL from "../environment/environment";

const Crud = () => {

    const url = VITE_BACKEND_URL;

    const [notes, setNotes] = useState<INotes[]>([]);

    useEffect(() => {
        apiRequests({
            action: 'getNotes', url, callback: (data) => {
                setNotes(data)
            }
        })
    }, [setNotes, url])

    return (<>
        <NotesUpdate url={url} setNotes={setNotes} />
        <NotesList url={url} notes={notes} setNotes={setNotes} />
        <CrudForm url={url} setNotes={setNotes} />
    </>
    )
}

export default Crud