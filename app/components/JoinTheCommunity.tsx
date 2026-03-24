import Image from 'next/image';
import zal3 from '../../public/zal3.svg'
export default function JoinTheCommunity() {
  return (
    <div>
      <div className="flex bg-white font-anek-tamil font-extrabold text-[116px] leading-[110%] tracking-[-0.05em] uppercase py-6 border-b">
        <h1 className="pl-4">
          JOIN THE <span className="text-[#808dfd]">COMMUNITY</span>
        </h1>
      </div>
      <div>
        <div className="grid grid-cols-3 ">
          <div className="bg-[#E9ECFF] flex flex-col text-start justify-between font-sans">
            <h2 className="font-anek-tamil text-[44px] leading-[95%] tracking-[-0.03em] font-bold border-b px-5 py-8">DISCOVER YOUR POTENTIAL</h2>
            <div className='border-b px-5 justify-center h-full flex flex-col'>
              <h3 className="font-anek-tamil text-[25px]  tracking-[-0.03em] font-bold">EXPERT COACHING</h3>
              <p className='text-[18px] leading-5.5'>Trainers who are passionate about your progress.</p>
            </div>
            <div className='border-b px-5 justify-center h-full flex flex-col'>
              <h3 className="font-anek-tamil text-[25px]  tracking-[-0.03em] font-bold">RESULT-DRIVEN PROGRAMS</h3>
              <p  className='text-[18px] leading-5.5'>Workouts that deliver tangible, measurable results.</p>
            </div>
            <div className='border-b px-5 justify-center h-full flex flex-col'>
              <h3 className="font-anek-tamil text-[25px]  tracking-[-0.03em] font-bold">A SUPPORTIVE TRIBE</h3>
              <p className='text-[18px] leading-5.5'>A community that pushes you to be your best.</p>
            </div>
            <button className='font-mono text-start ml-10 cursor-pointer justify-center h-full flex flex-col'>VIEW CLASSES</button>
          </div>
          <div className="col-span-2">
            <Image src={zal3} alt="" />
          </div>
        </div>
        <div className='bg-[#808dfd] flex flex-col items-center py-40 text-[17px]'>
          <p className='font-sans'>WHAT WE BELIEVE IN</p>
          <h2 className='font-anek-tamil text-[57px] font-bold'>JOIN THE PRIMAL TRIBE TODAY!</h2>
          <button className='bg-[#E9ECFF] px-4 rounded-lg py-2 cursor-pointer'>RESERVE YOUR SPOT</button>
        </div>
      </div>
    </div>
  );
}
