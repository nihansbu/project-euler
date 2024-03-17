max_palindrome = 0

for i in range(999, 99, -1):
    # Outer loop: Iterate from 999 to 100
    
    for j in range(i, 99, -1):
        # Inner loop: Iterate from i to 100
        
        product = i * j
        
        if product <= max_palindrome:
            # If the product is less than or equal to the current maximum palindrome, exit the inner loop
            break
        
        if str(product) == str(product)[::-1]:
            # If the product is a palindrome, update the maximum palindrome
            max_palindrome = product

# Print the maximum palindrome
# 906609
print(max_palindrome)
