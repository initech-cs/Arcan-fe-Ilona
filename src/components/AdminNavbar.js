import React from 'react'
import { Link } from 'react-router-dom'

function AdminNavbar() {
    return (
        <div className="adminNavMain">
            <div>
                <img src="/profileLogoSample.jpg" className="adminNavProfileImg" width={80} />
                <h4>Admin</h4>
            </div>
            <ul className="adminNavList">
                <li><Link to="/admin/news">News</Link></li>
                <li><Link to="/admin/events">Events</Link></li>
                <li><Link to="/admin/media">Media</Link></li>
            </ul>
        </div>
    )
}

export default AdminNavbar
