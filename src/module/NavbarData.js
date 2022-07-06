import React from "react";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

export const links = [
    {
        id: 1,
        url: '/',
        text: 'home'
    }, 
    {
        id: 2,
        url: "/about",
        text: 'about'
    },
     {
        id: 3,
        url: "/projects",
        text: 'project'
    },
     {
        id: 4,
        url: "/contact",
        text: 'contact'
    }
];

export const socialMedia = [
    {
        id: 1,
        url: 'https://www.linkedin.com/in/juliolopezdev/',
        icon: <FaLinkedin/>

    },{
        id: 1,
        url: 'https://www.facebook.com/julioclopezDev/',
        icon: <FaFacebook/>
    },{
        id: 1,
        url: 'https://github.com/JulioCLop',
        icon: <FaGithub/>
    }
]
