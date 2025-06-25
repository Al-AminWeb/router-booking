import React from 'react';
import {Link, useLoaderData, useParams, useNavigate} from "react-router";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAppointments } from '../utils/storage';
import { ToastContainer } from 'react-toastify';

const LawyerDetails = () => {
    const data = useLoaderData()
    const {id} = useParams()
    const navigate = useNavigate()
    const singleLawyer = data.find(lawyer => lawyer.id === parseInt(id))
    console.log(singleLawyer);
    const {img, name, speciality, experience, licenseNumber, availability, consultationFee} = singleLawyer || {};

    const handleBookAppointment = (e) => {
        e.preventDefault(); // Always prevent default first
        const appointments = getAppointments();
        const isAlreadyBooked = appointments.some(app => app.id === singleLawyer.id);
        
        if (isAlreadyBooked) {
            toast.error(`You have already booked an appointment with ${name}`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return;
        }

        toast.success(`Appointment booked successfully with ${name}`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            onClose: () => {
                navigate('/bookings', { state: { lawyer: singleLawyer } });
            }
        });
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="max-w-5xl mx-auto p-6">
                <div className="bg-white p-6 rounded-xl shadow mb-6 text-center">
                    <h1 className="text-2xl font-bold mb-2">Lawyer's Profile Details</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor amet ut.
                        Suscipit sed est fermentum magna. Quis vitae tempus facilisis turpis imperdiet
                        mattis donec dignissim volutpat.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow mb-6 flex flex-col md:flex-row gap-6 items-center">
                    <div className="w-40 h-40 rounded-xl overflow-hidden bg-gray-200">
                        <img src={img} alt={name} className="w-full h-full object-cover"/>
                    </div>

                    <div className="flex-1">
                        <div className="mb-2">
                            <span className="bg-blue-100 text-blue-700 text-xs font-medium px-2 py-1 rounded-full">
                                {experience}+ Years Experience
                            </span>
                        </div>
                        <h2 className="text-xl font-bold text-gray-800">{name}</h2>
                        <p className="text-sm text-gray-700">{speciality}</p>
                        <p className="text-sm text-gray-600 mt-1">
                            <span>ⓘ</span> License No: {licenseNumber}
                        </p>

                        <div className="mt-2">
                            <p className="text-sm font-medium text-gray-700 mb-1">Availability</p>
                            <div className="flex flex-wrap gap-2">
                                {availability?.map((day, index) => (
                                    <span key={index}
                                          className="bg-yellow-100 text-yellow-700 text-xs font-semibold px-2 py-1 rounded">
                                        {day}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <p className="mt-2 text-sm font-medium text-gray-700">
                            Consultation Fee: <span className="text-green-600 font-bold">Taka: {consultationFee}</span>
                        </p>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow">
                    <h3 className="text-lg font-semibold mb-4">Book an Appointment</h3>
                    <div className="flex items-center justify-between border-b pb-2 mb-4">
                        <span className="text-gray-700 font-medium">Availability</span>
                        <span className="bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full">
                            Lawyer Available Today
                        </span>
                    </div>
                    <p className="bg-yellow-50 text-yellow-700 text-xs p-3 rounded mb-4">
                        ⚠️ Due to high patient volume, we are currently accepting appointments for today only.
                        We appreciate your understanding and cooperation.
                    </p>
                    <button 
                        onClick={handleBookAppointment}
                        className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-full font-semibold block text-center">
                        Book Appointment Now
                    </button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default LawyerDetails;
