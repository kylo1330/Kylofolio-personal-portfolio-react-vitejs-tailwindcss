import React from 'react';
import SectionHeading from './SectionHeading';

const Education = () => {
    const educationData = [
        {
            type: "Internship",
            year: "2023-2024",
            title: "Python FullStack Developer",
            place: "MashupStack, Sreekarym, Trivandrum",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDXASe_b6Gv7axZG6yZO-HnIKNhh754wwDYg&s" // Example logo path
        },
        {
            type: "Undergraduate Course",
            year: "2019-2023",
            title: "Btech in Computer Science",
            place: "St Thomas Institute For Science and Technology, Kataikonam, Trivandrum",
            score: "(6.9 CGPA)", // Example score
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCtMbP15i86DhLwDAsdxRuZBSM4JI_N9qNkA&s" // Example logo path
        },
        {
            type: "Higher Secondary Education",
            year: "2017-2019",
            title: "St Johns HSS",
            place: "Nalanchira, Trivandrum",
            score: "(69%)", // Example percentage
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4nx2oOLUL2EyVBNF7_7nMC1EKmcXswJHvaA&s" // Example logo path
        },
        {
            type: "High School Education",
            year: "2017",
            title: "St Marrys HSS",
            place: "Pattom, Trivandrum",
            score: "(82%)", // Example percentage
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5bhYo9GjFxw6nKV0NRbz4zEFTVBI97bfLGg&s" 
        }
    ];

    return (
        <div id="education-section" className='pt-10 h-full min-h-screen w-full flex flex-col items-center bg-gradient-to-b to-gray-800 from-black'>
            <div className='section'>
                <SectionHeading heading="Education" secondHeading="My Educational Background" />
                <div className='flex flex-wrap justify-center items-center gap-8'>
                    {educationData.map((data, idx) => (
                        <EducationCard key={idx} data={data} />
                    ))}
                </div>
            </div>
        </div>
    );
}

const EducationCard = ({ data }) => {
    return (
        <div className='w-full max-w-sm bg-gradient-to-l from-gray-900 via-gray-870 to-black text-white rounded-lg shadow-lg shadow-[#9597c8] p-6 flex flex-col transition duration-300 ease-in-out transform hover:shadow-md hover:shadow-[#9597c8] hover:scale-105'>
            <div className='flex justify-between items-start mb-4'>
                <h3 className='text-lg font-bold'>{data.type}</h3>
                <span className='text-sm font-semibold'>{data.year}</span>
            </div>
            <div className='flex items-center mb-2'>
                <span className='text-base font-bold'>{data.title}</span>
                {data.score && <span className='ml-2 text-sm font-semibold'>{data.score}</span>}
            </div>
            <div className='mb-2'>
                <span className='text-base font-medium'>{data.place}</span>
            </div>
            {data.logo && (
                <div className='mt-4 flex justify-end'>
                    <img 
                        src={data.logo} 
                        alt={`${data.place} logo`} 
                        className='w-20 h-20 object-contain rounded-full border-4 border-gray-900'
                    />
                </div>
            )}
        </div>
    );
}

export default Education;

