import Image from "next/image";
import Header from "./components/header";
import TrainHard from "./components/TrainHard";
import Podval from "./components/podval";

export default function Home() {
  return (
    <div className="flex flex-col">
      <TrainHard/>
      <Podval/>
    </div>
  );
}
