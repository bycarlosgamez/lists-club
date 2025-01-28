import { Kanban } from 'lucide-react';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { homePath, itemsPath } from '@/path';

const Header = () => {
  return (
    <nav className='supports-backdrop-blur:bg-background/60   fixed left-0 right-0 top-0 z-20 border-b bg-background/95 backdrop-blur w-full flex py-2.5 px-5 justify-between'>
      <div>
        <Link
          href={homePath()}
          className={buttonVariants({ variant: 'ghost' })}
        >
          <Kanban />
          <h1 className='ml-2 text-lg font-semibold'>ItemBounty</h1>
        </Link>
      </div>
      <div>
        <Link
          href={itemsPath()}
          className={buttonVariants({ variant: 'default' })}
        >
          Items
        </Link>
      </div>
    </nav>
  );
};

export default Header;
