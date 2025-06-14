import React from "react";
import { ProjectTaskA } from "../components/project-task-a.1";
import { ProjectTaskC } from "../components/project-taskC.1";
import ProjectTaskB from "../components/project-taskB.1";
import { ProjectTaskD } from "../components/project-taskD";

export default function TaskScreensPage() {
  return (
    <div>
      <div className="">
        <ProjectTaskA />
      </div>
      <div className="hidden">
        <ProjectTaskB />
      </div>
      <div className="hidden">
        <ProjectTaskC />
      </div>
      <div className="hidden">
        <ProjectTaskD />
      </div>
    </div>
  );
}
