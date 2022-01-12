import React from "react";
import Button from '@mui/material/Button';
import Link from "@mui/material/Link";

const User = ({ user }) => {
    return (
        <div className="popup">
            <div className="header" sx={{ color: 'text.primary' }}>
                <img src={user.profile_image.small} alt='profile pic' />
                <div className="instagram_handle">
                    <span className="name">{user.name}</span>
                    <span className="handler">{`@${user.username}`}</span></div>
            </div>
            <Button className="button" variant="outlined">
                <Link target="_blank" href={user.links.html} underline="none">
                    View profile
                </Link>
            </Button>
        </div>
    )
}

export default User;