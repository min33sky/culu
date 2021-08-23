import React, { SVGProps } from 'react';

interface IHeaderItem {
  Icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  title: string;
}

function HeaderItem({ Icon, title }: IHeaderItem) {
  return (
    <div className="flex flex-col items-center w-12 cursor-pointer group sm:w-20 hover:text-white ">
      <Icon className="h-8 mb-1 group-hover:animate-bounce" />
      <p className="tracking-widest opacity-0 group-hover:opacity-100">{title}</p>
    </div>
  );
}

export default HeaderItem;
