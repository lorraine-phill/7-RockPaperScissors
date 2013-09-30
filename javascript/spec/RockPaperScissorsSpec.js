describe("Rock-Paper-Scissors", function() {

  beforeEach(function() {

    player1 = new Player();
    player2 = new Player();
    game = new Game(player1, player2);

  });

  describe('winning and losing', function() {

    describe('rock', function() {

      it('should beat scissors', function() {

        player1.picks('rock');
        player2.picks('scissors');
        expect(game.winner()).toBe(player1);

      });

      it('should lose to paper', function() {

        player1.picks('rock');
        player2.picks('paper');
        expect(game.winner()).toBe(player2);

      });

      it('should beat lizard', function() {
        player1.picks('lizard');
        player2.picks('rock');
        expect(game.winner()).toBe(player2);
      });

    });

    describe('spock', function() {

      it ('should beat rock', function() {
        player1.picks('spock');
        player2.picks('rock');
        expect(game.winner()).toBe(player1);
      });

      it('should beat scissors', function() {
        player1.picks('spock');
        player2.picks('scissors');
        expect(game.winner()).toBe(player1);
      });
    });

    describe('paper', function() {

      it('should beat rock', function() {
        player1.picks('paper');
        player2.picks('rock');
        expect(game.winner()).toBe(player1);
        });

      it('should lose to scissors', function() {
        player1.picks('paper');
        player2.picks('scissors');
        expect(game.winner()).toBe(player2);

      });

      it('should beat spock', function() {
        player1.picks('paper');
        player2.picks('spock');
        expect(game.winner()).toBe(player1)
      });

    });

    describe('scissors', function() {
      it('should beat paper', function() {
        player1.picks('scissors');
        player2.picks('paper');
        expect(game.winner()).toBe(player1);

      });

      it('should beat lizard', function() {
        player1.picks('scissors');
        player2.picks('lizard');
        expect(game.winner()).toBe(player1);   
      });

      it('should lose to rock', function() {
        player1.picks('scissors');
        player2.picks('rock');
        expect(game.winner()).toBe(player2);
      });

    });

    describe('lizard', function(){
      
      it('should beat spock', function(){
        player1.picks('lizard');
        player2.picks('spock');
        expect(game.winner()).toBe(player1);
      });

    });
 });

  describe('draws', function() {

    describe('any identical picks', function() {

      it('should result in no winner', function() {

        var drawGameResults = ['rock', 'paper', 'scissors'].map(function(x) {
          player1.picks(x);
          player2.picks(x);
          return game.winner();
        });

        expect(drawGameResults).toEqual([null, null, null]);
      });
    });

  });

  describe('It should display a winning player message', function(){
    it('lizard poisons spock', function(){
      player1.picks('spock');
      player2.picks('lizard');
      expect(game.showWinner()).toEqual('lizard poisons spock');
    });

    it('scissors cut paper', function(){
      player1.picks('scissors');
      player2.picks('paper');
      expect(game.showWinner()).toEqual('scissors cut paper');
    });
    
    it('paper covers rock', function(){
      player1.picks('paper');
      player2.picks('rock');
      expect(game.showWinner()).toEqual('paper covers rock');
    });

    it('rock crushes lizard', function(){
      player1.picks('rock');
      player2.picks('lizard');
      expect(game.showWinner()).toEqual('rock crushes lizard');
    });

    it('lizard poisons spock', function(){
      player1.picks('spock');
      player2.picks('lizard');
      expect(game.showWinner()).toEqual('lizard poisons spock');
    });

    it('spock smashes scissors', function(){
      player1.picks('scissors');
      player2.picks('spock');
      expect(game.showWinner()).toEqual('spock smashes scissors');
    });

    it('scissors decapitate lizard', function(){
      player1.picks('scissors');
      player2.picks('lizard');
      expect(game.showWinner()).toEqual('scissors decapitate lizard');
    });

    it('paper disproves spock', function(){
      player1.picks('spock');
      player2.picks('paper');
      expect(game.showWinner()).toEqual('paper disproves spock');
    });

    it('spock vaporizes rock', function(){
      player1.picks('spock');
      player2.picks('rock');
      expect(game.showWinner()).toEqual('spock vaporizes rock');
    });

    it('rock breaks scissors', function(){
      player1.picks('scissors');
      player2.picks('rock');
      expect(game.showWinner()).toEqual('rock breaks scissors');
    });

    it('its a draw!', function(){
      player1.picks('scissors');
      player2.picks('scissors');
      expect(game.showWinner()).toEqual('Its a draw!');
    });

  });

});