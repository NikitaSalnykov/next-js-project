import * as React from 'react';

export interface IPageAppProps {
  params: {id:string}
}

export default function Page ({params}: IPageAppProps) {
  return (
    <div>
      {params.id}
    </div>
  );
}
