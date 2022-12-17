import React, { useEffect, useState } from 'react'
import PageTitle from '../components/PageTitle'
import HomeItem from '../components/HomeItem'
import { fetchLastTutorial } from './Tutorial/tutorials-api';
import { useDispatch, useSelector } from 'react-redux';
import { getLastProject } from './Projects/projectSlice';
const Home = () => {
    const [lastAnnouncement, setLastAnnouncement] = useState({});
    const [lastTutorial, setLastTutorial] = useState({});
    const { lastProject } = useSelector((state) => state.projects);
    const dispatch = useDispatch();
    const url = "http://localhost:5001/announcements";

    useEffect(() => {
        const getLastAnnouncement = async () => {
            const announcementsFromServer = await fetchLastAnnouncement();
            setLastAnnouncement(announcementsFromServer);
        };

        const getLastTutorial = async () => {
            const tutorialFromServer = await fetchLastTutorial();
            setLastTutorial(tutorialFromServer);
        }

        getLastAnnouncement();
        getLastTutorial();
        dispatch(getLastProject());
    }, [])

    const fetchLastAnnouncement = async () => {
        const response = await fetch(url);
        const data = await response.json();
        return data.slice(-1).pop()
    }

    return (
        <div className='app-margin'>
            <PageTitle text={`Start ${navigator.language}`} />
            <HomeItem link={`announcement/${lastAnnouncement?.id}`} color={'#61a4d7'} name="Ogłoszenie" title={lastAnnouncement.title} author={lastAnnouncement.author} date={lastAnnouncement.created_at?.slice(0, 10)} />
            <HomeItem link={`tutorials/-edit/${lastTutorial.id}`} color={'#f6c23e'} name="Poradnik" title={lastTutorial.title} author={lastTutorial.author} date={lastTutorial.created_at?.slice(0, 10)} />
            <HomeItem link={`projects/${lastProject.id}`} color={'#7bb140'} name="Projekt" title={lastProject.title} author={lastProject.author} date={lastProject.created_at?.slice(0, 10)} />
        </div>
    )
}
export default Home