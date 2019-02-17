### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby


require_relative('card.rb')
class CardGame


  def checkforAce(card)
    if card.value = 1 # it should be "if card.value == 1" otherwise we are setting the card.value is set to 1   therefore it will always return true.
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2)  #def highest_card(card1, card2) (typo mistakes)
  if card1.value > card2.value
    return card.name #card1 in the card class name is not defined therefore not available.
  else
    card2 #card2.name
  end
end
end  #one too many end's

def self.cards_total(cards) #class functions should have parameters passed through them
  total #total is not defined in any way, it should be "total = 0"
  for card in cards
    total += card.value
    return "You have a total of" + total #total here is an integer. correct syntax is "You have a total of #{total}"
  end
end

#missing end to close the class
```
