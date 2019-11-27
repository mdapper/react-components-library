import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;

  /**
   * Set this to change the background color
   * @default "blue"
   */
  backgroundColor?: string;

  /**
   * Set this to change the href
   * @default "#"
   */
  href?: string;
};

export const Anchor = ({
  children,
  backgroundColor = 'blue',
  href = '#',
  ...props
}: Props) => (
  <a {...props} style={{ color: backgroundColor }} href={href}>
    {children}
  </a>
);
