import React from 'react';

//import image to use as profile picture
import profilePicture from '../Images/profile-picture.jpg';

//Profile function to display profile content
const Profile = () => {
    return (
        <div className='Profile'>
            {/* profile picture */}
            <div className='user-img text-center'><img role='presentation' className='rounded-circle' src={profilePicture} width='auto' height='200' alt=''></img></div>
            {/* my name */}
            <p className='text-center name'>Thandolwethu Njili</p>
            {/* occupation */}
            <p className='text-center label'>Student Web-Developer</p>
            {/* line divider */}
            <div className='divider' />
            {/* contact list */}
            <ul className='list-unstyled contact-links text-center'>
                <li><i className='fa fa-lg fa-location-arrow' />Cape Town, Western Cape, South Africa</li>
                <li><i className='fa fa-lg fa-envelope' /><a href={'mailto:thandolnjili@gmail.com'}>thandolnjili@gmail.com</a></li>
            </ul>
            <div className='divider' />
            {/* profile links */}
            <ul className='profile-links list-inline text-center'>
                <li><a className='fa fa-linkedin fa-2x' target='blank' href='https://www.linkedin.com/in/thandolwethu-njili-bb211562/' /></li>
                <li><a className='fa fa-2x fa-github' target='blank' href='https://github.com/thandolnjili' /></li>
            </ul>
        </div>
    )
}

//export to allow use on other components
export default Profile;