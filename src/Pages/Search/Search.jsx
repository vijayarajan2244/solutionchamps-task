import React, { useEffect, useState } from 'react'
import './Search.scss'
import SearchIcon from '../../components/Svgs/SearchIcon'
import SearchContactCard from '../../components/SearchContactCard/SearchContactCard'
import { card } from '../../data';
import HamburgerIcon from '../../components/Svgs/HamburgerIcon';

const Search = () => {

    const [filterData, setFilterData] = useState('');
    const [data, setData] = useState([]);

    useEffect(() => {
        setFilterData(card);
    }, [])

    const handleSearch = (event) => {

        const finalData = filterData.filter((item) => {
            return item.title.toLowerCase().includes(event.target.value)
        })
        event.target.value.trim().length > 0 ? setData(finalData) : setData([])

    }


    return (
        <div className='background-pale'>
            <header className='header-main'>
                <div className='d-flex align-items-center gap-2'>
                    <div className='hamburger d-block d-md-none' data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                        <HamburgerIcon></HamburgerIcon>
                    </div>
                    <h1 className='fs-20 fw-semibold'>Search</h1>
                </div>
            </header>

            <section className='search-main'>
                <div className='container-fluid'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-9'>
                            <div className='searchbar-sticky'>
                                <div className="input-group search-bar gap-3">
                                    <span className="input-group-text px-3" id="Search Contacts1">
                                        <SearchIcon></SearchIcon>
                                    </span>
                                    <input type="text" className="form-control text-center" placeholder="Search Contact List" aria-label="Search Contacts" aria-describedby="Search Contacts1" onChange={handleSearch} />
                                </div>
                            </div>


                            <div className='search-result'>
                                {data.map((item) => {
                                    return <SearchContactCard logo={item.logo} name={item.name} title={item.title} key={item.id}></SearchContactCard>
                                })}

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Search
