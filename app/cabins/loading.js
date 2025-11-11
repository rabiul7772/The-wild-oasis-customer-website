import Spinner from '@/app/_components/Spinner';

function Loading() {
  return (
    <div className="grid justify-center items-center ">
      <Spinner />
      <p>Cabin data loading...</p>
    </div>
  );
}

export default Loading;
