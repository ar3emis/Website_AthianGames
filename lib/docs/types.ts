export interface DocSection {
  slug: string;
  title: string;
  description?: string;
  content: string;
  prev?: { slug: string; title: string };
  next?: { slug: string; title: string };
}

export interface ProductDocumentation {
  productSlug: string;
  sections: DocSection[];
}

