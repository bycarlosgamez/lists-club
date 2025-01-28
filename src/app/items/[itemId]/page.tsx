import Link from 'next/link';
import Placeholder from '@/components/placeholder';
import { Button } from '@/components/ui/button';
import { initialItems } from '@/data';
import { itemsPath } from '@/path';

type ItemPageProps = {
  params: {
    itemId: string;
  };
};

const ItemPage = ({ params }: ItemPageProps) => {
  const item = initialItems.find((item) => item.id === params.itemId);

  if (!item) {
    return (
      <Placeholder
        label='Item not found'
        button={
          <Button asChild variant='outline'>
            <Link href={itemsPath()}>Go back to items</Link>
          </Button>
        }
      />
    );
  }
  return (
    <>
      <h2 className='text-lg'>{item.title}</h2>
      <p className='text-sm'>{item.content}</p>
    </>
  );
};

export default ItemPage;
