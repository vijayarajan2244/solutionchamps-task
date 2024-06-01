import React from 'react'
import './ContactsCard.scss'
import ThreedotIcon from '../Svgs/ThreedotIcon';
import PersonIcon from '../Svgs/PersonIcon';
import ColumnIcon from '../Svgs/ColumnIcon';
import MicIcon from '../Svgs/MicIcon';

const ContactsCard = ({logo, name, title, contacts, column, campaigns, updatedBy, updatedOn}) => {
    return (
        <div className='contacts-card'>
            <div className="card text-center">
                <div className="card-header">
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className='d-flex align-items-center gap-2'>
                            <div className='contacts-logo img-contain'>
                                <img src={logo} alt={name} />
                            </div>
                            <p className='fw-medium fs-14 name'>{name}</p>
                        </div>
                        <ThreedotIcon></ThreedotIcon>
                    </div>
                </div>
                <div className="card-body text-start">
                    <div>
                        <p className='fs-16 fw-semibold title'>{title}</p>
                        <ul className='card-list-ul mt-3'>
                            <li>
                                <PersonIcon></PersonIcon>
                                <p className='fs-14'>{contacts} Contacts</p>
                            </li>
                            <li>
                                <ColumnIcon></ColumnIcon>
                                <p className='fs-14'>{column} Columns</p>
                            </li>
                            <li>
                                <MicIcon></MicIcon>
                                <p className='fs-14'>Used in {campaigns} Campaigns</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="card-footer text-body-secondary text-start">
                    <p className='fs-12 mb-1'>Updated by: {updatedBy}</p>
                    <p className='fs-12'>Updated on: {updatedOn}</p>
                </div>
            </div>
        </div>
    )
}

export default ContactsCard
