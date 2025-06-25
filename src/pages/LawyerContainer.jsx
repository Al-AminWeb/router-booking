import React, { useEffect, useState } from 'react';
import LawyerCard from "../components/LawyerCard.jsx";

const LawyerContainer = ({ lawyers }) => {
    const [displayLawyers, setDisplayLawyers] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        if (showAll) {
            setDisplayLawyers(lawyers);
        } else {
            setDisplayLawyers(lawyers.slice(0, 6));
        }
    }, [lawyers, showAll]);

    return (
        <>
            <h1 className='text-[rgb(15,15,15)] text-[40px] font-extrabold text-center'>Our Best Lawyers</h1>
            <p className='text-[rgba(15,15,15,0.8)] text-[16px] font-normal text-center py-5'>
                Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
            </p>

            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3 mb-8'>
                {
                    displayLawyers.map(lawyer => <LawyerCard key={lawyer.id} lawyer={lawyer} />)
                }
            </div>

            <button
                onClick={() => {
                    setShowAll(prev => !prev);
                    if (showAll) window.scrollTo(0, 400);
                }}
                className='btn flex justify-center items-center mx-auto w-[220px] rounded-full bg-[#0ea106] text-white mb-10'
            >
                {showAll ? 'Show Less' : 'Show All Lawyer'}
            </button>
        </>
    );
};

export default LawyerContainer;
