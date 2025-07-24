const Error = ({ errorData }: { errorData: any }) => {
  const { data, error } = errorData;
  return (
    <div className="grow flex flex-col items-center justify-center p-8 text-center">
      <div className="mb-4 text-4xl">⚠️</div>
      <h2 className="text-2xl font-montserrat font-bold mb-3">{data}</h2>
      <p className="font-hind text-base-content/80 max-w-md mb-6">{error}</p>
    </div>
  );
};

export default Error;
