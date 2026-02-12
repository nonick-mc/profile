import { Avatar } from '@heroui/react';
import { SiDiscord, SiGithub, SiX, SiYoutube } from '@icons-pack/react-simple-icons';
import { AnimatedImage } from '@/components/animated-image';
import { ContributionsGraph } from '@/components/contributions-graph';
import { FadeUp } from '@/components/fade-up';
import { SocialCard } from '@/components/social-card';
import { getContributions } from '@/lib/github';

export const revalidate = 3600;

export default async function Page() {
  const contributions = await getContributions('nonick-mc');

  return (
    <main className='max-w-lg mx-auto px-8'>
      <div className='pt-32 flex flex-col gap-6'>
        <FadeUp delay={100}>
          <Avatar size='lg'>
            <Avatar.Image src='https://github.com/nonick-mc.png' />
          </Avatar>
        </FadeUp>
        <FadeUp delay={200}>
          <div className='flex flex-col gap-0.5'>
            <h1 className='font-extrabold text-lg'>NoNICK</h1>
            <p className='text-muted'>インディーゲームとTypeScriptが好きな学生。Vim練習中📚</p>
          </div>
        </FadeUp>
      </div>
      <div className='pt-12 pb-32 grid grid-cols-2 auto-rows-fr gap-6'>
        <FadeUp delay={300} className='col-span-2'>
          <SocialCard
            name='GitHub'
            username='nonick-mc'
            icon={<SiGithub />}
            href='https://github.com/nonick-mc'
            className='col-span-2'
          >
            <div className='flex justify-end'>
              <ContributionsGraph contributions={contributions} />
            </div>
          </SocialCard>
        </FadeUp>
        <FadeUp delay={400}>
          <SocialCard
            name='YouTube'
            username='@nonick_mc'
            icon={<SiYoutube className='fill-red-500' />}
            href='https://www.youtube.com/@nonick_mc'
          />
        </FadeUp>
        <FadeUp delay={500}>
          <SocialCard
            name='X / Twitter'
            username='@nonick_mc'
            icon={<SiX />}
            href='https://x.com/nonick_mc'
          />
        </FadeUp>
        <FadeUp delay={600}>
          <SocialCard
            name='Discord'
            username='@nonick_mc'
            icon={<SiDiscord className='fill-[#5865F2]' />}
            href='https://discord.gg/nonick-mc'
          />
        </FadeUp>
        <FadeUp delay={700} className='flex items-end justify-end'>
          <AnimatedImage
            src='https://cdn.nonick-mc.com/e1e6eb8488ffb3bda6db0c661e3a3156.png'
            width={150}
            height={150}
            alt='nonick is sleeping with a creeper.'
          />
        </FadeUp>
      </div>
    </main>
  );
}
