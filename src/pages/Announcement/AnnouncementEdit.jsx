import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Button from '../../components/Button';
import AddEditForm from '../../components/AddEditForm';
const AnnouncementEdit = () => {
    const [announcement, setAnnouncement] = useState({});
    const { annId } = useParams();
    const url = "http://localhost:5001/announcements";
    const navigate = useNavigate();
    useEffect(() => {
        const getAnnouncement = async () => {
            const announcementFromServer = await fetchAnnouncement();
            setAnnouncement(announcementFromServer);
        };
        getAnnouncement();
    }, [])

    const fetchAnnouncement = async () => {
        const response = await fetch(`${url}/${annId}`);
        const data = await response.json();
        return data
    }
    const editAnnouncement = async () => {
        const edtAnnouncement = {
            ...announcement,
            title: announcement.title,
            author: announcement.author
        }
        await fetch(`${url}/${annId}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(edtAnnouncement),
        });
        navigate("/announcements")
    }
    return (
        <div className='app-margin'>
            <AddEditForm text='Edytuj Ogłoszenie' data1={announcement?.title || ''} data2={announcement?.author || ''} setData1={(e) => setAnnouncement({ ...announcement, title: e.target.value })} setData2={(e) => setAnnouncement({ ...announcement, author: e.target.value })} save={editAnnouncement} />
            <Button onClick={() => navigate(-1)} text={'Anuluj'} color={'#a80932'} />
        </div>
    )
}

export default AnnouncementEdit
