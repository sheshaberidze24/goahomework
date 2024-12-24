def calculate_winner(player1, player2):
    def calculate_score(player):
        power = player[0]
        speed = player[1]
        intelligence = player[2]
        return power * 1 + speed * 2 + ((power + speed) * intelligence) / 10
    
    score1 = calculate_score(player1)
    score2 = calculate_score(player2)
    
    if score1 > score2:
        return "Player 1 Wins"
    elif score2 > score1:
        return "Player 2 Wins"
    else:
        return "It's a Tie"

player1 = [3, 4, 5]  # Player 1: [ძალა, სისწრაფე, ინტელექტი]
player2 = [4, 3, 4]  # Player 2: [ძალა, სისწრაფე, ინტელექტი]

result = calculate_winner(player1, player2)
print(result)