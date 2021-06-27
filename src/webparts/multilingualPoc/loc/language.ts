export interface headers {
    FirstName: string;
    LastName: string;
    Address: string;
    textAlign: string;
}
export class HeaderData {
    private static EnglishLanguage: headers = { FirstName: 'First Name', LastName: 'Last Name', Address: 'Address', textAlign: 'leftToRight' }
    private static arabicSaudiArabia: headers = { FirstName: 'الاسم الأول', LastName: 'الكنية', Address: 'عنوان', textAlign: 'RightToLeft' }
    // private static bahrainArabia: headers = { FirstName: 'First Name', LastName: 'Last Name', Address: 'Address', textAlign: 'RightToLeft' }

    public static getLanguageHeader(languageSelection: string): Promise<headers> {
        let returnData: headers;
        switch (languageSelection) {
            case 'en-US':
                returnData = this.EnglishLanguage;
                break;
            case 'ar-SA':
                returnData = this.arabicSaudiArabia;
                break;
            
        }
        return new Promise<headers>((resolve) => {
            resolve(returnData)
        });
    }
}