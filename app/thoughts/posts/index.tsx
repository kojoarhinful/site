import * as procrastination from "./procrastination";
import * as whatsThePoint from "./whats-the-point";
import * as checkMic from "./check-mic";


export const allPosts = [
   {
    ...procrastination.metadata,
    content: procrastination.content,
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
