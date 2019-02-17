require("minitest/autorun")
require("minitest/rg")
require_relative("../testing_task_2")
require_relative("../card")



class TestCardGame < MiniTest::Test

  def setup
    @card_1 = Card.new('heart', 7)
    @card_2 = Card.new('spades', 1)
    @cards = [@card_1, @card_2]
    @game = CardGame.new()
  end

  def test_checkforAce__false()
    result = @game.checkforAce(@card_1)
    assert_equal(false, result)
  end

  def test_checkforAce__true()
    result = @game.checkforAce(@card_2)
    assert_equal(true, result)
  end

  def test_highest_card()
    result = @game.highest_card(@card_1, @card_2)
    assert_equal(@card_1, result)
  end

  def test_cards_total()
    result = CardGame.cards_total(@cards)
    assert_equal("You have a total of 8", result)
  end

end
