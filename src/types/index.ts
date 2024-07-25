import { type FileWithPath } from "react-dropzone";

export type FileWithPreview = FileWithPath & {
  preview: string;
};

export type TRange = [
  "SERIE_700",
  "SERIE_700ECO",
  "SERIE_900",
  "ELEMENTS_NEUTRES"
];

export type TCompany = ["IMB", "IRC"];
