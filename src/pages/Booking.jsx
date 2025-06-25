import React, { useState } from 'react';
import {Link, useLocation, useNavigate} from "react-router";
import { getAppointments, saveAppointment, removeAppointment } from '../utils/storage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ConsultationFeeChart from '../components/ConsultationFeeChart';

const Booking = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [appointments, setAppointments] = useState(getAppointments());

    React.useEffect(() => {
        if (location.state?.lawyer) {
            const isAlreadyBooked = appointments.some(app => app.id === location.state.lawyer.id);
            
            if (isAlreadyBooked) {
                navigate('/bookings');
                return;
            }

            const updatedAppointments = saveAppointment(location.state.lawyer);
            setAppointments(updatedAppointments);
        }
    }, [location.state, appointments, navigate]);

    const handleCancelAppointment = (appointmentId) => {
        const appointmentToCancel = appointments.find(app => app.appointmentId === appointmentId);
        const updatedAppointments = removeAppointment(appointmentId);
        setAppointments(updatedAppointments);

        toast.info(`Appointment cancelled for ${appointmentToCancel.name}`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    };

    return (
        <div className="max-w-3xl mx-auto px-4 py-12">
            <ToastContainer />

            {appointments.length > 0 && (
                <>
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold text-center mb-2">My Appointments</h1>
                        <p className="text-center text-sm text-gray-500 mb-6">
                            Here are your booked appointments with our expert lawyers.
                        </p>
                    </div>
                    <ConsultationFeeChart appointments={appointments} />
                </>
            )}

            {appointments.length === 0 ? (
                <div className="text-center">
                    <div className="flex flex-col items-center justify-center  bg-white text-center py-4">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            You Have not <span className="font-bold">Booked</span> any appointment yet
                        </h1>
                        <p className="text-gray-500 mb-6 max-w-md">
                            Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience.
                        </p>
                        <Link to='/'>
                            < button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded shadow">
                                Book an Appointment
                            </button>
                        </Link>
                    </div>
                </div>
            ) : (
                appointments.map((lawyer) => (
                    <div key={lawyer.appointmentId} className="bg-white border rounded-xl p-6 shadow-sm mb-4">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="font-semibold text-lg text-gray-800">{lawyer.name}</h3>
                                <p className="text-sm text-gray-500">{lawyer.speciality}</p>
                                <p className="text-sm text-gray-600 mt-1">
                                    <span>ⓘ</span> License No: {lawyer.licenseNumber}
                                </p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm text-gray-700">Appointment Fee: 
                                    <span className="font-semibold"> {lawyer.consultationFee} Taka</span>
                                </p>
                                <p className="text-xs text-gray-500 mt-1">
                                    Booked on: {lawyer.appointmentDate}
                                </p>
                            </div>
                        </div>

                        <div className="border-t pt-4">
                            <button
                                onClick={() => handleCancelAppointment(lawyer.appointmentId)}
                                className="w-full border border-red-500 text-red-500 rounded-full py-2 text-sm font-medium hover:bg-red-50 transition">
                                Cancel Appointment
                            </button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default Booking;
