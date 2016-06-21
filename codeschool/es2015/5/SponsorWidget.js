class Widget {

    constructor(baseCss){
        this.baseCss = `BASE: ${baseCss}`;
    }

    getBaseCss(){
        return this.baseCss;
    }
}

class SponsorWidget extends Widget {

    constructor(baseCss, name, description, url) {
        super(baseCss);
        this.setName(name);
        this.description = description;
        this.url = url;
    }

    getName(){
        return this.name;
    }

    setName(name){
        this.name = name;
    }
}

sponsorWidget = new SponsorWidget("foo", "name", "desc", "example.com");

console.log(sponsorWidget.getName());
console.log(sponsorWidget.getBaseCss());

