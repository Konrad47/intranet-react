import React, { useEffect, useState } from 'react';
import PageTitle from '../../components/PageTitle';
import TableHead from '../../components/TableHead';
import TableBody from '../../components/TableBody';
import Button from '../../components/Button';
import { Link } from "react-router-dom";
const AnnouncementsView = () => {
    const [titles] = useState([
        {
            id: 1,
            title: "#"
        },
        {
            id: 2,
            title: "Tytuł"
        },
        {
            id: 3,
            title: "Autor"
        },
        {
            id: 4,
            title: "Data Utworzenia"
        },
    ]);
    const [announcements, setAnnouncements] = useState([])

    const url = "http://localhost:5001/announcements";

    useEffect(() => {
        const getAnnouncements = async () => {
            const announcementsFromServer = await fetchAnnouncements();
            setAnnouncements(announcementsFromServer);
        };
        getAnnouncements();
    }, [])

    const fetchAnnouncements = async () => {
        const response = await fetch(url);
        const data = await response.json();
        return data
    }

    const deleteAnnouncements = async (id) => {
        await fetch(`${url}/${id}`, {
            method: 'DELETE',
        });
        setAnnouncements(announcements.filter((ann) => ann.id !== id));
    }

    return (
        <div className='app-margin'>
            <PageTitle text={'Ogłoszenia'} />
            <Link to="/announcement-add" className='link-button'>
                <Button text={'Dodaj ogłoszenie'} color={'#7bb140'} />
            </Link>
            <table>
                <TableHead headItems={titles} />
                <TableBody onDelete={deleteAnnouncements} bodyItems={announcements} url={'announcement/'} />
            </table>
        </div>
    )
}

export default AnnouncementsView
