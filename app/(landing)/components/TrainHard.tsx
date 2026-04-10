import Image from 'next/image';
import zal1 from '../../public/zal1.svg';
import zal2 from '../../public/zal2.svg';
import zal2_mob from '../../public/zal2_mob.svg';
import Link from 'next/link';
export default function TrainHard() {
  return (
    <div>
      <div className="flex bg-white font-anek-tamil font-extrabold lg:text-[116px] md:text-[71px] text-[37px] leading-[110%] tracking-[-0.05em] uppercase py-6 border-b">
        <h1 className="pl-5">
          TRAIN HARD. <span className="text-[#808dfd]">LIVE BETTER</span>
        </h1>
      </div>
      <div>
        <div className="md:grid md:grid-cols-3 flex flex-col">
          <div className="col-span-2">
            <Image src={zal1} alt="" />
          </div>
          <div className="bg-[#E9ECFF] flex flex-col text-start px-5 pt-5 pb-14 justify-between">
            <h2 className="font-anek-tamil lg:text-[45px] md:text-[36px] leading-[95%] tracking-[-0.03em] font-bold">
              FOR THE COMMITTED
            </h2>
            <div className="font-sans flex flex-col gap-5 text-sm">
              <p>
                Train like an athlete with top-tier equipment and expert
                programming. Whether you&apos;re building muscle or breaking
                PRs, we help you push past limits.
              </p>
              <Link href="/about" className="font-mono text-start ml-4 cursor-pointer">
                ABOUT US
              </Link>
            </div>
          </div>
          <div className='flex md:hidden'>
            <Image src={zal2_mob} alt="" className='w-full' />
          </div>
          <div className="bg-[#E9ECFF] flex flex-col text-start px-5 pt-5 pb-14 justify-between border-b md:border-r">
            <h2 className="font-anek-tamil lg:text-[45px] md:text-[36px] leading-[95%] tracking-[-0.03em] font-bold">
              GUIDED BY EXPERTS
            </h2>
            <p className="font-sans flex flex-col gap-5 text-sm">
              We believe in creating a positive environment where you can
              thrive. We&apos;re here to help you achieve your goals and unlock
              your full potential.
            </p>
          </div>
          <div className="bg-[#E9ECFF] flex flex-col text-start px-5 pt-5 pb-14 justify-between border-b">
            <h2 className="font-anek-tamil lg:text-[45px] md:text-[36px] leading-[95%] tracking-[-0.03em] font-bold">
              DYNAMIC OPEN GYM
            </h2>
            <p className="font-sans flex flex-col gap-5 text-sm">
              Our facility is the optimal environment for strength training and
              performance, fully equipped with top-of-the-line tools, ample
              training areas, and a focus on functional movement
            </p>
          </div>
          <div className='md:flex hidden'>
            <Image src={zal2} alt="" />
          </div>
          
        </div>

          

      </div>
    </div>
  );
}
