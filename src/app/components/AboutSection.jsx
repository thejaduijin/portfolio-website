"use client"
import React, { useState, useTransition } from 'react'
import Image from 'next/image'
import TabButton from './TabButton';


const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Redux</li>
                <li>Next.js</li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>Masters of Computer Application(MCA) from AKTU Lacknow.</li>
                <li>Bachelor of Computer Application(BCA) from DBRAU Agra.</li>
                <li>Intermediate from UP Board.</li>
                <li>High School from UP Board.</li>
            </ul>
        ),
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul className="list-disc pl-2">
                <li>Casino Games Development</li>
                <li>Web Development</li>
            </ul>
        ),
    },
];
function AboutSection() {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        })
    }

    return (
        <section className='text-white' id="about">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image
                    src="/images/ab1.png"
                    width={500}
                    height={500}
                    alt='image'
                />
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold mb-4'>
                        About Me
                    </h2>
                    <p className='text-base lg:text-lg'>
                        I&apos;m a skilled and dedicated web developer. My expertise are responsive designing, coding, optimizing websites, casino games and web applications is at the forefront of creating exceptional online experiences.
                        A quick learner and always looking forward to expand my knowledge and skill set.
                    </p>
                    <div className='flex flex-row justify-start mt-8'>
                        <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
                            Skills
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
                            Education
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange("experience")} active={tab === "experience"}>
                            Experience
                        </TabButton>
                    </div>
                    <div className='mt-8'>
                        {TAB_DATA.find((t)=>t.id===tab).content}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection