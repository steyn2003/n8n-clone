interface Props {
  params: {
    workflowId: string;
  };
}

const Page = async ({ params }: Props) => {
  const { workflowId } = await params;
  return (
    <div>
      <h1>Workflow ID: {workflowId}</h1>
      {/* Add your content here */}
    </div>
  );
};

export default Page;
