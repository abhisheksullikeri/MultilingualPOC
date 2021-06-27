declare interface IMultilingualPocWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
  LanguageSelectionLabel:string;
}

declare module 'MultilingualPocWebPartStrings' {
  const strings: IMultilingualPocWebPartStrings;
  export = strings;
}
