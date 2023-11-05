import { quiz_illustration } from "../../assets/home";
import Container from "../Container";

export default function () {
  return (
    <section className="my-14">
      <Container>
        <div className="bg-quiz-bg h-auto sm:bg-cover bg-center bg-no-repeat bg-[#6D9886] rounded-xl relative">
          <article className="py-24 md:px-14 px-4 md:w-9/12 md:mx-0 mx-auto md:text-left text-center leading-none">
            <h1 className="font-bold lg:text-[60px] text-[50px] text-white pb-8">
              what we do and why?
            </h1>
            <h3 className="sm:text-[24px] text-white pb-1 font-sans">
              We empower you to manage your health effectively by providing
              daily tracking, reminders, and personalized guidance. Our goal is
              to help you lead a healthier life, reduce the risk of severe
              conditions, and improve your overall well-being.
            </h3>
          </article>
          <div className="absolute lg:right-[4%] lg:-top-[10%] -top-[5%] md:block hidden">
            <img src={quiz_illustration} alt="illustration" className="w-72" />
          </div>
        </div>
      </Container>
    </section>
  );
}
