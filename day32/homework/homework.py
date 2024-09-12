# codewars
# 1

def find_outlier(int):
    odds = [x for x in int if x%2!=0]
    evens= [x for x in int if x%2==0]
    return odds[0] if len(odds)<len(evens) else evens[0]

# 2

def duplicate_encode(word):
    word = word.lower()
    st = ""
    dict = {}
    for i in word:
        dict[i] = dict.get(i,0) + 1
    for i in word:
        if dict[i] > 1:
            st += ")"
        else:
            st += "("
    return st