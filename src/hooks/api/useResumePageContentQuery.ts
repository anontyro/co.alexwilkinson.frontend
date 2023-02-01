export type WorkExpItem = {
  id: string;
  title: string;
  company: {
    name: string;
    location: string;
    url: string | null;
    description: string;
  };
  tags: string[];
  dates: {
    start: string;
    end?: string | null;
  };
  responsibilities: string[];
};