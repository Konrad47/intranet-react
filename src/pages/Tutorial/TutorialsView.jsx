import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom';
import PageTitle from '../../components/PageTitle'
import { fetchTutorials, fetchTutorial, addTutorial, deleteTutorial, editTutorial } from './tutorials-api'
import TableHead from '../../components/TableHead'
import TableBody from '../../components/TableBody'
import AddEditForm from '../../components/AddEditForm';
const TutorialsView = () => {
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
    const [tutorials, setTutorials] = useState([]);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    useEffect(() => {
        const getTutorials = async () => {
            const tutorialsFromServer = await fetchTutorials();
            setTutorials(tutorialsFromServer);
        };
        getTutorials();
    }, [tutorials.length])

    const addingTutorial = () => {
        const currentDate = new Date().toJSON().slice(0, 10);
        const currentHour = new Date().toLocaleTimeString();
        const tutorial = {
            title: title,
            author: author,
            created_at: currentDate + " " + currentHour
        };
        if (!title || !author) {
            alert("Uzupełnij wszystkie pola!")
            return
        }
        addTutorial(tutorial);
        setTutorials([...tutorials, tutorial])
    }
    const deletingTutorial = (id) => {
        deleteTutorial(id);
        setTutorials(tutorials.filter((tut) => tut.id !== id))
    }
    return (
        <div className='app-margin'>
            <PageTitle text={'Poradniki'} />
            <table>
                <TableHead headItems={titles} />
                <TableBody bodyItems={tutorials} showElements={false} onDelete={deletingTutorial} url={'tutorials/'} />
            </table>
            <div>
                <div className='addedit-form'>
                    <AddEditForm text={'Dodaj Poradnik'} data1={title} data2={author} setData1={(e) => setTitle(e.target.value)} setData2={(e) => setAuthor(e.target.value)} save={addingTutorial} />
                </div>
                <div className='addedit-form'>
                    <Outlet tutorials={tutorials} />
                </div>
            </div>
        </div>
    )
}

export default TutorialsView
