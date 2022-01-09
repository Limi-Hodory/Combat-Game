function CreateGame()
{
    this.players={}; //empty object of players(I'll use the func "CreateCharacter")
    this.winner= null; //The last one that stay alive


}

function CreateCharacter(name, weapon){
    this.name=name;
    this.weapon=weapon;
    this.hp= 50;
    // function Attack(hp){

    // }

}

//if the char is alive
function isAlive(hp){
    if (hp>0){
        return true;
    }
    else return false;
}
//list of live char


//The power of every weapon
const Magic_stick= 1;
const gun=1.8;
const sword=1.2;

//The power to block (half of the power of weapon)
trollBlock= 0.9;
trollWizrd= 0.5;
trollWarrior= 0.6;




//The game
let game= new CreateGame(); //create the game
//adding the characters
game.players=CreateCharacter(Troll, gun);
game.players=CreateCharacter(Warrior, sword);
game.players=CreateCharacter(Wizard, Magic_stick);
