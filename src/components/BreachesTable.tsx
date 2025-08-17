// src/components/BreachesTable.tsx
import React from "react";

type Breach = {
  id: number;
  date: string;
  description: string;
  target: string;
};

interface BreachesTableProps {
  breaches: Breach[];
}

const BreachesTable: React.FC<BreachesTableProps> = ({ breaches }) => {
  if (breaches.length === 0) {
    return <p className="text-gray-300">No breaches found.</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-gray-900 text-white rounded-lg shadow-lg">
        <thead>
          <tr className="border-b border-gray-700">
            <th className="px-6 py-3 text-left text-sm font-medium uppercase">ID</th>
            <th className="px-6 py-3 text-left text-sm font-medium uppercase">Date</th>
            <th className="px-6 py-3 text-left text-sm font-medium uppercase">Target</th>
            <th className="px-6 py-3 text-left text-sm font-medium uppercase">Description</th>
          </tr>
        </thead>
        <tbody>
          {breaches.map((b) => (
            <tr key={b.id} className="border-b border-gray-700 hover:bg-gray-800 transition-colors">
              <td className="px-6 py-4">{b.id}</td>
              <td className="px-6 py-4">{b.date}</td>
              <td className="px-6 py-4">{b.target}</td>
              <td className="px-6 py-4">{b.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BreachesTable;
