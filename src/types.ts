export interface Project {
	title: string;
	client: string;
	description: string;
	publishDate: string;
	tags: string[];
	img: string;
}

export type NavItem = {
  path: '/' | '/about',
  title: string
}

export type NavItems = {
  [key: string]: NavItem
}

export interface IIconBasicProps {
  classes?: string
}
