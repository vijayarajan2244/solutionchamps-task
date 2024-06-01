import React from 'react'
import './Sidebar.scss'
import { Link, NavLink } from 'react-router-dom'
import siteLogo from '../../assets/logo.png';
import Profile from '../../assets/profile.png';
import Plus from '../../assets/plus.svg';
import Search from '../../assets/search.png';
import DashboardIcon from '../Svgs/DashboardIcon';
import ContactsIcon from '../Svgs/ContactsIcon';
import CampaignsIcon from '../Svgs/CampaignsIcon';
import TemplatesIcon from '../Svgs/TemplatesIcon';
import ClientsIcon from '../Svgs/ClientsIcon';
import SettingsIcon from '../Svgs/SettingsIcon';

const Sidebar = () => {


  return (
    <>
      

      <div className="offcanvas offcanvas-start sidebar-canvas" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-body">
          <div className={`sidebar-main`}>
            <div className='padding-wrapper'>
              <div className='site-logo'>
                <Link to={'/'} className='img-contain px-3'>
                  <img src={siteLogo} alt="Logo" />
                </Link>
              </div>

              <div className="dropdown profile-dropdown mt-4">
                <button className="btn btn-profile d-flex align-items-center w-100 gap-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src={Profile} alt="Profile" className='rounded-circle' />
                  <p className='fw-medium fs-16'>Abishek</p>
                </button>
                <ul className="dropdown-menu">
                  <li>

                  </li>
                </ul>
              </div>

              <div className="dropdown mt-2 pt-1">
                <button className="btn btn-create d-flex align-items-center w-100 gap-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src={Plus} alt="Plus" className='' />
                  <p className='fw-medium fs-16'>Create</p>
                </button>
                <ul className="dropdown-menu">
                  <li>

                  </li>
                </ul>
              </div>

              <div className='mt-2 pt-1' data-bs-dismiss="offcanvas" aria-label="Close">
                <Link to={'/search'} className='d-block'>
                  <div className="input-group  navbar-search gap-3">
                    <span className="input-group-text" id="basic-addon1"><img src={Search} alt="Plus" width={17} height={17} /></span>
                    <input type="text" className="form-control" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1" readOnly />
                  </div>
                </Link>
              </div>
            </div>

            <ul className='navigation-ul mt-2'>
              <li>
                <NavLink to={'/dashboard'}>
                  <DashboardIcon></DashboardIcon>
                  <p>Dashboard</p>
                </NavLink>
              </li>
              <li data-bs-dismiss="offcanvas" aria-label="Close">
                <NavLink to={'/contacts'}>
                  <ContactsIcon></ContactsIcon>
                  <p>Contacts</p>
                </NavLink>
              </li>
              <li>
                <NavLink to={'/campaigns'}>
                  <CampaignsIcon></CampaignsIcon>
                  <p>Campaigns</p>
                </NavLink>
              </li>
              <li>
                <NavLink to={'/templates'}>
                  <TemplatesIcon></TemplatesIcon>
                  <p>Templates</p>
                </NavLink>
              </li>
              <li>
                <NavLink to={'/clients'}>
                  <ClientsIcon></ClientsIcon>
                  <p>Clients</p>
                </NavLink>
              </li>
              <li>
                <NavLink to={'/settings'}>
                  <SettingsIcon></SettingsIcon>
                  <p>Settings</p>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>

  )
}

export default Sidebar
