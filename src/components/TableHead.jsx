import React, { useState } from 'react'
import PropTypes from "prop-types";

const TableHead = ({ headItems }) => {
    return (
        <>
            <thead>
                <tr>
                    {headItems.map((item) => (
                        <th key={item.id}>{item.title}</th>
                    ))}
                    <th className='icons'></th>
                </tr>
            </thead>
        </>
    )
}

TableHead.propTypes = {
    headItems: PropTypes.array
}

export default TableHead
