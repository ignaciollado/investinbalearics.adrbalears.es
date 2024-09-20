export class contactFormDTO {
  country:        string;
  contact_name:   string;
  contact_mail:   string;
  contact_phone:  string;
  corporation:    string;
  body:           string;

  constructor(
    country:        string,
    contact_name:   string,
    contact_mail:   string,
    contact_phone:  string,
    corporation:    string,
    body:           string
   )
    {
    this.country = country,
    this.contact_name = contact_name,
    this.contact_mail = contact_mail,
    this.contact_phone = contact_phone,
    this.corporation = corporation,
    this.body = body
    }
}