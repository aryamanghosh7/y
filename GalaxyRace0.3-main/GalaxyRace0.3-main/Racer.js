class Racer {
constructor(){
    this.secretInput=createInput("").attribute("placeholder","ENTER SECRET CODE")
    this.nameInput=createInput("").attribute("placeholder","ENTER NAME")
    this.greeting=createElement("h2")
    this.greeting2=createElement("h3")
this.submitButton=createButton("SUBMIT")
this.playButton=createButton("PLAY")

}
display(){
this.secretInput.position(width/2,height/2-120)
this.submitButton.position(width/2,height/2-60)
this.submitButton.mousePressed(()=>{
if (this.secretInput.value()!=="") {
    var racerInput=this.secretInput.value();
    if(racerInput===secret_code){
        this.secretInput.hide()
        this.submitButton.hide()
    this.nameInput.position(width/2,height/2-120)
    this.playButton.position(width/2,height/2-120)
    
    }
else{
    this.greeting.html("wrong passcode.try again")
    this.greeting.position(width/2,height/2-200)
}

}

})
this.playButton.mousePressed(()=>{
if (this.nameInput.value()!=="") {
    this.nameInput.hide()
        this.playButton.hide()
        player.name = this.nameInput.value();
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Hello " + player.name)
        this.greeting.position(width/2 - 70, height/4);
        this.greeting2.html("WAITING FOR OTHER PLAYERS...... ")
            this.greeting2.position(width/2-50,height/2+50)
}


})
}















}