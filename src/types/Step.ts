type Window = {
  window: NameLabel;
  style: NameLabel;
  glassType: NameLabel;
}

type NameLabel = {
  name: string;
  label: string;
};

export interface Step {
  label: string;
  description: string;
  formFields: FormFields;
};
export interface RoomSpecs {
  roomSize: NameLabel;
  type: NameLabel;
  floorType: NameLabel;
  windows: Window;
  roomProperties: NameLabel;
}
export interface FormFields {
  name: string;
  label: string;
  errorMsg: string;
  isRequired: boolean;
  roomSpecs?: RoomSpecs;
}
export type Steps = Step[];
export type Selections = string[];