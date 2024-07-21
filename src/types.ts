export type ConfigItem = {
  type: 'link' | 'folder';
  id: string;
  addDate: number;
  title: string;
  icon: string;
  url: string;
  children?: ConfigItem[];
};
