import React from 'react';
import {Link} from "react-router-dom";
import { styled } from '@mui/material/styles';

const SimpleLink = styled(Link)(({isUnderline}) => ({
    color: '#364152',
    textDecoration: isUnderline ? 'underline': ''
}));

const CustomLink = ({url, title, isUnderline = true}) => {
    return (
        <SimpleLink to={`/users/${url}`} isUnderline={isUnderline}>{title}</SimpleLink>
    );
};

export default CustomLink;
