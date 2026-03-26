import Image from 'next/image';
import zal3 from '../../public/zal3.svg'
import zal3_mob from '../../public/zal3_mob.svg'
import zal3_md from '../../public/zal3_md.svg'
export default function JoinTheCommunity() {
  return (
    <div>
      <div className="flex bg-white font-anek-tamil font-extrabold lg:text-[116px] md:text-[71px] text-[37px] leading-[110%] tracking-[-0.05em] uppercase py-6 border-b">
        <h1 className="pl-5">
          JOIN THE <span className="text-[#808dfd]">COMMUNITY</span>
        </h1>
      </div>
      <div>
        <div className="md:grid lg:grid-cols-3 md:grid-cols-2 flex flex-col">
          <Image src={zal3_mob} alt='' className='md:hidden flex w-full'></Image>
          <div className="bg-[#E9ECFF] flex flex-col text-start font-sans">
            <h2 className="font-anek-tamil lg:text-[44px] md:text-[36px] text-[25px] leading-[95%] tracking-[-0.03em] font-bold border-b p-5 lg:py-8 md:py-4">DISCOVER YOUR POTENTIAL</h2>
            <div className='border-b p-5 justify-center flex flex-col gap-1.5'>
              <h3 className="font-anek-tamil text-[25px]  tracking-[-0.03em] font-bold">EXPERT COACHING</h3>
              <p className='lg:text-[18px] text-[16px]  leading-5.5'>Trainers who are passionate about your progress.</p>
            </div>
            <div className='border-b p-5 justify-center flex flex-col gap-1.5'>
              <h3 className="font-anek-tamil text-[25px]  tracking-[-0.03em] font-bold">RESULT-DRIVEN PROGRAMS</h3>
              <p  className='lg:text-[18px] text-[16px] leading-5.5'>Workouts that deliver tangible, measurable results.</p>
            </div>
            <div className='border-b p-5 justify-center flex flex-col gap-1.5'>
              <h3 className="font-anek-tamil text-[25px]  tracking-[-0.03em] font-bold">A SUPPORTIVE TRIBE</h3>
              <p className='lg:text-[18px] text-[16px] leading-5.5'>A community that pushes you to be your best.</p>
            </div>
            <button className='font-mono md:text-start md:ml-10 cursor-pointer justify-center py-10.5 flex flex-col lg:text-[18px] text-[16px]'>VIEW CLASSES</button>
          </div>
          <div className="lg:col-span-2 hidden md:flex">
            <Image src={zal3} alt="" className='object-cover'/>
          </div>
        </div>
        <div className='bg-[#808dfd] flex flex-col items-center py-40 text-[17px] gap-4'>
          <p className='font-sans'>WHAT WE BELIEVE IN</p>
          <h2 className='font-anek-tamil md:text-[57px] text-[44px] font-bold text-center'>JOIN THE PRIMAL TRIBE TODAY!</h2>
          <button className='bg-[#E9ECFF] px-4 rounded-lg py-2 cursor-pointer'>RESERVE YOUR SPOT</button>
        </div>
      </div>
    </div>
  );
}
