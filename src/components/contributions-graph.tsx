'use client';

import { Skeleton } from '@heroui/react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import type { getContributions } from '@/lib/github';

const BLOCK_SIZE = 13;
const BLOCK_GAP = 8;

export function ContributionsGraph({
  contributions,
}: {
  contributions: Awaited<ReturnType<typeof getContributions>>;
}) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const recentContributions = contributions.weeks.slice(-8);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Skeleton
        className='rounded-lg'
        style={{
          width: (BLOCK_SIZE + BLOCK_GAP) * recentContributions.length,
          height: BLOCK_SIZE * 7 + BLOCK_GAP * 6,
        }}
      />
    );
  }

  return (
    <svg
      width={(BLOCK_SIZE + BLOCK_GAP) * recentContributions.length}
      height={BLOCK_SIZE * 7 + BLOCK_GAP * 6}
      xmlns='http://www.w3.org/2000/svg'
    >
      <title>GitHub Contributions Graph</title>
      {recentContributions.map(({ contributionDays }, index) => (
        <g transform={`translate(${(BLOCK_SIZE + BLOCK_GAP) * index}, 0)`} key={index}>
          {contributionDays.map((day, index) => (
            <rect
              key={index}
              x={0}
              y={(BLOCK_SIZE + BLOCK_GAP) * index}
              width={BLOCK_SIZE}
              height={BLOCK_SIZE}
              rx={3}
              fill={day.contributionCount === 0 && resolvedTheme === 'dark' ? '#27272A' : day.color}
            />
          ))}
        </g>
      ))}
    </svg>
  );
}
