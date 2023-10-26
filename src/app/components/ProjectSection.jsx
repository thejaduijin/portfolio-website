import React from 'react'
import ProjectCard from './ProjectCard';

const projectsData = [
    {
        id: 1,
        title: "HTML Portfolio Website",
        description: "Portfolio Website build using HTML..",
        image: "/images/projects/a4.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 2,
        title: "React Crypto Tracker Website",
        description: "Tracks crypto prices build using React..",
        image: "/images/projects/c4.webp",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 3,
        title: "E-commerce Application",
        description: "E-commerce website name Shopping Cart build using React..",
        image: "/images/projects/e3.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 4,
        title: "My Blog Site",
        description: "Daily news reading site by React..",
        image: "/images/projects/b1.png",
        tag: ["All", "Mobile"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 5,
        title: "Movies Hub",
        description: "Movie watching site using React..",
        image: "/images/projects/m1.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 6,
        title: "NEXT.js Portfolio Website",
        description: "Portfolio Website build using NEXT.js..",
        image:"/images/projects/p1.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
];

const ProjectSection = () => {
    return (
        <>
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                My Projects
            </h2>
            <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
                {
                    projectsData.map((project) => (
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            imgUrl={project.image}
                            tag={project}
                            gitUrl={project.gitUrl}
                            previewUrl={project.previewUrl}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default ProjectSection;