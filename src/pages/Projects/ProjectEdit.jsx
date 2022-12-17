import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { editProject, getProject, updateProjectAuthor, updateProjectTitle } from './projectSlice';
import AddEditForm from '../../components/AddEditForm';
const ProjectEdit = () => {
    const { projId } = useParams();
    const { project, loading } = useSelector((state) => state.projects);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProject(projId));
    }, [projId])

    const handleTitle = (e) => {
        dispatch(updateProjectTitle(e.target.value))
    }

    const handleAuthor = (e) => {
        dispatch(updateProjectAuthor(e.target.value))
    }

    const editingProject = () => {
        dispatch(editProject(project));
    }

    if (loading) {
        return <h1 className='app-margin'>Loading...</h1>
    }
    return (
        <>
            <AddEditForm text={`Edytuj Projekt: ${projId}`} data1={project?.title || ''} data2={project?.author || ''} setData1={handleTitle} setData2={handleAuthor} save={editingProject} />
        </>
    )
}

export default ProjectEdit
