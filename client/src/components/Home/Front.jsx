export default function Front() {

  return (
    <section className="z-10">
       <div className="sm:w-11/12 mx-auto">
      <div
          className={`py-8 sm:rounded-3xl relative w-full h-[620px] bg-homefrontbg bg-cover lg:bg-center bg-no-repeat bg-left`}
        >
          <article className="lg:flex hidden absolute right-[30%] w-[30%] border-l-white">
            <div className=" text-[72px] text-white font-semiBlod">
              CareMate
            </div>
          </article>
          <article className="lg:flex hidden items-end absolute top-[30%] right-0 w-[30%] border-l-2 h-1/2 px-2 border-l-white">
            <div className="text-[26px] w-[80%] text-white font-sans">
            Your Daily Health Ally, One Habit at a Time.
Your Daily Guide to a Healthier and Happier You.
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
