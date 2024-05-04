# def list(numbers):
#     for i in numbers:
#         if i == min(numbers):
#             minimal = i
#             print(minimal)
# list([5,2,3,4,5,2])

#classwork 2
index = 0
def removeMax(list):
    for i in list:
        if i == max(list):
            maximal = i
            print(maximal)
    list.remove(maximal)
removeMax([1,2,3,4,5,6,7])

