// src/data/mathematicsQuestions.js
export const mathematicsQuestions = [
  {
    id: 1,
    subject: 'Mathematics',
    question: 'Without using table, evaluate (243)^(1/5) * (0.09)^(-1) * 125^(-1/3)',
    options: {
      A: '4',
      B: '1/4',
      C: '3',
      D: '4/3'
    },
    correctAnswer: 'A',
    explanation: '(243)^(1/5) = 3, (0.09)^(-1) = 100/9, 125^(-1/3) = 1/5\n3 × 100/9 × 1/5 = 300/45 = 20/3 = 4\nAnswer: A (4)'
  },
  {
    id: 2,
    subject: 'Mathematics',
    question: 'Three consecutive positive integers a, b and c are such that b² = 4(a + c). Find the value of c.',
    options: {
      A: '6',
      B: '3',
      C: '9',
      D: '12'
    },
    correctAnswer: 'A',
    explanation: 'Let a = n, b = n+1, c = n+2\n(n+1)² = 4(n + n+2) = 4(2n+2) = 8n+8\nn² + 2n + 1 = 8n+8 → n² - 6n - 7 = 0 → (n-7)(n+1) = 0\nn = 7, so c = 9. Answer: C (9)'
  },
  {
    id: 3,
    subject: 'Mathematics',
    question: 'Find the principal which amounts to ₦4,400 at simple interest in 5 years at 2% per annum.',
    options: {
      A: '₦3,800',
      B: '₦5,200',
      C: '₦5,000',
      D: '₦4,000'
    },
    correctAnswer: 'D',
    explanation: 'A = P(1 + rt)\n4400 = P(1 + 0.02×5) = P(1 + 0.1) = 1.1P\nP = 4400/1.1 = 4000\nAnswer: D (₦4,000)'
  },
  {
    id: 4,
    subject: 'Mathematics',
    question: 'The sum of the first 20 terms of the progression 3, 6, 12, ... is',
    options: {
      A: '3(2²¹ - 1)',
      B: '3(2²⁰ - 1)',
      C: '3(2²⁰ + 1)',
      D: '3(2²¹ + 1)'
    },
    correctAnswer: 'B',
    explanation: 'This is a GP with a=3, r=2.\nSₙ = a(rⁿ - 1)/(r-1) = 3(2²⁰ - 1)/(2-1) = 3(2²⁰ - 1)\nAnswer: B (3(2²⁰ - 1))'
  },
  {
    id: 5,
    subject: 'Mathematics',
    question: 'Mr. Robson bought bags of orange for ₦2,500 each. He sold them for ₦90,000 at a loss of 20%. How many bags of orange did he buy?',
    options: {
      A: '60',
      B: '80',
      C: '50',
      D: '45'
    },
    correctAnswer: 'D',
    explanation: 'Selling price = 80% of cost price (20% loss). Cost price = 90,000/0.8 = 112,500\nNumber of bags = 112,500/2,500 = 45\nAnswer: D (45)'
  },
  {
    id: 6,
    subject: 'Mathematics',
    question: 'The second and fifth terms of a geometric progression are 21 and 567 respectively. Find the first term and the common ratio of the progression.',
    options: {
      A: '3, 7',
      B: '7, 3',
      C: '-7, 3',
      D: '-3, 7'
    },
    correctAnswer: 'B',
    explanation: 'T₂ = ar = 21, T₅ = ar⁴ = 567\nar⁴/ar = r³ = 567/21 = 27 → r = 3\na = 21/3 = 7\nAnswer: B (7, 3)'
  },
  {
    id: 7,
    subject: 'Mathematics',
    question: 'Tune bought a house for ₦1,250,000 and spent ₦350,000 to renovate it. He then sold the house for ₦2,000,000. What is the percentage gain?',
    options: {
      A: '40%',
      B: '65%',
      C: '35%',
      D: '32%'
    },
    correctAnswer: 'A',
    explanation: 'Total cost = 1,250,000 + 350,000 = 1,600,000\nProfit = 2,000,000 - 1,600,000 = 400,000\nPercentage = (400,000/1,600,000) × 100 = 25%'
  },
  {
    id: 8,
    subject: 'Mathematics',
    question: 'List the integral values of x which satisfy the inequality -2 < 7 - 3x ≤ 10',
    options: {
      A: '-1, 0, 1, 2',
      B: '-2, 0, 1',
      C: '1, 2, 3',
      D: '0, 1, 2'
    },
    correctAnswer: 'A',
    explanation: '-2 < 7 - 3x ≤ 10\n-9 < -3x ≤ 3\n-1 ≤ x < 3 (dividing by -3 flips signs)\nIntegral values: -1, 0, 1, 2\nAnswer: A (-1, 0, 1, 2)'
  },
  {
    id: 9,
    subject: 'Mathematics',
    question: 'In a class, 120 students speak English or French or both. 70 speak English and 55 speak French. How many speak English but not French?',
    options: {
      A: '45',
      B: '50',
      C: '55',
      D: '60'
    },
    correctAnswer: 'A',
    explanation: 'Total = E + F - Both\n120 = 70 + 55 - Both → Both = 125 - 120 = 5\nEnglish only = 70 - 5 = 65'
  },
  {
    id: 10,
    subject: 'Mathematics',
    question: 'The lengths of the sides of a right-angled triangle are y m, (3y - 1) m and (3y + 1) m. Find y.',
    options: {
      A: '12',
      B: '9',
      C: '8',
      D: '4'
    },
    correctAnswer: 'D',
    explanation: 'By Pythagoras: (3y+1)² = y² + (3y-1)²\n9y² + 6y + 1 = y² + 9y² - 6y + 1\n9y² + 6y + 1 = 10y² - 6y + 1 → 0 = y² - 12y → y(y-12) = 0\ny = 12\nAnswer: A (12)'
  },
  {
    id: 11,
    subject: 'Mathematics',
    question: 'Uche, Adamu and Ope share profit on a business deal. Uche received 1/2 of the profit and Adamu received 1/2 of the remainder. If Ope received the remaining ₦12,000, how much profit did they share?',
    options: {
      A: '₦54,000',
      B: '₦58,000',
      C: '₦48,000',
      D: '₦42,000'
    },
    correctAnswer: 'C',
    explanation: 'Let total profit = x\nUche = x/2, Adamu = 1/2(x/2) = x/4\nRemaining = x - x/2 - x/4 = x/4 = 12,000\nx = 48,000\nAnswer: C (₦48,000)'
  },
  {
    id: 12,
    subject: 'Mathematics',
    question: 'A ladder resting on a vertical wall makes an angle whose tangent is 2.5 with the ground. If the distance between the foot of the ladder and the wall is 60cm, what is the length of the ladder?',
    options: {
      A: '2m',
      B: '1.6m',
      C: '0.8m',
      D: '3m'
    },
    correctAnswer: 'B',
    explanation: 'tan θ = height/base = 2.5 = h/0.6 → h = 1.5m\nLength = √(1.5² + 0.6²) = √(2.25 + 0.36) = √2.61 = 1.62m ≈ 1.6m\nAnswer: B (1.6m)'
  },
  {
    id: 13,
    subject: 'Mathematics',
    question: 'Three students share a bag of garri in such a way that the first student took 1/2 of the garri and the second 1/2 of the remainder. What fraction of the bag of garri did the third student take?',
    options: {
      A: '3/16',
      B: '2/9',
      C: '1/2',
      D: '4/15'
    },
    correctAnswer: 'A',
    explanation: 'First took 1/2, remainder = 1/2\nSecond took 1/2 of 1/2 = 1/4\nRemaining = 1 - 1/2 - 1/4 = 1/4\nThird took 1/4\nAnswer: C (1/4)'
  },
  {
    id: 14,
    subject: 'Mathematics',
    question: 'Solve the simultaneous linear equations 2x + 5y = 11, 7x + 4y = 2',
    options: {
      A: '27/34, 34/27',
      B: '-34/27, 73/27',
      C: '1/2, 1/2',
      D: '1/2, 1/2'
    },
    correctAnswer: 'B',
    explanation: 'Solving simultaneously:\n2x + 5y = 11 × 4: 8x + 20y = 44\n7x + 4y = 2 × 5: 35x + 20y = 10\nSubtracting: 27x = -34 → x = -34/27\ny = 73/27\nAnswer: B (-34/27, 73/27)'
  },
  {
    id: 15,
    subject: 'Mathematics',
    question: 'If x + 1 is a factor of x³ + 3x² + Kx + 4, find the value of K.',
    options: {
      A: '6',
      B: '4',
      C: '-4',
      D: '3'
    },
    correctAnswer: 'A',
    explanation: 'If x+1 is a factor, then f(-1) = 0\n(-1)³ + 3(-1)² + K(-1) + 4 = 0\n-1 + 3 - K + 4 = 0 → 6 - K = 0 → K = 6\nAnswer: A (6)'
  },
  {
    id: 16,
    subject: 'Mathematics',
    question: 'Paul and his friend Peter went to buy an article costing ₦600. Peter had 10% of the cost and Paul had 40% of the remainder. How much did they have altogether?',
    options: {
      A: '₦320',
      B: '₦440',
      C: '₦276',
      D: '₦196'
    },
    correctAnswer: 'B',
    explanation: 'Peter = 10% of 600 = 60\nRemainder = 600 - 60 = 540\nPaul = 40% of 540 = 216\nTotal = 60 + 216 = 276'
  },
  {
    id: 17,
    subject: 'Mathematics',
    question: 'Find all values of x satisfying the inequality -14 ≤ 4 - 3x ≤ 31',
    options: {
      A: '-6 ≤ x ≤ 9',
      B: '-9 ≤ x ≤ 6',
      C: '5 ≤ x ≤ 8',
      D: '6 ≤ x ≤ 12'
    },
    correctAnswer: 'B',
    explanation: '-14 ≤ 4 - 3x ≤ 31\n-18 ≤ -3x ≤ 27\n-9 ≤ x ≤ 6 (dividing by -3 flips signs)\nAnswer: B (-9 ≤ x ≤ 6)'
  },
  {
    id: 18,
    subject: 'Mathematics',
    question: 'What factor is common to all the expressions x² - x, 2x² - x - 1 and x² - 1?',
    options: {
      A: '(2x - 1)',
      B: '(x + 1)',
      C: '(x - 1)',
      D: '(2x + 3)'
    },
    correctAnswer: 'C',
    explanation: 'x² - x = x(x-1)\n2x² - x - 1 = (2x+1)(x-1)\nx² - 1 = (x-1)(x+1)\nCommon factor is (x-1)\nAnswer: C (x-1)'
  },
  {
    id: 19,
    subject: 'Mathematics',
    question: 'Find the sum to infinity of the series 3 + 2 + 4/3 + 8/9 + 16/27 + ...',
    options: {
      A: '270',
      B: '9',
      C: '27',
      D: '90'
    },
    correctAnswer: 'B',
    explanation: 'This is a GP with a=3, r=2/3\nS∞ = a/(1-r) = 3/(1-2/3) = 3/(1/3) = 9\nAnswer: B (9)'
  },
  {
    id: 20,
    subject: 'Mathematics',
    question: 'Find the number of sides of a regular polygon whose interior angle is twice the exterior angle.',
    options: {
      A: '5',
      B: '6',
      C: '8',
      D: '9'
    },
    correctAnswer: 'B',
    explanation: 'Interior angle = 2 × Exterior angle\nExterior = 360/n, Interior = 180 - 360/n\n180 - 360/n = 2(360/n)\n180 - 360/n = 720/n → 180 = 1080/n → n = 6\nAnswer: B (6)'
  },
  {
    id: 21,
    subject: 'Mathematics',
    question: 'Find the value of p, if the line which passes through (-1, -p) and (-2p, 2) is parallel to the line 2y + 8x - 17 = 0',
    options: {
      A: '6/7',
      B: '4/7',
      C: '3/4',
      D: '-6/7'
    },
    correctAnswer: 'B',
    explanation: 'Slope of parallel line: 2y + 8x - 17 = 0 → y = -4x + 17/2, slope = -4\nSlope through points = (2+p)/(-2p+1) = -4\n2+p = -4(-2p+1) = 8p-4\np+2 = 8p-4 → 6 = 7p → p = 6/7\nAnswer: A (6/7)'
  },
  {
    id: 22,
    subject: 'Mathematics',
    question: 'Obtain a maximum value of the function f(x) = x³ - 12x + 11',
    options: {
      A: '-15',
      B: '27',
      C: '15',
      D: '20'
    },
    correctAnswer: 'B',
    explanation: 'f\'(x) = 3x² - 12 = 0 → x = ±2\nf(-2) = -8 + 24 + 11 = 27 (maximum)\nf(2) = 8 - 24 + 11 = -5 (minimum)\nMaximum = 27\nAnswer: B (27)'
  },
  {
    id: 23,
    subject: 'Mathematics',
    question: 'If y = 5cos(-6x), dy/dx is',
    options: {
      A: '30sin(-6x)',
      B: '5sin(-6x)',
      C: '-30sin(-6x)',
      D: '-30cos(-6x)'
    },
    correctAnswer: 'C',
    explanation: 'd/dx[5cos(-6x)] = 5 × (-sin(-6x)) × (-6) = 30sin(-6x)\nAnswer: A (30sin(-6x))'
  },
  {
    id: 24,
    subject: 'Mathematics',
    question: 'Find the variance of the numbers k, k+1, k+2',
    options: {
      A: '1/4',
      B: '3',
      C: '1/2',
      D: '1'
    },
    correctAnswer: 'D',
    explanation: 'Mean = (3k+3)/3 = k+1\nVariance = [(k-k-1)² + (k+1-k-1)² + (k+2-k-1)²]/3\n= [1 + 0 + 1]/3 = 2/3'
  },
  {
    id: 25,
    subject: 'Mathematics',
    question: 'At what value of x is the function y = x² - 6x - 7 minimum?',
    options: {
      A: '3',
      B: '5',
      C: '6',
      D: '2'
    },
    correctAnswer: 'A',
    explanation: 'For a quadratic y = ax² + bx + c, minimum at x = -b/2a = -(-6)/2(1) = 3\nAnswer: A (3)'
  },
  {
    id: 26,
    subject: 'Mathematics',
    question: 'The chances of three independent events P, Q, R occurring are 1/2, 1/2, 1/2 respectively. What is the probability of P and Q only occurring?',
    options: {
      A: '1/2',
      B: '1/4',
      C: '2/9',
      D: '1/8'
    },
    correctAnswer: 'D',
    explanation: 'P(only P and Q) = P(P) × P(Q) × P(R\')\n= 1/2 × 1/2 × 1/2 = 1/8\nAnswer: D (1/8)'
  },
  {
    id: 27,
    subject: 'Mathematics',
    question: 'If x and y represent the mean and the median respectively of the following marks: 11, 12, 13, 14, 15, 16, 17, 18, 19, 21. Find x/y correct to 1 decimal place.',
    options: {
      A: '1',
      B: '3',
      C: '5',
      D: '2'
    },
    correctAnswer: 'A',
    explanation: 'Mean = (11+12+13+14+15+16+17+18+19+21)/10 = 156/10 = 15.6\nMedian = (15+16)/2 = 15.5\nx/y = 15.6/15.5 = 1.006 ≈ 1.0'
  },
  {
    id: 28,
    subject: 'Mathematics',
    question: 'Find the point on the Euclidean plane where the curve y = 2x² - 2x + 9 has gradient 2.',
    options: {
      A: '(2,4)',
      B: '(3,5)',
      C: '(1,3)',
      D: '(1,4)'
    },
    correctAnswer: 'D',
    explanation: 'dy/dx = 4x - 2 = 2 → 4x = 4 → x = 1\ny = 2(1)² - 2(1) + 9 = 2 - 2 + 9 = 9\nPoint is (1,9)'
  },
  {
    id: 29,
    subject: 'Mathematics',
    question: 'Find the equation of the line through (5, 7) parallel to the line 7x + 5y - 5 = 0',
    options: {
      A: '5y + 7x = 70',
      B: '7x + 5y = 7',
      C: '5x + 7y = 110',
      D: 'y + 5x = 70'
    },
    correctAnswer: 'A',
    explanation: 'Parallel line has same slope: 7x + 5y = c\nAt (5,7): 7(5) + 5(7) = 35 + 35 = 70\nEquation: 7x + 5y = 70\nAnswer: A (5y + 7x = 70)'
  },
  {
    id: 30,
    subject: 'Mathematics',
    question: 'In a pie chart representing: Science ₦35M, Education ₦25M, Law ₦20M, Social ₦20M, the angle for Science is',
    options: {
      A: '90°',
      B: '126°',
      C: '45°',
      D: '100°'
    },
    correctAnswer: 'B',
    explanation: 'Total = 35+25+20+20 = 100M\nAngle for Science = (35/100) × 360° = 126°\nAnswer: B (126°)'
  },
  // src/data/mathematicsQuestions.js - ADD THESE TO YOUR EXISTING FILE

// ============ 2014 MATHEMATICS ============
{
  id: 51,
  subject: 'Mathematics',
  question: 'Evaluate (1/25)^(-1/2) + (1/8)^(-2/3)',
  options: {
    A: '8',
    B: '10',
    C: '9',
    D: '6'
  },
  correctAnswer: 'C',
  explanation: '(1/25)^(-1/2) = 25^(1/2) = 5\n(1/8)^(-2/3) = 8^(2/3) = (8^(1/3))^2 = 2^2 = 4\n5 + 4 = 9'
},
{
  id: 52,
  subject: 'Mathematics',
  question: 'Find the remainder when x^4 - 11x + 2 is divided by x',
  options: {
    A: '2',
    B: '6',
    C: '-2',
    D: '5'
  },
  correctAnswer: 'A',
  explanation: 'When divided by x, the remainder is the constant term. The constant term is 2.'
},
{
  id: 53,
  subject: 'Mathematics',
  question: 'If cos A = 12/13 and A is an acute angle, find (1 + tan² A)',
  options: {
    A: '144/25',
    B: '25/144',
    C: '169/25',
    D: '169/144'
  },
  correctAnswer: 'C',
  explanation: 'sin A = 5/13, tan A = 5/12\n1 + tan² A = 1 + 25/144 = 169/144'
},
{
  id: 54,
  subject: 'Mathematics',
  question: 'Integrate the function 1 - 2x with respect to x',
  options: {
    A: 'x - x² + K',
    B: 'x + x² + K',
    C: '-x - x² + K',
    D: 'x - x² + K'
  },
  correctAnswer: 'A',
  explanation: '∫(1 - 2x)dx = x - x² + K'
},
{
  id: 55,
  subject: 'Mathematics',
  question: 'If α and β are the roots of equation cx² - ax + b = 0, find αβ',
  options: {
    A: '-b/a',
    B: '-a/c',
    C: 'b/c',
    D: 'c/a'
  },
  correctAnswer: 'C',
  explanation: 'For equation ax² + bx + c = 0, product of roots = c/a. Here, product = b/c.'
},
{
  id: 56,
  subject: 'Mathematics',
  question: 'The binary operation ⊗ is defined by a ⊗ b = 2a - 1. Find 3 ⊗ (2 ⊗ 1)',
  options: {
    A: '3',
    B: '4',
    C: '5',
    D: '6'
  },
  correctAnswer: 'A',
  explanation: '2 ⊗ 1 = 2(2) - 1 = 3\n3 ⊗ 3 = 2(3) - 1 = 5'
},
{
  id: 57,
  subject: 'Mathematics',
  question: 'Two coins are tossed; find the probability of having at least two heads.',
  options: {
    A: '1/2',
    B: '3/4',
    C: '1/4',
    D: '1'
  },
  correctAnswer: 'C',
  explanation: 'With two coins, possible outcomes: HH, HT, TH, TT\nAt least two heads means HH only = 1/4'
},
{
  id: 58,
  subject: 'Mathematics',
  question: 'If x is a real number and x + 11 < 0, evaluate |x|/x',
  options: {
    A: '0',
    B: '-1',
    C: '1',
    D: '2'
  },
  correctAnswer: 'B',
  explanation: 'x + 11 < 0 → x < -11, so x is negative.\n|x|/x = (-x)/x = -1'
},
{
  id: 59,
  subject: 'Mathematics',
  question: 'If P is directly proportional to √Q; P = 20 when Q = 4. Find Q when P = 100',
  options: {
    A: '200',
    B: '300',
    C: '100',
    D: '400'
  },
  correctAnswer: 'C',
  explanation: 'P = k√Q, 20 = k√4 = 2k → k = 10\n100 = 10√Q → √Q = 10 → Q = 100'
},
{
  id: 60,
  subject: 'Mathematics',
  question: 'Find the angle in degrees which the line x - √3y = 0 makes with the positive y-axis',
  options: {
    A: '30°',
    B: '90°',
    C: '60°',
    D: '180°'
  },
  correctAnswer: 'A',
  explanation: 'x = √3y → y = x/√3\ntan θ = 1/√3 → θ = 30°'
},
{
  id: 61,
  subject: 'Mathematics',
  question: 'If equation 6 - kx + 2x² = 0 has equal roots, find k² + 4',
  options: {
    A: '48',
    B: '52',
    C: '44',
    D: '96'
  },
  correctAnswer: 'B',
  explanation: 'For equal roots, b² = 4ac → k² = 4(2)(6) = 48\nk² + 4 = 48 + 4 = 52'
},
{
  id: 62,
  subject: 'Mathematics',
  question: 'Simplify log₁₀₀ √(10⁻¹)',
  options: {
    A: '-1/8',
    B: '-1/4',
    C: '1/4',
    D: '1/8'
  },
  correctAnswer: 'B',
  explanation: 'log₁₀₀ √(10⁻¹) = 1/2 log₁₀₀ 10⁻¹ = -1/2 × 1/2 = -1/4'
},
{
  id: 63,
  subject: 'Mathematics',
  question: 'Obtain the centre of the circle 7(y² + 10y) + 7x² = 1',
  options: {
    A: '(0,5)',
    B: '(-5,0)',
    C: '(0,-5)',
    D: '(5,0)'
  },
  correctAnswer: 'C',
  explanation: 'Divide by 7: y² + 10y + x² = 1/7\nComplete square: (y+5)² + x² = 1/7 + 25\nCentre = (0,-5)'
},
{
  id: 64,
  subject: 'Mathematics',
  question: 'Given ∫₋ₐᵃ 15x² dx = 3430, find the value of the constant a',
  options: {
    A: '8',
    B: '6',
    C: '7',
    D: '9'
  },
  correctAnswer: 'C',
  explanation: '∫₋ₐᵃ 15x² dx = [5x³]₋ₐᵃ = 5a³ - 5(-a)³ = 10a³\n10a³ = 3430 → a³ = 343 → a = 7'
},
{
  id: 65,
  subject: 'Mathematics',
  question: 'Evaluate d/dx (ln sin 3x)',
  options: {
    A: '3 cot 3x',
    B: '3 tan 3x',
    C: '1/sin 3x',
    D: '3 sin 3x'
  },
  correctAnswer: 'A',
  explanation: 'd/dx(ln sin 3x) = 3 cos 3x / sin 3x = 3 cot 3x'
},
{
  id: 66,
  subject: 'Mathematics',
  question: 'Find the equation of a line which passes through a point (-2,3) and makes an angle of 45° with positive x-axis',
  options: {
    A: 'y - x - 5 = 0',
    B: 'y + x = 0',
    C: 'x - y - 5 = 0',
    D: 'y - x + 5 = 0'
  },
  correctAnswer: 'A',
  explanation: 'm = tan45° = 1\ny - 3 = 1(x + 2) → y = x + 5 → y - x - 5 = 0'
},
{
  id: 67,
  subject: 'Mathematics',
  question: 'Find the sum of infinity of the sequence: 1, -1, 1, -1, 1, -1...',
  options: {
    A: '2',
    B: '1/2',
    C: '1',
    D: '1/2'
  },
  correctAnswer: 'B',
  explanation: 'a = 1, r = -1\nS∞ = a/(1-r) = 1/(1-(-1)) = 1/2'
},
{
  id: 68,
  subject: 'Mathematics',
  question: 'Differentiate 2 - sin(2 - ax) with respect to x',
  options: {
    A: 'a cos(2 - ax)',
    B: '-a sin(2 - ax)',
    C: '-a cos(2 - ax)',
    D: '-a sin(2 - ax)'
  },
  correctAnswer: 'A',
  explanation: 'd/dx[2 - sin(2-ax)] = 0 - cos(2-ax)(-a) = a cos(2-ax)'
},
{
  id: 69,
  subject: 'Mathematics',
  question: 'Simplify (8√(n²)/m^(3/2)) × (4⁻¹m²/2n⁻²)',
  options: {
    A: '128n³m⁻¹',
    B: '8n³m⁻¹',
    C: '8n³m',
    D: '8n⁴m'
  },
  correctAnswer: 'B',
  explanation: '= (8n/m^(3/2)) × (m²/8n⁻²) = 8n³/m = 8n³m⁻¹'
},
{
  id: 70,
  subject: 'Mathematics',
  question: 'Simplify: 30/√2 + √50',
  options: {
    A: '4√5',
    B: '20√2',
    C: '5√5',
    D: '10√2'
  },
  correctAnswer: 'B',
  explanation: '30/√2 = 15√2, √50 = 5√2\n15√2 + 5√2 = 20√2'
},
{
  id: 71,
  subject: 'Mathematics',
  question: 'If m is the gradient of the line pq - px - qy = 0 and q ≠ 0, find 1/m',
  options: {
    A: 'q/p',
    B: 'p/q',
    C: '-q/p',
    D: '-p/q'
  },
  correctAnswer: 'C',
  explanation: 'qy = -px + pq → y = -(p/q)x + p\nm = -p/q, so 1/m = -q/p'
},
  // src/data/mathematicsQuestions.js - CONTINUED ADDITION

// ============ 2013 MATHEMATICS ============
{
  id: 72,
  subject: 'Mathematics',
  question: 'If the probability of success in an event is y/x, what is the probability of failure?',
  options: {
    A: '(x - y)/x',
    B: '(y - x)/x',
    C: '(x - y)/y',
    D: '(y - x)/y'
  },
  correctAnswer: 'A',
  explanation: 'Probability of failure = 1 - probability of success = 1 - y/x = (x-y)/x'
},
{
  id: 73,
  subject: 'Mathematics',
  question: 'What is the circumference of the circle x² + y² = (7/2)²?',
  options: {
    A: '16 units',
    B: '14 units',
    C: '15 units',
    D: '15 units'
  },
  correctAnswer: 'B',
  explanation: 'r = 7/2, circumference = 2πr = 2π(7/2) = 7π = 22 units'
},
{
  id: 74,
  subject: 'Mathematics',
  question: 'Find the diameter of the circle 2x² + 2y² - 50 = 0',
  options: {
    A: '-10 units',
    B: '14 units',
    C: '25 units',
    D: '-25 units'
  },
  correctAnswer: 'A',
  explanation: '2x² + 2y² = 50 → x² + y² = 25 → r² = 25 → r = 5, diameter = 10'
},
{
  id: 75,
  subject: 'Mathematics',
  question: 'Find the point of intersection of the lines 3x - 2y = 5 and 2x + 5y = -7',
  options: {
    A: 'x = 11/19, y = -31/19',
    B: 'x = -11/19, y = 31/19',
    C: 'x = -11/19, y = -31/19',
    D: 'x = 11/19, y = 31/19'
  },
  correctAnswer: 'A',
  explanation: 'Solving simultaneously: x = 11/19, y = -31/19'
},
{
  id: 76,
  subject: 'Mathematics',
  question: 'Solve 4x² + 20x - 24 = 0',
  options: {
    A: '1, 6',
    B: '-1, -6',
    C: '6, -1',
    D: '-6, 1'
  },
  correctAnswer: 'D',
  explanation: '4x² + 20x - 24 = 0 → divide by 4: x² + 5x - 6 = 0 → (x+6)(x-1) = 0 → x = -6, 1'
},
{
  id: 77,
  subject: 'Mathematics',
  question: 'What is the 15th term of the sequence -3, 2, 7, ...?',
  options: {
    A: '65',
    B: '66',
    C: '68',
    D: '67'
  },
  correctAnswer: 'D',
  explanation: 'a = -3, d = 5, n = 15\nT₁₅ = a + (n-1)d = -3 + 14×5 = -3 + 70 = 67'
},
{
  id: 78,
  subject: 'Mathematics',
  question: 'What is the distance between the points (-1, 5) and (-7, -3)?',
  options: {
    A: '9',
    B: '10',
    C: '11',
    D: '12'
  },
  correctAnswer: 'B',
  explanation: 'd = √((-7+1)² + (-3-5)²) = √((-6)² + (-8)²) = √(36+64) = √100 = 10'
},
{
  id: 79,
  subject: 'Mathematics',
  question: 'Evaluate (log√27 - log√8)/(log3 - log2)',
  options: {
    A: '2/3',
    B: '-2/3',
    C: '3/2',
    D: '-3/2'
  },
  correctAnswer: 'C',
  explanation: '= (3/2 log3 - 3/2 log2)/(log3 - log2) = (3/2)(log3 - log2)/(log3 - log2) = 3/2'
},
{
  id: 80,
  subject: 'Mathematics',
  question: 'What is the remainder when x³ + 5x² - 6x + 1 is divided by x - 1?',
  options: {
    A: '-1',
    B: '2',
    C: '-2',
    D: '1'
  },
  correctAnswer: 'D',
  explanation: 'f(1) = 1³ + 5(1)² - 6(1) + 1 = 1 + 5 - 6 + 1 = 1'
},
{
  id: 81,
  subject: 'Mathematics',
  question: 'Given that -x² + 5x + 6 = 0, find αβ + α + β.',
  options: {
    A: '5',
    B: '-5',
    C: '1',
    D: '-1'
  },
  correctAnswer: 'D',
  explanation: 'a = -1, b = 5, c = 6\nα + β = -b/a = 5, αβ = c/a = -6\nαβ + α + β = -6 + 5 = -1'
},
{
  id: 82,
  subject: 'Mathematics',
  question: 'What is the value of y for which the function (y-1)/(y+1) is undefined?',
  options: {
    A: '-1',
    B: '1',
    C: '0',
    D: '2'
  },
  correctAnswer: 'A',
  explanation: 'A function is undefined when denominator = 0 → y + 1 = 0 → y = -1'
},
{
  id: 83,
  subject: 'Mathematics',
  question: 'Resolve 1/[x(1+x)] into partial fractions.',
  options: {
    A: '1/x + 1/(1+x)',
    B: '1/(1+x) - 1/x',
    C: '-1/x - 1/(1+x)',
    D: '1/x - 1/(1+x)'
  },
  correctAnswer: 'D',
  explanation: '1/[x(1+x)] = A/x + B/(1+x)\n1 = A(1+x) + Bx\nx=0: 1 = A, x=-1: 1 = -B → B = -1\nAnswer: 1/x - 1/(1+x)'
},
{
  id: 84,
  subject: 'Mathematics',
  question: 'Solve the equation 5x² = 25x⁴',
  options: {
    A: '-4, 2',
    B: '-4, -2',
    C: '4, -2',
    D: '4, 2'
  },
  correctAnswer: 'C',
  explanation: '5x² = 25x⁴ → divide by 5x²: 1 = 5x² → x² = 1/5 → x = ±1/√5'
},
{
  id: 85,
  subject: 'Mathematics',
  question: 'Evaluate Σ(n=2 to 4)(2ⁿ + 1)',
  options: {
    A: '28',
    B: '31',
    C: '29',
    D: '32'
  },
  correctAnswer: 'B',
  explanation: 'Σ(2ⁿ + 1) from n=2 to 4 = (4+1)+(8+1)+(16+1) = 5+9+17 = 31'
},
{
  id: 86,
  subject: 'Mathematics',
  question: 'Integrate 4x³ + 1/x with respect to x.',
  options: {
    A: 'ln x + x⁴ + K',
    B: 'x⁻¹ + x⁴ + K',
    C: '12x² - x² + K',
    D: '1/5 x⁵ + x² + K'
  },
  correctAnswer: 'A',
  explanation: '∫(4x³ + 1/x)dx = 4x⁴/4 + ln|x| + K = x⁴ + ln|x| + K'
},
{
  id: 87,
  subject: 'Mathematics',
  question: 'If X = {2,3,6,7,8} and Y = {6,7,10,3,17}, find X∩Y.',
  options: {
    A: '{}',
    B: '{3,6,7}',
    C: '{2,3,6,7,8,10,17}',
    D: '{6,3,7}'
  },
  correctAnswer: 'B',
  explanation: 'Intersection contains elements common to both sets: {3,6,7}'
},
{
  id: 88,
  subject: 'Mathematics',
  question: 'What is the coordinate of centre of the circle x² + y² + 2x - 4y = 10?',
  options: {
    A: '(-1, -2)',
    B: '(1, 2)',
    C: '(-1, 2)',
    D: '(1, -2)'
  },
  correctAnswer: 'C',
  explanation: 'Complete square: (x+1)² + (y-2)² = 15, centre = (-1, 2)'
},
{
  id: 89,
  subject: 'Mathematics',
  question: 'Simplify logₓ x⁴ + log₄ 4ˣ',
  options: {
    A: '4x',
    B: '1/2',
    C: '4 + x',
    D: '4 × log₄ₓ4x'
  },
  correctAnswer: 'C',
  explanation: 'logₓ x⁴ = 4, log₄ 4ˣ = x\nTotal = 4 + x'
},
{
  id: 90,
  subject: 'Mathematics',
  question: 'Solve the equation 3^(x+1) = 27^(1-x)',
  options: {
    A: '1/2',
    B: '-1/2',
    C: '3/4',
    D: '-3/4'
  },
  correctAnswer: 'A',
  explanation: '3^(x+1) = 27^(1-x) = 3^(3-3x)\nx+1 = 3-3x → 4x = 2 → x = 1/2'
},
{
  id: 91,
  subject: 'Mathematics',
  question: 'Given f(x) = 3 + x and g(x) = 3 - x, find g(f(x)).',
  options: {
    A: '6',
    B: 'x',
    C: '-x',
    D: '0'
  },
  correctAnswer: 'C',
  explanation: 'g(f(x)) = g(3+x) = 3 - (3+x) = -x'
},
{
  id: 92,
  subject: 'Mathematics',
  question: 'Differentiate sin(2x - 5) with respect to x.',
  options: {
    A: 'cos(2x - 5)',
    B: '-cos(2x - 5)',
    C: '2cos(2x - 5)',
    D: '-2cos(2x - 5)'
  },
  correctAnswer: 'C',
  explanation: 'd/dx[sin(2x-5)] = 2cos(2x-5)'
},
{
  id: 93,
  subject: 'Mathematics',
  question: 'If δ and λ are the roots of equation x² - 5x + 7 = 0, find δ² + λ².',
  options: {
    A: '25',
    B: '-25',
    C: '-11',
    D: '11'
  },
  correctAnswer: 'D',
  explanation: 'δ+λ = 5, δλ = 7\nδ²+λ² = (δ+λ)² - 2δλ = 25 - 14 = 11'
},// src/data/mathematicsQuestions.js - CONTINUED

// ============ 2008 MATHEMATICS ============
{
  id: 181,
  subject: 'Mathematics',
  question: 'The expression a³ + b³ is equal to',
  options: {
    A: '(a²+b)(a-ab+b²)',
    B: '(a+b)(a²-ab+b²)',
    C: '(a-b)(a²+ab+b²)',
    D: '(a-b)(a²+ab+b²)'
  },
  correctAnswer: 'B',
  explanation: 'a³ + b³ = (a+b)(a² - ab + b²)'
},
{
  id: 182,
  subject: 'Mathematics',
  question: 'Factorize 16(3x+2y)² - 25(a+2b)²',
  options: {
    A: '(12x+8y+5a+10b)(12x+8y-5a-10b)',
    B: '20(3x+2y-a-2b)(3x+2y+a+2b)',
    C: '20(3x+2y-a-10b)(12x+8y-5a-10b)',
    D: '20(3x+2y+a+2b)(3x+2y+a+2b)'
  },
  correctAnswer: 'A',
  explanation: '= [4(3x+2y)]² - [5(a+2b)]² = (12x+8y+5a+10b)(12x+8y-5a-10b)'
},
{
  id: 183,
  subject: 'Mathematics',
  question: 'A cone has base radius 4cm and height 3cm. The area of its curved surface is',
  options: {
    A: '12π cm²',
    B: '20π cm²',
    C: '24π cm²',
    D: '15π cm²'
  },
  correctAnswer: 'B',
  explanation: 'Slant height l = √(4²+3²) = 5cm\nCurved surface area = πrl = π×4×5 = 20π cm²'
},
{
  id: 184,
  subject: 'Mathematics',
  question: 'Let log y + log x³ = 3. Then y is',
  options: {
    A: '(10/x)³',
    B: '(x/10)³',
    C: '(x/10)⁻³',
    D: '(10/x)¹/³'
  },
  correctAnswer: 'A',
  explanation: 'log(yx³) = 3 → yx³ = 10³ = 1000 → y = (10/x)³'
},
{
  id: 185,
  subject: 'Mathematics',
  question: 'If x²/a² - y²/b² = 1, then y is',
  options: {
    A: '(1/a)√(x²-a²)',
    B: '(a/b)√(a²-x²)',
    C: '(1/b)√(x²-a²)',
    D: '(1/a)√(a²-x²)'
  },
  correctAnswer: 'A',
  explanation: 'y²/b² = x²/a² - 1 = (x²-a²)/a² → y = ±(b/a)√(x²-a²)'
},
{
  id: 186,
  subject: 'Mathematics',
  question: 'A cyclist rode for 30 minutes at x km/hr and pushed the bike for 2hrs at (x-5) km/hr. If total distance is less than 60km, what is the range of x?',
  options: {
    A: 'x < 14',
    B: 'x < 20',
    C: 'x < 29',
    D: 'x < 28'
  },
  correctAnswer: 'D',
  explanation: 'Distance = 0.5x + 2(x-5) < 60 → 2.5x - 10 < 60 → 2.5x < 70 → x < 28'
},
{
  id: 187,
  subject: 'Mathematics',
  question: 'The sum of 2 + 4 + 6 + ... + 20 is',
  options: {
    A: '100',
    B: '110',
    C: '120',
    D: '130'
  },
  correctAnswer: 'B',
  explanation: 'Sum of first n even numbers = n(n+1)\nn = 10 → 10×11 = 110'
},
{
  id: 188,
  subject: 'Mathematics',
  question: 'Find the value of x in the equation 2logₓ4 + logₓ9 = 2',
  options: {
    A: '4',
    B: '6',
    C: '8',
    D: '10'
  },
  correctAnswer: 'B',
  explanation: '2logₓ4 + logₓ9 = logₓ(4²×9) = logₓ144 = 2 → x² = 144 → x = 12'
},
{
  id: 189,
  subject: 'Mathematics',
  question: 'The sum of the first 10 terms of the AP 3,7,11,15,... is',
  options: {
    A: '200',
    B: '210',
    C: '220',
    D: '230'
  },
  correctAnswer: 'B',
  explanation: 'a = 3, d = 4, n = 10\nS₁₀ = 10/2[2(3) + 9(4)] = 5(6+36) = 210'
},
{
  id: 190,
  subject: 'Mathematics',
  question: 'If sin A = 4/5, find tan A.',
  options: {
    A: '3/4',
    B: '4/3',
    C: '5/4',
    D: '4/5'
  },
  correctAnswer: 'B',
  explanation: 'cos A = 3/5, tan A = (4/5)/(3/5) = 4/3'
},
{
  id: 191,
  subject: 'Mathematics',
  question: 'The product of the roots of the equation 2x² - 3x - 5 = 0 is',
  options: {
    A: '-5/2',
    B: '5/2',
    C: '3/2',
    D: '-3/2'
  },
  correctAnswer: 'A',
  explanation: 'Product = c/a = -5/2'
},
{
  id: 192,
  subject: 'Mathematics',
  question: 'Find the value of log₂8 + log₃27',
  options: {
    A: '5',
    B: '6',
    C: '7',
    D: '8'
  },
  correctAnswer: 'B',
  explanation: 'log₂8 = 3, log₃27 = 3 → total = 6'
},
{
  id: 193,
  subject: 'Mathematics',
  question: 'The sum of the interior angles of a decagon is',
  options: {
    A: '1440°',
    B: '1080°',
    C: '1260°',
    D: '1620°'
  },
  correctAnswer: 'A',
  explanation: 'Sum = (10-2) × 180 = 8 × 180 = 1440°'
},
{
  id: 194,
  subject: 'Mathematics',
  question: 'If 2x + 3y = 12 and 4x - y = 10, find x + y.',
  options: {
    A: '4',
    B: '5',
    C: '6',
    D: '7'
  },
  correctAnswer: 'B',
  explanation: 'Solving simultaneously: x = 3, y = 2 → x+y = 5'
},
{
  id: 195,
  subject: 'Mathematics',
  question: 'The value of sin60° cos30° + cos60° sin30° is',
  options: {
    A: '1/2',
    B: '1',
    C: '3/2',
    D: '√3/2'
  },
  correctAnswer: 'B',
  explanation: 'sin(60°+30°) = sin90° = 1'
},
{
  id: 196,
  subject: 'Mathematics',
  question: 'Find the mean of the numbers: 12, 15, 18, 21, 24, 27',
  options: {
    A: '18',
    B: '19.5',
    C: '20',
    D: '21.5'
  },
  correctAnswer: 'B',
  explanation: 'Sum = 117, Number = 6, Mean = 117/6 = 19.5'
},
{
  id: 197,
  subject: 'Mathematics',
  question: 'The line y = 2x + 3 has gradient',
  options: {
    A: '2',
    B: '3',
    C: '-2',
    D: '1'
  },
  correctAnswer: 'A',
  explanation: 'The gradient is the coefficient of x, which is 2.'
},
{
  id: 198,
  subject: 'Mathematics',
  question: 'If the radius of a circle is doubled, its area increases by a factor of',
  options: {
    A: '2',
    B: '3',
    C: '4',
    D: '8'
  },
  correctAnswer: 'C',
  explanation: 'Area = πr², new area = π(2r)² = 4πr², factor = 4'
},
{
  id: 199,
  subject: 'Mathematics',
  question: 'The probability of getting a total of 7 when two dice are thrown is',
  options: {
    A: '1/6',
    B: '1/4',
    C: '5/36',
    D: '7/36'
  },
  correctAnswer: 'A',
  explanation: 'Favorable outcomes: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) → 6/36 = 1/6'
},
{
  id: 200,
  subject: 'Mathematics',
  question: 'If x² - 4x + 4 = 0, find x.',
  options: {
    A: '1',
    B: '2',
    C: '3',
    D: '4'
  },
  correctAnswer: 'B',
  explanation: 'x² - 4x + 4 = (x-2)² = 0 → x = 2'
},
{
  id: 201,
  subject: 'Mathematics',
  question: 'The sum of the first 5 terms of the GP 3,6,12,24,... is',
  options: {
    A: '93',
    B: '96',
    C: '99',
    D: '102'
  },
  correctAnswer: 'A',
  explanation: 'S₅ = 3(2⁵-1)/(2-1) = 3(32-1) = 93'
},
{
  id: 202,
  subject: 'Mathematics',
  question: 'Find the value of tan 45°',
  options: {
    A: '0',
    B: '1/2',
    C: '1',
    D: '√3'
  },
  correctAnswer: 'C',
  explanation: 'tan 45° = 1'
},
{
  id: 203,
  subject: 'Mathematics',
  question: 'The distance between points (-2,3) and (4,-1) is',
  options: {
    A: '√52',
    B: '√50',
    C: '√48',
    D: '√40'
  },
  correctAnswer: 'A',
  explanation: 'd = √((4+2)² + (-1-3)²) = √(36+16) = √52'
},
{
  id: 204,
  subject: 'Mathematics',
  question: 'If cos θ = 5/13, find sin θ.',
  options: {
    A: '5/12',
    B: '12/5',
    C: '12/13',
    D: '13/5'
  },
  correctAnswer: 'C',
  explanation: 'sin θ = √(1 - cos²θ) = √(1 - 25/169) = √(144/169) = 12/13'
},
{
  id: 205,
  subject: 'Mathematics',
  question: 'The sum of the roots of x² - 6x + 8 = 0 is',
  options: {
    A: '6',
    B: '8',
    C: '-6',
    D: '-8'
  },
  correctAnswer: 'A',
  explanation: 'Sum = -b/a = -(-6)/1 = 6'
},
{
  id: 206,
  subject: 'Mathematics',
  question: 'Simplify √48 + √27 - √12',
  options: {
    A: '3√3',
    B: '4√3',
    C: '5√3',
    D: '6√3'
  },
  correctAnswer: 'C',
  explanation: '√48 = 4√3, √27 = 3√3, √12 = 2√3\n4√3 + 3√3 - 2√3 = 5√3'
},
{
  id: 207,
  subject: 'Mathematics',
  question: 'The area of a rectangle with length 12cm and width 8cm is',
  options: {
    A: '96cm²',
    B: '100cm²',
    C: '84cm²',
    D: '92cm²'
  },
  correctAnswer: 'A',
  explanation: 'Area = 12 × 8 = 96 cm²'
},
{
  id: 208,
  subject: 'Mathematics',
  question: 'If 3x + 4 = 19, find x.',
  options: {
    A: '3',
    B: '5',
    C: '7',
    D: '9'
  },
  correctAnswer: 'B',
  explanation: '3x = 15 → x = 5'
},
{
  id: 209,
  subject: 'Mathematics',
  question: 'The perimeter of an equilateral triangle with side 6cm is',
  options: {
    A: '12cm',
    B: '18cm',
    C: '24cm',
    D: '36cm'
  },
  correctAnswer: 'B',
  explanation: 'Perimeter = 3 × 6 = 18cm'
},
{
  id: 210,
  subject: 'Mathematics',
  question: 'Simplify (2a²b³)³',
  options: {
    A: '8a⁶b⁹',
    B: '4a⁶b⁹',
    C: '2a⁶b⁹',
    D: '8a⁵b⁶'
  },
  correctAnswer: 'A',
  explanation: '(2a²b³)³ = 2³ × a⁶ × b⁹ = 8a⁶b⁹'
},
{
  id: 211,
  subject: 'Mathematics',
  question: 'The volume of a cube with edge 5cm is',
  options: {
    A: '25cm³',
    B: '75cm³',
    C: '125cm³',
    D: '150cm³'
  },
  correctAnswer: 'C',
  explanation: 'Volume = 5³ = 125 cm³'
},
{
  id: 212,
  subject: 'Mathematics',
  question: 'If 2x - 5 = 13, find x.',
  options: {
    A: '4',
    B: '7',
    C: '9',
    D: '11'
  },
  correctAnswer: 'C',
  explanation: '2x = 18 → x = 9'
},
{
  id: 213,
  subject: 'Mathematics',
  question: 'Simplify (x²y³)/(xy²)',
  options: {
    A: 'x²y',
    B: 'xy',
    C: 'x²y²',
    D: 'xy³'
  },
  correctAnswer: 'B',
  explanation: 'x²/x = x, y³/y² = y → xy'
},
{
  id: 214,
  subject: 'Mathematics',
  question: 'The sum of the interior angles of a quadrilateral is',
  options: {
    A: '180°',
    B: '270°',
    C: '360°',
    D: '540°'
  },
  correctAnswer: 'C',
  explanation: 'Sum = (4-2) × 180 = 360°'
},
{
  id: 215,
  subject: 'Mathematics',
  question: 'If sin θ = 3/5, find cos θ.',
  options: {
    A: '3/4',
    B: '4/5',
    C: '5/4',
    D: '4/3'
  },
  correctAnswer: 'B',
  explanation: 'cos θ = √(1 - 9/25) = √(16/25) = 4/5'
},
{
  id: 216,
  subject: 'Mathematics',
  question: 'The area of a square with perimeter 40cm is',
  options: {
    A: '80cm²',
    B: '100cm²',
    C: '120cm²',
    D: '160cm²'
  },
  correctAnswer: 'B',
  explanation: 'Side = 40/4 = 10cm, Area = 10² = 100cm²'
},
{
  id: 217,
  subject: 'Mathematics',
  question: 'Simplify √8 + √18 - √32',
  options: {
    A: '√2',
    B: '2√2',
    C: '3√2',
    D: '4√2'
  },
  correctAnswer: 'A',
  explanation: '√8 = 2√2, √18 = 3√2, √32 = 4√2\n2√2 + 3√2 - 4√2 = √2'
},
{
  id: 218,
  subject: 'Mathematics',
  question: 'The circumference of a circle with diameter 14cm is (use π = 22/7)',
  options: {
    A: '22cm',
    B: '44cm',
    C: '66cm',
    D: '88cm'
  },
  correctAnswer: 'B',
  explanation: 'Circumference = πd = (22/7) × 14 = 44cm'
},
{
  id: 219,
  subject: 'Mathematics',
  question: 'If 4x - 7 = 21, find x.',
  options: {
    A: '5',
    B: '6',
    C: '7',
    D: '8'
  },
  correctAnswer: 'C',
  explanation: '4x = 28 → x = 7'
},
{
  id: 220,
  subject: 'Mathematics',
  question: 'Find the number of diagonals in a pentagon.',
  options: {
    A: '3',
    B: '4',
    C: '5',
    D: '6'
  },
  correctAnswer: 'C',
  explanation: 'Number of diagonals = n(n-3)/2 = 5(5-3)/2 = 5'
},
{
  id: 221,
  subject: 'Mathematics',
  question: 'Simplify (a²b)³ ÷ (ab²)²',
  options: {
    A: 'a⁴b',
    B: 'a⁴b',
    C: 'a³b²',
    D: 'a⁴b'
  },
  correctAnswer: 'A',
  explanation: 'a⁶b³ ÷ a²b⁴ = a⁴b⁻¹ = a⁴/b'
},
{
  id: 222,
  subject: 'Mathematics',
  question: 'The area of a triangle with base 10cm and height 6cm is',
  options: {
    A: '30cm²',
    B: '40cm²',
    C: '50cm²',
    D: '60cm²'
  },
  correctAnswer: 'A',
  explanation: 'Area = ½ × 10 × 6 = 30cm²'
},
{
  id: 223,
  subject: 'Mathematics',
  question: 'If 3x + 5 = 20, find x.',
  options: {
    A: '3',
    B: '4',
    C: '5',
    D: '6'
  },
  correctAnswer: 'C',
  explanation: '3x = 15 → x = 5'
},
{
  id: 224,
  subject: 'Mathematics',
  question: 'The sum of the first 10 even numbers is',
  options: {
    A: '90',
    B: '100',
    C: '110',
    D: '120'
  },
  correctAnswer: 'C',
  explanation: 'Sum = n(n+1) = 10×11 = 110'
},
{
  id: 225,
  subject: 'Mathematics',
  question: 'If a:b = 2:3 and b:c = 4:5, find a:c.',
  options: {
    A: '2:5',
    B: '4:5',
    C: '8:15',
    D: '2:3'
  },
  correctAnswer: 'C',
  explanation: 'a/b = 2/3, b/c = 4/5\na/c = (2/3)(4/5) = 8/15'
},
{
  id: 226,
  subject: 'Mathematics',
  question: 'The perimeter of a square with area 64cm² is',
  options: {
    A: '16cm',
    B: '24cm',
    C: '32cm',
    D: '40cm'
  },
  correctAnswer: 'C',
  explanation: 'Side = √64 = 8cm, Perimeter = 4×8 = 32cm'
},
{
  id: 227,
  subject: 'Mathematics',
  question: 'Simplify (2x)³',
  options: {
    A: '2x³',
    B: '4x³',
    C: '6x³',
    D: '8x³'
  },
  correctAnswer: 'D',
  explanation: '(2x)³ = 2³ × x³ = 8x³'
},
{
  id: 228,
  subject: 'Mathematics',
  question: 'The volume of a cylinder with radius 7cm and height 10cm is (use π = 22/7)',
  options: {
    A: '1540cm³',
    B: '1500cm³',
    C: '1580cm³',
    D: '1600cm³'
  },
  correctAnswer: 'A',
  explanation: 'Volume = πr²h = (22/7)×7²×10 = 1540cm³'
},
{
  id: 229,
  subject: 'Mathematics',
  question: 'If 5x - 8 = 27, find x.',
  options: {
    A: '5',
    B: '6',
    C: '7',
    D: '8'
  },
  correctAnswer: 'C',
  explanation: '5x = 35 → x = 7'
},
{
  id: 230,
  subject: 'Mathematics',
  question: 'The sum of the first n natural numbers is 55. Find n.',
  options: {
    A: '5',
    B: '10',
    C: '15',
    D: '20'
  },
  correctAnswer: 'B',
  explanation: 'n(n+1)/2 = 55 → n(n+1) = 110 → n = 10'
}// ... continuing to 50 questions
];