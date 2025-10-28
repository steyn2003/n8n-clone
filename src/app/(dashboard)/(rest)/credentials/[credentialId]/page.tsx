interface Props {
  params: {
    credentialId: string;
  };
}

const Page = async ({ params }: Props) => {
  const { credentialId } = await params;
  return (
    <div>
      <h1>Credentials ID: {credentialId}</h1>
      {/* Add your content here */}
    </div>
  );
};

export default Page;
