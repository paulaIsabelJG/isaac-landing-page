export interface CollaboratorEntity {
  id: string;
  name: string;
  fullName?: string;
  role: string;
  contributions: string[];
  imageSrc: string;
  imageAlt: string;
}
