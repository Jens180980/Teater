import { useContext } from "react";
import { CommentsListContent } from "../StateManagement/CommentsListData";

export const Test = () => {
  const { CommentsListData } = useContext(CommentsListContent);

  console.log(CommentsListData);

  return <div>Test</div>;
};
