import Image from "next/image";
import Header from "./components/header";
import TrainHard from "./components/TrainHard";
import Podval from "./components/podval";
import JoinTheCommunity from "./components/JoinTheCommunity";

export default function Home() {
  return (
    <div className="flex flex-col">
      <TrainHard/>
      <JoinTheCommunity/>
    </div>
  );
}
