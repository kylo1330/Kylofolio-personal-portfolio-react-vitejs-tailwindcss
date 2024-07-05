import React from 'react'
import Card from './Card';
import { Code,Link } from './Icons';
import CardCover from './CardCover';
const Project = ({ project: { img, demo, code, description, style = { shadow: "shadow-gray-500", cover: "from-gray-500" } } }) => {
    return (
        <Card style={style} >

            <div className="group relative rounded-md cursor-pointer">
                <img src={img} alt="Projec-Image" width="auto" height="auto" loading='lazy' title="Project" className='rounded-t-md ' />
                <CardCover text={description} style={style} />
            </div>
            <div className='flex justify-center items-center rounded-b-md'>
                <ProjectsLink name="Code" style={"rounded-bl-md " + style.cover} link={code} />
             
            </div>
        </Card>
    )
}

export default Project;


const ProjectsLink = ({ name, link, style }) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className={`block w-full py-3 text-center text-xl bg-black hover:bg-gradient-to-t cursor-pointer ${style} to-black duration-500 flex justify-center items-center text-white rounded-bl-md`}
        >
            {name === "Code" ? <Code /> : <Link />} <span className="pl-2">{name}</span>
        </a>
    );
};


