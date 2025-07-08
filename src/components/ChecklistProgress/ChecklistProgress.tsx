import React from 'react';

const ChecklistProgress: React.FC = () => (
  <section className="bg-white p-4 rounded shadow mb-4">
    <h3 className="font-semibold mb-2">Checklist Progress</h3>
    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '60%' }}></div>
    </div>
    <ul className="list-disc list-inside text-gray-700">
      <li>Step 1</li>
      <li>Step 2</li>
      <li>Step 3</li>
    </ul>
  </section>
);

export default ChecklistProgress; 