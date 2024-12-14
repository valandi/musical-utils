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
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center justify-center space-y-4">
        <Icon className="h-16 w-16 text-blue-500" />
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          {text}
        </h2>
      </div>
    </Link>
  );
};

export default LinkButton;
