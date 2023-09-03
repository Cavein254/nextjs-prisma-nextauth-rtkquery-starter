import { useSession } from 'next-auth/react';
const page = () => {
  const { data: session } = useSession();
  return (
    <div>
      <h4> Use session {JSON.stringify(session)}</h4>
    </div>
  );
};

export default page;
