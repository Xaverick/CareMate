export default function Stats() {
  return (
    <section className="stats_box py-10 grid place-items-center lg:grid-cols-4 grid-cols-2 gap-4 sm:w-9/12 w-11/12 mx-auto -mt-8 px-4">
      <div>
        <h1 className="md:text-[40px] text-[25px] font-bold">200k</h1>
        <p>Total Users</p>
      </div>
      <div>
        <h1 className="md:text-[40px] text-[25px] font-bold">150k</h1>
        <p>Active ones</p>
      </div>
      <div>
        <h1 className="md:text-[40px] text-[25px] font-bold">150k</h1>
        <p>people helped</p>
      </div>
      <div>
        <h1 className="md:text-[40px] text-[25px] font-bold">50+</h1>
        <p>Daily Rewards</p>
      </div>
    </section>
  );
}
