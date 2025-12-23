export interface Message {
  message: string;
}

// within api-interfaces contain data modals that are common between front end and back end
// our Base Entity will always have an id
export interface BaseEntity {
  id: string | null;
}

// our widget contains title and description
export interface Widget extends BaseEntity {
  title: string;
  description: string;
}
