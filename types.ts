
export enum Page {
  HOME = 'home',
  TERMS = 'terms',
  PRIVACY = 'privacy',
  CONTACT = 'contact'
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  smsConsent: boolean;
}

export interface NavItem {
  label: string;
  page: Page;
}
