import React from "react";

const Resolved = ({ resolved }) => {
  if (resolved.length === 0) {
    return <p className="py-4 text-gray-500">No resolved tasks yet.</p>;
  }

  return (
    <div className="space-y-4">
      {resolved.map(task => (
        <div key={task.id} className="card bg-[#E0E7FF] shadow p-4">
          <h2 className="font-bold">Incorrect Billing Address</h2>
        </div>
      ))}
    </div>
  );
};

export default Resolved;