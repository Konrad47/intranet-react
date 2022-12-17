import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addProject } from './projectSlice';
import AddEditForm from '../../components/AddEditForm';
const ProjectAdd = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const dispatch = useDispatch();
    const addingProject = () => {
        const currentDate = new Date().toJSON().slice(0, 10);
        const currentHour = new Date().toLocaleTimeString();
        const project = {
            title: title,
            author: author,
            created_at: currentDate + " " + currentHour
        };
        if (!title || !author) {
            alert("Uzupełnij wszystkie pola!")
            return
        }
        dispatch(addProject(project))
        setTitle('');
        setAuthor('');
    }
    return (
        <>
            <AddEditForm text={'Dodaj Projekt'} data1={title} data2={author} setData1={(e) => setTitle(e.target.value)} setData2={(e) => setAuthor(e.target.value)} save={addingProject} />
        </>
    )
}

export default ProjectAdd
