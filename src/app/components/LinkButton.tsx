import React from 'react';
import Link from 'next/link';

type LinkButtonProps = {
  link: string;
  text: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const LinkButton: React.FC<LinkButtonProps> = ({ link, text, Icon }) => {
  return (
    <Link href={link} className="block">
      <div className="rounded-lg shadow-md p-6 hover:shadow-lg duration-300 flex flex-col items-center justify-center space-y-4 border-2 border-solid border-indigo-500 hover:border-indigo-300 transition ease-in-out bg-gradient-to-r from-violet-500 to-indigo-500">
        <Icon className="h-16 w-16 text-blue-900 hover:text-blue-300 hover:animate-spin transition ease-in-out duration-200" />
        <h2 className="text-xl font-semibold text-blue-800 dark:text-blue-200">
          {text}
        </h2>
      </div>
    </Link>
  );
};

export default LinkButton;
