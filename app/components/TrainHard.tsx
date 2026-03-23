import Image from 'next/image';
export default function TrainHard() {
  return (
    <div>
      <div className="flex bg-white text-7xl font-extrabold py-8 border-b justify-center border-b-black">
        <h1 className="text-black">
          TRAIN HARD. <span className="text-[#808dfd]">LIVE BETTER</span>
        </h1>
        {/* шрифт нада нормальный */}
      </div>
      <div>
        <div className="grid grid-cols-3">
          <div className="col-span-2">
            <Image src={'zal1.svg'} alt="" width={854} height={480} />
          </div>
          <div className="bg-[#E9ECFF] text-black flex flex-col text-start px-5 pt-5 pb-14 justify-between">
            <h2 className="font-sans text-3xl font-bold max-w-2xs mb-">
              FOR THE COMMITED
            </h2>
            <div className="font-sans flex flex-col gap-5 text-sm">
              <p>
                Train like an athlete with top-tier equipment and expert
                programming. Whether you're building muscle or breaking PRs, we
                help you push past limits. Train like an athlete with top-tier
                equipment and expert programming. Whether you're building muscle
                or breaking PRs, we help you push past limits. Train like an
                athlete with top-tier equipment and expert programming. Whether
                you're building muscle or breaking PRs, we help you push past
                limits.
              </p>
              <button className="font-mono text-start ml-4 cursor-pointer">
                ABOUT US
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3">
          <div className="bg-[#E9ECFF] text-black flex flex-col text-start px-5 pt-5 pb-14 justify-between border-b bprder-black border-r">
            <h2 className="font-sans text-3xl font-bold mb-">
              GUIDED BY EXPERTS
            </h2>
            <p className="font-sans flex flex-col gap-5 text-sm">
              We believe in creating a positive environment where you can
              thrive. We're here to help you achieve your goals and unlock your
              full potential.
            </p>
          </div>
          <div className="bg-[#E9ECFF] text-black flex flex-col text-start px-5 pt-5 pb-14 justify-between border-b bprder-black">
            <h2 className="font-sans text-3xl font-bold mb-">
              DYNAMIC OPEN GYM
            </h2>
            <p className="font-sans flex flex-col gap-5 text-sm">
              Our facility is the optimal environment for strength training and
              performance, fully equipped with top-of-the-line tools, ample
              training areas, and a focus on functional movement
            </p>
          </div>
          <div>
            <Image src={'zal2.svg'} alt='' width={426} height={479}/>
          </div>
        </div>
      </div>
    </div>
  );
}
