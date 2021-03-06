const sql = require("./db");

//CONSTRUCTOR 
const Game = function(Game){
    this.name = Game.name,
    this.developer = Game.developer,
    this.description = Game.description,
    this.img_url = Game.img_url,
    this.release_date = Game.release_date,
    this.active = Game.active
}


Game.create = (newGame, result) => {
    sql.query("INSERT INTO games SET ?", newGame, (err, res) => {
    if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
    }
    
    result(null, { 
        id: res.insertId, 
        newGame 
        });
    });
};

module.exports = Game;