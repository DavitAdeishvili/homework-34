def check_winner(game_board):
    for row in game_board:
        if row[0] == row[1] == row[2] and row[0] != "":
            return "Player "+ row[0] + " wins!"
    
    for column in range(3):
        if (game_board[0][column] == game_board[1][column] == game_board[2][column] and game_board[0][column] != ""):
            return "Player " + game_board[0][column] + " wins!"
    
    if game_board[0][0] == game_board[1][1] == game_board[2][2] and game_board[0][0] != "":
        return "Player " + game_board[0][0] + " wins!"
    
    if game_board[0][2] == game_board[1][1] == game_board[2][0] and game_board[0][2] != "":
        return "Player " + game_board[0][2] + "wins!"
    
    for row in game_board:
        for cell in row:
            if cell == "":
                return "The game is still ongoing."
    else:
        return "It's a draw!"

print (check_winner([ [ 'X', "O", ""], ["X", "X", "O"], ["", "", ""] ]))