import React from 'react'
import './Contact.scss'
import PlusIcon from '../../components/Svgs/PlusIcon';
import ContactsCard from '../../components/ContactsCard/ContactsCard';
import { card } from '../../data';
import HamburgerIcon from '../../components/Svgs/HamburgerIcon';

const Contact = () => {

  

  return (
    <div className='background-pale'>
      <header className='header-main'>
        <div className='d-flex align-items-center gap-2'>
          <div className='hamburger d-block d-md-none' data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
            <HamburgerIcon></HamburgerIcon>
          </div>
          <h1 className='fs-20 fw-semibold'>Contacts</h1>
        </div>

        <div>
          <button className="btn btn-create d-flex align-items-center w-100 gap-md-2 gap-1" type="button">
            <PlusIcon></PlusIcon>
            <p className='fw-semibold fs-16'>Create</p>
          </button>
        </div>
      </header>

      <section className='contacts-list-main padding-page-wrapper'>
        <div className='row'>
          {card && card.map((item) => {
            return <div className='col-xl-3 col-lg-4 col-md-6 mb-4' key={item.id}>
              <ContactsCard logo={item.logo} name={item.name} title={item.title} contacts={item.contacts} column={item.column} campaigns={item.campaigns} updatedBy={item.updatedBy} updatedOn={item.updatedOn}></ContactsCard>
            </div>
          })}

        </div>

      </section>
    </div>
  )
}

export default Contact
