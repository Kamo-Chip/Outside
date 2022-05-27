export default class Cart{
    constructor(){
        this.items = [];
    }
  

    addItem(item){
        if(!this.items.includes(item)){
            this.items.push(item);
        }
    }
}