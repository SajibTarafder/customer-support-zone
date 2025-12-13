import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import './App.css';
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import TicketCard from './components/TicketCard/TicketCard';
import TicketStatus from './components/TicketStatus/TicketStatus';
import Footer from './components/Footer/Footer';

function App() {
  const [tickets, setTickets] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [resolvedCount, setResolvedCount] = useState(0);

  //data load
  useEffect(() => {
    fetch("/customer.json")
      .then(res => res.json())
      .then(data => setTickets(data));
  }, []);

  // ticket load hole Task Status add hoy
  const handleAddToProgress = (ticket) => {
    const isExist = inProgress.find(item => item.id === ticket.id);
    if (!isExist) {
      setInProgress([...inProgress, ticket]);
      toast.success("Added to Task Status!");
    } else {
      toast.warning("Already in progress!");
    }
  };

  // Complete button e click korle Task remove & resolved count update 
  const handleComplete = (ticket) => {
    // In Progress sorano
    setInProgress(prev => prev.filter(item => item.id !== ticket.id));

    // Resolved count update
    setResolvedCount(prev => prev + 1);

    toast.info("Task successfully resolved!");
  };

  return (
    <main className='bg-base-200'>
      <Navbar></Navbar>

      <Banner inProgressCount={inProgress.length} resolvedCount={resolvedCount}></Banner>

      <div className='flex flex-col lg:flex-row mt-10 max-w-7xl mx-auto px-4 gap-6'>
        <div className='lg:w-2/3'>
          <h1 className='font-bold text-xl mb-4'>Customer Tickets</h1>
          <TicketCard tickets={tickets} handleAddToProgress={handleAddToProgress} ></TicketCard>
        </div>

        <div className='lg:w-1/3'>
          <h1 className='font-bold text-xl mb-4'>Task Status</h1>
          <TicketStatus inProgress={inProgress} handleComplete={handleComplete}></TicketStatus>
        </div>
      </div>

      <ToastContainer position="top-right"></ToastContainer>
      <Footer></Footer>
    </main>
    
  );
}

export default App;
