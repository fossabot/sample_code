n = [[1, 2, 3], [4, 5, 6, 7, 8, 9]]
# This flattens the list
def flatten(lists):
  results = []
  for items in lists:
    for numbers in items:
      results.append(numbers)
   return results
# FIXME: more stuff


print flatten(n)
