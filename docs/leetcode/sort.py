# insertion sort - O(n2)
# all elements on the left are sorted
# should be avoided
# a quicker version
def insertion_sort2(A):
    # sorted from the second element
    for i in range(1, len(A)):
        # use a temp value to avoid 3 assignment
        cur_num = A[i]
        # step -1: moving to the left
        for j in range(i-1, -1, -1):
            if A[j] > cur_num:
                A[j+1] = A[j]
            else:
                A[j+1] = cur_num
                break
    return A


def insertion_sort(A):
    for i in range(1, len(A)):
        for j in range(i-1, -1, -1):
            if A[j] > A[j+1]:
                A[j], A[j+1] = A[j+1], A[j]
            else:
                break
    return A

# selection sort - O(n2)


def selection_sort(A):
    for i in range(0, len(A)-1):
        min = A[i]
        min_index = i
        for j in range(i+1, len(A)):
            if A[j] < min:
                min = A[j]
                min_index = j
        if min_index != i:
            A[i], A[min_index] = A[min_index], A[i]
    return A

# bubble sort - O(n2)


def bubble_sort(A):
    for i in range(0, len(A) - 1):
        for j in range(0, len(A) - 1 - i):
            if A[j+1] < A[j]:
                A[j+1], A[j] = A[j], A[j+1]
    return A

# merge sort
# recursive
# divide-and-conquer
# O(nlogn) - log n merge steps * n work for each merge step


def merge_sort(A):
    # important! for recursive method, there must be a base case!
    if len(A) > 1:
        index_middle = len(A)//2
        L = A[:index_middle]
        R = A[index_middle:]
        merge_sort(L)
        merge_sort(R)

        i = j = k = 0

        while i < len(L) and j < len(R):
            if L[i] < R[j]:
                A[k] = L[i]
                i += 1
            else:
                A[k] = R[j]
                j += 1
            k += 1

        while i < len(L):
            A[k] = L[i]
            i += 1
            k += 1

        while j < len(R):
            A[k] = R[j]
            j += 1
            k += 1
    return A

# iterative version


def merge_sort2(A):
    width = 1
    n = len(A)

    while width < n:
        l = 0
        while l < n:
            r = min(l + (width * 2), n)
            m = min(l + width, n)

            L = A[l:m]
            R = A[m:r]

            k = l
            i = 0
            j = 0
            while i < len(L) and j < len(R):
                if L[i] < R[j]:
                    A[k] = L[i]
                    i += 1
                else:
                    A[k] = R[j]
                    j += 1
                k += 1

            while i < len(L):
                A[k] = L[i]
                i += 1
                k += 1

            while j < len(R):
                A[k] = R[j]
                j += 1
                k += 1

            l += width * 2

        width *= 2
    return A


# quick sort
# recursive
# average O(nlogn) - bad pivot would be almost O(n2)
# the selection of a pivot is very important(less value assignment would be applied)
def quick_sort(A):
    if len(A) <= 1:
        return A

    pivot = A[len(A)//2]
    left = [x for x in A if x < pivot]
    middle = [x for x in A if x == pivot]
    right = [x for x in A if x > pivot]

    return quick_sort(left) + middle + quick_sort(right)

# iterative version


def iterative_quick_sort(arr):
    # Initialize the stack with the full array's bounds
    stack = [(0, len(arr) - 1)]

    while stack:
        left, right = stack.pop()
        if left < right:
            pivot_index = partition(arr, left, right)
            stack.append((left, pivot_index - 1))  # Push the left sub-array
            stack.append((pivot_index + 1, right))  # Push the right sub-array

    return arr


def partition(arr, low, high):
    pivot = arr[high]
    i = low - 1  # Index of the smaller element

    # 如果小于pivot，就挪到pivot前面
    for j in range(low, high):
        if arr[j] < pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]

    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1


# 寻找有序数组中的第k小数

A = [8, 3, 2, 5, 1, 7]
B = [1]
C = [3, 2, 1, 5, 4, 6, 9]
print(iterative_quick_sort(A))
