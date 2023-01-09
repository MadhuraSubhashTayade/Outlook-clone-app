export type EmailItemType = {
  id: string;
  from: { email: string; name: string };
  date: string;
  subject: string;
  short_description: string;
};

export type EmailBodyType = {
  id: string;
  body: string;
};
