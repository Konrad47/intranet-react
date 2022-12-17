import React from 'react'
import Button from './Button'
import PageTitle from './PageTitle'
const AddEditForm = ({ text, data1, data2, setData1, setData2, save }) => {
    return (
        <>
            <PageTitle text={text} />
            <form>
                <div className='form-control'>
                    <label>Tytuł</label>
                    <input type="text" value={data1} onChange={setData1} />
                </div>
                <div className='form-control'>
                    <label>Autor</label>
                    <input type="text" value={data2} onChange={setData2} />
                </div>
            </form>
            <Button onClick={save} text={'Zapisz'} color={'#7bb140'} />
        </>
    )
}

export default AddEditForm
