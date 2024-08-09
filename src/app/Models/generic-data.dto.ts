export interface genericDataDTO {
  userId: number;
  id:     number;
  title:  string;
  body:   string;
}

export class genericMailDTO {
  contactEmail:    string;
  requester: string;
  contactPhone: string;
  subject:  string;
  body:     string;

  constructor(
    contactEmail: string,
    requester: string,
    contactPhone: string,
    subject: string,
    body: string,
   )
    {
      this.contactEmail = contactEmail,
      this.requester = requester,
      this.contactPhone = contactPhone,
      this.subject = subject,
      this.body = body
    }
}

