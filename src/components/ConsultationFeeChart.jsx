import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Cell
} from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink', '#8884d8', '#82ca9d'];

const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
};

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const ConsultationFeeChart = ({ appointments }) => {
    
    const chartData = appointments.map(appointment => ({
        name: appointment.name,
        fee: parseInt(appointment.consultationFee) // Ensure fee is a number
    }));

    return (
        <div className="bg-white p-6 rounded-xl shadow mb-6">
            <h2 className="text-xl font-semibold mb-4">Lawyer Consultation Fees</h2>
            <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={chartData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 60,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis 
                            dataKey="name" 
                            angle={-45}
                            textAnchor="end"
                            height={60}
                            interval={0}
                        />
                        <YAxis 
                            label={{ value: 'Consultation Fee (Taka)', angle: -90, position: 'insideLeft' }}
                        />
                        <Tooltip 
                            formatter={(value) => [`${value} Taka`, 'Consultation Fee']}
                            labelStyle={{ color: '#000' }}
                        />
                        <Bar 
                            dataKey="fee" 
                            shape={<TriangleBar />}
                            label={{ position: 'top' }}
                        >
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
                <div className="flex justify-center mt-4 gap-4 flex-wrap">
                    {chartData.map((lawyer, index) => (
                        <div key={index} className="flex items-center">
                            <div 
                                className="w-4 h-4 rounded-full mr-2" 
                                style={{ backgroundColor: colors[index % colors.length] }}
                            />
                            <span className="text-sm">{lawyer.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ConsultationFeeChart; 