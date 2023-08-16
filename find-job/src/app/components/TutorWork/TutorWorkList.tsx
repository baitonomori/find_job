import { TutorWork } from "../../lib/contents";
import TutorWorkItem from "./TutorWorkItem";

interface worklist{
  contentlist: TutorWork[]
}

export default function TutorWorkList({contentlist}:worklist){
  return (
    contentlist.map(content => (
        <TutorWorkItem key={content.id} content={content} />
    ))
  );
}
