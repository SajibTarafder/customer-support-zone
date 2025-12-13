import React from 'react';

const TicketStatus = ({ inProgress, handleComplete }) => {
    return (
   <div className="ml-4">
      {inProgress.length === 0 && <p className="p-4 text-gray-500">No tasks in progress.</p>}
      {inProgress.map(task => (
        <div key={task.id} className="card bg-base-100 shadow-sm p-4 mb-4">
          <h2 className="text-lg font-bold">{task.title}</h2>
          <button 
  onClick={() => handleComplete(task)} // পুরো object পাঠাচ্ছি
  className="btn bg-[#02A53B] text-white btn-block mt-4"
>
  Complete
</button>

        </div>
      ))}
    </div>

    );
};

export default TicketStatus;