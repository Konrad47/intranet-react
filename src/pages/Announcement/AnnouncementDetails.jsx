import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import PageTitle from '../../components/PageTitle';
import Button from '../../components/Button';
import { Link } from "react-router-dom";

const AnnouncementDetails = () => {
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

    return (
        <div className='app-margin'>
            <PageTitle text={announcement.title !== undefined ? announcement.title : ''} />
            <h2>Autor: {announcement.author}</h2>
            <h2>Data utworzenia: {announcement.created_at}</h2>
            <Button onClick={() => navigate(-1)} text={'Wróć'} color={'#a80932'} />
            <Link to={`/announcement/-edit/${announcement.id}`} className='link-button'>
                <Button text={'Edytuj'} color={'#003b6f'} />
            </Link>
        </div>
    )
}

export default AnnouncementDetails
