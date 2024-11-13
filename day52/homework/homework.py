import math

def count_area(shape, *args):
    if shape == "rectangle":
        if len(args) != 2:
            return "მართკუთხედი მოითხოვს 2 არგუმენტს (სიგანე და სიმაღლე)."
        width, height = args
        return width * height

    elif shape == "circle":
        if len(args) != 1:
            return "წრე მოითხოვს 1 არგუმენტს (რადიუსი)."
        radius = args[0]
        return math.pi * (radius ** 2)

    elif shape == "triangle":
        if len(args) != 3:
            return "სამკუთხედი მოითხოვს 3 არგუმენტს (გვერდები a, b, c)."
        a, b, c = args
        s = (a + b + c) / 2  # ნახევრად პერიმეტრი
        return math.sqrt(s * (s - a) * (s - b) * (s - c))

    else:
        return "უცნობი ფორმის ტიპი."