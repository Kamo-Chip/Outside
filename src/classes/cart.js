export default class Cart{
    constructor(list){
        if(list === undefined){
            this.items = [];
        }else{
            this.items = list;
        }
        
    }
  
    addItem(item){
        let index = this.hasItem(item);

        if(index < 0){
            const object = {
                name: item.name,
                price: item.price,
                tag: item.tag,
                imgReference: item.imgReference,
                quantity: 1
            }
            this.items.push(object);
        }else{
            this.items[index].quantity++;
        }
    }

    hasItem(item){
        for(let i = 0; i < this.items.length; i++){
            if(this.items[i].name === item.name){
                return i;
            }
        }
        return -1;
    }

    removeItem(itemName){
        let updatedItems = [];

        for(let i = 0; i < this.items.length; i++){
            if(this.items[i].name !== itemName){
                updatedItems.push(this.items[i]);
            }
        }

        this.items = updatedItems;
    }

    incrQuantity(itemName){
        for(let i = 0; i < this.items.length; i++){
            if(this.items[i].name === itemName){
                this.items[i].quantity++;
            }
            
        }
    }
    

    decrQuantity(itemName){
        for(let i = 0; i < this.items.length; i++){

            if(this.items[i].quantity === 1){
                this.removeItem(itemName);
                return;
            }

            if(this.items[i].name === itemName && this.items[i] !== 0){
                this.items[i].quantity--;
            }
        }
    }

    getQuantity(){
        let quantity = 0;

        this.items.forEach(element => {
            quantity += element.quantity;
        });

        return quantity;
    }

    getTotal(){
        let total = 0;

        this.items.forEach(element => {
            total += (Number)(element.price * element.quantity);
        });

        return total.toFixed(2);
    }
}