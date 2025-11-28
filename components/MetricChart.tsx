import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: '00:00', uv: 40, pv: 24, amt: 2400 },
  { name: '04:00', uv: 30, pv: 13, amt: 2210 },
  { name: '08:00', uv: 20, pv: 98, amt: 2290 },
  { name: '12:00', uv: 27, pv: 39, amt: 2000 },
  { name: '16:00', uv: 18, pv: 48, amt: 2181 },
  { name: '20:00', uv: 23, pv: 38, amt: 2500 },
  { name: '23:59', uv: 34, pv: 43, amt: 2100 },
];

interface MetricChartProps {
  color?: string;
}

export const MetricChart: React.FC<MetricChartProps> = ({ color = "#60a5fa" }) => {
  return (
    <div className="h-32 w-full mt-2">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: -20,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id={`color${color}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={color} stopOpacity={0.3}/>
              <stop offset="95%" stopColor={color} stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" />
          <XAxis dataKey="name" hide />
          <YAxis hide />
          <Tooltip 
            contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#f1f5f9' }}
            itemStyle={{ color: '#f1f5f9' }}
          />
          <Area type="monotone" dataKey="uv" stroke={color} fillOpacity={1} fill={`url(#color${color})`} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
