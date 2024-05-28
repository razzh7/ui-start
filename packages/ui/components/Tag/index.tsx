import React from 'react';

export interface TagProps extends React.PropsWithChildren {
  type?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
}

function Tag(props: TagProps) {
  const { type = 'primary', children } = props;
  const className = `tag tag-${type}`;
  return <div className={className}>{ children }</div>;
}

export default Tag;
