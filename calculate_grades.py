grades = [100, 100, 90, 40, 80, 100, 85, 70, 90, 65, 90, 85, 53.5]


def print_grades(grades_input):
  """TODO: post grades to endpoint"""
  for grade in grades_input:
    print grade


def grades_sum(scores):
  total = 0
  for score in scores:
    total += score
  return total


def grades_average(grades_input):
  """FIXME: limit float to 2"""
  sum_of_grades = grades_sum(grades_input)
  average = sum_of_grades / float(len(grades_input))
  return average


def grades_variance(scores):
  average = grades_average(scores)
  variance = 0
  for grade in scores:
    sq_df = (average - grade) ** 2
    variance += sq_df
  new_variance = variance / len(scores)
  return new_variance


def grades_std_deviation(variance):
  return variance ** 0.5


variance = grades_variance(grades)


print grades_variance(grades)
print grades_std_deviation(variance)
print print_grades(grades)
print grades_sum(grades)
print grades_average(grades)
