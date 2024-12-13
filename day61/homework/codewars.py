# codewars 8kyu interpreters: HQ9+
def HQ9(code):
    if code == 'H':
        return 'Hello World!'
    elif code == 'Q':
        return 'Q'
    elif code == '9':
        song = []
        for i in range(99, 0, -1):
            if i > 1:
                song.append(f"{i} bottles of beer on the wall, {i} bottles of beer.")
                song.append(f"Take one down and pass it around, {i-1} {'bottle' if i-1 == 1 else 'bottles'} of beer on the wall.")
            else:
                song.append("1 bottle of beer on the wall, 1 bottle of beer.")
                song.append("Take one down and pass it around, no more bottles of beer on the wall.")
        song.append("No more bottles of beer on the wall, no more bottles of beer.")
        song.append("Go to the store and buy some more, 99 bottles of beer on the wall.")
        return "\n".join(song)
    else:
        return None
# codewars Who likes it?

def likes(names):

    textToReturn = ""

    if (len(names) == 0):
        textToReturn = "no one likes this"
    elif (len(names) == 1):
        textToReturn = str(names[0]) + " likes this"
    elif (len(names) > 1 and len(names) < 4):
        for name in range(0, len(names) - 1):
            textToReturn = textToReturn + names[name] + ", "
        textToReturn = textToReturn[:-2]
        textToReturn = textToReturn + " and " + str(names[len(names) - 1]) + " like this"
    else:
        for name in range(0, 2):
            textToReturn = textToReturn + names[name] + ", "
        textToReturn = textToReturn[:-2]
        textToReturn = textToReturn + " and " + str(len(names)-2) + " others like this"
    return textToReturn