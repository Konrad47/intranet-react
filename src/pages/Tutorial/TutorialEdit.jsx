import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, useLocation } from 'react-router-dom'
import { fetchTutorial, editTutorial } from './tutorials-api';
import AddEditForm from '../../components/AddEditForm';
const TutorialEdit = () => {
    const { tutId } = useParams();
    const [tutorial, setTutorial] = useState();
    const navigate = useNavigate();

    const { state } = useLocation();
    // console.log(state.bodyItems)

    useEffect(() => {
        const getTutorial = async () => {
            const tutorialFromServer = await fetchTutorial(tutId);
            setTutorial(tutorialFromServer);
        };
        getTutorial();
    }, [tutId])
    const editingTutorial = async () => {
        const edtTutorial = {
            ...tutorial,
            title: tutorial.title,
            author: tutorial.author
        };
        await editTutorial(tutId, edtTutorial);
        navigate(0)
    }
    return (
        <div className='app-margin'>
            <AddEditForm text={`Edytuj Poradnik: ${tutId}`} data1={tutorial?.title || ''} data2={tutorial?.author || ''} setData1={(e) => setTutorial({ ...tutorial, title: e.target.value })} setData2={(e) => setTutorial({ ...tutorial, author: e.target.value })} save={editingTutorial} />
        </div>
    )
}

export default TutorialEdit
