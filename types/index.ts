export interface ProjectItem {
  id: string;
  sn: number;
  name: string;
  funder: string;
  period: string;
  beneficiary: string;
  category: 'GIS Mapping' | 'Soil Health' | 'Watershed' | 'Statics' | 'WDC' | 'Other' | 'Natural Farming / GIS';
  description?: string;
  imageUrl?: string;
  pdfUrl?: string;
  isFeatured?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  imageUrl: string;
  category: string;
  isFeatured?: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  authorRole: string;
  category: string;
  tags: string[];
  readTime: string;
  publishedAt: string;
  imageUrl: string;
  isPublished: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  category: 'GIS Elevation' | '3D Mapping' | 'Field Work' | 'Soil Testing' | 'Events';
  imageUrl: string;
  location?: string;
  date?: string;
  isFeatured?: boolean;
}

export interface CommitteeMember {
  sn: number;
  name: string;
  qualification: string;
  designation: string;
  specialization: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  createdAt: string;
  status: 'unread' | 'read' | 'archived';
}
