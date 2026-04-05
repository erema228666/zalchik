export default function BookSession() {
  return (
    <div>
      <div className="flex bg-white font-anek-tamil font-extrabold lg:text-[116px] md:text-[71px] text-[37px] leading-[110%] tracking-[-0.05em] uppercase py-6 border-b">
        <h1 className="pl-5">
          BOOK A <span className="text-[#808dfd]">SESSION</span>
        </h1>
      </div>
      <div>
        <div className="md:grid md:grid-cols-3 flex flex-col">
          <div className="bg-[#E9ECFF] flex flex-col text-start px-5 pt-7 pb-7 justify-between border-b md:border-r">
            <h2 className="font-anek-tamil mb-20 lg:text-[45px] md:text-[36px] leading-[95%] tracking-[-0.03em] font-bold">
              STRENTGH
            </h2>
            <div className="font-sans flex flex-col gap-5 text-[17px]">
              <p className="border-b pb-2">Weekdays at 6AM</p>
              <p className="border-b pb-2">Weekends and Holidays at 8AM</p>
              <p>Build a foundation of raw power with our comprehensive weightlifting and strength training programs.</p>
            </div>
            <button className="bg-[#808CFD] hover:bg-black hover:text-white transition-colors duration-300 rounded-lg py-2 w-full mt-17">RESERVE YOUR SPOT</button>
          </div>
          <div className="bg-[#E9ECFF] flex flex-col text-start px-5 pt-7 pb-7 justify-between border-b md:border-r">
            <h2 className="font-anek-tamil mb-20 lg:text-[45px] md:text-[36px] leading-[95%] tracking-[-0.03em] font-bold">
              CONDITIONING
            </h2>
            <div className="font-sans flex flex-col gap-5 text-[17px]">
              <p className="border-b pb-2">Weekdays at 8AM</p>
              <p className="border-b pb-2">Weekends and Holidays at 10AM</p>
              <p>Push your limits with high-intensity workouts that challenge your cardiovascular endurance and build functional fitness.</p>
            </div>
            <button className="bg-[#808CFD] hover:bg-black hover:text-white transition-colors duration-300 rounded-lg py-2 w-full mt-17">RESERVE YOUR SPOT</button>
          </div>
          <div className="bg-[#E9ECFF] flex flex-col text-start px-5 pt-7 pb-7 justify-between border-b md:border-r">
            <h2 className="font-anek-tamil mb-20 lg:text-[45px] md:text-[36px] leading-[95%] tracking-[-0.03em] font-bold">
              COMMUNITY CLASSES
            </h2>
            <div className="font-sans flex flex-col gap-5 text-[17px]">
              <p className="border-b pb-2">Every day on the hour</p>
              <p>Experience the power of collective effort with our custom Workout of the Day. Push your limits alongside like-minded individuals.</p>
            </div>
            <button className="bg-[#808CFD] hover:bg-black hover:text-white transition-colors duration-300 rounded-lg py-2 w-full mt-17">RESERVE YOUR SPOT</button>
          </div>
        </div> 
        <div className='bg-[#808dfd] flex flex-col items-center py-40 text-[17px] gap-3'>
          <h2 className='font-anek-tamil md:text-[57px] text-[44px] font-bold text-center'>PRIMAL PERSONAL TRAINING</h2>
          <p className="font-sans max-w-3xl text-center">Receive personalized guidance and tailored programs designed to unlock your individual primal potential. Our expert coaches will guide you every step of the way.</p>
          <button className='bg-[#E9ECFF] px-4 rounded-lg py-2 cursor-pointer'>RESERVE YOUR SPOT</button>
        </div>
      </div>
    </div>
  );
}
