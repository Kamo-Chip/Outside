export default class Item{
    constructor(name, price, tag, imgReference){
        this.name = name;
        this.price = price;
        this.tag = tag;
        this.imgReference = imgReference;
    }

    getPrice(){
        return this.price;
    }

    getName(){
        return this.name;
    }

    getTag(){
        return this.tag;
    }

    getImgReference(){
        return this.imgReference;
    }
}