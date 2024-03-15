# <p>If we list all the natural numbers below $10$ that are multiples of $3$ or $5$, we get $3, 5, 6$ and $9$. The sum of these multiples is $23$.</p>
# <p>Find the sum of all the multiples of $3$ or $5$ below $1000$.</p>

ceiling = 1000
multiples = [3, 5]

def sum_of_multiples(ceiling, multiples):
    sum = 0
    for i in range(ceiling):
        for m in multiples:
            if i % m == 0:
                sum += i
                break
    return sum

# Solution: 233168
print(sum_of_multiples(ceiling, multiples))