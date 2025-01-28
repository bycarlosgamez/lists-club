import Link from 'next/link';
import Heading from '@/components/heading';
import { itemsPath } from '@/path';

const HomePage = () => {
  return (
    <div className='flex-1 flex flex-col gap-y-8'>
      <div>
        <Heading title='Home Page' description='Your home page to start' />
      </div>
      <div className='flex-1 flex flex-col items-center'>
        <Link href={itemsPath()}>Go to your items</Link>
      </div>
    </div>
  );
};

export default HomePage;
