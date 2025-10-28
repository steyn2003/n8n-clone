interface Props {
  params: {
    executionId: string;
  };
}

const Page = async ({ params }: Props) => {
  const { executionId } = await params;
  return (
    <div>
      <h1>Execution ID: {executionId}</h1>
      {/* Add your content here */}
    </div>
  );
};

export default Page;
