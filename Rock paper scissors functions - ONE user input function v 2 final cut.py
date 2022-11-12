'''
Make a two-player Rock-Paper-Scissors game. (Hint: Ask for player plays (using input), compare them, 
print out a message of congratulations to the winner, and ask if the players want to start a new game)

Remember the rules:

Rock beats scissors
Scissors beats paper
Paper beats rock
'''
#I need to be able to clear the screen so added a clear() function from https://www.geeksforgeeks.org/clear-screen-python/
from os import system, name

def clear(): 
  
    # for windows 
    if name == 'nt': 
        _ = system('cls') 
  
    # for mac and linux(here, os.name is 'posix') 
    else: 
        _ = system('clear')
        
#This code is used to get the user's input after the first initial introduction
def user_input(player):
    acceptable_answers = ('rock', 'paper', 'scissors')
    user="null"
    while user not in acceptable_answers:
        user = input(player + ", you are up, what's it going to be, rock, paper or scissors? ")
        user = user.lower()
    return (user, player)

#This code is the logic to determine who wins in the game
def evaluate_answer(user_input1,user_input2,player_eval1,player_eval2):
    if user_input1 == user_input2:
        print("You both chose " + user1+"!" + "\nIt's a tie!" + " Let's try again")
        new_input=user_input(player_eval1)
        user_input1=new_input[0]
        clear()
        new_input=user_input(player_eval2)
        user_input2=new_input[0]
        evaluate_answer(user_input1,user_input2,player_eval1,player_eval2)

    #rock vs scissors
    elif user_input1 == "rock" and user_input2=="scissors":
        print ("Rock beats scissors! " + player_eval1 + " you win!")

    elif user_input1 == 'scissors' and user_input2 == "rock":
        print ("Rock beats scissors! " + player_eval2 + " you win!")

    #scissors vs paper    
    elif user_input1 == "scissors" and user_input2 == "paper":
        print ("Scissors beats paper! " + player_eval1 + " you win!")

    elif user_input1 == "paper" and user_input2 == "scissors":
        print ("Scissors beats Paper! " + player_eval2 + " you win")
    
    #paper vs Rock
    elif user_input1 == "paper" and user_input2 == "rock":
        print ("Paper beats rock! " + player_eval1 + " you win!")

    elif user_input1 == "rock" and user_input2 == "paper":
        print ("Paper beats rock! " + player_eval2 + " you win!")

    return (user_input1,user_input2,player_eval1,player_eval2)

def start():
    player1 = input("Player one, What is your name? ")
    get_user_input1=user_input(player1)
    user_input1=get_user_input1[0]
    clear()
    player2= input("Player two, What is your name? ")
    get_user_input2=user_input(player2)
    user_input2=get_user_input2[0]
    return (player1, user_input1, player2, user_input2)
print("Welcome to the Rock Paper Scissors Game!")
print("\nThe rules are simple, each player picks one of the three items and the computer will determine who wins.")
print("Rock beats scissors\nScissors beats paper\nPaper beats rock")

#This function calls the initial input routine for the game getting theplayer's names
#and then breaking the return from the function into the variables we need.
userinput=start()
player1=userinput[0]
user1=userinput[1]
player2=userinput[2]
user2=userinput[3]

evaluate_answer(user1,user2,player1,player2)

final_response='y'
while final_response == 'y':
    final_response=input("Would you guys like to play again? (Y/N) ")
    final_response=final_response.lower()
    if final_response=="y":
        clear()
        userinput1=user_input(player1)
        player1=userinput1[1]
        user1=userinput1[0]
        clear()
        userinput2=user_input(player2)
        player2=userinput2[1]
        user2=userinput2[0]
        evaluate_answer(user1,user2,player1,player2)
    else:
        print('Thank you for playing the Rock, Paper, Scissors game!!!!!')
        quit()
