def check_winner(game_board):
    for row in game_board:
        if row[0] == row[1] == row[2] == row[3] and row[0] != "":
            return "Player "+ row[0] + " wins!"
        
        if row[1] == row[2] == row[3] == row[4] and row[1] != "":
            return "Player "+ row[0] + " wins!"
        
        if row[2] == row[3] == row[4] == row[5] and row[2] != "":
            return "Player "+ row[0] + " wins!"
        
        if row[3] == row[4] == row[5] == row[6] and row[3] != "":
            return "Player "+ row[0] + " wins!"
        
        if row[4] == row[5] == row[6] == row[7] and row[4] != "":
            return "Player "+ row[0] + " wins!"
    
    for column in range(4):
        if (game_board[0][column] == game_board[1][column] == game_board[2][column] == game_board[2][column] and game_board[0][column] != ""):
            return "Player " + game_board[0][column] + " wins!"
    
    for row in game_board:
        for cell in row:
            if cell == "":
                return "The game is still ongoing."
    else:
        return "It's a draw!"

print (check_winner([ [ 'X', "O", "X", 'X', "O", "X", 'X', "O"], [ 'X', "O", "X", 'X', "O", "X", 'X', "O"],[ 'X', "O", "X", 'X', "O", "X", 'X', "O"], [ 'X', "O", "X", 'X', "O", "X", 'X', "O"], [ 'X', "O", "X", 'X', "O", "X", 'X', "O"], [ 'X', "O", "X", 'X', "O", "X", 'X', "O"], [ 'X', "O", "X", 'X', "O", "X", 'X', "O"], [ 'X', "O", "X", 'X', "O", "X", 'X', "O"]]))