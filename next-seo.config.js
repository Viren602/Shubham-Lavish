// next-seo.config.js
const SEO = {
    titleTemplate: '%s | Zyden IT Solutions',
    defaultTitle: 'Zyden IT Solutions',
    description: 'Zyden IT Solutions offers expert technology services including web development, software development, and UI/UX design.',
    canonical: 'https://www.zyden-it.com/',
    openGraph: {
        type: 'website',
        locale: 'en_IN',
        url: 'https://www.zyden-it.com/',
        site_name: 'Zyden IT Solutions',
        images: [
            {
                url: 'https://www.zyden-it.com/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Zyden IT Solutions',
            },
        ],
    },
    twitter: {
        handle: '@zydenit',
        site: '@zydenit',
        cardType: 'summary_large_image',
    },
};

export default SEO;
