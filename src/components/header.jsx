import React from 'react';

import { Link } from 'react-router-dom';

// This renders the nav bar you see at the top of the page
export const Header = () => (
    <div>
        <header>
            <div className="nav">
                <h2 className="nav-logo"> Zoo Management System </h2>
                <a className="nav-item"> <Link to='/user'> Home </Link> </a>
                <a className="nav-item"> <Link to='/viewAnimals'> View Animals </Link> </a>
                <a className="nav-item"> <Link to='/addAnimal'> Add Animal </Link> </a>
                <a className="nav-item"> <Link to='/editAnimal'> Edit Animal </Link> </a>
                <a className="nav-item"> <Link to='/deleteAnimal'> Delete Animal </Link> </a>
                <a className="nav-item" href="/logout"> Logout </a>
            </div>
        </header>
    </div>
)
