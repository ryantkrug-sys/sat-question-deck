// SAT Question Deck — question bank.
// All questions are original, written by Ryan Krug for his SAT
// Practice Workbook (no College Board questions). Regenerate with
// build_bank.py; do not edit by hand.
const QUESTION_BANK = [
 {
  "id": "M01",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Linear equations in two variables",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "",
  "question": "What is the slope of the line in the xy-plane that passes through points (2, 5) and (6, 17)?",
  "solution": "Slope is (change in y) ÷ (change in x). From (2, 5) to (6, 17): the y-values increase by 17 − 5 = 12 while the x-values increase by 6 − 2 = 4, so the slope is 12/4 = 3. Watch out: choice A (1/3) comes from flipping the ratio — rise goes on top, run on the bottom.",
  "choices": [
   "1/3",
   "2",
   "3",
   "4"
  ],
  "answerIndex": 2
 },
 {
  "id": "M02",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Nonlinear functions",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "",
  "question": "If f(x) = 3x² − 2x, what is the value of f(−2)?",
  "solution": "f(−2) means plug −2 in everywhere x appears — carefully, with parentheses. f(−2) = 3(−2)² − 2(−2) = 3(4) + 4 = 12 + 4 = 16. Watch out: choice A (8) comes from computing −2(−2) as −4. A negative times a negative is positive: −2(−2) = +4. Writing the substitution in parentheses prevents this error.",
  "choices": [
   "8",
   "12",
   "16",
   "20"
  ],
  "answerIndex": 2
 },
 {
  "id": "M03",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Ratios, rates, proportional relationships, and units",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "A car travels 195 miles on 6.5 gallons of gas.",
  "question": "How many miles does the car travel per gallon of gas?",
  "solution": "Miles per gallon is a unit rate: divide miles by gallons. 195 ÷ 6.5 = 30 miles per gallon. When a question asks for a rate 'per' one unit, the answer is always (first quantity) ÷ (second quantity) — set the division up in the order the units are named.",
  "choices": [
   "26",
   "28",
   "30",
   "32"
  ],
  "answerIndex": 2
 },
 {
  "id": "M04",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Lines, angles, and triangles",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "Two parallel lines are cut by a transversal, forming an angle that measures 112°.",
  "question": "What is the measure, in degrees, of an angle that is supplementary to the 112° angle?",
  "solution": "Supplementary angles have measures that sum to 180°. So the supplementary angle measures 180 − 112 = 68°. (The 112° angle's vertical and corresponding angles also measure 112°; it is the supplement that changes the value — read carefully which relationship the question asks for.)",
  "choices": [
   "68",
   "112",
   "78",
   "22"
  ],
  "answerIndex": 0
 },
 {
  "id": "M05",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Linear equations in one variable",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "",
  "question": "If 7x − 18 = 3x + 22, what is the value of x?",
  "solution": "Get every x-term on one side and every number on the other. Subtract 3x from both sides: 4x − 18 = 22. Add 18 to both sides: 4x = 40. Divide by 4: x = 10. Watch out: choice B (8) comes from moving the −18 across and subtracting it instead of adding it. Always use the inverse operation — the −18 comes off by adding 18.",
  "choices": [
   "4",
   "8",
   "10",
   "12"
  ],
  "answerIndex": 2
 },
 {
  "id": "M06",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Equivalent expressions",
  "difficulty": 2,
  "level": 1,
  "type": "mc",
  "stimulus": "",
  "question": "Which expression is equivalent to (3x²)² · x³?",
  "solution": "Apply the power to everything inside the parentheses first: (3x²)² = 3² · (x²)² = 9x⁴. Then multiply by x³, adding exponents because the bases are the same: 9x⁴ · x³ = 9x⁴⁺³ = 9x⁷. Watch out: choice C (9x¹²) comes from multiplying exponents when you should add them (and choice B forgets to square the 3). Powers of powers multiply; products of like bases add.",
  "choices": [
   "9x⁷",
   "3x⁷",
   "9x¹²",
   "6x⁷"
  ],
  "answerIndex": 0
 },
 {
  "id": "M07",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Percentages",
  "difficulty": 1,
  "level": 1,
  "type": "grid",
  "stimulus": "A jacket that originally cost $80 is on sale for $64.",
  "question": "What percent of the original price is the discount?",
  "solution": "Percent discount is (amount saved) ÷ (original price), converted to a percent. The discount is 80 − 64 = $16. Then 16/80 = 0.20 = 20%. Watch out: the base is the original price, $80 — not the sale price. Dividing 16 by 64 would give 25%, a common error. 'Percent of the original' always divides by the original.",
  "choices": null,
  "answerValue": "20"
 },
 {
  "id": "M08",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Lines, angles, and triangles",
  "difficulty": 2,
  "level": 1,
  "type": "grid",
  "stimulus": "Two angles are complementary. One of the angles measures 38°.",
  "question": "What is the measure, in degrees, of the other angle?",
  "solution": "Complementary angles sum to 90°. The other angle measures 90 − 38 = 52°. Keep the two partnerships straight: complementary → 90 (think 'C' for corner, a square corner), supplementary → 180 (a straight line).",
  "choices": null,
  "answerValue": "52"
 },
 {
  "id": "M09",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Linear functions",
  "difficulty": 1,
  "level": 1,
  "type": "grid",
  "stimulus": "A water tank at a community garden holds 240 gallons when full. A pump drains the tank at a constant rate of 15 gallons per minute.",
  "question": "After how many minutes of pumping will exactly 90 gallons remain in the tank?",
  "solution": "The amount remaining is the starting amount minus what drains away: remaining = 240 − 15t. Set that equal to 90: 240 − 15t = 90. Subtract 240: −15t = −150. Divide by −15: t = 10. Check: in 10 minutes the pump removes 15 × 10 = 150 gallons, and 240 − 150 = 90. ✓",
  "choices": null,
  "answerValue": "10"
 },
 {
  "id": "M10",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Nonlinear equations in one variable and systems of equations in two variables",
  "difficulty": 3,
  "level": 1,
  "type": "mc",
  "stimulus": "2x² − 4x + 5 = 0",
  "question": "How many distinct real solutions does the equation above have?",
  "solution": "For a quadratic ax² + bx + c = 0, the discriminant b² − 4ac tells you the number of distinct real solutions before you solve anything. Here a = 2, b = −4, c = 5, so b² − 4ac = (−4)² − 4(2)(5) = 16 − 40 = −24. A negative discriminant means the parabola never crosses the x-axis, so there are 0 distinct real solutions.",
  "choices": [
   "0",
   "1",
   "2",
   "3"
  ],
  "answerIndex": 0
 },
 {
  "id": "M11",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "One-variable data: distributions and measures of center and spread",
  "difficulty": 2,
  "level": 1,
  "type": "grid",
  "stimulus": "The mean of the five numbers 14, 18, 21, 27, and x is 22.",
  "question": "What is the value of x?",
  "solution": "A mean of 22 across 5 values requires a total of 5 × 22 = 110. The four known values sum to 14 + 18 + 21 + 27 = 80. So x = 110 − 80 = 30. The reliable routine for every 'find the missing value' mean problem: multiply to get the needed total, then subtract what you already have.",
  "choices": null,
  "answerValue": "30"
 },
 {
  "id": "M12",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Area and volume",
  "difficulty": 2,
  "level": 1,
  "type": "grid",
  "stimulus": "A circle has a circumference of 20π. Its area can be written as kπ, where k is a constant.",
  "question": "What is the value of k?",
  "solution": "Work backward from the circumference. C = 2πr = 20π, so r = 10. Then the area is A = πr² = π(10)² = 100π, which means k = 100. Watch out: the circumference hands you the diameter's worth of information first (2r = 20) — students who use 20 as the radius get k = 400.",
  "choices": null,
  "answerValue": "100"
 },
 {
  "id": "M13",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Linear equations in two variables",
  "difficulty": 2,
  "level": 1,
  "type": "mc",
  "stimulus": "A line in the xy-plane has a slope of −2 and passes through the point (0, 5).",
  "question": "Which equation defines the line?",
  "solution": "Use slope-intercept form, y = mx + b. The slope is m = −2, and because the line passes through (0, 5), its y-intercept is b = 5. So the equation is y = −2x + 5. Choice D swaps the roles of the slope and the intercept; choices B and C each get one of the two signs wrong.",
  "choices": [
   "y = −2x + 5",
   "y = 2x + 5",
   "y = −2x − 5",
   "y = 5x − 2"
  ],
  "answerIndex": 0
 },
 {
  "id": "M14",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Equivalent expressions",
  "difficulty": 3,
  "level": 1,
  "type": "mc",
  "stimulus": "",
  "question": "Which expression is equivalent to (2x − 3)(x + 4)?",
  "solution": "Multiply the two binomials term by term (FOIL), then combine like terms: (2x − 3)(x + 4) = 2x² + 8x − 3x − 12 = 2x² + 5x − 12. Watch out: choice A flips the sign of the middle term — usually from mishandling 8x − 3x or from distributing the −3 inconsistently. Keep the sign attached to each number as you distribute.",
  "choices": [
   "2x² − 5x − 12",
   "2x² + 5x − 12",
   "2x² + 11x − 12",
   "2x² + 5x + 12"
  ],
  "answerIndex": 1
 },
 {
  "id": "M15",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Percentages",
  "difficulty": 2,
  "level": 1,
  "type": "mc",
  "stimulus": "A town's population increased from 24,000 in 2015 to 27,600 in 2025.",
  "question": "By what percent did the town's population increase from 2015 to 2025?",
  "solution": "Percent increase is (amount of increase) ÷ (original amount). The increase is 27,600 − 24,000 = 3,600, and the original is 24,000: 3,600/24,000 = 0.15 = 15%. Watch out: dividing by the new value (27,600) gives about 13% — choice A — but percent change is always measured against where you started.",
  "choices": [
   "13%",
   "15%",
   "18%",
   "36%"
  ],
  "answerIndex": 1
 },
 {
  "id": "M16",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Lines, angles, and triangles",
  "difficulty": 3,
  "level": 1,
  "type": "grid",
  "stimulus": "In triangle PQR, the measures of the three angles are 3x degrees, (x + 20) degrees, and (2x + 10) degrees.",
  "question": "What is the value of x?",
  "solution": "The three angle measures must sum to 180°: 3x + (x + 20) + (2x + 10) = 180. Combine like terms: 6x + 30 = 180. Subtract 30: 6x = 150. Divide by 6: x = 25. (Check: the angles are 75°, 45°, and 60°, which sum to 180°. ✓)",
  "choices": null,
  "answerValue": "25"
 },
 {
  "id": "M17",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Linear functions",
  "difficulty": 2,
  "level": 1,
  "type": "mc",
  "stimulus": "The table shows values of a linear function f for selected values of x.\n\nx: 1, 2, 3, 4\nf(x): 5, 9, 13, 17",
  "question": "What is the value of f(9)?",
  "solution": "The outputs increase by 4 each time x increases by 1, so f is linear with slope 4. Working backward from f(1) = 5, the y-intercept is 5 − 4 = 1, so f(x) = 4x + 1. Then f(9) = 4(9) + 1 = 37. Watch out: choice D (41) is f(10) — extending the table one row too far.",
  "choices": [
   "33",
   "36",
   "37",
   "41"
  ],
  "answerIndex": 2
 },
 {
  "id": "M18",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Two-variable data: models and scatterplots",
  "difficulty": 2,
  "level": 1,
  "type": "mc",
  "stimulus": "Eighty students were surveyed about whether they play a sport and whether they play an instrument. The results are shown in the table.",
  "question": "What percent of the students who do not play a sport play an instrument?",
  "solution": "The question restricts you to one row: the 50 students who do not play a sport. Of those 50, 22 play an instrument. So the percent is 22/50 = 0.44 = 44%. Watch out: choice A (27.5%) divides 22 by all 80 students — the question's restriction ('of the students who do not play a sport') sets the denominator to 50, not 80.",
  "choices": [
   "27.5%",
   "40%",
   "44%",
   "55%"
  ],
  "answerIndex": 2
 },
 {
  "id": "M19",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Systems of two linear equations in two variables",
  "difficulty": 3,
  "level": 1,
  "type": "mc",
  "stimulus": "At a craft fair, Elena sold a total of 11 items. She sold x necklaces for $4 each and y bracelets for $2 each, and her total sales were $36. The sales are modeled by the system x + y = 11 and 4x + 2y = 36.",
  "question": "How many necklaces did Elena sell?",
  "solution": "One equation counts items, the other counts dollars, and we need x, the necklaces. From the first equation, y = 11 − x. Substitute into the second: 4x + 2(11 − x) = 36, so 4x + 22 − 2x = 36, which gives 2x = 14 and x = 7. Check: y = 4, and 7($4) + 4($2) = 28 + 8 = $36. ✓ Watch out: choice A (4) is the number of bracelets — the other variable. The system hands you both values, so re-read the question before you answer: it asks for necklaces, which is x.",
  "choices": [
   "4",
   "7",
   "9",
   "11"
  ],
  "answerIndex": 1
 },
 {
  "id": "M20",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Linear functions",
  "difficulty": 3,
  "level": 1,
  "type": "mc",
  "stimulus": "A tutor models a student's predicted quiz score with the equation S = 55 + 12h, where S is the predicted score and h is the number of hours per week the student studies.",
  "question": "Which statement best explains the meaning of the number 12 in the equation?",
  "solution": "In S = 55 + 12h, the number multiplied by the variable is the rate of change; the number standing alone (55) is the starting value. The 12 is attached to h (hours), so it tells how S changes when h changes: each additional hour of study per week raises the predicted score by 12 points. Watch out: choice A describes the 55 — the predicted score when h = 0 (no studying). Test-writers pair the two numbers' meanings as answer choices on purpose: slope = per-unit change, intercept = starting value.",
  "choices": [
   "The predicted score of a student who does not study at all",
   "The increase in predicted score for each additional hour of study per week",
   "The total number of hours the student studies",
   "The highest score the student can earn"
  ],
  "answerIndex": 1
 },
 {
  "id": "M21",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Linear inequalities in one or two variables",
  "difficulty": 3,
  "level": 2,
  "type": "mc",
  "stimulus": "A group is buying tickets to a concert. Floor tickets cost $45 each and balcony tickets cost $25 each. The group must spend no more than $500 and wants to buy at least 14 tickets.",
  "question": "If f represents the number of floor tickets purchased and b represents the number of balcony tickets purchased, which system of inequalities best models the situation?",
  "solution": "Translate one condition at a time. Cost: floor tickets cost $45 each and balcony tickets $25 each, and the group can spend no more than $500, so 45f + 25b ≤ 500 ('no more than' means ≤). Count: the group wants at least 14 tickets, so f + b ≥ 14 ('at least' means ≥). Only choice A gets both the prices and both inequality directions right. Choice D is the sneaky one — it quietly swaps the two prices.",
  "choices": [
   "45f + 25b ≤ 500 and f + b ≥ 14",
   "45f + 25b ≥ 500 and f + b ≤ 14",
   "45f + 25b ≤ 500 and f + b ≤ 14",
   "25f + 45b ≤ 500 and f + b ≥ 14"
  ],
  "answerIndex": 0
 },
 {
  "id": "M22",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Nonlinear functions",
  "difficulty": 3,
  "level": 2,
  "type": "mc",
  "stimulus": "A population of bacteria starts with 500 bacteria and triples every 4 hours.",
  "question": "Which function P gives the population after t hours?",
  "solution": "The population is multiplied by 3 once every 4 hours, so in t hours the tripling happens t/4 times. Starting from 500, that gives P(t) = 500(3)^(t/4). Sanity-check it: at t = 4, P = 500(3)¹ = 1,500 — one tripling, exactly as described. Choice A triples every quarter-hour instead (way too fast), and choice D multiplies by 12 every single hour. Note: in the printed book the exponents appear as superscripts.",
  "choices": [
   "P(t) = 500(3)^(4t)",
   "P(t) = 500(3)^(t/4)",
   "P(t) = 500(4)^(t/3)",
   "P(t) = 500(12)^t"
  ],
  "answerIndex": 1
 },
 {
  "id": "M23",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Two-variable data: models and scatterplots",
  "difficulty": 3,
  "level": 2,
  "type": "mc",
  "stimulus": "A scatterplot shows the number of hours per week that music students practiced and the scores they earned at a recital. The line of best fit for the data is y = 4.5x + 52, where x is the hours practiced per week and y is the recital score.",
  "question": "According to the model, what recital score is predicted for a student who practiced 6 hours per week?",
  "solution": "Substitute x = 6 into the model: y = 4.5(6) + 52 = 27 + 52 = 79. Using a line of best fit is always this direct — the model is an equation, and a prediction is just an evaluation. (The 4.5 also has meaning: each additional hour of weekly practice is associated with about 4.5 more points, and 52 is the predicted score for a student who practiced 0 hours.)",
  "choices": [
   "72",
   "76.5",
   "79",
   "84"
  ],
  "answerIndex": 2
 },
 {
  "id": "M24",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Circles",
  "difficulty": 3,
  "level": 2,
  "type": "mc",
  "stimulus": "An arc of a circle with radius 9 has a length of 6π.",
  "question": "What is the measure, in degrees, of the central angle that intercepts the arc?",
  "solution": "Arc length is the fraction of the full circumference set by the central angle: s = (θ/360°) × 2πr. Substitute: 6π = (θ/360°) × 2π(9) = (θ/360°) × 18π. So 6π/18π = 1/3 of the circle is covered, and θ = (1/3)(360°) = 120°. In words: the arc is one-third of the way around, so its central angle is one-third of 360°.",
  "choices": [
   "60",
   "90",
   "120",
   "240"
  ],
  "answerIndex": 2
 },
 {
  "id": "M25",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Systems of two linear equations in two variables",
  "difficulty": 3,
  "level": 2,
  "type": "mc",
  "stimulus": "At a movie theater, 2 adult tickets and 3 child tickets together cost $44, and 1 adult ticket and 1 child ticket together cost $18.",
  "question": "What is the price, in dollars, of one adult ticket?",
  "solution": "Let a be the adult price and c the child price. The two purchases give 2a + 3c = 44 and a + c = 18. From the second equation, a = 18 − c. Substitute: 2(18 − c) + 3c = 44, so 36 + c = 44 and c = 8. Then a = 18 − 8 = 10. Check: 2(10) + 3(8) = 20 + 24 = 44. ✓ Watch out: choice A ($8) is the child ticket's price — the system gives you both values, so answer the one that was asked for.",
  "choices": [
   "$8",
   "$10",
   "$12",
   "$18"
  ],
  "answerIndex": 1
 },
 {
  "id": "M26",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Nonlinear equations in one variable and systems of equations in two variables",
  "difficulty": 3,
  "level": 2,
  "type": "mc",
  "stimulus": "√(x + 6) = x − 6",
  "question": "What is the solution to the equation above?",
  "solution": "Square both sides: x + 6 = (x − 6)² = x² − 12x + 36. Move everything to one side: 0 = x² − 13x + 30 = (x − 3)(x − 10), giving x = 3 or x = 10. Now the essential step — check both candidates in the original equation, because squaring can create fake solutions. x = 3: √9 = 3, but x − 6 = −3. 3 ≠ −3, so 3 is extraneous. x = 10: √16 = 4, and 10 − 6 = 4. ✓ The only solution is 10. That is exactly why choice C is there: it rewards students who skip the check.",
  "choices": [
   "3",
   "10",
   "3 and 10",
   "No solution"
  ],
  "answerIndex": 1
 },
 {
  "id": "M27",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Probability and conditional probability",
  "difficulty": 3,
  "level": 2,
  "type": "mc",
  "stimulus": "A company surveyed its 120 employees about their shift preference. The results are shown in the table.",
  "question": "If one part-time employee is selected at random, what is the probability that the employee prefers the night shift?",
  "solution": "'If one part-time employee is selected' restricts the group to the 50 part-time employees. Of those, 35 prefer the night shift. Probability = 35/50 = 7/10. Watch out: choice A (7/24) uses all 120 employees as the denominator, and choice B (7/12) uses the 60 night-shift employees — both ignore the restriction. In a conditional probability, the condition names your denominator.",
  "choices": [
   "7/24",
   "7/12",
   "7/10",
   "5/12"
  ],
  "answerIndex": 2
 },
 {
  "id": "M28",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Area and volume",
  "difficulty": 3,
  "level": 2,
  "type": "grid",
  "stimulus": "A cylindrical storage can has a radius of 4 inches and a height of 7 inches. Its volume can be written as kπ cubic inches, where k is a constant.",
  "question": "What is the value of k?",
  "solution": "The volume of a cylinder is V = πr²h. So V = π(4)²(7) = π(16)(7) = 112π. Since the volume is written as kπ, k = 112. Watch out: square the radius before multiplying — 4² = 16, not 8. And because the question asks for k, do not multiply by π at the end; π is already accounted for in the form kπ.",
  "choices": null,
  "answerValue": "112"
 },
 {
  "id": "M29",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Linear inequalities in one or two variables",
  "difficulty": 3,
  "level": 2,
  "type": "mc",
  "stimulus": "A school art club pays a $25 studio fee plus $6 for each poster it prints. The club has $85 to spend in total.",
  "question": "What is the greatest number of posters the club can print?",
  "solution": "Total cost is the fee plus $6 per poster, and it cannot exceed $85: 25 + 6p ≤ 85. Subtract 25: 6p ≤ 60. Divide by 6: p ≤ 10, so the greatest whole number of posters is 10. Watch out: choice C (11) is the rounding trap — 11 posters would cost 25 + 6(11) = $91, which is over budget. With money problems, if the exact answer lands between whole numbers, round down: you can't buy part of a poster, and you can't spend money you don't have.",
  "choices": [
   "9",
   "10",
   "11",
   "15"
  ],
  "answerIndex": 1
 },
 {
  "id": "M30",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Nonlinear equations in one variable and systems of equations in two variables",
  "difficulty": 3,
  "level": 2,
  "type": "grid",
  "stimulus": "A ball is launched upward from a platform 48 feet above the ground. Its height above the ground, in feet, t seconds after launch is modeled by h(t) = −16t² + 32t + 48.",
  "question": "After how many seconds does the ball hit the ground?",
  "solution": "The ball hits the ground when its height is 0, so solve h(t) = 0: −16t² + 32t + 48 = 0. Divide everything by −16: t² − 2t − 3 = 0. Factor: (t − 3)(t + 1) = 0, so t = 3 or t = −1. Time can't be negative — the t = −1 root describes where the path would have been before launch — so the answer is 3 seconds.",
  "choices": null,
  "answerValue": "3"
 },
 {
  "id": "M31",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Ratios, rates, proportional relationships, and units",
  "difficulty": 3,
  "level": 2,
  "type": "grid",
  "stimulus": "On a map, 2.5 inches represent an actual distance of 40 miles. Two towns are 6.25 inches apart on the map.",
  "question": "How many miles apart are the two towns in reality?",
  "solution": "Set up a proportion using the map scale: 2.5 inches / 40 miles = 6.25 inches / d miles. The map distance grew by a factor of 6.25 ÷ 2.5 = 2.5, so the real distance is 40 × 2.5 = 100 miles. Scaling both sides of a ratio by the same factor is the fastest route through any map or scale-drawing problem.",
  "choices": null,
  "answerValue": "100"
 },
 {
  "id": "M32",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Right triangles and trigonometry",
  "difficulty": 4,
  "level": 2,
  "type": "mc",
  "stimulus": "In right triangle DEF, the right angle is at vertex E, and sin D = 0.6.",
  "question": "What is the value of cos F?",
  "solution": "Angles D and F are the two acute angles of the right triangle, so they are complementary — and the sine of one acute angle always equals the cosine of the other, because the side opposite D is the side adjacent to F. Therefore cos F = sin D = 0.6. Watch out: choice A (0.8) is cos D (equivalently sin F); choice D (1.25) is greater than 1, which no sine or cosine of an angle can be.",
  "choices": [
   "0.8",
   "0.6",
   "0.75",
   "1.25"
  ],
  "answerIndex": 1
 },
 {
  "id": "M33",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Systems of two linear equations in two variables",
  "difficulty": 4,
  "level": 2,
  "type": "mc",
  "stimulus": "2x + 5y = 10\n4x + ky = 15",
  "question": "If the system of equations above has no solution, what is the value of k?",
  "solution": "A system has no solution when the two lines are parallel — same slope, different intercepts. Scale the first equation so its x-coefficient matches the second: multiply 2x + 5y = 10 by 2 to get 4x + 10y = 20. Compare with 4x + ky = 15. If k = 10, the left sides are identical but the right sides (20 vs. 15) disagree — the equations contradict each other, so no (x, y) can satisfy both. Watch out: choice D (20) tempts students who multiply the right side of the first equation by 2 and grab that number. The constant doesn't decide parallelism — the coefficients of x and y do.",
  "choices": [
   "5",
   "8",
   "10",
   "20"
  ],
  "answerIndex": 2
 },
 {
  "id": "M34",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Nonlinear functions",
  "difficulty": 3,
  "level": 2,
  "type": "mc",
  "stimulus": "A used car is purchased for $18,500. Its value decreases by 15% each year.",
  "question": "Which function V gives the value of the car, in dollars, t years after it is purchased?",
  "solution": "Percent decrease means each year the car keeps 100% − 15% = 85% of its previous value. Percent change over time is exponential: starting value times (multiplier)^t. The multiplier is 0.85 and the starting value is 18,500, so V(t) = 18,500(0.85)^t. Watch out: choice B uses the rate of decrease itself (0.15) as the multiplier — but multiplying by 0.15 each year would leave the car worth only 15% of its value after one year, an 85% loss rather than a 15% loss. Always convert: multiplier = 1 − rate for decrease, 1 + rate for growth (which also rules out A — that one grows the car's value). Note: in the printed book the exponent t appears as a superscript.",
  "choices": [
   "V(t) = 18,500(1.15)^t",
   "V(t) = 18,500(0.15)^t",
   "V(t) = 18,500(0.85)^t",
   "V(t) = 18,500 − 0.85t"
  ],
  "answerIndex": 2
 },
 {
  "id": "M35",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Probability and conditional probability",
  "difficulty": 3,
  "level": 2,
  "type": "mc",
  "stimulus": "Students at a high school were surveyed about how they usually get to school. The results are shown in the table.",
  "question": "If one student is selected at random from among the students who ride the bus, what is the probability that the student is a junior?",
  "solution": "The phrase 'from among the students who ride the bus' shrinks your world to the Bus column only. In that smaller group there are 32 students, and 14 of them are juniors. Probability = 14/32 = 7/16. Watch out: choice D (9/16) is the probability of picking a sophomore bus rider (18/32) — right denominator, wrong row. And using the whole school (60) or a whole grade (30) as the denominator ignores the restriction in the question. When a probability question restricts the group, the denominator is the size of the restricted group.",
  "choices": [
   "7/30",
   "7/16",
   "8/15",
   "9/16"
  ],
  "answerIndex": 1
 },
 {
  "id": "M36",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Equivalent expressions",
  "difficulty": 4,
  "level": 2,
  "type": "mc",
  "stimulus": "x³ − 2x² − 5x + 6",
  "question": "Which of the following is a factor of the polynomial above?",
  "solution": "Use the Factor Theorem: (x − r) is a factor exactly when plugging in x = r makes the polynomial equal 0. Test each choice's root. x = 1: 1 − 2 − 5 + 6 = 0. ✓ So (x − 1) is a factor. The others fail: x = −1 gives −1 − 2 + 5 + 6 = 8; x = 2 gives 8 − 8 − 10 + 6 = −4; x = −3 gives −27 − 18 + 15 + 6 = −24. Only the root x = 1 works.",
  "choices": [
   "x + 1",
   "x − 1",
   "x − 2",
   "x + 3"
  ],
  "answerIndex": 1
 },
 {
  "id": "M37",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Inference from sample statistics and margin of error",
  "difficulty": 4,
  "level": 2,
  "type": "mc",
  "stimulus": "A polling organization surveyed 400 randomly selected voters in a city and estimates that 54% of the city's voters support a proposed measure, with a margin of error of ±4 percentage points.",
  "question": "Which of the following is the most reasonable conclusion from the survey?",
  "solution": "A margin of error builds a plausible range around the estimate: add it and subtract it. Here that is 54% ± 4%, giving 50% to 58% as the range of plausible values for the true proportion of all voters. The estimate is not exact (choice A), the margin extends in both directions (choice C), and a margin of error is a normal, expected feature of sampling — not a sign the survey failed (choice D).",
  "choices": [
   "Exactly 54% of all voters in the city support the measure.",
   "The true proportion is plausibly between 50% and 58%.",
   "Between 54% and 58% of all voters support the measure, because the margin of error only goes in one direction.",
   "The survey is invalid, because a margin of error means the results are wrong."
  ],
  "answerIndex": 1
 },
 {
  "id": "M38",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Linear inequalities in one or two variables",
  "difficulty": 4,
  "level": 3,
  "type": "grid",
  "stimulus": "4 − 3(x + 2) > 7",
  "question": "What is the greatest integer value of x that satisfies the inequality above?",
  "solution": "Simplify the left side first: 4 − 3(x + 2) = 4 − 3x − 6 = −3x − 2. So the inequality is −3x − 2 > 7. Add 2: −3x > 9. Divide by −3 — and flip the inequality sign, because dividing by a negative reverses it: x < −3. The integers less than −3 are −4, −5, −6, …, and the greatest of them is −4. Watch out: x = −3 itself is not allowed, because the inequality is strict.",
  "choices": null,
  "answerValue": "-4"
 },
 {
  "id": "M39",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Nonlinear equations in one variable and systems of equations in two variables",
  "difficulty": 4,
  "level": 3,
  "type": "grid",
  "stimulus": "y = x² − 4x + 3\ny = x − 1",
  "question": "The graphs of the two equations intersect at two points. What is the x-coordinate of the intersection point with the greater x-value?",
  "solution": "At an intersection point, the two y-values are equal, so set the expressions equal: x² − 4x + 3 = x − 1. Rearrange: x² − 5x + 4 = 0, which factors as (x − 1)(x − 4) = 0. The intersection points have x = 1 and x = 4, and the greater x-value is 4.",
  "choices": null,
  "answerValue": "4"
 },
 {
  "id": "M40",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Evaluating statistical claims: observational studies and experiments",
  "difficulty": 4,
  "level": 3,
  "type": "mc",
  "stimulus": "A juice company surveyed adults as they left a health-food store and found that most of them drink juice every day. The company concluded that most adults in the city drink juice every day.",
  "question": "Which of the following best explains why the company's conclusion is not valid?",
  "solution": "A conclusion about a whole population is only trustworthy if the sample represents that population. People leaving a health-food store are far more likely than a typical adult to drink juice daily, and they were chosen because they were convenient — not randomly from the city's adults. That biased sample cannot support a claim about all adults in the city. The other choices are true-or-false side issues; none of them repairs the core problem, which is who got surveyed.",
  "choices": [
   "The people surveyed were not randomly selected from the city's adult population, so the sample is not representative of that population.",
   "The survey should have included more questions about other beverages.",
   "People who shop at health-food stores tend to pay higher prices for juice.",
   "The company should also have surveyed children about their juice consumption."
  ],
  "answerIndex": 0
 },
 {
  "id": "M41",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Circles",
  "difficulty": 4,
  "level": 3,
  "type": "mc",
  "stimulus": "A circle in the xy-plane is represented by the equation (x − 3)² + (y + 2)² = 49.",
  "question": "What is the radius of the circle?",
  "solution": "In the standard form (x − h)² + (y − k)² = r², the number on the right is the radius squared, not the radius. Here r² = 49, so r = 7. (The center, for reference, is (3, −2) — note the sign flip on both coordinates.) Watch out: choice D (49) is the single most common error on this question type: forgetting to take the square root.",
  "choices": [
   "3",
   "7",
   "14",
   "49"
  ],
  "answerIndex": 1
 },
 {
  "id": "M42",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Systems of two linear equations in two variables",
  "difficulty": 4,
  "level": 3,
  "type": "mc",
  "stimulus": "3x + 2y = 12\n6x + ky = 24",
  "question": "If the system of equations above has infinitely many solutions, what is the value of k?",
  "solution": "Infinitely many solutions means the two equations describe the same line, so one equation must be a multiple of the other. The second equation's x-coefficient (6) is exactly double the first's (3), and its constant (24) is double the first's (12). So its y-coefficient must also double: k = 2 × 2 = 4. With k = 4, the second equation is exactly twice the first — every solution of one is a solution of the other.",
  "choices": [
   "2",
   "4",
   "6",
   "8"
  ],
  "answerIndex": 1
 },
 {
  "id": "M43",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Nonlinear functions",
  "difficulty": 4,
  "level": 3,
  "type": "mc",
  "stimulus": "",
  "question": "What is the minimum value of the function f(x) = x² − 6x + 11?",
  "solution": "The minimum of an upward-opening parabola is the y-value at its vertex. Complete the square to put the function in vertex form: x² − 6x + 11 = (x² − 6x + 9) + 2 = (x − 3)² + 2. A square is never negative, so (x − 3)² ≥ 0, and the smallest possible value of the function is 0 + 2 = 2, reached at x = 3. Watch out: choice C (3) is the x-coordinate of the vertex — where the minimum occurs, not what the minimum is. The question asks for the minimum value (an output), so after finding x = 3 you still have one step: evaluate, or read the +2 off the vertex form.",
  "choices": [
   "−2",
   "2",
   "3",
   "11"
  ],
  "answerIndex": 1
 },
 {
  "id": "M44",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "One-variable data: distributions and measures of center and spread",
  "difficulty": 5,
  "level": 3,
  "type": "mc",
  "stimulus": "Data set A: 4, 6, 8, 10, 12\nData set B: 7, 8, 8, 8, 9",
  "question": "Which statement correctly compares the two data sets?",
  "solution": "Compute the means first. A: (4 + 6 + 8 + 10 + 12)/5 = 40/5 = 8. B: (7 + 8 + 8 + 8 + 9)/5 = 40/5 = 8. The means are equal, which eliminates choices C and D. For spread, don't compute unless you must — just look: A's values range from 4 to 12, spread widely around 8, while B's values are packed between 7 and 9. Greater spread means greater standard deviation, so A has the greater standard deviation.",
  "choices": [
   "A and B have the same mean, and A has the greater standard deviation.",
   "A and B have the same mean, and B has the greater standard deviation.",
   "B has a greater mean than A, and A has the greater standard deviation.",
   "A has a greater mean than B, and B has the greater standard deviation."
  ],
  "answerIndex": 0
 },
 {
  "id": "M45",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Right triangles and trigonometry",
  "difficulty": 4,
  "level": 3,
  "type": "mc",
  "stimulus": "In right triangle ABC, the right angle is at vertex C. The hypotenuse AB has length 25, side BC has length 7, and side AC has length 24.",
  "question": "What is the value of sin B?",
  "solution": "Sine of an angle is opposite over hypotenuse — but 'opposite' depends on which angle you're standing at. For angle B, the opposite side is the side that doesn't touch B, which is AC. So sin B = AC/AB = 24/25. (Consistency check: 7² + 24² = 49 + 576 = 625 = 25². ✓) Watch out: choice A (7/25) is sin A, not sin B — the two acute angles swap the opposite and adjacent sides. (It is also cos B, since the side adjacent to B is BC = 7.) Choice C (25/24) is greater than 1, which a sine can never be, because the hypotenuse is the longest side — you can eliminate it on sight.",
  "choices": [
   "7/25",
   "24/25",
   "25/24",
   "7/24"
  ],
  "answerIndex": 1
 },
 {
  "id": "M46",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Linear functions",
  "difficulty": 5,
  "level": 3,
  "type": "mc",
  "stimulus": "The function f is defined by f(x) = a(x − 3) + 7, where a is a constant. If f(5) = 13,",
  "question": "What is the value of f(9)?",
  "solution": "First use the known value to find a. f(5) = a(5 − 3) + 7 = 2a + 7 = 13, so 2a = 6 and a = 3. Now evaluate at 9: f(9) = 3(9 − 3) + 7 = 3(6) + 7 = 18 + 7 = 25. Watch out: choice A (19) comes from using a = 2 — solving 2a + 7 = 13 carelessly. Solve for the constant completely before evaluating.",
  "choices": [
   "19",
   "21",
   "25",
   "31"
  ],
  "answerIndex": 2
 },
 {
  "id": "M47",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Nonlinear functions",
  "difficulty": 5,
  "level": 3,
  "type": "grid",
  "stimulus": "The function f is defined by f(x) = 2x² − 7x + 3.",
  "question": "What is the product of the solutions to the equation f(x) = 0?",
  "solution": "For a quadratic ax² + bx + c = 0, the product of the two solutions is c/a — no solving required. Here a = 2 and c = 3, so the product is 3/2 = 1.5. (You can confirm by factoring: 2x² − 7x + 3 = (2x − 1)(x − 3), with roots 1/2 and 3, and 1/2 × 3 = 3/2. ✓) Its partner fact is just as useful: the sum of the solutions is −b/a.",
  "choices": null,
  "answerValue": "1.5"
 },
 {
  "id": "M48",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Probability and conditional probability",
  "difficulty": 5,
  "level": 3,
  "type": "mc",
  "stimulus": "A bag contains 5 red marbles and 7 blue marbles. Two marbles are drawn at random from the bag without replacement.",
  "question": "What is the probability that both marbles drawn are red?",
  "solution": "Without replacement, the two draws are dependent — the second probability uses the changed bag. First draw: 5 red out of 12, so 5/12. After removing a red marble, 4 red remain out of 11: 4/11. Multiply: (5/12)(4/11) = 20/132 = 5/33. Watch out: choice A (25/144) is (5/12)² — the answer if the marble were replaced. 'Without replacement' always means the second fraction's numbers both drop by one after a success.",
  "choices": [
   "25/144",
   "5/33",
   "5/12",
   "10/23"
  ],
  "answerIndex": 1
 },
 {
  "id": "M49",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Area and volume",
  "difficulty": 5,
  "level": 3,
  "type": "mc",
  "stimulus": "Two cones are similar. The smaller cone has a height of 4 and a volume of 24π cubic units. The larger cone has a height of 10.",
  "question": "What is the volume, in cubic units, of the larger cone?",
  "solution": "For similar solids, volumes scale with the cube of the linear scale factor. The heights go from 4 to 10, a scale factor of 10/4 = 2.5. Cube it: 2.5³ = 15.625. So the larger volume is 24π × 15.625 = 375π. Watch out: choice A multiplies by 2.5 once (that's how lengths scale) and choice B multiplies by 2.5² = 6.25 (that's how areas scale). Volume always takes the cube.",
  "choices": [
   "60π",
   "150π",
   "375π",
   "600π"
  ],
  "answerIndex": 2
 },
 {
  "id": "M50",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Nonlinear functions",
  "difficulty": 5,
  "level": 3,
  "type": "mc",
  "stimulus": "The amount, in grams, of a radioactive sample remaining after t days is modeled by A(t) = 240(0.5)^(t/6).",
  "question": "According to the function, how many grams of the sample remain after 18 days?",
  "solution": "Substitute t = 18: A(18) = 240(0.5)^(18/6) = 240(0.5)³. The exponent 18/6 = 3 means three halvings have occurred. So A(18) = 240 × (1/8) = 30 grams. Watch out: choice C (60) is the amount after only two halvings (12 days) — read the exponent as 'how many halving periods fit in the elapsed time,' not as the elapsed time itself.",
  "choices": [
   "15",
   "30",
   "60",
   "80"
  ],
  "answerIndex": 1
 },
 {
  "id": "R01",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Command of Evidence",
  "difficulty": 2,
  "level": 1,
  "type": "mc",
  "stimulus": "Restaurant owner Marta Alvarez claims that her restaurant's popularity grew mainly through word of mouth rather than through publicity.",
  "question": "Which quotation from the article would best support Alvarez's claim?",
  "solution": "The claim is specific: popularity grew through customers' recommendations (word of mouth), not promotion. D) Correct: no advertising, and the room filled because diners brought other people — word of mouth in action. A) Wrong: the chef's training might explain good food, but it is not a mechanism of popularity spreading. B) Wrong: glowing reviews are a form of publicity — a different explanation than word of mouth, and one the claim denies ('not publicity'). C) Wrong: design-magazine features are also publicity, not customer recommendations.",
  "choices": [
   "“The restaurant's chef had trained for a decade in some of the country's most celebrated kitchens.”",
   "“Local food critics gave the restaurant glowing reviews in its opening week.”",
   "“The restaurant's dining room was designed by a well-known architect and featured in two design magazines.”",
   "“With no money spent on advertising, the restaurant filled nightly within a month, as diners brought friends and coworkers to try the dishes they had been praising at home.”"
  ],
  "answerIndex": 3
 },
 {
  "id": "R02",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Text Structure and Purpose",
  "difficulty": 2,
  "level": 1,
  "type": "mc",
  "stimulus": "At the Elm Street branch of the public library, residents can now borrow more than books. The tool library lends drills, ladders, garden tools, and even a pressure washer, each for up to seven days. To borrow an item, residents simply present a library card, reserve the tool online or at the front desk, and return it by the due date. Late returns are charged a small daily fee, and borrowers are responsible for cleaning tools before bringing them back.",
  "question": "Which choice best describes the function of the text as a whole?",
  "solution": "Read for what the text actually does: it introduces the tool library, lists what it lends, and then gives the practical steps (library card, reservation, loan period). B) Correct: description plus participation instructions. A) Wrong: no funding argument is made; cost is never debated. C) Wrong: the text mentions no history beyond the library's existence. D) Wrong: the tone is welcoming, not critical of borrowers.",
  "choices": [
   "It argues that the city should spend more money on public libraries.",
   "It describes a community program and explains how residents can take part in it.",
   "It traces the history of lending programs from their origins to the present day.",
   "It criticizes residents who borrow tools instead of buying their own."
  ],
  "answerIndex": 1
 },
 {
  "id": "R03",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Transitions",
  "difficulty": 2,
  "level": 1,
  "type": "mc",
  "stimulus": "The museum extended its hours on weekends. ______ it began offering free admission on Sundays.",
  "question": "Which choice most logically completes the text?",
  "solution": "The second sentence adds a second, related improvement — it does not reverse, contradict, or set a condition on the first. B) In addition, — correct: it marks simple addition. A) Nevertheless, — wrong: that signals a contrast or concession, but free admission continues the same direction as extended hours. C) Otherwise, — wrong: it introduces a consequence if something is not done; nothing here is conditional. D) In contrast, — wrong: the two changes are alike (both expand access), not contrasting.",
  "choices": [
   "Nevertheless,",
   "In addition,",
   "Otherwise,",
   "In contrast,"
  ],
  "answerIndex": 1
 },
 {
  "id": "R04",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Boundaries",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "The city council's new plan includes the following improvements ______ a wetland restoration, a protected bike trail, and a community garden on the east side.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "When a complete independent clause ends by announcing a list — here with the phrase 'the following improvements' — a colon must introduce that list. B) improvements: — correct: the colon properly introduces the announced three-item list. A) improvements; — wrong: a semicolon joins two independent clauses (or separates complex list items); what follows is not an independent clause. C) improvements, — wrong: a comma cannot introduce an announced list after 'the following.' D) improvements — wrong: with no punctuation, the announced list runs directly into the clause with no mark to introduce it.",
  "choices": [
   "improvements;",
   "improvements:",
   "improvements,",
   "improvements"
  ],
  "answerIndex": 1
 },
 {
  "id": "R05",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Central Ideas and Details",
  "difficulty": 2,
  "level": 1,
  "type": "mc",
  "stimulus": "When Riverbend's night market opened in 2016, it had six stalls and a single string of lights. Today the Friday market fills four blocks with more than ninety vendors selling produce, street food, and handmade goods, and it draws thousands of visitors each week. Nearby restaurants, once closed by eight, now stay open late on Fridays to serve the market crowds.",
  "question": "Which choice best states the main idea of the text?",
  "solution": "A main idea must cover the whole text: the small beginning (six stalls), the growth (ninety vendors, thousands of visitors), and the spillover benefit (restaurants staying open later). B) Correct — it captures all three. A) Wrong: the text never says who the visitors are or where they come from. C) Wrong: restaurants are described extending their hours to serve the crowds, the opposite of opposition, and no proposal fight is mentioned. D) Wrong: food stalls and craft booths are mentioned together with no comparison of their success.",
  "choices": [
   "The night market is most popular with visitors who come from outside Riverbend.",
   "A weekly night market that began with a handful of vendors has grown into a major draw that benefits the whole downtown.",
   "Local restaurants opposed the night market when it was first proposed.",
   "The night market's food stalls are more successful than its craft booths."
  ],
  "answerIndex": 1
 },
 {
  "id": "R06",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Words in Context",
  "difficulty": 2,
  "level": 1,
  "type": "mc",
  "stimulus": "Faced with a recycling problem that had stumped manufacturers for years, chemist Lena Ortiz proposed a novel approach: instead of shredding discarded circuit boards, she dissolved them in a mild acid bath that left the valuable metals intact. Two factories have now adopted her method.",
  "question": "As used in the text, “novel” most nearly means",
  "solution": "The chemist's approach worked on a problem that had stumped manufacturers 'for years,' and it is now being adopted — the point is that the approach is new, not that it is a story. B) new — correct. A) fictional — wrong: that is the noun sense of 'novel' (a book of fiction); nothing here is invented or untrue. C) lengthy — wrong: the text says nothing about the approach being long or time-consuming. D) familiar — wrong: the opposite of what the context requires; a familiar method would not have solved a problem that resisted everyone for years.",
  "choices": [
   "fictional",
   "new",
   "lengthy",
   "familiar"
  ],
  "answerIndex": 1
 },
 {
  "id": "R07",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Transitions",
  "difficulty": 3,
  "level": 1,
  "type": "mc",
  "stimulus": "The new irrigation system uses soil sensors to water crops only when the ground is actually dry. ______ farms using the system have cut their water use by about a third.",
  "question": "Which choice most logically completes the text?",
  "solution": "Sentence 2 reports the outcome caused by the system described in sentence 1: sensors water only when needed, so water use fell. A) As a result, — correct: it marks cause and effect. B) In other words, — wrong: that restates the same idea in new words; a one-third reduction is a new result, not a restatement. C) On the other hand, — wrong: that introduces a contrasting point, but the savings agree with the system's purpose. D) Similarly, — wrong: that compares two like cases; there is only one case here, and the relationship is causal, not comparative.",
  "choices": [
   "As a result,",
   "In other words,",
   "On the other hand,",
   "Similarly,"
  ],
  "answerIndex": 0
 },
 {
  "id": "R08",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Boundaries",
  "difficulty": 2,
  "level": 1,
  "type": "mc",
  "stimulus": "The trail was steep and rocky ______ the hikers reached the summit by noon.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Both halves of the sentence can stand alone: 'The trail was steep and rocky' and 'the hikers reached the summit by noon.' When a coordinating conjunction (here, 'and') joins two independent clauses, a comma goes before the conjunction. A) rocky, and — correct. B) rocky; and — wrong: a semicolon joins independent clauses without a conjunction; it is not paired with 'and.' C) rocky and — wrong: joining two independent clauses with only 'and' and no comma is a comma-splice/run-on error. D) rocky — and — wrong: a dash does not mark this clause boundary in Standard English.",
  "choices": [
   "rocky, and",
   "rocky; and",
   "rocky and",
   "rocky — and"
  ],
  "answerIndex": 0
 },
 {
  "id": "R09",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Command of Evidence",
  "difficulty": 3,
  "level": 1,
  "type": "mc",
  "stimulus": "Historian David Osei claims that novelist Clara Marsh wrote her most famous novel, The Harbor Line, while she was working as a telegraph operator in the coastal town of Bracken.",
  "question": "Which quotation from the biography would best support the historian's claim?",
  "solution": "The claim has two parts — she was a telegraph operator, and she wrote the novel during that period — so the best evidence must show both at once. C) Correct: it places her shifts and her revision of the novel in the same evenings. A) Wrong: publication dates say nothing about her job or when she wrote. B) Wrong: readers' praise concerns the novel's quality, not its composition. D) Wrong: sailing with her uncle explains the harbor scenes' source, not the telegraph-office claim.",
  "choices": [
   "“Marsh published three novels, the last of which appeared in 1909.”",
   "“Readers across the country wrote to Marsh praising the novel's vivid harbor scenes.”",
   "“She revised the novel in the evenings after her shifts ended, keeping the telegraph office's logbook beside her drafts.”",
   "“Marsh's harbor scenes were based on the years she spent sailing with her uncle.”"
  ],
  "answerIndex": 2
 },
 {
  "id": "R10",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Words in Context",
  "difficulty": 2,
  "level": 1,
  "type": "mc",
  "stimulus": "Marine engineer Mira Solano developed a coating for harbor pilings after noticing that ordinary paint peeled away within a single season. When applied to steel, her coating reacts with the outer layer of metal to form a dense mineral film. Once that film forms, it can arrest the spread of rust, even when the piling is scratched, because the exposed metal quickly seals itself again.",
  "question": "As used in the text, “arrest” most nearly means",
  "solution": "The coating forms a film that prevents rust from spreading, and scratched metal 'seals itself again.' In context, 'arrest' describes stopping a process. B) halt — correct: to halt the spread of rust is exactly what the self-sealing film does. A) capture — wrong: rust is not caught like a person or animal; its progress is stopped. C) attract — wrong: this reverses the meaning; the coating prevents damage rather than drawing rust in. D) record — wrong: the coating does not document rust; it prevents it from spreading.",
  "choices": [
   "capture",
   "halt",
   "attract",
   "record"
  ],
  "answerIndex": 1
 },
 {
  "id": "R11",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Rhetorical Synthesis",
  "difficulty": 3,
  "level": 1,
  "type": "mc",
  "stimulus": "While researching a topic, a student has taken the following notes:\n\n• A city study measured tree canopy coverage and summer afternoon temperatures in several neighborhoods.\n• Northgate had 41% tree canopy coverage and recorded summer afternoon temperatures 6°F lower than the city average.\n• Southgate had 12% tree canopy coverage and recorded summer afternoon temperatures 2°F higher than the city average.\n• The study was conducted over three summers.\n• Citywide, average canopy coverage was 25%.",
  "question": "The student wants to emphasize a difference between the study's results for two neighborhoods. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
  "solution": "The goal is a contrast between two specific neighborhoods, so the winning choice must put both neighborhoods' numbers side by side. D) Correct: Northgate (41% canopy, 6°F below average) against Southgate (12% canopy, 2°F above average) — the difference is explicit. A) Wrong: it describes the study generally and names no neighborhood. B) Wrong: it names both neighborhoods but reports no results, so no difference is emphasized. C) Wrong: the range 12%–41% hints at variation but never ties the figures to the two neighborhoods or their temperatures.",
  "choices": [
   "A city study measured tree canopy coverage and summer afternoon temperatures in several neighborhoods.",
   "Northgate and Southgate are two neighborhoods in the same city that participated in the study.",
   "Tree canopy coverage in the neighborhoods studied ranged from 12% to 41%.",
   "While the Northgate neighborhood, with 41% tree canopy, recorded summer afternoon temperatures 6°F lower than the city average, the Southgate neighborhood, with only 12% canopy, recorded temperatures 2°F higher than the average."
  ],
  "answerIndex": 3
 },
 {
  "id": "R12",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Form, Structure, and Sense",
  "difficulty": 2,
  "level": 1,
  "type": "mc",
  "stimulus": "Each of the proposals submitted by the engineering teams ______ been reviewed by the board.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "The subject is 'Each' — singular — even though a long prepositional phrase ('of the proposals submitted by the engineering teams') sits between the subject and the verb. B) has — correct: singular verb for the singular subject, completing 'has been reviewed.' A) have — wrong: 'have' agrees with 'proposals' or 'teams,' objects inside the phrase, not with the subject. C) are — wrong: plural, same error. D) were — wrong: plural and past; the subject is singular.",
  "choices": [
   "have",
   "has",
   "are",
   "were"
  ],
  "answerIndex": 1
 },
 {
  "id": "R13",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Central Ideas and Details",
  "difficulty": 3,
  "level": 1,
  "type": "mc",
  "stimulus": "To build the footbridge across the Mara River, engineers chose bamboo rather than steel. Bamboo poles were light enough to be carried to the site by workers on foot, yet strong enough, once lashed together, to support the bridge's walkway. Just as important, bamboo grew in dense stands along the river, so replacement poles could be harvested nearby whenever repairs were needed.",
  "question": "According to the text, why did the engineers choose to build the footbridge from bamboo?",
  "solution": "Detail questions are answered by what the text states, not by what sounds sensible. The text gives exactly two reasons: bamboo's strength relative to its weight ('light enough to be carried... strong enough') and local availability ('grew in dense stands along the river'). C) Correct — it combines both stated reasons. A) Wrong: the engineers' experience is never mentioned. B) Wrong: insects and metal alternatives are never discussed. D) Wrong: building codes are never mentioned; the choice is explained by practicality, not rules.",
  "choices": [
   "It was the material the engineers had the most experience working with.",
   "It resisted damage from insects better than any metal alternative.",
   "It was lightweight yet strong, and the materials for it were available locally.",
   "It was required by the region's traditional building codes."
  ],
  "answerIndex": 2
 },
 {
  "id": "R14",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Words in Context",
  "difficulty": 3,
  "level": 1,
  "type": "mc",
  "stimulus": "As the afternoon wore on, the hikers' energy began to flag, and their pace slowed noticeably on the final climb toward the ridge.",
  "question": "As used in the text, “flag” most nearly means",
  "solution": "The hikers' pace 'slowed noticeably' as their energy flagged — the context describes a gradual loss of strength, not a complete halt (they were still walking). C) weaken — correct. A) signal — wrong: that is the noun/verb sense of a flag used to send a message; no signaling occurs. B) wave — wrong: nothing flutters or moves back and forth here. D) stop entirely — wrong: too strong; the hikers kept going, just more slowly. On vocabulary questions, beware choices that overshoot the degree the context supports.",
  "choices": [
   "signal",
   "wave",
   "weaken",
   "stop entirely"
  ],
  "answerIndex": 2
 },
 {
  "id": "R15",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Form, Structure, and Sense",
  "difficulty": 2,
  "level": 1,
  "type": "mc",
  "stimulus": "The collection of glass negatives discovered in the photographer's attic, carefully wrapped in paper and labeled by year, ______ now on display at the county museum.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Find the true subject. The subject is 'collection' (singular); 'of glass negatives' and the participial phrase 'discovered in the photographer's attic, carefully wrapped in paper and labeled by year' are modifiers that do not change the subject's number. B) is — correct: singular verb for the singular subject. A) are — wrong: 'are' would agree with 'negatives,' but 'negatives' is the object of a preposition, not the subject. C) have been — wrong: plural form; same agreement error, plus an unnecessary perfect construction. D) were being — wrong: plural and past progressive, while the display is happening now ('now on display').",
  "choices": [
   "are",
   "is",
   "have been",
   "were being"
  ],
  "answerIndex": 1
 },
 {
  "id": "R16",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Central Ideas and Details",
  "difficulty": 3,
  "level": 1,
  "type": "mc",
  "stimulus": "For generations, the ferry between Alston and Port Grey was the fastest way across the bay, carrying workers, shoppers, and schoolchildren in both directions. The service ended in 1968, when a new highway bridge opened. In 2021, after decades of campaigns by residents, a ferry returned to the route — and in its first summer it carried more than 40,000 passengers, many of them commuters who had lobbied for its return.",
  "question": "Which choice best states the main idea of the text?",
  "solution": "The text tells one arc: the ferry mattered, it disappeared in 1968, and its 2021 return has been embraced (40,000 riders in the first summer). A) Correct: past reliance, long absence, heavy use again. B) Wrong: speed is never mentioned or compared. C) Wrong: fares are never mentioned. D) Wrong: future service plans are never mentioned — the text looks backward and at the present, not ahead.",
  "choices": [
   "A ferry service that residents once relied on has returned after a long absence and is again heavily used.",
   "The new ferry is faster than the ferry that operated a century ago.",
   "Fares on the restored ferry have risen steadily since it reopened.",
   "The ferry's operators plan to add weekend service next year."
  ],
  "answerIndex": 0
 },
 {
  "id": "R17",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Text Structure and Purpose",
  "difficulty": 3,
  "level": 1,
  "type": "mc",
  "stimulus": "For decades, many coastal planners assumed that tidal marshes were simply wastelands that happened to flood — land waiting to be drained and built on. Research by ecologist Priya Nair and her colleagues has overturned that picture. In study after study, Nair's team found that marsh grasses slow incoming floodwater, trap sediment that builds the marsh upward as seas rise, and shelter young fish that later support commercial catches offshore. What once looked like empty, waterlogged ground turns out to be some of the hardest-working land on the coast.",
  "question": "Which choice best describes the overall structure of the text?",
  "solution": "For structure questions, track the text's movement from beginning to end, not just its topic. A) Correct: the text opens with what planners 'assumed' for decades, then pivots — 'has overturned that picture' — to Nair's research. B) Wrong: only one research program (Nair's team's) is described; no two methods are compared. C) Wrong: no question is posed, and the text clearly endorses one conclusion. D) Wrong: no specific policy is proposed; the text changes how marshes are understood rather than telling planners what to enact.",
  "choices": [
   "It presents a long-held assumption, then describes research that overturns that assumption.",
   "It compares two competing research methods, then explains why one method is more reliable than the other.",
   "It poses a scientific question, then lists several possible answers without endorsing any of them.",
   "It describes a problem facing coastal planners, then proposes a specific policy for solving it."
  ],
  "answerIndex": 0
 },
 {
  "id": "R18",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Form, Structure, and Sense",
  "difficulty": 3,
  "level": 1,
  "type": "mc",
  "stimulus": "The internship requires that applicants submit a résumé, write a cover letter, and ______",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "The sentence builds a parallel series of base-form verbs after 'requires that applicants': submit, write, and ______. The third item must match the same form. B) provide references — correct: it keeps the series parallel (submit / write / provide). A) providing references — wrong: the -ing form breaks the pattern set by 'submit' and 'write.' C) references are provided — wrong: it switches to a passive clause, breaking both form and voice. D) to provide references — wrong: the infinitive does not match the base forms used in the first two items.",
  "choices": [
   "providing references",
   "provide references",
   "references are provided",
   "to provide references"
  ],
  "answerIndex": 1
 },
 {
  "id": "R19",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Central Ideas and Details",
  "difficulty": 3,
  "level": 1,
  "type": "mc",
  "stimulus": "When the town of Harbor Falls converted a vacant storefront into a public makerspace in 2019, skeptics predicted it would sit empty. Instead, the space — stocked with sewing machines, a small woodshop, and three 3D printers — now hosts more than 400 visitors a month. Local retirees teach evening repair clinics, high school students prototype robotics parts there, and a Saturday market lets members sell what they make. Town records show that in 2024 alone, the makerspace's repair clinics kept an estimated 2,300 household items out of the landfill.",
  "question": "Which choice best states the main idea of the text?",
  "solution": "The main idea must cover the whole text — the heavy use (400 visitors a month), the varied users (retirees, students, sellers), and the practical benefit (2,300 items kept out of the landfill). A) Correct: 'heavily used community resource with practical benefits' accounts for every detail. B) Wrong: the 3D printers are one detail in a list, and the text never calls them the most popular equipment — too narrow. C) Wrong: the text celebrates the conversion to a makerspace and never recommends retail stores instead. D) Wrong: recycling programs are never mentioned, so no comparison with them can be the main idea.",
  "choices": [
   "A makerspace in Harbor Falls has become a heavily used community resource with practical benefits for residents.",
   "Three-dimensional printers are the most popular piece of equipment in the Harbor Falls makerspace.",
   "Towns should convert vacant storefronts into retail stores rather than community spaces.",
   "Repair clinics are more effective at reducing landfill waste than recycling programs are."
  ],
  "answerIndex": 0
 },
 {
  "id": "R20",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Form, Structure, and Sense",
  "difficulty": 3,
  "level": 1,
  "type": "mc",
  "stimulus": "Neither the engineers nor the project manager ______ responsible for updating the safety checklist after the design changed, which is why the outdated version was still posted in the workshop last week.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "In a 'neither … nor' construction, the verb agrees with the nearer subject. Here the nearer subject is 'the project manager' (singular), so the verb must be singular — and the past-time frame ('was still posted … last week') requires a past-tense form. B) was — correct on both counts. A) were — wrong: 'were' would agree with 'engineers,' but agreement follows the subject closest to the verb. C) are being — wrong: plural and present tense; it fails both the agreement rule and the time frame. D) have been — wrong: plural form agreeing with the farther subject rather than the nearer one.",
  "choices": [
   "were",
   "was",
   "are being",
   "have been"
  ],
  "answerIndex": 1
 },
 {
  "id": "R21",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Inferences",
  "difficulty": 3,
  "level": 2,
  "type": "mc",
  "stimulus": "In a study of how sleep affects learning, researchers had one group of participants take a ninety-minute nap after studying a list of word pairs, while a second group stayed awake for the same period. When tested later, the group that had napped recalled significantly more of the pairs than the group that had not. The findings suggest that sleep ______",
  "question": "Which choice most logically completes the text?",
  "solution": "The study shows one effect: the nap group recalled 'significantly more' than the group that stayed awake. The completion must match that strength — no more, no less. C) Correct: 'helps consolidate' states a contributing role, exactly what a single comparison supports. A) Wrong: 'the only factor' is far stronger than one study can show. B) Wrong: 'guarantees… everything' is absolute; the nap group recalled more, not everything. D) Wrong: it contradicts the reported result outright.",
  "choices": [
   "is the only factor that determines how well students remember new material",
   "guarantees that students will remember everything they studied the day before",
   "helps consolidate newly learned material in memory",
   "has no measurable effect on memory, despite what the participants reported"
  ],
  "answerIndex": 2
 },
 {
  "id": "R22",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Cross-Text Connections",
  "difficulty": 3,
  "level": 2,
  "type": "mc",
  "stimulus": "Text 1\n\nSchools that build vegetable gardens give their students more than fresh produce. Students who plant, tend, and harvest a garden learn where food comes from, and studies show they score higher on tests of nutrition knowledge afterward. Because students who understand nutrition make healthier choices, school gardens improve students' diets.\n\nText 2\n\nIt is true that students who tend gardens learn a great deal about vegetables. But knowledge is not the same as lunch. In the districts I studied, students who worked in school gardens scored higher on nutrition quizzes, yet the food they actually chose in the cafeteria barely changed — because the cafeteria kept serving the same meals. A garden can teach; it cannot, by itself, decide what is on the tray.",
  "question": "Based on the texts, how would the author of Text 2 most likely respond to the claim in Text 1 that school gardens improve students' diets?",
  "solution": "Text 2 explicitly grants Text 1's evidence — 'It is true that students who tend gardens learn a great deal about vegetables' — and then draws a line between knowledge and eating: the cafeteria offerings did not change, so diets did not either. B) Correct: concession plus limitation. A) Wrong: Text 2 affirms the knowledge effect, so 'no effect' contradicts it. C) Wrong: Text 2 never proposes replacing gardens with cooking classes or anything else. D) Wrong: garden size is never mentioned, and Text 2 does not agree that diets improve.",
  "choices": [
   "By arguing that school gardens have no effect on students' knowledge or behavior",
   "By conceding that gardens improve what students know about nutrition while maintaining that gardens alone may not change what students actually eat",
   "By insisting that schools should replace garden programs with cooking classes",
   "By agreeing that gardens improve students' diets as long as the gardens are large enough"
  ],
  "answerIndex": 1
 },
 {
  "id": "R23",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Rhetorical Synthesis",
  "difficulty": 3,
  "level": 2,
  "type": "mc",
  "stimulus": "While researching a topic, a student has taken the following notes:\n\n• The Night Garden is an exhibit at the Harborview Botanical Garden.\n• The exhibit features more than 200 species of flowers that bloom only after dark.\n• Most flowers in the botanical garden's other exhibits close at dusk.\n• The Night Garden remains open until midnight on Fridays and Saturdays.\n• The exhibit was founded in 1962 by botanist Ingrid Halvorsen.\n• Head gardener Tomas Reyes has tended the exhibit for twelve years.",
  "question": "The student wants to emphasize what makes the Night Garden unusual. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
  "solution": "Goal first: the sentence must highlight unusualness. The notes that serve that goal are the night-blooming flowers, the fact that most flowers close at dusk, and the midnight closing that lets visitors see the blooms. C) Correct: it combines exactly those notes into a contrast with ordinary displays. A) Wrong: founding date and founder are background facts, not what makes the exhibit unusual. B) Wrong: the gardener's tenure and plant count are details, but they do not capture the dusk-versus-midnight contrast that makes the exhibit distinctive. D) Wrong: it places the exhibit among others without identifying anything unusual about it.",
  "choices": [
   "The Night Garden, founded in 1962 by botanist Ingrid Halvorsen, is one of the oldest exhibits at the botanical garden.",
   "Head gardener Tomas Reyes, who has tended the Night Garden for twelve years, oversees a collection of more than 200 night-blooming plants.",
   "Unlike most garden displays, which close at dusk, the exhibit showcases flowers that bloom only after dark and remains open until midnight so visitors can see them.",
   "The Night Garden is one of several exhibits at the botanical garden, which also maintains a rose garden and a desert house."
  ],
  "answerIndex": 2
 },
 {
  "id": "R24",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Boundaries",
  "difficulty": 3,
  "level": 2,
  "type": "mc",
  "stimulus": "The final report — drafted by the committee over several months ______ was released to the public on Friday.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "The phrase 'drafted by the committee over several months' is a parenthetical inserted into the sentence, and it was opened with a dash (after 'report'). A parenthetical must be closed with the same mark that opened it. A) months — — correct: the closing dash matches the opening dash, and the sentence reads 'The final report … was released to the public on Friday.' B) months, — wrong: comma to close a dash-opened parenthetical mixes marks. C) months; — wrong: a semicolon cannot close a parenthetical and would sever the subject from its verb. D) months — wrong: with no closing mark, the parenthetical never closes.",
  "choices": [
   "months —",
   "months,",
   "months;",
   "months"
  ],
  "answerIndex": 0
 },
 {
  "id": "R25",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Command of Evidence",
  "difficulty": 3,
  "level": 2,
  "type": "mc",
  "stimulus": "A librarian claims that a branch's number of visits does not determine how heavily its collection is used: a quieter branch can lend more items per visit than a busier one.",
  "question": "Which choice best supports the librarian's claim?",
  "solution": "Do the division the claim requires. Items per visit: A = 18,000/12,000 = 1.5; B = 16,200/9,000 = 1.8; C = 19,500/15,000 = 1.3. Branch B has the fewest visits (9,000) yet the highest rate (1.8 items per visit). C) Correct: it states both halves with the computed rate. A) Wrong: false — A lent 18,000, fewer than C's 19,500. B) Wrong: the numbers are accurate but raw; without the per-visit rate they do not test the claim. D) Wrong: the totals are accurate, but 'most visits and most items' describes C without addressing lending per visit.",
  "choices": [
   "Branch A lent more items in total than Branch C did.",
   "Branch B received 9,000 visits and lent 16,200 items last year.",
   "Branch B had the fewest visits of the three branches but lent the most items per visit, about 1.8.",
   "Branch C had the most visits and lent the most items overall."
  ],
  "answerIndex": 2
 },
 {
  "id": "R26",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Text Structure and Purpose",
  "difficulty": 3,
  "level": 2,
  "type": "mc",
  "stimulus": "The lantern beetle of Central America carries two pale patches on its back that glow green after dark. The glow is produced inside specialized cells, where a compound called luciferin reacts with oxygen in the presence of an enzyme. That reaction releases energy almost entirely as light rather than heat, which is why the patches can shine brightly without warming the beetle's body.",
  "question": "Which choice best describes the overall structure of the text?",
  "solution": "The text opens by introducing the beetle and its glowing patches, then spends the rest of the passage explaining how the glow is produced — the chemical reaction between luciferin and the enzyme. A) Correct: introduction followed by mechanism. B) Wrong: only one explanation is given; nothing competes with it. C) Wrong: no experiment is described or reported on. D) Wrong: only one species is discussed, and no ranking occurs.",
  "choices": [
   "It introduces an organism, then explains the mechanism that produces one of its unusual features.",
   "It presents two competing explanations for an organism's appearance and argues that one is better supported.",
   "It describes an experiment and then reports the unexpected results the experiment produced.",
   "It lists several species in order of the brightness of their markings."
  ],
  "answerIndex": 0
 },
 {
  "id": "R27",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Transitions",
  "difficulty": 3,
  "level": 2,
  "type": "mc",
  "stimulus": "Early reviewers dismissed painter Lucia Ferrante's harbor scenes as pleasant but minor works. ______ as museums began acquiring her large night paintings, critics started to reassess her career, and a 2019 retrospective drew record crowds.",
  "question": "Which choice most logically completes the text?",
  "solution": "Test the logic between the sentences. Sentence 1: early dismissal. Sentence 2: later reassessment and record crowds. The relationship is a change over time that reverses the first judgment — a contrast plus a time shift. C) Over time, however, — correct: 'over time' supplies the years that passed, and 'however' signals the reversal. A) Similarly, — wrong: it claims the second sentence continues in the same direction, but a reassessment after dismissal is the opposite direction. B) In other words, — wrong: that transition restates the same idea; sentence 2 reports new developments. D) For example, — wrong: museum acquisitions and a retrospective are not an example of reviewers dismissing Ferrante.",
  "choices": [
   "Similarly,",
   "In other words,",
   "Over time, however,",
   "For example,"
  ],
  "answerIndex": 2
 },
 {
  "id": "R28",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Form, Structure, and Sense",
  "difficulty": 3,
  "level": 2,
  "type": "mc",
  "stimulus": "______ the librarian finally found the missing manuscript in the archive's basement.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "The introductory phrase 'Searching for hours through the catalog' must describe the person who did the searching — the librarian, who is the subject of the main clause. A) Correct: the phrase attaches to 'the librarian,' and the sentence is complete. B) Wrong: it makes the manuscript the searcher (a dangling modifier) — the manuscript did not search the catalog. C) Wrong: it produces a fragment; 'the search…' never gets a verb. D) Wrong: 'Hours of searching…, and then the librarian finally found…' is a broken, run-on construction.",
  "choices": [
   "Searching for hours through the catalog,",
   "Searching for hours through the catalog, the manuscript was finally located by",
   "The search through the catalog, lasting for hours and finally successful,",
   "Hours of searching through the catalog, and then"
  ],
  "answerIndex": 0
 },
 {
  "id": "R29",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Command of Evidence",
  "difficulty": 3,
  "level": 2,
  "type": "mc",
  "stimulus": "Urban ecologist Sam Whitaker claims that the native bees in his study are not generalists that visit any available flower, but specialists whose activity is closely tied to one particular plant. Whitaker tracked bee visits in the Kestrel Street gardens over two summers, recording which species visited which flowers and when each plant bloomed.",
  "question": "Which quotation from Whitaker's field report would best support his claim?",
  "solution": "The best evidence must support the specific claim — specialization tied to one plant — not just the general topic of bees. C) Correct: the Halstead bee appeared only during the dune lupine's eleven-day bloom and visited only that plant despite alternatives; that is direct evidence of specialization. A) Wrong: a count of forty species shows diversity, not specialization. B) Wrong: bees moving among coneflowers, asters, and milkweed alike suggests generalist behavior — if anything, it cuts against the claim. D) Wrong: hive behavior is irrelevant to which flowers the bees visit.",
  "choices": [
   "“More than forty species of native bees were observed in the gardens over the two summers of the study.”",
   "“On warm mornings, the gardens were busy with bees moving among coneflowers, asters, and milkweed alike.”",
   "“The Halstead bee was recorded only during the eleven days when the dune lupine bloomed, and every one of its observed visits was to that plant, even though other flowers were available nearby.”",
   "“Native bees, unlike honeybees, do not live in large hives managed by beekeepers.”"
  ],
  "answerIndex": 2
 },
 {
  "id": "R30",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Words in Context",
  "difficulty": 3,
  "level": 2,
  "type": "mc",
  "stimulus": "Historian Paula Alvarez was the first to coin the term “harbor republics” for the independent port cities of the eighteenth century, introducing it in a 1963 essay that other scholars soon began to cite.",
  "question": "As used in the text, “coin” most nearly means",
  "solution": "The term did not exist before Alvarez used it in her 1963 essay; she created it, and others then adopted it. B) invent — correct: to coin a word or phrase is to create it. A) spend — wrong: no money changes hands; the 'coin' here is a verb about language. C) counterfeit — wrong: counterfeiting means faking something valuable; Alvarez originated a genuine term. D) collect — wrong: she was the first to use the term, not someone gathering existing ones.",
  "choices": [
   "spend",
   "invent",
   "counterfeit",
   "collect"
  ],
  "answerIndex": 1
 },
 {
  "id": "R31",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Rhetorical Synthesis",
  "difficulty": 3,
  "level": 2,
  "type": "mc",
  "stimulus": "While researching a topic, a student has taken the following notes:\n\n• Architect Rosa Delgado designed the North Branch Library, completed in 2018.\n• The library's roof holds 84 solar panels.\n• Delgado oriented the building's reading rooms to face north, so they receive steady light without direct glare.\n• The library's walls were built with bricks reclaimed from a demolished warehouse on the same site.\n• Delgado grew up two blocks from the site of the library.\n• The library won a regional design award in 2019.",
  "question": "The student wants to emphasize the library's sustainable design. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
  "solution": "Rhetorical Synthesis means goal first: keep only notes that serve the stated goal (emphasize sustainable design) and use as many of the relevant ones as the choice allows. C) Correct: it combines all three sustainability notes — rooftop solar panels, north-facing rooms that give light without glare, and reclaimed-brick walls — and nothing irrelevant. A) Wrong: it emphasizes the award and completion date, not sustainable design. B) Wrong: Delgado's childhood home is biographical and says nothing about sustainability. D) Wrong: the trap — it is about sustainability, but it drops the reclaimed-brick walls, one of the three relevant notes, so it accomplishes the goal less effectively than C.",
  "choices": [
   "Designed by architect Rosa Delgado and completed in 2018, the North Branch Library won a regional design award the following year.",
   "Rosa Delgado, who grew up two blocks from the site, designed the North Branch Library, which was completed in 2018.",
   "The North Branch Library reflects sustainable design in its 84 rooftop solar panels, its north-facing reading rooms that provide light without glare, and its walls built from bricks reclaimed from a demolished warehouse on the site.",
   "The North Branch Library, designed by Rosa Delgado, has north-facing reading rooms and 84 solar panels on its roof."
  ],
  "answerIndex": 2
 },
 {
  "id": "R32",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Boundaries",
  "difficulty": 4,
  "level": 2,
  "type": "mc",
  "stimulus": "The first prototype overheated during testing ______ the redesigned model ran for six hours without issue.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "'However' here is a conjunctive adverb joining two independent clauses: 'The first prototype overheated during testing' and 'the redesigned model ran for six hours.' Joining two independent clauses with a conjunctive adverb requires a semicolon before it and a comma after it. A) testing; however, — correct. B) testing, however, — wrong: a comma alone creates a comma splice. C) testing however, — wrong: no boundary mark at all before 'however.' D) testing: however, — wrong: a colon introduces a list or explanation; it does not join two clauses with a conjunctive adverb.",
  "choices": [
   "testing; however,",
   "testing, however,",
   "testing however,",
   "testing: however,"
  ],
  "answerIndex": 0
 },
 {
  "id": "R33",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Command of Evidence",
  "difficulty": 3,
  "level": 2,
  "type": "mc",
  "stimulus": "A school district installed rooftop solar panels at three of its schools and tracked the results during the first full year of operation. District officials claim that the size of a school's panel array was not the main factor in how much of the school's electricity the panels supplied; how much electricity the school used mattered more.",
  "question": "Which choice best supports the officials' claim?",
  "solution": "With a table, test the claim against the numbers. The claim has two parts: array size was not the main factor, and total electricity use mattered more. Brookfield has the most panels (200) and generated the most electricity (52,000 kWh), yet supplied the smallest share (25%) — because its total use (208,000 kWh) dwarfs the other schools'. C) Correct: it is the only choice connecting panels, generation, share, and total use — the full comparison the claim requires. A) Wrong: true, but it compares only panel counts. B) Wrong: true, but it compares only generation; Alden actually supplied a larger share (50%) despite generating less. D) Wrong: true, but it shows panels and generation rising together and never mentions total use, the key variable.",
  "choices": [
   "Brookfield Middle has more panels than Cedar High has.",
   "Alden Elementary generated less electricity than Brookfield Middle generated.",
   "Brookfield Middle has the most panels and generated the most electricity, yet its panels supplied the smallest share of its school's electricity because the school's total use was by far the highest.",
   "Cedar High generated more electricity than Alden Elementary generated, and Cedar High also has more panels than Alden Elementary has."
  ],
  "answerIndex": 2
 },
 {
  "id": "R34",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Text Structure and Purpose",
  "difficulty": 3,
  "level": 2,
  "type": "mc",
  "stimulus": "Inventor Daniel Reyes did not set out to build a better water filter. Working in his family's bakery in 1998, he first tried to design a cheaper way to cool the ovens at night. His early notebooks are filled with failed fans and heat pipes. Only in 2004, after watching a pot of soup strain through a woven cloth, did Reyes turn to filtration. By 2007 he had patented a layered fabric filter, and by 2012 a version of it was being tested in rural clinics. The bakery, Reyes likes to say, is still in the filter business — it just took him a decade to notice.",
  "question": "Which choice best describes the function of the text as a whole?",
  "solution": "Ask what story the whole text tells. The timeline runs bakery cooling (1998) → soup-pot observation (2004) → filter patent (2007) → clinic tests (2012). B) Correct: the text traces a path from one field (bakery equipment) to an unexpected achievement in another (water filtration). A) Wrong: the tone is admiring, not critical, and Reyes's attention shifted after an observation rather than under pressure. C) Wrong: the text never explains how the layered fabric filter works scientifically. D) Wrong: clinics are testing the filter, and nothing claims it has been overlooked or treated unfairly.",
  "choices": [
   "It criticizes an inventor for abandoning his original research goal.",
   "It traces how an inventor's work in one area unexpectedly led to an achievement in another.",
   "It explains the scientific principles that make a particular invention effective.",
   "It argues that a particular invention has been unfairly overlooked by clinics."
  ],
  "answerIndex": 1
 },
 {
  "id": "R35",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Form, Structure, and Sense",
  "difficulty": 4,
  "level": 2,
  "type": "mc",
  "stimulus": "Among the artifacts recovered from the shipwreck ______ a brass compass and several coins.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "The sentence is inverted: the verb comes before its subject. The subject follows the blank — 'a brass compass and several coins' — which is compound and therefore plural. B) were — correct: plural verb matching the compound subject ('Among the artifacts recovered from the shipwreck were a brass compass and several coins'). A) was — wrong: it agrees only with 'compass,' the first item, ignoring 'and several coins.' C) is being — wrong: singular and the wrong tense for a completed recovery. D) has — wrong: singular, and it cannot stand as the main verb here.",
  "choices": [
   "was",
   "were",
   "is being",
   "has"
  ],
  "answerIndex": 1
 },
 {
  "id": "R36",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Command of Evidence",
  "difficulty": 4,
  "level": 2,
  "type": "mc",
  "stimulus": "Ecologist Priya Raman claims that the decline of the marsh frog in the Delmar wetlands is driven mainly by habitat fragmentation — the breaking of the marsh into small, isolated patches — rather than by the fungal disease that has affected other frog species.",
  "question": "Which finding, if true, would most directly support Raman's claim?",
  "solution": "Raman's claim has two parts: fragmentation is the driver, and disease is not. The strongest evidence tests both at once. B) Correct: declines occurred where roads fragmented the marsh and disease was absent — isolating fragmentation as the cause. A) Wrong: it documents the disease, which supports the rival explanation Raman argues against. C) Wrong: it confirms a decline happened but says nothing about why. D) Wrong: it offers a third possible cause (predators) and supports neither part of Raman's claim.",
  "choices": [
   "“Several frog species in the region carry a fungal disease that has reduced their numbers in recent years.”",
   "“Where new roads divided the marsh into isolated patches, frog populations fell sharply, even though no disease was detected in those areas.”",
   "“The marsh's frog population has declined by roughly a third over the past decade.”",
   "“Predators such as herons have become more common in the marsh as water levels have changed.”"
  ],
  "answerIndex": 1
 },
 {
  "id": "R37",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Cross-Text Connections",
  "difficulty": 3,
  "level": 2,
  "type": "mc",
  "stimulus": "Text 1\n\nPlant enough trees, and a city's summer heat problem is solved. That is the promise behind the Green Canopy Initiative in the city of Valden. Shade from street trees can lower sidewalk temperatures dramatically on hot afternoons, and neighborhoods that have completed their plantings already report cooler evening walks. If Valden finishes planting the 40,000 trees in its plan, its hottest districts will no longer swelter.\n\nText 2\n\nStreet trees unquestionably cool the blocks they shade, but shade is only part of how a district's temperature is set. Dark asphalt and rooftops store heat all day and release it all night, and a row of young trees — which may take fifteen years to form a full canopy — does little to offset that stored heat. Cities that have paired tree planting with light-colored roofing and pavement have seen far larger drops in nighttime temperatures than cities that planted trees alone.",
  "question": "Based on the texts, how would the author of Text 2 most likely respond to the claim in Text 1 that completing the tree plantings will solve Valden's heat problem?",
  "solution": "Text 2 opens by conceding the point — trees 'unquestionably cool the blocks they shade' — then argues shade is 'only part' of the picture and that cities pairing trees with light surfaces did better than 'cities that planted trees alone.' C) Correct: it captures both halves of Text 2's position. A) Wrong: Text 2 explicitly says trees do cool shaded blocks. B) Wrong: Text 2 argues planting alone is not sufficient, and planting speed is never mentioned. D) Wrong: Text 2 never recommends stopping or delaying planting and says nothing about residents demanding anything.",
  "choices": [
   "By arguing that street trees provide no meaningful cooling benefit to a city.",
   "By agreeing that tree planting alone will be sufficient, provided the trees are planted quickly.",
   "By acknowledging that trees cool shaded areas while arguing that planting alone will not be enough to solve the problem.",
   "By suggesting that Valden should stop planting trees until its residents demand lighter-colored rooftops."
  ],
  "answerIndex": 2
 },
 {
  "id": "R38",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Boundaries",
  "difficulty": 4,
  "level": 2,
  "type": "mc",
  "stimulus": "The observatory's annual report, released on Tuesday by the Harbor Commission ______ summarizes a year of unusually clear skies and describes the public viewing nights planned for the spring.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "A parenthetical (nonrestrictive) phrase set off with one punctuation mark must be closed with the same kind of mark. The phrase 'released on Tuesday by the Harbor Commission' is opened with a comma after 'report,' so it must close with a comma before the main verb, 'summarizes.' A) Commission, — correct: the closing comma matches the opening comma, and the sentence reads cleanly: 'The observatory's annual report … summarizes a year…' B) Commission; — wrong: a semicolon cannot close a comma-opened parenthetical and would wrongly split the subject from its verb. C) Commission — — wrong: mixing marks (comma to open, dash to close) violates the matching-punctuation rule. D) Commission — wrong: without a closing mark, the parenthetical never closes. Teacher note: this is the SAT's favorite Boundaries pattern — whatever opens a parenthetical must close it.",
  "choices": [
   "Commission,",
   "Commission;",
   "Commission —",
   "Commission"
  ],
  "answerIndex": 0
 },
 {
  "id": "R39",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Inferences",
  "difficulty": 4,
  "level": 3,
  "type": "mc",
  "stimulus": "Archaeologists studying coastal settlements have found large numbers of pottery jars made in a distinctive style. Chemical analysis shows that the clay used for the jars matches clay from a single quarry in the mountains far inland; no clay of that composition occurs near the coast. The evidence suggests that the jars ______",
  "question": "Which choice most logically completes the text?",
  "solution": "Follow what the evidence forces: the clay exists only in an inland quarry, yet finished jars in that style are abundant on the coast. The jars (or their clay) must have moved from inland to coast. B) Correct: transport through trade or exchange is the conclusion the evidence supports without adding specifics. A) Wrong: possible in the abstract, but nothing in the text mentions potters traveling; the completion should not invent a mechanism more specific than the evidence. C) Wrong: 'prove the same potters' overreaches — identical clay shows movement of goods, not identity of makers. D) Wrong: it contradicts the text, which says the clay occurs only at the inland quarry.",
  "choices": [
   "were made by coastal potters who traveled inland to collect clay and then returned home",
   "were transported from inland areas to the coast, most likely through trade or exchange between the regions",
   "prove that the same potters worked at both the inland and coastal sites",
   "were produced on the coast using clay that occurs naturally in both regions"
  ],
  "answerIndex": 1
 },
 {
  "id": "R40",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Cross-Text Connections",
  "difficulty": 4,
  "level": 3,
  "type": "mc",
  "stimulus": "Text 1\n\nThe mill buildings along the Corwin River should be preserved exactly as they stand. Converted into a museum, they would let visitors see the looms, the workers' housing, and the counting rooms just as they were in 1890. These buildings are part of the city's memory, and altering them for modern uses would erase the very history they embody.\n\nText 2\n\nThe Corwin River mills will not survive by being frozen in time. Empty buildings decay; occupied ones get repaired. Turning the mills into apartments and workshops — keeping their brick shells, tall windows, and timber beams — would give them a working future. The worst outcome for a historic building is not a new use. It is demolition, and disuse is demolition by slow degrees.",
  "question": "Based on the texts, the authors of Text 1 and Text 2 would most likely agree that",
  "solution": "The authors disagree about method — museum versus adaptive reuse — but both positions exist to keep the buildings standing. Text 1 calls them 'part of the city's memory' to be preserved; Text 2 calls demolition 'the worst outcome.' A) Correct: shared ground is the buildings' worth saving. B) Wrong: Text 2's whole argument is for modern uses. C) Wrong: neither text assigns preservation to government agencies; Text 2's examples are private conversions. D) Wrong: costs of new construction are never compared, and 'always' overreaches anything either text says.",
  "choices": [
   "The buildings are worth saving from demolition.",
   "Historic buildings should never be used for modern purposes.",
   "Preservation is best handled by government agencies rather than private owners.",
   "Converting a building is always more expensive than building a new one."
  ],
  "answerIndex": 0
 },
 {
  "id": "R41",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Transitions",
  "difficulty": 4,
  "level": 3,
  "type": "mc",
  "stimulus": "Critics praised the design of the new bridge for its elegance. ______ the structure's maintenance costs have drawn sharp criticism from the city council.",
  "question": "Which choice most logically completes the text?",
  "solution": "The two sentences pull in opposite directions: praise for the design, then criticism of the costs. The transition must mark that turn. A) Nevertheless, — correct: it signals a contrast with what came before. B) Therefore, — wrong: the criticism is not a conclusion caused by the praise. C) For example, — wrong: maintenance costs are not an example of the bridge's elegance. D) In addition, — wrong: it would present the criticism as another point in the same direction as the praise, but the sentences conflict rather than accumulate.",
  "choices": [
   "Nevertheless,",
   "Therefore,",
   "For example,",
   "In addition,"
  ],
  "answerIndex": 0
 },
 {
  "id": "R42",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Inferences",
  "difficulty": 4,
  "level": 3,
  "type": "mc",
  "stimulus": "When the Hartwell factory raised wages in 2018, shops on the town's main street reported their best sales in years. Two years later, when the factory cut workers' hours, the same shops saw sales fall sharply, even though no other major employer in town had changed its pay. The pattern suggests that the shops' revenue ______",
  "question": "Which choice most logically completes the text?",
  "solution": "The pattern is the evidence: sales rose when wages rose and fell when hours (and thus pay) were cut. Revenue moves with workers' income in both directions. A) Correct. B) Wrong: the two changes show revenue was affected, directly contradicting this. C) Wrong: tourists are never mentioned. D) Wrong: if revenue tracks payroll this closely, a closure — payroll dropping to zero — is precisely what the pattern says would hurt; nothing supports 'the same level.'",
  "choices": [
   "depended substantially on the spending of the factory's workers",
   "were unaffected by changes in the factory's payroll",
   "came mainly from tourists visiting the town",
   "would continue at the same level even if the factory closed"
  ],
  "answerIndex": 0
 },
 {
  "id": "R43",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Text Structure and Purpose",
  "difficulty": 4,
  "level": 3,
  "type": "mc",
  "stimulus": "Popular accounts often claim that composer Adele Whitfield wrote her Third Symphony in a single inspired week. Her surviving sketches tell a different story. Dated drafts show the symphony's opening theme being reworked over nearly two years, and a letter to her publisher describes the finale as “the movement that has cost me a winter.” The one-week story appears to have originated in a concert program published a decade after her death.",
  "question": "Which choice best describes the main purpose of the text?",
  "solution": "The text sets up a popular belief (the symphony was composed in a single week) and then overturns it with documentary evidence — drafts spanning nearly two years. B) Correct: the purpose is to correct a misconception about the work's creation. A) Wrong: audience reception is never discussed. C) Wrong: only Whitfield appears; no second composer is discussed. D) Wrong: the text says nothing about the symphony's fame or lack of it; its subject is the timeline of composition.",
  "choices": [
   "To explain why a musical work was initially unpopular with audiences",
   "To correct a misconception about how a musical work was created",
   "To compare the working methods of two different composers",
   "To argue that a musical work deserves more recognition than it has received"
  ],
  "answerIndex": 1
 },
 {
  "id": "R44",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Rhetorical Synthesis",
  "difficulty": 4,
  "level": 3,
  "type": "mc",
  "stimulus": "While researching a topic, a student has taken the following notes:\n\n• Amara Chen is an engineer.\n• Chen designed the Harborview Bridge, the longest cable-stayed bridge in the state.\n• Chen grew up in the port city of Almar.\n• Chen won the National Engineering Medal in 2019.\n• Chen now leads the engineering firm Chen & Alvarez.\n• Chen's firm employs more than 300 engineers.",
  "question": "The student wants to introduce Amara Chen to an audience that is unfamiliar with her. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
  "solution": "An introduction for an unfamiliar audience needs identity plus significance: who she is and why she matters. B) Correct: it names her profession, her signature achievement (designing the state's longest cable-stayed bridge), and her current role — a complete introduction. A) Wrong: a childhood detail humanizes her but never says what she does or why she is notable. C) Wrong: the medal shows she is honored, but without her field or work it does not introduce her — an unfamiliar reader still would not know what she is known for. D) Wrong: the firm's size is about the company, not an introduction to Chen herself, and it omits her defining achievement.",
  "choices": [
   "Engineer Amara Chen grew up in the port city of Almar, where she spent summers watching ships pass under the old drawbridge.",
   "Engineer Amara Chen, who designed the Harborview Bridge — the longest cable-stayed bridge in the state — now leads the firm Chen & Alvarez.",
   "Amara Chen won the National Engineering Medal in 2019, an honor given to only one engineer each year.",
   "Amara Chen's firm, Chen & Alvarez, employs more than 300 engineers and has offices in four cities."
  ],
  "answerIndex": 1
 },
 {
  "id": "R45",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Command of Evidence",
  "difficulty": 4,
  "level": 3,
  "type": "mc",
  "stimulus": "An agricultural agent claims that the size of a farm alone did not determine how much wheat it harvested; how efficiently the land produced mattered as well.",
  "question": "Which choice best supports the agricultural agent's claim?",
  "solution": "Compute yield per acre: P = 2,750/55 = 50; Q = 3,500/50 = 70; R = 3,600/60 = 60. If size alone determined harvests, the smallest farm would harvest the least — but Q (50 acres, smallest) out-harvested P (55 acres), 3,500 to 2,750, because Q's per-acre yield was highest. B) Correct: it pairs the size upset with its cause. A) Wrong: true, but R having both the most acres and the most bushels is exactly what 'size alone' would predict — it does not support the claim. C) Wrong: true, but it never connects yield to a harvest outcome. D) Wrong: true, but comparing two per-acre rates without harvests cannot show that size failed to determine a harvest.",
  "choices": [
   "Farm R harvested the most bushels overall and also had the most acres.",
   "Farm Q, the smallest farm at 50 acres, harvested 3,500 bushels — more than Farm P harvested from 55 acres — because Q's yield per acre was the highest of the three farms.",
   "Farm P had the lowest yield per acre of the three farms.",
   "Farm R's yield per acre was higher than Farm P's yield per acre."
  ],
  "answerIndex": 1
 },
 {
  "id": "R46",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Words in Context",
  "difficulty": 4,
  "level": 3,
  "type": "mc",
  "stimulus": "In his letter to the foreign minister, the ambassador never announced a date for the talks, but he intimated that negotiations would resume soon, writing that “circumstances are ripening” and that both sides “may shortly find reason to meet.” Reporters took the letter as a signal that an announcement was near.",
  "question": "As used in the text, “intimated” most nearly means",
  "solution": "The ambassador 'never announced a date' but his remarks led reporters to expect an announcement — the suggestion was indirect. B) hinted — correct: to intimate is to communicate indirectly. A) stated plainly — wrong: the text explicitly says he never announced anything, the opposite of stating it plainly. C) promised — wrong: a promise is a firm commitment, and the whole point is that he committed to nothing. D) denied — wrong: he did not reject the idea of an announcement; he pointed toward one.",
  "choices": [
   "stated plainly",
   "hinted",
   "promised",
   "denied"
  ],
  "answerIndex": 1
 },
 {
  "id": "R47",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Inferences",
  "difficulty": 5,
  "level": 3,
  "type": "mc",
  "stimulus": "Composer Elias Lindqvist's letters to his patron are dated 1712, and in them Lindqvist repeatedly refers to a rival composer by the nickname “the Fox.” However, the earliest appearance of that nickname in any surviving record is a court document from 1715, and historians have found no evidence that the nickname existed before then. The evidence suggests that the letters ______",
  "question": "Which choice most logically completes the text?",
  "solution": "This is dating by content: a document cannot use a nickname before the nickname existed. 'The Fox' first appears in any surviving record in a court document from 1715, so letters using it cannot have been written in 1712. B) Correct — the letters postdate 1715, whatever their written dates say. A) Wrong: nothing in the text questions Lindqvist's authorship. C) Wrong: this would require trusting the letters' dates over the court record, but the premise is that the nickname appears in no surviving record before 1715 — the dated letters are the anomaly to be explained, and re-dating them is the supported move. D) Wrong: the patron's death is never mentioned.",
  "choices": [
   "were written by someone other than Lindqvist",
   "were most likely written after 1715, despite the dates written on them",
   "show that the nickname was in use earlier than historians had believed",
   "were addressed to a patron who had died before 1712"
  ],
  "answerIndex": 1
 },
 {
  "id": "R48",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Words in Context",
  "difficulty": 4,
  "level": 3,
  "type": "mc",
  "stimulus": "In her history of the Port Alba lighthouse, historian June Okafor argues that keeper Tomas Reed single-handedly kept the light burning through the storm of 1911. Later in the book, however, Okafor qualifies that claim: lighthouse logbooks show that Reed's two assistants relit the lamp twice during the night, and Reed himself credited them in a letter written the following week.",
  "question": "As used in the text, “qualifies” most nearly means",
  "solution": "Okafor first makes a strong claim — Reed acted 'single-handedly' — and then presents logbook evidence that his assistants helped. She is narrowing her original claim, not merely adding detail. B) limits the scope of — correct: to qualify a claim in this academic sense is to add conditions that make it less sweeping; 'single-handedly' becomes 'with help.' A) meets the requirements for — wrong: that is the everyday sense of 'qualify' (as in qualifying for a race). C) describes in detail — wrong: the details contradict part of the original claim, so the function is limitation, not elaboration. D) proves the truth of — wrong: the logbook evidence weakens the original version. Teacher note: on the SAT, 'qualify' in an argument almost always means 'limit or moderate a claim.'",
  "choices": [
   "meets the requirements for",
   "limits the scope of",
   "describes in detail",
   "proves the truth of"
  ],
  "answerIndex": 1
 },
 {
  "id": "R49",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Inferences",
  "difficulty": 5,
  "level": 3,
  "type": "mc",
  "stimulus": "Paleographer Ana Beltran was asked to date an unsigned manuscript found in the archives of the fictional Marrowgate Abbey. The handwriting resembles scripts common in the 1400s, but Beltran noticed that the manuscript's margins contain a doodle of a printing press — a machine that did not reach the region until the 1480s. She also found that one passage copies, word for word, including a distinctive spelling error, a passage from a chronicle that scholars know was not completed until 1491.",
  "question": "Which choice most logically completes the text?\n\nThe evidence suggests that the manuscript ______",
  "solution": "Two independent clues set an earliest-possible date. The printing press did not reach the region until the 1480s, and the copied passage — including its distinctive spelling error — comes from a chronicle not completed until 1491. A copy cannot predate its source, so the manuscript must be from 1491 or later. The old-fashioned handwriting is a trap: style can be imitated; copied content cannot come from the future. B) Correct. A) Wrong: a scribe in the early 1400s could not doodle a machine that had not yet arrived, and 'anticipated the invention' is unsupported speculation. C) Wrong: the copying direction is backwards — the manuscript reproduces the chronicle's passage including its error. D) Wrong: nothing suggests modern additions.",
  "choices": [
   "was written in the early 1400s by a scribe who anticipated the invention of the printing press",
   "could not have been produced before 1491, despite its old-fashioned handwriting",
   "was the source from which the 1491 chronicle copied its passage",
   "contains a doodle and a passage that were added by readers in the present day"
  ],
  "answerIndex": 1
 },
 {
  "id": "R50",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Words in Context",
  "difficulty": 5,
  "level": 3,
  "type": "mc",
  "stimulus": "The review praised the novel's intricate plotting but found its prose merely competent and, at times, pedestrian, noting that the author's descriptions of the city rarely rise above the conventional.",
  "question": "As used in the text, “pedestrian” most nearly means",
  "solution": "The review contrasts the novel's strong plotting with prose that fails to stand out — 'competent but' sets up a shortcoming of imagination, not of grammar or manners. B) ordinary — correct: as an adjective, 'pedestrian' means dull and unremarkable. A) walking — wrong: that is the noun sense (a person on foot); here the word describes prose. C) offensive — wrong: the prose is unexceptional, not insulting; the critic calls it competent. D) elegant — wrong: the opposite of the critic's judgment.",
  "choices": [
   "walking",
   "ordinary",
   "offensive",
   "elegant"
  ],
  "answerIndex": 1
 }
];
