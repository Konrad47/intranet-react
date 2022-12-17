import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link, useNavigate } from 'react-router-dom'
import { getProject } from './projectSlice';
import PageTitle from '../../components/PageTitle';
import Button from '../../components/Button';
const ProjectDetails = () => {
    const { projId } = useParams();
    const navigate = useNavigate();
    const { project, loading } = useSelector((state) => state.projects);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProject(projId));
    }, [])

    if (loading) {
        return <h1 className='app-margin'>Loading...</h1>
    }

    return (
        <div className='app-margin'>
            <PageTitle text={project.title !== undefined ? project.title : ''} />
            <h2>Autor: {project.author}</h2>
            <h2>Data utworzenia: {project.created_at}</h2>
            <Button onClick={() => navigate(-1)} text={'Wróć'} color={'#a80932'} />
        </div>
    )
}

export default ProjectDetails
