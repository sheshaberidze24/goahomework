import random

user_wins = 0
computer_wins = 0

options = ["rock", "paper", "scissors"]

while True:
    # მომხმარებლის შეყვანის მოთხოვნა, lowercase ფორმატში გადაყვანით.
    user_input = input("Type Rock/Paper/Scissors or Q to quit: ").lower()
    if user_input == "q":  # თუ მომხმარებელი 'q'-ს აკრეფს, ციკლი წყდება.
        break

    if user_input not in options:  # თუ შეყვანილი ტექსტი არ არის სწორი არჩევანი, ციკლი გრძელდება.
        continue

    random_number = random.randint(0, 2)
    computer_pick = options[random_number]
    print("Computer picked", computer_pick + ".") 

    # მომხმარებლის გამარჯვების პირობები თითოეული არჩევანისთვის.
    if user_input == "rock" and computer_pick == "scissors":
        print("You won!")  
        user_wins += 1 

    elif user_input == "paper" and computer_pick == "rock":
        print("You won!")
        user_wins += 1

    elif user_input == "scissors" and computer_pick == "paper":
        print("You won!")
        user_wins += 1

    else:  # ყველა სხვა შემთხვევაში (მათ შორის ფრე), კომპიუტერი იგებს.
        print("You lost!") 
        computer_wins += 1

# თამაშის შედეგების შეჯამება ციკლის დასრულების შემდეგ.
print("You won", user_wins, "times.")
print("The computer won", computer_wins, "times.")
print("Goodbye!")
