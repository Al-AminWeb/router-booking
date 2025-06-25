import React from 'react';
import CountUp from "react-countup";
import { useInView } from 'react-intersection-observer';
import lawyer from '../assets/success-doctor.png'
import star from '../assets/success-review.png'
import success from '../assets/success-patients.png'
import people from '../assets/success-staffs.png'

const data = [
    { img: lawyer, end: 199, label: 'Total Lawyer' },
    { img: star, end: 467, label: 'Total Review' },
    { img: success, end: 1900, label: 'Success' },
    { img: people, end: 300, label: 'Total Staff' },
];

const AnimatedCard = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    return (
        <div className="flex flex-row gap-4" ref={ref}>
            {data.map((item, idx) => (
                <div key={idx} className="box-border border border-black/15 rounded-xl bg-black/5 w-[302px] h-[257px] p-10">
                    <img src={item.img} alt="" />
                    <h1 className="text-[rgb(15,15,15)] font-mulish text-4xl font-extrabold leading-[60px] tracking-normal text-left">
                        <CountUp end={inView ? item.end : 0} duration={3} />
                        +
                    </h1>
                    <p className="text-black/60 font-mulish text-base font-medium leading-[25px] tracking-normal text-left">
                        {item.label}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default AnimatedCard;
