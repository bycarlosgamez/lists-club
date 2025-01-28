import { MessageSquareWarning } from 'lucide-react';
import { cloneElement } from 'react';

type PlaceholderProps = {
  label: string;
  icon?: React.ReactElement;
  button?: React.ReactElement;
};

const Placeholder = ({
  label,
  icon = <MessageSquareWarning />,
  button = <div className='h-10' />,
}: PlaceholderProps) => {
  return (
    <div className='flex-1 self-center flex flex-col items-center justify-center gap-y-2'>
      {cloneElement(icon, { className: 'w-16 h-16' })}
      <h3 className='text-lg text-center'>{label}</h3>
      {cloneElement(button, { className: 'h-10' })}
    </div>
  );
};

export default Placeholder;
