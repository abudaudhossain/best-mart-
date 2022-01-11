import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Profile = () => {
    const { user, logOut } = useAuth().firebaseInfo;
    return (
        <Dropdown>
            <Dropdown.Toggle style={{ background: "none", border: 'none', padding: 0, }} id="dropdown-basic">
                <span className="user-img" >
                    <span >{user.displayName?.slice(0, 1)}</span>
                </span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item >My profile</Dropdown.Item>
                <Dropdown.Item as={Link} to="/myOrder">My Order</Dropdown.Item>
                <Dropdown.Item onClick={logOut}>Logout</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default Profile;