
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface ProgressData {
  name: string;
  avant: number;
  apres: number;
}

interface ProgressChartProps {
  data: ProgressData[];
}

const ProgressChart: React.FC<ProgressChartProps> = ({ data }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4 text-center">Progression moyenne de nos élèves</h3>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis domain={[0, 20]} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#fff',
                border: '1px solid #ccc',
                borderRadius: '0.5rem',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            />
            <Bar dataKey="avant" name="Avant" fill="#1C1C1C" radius={[4, 4, 0, 0]} />
            <Bar dataKey="apres" name="Après" fill="#E6B800" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="flex justify-center mt-4 space-x-8">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-anthracite rounded-sm mr-2"></div>
          <span className="text-sm">Avant</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-gold rounded-sm mr-2"></div>
          <span className="text-sm">Après (3 mois)</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressChart;
