import React from 'react'
import '../ContactsCard/ContactsCard.scss'

const SearchContactCard = ({logo, name, title,}) => {
    return (
        <div className='contacts-card search-card-box'>
            <div className='d-flex align-items-center gap-2'>
                <div className='contacts-logo img-contain'>
                    <img src={logo} alt={name} />
                </div>
                <p className='fw-medium fs-14 name'>{name}</p>
            </div>
            <p className='fs-16 fw-semibold mt-2'>{title}</p>
        </div>
    )
}

export default SearchContactCard
