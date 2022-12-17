import React from 'react'
import PropTypes from "prop-types";
import { BsEye } from 'react-icons/bs'
import { BsPen } from 'react-icons/bs'
import { BsTrash } from 'react-icons/bs'
import { Link } from "react-router-dom";

const TableBody = ({ bodyItems, onDelete, url, showElements = true }) => {
    return (
        <>
            <tbody>
                {bodyItems.map((item, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.title}</td>
                        <td>{item.author}</td>
                        <td>{item.created_at}</td>
                        <td>
                            {showElements && <Link to={`/${url}${item.id}`} className='details-icon'><BsEye /></Link>}
                            <Link to={`/${url}-edit/${item.id}`} state={{ bodyItems: bodyItems }} className='details-icon'><BsPen /></Link>
                            <BsTrash onClick={() => onDelete(item.id)} className='details-icon' />
                        </td>
                    </tr>
                ))}
            </tbody>
        </>
    )
}

TableBody.propTypes = {
    bodyItems: PropTypes.array.isRequired,
}

export default TableBody
