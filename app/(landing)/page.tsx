import Image from 'next/image';
import Header from '../(landing)/components/header';
import TrainHard from '../(landing)/components/TrainHard';
import Podval from '../(landing)/components/podval';
import JoinTheCommunity from '../(landing)/components/JoinTheCommunity';

export default function Home() {
  return (
    <div className="flex flex-col">
      <TrainHard />
      <JoinTheCommunity />
    </div>
  );
}
