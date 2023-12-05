import agents from '~/jsons/agents.json';
import blogs from '~/jsons/blog.json';
import cards from '~/jsons/featuredProperties.json';

export type CardData = (typeof cards)[0];
export type CardBlog = (typeof blogs)[0];
export type CardAgent = (typeof agents)[0];
