import React from 'react';
import { Link } from 'react-router-dom';

function ProjectsBtn() {
    
    return (
        <Link to="/projects">
        <button>
            View Projects
        </button>
        </Link>
    );
}

export default ProjectsBtn;
