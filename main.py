def oddNums(number):
    for i in range(1, number + 1):
        num = 1
        for j in range(i):
            print(num, end=" ")
            num += 2
        print()

userInput = int(input("Enter a number: "))
oddNums(userInput)

