import React from "react";
import Container from "../Container";
import SectionTitle from "./SectionTitle";
import { how_1, how_2, how_3, how_4 } from "../../assets/home";

const items = [
  {
    id: 1,
    icon: how_1,
    heading: "Gems",
    text: "Users can earn virtual currency (e.g., coins, gems, points) for each completed task or challenge. They can accumulate these for in-app purchases or to unlock features.",
  },
  {
    id: 2,
    icon: how_2,
    heading: "Exclusive Content",
    text: " Unlock access to premium content, articles, recipes, or exercise routines that are typically locked for non-achievers.",
  },
  {
    id: 3,
    icon: how_3,
    heading: "Badge Collection",
    text: "Users can earn virtual medals or badges for completing specific challenges or hitting milestones. They can display these on their profile.",
  },
  {
    id: 4,
    icon: how_4,
    heading: "Customized Tips and Recommendations",
    text: "Users can receive personalized health tips or recommendations based on their progress and goals and extra time access of chatbot.",
  },
];

export default function HowItWorks() {
  return (
    <section className="my-14">
      <Container>
        <SectionTitle title="how it works" />
        <div className="bg-[#D9CAB3] bg-opacity-30 px-8 py-14 rounded-md mt-8">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 place-items-center lg:gap-14 gap-8">
            {items.map((item) => (
              <div
                className="text-center flex flex-col items-center justify-center"
                key={item.id}
              >
                <img src={item.icon} alt="icon" className="pb-4 w-26" />
                <h1 className="font-bold text-lg py-4">{item.heading}</h1>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
