import { githubIcon, linkedinIcon } from '@/assets/images';

export interface INavigationLinkExternal {
    label: string;
    url: string;
    icon: string;
}

export const linkedinLink: INavigationLinkExternal = {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/mathieu-langumier/',
    icon: linkedinIcon,
};
export const githubLink: INavigationLinkExternal = {
    label: 'Github',
    url: 'https://github.com/mlangumier',
    icon: githubIcon,
};

export const externalLinksList: INavigationLinkExternal[] = [linkedinLink, githubLink];
