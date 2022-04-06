class Casino {
    constructor(name, isFakeCoin){
        this.name = name;
        this.isFakeCoin = isFakeCoin
        this.timesPlayed = 0;
    }

    playGame(betAmount) {
        this.timesPlayed++
        if (Math.random() < 0.5 || this.isFakeCoin){
            console.log(this.name + " wins!")
        } else {
            console.log(`You win ${betAmount * this.timesPlayed} from ${this.name}!`)
        }
    }

    rollDie(d){
        let num = Math.floor(Math.random() * (d)) + 1
        console.log(`You rolled a ${num}!`)
    }
    
};
