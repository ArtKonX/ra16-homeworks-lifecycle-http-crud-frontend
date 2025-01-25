import { useState } from 'react';
import apiRequests from '../api/apiRequests';

const CrudForm = ({ url, setNotes }: { url: string, setNotes: (notes: INotes[]) => void }) => {

    const [data, setData] = useState<INotes>({
        content: '',
    });

    const handleChange = ((e: React.ChangeEvent<HTMLTextAreaElement>): void => {
        const { name, value } = e.target;

        setData((prevInput) => {

            const newData = { ...prevInput, [name]: value }

            return newData;
        });
    });

    const handleSubmit = ((e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        const newData = { ...data };

        apiRequests({
            action: 'createNote', url, data: newData, callback: (data) => {
                console.log(data)
            }
        })

        apiRequests({
            action: 'getNotes', url, callback: (data) => {
                setNotes(data)
            }
        })

        setData({
            content: ''
        });
    })

    return (
        <div className="crud-form">
            <h2 className="crud-form-title">New Note</h2>
            <form className='notes-form' onSubmit={handleSubmit}>
                <textarea onChange={handleChange} name='content' className="notes-textarea" value={data.content} />
                <button type="submit" className='notes-submit'></button>
            </form>
        </div>
    )

}

export default CrudForm