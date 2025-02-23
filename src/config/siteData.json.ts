export interface SiteDataProps {
  name: String;
  title: string;
  description: string;
  useViewTransitions?: boolean; // defaults to false. Set to true to enable some Astro 3.0 view transitions
  author: {
    name: string;
    email: string;
    twitter: string; // used for twitter cards when sharing a blog post on twitter
  };
  defaultImage: {
    src: string;
    alt: string;
  };
}

// Update this file with your site specific information
const siteData: SiteDataProps = {
  name: "Sr. XYZ",
  // Your website's title and description (meta fields)
  title:
    "Proyecto Moto Cadiz - Mis rutitas en moto",
  description:
    "Mis rutas en moto.",
  useViewTransitions: true,
  // Your information!
  author: {
    name: "Jesus L.",
    email: "creator@cosmicthemes.com",
    twitter: "Cosmic_Themes",
  },

  // default image for meta tags if the page doesn't have an image already
  defaultImage: {
    src: "/images/cosmic-themes-logo.jpg",
    alt: "Cosmic Themes logo",
  },
};

export default siteData;
