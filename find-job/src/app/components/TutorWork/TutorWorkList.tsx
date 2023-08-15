import { TutorWork } from "../../lib/contents";
import TutorWorkItem from "./TutorWorkItem";

interface worklist{
  worklist: TutorWork[]
}

export default function TutorWorkList({worklist}:worklist){
  return (
    worklist.map(work => (
        <TutorWorkItem key={work.id} work={work} />
    ))
  );
}
