import { CircleCheck, FileText,Pencil } from 'lucide-react';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { initialItems } from '@/data';
import { itemPath } from '@/path';

const ITEM_ICON = {
  OPEN: <FileText />,
  DONE: <CircleCheck />,
  IN_PROGRESS: <Pencil />,
};

const ItemsPage = () => {
  return (
    <div className='flex-1 flex flex-col gap-y-8'>
      <div>
        <h2 className='text-3xl font-bold tracking-tight'>Items Page</h2>
        <p className='text-sm text-muted-foreground'>
          All your items in one page
        </p>
      </div>

      <Separator />
      <div className='flex-1 flex flex-col items-center gap-y-4 animate-fade-in-from-top'>
        {initialItems.map((item) => (
          <Card key={item.id} className='w-full max-w-[420px]'>
            <CardHeader>
              <CardTitle className='flex gap-x-2'>
                <span>{ITEM_ICON[item.status]}</span>
                <span className='truncate'>{item.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <span className='line-clamp-3'>{item.content}</span>
            </CardContent>
            <CardFooter>
              <Link href={itemPath(item.id)} className='text-sm underline'>
                View
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ItemsPage;
