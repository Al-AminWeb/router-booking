
export const getAppointments = () => {
    const savedAppointments = localStorage.getItem('appointments');
    return savedAppointments ? JSON.parse(savedAppointments) : [];
};

export const saveAppointment = (appointment) => {
    const appointments = getAppointments();
    const isAlreadyBooked = appointments.some(app => app.id === appointment.id);
    
    if (!isAlreadyBooked) {
        const newAppointment = {
            ...appointment,
            appointmentId: Date.now(),
            appointmentDate: new Date().toLocaleDateString()
        };
        const updatedAppointments = [...appointments, newAppointment];
        localStorage.setItem('appointments', JSON.stringify(updatedAppointments));
        return updatedAppointments;
    }
    return appointments;
};

export const removeAppointment = (appointmentId) => {
    const appointments = getAppointments();
    const updatedAppointments = appointments.filter(app => app.appointmentId !== appointmentId);
    localStorage.setItem('appointments', JSON.stringify(updatedAppointments));
    return updatedAppointments;
}; 