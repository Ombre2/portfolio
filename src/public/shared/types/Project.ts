export interface IProject {
  id?: string;
  title: string;
  description: string;
  technologies: string[];
  link: string;
  isRecent: boolean;
  images: string[];
  link_github?: string;
  subfolder?: string;
  isReadyAll?: boolean;
}
