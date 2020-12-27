class Welcome{

    constructor(){
        
        this.adminButton = createButton('Admin');
        this.RacerButton = createButton('Racer')
        
    }

    hideElements(){
        this.adminButton.hide();
        this.RacerButton.hide();
    }

    display(){
        this.adminButton.html('Admin');
        this.RacerButton.html('Racer');
        
        this.adminButton.position(width/2-100, height/2-100);
        this.RacerButton.position(width/2 - 100, height/2);

        this.adminButton.mousePressed(()=>{
                this.hideElements();
                admin.display();
        });
        this.RacerButton.mousePressed(()=>{
            this.hideElements();
            racer.display();
    });

    }
}