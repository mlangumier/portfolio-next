import { githubIcon, linkedinIcon } from '@/assets/images';

export interface IExternalLink {
    label: string;
    url: string;
    icon: string;
}

export const linkedinLink: IExternalLink = {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/mathieu-langumier/',
    icon: linkedinIcon,
};
export const githubLink: IExternalLink = {
    label: 'Github',
    url: 'https://github.com/mlangumier',
    icon: githubIcon,
};

export const externalLinksList: IExternalLink[] = [linkedinLink, githubLink];
