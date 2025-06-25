import React from 'react';
import {Link} from "react-router";

const LawyerCard = ({lawyer}) => {
    const {name,img,speciality,experience,licenseNumber,id} = lawyer;
    return (
        <div className="flex items-center gap-4 p-4 border rounded-xl shadow-sm max-w-[500px] bg-white">
            {/* Image */}
            <div className="w-24 h-24 rounded-lg bg-gray-200 overflow-hidden">
                <img
                    src={lawyer.img}
                    alt={lawyer.name}
                    className="w-full h-full object-cover"
                />
            </div>


            <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                    <span className="bg-green-100 text-green-700 text-sm font-medium px-2 py-[2px] rounded-full">
                        Available
                    </span>
                    <span className="bg-blue-100 text-blue-700 text-sm font-medium px-2 py-[2px] rounded-full">
                        {lawyer.experience}+ Years Experience
                    </span>
                </div>
                <h3 className="text-lg font-bold text-gray-800">{lawyer.name}</h3>
                <p className="text-gray-600 text-sm">{lawyer.speciality}</p>
                <p className="text-gray-500 text-sm flex items-center gap-1">
                    <span>®</span> License No: {lawyer.licenseNumber}
                </p>
                <div className="mt-3">
                    <Link to={`/lawyer-details/${id}`}>
                        <button className="btn btn-outline btn-sm text-blue-600 border-blue-200 hover:border-blue-400">
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LawyerCard;
