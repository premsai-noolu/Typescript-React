import { type ReactNode, type PropsWithChildren } from "react";

type CourseGoalProps = PropsWithChildren<{
  title: string;
}>;
export default function CourseGoal({ title, children }: CourseGoalProps) {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );
}
