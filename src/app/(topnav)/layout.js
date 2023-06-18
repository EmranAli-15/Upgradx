import React from 'react';
import NavList from './NavList/NavList';

const layout = ({ children }) => {
    return (
        <div className='max-w-7xl mx-auto'>
            <NavList></NavList>
            {children}
            <footer>Amio ache tomar sathe</footer>
        </div>
    );
};

export default layout;