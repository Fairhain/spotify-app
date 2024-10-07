import React from 'react';
import './navbar.css'

const pages = [
    {name: 'Home', path: '/'},
    {name: 'Playlists', path: '/playlists'}
]

const NavBar: React.FC = () => {
    const changePage = (path: string) => {
        const page = `http://localhost:5173${path}`
        window.location.href = page;
    };
    
    return (
        <div className='nav-bar'>
            <ul className='nav-list'>
                {
                    pages.map((item) => (
                        <li className="list-item" key={item.path}>
                            <div onClick={() => changePage(item.path)}>{item.name}</div>
                        </li>   
                    ))
                }
            </ul>
        </div>
    );
}
export default NavBar;