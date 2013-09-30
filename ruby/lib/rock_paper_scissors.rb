class Game

  PAIRS = {
    rock:     { beats: :scissors },
    paper:    { beats: :rock },
    scissors: { beats: :paper }
  }.freeze

  # PAIRS = {
  #   rock: {rock: [0,0], paper: [-1,1], scissors: [1,-1], lizard: [1,-1], spock: [-1,1]},
  #   paper: {rock: [1,-1], paper: [0,0], scissors: [-1,1], lizard: [-1,1], spock: [1,-1]},
  #   scissors: {rock: [-1,1], paper: [1,-1], scissors: [0,0], lizard: [1,-1], spock: [-1,1]},
  #   lizard: {rock: [-1,1], paper: [1,-1],scissors: [-1,1],lizard: [0,0], spock: [1,-1]},
  #   spock: {rock: [1,-1], paper: [-1,1], scissors: [1,-1], lizard: [-1,1], spock: [0,0]}

  # }

  def initialize(player1, player2)
    @player1, @player2 = player1, player2
  end

  def winner
    return nil if same_pick?

    if PAIRS[@player1.pick][:beats] == @player2.pick
      @player1
    else
      @player2
    end
  end

  private

  def same_pick?
    @player1.pick == @player2.pick
  end

end

class Player

  attr_reader :pick, :name

  def initialize(name)
    @name = name
  end

  def picks(pick)
    @pick = pick
  end

end