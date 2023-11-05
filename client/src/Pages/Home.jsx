import Front from "../components/Home/Front";
import Funds from "../components/Home/Funds";
import HowItWorks from "../components/Home/HowItWorks";
import Quiz from "../components/Home/Quiz";
import Stats from "../components/Home/Stats";
import Quiz2 from '../components/Home/Quiz2';

export default function Home() 
{
  return (
    <main>
      <Front />
      <Stats />
      <Quiz />
      <Quiz2 />
      <Funds />
      <HowItWorks />
    </main>
  );
}
