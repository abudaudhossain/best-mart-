import React from 'react';
import { Cell, Legend, Pie, PieChart, Tooltip } from 'recharts';

const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const MyPieChart = () => {
    return (
        <div>
            <PieChart width={400} height={300} >
                <Legend align='left' verticalAlign="bottom" />
                <Pie
                    data={data}
                    cx={220}
                    cy={120}
                    innerRadius={80}
                    outerRadius={120}
                    fill="#8884d8"
                    paddingAngle={1}
                    dataKey="value"
                    label={data.name}
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
            </PieChart>
        </div>
    );
};

export default MyPieChart;