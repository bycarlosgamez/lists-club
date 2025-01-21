import { initialItems } from '@/data';

type ItemPageProps = {
  params: {
    itemId: string;
  };
};

const ItemPage = ({ params }: ItemPageProps) => {
  const item = initialItems.find((item) => item.id === params.itemId);

  if (!item) {
    return <h3 className='text-lg'>Item not found</h3>;
  }
  return (
    <>
      <h2 className='text-lg'>{item.title}</h2>
      <p className='text-sm'>{item.content}</p>
    </>
  );
};

export default ItemPage;
