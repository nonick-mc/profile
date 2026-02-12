import { Avatar, Card, type CardProps, cn, Link, linkVariants } from '@heroui/react';
import type { ReactNode } from 'react';

export type SocialCardProps = {
  name: string;
  username: string;
  icon: ReactNode;
  href?: string;
};

export function SocialCard({
  name,
  username,
  icon,
  href,
  children,
  className,
  ...props
}: SocialCardProps & CardProps) {
  return (
    <Card className={cn('flex-row h-full', className)} {...props}>
      <div className='flex flex-col gap-4 flex-1'>
        <Avatar>
          <Avatar.Fallback>{icon}</Avatar.Fallback>
        </Avatar>
        <div>
          <p className='font-semibold text-sm'>{name}</p>
          {href ? (
            <Link href={href} className='text-sm text-muted' target='_blank' rel='noopener'>
              {username}
              <Link.Icon />
            </Link>
          ) : (
            <p className={cn(linkVariants().base(), 'text-sm text-muted')}>{username}</p>
          )}
        </div>
      </div>
      {children && <div className='flex-1'>{children}</div>}
    </Card>
  );
}
