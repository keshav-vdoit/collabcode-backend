export interface AppConfigTypes {
  app: Record<any, any>;
  services: Record<any, any>;
  ui: UiConfigTypes;
}

export interface UiConfigTypes {
  appName: string;
  organizationName: string;
  links: LinksTypes;
  theming: ThemingTypes;
}

export interface OrgDetailsTypes {
  appName: string;
  organizationName: string;
}

export interface LinksTypes {
  organizationWebsite: string;
  supportEmail: string;
  socialLinks: SocialLink[];
  footerLinks: FooterLink[];
}

export interface FooterLink {
  label: string;
  url: string;
}

export interface SocialLink {
  platform: 'facebook' | 'x' | 'instagram' | 'youtube' | 'linkedin';
  url: string;
}

export interface ThemingTypes {
  coverImage: string;
  coverImageTextColor: string;
  themedUi: boolean;
  font: string;
  logo: Logo;
  colors: Colors;
  themeMode: 'light' | 'dark' | 'auto';
}

export interface Colors {
  primary: {
    light: string;
    dark: string;
    foregroundLight: string;
    foregroundDark: string;
  };
  secondary: {
    light: string;
    dark: string;
    foregroundLight: string;
    foregroundDark: string;
  };
}

export interface Logo {
  light: string;
  dark: string;
}
