import * as React from 'react';
import styles from './MultilingualPoc.module.scss';
import { IMultilingualPocProps } from './IMultilingualPocProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class MultilingualPoc extends React.Component<IMultilingualPocProps, {}> {
  constructor(props: IMultilingualPocProps) {
    super(props);
  }
  public render(): React.ReactElement<IMultilingualPocProps> {
   
      return (
        <table>
          <tr><td><label>{this.props.headerForDisplay.FirstName}</label></td><td><input></input></td></tr>
          <tr><td><label>{this.props.headerForDisplay.LastName}</label></td><td><input></input></td></tr>
          <tr><td><label>{this.props.headerForDisplay.Address}</label></td><td><input></input></td></tr>
        </table>
      );
    
    



    // if (this.props.headerForDisplay) {
    //   return (
    //     <div className={styles.multilingualPoc} >
    //       <div className={styles.container}>
    //         <div className={styles.row}>

    //           <table>
    //             <tr><td><label>{this.props.headerForDisplay.FirstName}</label></td><td><input></input></td></tr>
    //             <tr><td><label>{this.props.headerForDisplay.LastName}</label></td><td><input></input></td></tr>
    //             <tr><td><label>{this.props.headerForDisplay.Address}</label></td><td><input></input></td></tr>
    //           </table>
    //         </div>
    //       </div>
    //     </div >
    //   );
    // }


  }
}
