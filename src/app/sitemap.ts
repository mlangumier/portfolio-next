import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://mathieulangumier.vercel.app',
      alternates: {
        languages: {
          fr: 'https://mathieulangumier.vercel.app/fr',
          en: 'https://mathieulangumier.vercel.app/en',
        },
      },
      lastModified: new Date(),
      priority: 1,
    },
    // {
    //   url: 'https://mathieulangumier.vercel.app/projects',
    //   alternates: {
    //     languages: {
    //       fr: 'https://mathieulangumier.vercel.app/fr/projects',
    //       en: 'https://mathieulangumier.vercel.app/en/projects',
    //     },
    //   },
    //   lastModified: new Date(),
    //   priority: 0.8,
    // },
  ];
}
