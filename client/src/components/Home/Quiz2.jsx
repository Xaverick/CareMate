import { quiz2 } from "../../assets/home";
import Container from "../Container";

export default function () {
  return (
    <section className="my-14">
      <Container>
        <div className="bg-quiz-bg h-auto sm:bg-cover bg-center bg-no-repeat bg-[#6D9886] rounded-xl relative">
          <article className="py-24 md:px-14 px-19 md:w-9/20 md:mx-0 mx-auto md:text-right text-center leading-none">
            <h1 className="font-bold lg:text-[50px] text-[50px] text-white pb-8">
              How Habit Tracking helps
            </h1>
            <h3 className="sm:text-[24px] text-white pb-1 font-sans max-w-6xl ml-96">
            Habit tracking promotes healthier choices and consistency, leading to improved health by ensuring regular medication, exercise, and a balanced diet. 
            This proactive approach helps prevent severe conditions and enhances overall well-being.
            </h3>
          </article>
          <div className="absolute lg:right-[77%] lg:-top-[20%] -top-[15%] md:block hidden">
            <img src={quiz2} alt="illustration" className="w-96"/>
          </div>
        </div>
      </Container>
    </section>
  );
}
