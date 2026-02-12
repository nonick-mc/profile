import { graphql } from '@octokit/graphql';

type User = {
  contributionsCollection: {
    contributionCalendar: {
      weeks: [{ contributionDays: { color: string; contributionCount: number }[] }];
    };
  };
};

const graphqlWithAuth = graphql.defaults({
  headers: {
    authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
  },
});

export async function getContributions(username: string) {
  const { user } = (await graphqlWithAuth(
    `
    query contributions ($username:String!) {
      user(login: $username) {
        contributionsCollection {
          contributionCalendar {
            weeks {
              contributionDays {
                color
                contributionCount
              }
            }
          }
        }
      }
    }
  `,
    {
      username,
    },
  )) as { user: User };

  return user.contributionsCollection.contributionCalendar;
}
