"use client"
import React, { useState, useRef } from 'react'
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { motion, useInView } from "framer-motion";

const projectsData = [
    // {
    //     id: 1,
    //     title: "HTML Portfolio Website",
    //     description: "Portfolio Website build using HTML..",
    //     image: "/images/projects/a4.png",
    //     tag: ["All", "Web"],
    //     gitUrl: "/",
    //     previewUrl: "https://portfolio-ten-chi-72.vercel.app/",
    // },
    {
        id: 2,
        title: "Gym & Fitness Website",
        description: "Gym & fitness website created using vanila js.",
        image: "/images/projects/gym.jpg",
        tag: ["All", "Web","mobile"],
        gitUrl: "/",
        previewUrl: "https://gym-fitness-tau.vercel.app/",
    },
    {
        id: 3,
        title: "React Crypto Tracker Website",
        description: "Tracks crypto prices build using React..",
        image: "/images/projects/c4.webp",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "https://crypto-tracker-mz3tzv70c-lokendra-singhs-projects-15ab4698.vercel.app/",
    },
    {
        id: 4,
        title: "E-commerce Application",
        description: "E-commerce website name Shopping Cart build using React..",
        image: "/images/projects/e3.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "https://shopping-cart-gold-seven.vercel.app/",
    },
    {
        id: 5,
        title: "My Blog Site",
        description: "Daily news reading site by React..",
        image: "/images/projects/b1.png",
        tag: ["All", "Mobile"],
        gitUrl: "/",
        previewUrl: "https://myblogsite-one.vercel.app/",
    },
    // {
    //     id: 6,
    //     title: "Movies Hub",
    //     description: "Movie watching site using React..",
    //     image: "/images/projects/m1.png",
    //     tag: ["All", "Web"],
    //     gitUrl: "/",
    //     previewUrl: "https://movies-hub-eta-drab.vercel.app/",
    // },
    {
        id: 7,
        title: "NEXT.js Portfolio Website",
        description: "Portfolio Website build using NEXT.js..",
        image: "/images/projects/p1.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
];

const ProjectSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    return (
        <section ref={ref} id="projects">
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                My Projects
            </h2>
            <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
                <ProjectTag
                    onClick={handleTagChange}
                    name="All"
                    isSelected={tag === "All"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Web"
                    isSelected={tag === "Web"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Mobile"
                    isSelected={tag === "Mobile"}
                />
            </div>
            <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
                {filteredProjects.map((project, index) => (
                    <motion.li
                        key={index}
                        variants={cardVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{ duration: 0.3, delay: index * 0.4 }}
                    >
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            imgUrl={project.image}
                            gitUrl={project.gitUrl}
                            previewUrl={project.previewUrl}
                        />
                    </motion.li>
                ))}
            </ul>
        </section>
    )
}

export default ProjectSection;