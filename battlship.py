from random import randint

def print_board(board):
  for row in board:
    print " ".join(row)

print_board(board)

def random_row(board):
  return randint(0, len(board) - 1)

def random_col(board):
  return randint(0, len(board[0]) - 1)

ship_row = random_row(board)
ship_col = random_col(board)
print ship_row
print ship_col

# This handles the outcome of each guess
  if guess_row == ship_row and guess_col == ship_col:
    print "WINNER! You sank my battleship!"
    break
  else:
    if guess_row not in range(5) or \
      guess_col not in range(5):
      print "Out of range!"
    elif board[guess_row][guess_col] == "X":
      print( "You guessed that one already." )
    else:
      print "You missed my battleship!"
      board[guess_row][guess_col] = "X"
    if (turn == 3):
      print "Game Over"
    print_board(board)
