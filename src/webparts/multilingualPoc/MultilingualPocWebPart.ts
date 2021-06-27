import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneDropdown,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'MultilingualPocWebPartStrings';
import MultilingualPoc from './components/MultilingualPoc';
import { IMultilingualPocProps } from './components/IMultilingualPocProps';
import { headers, HeaderData } from './loc/language';

export interface IMultilingualPocWebPartProps {
  description: string;
}

export default class MultilingualPocWebPart extends BaseClientSideWebPart<IMultilingualPocWebPartProps> {
  private HeaderForDisplay: headers;



  public render(): void {
    const element: React.ReactElement<IMultilingualPocProps> = React.createElement(
      MultilingualPoc,
      {
        description: this.properties.description,
        headerForDisplay: this.HeaderForDisplay
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected onInit(): Promise<void> {
     
     return HeaderData.getLanguageHeader('en-US').then((response: headers) => {
        //alert(response.Address);
        this.HeaderForDisplay = response;
      });
  }




  protected onPropertyPaneFieldChanged(property, oldValue, newValue) {
    if (property == 'selectedLanguage') {
      HeaderData.getLanguageHeader(newValue).then((response: headers) => {
        // alert(response.Address);
        this.HeaderForDisplay = response;
        this.render();
      });
      
    }
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneDropdown('selectedLanguage', {
                  label: strings.LanguageSelectionLabel,
                  options: [
                    { key: 'en-US', text: 'English' },
                    { key: 'ar-SA', text: 'Arabic (Saudi Arabia)' },
                    { key: 'ar-BH', text: 'arabic (Bahrain)' }
                  ]
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
