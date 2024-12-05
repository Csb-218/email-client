export interface Email {
  id: string;
  from: {
    email: string;
    name: string;
  };
  subject: string;
  short_description: string;
  date: number;
  read?: boolean;
  favorite?: boolean;
}

export interface Email_Body {
  id: string;
  body: string;
}
