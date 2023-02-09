import { LightningElement, track } from 'lwc';

export default class WordCharacterCount extends LightningElement {
    @track charCount = 0;
    @track wordCount = 0;
    @track spaceCount = 0;   
    
    handleOnChange(event){
        let inputField = event.target.value;
        
        // count characters  
        let content = inputField;
        this.charCount = content.length;
        
        // count spaces
        this.spaceCount =  ' ' + content.split(' ').length - 1;
        // remove empty spaces from start and end 
        content.trim();

        this.charCount = this.charCount - this.spaceCount;

        // Remove spaces from between words 
        let wordList = content.split(/\s/);
        let words = wordList.filter(function (element) {
            return element != "";
        });
        // count words 
        this.wordCount = words.length;
    }
}
