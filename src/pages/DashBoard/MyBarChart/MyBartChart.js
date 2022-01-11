import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';


const data = [
    {
        name: 'January',
        Laptop: 4000,
        Mobile: 2400,
        Camera: 2400,
        Others: 2340,
    },
    {
        name: 'February',
        Laptop: 3000,
        Mobile: 1398,
        Camera: 2210,
        Others: 2340,
    },
    {
        name: 'March',
        Laptop: 2000,
        Mobile: 2800,
        Camera: 2290,
        Others: 2340,
    },
    {
        name: 'April',
        Laptop: 2780,
        Mobile: 3908,
        Camera: 2000,
        Others: 2340,
    },
    {
        name: 'May',
        Laptop: 1890,
        Mobile: 4800,
        Camera: 2181,
        Others: 2340,
    },
    {
        name: 'June',
        Laptop: 2390,
        Mobile: 3800,
        Camera: 2500,
        Others: 2340,
    },
    
];

const MyBartChart = () => {
    return (
        <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Mobile" fill="#00B377" />
            <Bar dataKey="Camera" fill="#146EFF" />
            <Bar dataKey="Laptop" fill="#F56600" />
            <Bar dataKey="Others" fill="#0096DB" />
        </BarChart>
    );
};

export default MyBartChart;