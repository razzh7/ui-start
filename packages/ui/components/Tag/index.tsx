import React from 'react';
import './style/index.less';

export interface TagProps extends React.PropsWithChildren {
  type?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
}

export const Tag: React.FC<TagProps> = (props) => {
  const { type = 'primary', children } = props;
  const className = `tag tag-${type}`;
  return <div className={className}>{ children }</div>;
};
