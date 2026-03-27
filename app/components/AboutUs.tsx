import Image from 'next/image';
import about1 from '../../public/about1.svg';
import about2 from '../../public/about2.svg';
import about3 from '../../public/about3.svg';
export default function AboutUs() {
  return (
    <div>
      <div className="flex bg-white font-anek-tamil font-extrabold lg:text-[116px] md:text-[71px] text-[37px] leading-[110%] tracking-[-0.05em] uppercase py-6 border-b">
        <h1 className="pl-5">ABOUT US</h1>
      </div>
      <div className="">
        <div className="md:grid md:grid-cols-3 flex flex-col">
          <div className="col-span-2 justify-between flex flex-col bg-[#808CFD] py-8 px-5">
            <h2 className="font-anek-tamil lg:text-[45px]  max-w-2xl md:text-[36px] leading-[95%] tracking-[-0.03em] font-bold">
              TAP INTO YOUR PRIMAL POWER. FORGE A STRONGER YOU.
            </h2>
            <div className="font-sans flex flex-col gap-2">
              <p className="font-anek-tamil text-[22px] leading-[95%] tracking-[-0.03em] font-bold">
                OUR VISION
              </p>
              <p className="text-[17px]">
                Primal Training is committed to delivering a training experience
                rooted in raw strength, functional fitness, and unwavering
                community support. We empower our members to tap into their
                primal power, achieve their goals, and live a life of strength,
                resilience, and unwavering determination.
              </p>
            </div>
          </div>
          <div>
            <Image src={about1} alt="" className="w-full" />
          </div>
        </div>
        <div className="md:grid md:grid-cols-3 flex flex-col">
          <div className="col-span-2">
            <Image src={about2} alt="" />
          </div>
          <div className="justify-between flex flex-col bg-[#E9ECFF] py-8 px-5">
            <h2 className="font-anek-tamil lg:text-[45px]  max-w-xs md:text-[36px] leading-[95%] tracking-[-0.03em] font-bold">
              DYNAMIC OPEN GYM
            </h2>
            <p className="font-sans text-[17px]">
              At Primal Training, we strip away the fluff and focus on the
              fundamentals. Our expert coaches guide you through intense,
              functional workouts designed to build raw strength, resilience,
              and a body capable of anything.
            </p>
          </div>
        </div>
      </div>
      <div className="relative ">
        <p className="left-5 bottom-5 absolute font-anek-tamil text-white lg:text-[45px]  max-w-xl md:text-[36px] leading-[95%] tracking-[-0.03em] font-bold">
          WE'VE CREATED A SPACE WHERE YOU CAN RECONNECT WITH YOUR PRIMAL SELF.
        </p>
        <Image src={about3} alt="" className="w-full" />
      </div>
      <div className='border-b bg-[#E9ECFF] flex flex-col items-center py-40 text-[17px] gap-3'>
          <p className='font-sans'>WHAT WE BELIEVE IN</p>
          <h2 className='font-anek-tamil md:text-[57px] text-[44px] font-bold text-center'>JOIN THE PRIMAL TRIBE TODAY!</h2>
          <button className='bg-[#808dfd] px-4 rounded-lg py-2 cursor-pointer'>RESERVE YOUR SPOT</button>
        </div>
    </div>
  );
}
