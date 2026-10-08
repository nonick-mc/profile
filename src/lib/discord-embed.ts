import { ButtonStyle, ComponentType, SeparatorSpacingSize } from 'discord-api-types/v10';

const MAX_BYTES = 3000;

const linkButton = (url: string, label: string, emoji: { id: string; name: string }) => ({
  type: ComponentType.Button,
  style: ButtonStyle.Link,
  url,
  label,
  emoji: { ...emoji, animated: false },
});

const embed = {
  component: {
    type: ComponentType.Container,
    spoiler: false,
    components: [
      {
        type: ComponentType.Section,
        components: [
          {
            type: ComponentType.TextDisplay,
            content:
              '## NoNICK\nインディーゲームとTypeScriptが好き。\n-# <:PartneredServerOwner:966753508860768357> Discord ・ <:cubee:916496869859938324> The HIVE パートナー',
          },
        ],
        accessory: {
          type: ComponentType.Thumbnail,
          media: { url: 'https://github.com/nonick-mc.png' },
          spoiler: false,
        },
      },
      { type: ComponentType.Separator, divider: false, spacing: SeparatorSpacingSize.Small },
      {
        type: ComponentType.ActionRow,
        components: [
          linkButton('https://youtube.com/nonick_mc', 'YouTube', {
            id: '966742261503234128',
            name: 'YouTube',
          }),
          linkButton('https://github.com/nonick-mc', 'GitHub', {
            id: '966742261465509928',
            name: 'Github',
          }),
          linkButton('https://x.com/nonick_mc', 'X', { id: '1557736460931563570', name: 'xcom' }),
        ],
      },
    ],
  },
};

export const discordEmbedJson = JSON.stringify(embed).replace(/</g, '\\u003c');

const bytes = new TextEncoder().encode(discordEmbedJson).length;
if (bytes > MAX_BYTES) {
  throw new Error(`Discord component embed is ${bytes} bytes (max ${MAX_BYTES})`);
}
