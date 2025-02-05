import { getPermalink, /*getBlogPermalink, getAsset*/ } from './utils/permalinks';

export const headerData = {
  links:[
    {
      text: 'Inicio',
      href: '/',
    },
    {
      text: 'Nosotros',
      href: getPermalink('/about'),
    },
    {
      text: 'Servicios',
      links: [
        {
          text: 'Landing Page',
          href: '/services/Landing-Page',
        },
        {
          text: ' Agencia de Marketing',
          href: 'https://smart360.cl',
        },
        {
          text: 'Soluciones Digitales',
          href: '/services/Soluciones-Digitales',
        },
        {
          text: 'Otras Especialidades',
          href: '/#Features2',
        },
        {
          text: 'Mantencion y Soporte Técnico',
          href: '/services/Mantencion-y-Soporte-Tecnico',
        },
        {
          text: 'Hosting y Datacenter',
          href: '/services/Hosting-y-Datacenter',
        }        
      ]
    },
    {
      text: 'Productos',
      links: [
        {
          text: 'Canales Digitales',
          href: '/product/canales-digitales',
        },
        {
          text: 'CRM Fenix',
          href: '/product/fenix',
        },
        {
          text: 'ERP Hydra',
          href: '/product/erp',
        }
      ]
    },
    {
      text: 'Contacto',
      href: getPermalink('/contact'),
    },
  ],

  /*links: [
    {
      text: 'Homes',
      links: [
        {
          text: 'SaaS',
          href: getPermalink('/homes/saas'),
        },
        {
          text: 'Startup',
          href: getPermalink('/homes/startup'),
        },
        {
          text: 'Mobile App',
          href: getPermalink('/homes/mobile-app'),
        },
        {
          text: 'Personal',
          href: getPermalink('/homes/personal'),
        },
      ],
    },
    {
      text: 'Pages',
      links: [
        {
          text: 'Features (Anchor Link)',
          href: getPermalink('/#features'),
        },
        {
          text: 'Services',
          href: getPermalink('/services'),
        },
        {
          text: 'Pricing',
          href: getPermalink('/pricing'),
        },
        {
          text: 'About us',
          href: getPermalink('/about'),
        },
        {
          text: 'Contact',
          href: getPermalink('/contact'),
        },
        {
          text: 'Terms',
          href: getPermalink('/terms'),
        },
        {
          text: 'Privacy policy',
          href: getPermalink('/privacy'),
        },
      ],
    },
    {
      text: 'Landing',
      links: [
        {
          text: 'Lead Generation',
          href: getPermalink('/landing/lead-generation'),
        },
        {
          text: 'Long-form Sales',
          href: getPermalink('/landing/sales'),
        },
        {
          text: 'Click-Through',
          href: getPermalink('/landing/click-through'),
        },
        {
          text: 'Product Details (or Services)',
          href: getPermalink('/landing/product'),
        },
        {
          text: 'Coming Soon or Pre-Launch',
          href: getPermalink('/landing/pre-launch'),
        },
        {
          text: 'Subscription',
          href: getPermalink('/landing/subscription'),
        },
      ],
    },
    {
      text: 'Blog',
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
        {
          text: 'Article',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        {
          text: 'Article (with MDX)',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
        {
          text: 'Category Page',
          href: getPermalink('tutorials', 'category'),
        },
        {
          text: 'Tag Page',
          href: getPermalink('astro', 'tag'),
        },
      ],
    },
    {
      text: 'Widgets',
      href: '#',
    },
  ],*/
  //actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Servicios',
      links: [
        {
          text: 'Landing Page',
          href: '/services/Landing-Page',
        },
        {
          text: ' Agencia de Marketing',
          href: 'https://smart360.cl',
        },
        {
          text: 'Soluciones Digitales',
          href: '/services/Soluciones-Digitales',
        },
        {
          text: 'Vicidial',
          href: '/services/Vicidial',
        },
        {
          text: 'Mantencion y Soporte Técnico',
          href: '/services/Mantencion-y-Soporte-Tecnico',
        },
        {
          text: 'Hosting y Datacenter',
          href: '/services/Hosting-y-Datacenter',
        }
      ]
    },
    {
      title: 'Productos',
      links: [
        {
          text: 'Canales Digitales',
          href: '/product/canales-digitales',
        },
        {
          text: 'CRM Fenix',
          href: '/product/fenix',
        },
        {
          text: 'ERP hydra',
          href: '/product/erp',
        },
        
      ]
    },
    
  ],
  secondaryLinks: [
    //{text: 'Terms', href: getPermalink('/terms') },
    //{ text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Linkedin', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/neighbour-spa/' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/neighbour_spa' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/profile.php?id=100066527478611&mibextid=ZbWKwL' },
    //{ ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    //{ ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://neighbour.cl/"> Neighbour</a> · All rights reserved.
  `,
};
