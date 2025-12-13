
import CalenderImg from '../../assets/tabler--calendar.svg'

const TicketCard = ({ tickets, handleAddToProgress }) => {


  return (
    <div className=' max-w-7xl mx-auto mt-6 px-4'>


      <div className='basis-2/3 grid lg:grid-cols-2 grid-cols-1 md:grid-cols-2 gap-4'>
        {
          tickets.map(customer =>
            <div key={customer.id} onClick={() => handleAddToProgress(customer)} className="bg-base-100 shadow-xl ">
              <div className="card-body">
                <div className='flex justify-between'>
                  <h2 className="card-title">{customer.title}</h2>
                  <button className=" btn btn-sm rounded-4xl bg-[#B9F8CF] text-[#02A53B] font-bold">
                    <span className="w-3 h-3 bg-[#02A53B] rounded-full"></span>{customer.status} </button>
                </div>

                <p className='text-[#627382]'>{customer.description}</p>
                <div className=" flex justify-between mt-2">
                  <div className='flex gap-2'>
                    <p className='text-[#627382]'>#0{customer.id}</p>
                    <h5 className='font-semibold'>{customer.priority}</h5>
                  </div>
                  <div className='flex gap-2 text-[#627382]'>
                    <p className=''>{customer.customer}</p>
                    <div className='flex gap-1 items-center'>
                      <img src={CalenderImg} alt="" />
                      <h5>{customer.createdAt}</h5>
                    </div>

                  </div>
                </div>
              </div>
            </div>


          )
        }
      </div>
    </div>
  );
};

export default TicketCard;