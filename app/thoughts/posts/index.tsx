import * as isThisReallyForMe from "./is-this-really-for-me";
import * as whatsThePoint from "./whats-the-point";
import * as checkMic from "./check-mic";


export const allPosts = [
  {
    ...isThisReallyForMe.metadata,
    content: isThisReallyForMe.content,
  },
  {
    ...whatsThePoint.metadata,
    content: whatsThePoint.content,
  },
  {
    ...checkMic.metadata,
    content: checkMic.content,
  },
];

export const sortedPosts = [...allPosts].sort((a, b) => {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
});

export function getPostBySlug(slug: string) {
  return allPosts.find((post) => post.slug === slug);
}
