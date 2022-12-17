import React, { useState } from 'react'
import Button from '../../components/Button'
import { useNavigate } from 'react-router-dom'
import AddEditForm from '../../components/AddEditForm'
const AnnouncementAdd = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const navigate = useNavigate();
    const url = "http://localhost:5001/announcements";

    const addAnnouncement = async () => {
        const currentDate = new Date().toJSON().slice(0, 10);
        const currentHour = new Date().toLocaleTimeString();
        const announcement = {
            title: title,
            author: author,
            created_at: currentDate + " " + currentHour
        };
        if (!title || !author) {
            alert("Uzupełnij wszystkie pola!")
            return
        }
        await fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(announcement),
        });
        navigate(-1)
    }

    return (
        <div className='app-margin'>
            <AddEditForm text='Dodaj Ogłoszenie' data1={title} setData1={((e) => setTitle(e.target.value))} data2={author} setData2={(e) => setAuthor(e.target.value)} save={addAnnouncement} />
            <Button onClick={() => navigate(-1)} text={'Anuluj'} color={'#a80932'} />
        </div>
    )
}

export default AnnouncementAdd
