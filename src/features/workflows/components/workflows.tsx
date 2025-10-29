"use client";
import { EntityHeader } from "@/components/entity-components";
import { useSuspenseWorkflows } from "../hooks/use-workflows";

export const WorkflowsList = () => {
  const workflows = useSuspenseWorkflows();

  return <p>{JSON.stringify(workflows.data, null, 2)}</p>;
};

export const WorkflowsHeader = ({ disabled }: { disabled?: boolean }) => {
  return (
    <>
      <EntityHeader
        title="Workflows"
        description="create and manage your workflows"
        onNew={() => {}}
        newButtonLabel="New workflow"
        disabled={disabled}
        isCreating={false}
      />
    </>
  );
};
