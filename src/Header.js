import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBackIos';
import {Link, useHistory} from 'react-router-dom';

function Header({ backButton }) {
    const history = useHistory();
    return (
        <div className="header">
            {backButton ? (
                <IconButton onClick={() => history.replace(backButton)}>
                    <ArrowBackIcon fontSize="large" className="header_icon"/>
                </IconButton>
            ) : (
                <IconButton>
                    <PersonIcon className="header_icon" fontSize="large"/>
                </IconButton>
            )}
            <Link to="/">
                <img
                    className="header_logo"
                    src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png" alt="logo"
                />
            </Link>
            <Link to="/chat">
                <IconButton>
                    <QuestionAnswerIcon className="header_icon" fontSize="large"/>
                </IconButton>
            </Link>
        </div>
    )
}

export default Header;