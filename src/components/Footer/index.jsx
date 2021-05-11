import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer'>
            <Link
                href='mailto:yigiterenozgur@outlook.com'            
                class='footer-link'
            >
                <i class='fas fa-envelope'></i>
            </Link>
            <Link 
                href='linkedin.com/in/yigit-eren-ozgur/'
                class='footer-link'
            >
                <i className='fas fa-linkedin-in'></i>
            </Link>
            <Link
                href='github.com/erenozgur98'
                className='footer-link'
            >
                <i class='fab fa-github'></i>
            </Link>
        </div>
    )
}

export default Footer
