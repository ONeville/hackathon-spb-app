export interface Case {
  createdDate: string;
  lastUpdateDate: string;
  requestUser: {
    fullName: string;
    phone: string;
    id: string;
  };
  services: {
    name: string;
    organization: string;
  };
  host: {
    cabinId: string;
    site: string;
    loaction: string;
  };
  status: string;
  comments: string;
  id: string;
  caseId: string;
  requestUserName?: string;
  servicesName?: string;
  cabin?: string;
}

export interface Cabin {
  id: string;
  cabinId: number;
  location: string;
  site: string;
  city: string;
  zipCode: number;
}
