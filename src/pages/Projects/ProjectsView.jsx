import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/PageTitle'
import TableHead from '../../components/TableHead';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProject, getProjects } from './projectSlice';
import TableBody from '../../components/TableBody';
import { Link, Outlet } from 'react-router-dom';
import Button from '../../components/Button';

const ProjectsView = () => {
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
    const { projects, loading } = useSelector((state) => state.projects);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProjects());
    }, [projects.length])

    const deletingProject = (id) => {
        dispatch(deleteProject(id))
    }

    // if (loading) {
    //     return <h1 className='app-margin'>Loading...</h1>
    // }

    return (
        <div className='app-margin'>
            <PageTitle text={'Projekty'} />
            <Link to="/projects/-add" className='link-button'>
                <Button text={'Dodaj projekt'} color={'#7bb140'} />
            </Link>
            {loading ? <h1 className='app-margin'>Loading...</h1> : <table>
                <TableHead headItems={titles} />
                <TableBody bodyItems={projects} url={'projects/'} onDelete={deletingProject} />
            </table>}
            <Outlet />
        </div>
    )
}

export default ProjectsView
