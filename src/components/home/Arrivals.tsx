import Button from "../ui/Button";
import ArrivalsCard from "./Arrivals-Card";

const Arrivals = () => {
  return (
    <section className="mt-[72px]">
      <div className="my-container">
        <div>
          <h1 className="text-5xl font-bold text-center">NEW ARRIVALS</h1>
          <div className="grid grid-cols-4 gap-5 mt-14">
            <ArrivalsCard />
            <ArrivalsCard />
            <ArrivalsCard />
            <ArrivalsCard />
          </div>
          <Button className="!border !text-[14px] !rounded-full block mx-auto mt-9 !px-14 !py-4 !border-black !border-opacity-10">
            View All
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Arrivals;
