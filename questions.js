// SAT Question Deck — question bank.
// All questions are original (no College Board questions): the SAT
// Practice Workbook bank plus verified expansion batches under
// expansion/. Regenerate with build_bank.py; do not edit by hand.
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
 },
 {
  "id": "algx-001",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Linear equations in one variable",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "",
  "question": "If 5x + 7 = 2x + 25, what is the value of x?",
  "solution": "Get every x-term on one side and every number on the other. Subtract 2x from both sides: 3x + 7 = 25. Subtract 7 from both sides: 3x = 18. Divide by 3: x = 6. Check by substituting back: the left side is 5(6) + 7 = 37, and the right side is 2(6) + 25 = 37. ✓",
  "choices": [
   "4",
   "6",
   "8",
   "10"
  ],
  "answerIndex": 1
 },
 {
  "id": "algx-002",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Linear equations in one variable",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "",
  "question": "If 9x − 4 = 4x + 11, what is the value of x?",
  "solution": "Get every x-term on one side and every number on the other. Subtract 4x from both sides: 5x − 4 = 11. Add 4 to both sides: 5x = 15. Divide by 5: x = 3. Check by substituting back: the left side is 9(3) − 4 = 23, and the right side is 4(3) + 11 = 23. ✓",
  "choices": [
   "7",
   "1",
   "5",
   "3"
  ],
  "answerIndex": 3
 },
 {
  "id": "algx-003",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Linear equations in one variable",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "",
  "question": "If 6(x − 3) = 30, what is the value of x?",
  "solution": "Divide both sides by 6 first: x − 3 = 5. Then add 3 to both sides: x = 5 + 3 = 8. Watch out: 5 is only the value of x − 3, not of x — one step remains.",
  "choices": [
   "8",
   "6",
   "11",
   "5"
  ],
  "answerIndex": 0
 },
 {
  "id": "algx-004",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Linear equations in one variable",
  "difficulty": 1,
  "level": 1,
  "type": "grid",
  "stimulus": "",
  "question": "If x/4 + 5 = 12, what is the value of x?",
  "solution": "Subtract 5 from both sides: x/4 = 7. Multiply both sides by 4: x = 4 × 7 = 28. Check: 28/4 + 5 = 7 + 5 = 12. ✓",
  "choices": null,
  "answerValue": "28"
 },
 {
  "id": "algx-005",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Linear equations in one variable",
  "difficulty": 1,
  "level": 1,
  "type": "grid",
  "stimulus": "",
  "question": "If 7x − 9 = 26, what is the value of x?",
  "solution": "Add 9 to both sides: 7x = 35. Divide by 7: x = 35 ÷ 7 = 5.",
  "choices": null,
  "answerValue": "5"
 },
 {
  "id": "algx-006",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Linear equations in one variable",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "A community theater charges a flat booking fee plus $14 per seat. A school booked 9 seats and paid $158 in total.",
  "question": "What is the flat booking fee, in dollars?",
  "solution": "Let f be the flat fee. The total is the fee plus 9 seats at $14: f + 14(9) = 158, so f + 126 = 158. Subtract 126: f = 158 − 126 = 32.",
  "choices": [
   "$126",
   "$24",
   "$42",
   "$32"
  ],
  "answerIndex": 3
 },
 {
  "id": "algx-007",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Linear equations in one variable",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "",
  "question": "If 20 − 3x = 8, what is the value of x?",
  "solution": "Subtract 20 from both sides: −3x = -12. Divide by −3: x = -12 ÷ (−3) = 4. Watch out: a negative divided by a negative is positive — dropping the sign gives −4, which does not check.",
  "choices": [
   "3",
   "4",
   "6",
   "−4"
  ],
  "answerIndex": 1
 },
 {
  "id": "algx-008",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Linear equations in two variables",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "",
  "question": "What is the slope of the line in the xy-plane that passes through points (1, 3) and (5, 15)?",
  "solution": "Slope is (change in y) ÷ (change in x). The y-values change by 15 − 3 = 12 while the x-values change by 5 − 1 = 4, so the slope is 12/4 = 3. Rise goes on top, run on the bottom.",
  "choices": [
   "3",
   "4",
   "1/3",
   "1"
  ],
  "answerIndex": 0
 },
 {
  "id": "algx-009",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Linear equations in two variables",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "",
  "question": "What is the slope of the line in the xy-plane that passes through points (2, 10) and (7, 0)?",
  "solution": "Slope is (change in y) ÷ (change in x). The y-values change by 0 − 10 = -10 while the x-values change by 7 − 2 = 5, so the slope is -10/5 = −2. Rise goes on top, run on the bottom.",
  "choices": [
   "−4",
   "−1/2",
   "−2",
   "−1"
  ],
  "answerIndex": 2
 },
 {
  "id": "algx-010",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Linear equations in two variables",
  "difficulty": 1,
  "level": 1,
  "type": "grid",
  "stimulus": "",
  "question": "A line in the xy-plane passes through points (3, 4) and (9, 22). What is the slope of the line?",
  "solution": "Slope = (change in y) ÷ (change in x) = (22 − 4) ÷ (9 − 3) = 18 ÷ 6 = 3.",
  "choices": null,
  "answerValue": "3"
 },
 {
  "id": "algx-011",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Linear equations in two variables",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "",
  "question": "The graph of 3x + 6y = 18 in the xy-plane is a line. What is the y-intercept of the line?",
  "solution": "The y-intercept is where x = 0. Setting x = 0 gives 6y = 18, so y = 18 ÷ 6 = 3. Watch out: 6 is the x-intercept (where y = 0) — the question asks for the y-intercept.",
  "choices": [
   "6",
   "−3",
   "5",
   "3"
  ],
  "answerIndex": 3
 },
 {
  "id": "algx-012",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Linear equations in two variables",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "",
  "question": "The graph of y = 2x − 8 in the xy-plane is a line. What is the x-intercept of the line?",
  "solution": "The x-intercept is where y = 0. Set 2x − 8 = 0: 2x = 8, so x = 8 ÷ 2 = 4. Watch out: −8 is the y-intercept, not the x-intercept.",
  "choices": [
   "−4",
   "5",
   "−8",
   "4"
  ],
  "answerIndex": 3
 },
 {
  "id": "algx-013",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Linear equations in two variables",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "A line in the xy-plane has a slope of 3 and a y-intercept of -4.",
  "question": "Which equation defines the line?",
  "solution": "Use slope-intercept form, y = mx + b, with m = 3 and b = -4: y = 3x − 4. The intercept is negative, so it is subtracted — choices that add 4 have the sign wrong.",
  "choices": [
   "y = 3x − 4",
   "y = 3x + 4",
   "y = −4x + 3",
   "y = −3x − 4"
  ],
  "answerIndex": 0
 },
 {
  "id": "algx-014",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Linear functions",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "The table shows values of a linear function g for selected values of x.\n\nx: 0, 1, 2, 3\ng(x): 2, 7, 12, 17",
  "question": "What is the slope of the graph of g?",
  "solution": "As x increases by 1, g(x) increases by 7 − 2 = 5 each time, so the slope is 5. (Check the next step too: 12 − 7 = 5. A constant rate of change is what makes the function linear.)",
  "choices": [
   "8",
   "2",
   "5",
   "3"
  ],
  "answerIndex": 2
 },
 {
  "id": "algx-015",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Linear functions",
  "difficulty": 1,
  "level": 1,
  "type": "grid",
  "stimulus": "",
  "question": "If f(x) = 4x − 3, what is the value of f(6)?",
  "solution": "Substitute 6 for x: f(6) = 4(6) − 3 = 24 − 3 = 21.",
  "choices": null,
  "answerValue": "21"
 },
 {
  "id": "algx-016",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Linear functions",
  "difficulty": 1,
  "level": 1,
  "type": "grid",
  "stimulus": "A savings account starts with $45 and grows by $12 per week, with no other deposits or withdrawals.",
  "question": "After how many weeks will the account contain exactly $165?",
  "solution": "The balance after w weeks is 45 + 12w. Set it equal to 165: 45 + 12w = 165. Subtract 45: 12w = 120. Divide by 12: w = 10. Check: 45 + 12(10) = 165. ✓",
  "choices": null,
  "answerValue": "10"
 },
 {
  "id": "algx-017",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Linear functions",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "A plumber's total charge is modeled by C = 80 + 55t, where C is the charge in dollars and t is the number of hours of labor.",
  "question": "Which statement best explains the meaning of the number 80 in the equation?",
  "solution": "In C = 80 + 55t, the number standing alone is the starting value — the charge when t = 0, before any labor time is counted. The 55, attached to t, is the hourly rate. Watch out: the choice describing the total for a 1-hour job would be 80 + 55 = 135, not 80.",
  "choices": [
   "The charge for each additional hour of labor",
   "The greatest charge the plumber will bill",
   "The flat service fee charged before any labor time is counted",
   "The total charge for a job lasting 1 hour"
  ],
  "answerIndex": 2
 },
 {
  "id": "algx-018",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Linear functions",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "The amount of water in a rain barrel is modeled by W = 30 + 2.5r, where W is the number of gallons in the barrel and r is the number of inches of rain that have fallen.",
  "question": "Which statement best explains the meaning of the number 2.5 in the equation?",
  "solution": "In W = 30 + 2.5r, the number multiplied by the variable is the rate of change: each additional inch of rain adds 2.5 gallons. The 30 standing alone is the starting amount — the gallons already in the barrel before any rain fell, which is what one of the other choices describes.",
  "choices": [
   "The total number of inches of rain that fell",
   "The increase in gallons of water for each additional inch of rain",
   "The number of gallons in the barrel before any rain fell",
   "The number of gallons in the barrel after 1 inch of rain"
  ],
  "answerIndex": 1
 },
 {
  "id": "algx-019",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Linear functions",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "The table shows values of a linear function h for selected values of x.\n\nx: 1, 2, 3, 4\nh(x): 11, 8, 5, 2",
  "question": "What is the value of h(0)?",
  "solution": "The outputs decrease by 3 each step, so working backward from h(1) = 11 adds 3 back: h(0) = 11 + 3 = 14. (The function is h(x) = −3x + 14.)",
  "choices": [
   "20",
   "8",
   "14",
   "11"
  ],
  "answerIndex": 2
 },
 {
  "id": "algx-020",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Linear functions",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "",
  "question": "If f(x) = 5x + 7 and f(x) = 47, what is the value of x?",
  "solution": "Set the rule equal to 47: 5x + 7 = 47. Subtract 7: 5x = 40. Divide by 5: x = 8.",
  "choices": [
   "8",
   "13",
   "10",
   "5"
  ],
  "answerIndex": 0
 },
 {
  "id": "algx-021",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Systems of two linear equations in two variables",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "At a school store, a student bought a total of 13 items. Notebooks cost $3 each and pens cost $1 each, and the student spent $27 in total. The purchases are modeled by the system x + y = 13 and 3x + 1y = 27, where x is the number of notebooks and y is the number of pens.",
  "question": "How many notebooks did the student buy?",
  "solution": "From the first equation, y = 13 − x. Substitute into the second: 3x + 1(13 − x) = 27, so 2x = 14 and x = 7. Watch out: 6 is the number of pens — answer what was asked.",
  "choices": [
   "7",
   "6",
   "10",
   "13"
  ],
  "answerIndex": 0
 },
 {
  "id": "algx-022",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Systems of two linear equations in two variables",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "A family bought a total of 11 tickets to a zoo. Adult tickets cost $9 each and child tickets cost $5 each, and the family spent $79 in total.",
  "question": "How many adult tickets did the family buy?",
  "solution": "Let x be adult tickets and y child tickets: x + y = 11 and 9x + 5y = 79. From the first, y = 11 − x. Substitute: 9x + 5(11 − x) = 79, so 4x + 55 = 79, giving 4x = 24 and x = 6.",
  "choices": [
   "8",
   "5",
   "6",
   "11"
  ],
  "answerIndex": 2
 },
 {
  "id": "algx-023",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Systems of two linear equations in two variables",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "x + y = 8\nx − y = 2",
  "question": "What is the value of y?",
  "solution": "Add the two equations to eliminate y: 2x = 10, so x = 5. Substitute back into x + y = 8: 5 + y = 8, so y = 3. Watch out: 5 is the value of x — the question asks for y.",
  "choices": [
   "6",
   "8",
   "5",
   "3"
  ],
  "answerIndex": 3
 },
 {
  "id": "algx-024",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Linear inequalities in one or two variables",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "",
  "question": "Which inequality is equivalent to 4x + 3 < 23?",
  "solution": "Subtract 3 from both sides: 4x < 20. Divide by 4 (positive, so the sign stays): x < 5.",
  "choices": [
   "x > 5",
   "x ≤ 5",
   "x < 7",
   "x < 5"
  ],
  "answerIndex": 3
 },
 {
  "id": "algx-025",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Linear inequalities in one or two variables",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "",
  "question": "Which of the following values of x satisfies the inequality 3x + 2 ≥ 20?",
  "solution": "Solve first: 3x ≥ 18, so x ≥ 6. Of the choices, only 7 is at least 6. (Check 7: 3(7) + 2 = 23 ≥ 20. ✓)",
  "choices": [
   "3",
   "0",
   "5",
   "7"
  ],
  "answerIndex": 3
 },
 {
  "id": "algx-026",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Linear inequalities in one or two variables",
  "difficulty": 1,
  "level": 1,
  "type": "grid",
  "stimulus": "A gym charges a $12 sign-up fee plus $4 per class. Maya has $60 to spend in total.",
  "question": "What is the greatest number of classes Maya can take?",
  "solution": "Total cost cannot exceed $60: 12 + 4c ≤ 60. Subtract 12: 4c ≤ 48. Divide by 4: c ≤ 12, so the greatest whole number of classes is 12.",
  "choices": null,
  "answerValue": "12"
 },
 {
  "id": "algx-027",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Linear inequalities in one or two variables",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "A elevator has a weight limit of 1,200 pounds. A mover who weighs 185 pounds loads boxes that weigh 40 pounds each onto the elevator.",
  "question": "If b represents the number of boxes, which inequality best models the situation?",
  "solution": "The total weight is the mover's 185 pounds plus 40 pounds per box, and it can be at most 1,200 pounds: 185 + 40b ≤ 1200. 'At most' means ≤ — the load may equal the limit but not pass it.",
  "choices": [
   "40 + 185b ≤ 1200",
   "185 + 40b ≥ 1200",
   "185 + 40b ≤ 1200",
   "185 + 40b < 1200"
  ],
  "answerIndex": 2
 },
 {
  "id": "algx-028",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Linear equations in one variable",
  "difficulty": 3,
  "level": 2,
  "type": "mc",
  "stimulus": "",
  "question": "If 3(x + 4) = 5x, what is the value of x?",
  "solution": "Distribute on the left: 3x + 12 = 5x. Subtract 5x from both sides: −2x + 12 = 0. Subtract 12 from both sides: −2x = −12. Divide by -2: x = 6.",
  "choices": [
   "6",
   "8",
   "3",
   "11"
  ],
  "answerIndex": 0
 },
 {
  "id": "algx-029",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Linear equations in one variable",
  "difficulty": 3,
  "level": 2,
  "type": "mc",
  "stimulus": "",
  "question": "If 4(x − 2) = 2x + 6, what is the value of x?",
  "solution": "Distribute on the left: 4x − 8 = 2x + 6. Subtract 2x from both sides: 2x − 8 = 6. Add 8 to both sides: 2x = 14. Divide by 2: x = 7.",
  "choices": [
   "9",
   "7",
   "4",
   "12"
  ],
  "answerIndex": 1
 },
 {
  "id": "algx-030",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Linear equations in one variable",
  "difficulty": 3,
  "level": 2,
  "type": "grid",
  "stimulus": "",
  "question": "If x/2 + x/3 = 15, what is the value of x?",
  "solution": "Combine the fractions with a common denominator of 6: x/2 + x/3 = 3x/6 + 2x/6 = 5x/6. So 5x/6 = 15, and x = 15 × 6/5 = 18. Check: 18/2 + 18/3 = 9 + 6 = 15. ✓",
  "choices": null,
  "answerValue": "18"
 },
 {
  "id": "algx-031",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Linear equations in one variable",
  "difficulty": 3,
  "level": 2,
  "type": "mc",
  "stimulus": "",
  "question": "If 0.4x + 0.6 = 2.4, what is the value of x?",
  "solution": "Subtract 0.6 from both sides: 0.4x = 1.8. Divide by 0.4: x = 1.8 ÷ 0.4 = 4.5. Watch out: dividing by a decimal less than 1 makes the value larger, not smaller.",
  "choices": [
   "4.5",
   "3",
   "2.5",
   "5.5"
  ],
  "answerIndex": 0
 },
 {
  "id": "algx-032",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Linear equations in one variable",
  "difficulty": 3,
  "level": 2,
  "type": "mc",
  "stimulus": "",
  "question": "The perimeter of a rectangle is given by P = 2l + 2w, where l is the length and w is the width. Which equation gives l in terms of P and w?",
  "solution": "Isolate l. Subtract 2w from both sides: P − 2w = 2l. Divide by 2: l = (P − 2w)/2. Watch out: dividing only the P by 2 (choice with P/2 − 2w) applies the division to just one term — the whole side must be divided.",
  "choices": [
   "l = (P − 2w)/2",
   "l = P/2 − 2w",
   "l = P − 2w",
   "l = (P + 2w)/2"
  ],
  "answerIndex": 0
 },
 {
  "id": "algx-033",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Linear equations in one variable",
  "difficulty": 4,
  "level": 2,
  "type": "mc",
  "stimulus": "",
  "question": "If 3x + 5 = 17, what is the value of 6x + 5?",
  "solution": "You can solve first: 3x = 12, so x = 4, and 6x + 5 = 6(4) + 5 = 29. Faster: 6x + 5 is exactly double the x-part of the original, so its value is 2(17) − 5 = 29. Watch out: 17 is the value of the original expression, not the doubled one.",
  "choices": [
   "32",
   "34",
   "29",
   "17"
  ],
  "answerIndex": 2
 },
 {
  "id": "algx-034",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Linear equations in two variables",
  "difficulty": 3,
  "level": 2,
  "type": "mc",
  "stimulus": "",
  "question": "What is the slope of the line in the xy-plane that passes through points (2, 9) and (6, 1)?",
  "solution": "Slope = (1 − 9) ÷ (6 − 2) = -8 ÷ 4 = −2. The line falls as x grows, so a negative slope makes sense — choices with positive values come from dropping a sign.",
  "choices": [
   "−1",
   "−2",
   "−1/2",
   "2"
  ],
  "answerIndex": 1
 },
 {
  "id": "algx-035",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Linear equations in two variables",
  "difficulty": 3,
  "level": 2,
  "type": "mc",
  "stimulus": "",
  "question": "Which equation defines the line in the xy-plane that passes through points (1, 2) and (4, 11)?",
  "solution": "Slope first: (11 − 2) ÷ (4 − 1) = 9 ÷ 3 = 3. Then use (1, 2) in y = mx + b: 2 = 3(1) + b, so b = −1. The equation is y = 3x − 1. Check with the second point: 3(4) − 1 = 11. ✓",
  "choices": [
   "y = 4x − 1",
   "y = 3x − 1",
   "y = 3x + 1",
   "y = −3x − 1"
  ],
  "answerIndex": 1
 },
 {
  "id": "algx-036",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Linear equations in two variables",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "",
  "question": "A line in the xy-plane is defined by y = −3/4x + 7. A second line is parallel to the first line. What is the slope of the second line?",
  "solution": "Parallel lines have equal slopes. The given line is in slope-intercept form with slope −3/4, so the parallel line also has slope −3/4 — its intercept can be anything else, but the slope cannot change.",
  "choices": [
   "−4/3",
   "4/3",
   "−3/4",
   "7"
  ],
  "answerIndex": 2
 },
 {
  "id": "algx-037",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Linear equations in two variables",
  "difficulty": 3,
  "level": 2,
  "type": "mc",
  "stimulus": "",
  "question": "A line in the xy-plane has a slope of 2/5. What is the slope of a line perpendicular to it?",
  "solution": "Perpendicular slopes are opposite reciprocals: flip the fraction and change the sign. The reciprocal of 2/5 is 5/2, and the opposite is −5/2. Watch out: 5/2 flips the fraction but forgets the sign change.",
  "choices": [
   "−5/2",
   "2/5",
   "5/2",
   "−2/5"
  ],
  "answerIndex": 0
 },
 {
  "id": "algx-038",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Linear equations in two variables",
  "difficulty": 3,
  "level": 2,
  "type": "mc",
  "stimulus": "",
  "question": "What is the slope of the line defined by 5x + 10y = 30 in the xy-plane?",
  "solution": "Solve for y: 10y = −5x + 30, so y = −1/2x + 3. The coefficient of x is the slope: −1/2. In standard form Ax + By = C, the slope is always −A/B.",
  "choices": [
   "1/2",
   "−1/2",
   "3",
   "−2"
  ],
  "answerIndex": 1
 },
 {
  "id": "algx-039",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Linear equations in two variables",
  "difficulty": 3,
  "level": 2,
  "type": "grid",
  "stimulus": "",
  "question": "The point (k, 16) lies on the line defined by y = 3x − 5 in the xy-plane. What is the value of k?",
  "solution": "Points on the line satisfy the equation. Substitute y = 16: 16 = 3k − 5. Add 5: 3k = 21. Divide by 3: k = 7.",
  "choices": null,
  "answerValue": "7"
 },
 {
  "id": "algx-040",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Linear equations in two variables",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "",
  "question": "What is the x-intercept of the line defined by 4x + 3y = 24 in the xy-plane?",
  "solution": "The x-intercept is where y = 0. Setting y = 0 gives 4x = 24, so x = 24 ÷ 4 = 6. Watch out: 8 is the y-intercept.",
  "choices": [
   "4",
   "24/7",
   "8",
   "6"
  ],
  "answerIndex": 3
 },
 {
  "id": "algx-041",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Linear functions",
  "difficulty": 3,
  "level": 2,
  "type": "mc",
  "stimulus": "The linear function f satisfies f(2) = 3 and f(6) = 19.",
  "question": "What is the value of f(10)?",
  "solution": "The slope is (19 − 3) ÷ (6 − 2) = 16 ÷ 4 = 4. From f(2) = 3, the intercept is 3 − 4(2) = −5, so f(x) = 4x − 5. Then f(10) = 4(10) + −5 = 35.",
  "choices": [
   "40",
   "31",
   "35",
   "43"
  ],
  "answerIndex": 2
 },
 {
  "id": "algx-042",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Linear functions",
  "difficulty": 3,
  "level": 2,
  "type": "grid",
  "stimulus": "",
  "question": "Functions f and g are defined by f(x) = 3x + 4 and g(x) = x + 16. For what value of x do f and g have the same value?",
  "solution": "Set the rules equal: 3x + 4 = x + 16. Subtract x from both sides: 2x + 4 = 16. Subtract 4: 2x = 12. Divide by 2: x = 6. Check: f(6) = 22 and g(6) = 22. ✓",
  "choices": null,
  "answerValue": "6"
 },
 {
  "id": "algx-043",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Linear functions",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "A gym's total cost for a membership lasting m months is modeled by T = 120 + 35m, where T is the total cost in dollars.",
  "question": "Which statement best describes the model?",
  "solution": "The 120 standing alone is the starting value: a one-time sign-up fee of $120 paid before any months pass. The 35 attached to m is the rate: each month adds $35. Only one choice gets both numbers' roles right.",
  "choices": [
   "The total cost of a 1-month membership is $120",
   "The sign-up fee is $120, and each month costs $35",
   "The membership costs $35 per month with no other charges",
   "The sign-up fee is $35, and each month costs $120"
  ],
  "answerIndex": 1
 },
 {
  "id": "algx-044",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Linear functions",
  "difficulty": 3,
  "level": 2,
  "type": "mc",
  "stimulus": "A drone's battery charge was 350 units 2 minutes after takeoff and 100 units 7 minutes after takeoff. The charge decreased at a constant rate.",
  "question": "At what rate, in units per minute, did the battery charge decrease?",
  "solution": "Rate = (change in charge) ÷ (change in time) = (350 − 100) ÷ (7 − 2) = 250 ÷ 5 = 50 units per minute. The question asks for the decrease as a positive rate, so report 50.",
  "choices": [
   "60",
   "250/9",
   "250",
   "50"
  ],
  "answerIndex": 3
 },
 {
  "id": "algx-045",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Linear functions",
  "difficulty": 3,
  "level": 2,
  "type": "mc",
  "stimulus": "",
  "question": "If f(x) = 2x + 5, what is the value of f(7) − f(3)?",
  "solution": "f(7) = 2(7) + 5 = 19, and f(3) = 2(3) + 5 = 11. Subtract: 19 − 11 = 8. Notice the intercepts cancel — for any linear function, f(a) − f(b) is just the slope times (a − b).",
  "choices": [
   "19",
   "8",
   "20",
   "13"
  ],
  "answerIndex": 1
 },
 {
  "id": "algx-046",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Linear functions",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "The table shows values of a linear function f for selected values of x.\n\nx: 0, 1, 2, 3\nf(x): 3, 5, 7, 9",
  "question": "Which equation defines f?",
  "solution": "At x = 0 the table gives f(0) = 3, so the y-intercept is 3. The outputs rise by 2 per step, so the slope is 2. The equation is f(x) = 2x + 3. Choices with intercept 2 swap the two numbers' roles.",
  "choices": [
   "f(x) = 3x + 2",
   "f(x) = −2x + 3",
   "f(x) = 2x − 3",
   "f(x) = 2x + 3"
  ],
  "answerIndex": 3
 },
 {
  "id": "algx-047",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Systems of two linear equations in two variables",
  "difficulty": 3,
  "level": 2,
  "type": "grid",
  "stimulus": "2x + y = 14\nx − y = 4",
  "question": "What is the value of x?",
  "solution": "Add the equations to eliminate y: 3x = 18, so x = 6. (Then y = 14 − 2(6) = 2, but the question only asks for x.)",
  "choices": null,
  "answerValue": "6"
 },
 {
  "id": "algx-048",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Systems of two linear equations in two variables",
  "difficulty": 3,
  "level": 2,
  "type": "mc",
  "stimulus": "At a café, 3 sandwiches and 2 salads together cost $50, and 1 sandwich and 1 salad together cost $19.",
  "question": "What is the price, in dollars, of one sandwich?",
  "solution": "Let s be the sandwich price and a the salad price: 3s + 2a = 50 and s + a = 19. From the second, a = 19 − s. Substitute: 3s + 2(19 − s) = 50, so s + 38 = 50 and s = 12. Check: a = 7, and 3(12) + 2(7) = 36 + 14 = 50. ✓ Watch out: $7 is the salad — answer the item asked for.",
  "choices": [
   "$7",
   "$12",
   "$19",
   "$10"
  ],
  "answerIndex": 1
 },
 {
  "id": "algx-049",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Systems of two linear equations in two variables",
  "difficulty": 4,
  "level": 2,
  "type": "mc",
  "stimulus": "y = 2x + 3\n4x − ky = 8",
  "question": "If the system of equations above has no solution, what is the value of k?",
  "solution": "No solution means parallel lines: same slope, different intercepts. Rewrite the second equation as y = (4/k)x − 8/k, so its slope is 4/k. Setting 4/k = 2 gives k = 2. The intercepts (3 and −4) differ, so the lines never meet. Watch out: k = −2 would make the slopes 2 and −2 — those lines cross once.",
  "choices": [
   "4",
   "−2",
   "8",
   "2"
  ],
  "answerIndex": 3
 },
 {
  "id": "algx-050",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Systems of two linear equations in two variables",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "3x + 2y = 35\nx + y = 13",
  "question": "What is the value of x + y?",
  "solution": "This one is a gift: the second equation IS x + y, so x + y = 13 immediately — no solving needed. (Solving fully gives x = 9 and y = 4, which indeed sum to 13.) Read what is asked before doing extra work.",
  "choices": [
   "35",
   "13",
   "4",
   "9"
  ],
  "answerIndex": 1
 },
 {
  "id": "algx-051",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Systems of two linear equations in two variables",
  "difficulty": 3,
  "level": 2,
  "type": "grid",
  "stimulus": "Gym A charges a $30 sign-up fee plus $8 per class. Gym B charges a $54 sign-up fee plus $4 per class.",
  "question": "For what number of classes do the two gyms cost the same in total?",
  "solution": "Set the totals equal: 30 + 8c = 54 + 4c. Subtract 4c and 30: 4c = 24. Divide by 4: c = 6. Check: both totals are $78. ✓",
  "choices": null,
  "answerValue": "6"
 },
 {
  "id": "algx-052",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Systems of two linear equations in two variables",
  "difficulty": 4,
  "level": 2,
  "type": "mc",
  "stimulus": "y = 3x + 6\n6x − 2y = k",
  "question": "If the system of equations above has infinitely many solutions, what is the value of k?",
  "solution": "Infinitely many solutions means both equations describe the same line. Multiply the first equation by 2: 2y = 6x + 12, then rearrange: 6x − 2y = −12. Comparing with 6x − 2y = k gives k = −12. Watch out: 12 forgets that moving 2y across flips the constant's sign.",
  "choices": [
   "−6",
   "6",
   "−12",
   "12"
  ],
  "answerIndex": 2
 },
 {
  "id": "algx-053",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Linear inequalities in one or two variables",
  "difficulty": 4,
  "level": 2,
  "type": "grid",
  "stimulus": "2 − 4(x − 1) ≥ −14",
  "question": "What is the greatest integer value of x that satisfies the inequality above?",
  "solution": "Distribute: 2 − 4x + 4 ≥ −14, which simplifies to −4x + 6 ≥ −14. Subtract 6: −4x ≥ −20. Divide by −4 and flip the sign: x ≤ 5. The greatest integer allowed is 5 itself, since the inequality includes equality.",
  "choices": null,
  "answerValue": "5"
 },
 {
  "id": "algx-054",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Linear inequalities in one or two variables",
  "difficulty": 3,
  "level": 2,
  "type": "mc",
  "stimulus": "A bakery sells muffins for $3 each and scones for $4 each. On Saturday the bakery must earn at least $240 from these items and can bake at most 75 of them in total.",
  "question": "If m represents the number of muffins and s represents the number of scones, which system of inequalities best models the situation?",
  "solution": "Translate one condition at a time. Money: 3m + 4s, and it must be at least $240, so 3m + 4s ≥ 240. Count: at most 75 items, so m + s ≤ 75. Only one choice gets both the prices and both directions right.",
  "choices": [
   "3m + 4s ≥ 240 and m + s ≤ 75",
   "3m + 4s ≥ 240 and m + s ≥ 75",
   "3m + 4s ≤ 240 and m + s ≤ 75",
   "4m + 3s ≥ 240 and m + s ≤ 75"
  ],
  "answerIndex": 0
 },
 {
  "id": "algx-055",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Linear inequalities in one or two variables",
  "difficulty": 3,
  "level": 2,
  "type": "mc",
  "stimulus": "x + y ≤ 9\ny > x + 1",
  "question": "Which of the following points (x, y) satisfies the system of inequalities above?",
  "solution": "Test each point in BOTH inequalities. (2, 4): 2 + 4 = 6 ≤ 9 ✓ and 4 > 2 + 1 = 3 ✓. The others each fail one: (5, 5) gives 10 ≤ 9 ✗; (1, 1) gives 1 > 2 ✗; (4, 2) gives 2 > 5 ✗. A point must satisfy every inequality in the system.",
  "choices": [
   "(5, 5)",
   "(4, 2)",
   "(2, 4)",
   "(1, 1)"
  ],
  "answerIndex": 2
 },
 {
  "id": "algx-056",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Linear inequalities in one or two variables",
  "difficulty": 3,
  "level": 2,
  "type": "mc",
  "stimulus": "",
  "question": "Which inequality is equivalent to −5x + 8 < 33?",
  "solution": "Subtract 8: −5x < 25. Divide by −5 — and flip the inequality sign, because dividing by a negative reverses it: x > −5. The choice x < −5 keeps the original direction, which is the classic error here.",
  "choices": [
   "x > −5",
   "x < −5",
   "x < 5",
   "x > 5"
  ],
  "answerIndex": 0
 },
 {
  "id": "algx-057",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Linear inequalities in one or two variables",
  "difficulty": 3,
  "level": 2,
  "type": "grid",
  "stimulus": "Jae's scores on the first three tests of a course are 78, 84, and 88. He wants his average over all four tests to be at least 85.",
  "question": "What is the least score Jae can earn on the fourth test and still reach his goal?",
  "solution": "Let s be the fourth score. The average condition is (78 + 84 + 88 + s)/4 ≥ 85, so 250 + s ≥ 340 and s ≥ 90. The least score that works is 90.",
  "choices": null,
  "answerValue": "90"
 },
 {
  "id": "algx-058",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Linear equations in one variable",
  "difficulty": 4,
  "level": 3,
  "type": "grid",
  "stimulus": "",
  "question": "If (3x − 1)/4 = (2x + 5)/6, what is the value of x?",
  "solution": "Clear the fractions by multiplying both sides by 12, the common denominator: 3(3x − 1) = 2(2x + 5). Expand: 9x − 3 = 4x + 10. Subtract 4x and add 3: 5x = 13. So x = 13/5. Grid it in as 13/5 or 2.6 — both are accepted forms for a fraction answer.",
  "choices": null,
  "answerValue": "13/5"
 },
 {
  "id": "algx-059",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Linear equations in one variable",
  "difficulty": 4,
  "level": 3,
  "type": "mc",
  "stimulus": "",
  "question": "If kx + 4 = 3x + 9, where k is a constant, and the equation has no solution, what is the value of k?",
  "solution": "An equation in x has no solution when the x-terms can be made identical but the constants disagree — then the equation claims a false statement no matter what x is. Matching the x-coefficients gives k = 3, turning the equation into 3x + 4 = 3x + 9, i.e., 4 = 9, which is never true. Any other k leaves exactly one solution.",
  "choices": [
   "−3",
   "4",
   "9",
   "3"
  ],
  "answerIndex": 3
 },
 {
  "id": "algx-060",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Linear equations in one variable",
  "difficulty": 4,
  "level": 3,
  "type": "mc",
  "stimulus": "",
  "question": "If 2(x + 3) = kx + 6, where k is a constant, and the equation has infinitely many solutions, what is the value of k?",
  "solution": "Infinitely many solutions means the two sides are identical for every x. The left side expands to 2x + 6, so the right side must be 2x + 6 as well: k = 2 (and the constant 6 already matches). If k were anything else, the sides could agree for at most one x.",
  "choices": [
   "−2",
   "2",
   "3",
   "6"
  ],
  "answerIndex": 1
 },
 {
  "id": "algx-061",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Linear equations in one variable",
  "difficulty": 4,
  "level": 3,
  "type": "mc",
  "stimulus": "",
  "question": "If (1/2)x + 3.5 = (3/4)x − 1, what is the value of x?",
  "solution": "Clear fractions and decimals at once by multiplying every term by 4: 2x + 14 = 3x − 4. Subtract 2x and add 4: 18 = x. Check: (1/2)(18) + 3.5 = 12.5 and (3/4)(18) − 1 = 13.5 − 1 = 12.5. ✓",
  "choices": [
   "22",
   "10",
   "18",
   "14"
  ],
  "answerIndex": 2
 },
 {
  "id": "algx-062",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Linear equations in one variable",
  "difficulty": 4,
  "level": 3,
  "type": "mc",
  "stimulus": "",
  "question": "If 3(x − 2) = 21, what is the value of 5(x − 2)?",
  "solution": "Don't solve for x — work with the chunk (x − 2) as a single quantity. From 3(x − 2) = 21, dividing by 3 gives (x − 2) = 7. Then 5(x − 2) = 5 × 7 = 35. Treating a repeated expression as one block is faster and avoids arithmetic slips.",
  "choices": [
   "28",
   "35",
   "21",
   "45"
  ],
  "answerIndex": 1
 },
 {
  "id": "algx-063",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Linear equations in one variable",
  "difficulty": 5,
  "level": 3,
  "type": "grid",
  "stimulus": "",
  "question": "If 5 − (x + 4)/3 = (x − 2)/2, what is the value of x?",
  "solution": "Multiply every term by 6 to clear both fractions: 30 − 2(x + 4) = 3(x − 2). Expand: 30 − 2x − 8 = 3x − 6, so 22 − 2x = 3x − 6. Add 2x and 6: 28 = 5x, so x = 28/5 = 5.6.",
  "choices": null,
  "answerValue": "28/5"
 },
 {
  "id": "algx-064",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Linear equations in one variable",
  "difficulty": 4,
  "level": 3,
  "type": "mc",
  "stimulus": "",
  "question": "If 6x + 5 = 4x + 12, what is the value of x?",
  "solution": "Subtract 4x from both sides: 2x + 5 = 12. Subtract 5: 2x = 7. Divide by 2: x = 7/2. Not every equation has a whole-number answer — a fraction like 7/2 (or 3.5) is a perfectly good solution.",
  "choices": [
   "5/2",
   "7",
   "2/7",
   "7/2"
  ],
  "answerIndex": 3
 },
 {
  "id": "algx-065",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Linear equations in two variables",
  "difficulty": 4,
  "level": 3,
  "type": "grid",
  "stimulus": "",
  "question": "A line in the xy-plane passes through points (2, 3) and (8, k), where k is a constant. If the slope of the line is 2, what is the value of k?",
  "solution": "Slope is (change in y) ÷ (change in x): (k − 3) ÷ (8 − 2) = 2, so (k − 3)/6 = 2. Multiply by 6: k − 3 = 12, so k = 15.",
  "choices": null,
  "answerValue": "15"
 },
 {
  "id": "algx-066",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Linear equations in two variables",
  "difficulty": 4,
  "level": 3,
  "type": "mc",
  "stimulus": "A line in the xy-plane is defined by y = (1/3)x + 2.",
  "question": "Which equation defines the line that is perpendicular to this line and passes through the point (2, 1)?",
  "solution": "Perpendicular slopes are opposite reciprocals: the slope must be −3. The line through (2, 1) with slope −3 is y − 1 = −3(x − 2), which simplifies to y = −3x + 7. Verify the point: −3(2) + 7 = 1. ✓ The choice y = −3x + 1 has the right slope but the wrong intercept — it does not pass through (2, 1).",
  "choices": [
   "y = −3x + 1",
   "y = −3x + 7",
   "y = 3x − 5",
   "y = (1/3)x + 7"
  ],
  "answerIndex": 1
 },
 {
  "id": "algx-067",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Linear equations in two variables",
  "difficulty": 4,
  "level": 3,
  "type": "mc",
  "stimulus": "y = 3x − 1\nkx − 6y = 5",
  "question": "If the two lines defined by the equations above are parallel, what is the value of k?",
  "solution": "Parallel lines have equal slopes. The first line has slope 3. Rewrite the second as y = (k/6)x − 5/6, so its slope is k/6. Setting k/6 = 3 gives k = 18.",
  "choices": [
   "−18",
   "6",
   "2",
   "18"
  ],
  "answerIndex": 3
 },
 {
  "id": "algx-068",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Linear equations in two variables",
  "difficulty": 4,
  "level": 3,
  "type": "grid",
  "stimulus": "",
  "question": "A line in the xy-plane passes through points (1, -2) and (3, 4). The equation of the line can be written as y = mx + b. What is the value of b?",
  "solution": "Slope: (4 − (-2)) ÷ (3 − 1) = 6 ÷ 2 = 3. Substitute (1, -2) into y = 3x + b: -2 = 3(1) + b, so b = -2 − 3 = −5.",
  "choices": null,
  "answerValue": "−5"
 },
 {
  "id": "algx-069",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Linear equations in two variables",
  "difficulty": 4,
  "level": 3,
  "type": "mc",
  "stimulus": "",
  "question": "What is the slope of the line defined by 6x − 14y = 21 in the xy-plane?",
  "solution": "Solve for y: −14y = −6x + 21, so y = (6/14)x − 21/14 = (3/7)x − 3/2. The slope is 3/7. Using −A/B with A = 6 and B = −14: slope = −6/(−14) = 3/7 — the two negatives cancel, which is exactly where the trap answer −3/7 comes from.",
  "choices": [
   "7/3",
   "−7/3",
   "−3/7",
   "3/7"
  ],
  "answerIndex": 3
 },
 {
  "id": "algx-070",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Linear functions",
  "difficulty": 5,
  "level": 3,
  "type": "mc",
  "stimulus": "The function f is defined by f(x) = a(x + 2) − 5, where a is a constant. If f(1) = 4,",
  "question": "What is the value of f(6)?",
  "solution": "Use the known value to find a: f(1) = a(1 + 2) − 5 = 3a − 5 = 4, so 3a = 9 and a = 3. Then f(6) = 3(6 + 2) − 5 = 24 − 5 = 19. Solve for the constant completely before evaluating at the new input.",
  "choices": [
   "13",
   "19",
   "23",
   "29"
  ],
  "answerIndex": 1
 },
 {
  "id": "algx-071",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Linear functions",
  "difficulty": 4,
  "level": 3,
  "type": "mc",
  "stimulus": "Plant A is 9 inches tall and grows 2 inches per week. Plant B is 3 inches tall and grows 3 inches per week.",
  "question": "After how many weeks will the two plants be the same height?",
  "solution": "Heights after w weeks: A is 9 + 2w and B is 3 + 3w. Set them equal: 9 + 2w = 3 + 3w. Subtract 2w and 3: 6 = w. In 6 weeks both plants are 9 + 2(6) = 21 inches tall. ✓",
  "choices": [
   "9",
   "6",
   "12",
   "3"
  ],
  "answerIndex": 1
 },
 {
  "id": "algx-072",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Linear functions",
  "difficulty": 4,
  "level": 3,
  "type": "mc",
  "stimulus": "The function f models the temperature, in degrees Fahrenheit, in a greenhouse x hours after sunrise. A second function is defined by g(x) = f(x) + 4.",
  "question": "Which statement best explains the meaning of g?",
  "solution": "Adding 4 to the output raises every temperature value by 4 degrees while the times stay the same — g models a greenhouse that is 4 degrees warmer at every time. Shifting the input (f(x + 4)) would move times instead; adding to the output moves values.",
  "choices": [
   "g models temperatures that are 4 times those modeled by f",
   "g models temperatures that are 4 degrees higher than those modeled by f at every time",
   "g models temperatures recorded 4 hours later than those modeled by f",
   "g models temperatures that reach their highest value 4 hours earlier"
  ],
  "answerIndex": 1
 },
 {
  "id": "algx-073",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Linear functions",
  "difficulty": 4,
  "level": 3,
  "type": "grid",
  "stimulus": "",
  "question": "The function f is defined by f(x) = 3x + b, where b is a constant. If f(4) = 10, what is the value of b?",
  "solution": "Substitute: f(4) = 3(4) + b = 12 + b = 10, so b = 10 − 12 = −2.",
  "choices": null,
  "answerValue": "−2"
 },
 {
  "id": "algx-074",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Linear functions",
  "difficulty": 4,
  "level": 3,
  "type": "grid",
  "stimulus": "Tank P contains 260 liters of water and drains at 14 liters per minute. Tank Q contains 80 liters and is filled at 10 liters per minute.",
  "question": "After how many minutes will the two tanks contain the same amount of water?",
  "solution": "Amounts after t minutes: P has 260 − 14t and Q has 80 + 10t. Set equal: 260 − 14t = 80 + 10t. Add 14t and subtract 80: 180 = 24t, so t = 7.5 minutes. Check: both tanks hold 260 − 105 = 155 liters. ✓",
  "choices": null,
  "answerValue": "15/2"
 },
 {
  "id": "algx-075",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Linear functions",
  "difficulty": 4,
  "level": 3,
  "type": "grid",
  "stimulus": "",
  "question": "If f(x) = (2/3)x + 4 and f(x) = 12, what is the value of x?",
  "solution": "Set (2/3)x + 4 = 12. Subtract 4: (2/3)x = 8. Multiply by the reciprocal 3/2: x = 8 × 3/2 = 12.",
  "choices": null,
  "answerValue": "12"
 },
 {
  "id": "algx-076",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Systems of two linear equations in two variables",
  "difficulty": 5,
  "level": 3,
  "type": "grid",
  "stimulus": "4x + 3y = 10\n2x − y = 1",
  "question": "What is the value of x?",
  "solution": "From the second equation, y = 2x − 1. Substitute into the first: 4x + 3(2x − 1) = 10, so 10x − 3 = 10 and 10x = 13. Thus x = 13/10 = 1.3. Fractional solutions are normal — don't round or force a whole number.",
  "choices": null,
  "answerValue": "13/10"
 },
 {
  "id": "algx-077",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Systems of two linear equations in two variables",
  "difficulty": 5,
  "level": 3,
  "type": "mc",
  "stimulus": "2x − 3y = 6\n4x − ky = 5",
  "question": "If the system of equations above has no solution, what is the value of k?",
  "solution": "No solution means parallel lines. Doubling the first equation gives 4x − 6y = 12. For the second equation to describe a parallel line, its y-coefficient must match after the same scaling: k = 6 — but then the constants (12 vs. 5) disagree, so the lines never meet.",
  "choices": [
   "6",
   "−6",
   "12",
   "3"
  ],
  "answerIndex": 0
 },
 {
  "id": "algx-078",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Systems of two linear equations in two variables",
  "difficulty": 5,
  "level": 3,
  "type": "mc",
  "stimulus": "(1/2)x + y = 3\nx + ky = 6",
  "question": "If the system of equations above has infinitely many solutions, what is the value of k?",
  "solution": "Infinitely many solutions means the equations describe the same line. Doubling the first equation gives x + 2y = 6. Comparing with x + ky = 6, the y-coefficients must match: k = 2.",
  "choices": [
   "3",
   "2",
   "1/2",
   "6"
  ],
  "answerIndex": 1
 },
 {
  "id": "algx-079",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Systems of two linear equations in two variables",
  "difficulty": 4,
  "level": 3,
  "type": "mc",
  "stimulus": "3x + y = 17\nx + 2y = 9",
  "question": "If (x, y) is the solution to the system of equations above, what is the value of 2x − y?",
  "solution": "From the first equation, y = 17 − 3x. Substitute into the second: x + 2(17 − 3x) = 9, so −5x + 34 = 9 and x = 5. Then y = 17 − 3(5) = 2. Finally, 2x − y = 2(5) − 2 = 8. Solve the system fully first, then evaluate the expression asked for.",
  "choices": [
   "5",
   "8",
   "12",
   "2"
  ],
  "answerIndex": 1
 },
 {
  "id": "algx-080",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Systems of two linear equations in two variables",
  "difficulty": 4,
  "level": 3,
  "type": "mc",
  "stimulus": "At an office supply store, 2 notebooks and 1 folder together cost $13, and 1 notebook and 2 folders together cost $11.",
  "question": "What is the price, in dollars, of one notebook?",
  "solution": "Let n and f be the prices: 2n + f = 13 and n + 2f = 11. Double the second equation: 2n + 4f = 22. Subtract the first equation: 3f = 9, so f = 3. Then 2n = 13 − 3 = 10, and n = 5. Check: 5 + 2(3) = 11. ✓",
  "choices": [
   "$5",
   "$6",
   "$8",
   "$3"
  ],
  "answerIndex": 0
 },
 {
  "id": "algx-081",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Systems of two linear equations in two variables",
  "difficulty": 4,
  "level": 3,
  "type": "mc",
  "stimulus": "y = x + 2\ny = −2x + 8",
  "question": "If (x, y) is the solution to the system of equations above, what is the value of xy?",
  "solution": "The two expressions for y must be equal: x + 2 = −2x + 8, so 3x = 6 and x = 2. Then y = 2 + 2 = 4. The product is xy = 2 × 4 = 8.",
  "choices": [
   "4",
   "6",
   "8",
   "2"
  ],
  "answerIndex": 2
 },
 {
  "id": "algx-082",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Systems of two linear equations in two variables",
  "difficulty": 4,
  "level": 3,
  "type": "mc",
  "stimulus": "A theater sold 20 tickets for a total of $190. Adult tickets cost $12.50 each and child tickets cost $7.50 each.",
  "question": "How many adult tickets were sold?",
  "solution": "Let a and c be the counts: a + c = 20 and 12.5a + 7.5c = 190. Substitute c = 20 − a: 12.5a + 7.5(20 − a) = 190, so 5a + 150 = 190 and 5a = 40, giving a = 8. Check: 8(12.50) + 12(7.50) = 100 + 90 = 190. ✓",
  "choices": [
   "10",
   "8",
   "12",
   "6"
  ],
  "answerIndex": 1
 },
 {
  "id": "algx-083",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Linear inequalities in one or two variables",
  "difficulty": 5,
  "level": 3,
  "type": "grid",
  "stimulus": "5 − (2x + 1)/4 ≥ 1",
  "question": "What is the greatest integer value of x that satisfies the inequality above?",
  "solution": "Multiply every term by 4: 20 − (2x + 1) ≥ 4, which simplifies to 19 − 2x ≥ 4. Subtract 19: −2x ≥ −15. Divide by −2 and flip the sign: x ≤ 7.5. The greatest integer no bigger than 7.5 is 7.",
  "choices": null,
  "answerValue": "7"
 },
 {
  "id": "algx-084",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Linear inequalities in one or two variables",
  "difficulty": 5,
  "level": 3,
  "type": "mc",
  "stimulus": "2x + 1 > −5\nx − 4 ≤ 1",
  "question": "How many integer values of x satisfy the system of inequalities above?",
  "solution": "Solve each: 2x > −6 gives x > −3, and x ≤ 5. The integers strictly greater than −3 and at most 5 are −2, −1, 0, 1, 2, 3, 4, 5 — that is 8 values. Watch out: −3 itself is excluded because the first inequality is strict.",
  "choices": [
   "9",
   "8",
   "11",
   "7"
  ],
  "answerIndex": 1
 },
 {
  "id": "algx-085",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Linear inequalities in one or two variables",
  "difficulty": 5,
  "level": 3,
  "type": "mc",
  "stimulus": "",
  "question": "If the solution set of the inequality kx + 2 < 10, where k is a positive constant, is x < 2, what is the value of k?",
  "solution": "Solve in terms of k: kx < 8, and since k is positive the sign does not flip: x < 8/k. Matching the given solution x < 2 gives 8/k = 2, so k = 4.",
  "choices": [
   "2",
   "8",
   "4",
   "16"
  ],
  "answerIndex": 2
 },
 {
  "id": "algx-086",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Linear inequalities in one or two variables",
  "difficulty": 4,
  "level": 3,
  "type": "mc",
  "stimulus": "",
  "question": "The graph of the inequality y ≤ 2x + 1 in the xy-plane is the region:",
  "solution": "The boundary is the line y = 2x + 1. Because the inequality is ≤, the boundary itself is included (a solid line), and the solutions are the points on or below the line — test (0, 0): 0 ≤ 2(0) + 1 is true, and (0, 0) lies below the line. Regions above the line, or a dashed boundary, do not match.",
  "choices": [
   "On or above the line y = 2x + 1, including the line itself",
   "Below the line y = 2x + 1, not including the line itself",
   "Above the line y = 2x + 1, not including the line itself",
   "On or below the line y = 2x + 1, including the line itself"
  ],
  "answerIndex": 3
 },
 {
  "id": "algx-087",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Linear inequalities in one or two variables",
  "difficulty": 4,
  "level": 3,
  "type": "grid",
  "stimulus": "A caterer prepares trays of two kinds. Each large tray serves 5 people and each small tray serves 3 people. The caterer must serve at most 48 people and prepares exactly twice as many small trays as large trays.",
  "question": "What is the greatest number of large trays the caterer can prepare?",
  "solution": "Let L be the number of large trays; then small trays number 2L. Total served: 5L + 3(2L) = 11L, and it must be at most 48: 11L ≤ 48, so L ≤ 48/11 ≈ 4.36. The greatest whole number is 4. (5 large trays would mean 15 trays serving 55 people — over the limit.)",
  "choices": null,
  "answerValue": "4"
 },
 {
  "id": "algx-088",
  "section": "Math",
  "domain": "Algebra",
  "topic": "Linear inequalities in one or two variables",
  "difficulty": 4,
  "level": 3,
  "type": "mc",
  "stimulus": "",
  "question": "Which inequality is equivalent to 3(x − 2) ≥ 2(x + 1) + 4?",
  "solution": "Expand both sides: 3x − 6 ≥ 2x + 2 + 4, so 3x − 6 ≥ 2x + 6. Subtract 2x and add 6: x ≥ 12. No division by a negative occurs, so the direction never flips.",
  "choices": [
   "x ≥ 0",
   "x ≥ 12",
   "x ≤ 12",
   "x ≥ 6"
  ],
  "answerIndex": 1
 },
 {
  "id": "amx-001",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Equivalent expressions",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "",
  "question": "Which expression is equivalent to (4x³)(3x²)?",
  "solution": "Multiply the coefficients and add the exponents of the like bases: (4 · 3)x³⁺² = 12x⁵. Watch out: the exponents add — they do not multiply — because you are combining repeated factors of x.",
  "choices": [
   "7x⁵",
   "12x⁵",
   "12x⁶",
   "12x¹⁰"
  ],
  "answerIndex": 1
 },
 {
  "id": "amx-002",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Equivalent expressions",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "",
  "question": "Which expression is equivalent to (2x⁴)(5x)?",
  "solution": "Multiply the coefficients: 2 · 5 = 10. Add the exponents: the second factor is 5x¹, so x⁴ · x¹ = x⁴⁺¹ = x⁵. The result is 10x⁵. The unwritten exponent on x is 1 — forgetting it is what produces 10x⁴.",
  "choices": [
   "10x²⁰",
   "10x⁴",
   "7x⁵",
   "10x⁵"
  ],
  "answerIndex": 3
 },
 {
  "id": "amx-003",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Equivalent expressions",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "",
  "question": "Which expression is equivalent to (2x³)²?",
  "solution": "The outer exponent applies to everything inside the parentheses: (2x³)² = 2² · (x³)² = 4 · x³ˣ² = 4x⁶. The coefficient is squared too — leaving it as 2 is the most common slip here.",
  "choices": [
   "4x⁶",
   "2x⁵",
   "4x⁵",
   "2x⁶"
  ],
  "answerIndex": 0
 },
 {
  "id": "amx-004",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Equivalent expressions",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "",
  "question": "What is the coefficient of x in the sum (5x² + 3x − 2) + (2x² − 7x + 4)?",
  "solution": "Only like terms combine. The x-terms are 3x and −7x, and 3x + (−7x) = −4x, so the coefficient of x in the sum is −4. (The full sum is 7x² − 4x + 2, but the question asks only for the one coefficient.)",
  "choices": [
   "10",
   "−10",
   "4",
   "−4"
  ],
  "answerIndex": 3
 },
 {
  "id": "amx-005",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Equivalent expressions",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "",
  "question": "Which expression is equivalent to (x + 6)(x − 6)?",
  "solution": "Multiply term by term: x² − 6x + 6x − 36. The middle terms cancel — that always happens when the two factors differ only in the sign of the constant — leaving x² − 36.",
  "choices": [
   "x² − 6x + 36",
   "x² − 36",
   "x² − 12x − 36",
   "x² + 36"
  ],
  "answerIndex": 1
 },
 {
  "id": "amx-006",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Equivalent expressions",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "6x² + 9x",
  "question": "Which of the following is a factor of the expression above?",
  "solution": "Factor out the greatest common factor first: 6x² + 9x = 3x(2x + 3). So the expression has factors 3x and (2x + 3). Check the key by the Factor Theorem: (2x + 3) is a factor exactly when x = −3/2 makes the expression 0, and 6(9/4) + 9(−3/2) = 27/2 − 27/2 = 0. ✓ The other choices give nonzero values at their roots.",
  "choices": [
   "2x + 3",
   "2x + 1",
   "x + 3",
   "3x − 3"
  ],
  "answerIndex": 0
 },
 {
  "id": "amx-007",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Equivalent expressions",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "",
  "question": "Which expression is equivalent to √75?",
  "solution": "Find the largest perfect square dividing 75: 75 = 25 · 3. So √75 = √25 · √3 = 5√3. Watch out: 3√5 squares back to 9 · 5 = 45, not 75 — square your answer choice to check it.",
  "choices": [
   "5√15",
   "3√5",
   "5√3",
   "25√3"
  ],
  "answerIndex": 2
 },
 {
  "id": "amx-008",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Equivalent expressions",
  "difficulty": 1,
  "level": 1,
  "type": "grid",
  "stimulus": "",
  "question": "What is the value of 4⁰ + 4⁻¹?",
  "solution": "Any nonzero number to the 0 power is 1, so 4⁰ = 1. A negative exponent means take the reciprocal: 4⁻¹ = 1/4. The sum is 1 + 1/4 = 5/4.",
  "choices": null,
  "answerValue": "5/4"
 },
 {
  "id": "amx-009",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Equivalent expressions",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "",
  "question": "What is the coefficient of x² in the difference (7x² − 4x + 1) − (3x² + 2x − 5)?",
  "solution": "Distribute the subtraction, then combine like terms. The x²-terms give 7x² − 3x² = 4x², so the coefficient is 4. (The full difference is 4x² − 6x + 6; the − sign flips every term of the second polynomial, which is where the −6x and +6 come from.)",
  "choices": [
   "10",
   "3",
   "−4",
   "4"
  ],
  "answerIndex": 3
 },
 {
  "id": "amx-010",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Equivalent expressions",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "x² + 2x − 15",
  "question": "Which of the following is a factor of the polynomial above?",
  "solution": "Look for two numbers that multiply to −15 and add to 2: those are 5 and −3, so x² + 2x − 15 = (x + 5)(x − 3). Confirm with the Factor Theorem: at x = −5, 25 − 10 − 15 = 0. ✓ The other choices give 20, −12, and −12 at their roots — none is a factor.",
  "choices": [
   "x − 1",
   "x + 3",
   "x − 5",
   "x + 5"
  ],
  "answerIndex": 3
 },
 {
  "id": "amx-011",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Equivalent expressions",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "",
  "question": "Which expression is equivalent to (12x⁵)/(4x²)?",
  "solution": "Divide the coefficients: 12/4 = 3. Subtract the exponents of the like bases: x⁵/x² = x⁵⁻² = x³. The result is 3x³. Division subtracts exponents; multiplication is what adds them.",
  "choices": [
   "3x³",
   "3x⁷",
   "12x³",
   "8x³"
  ],
  "answerIndex": 0
 },
 {
  "id": "amx-012",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Equivalent expressions",
  "difficulty": 3,
  "level": 2,
  "type": "mc",
  "stimulus": "",
  "question": "Which expression is equivalent to (3x − 2)(2x + 5)?",
  "solution": "Multiply term by term: 3x · 2x = 6x²; 3x · 5 = 15x; −2 · 2x = −4x; −2 · 5 = −10. Combine the middle terms: 15x − 4x = 11x. Result: 6x² + 11x − 10. Keep each sign attached to its number as you distribute — the −11x distractor comes from flipping the sign of −4x.",
  "choices": [
   "6x² + 19x − 10",
   "6x² − 11x − 10",
   "6x² + 11x − 10",
   "6x² + 11x + 10"
  ],
  "answerIndex": 2
 },
 {
  "id": "amx-013",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Equivalent expressions",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "",
  "question": "Which expression is equivalent to (x² + 7x + 12)/(x + 3)?",
  "solution": "Factor the numerator: x² + 7x + 12 = (x + 3)(x + 4), since 3 and 4 multiply to 12 and add to 7. The (x + 3) factors cancel, leaving x + 4.",
  "choices": [
   "x + 3",
   "x + 12",
   "x + 4",
   "x + 7"
  ],
  "answerIndex": 2
 },
 {
  "id": "amx-014",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Equivalent expressions",
  "difficulty": 3,
  "level": 2,
  "type": "mc",
  "stimulus": "",
  "question": "Which expression is equivalent to (2x² − 8)/(x − 2)?",
  "solution": "Factor the numerator: 2x² − 8 = 2(x² − 4) = 2(x − 2)(x + 2). Cancel the (x − 2) factors: 2(x + 2) = 2x + 4. The 2 multiplies both terms when you distribute — that is what the x + 2 distractor misses.",
  "choices": [
   "x + 2",
   "2x + 4",
   "2x − 4",
   "2x + 8"
  ],
  "answerIndex": 1
 },
 {
  "id": "amx-015",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Equivalent expressions",
  "difficulty": 3,
  "level": 2,
  "type": "mc",
  "stimulus": "",
  "question": "Which expression is equivalent to √(32x²), where x ≥ 0?",
  "solution": "Split 32x² into a perfect square times the rest: 32x² = 16x² · 2. Then √(32x²) = √(16x²) · √2 = 4x√2 (using x ≥ 0 so √(x²) = x). Square-check: (4x√2)² = 16x² · 2 = 32x². ✓",
  "choices": [
   "2x√2",
   "4x√4",
   "4x√2",
   "8x√2"
  ],
  "answerIndex": 2
 },
 {
  "id": "amx-016",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Equivalent expressions",
  "difficulty": 3,
  "level": 2,
  "type": "grid",
  "stimulus": "",
  "question": "The expression x² − 8x + 19 can be rewritten in the form (x − 4)² + k. What is the value of k?",
  "solution": "Expand (x − 4)²: x² − 8x + 16. The given expression has constant 19 instead of 16, so k = 19 − 16 = 3. Equivalently, completing the square adds and subtracts (−8/2)² = 16, leaving +19 − 16 = +3 outside.",
  "choices": null,
  "answerValue": "3"
 },
 {
  "id": "amx-017",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Equivalent expressions",
  "difficulty": 3,
  "level": 2,
  "type": "mc",
  "stimulus": "",
  "question": "When (x + 2)(x² − 3x + 4) is expanded, what is the coefficient of x²?",
  "solution": "The x²-terms come from two products: x · (−3x) = −3x² and 2 · x² = 2x². Their sum is −3x² + 2x² = −x², so the coefficient is −1. (Full expansion: x³ − x² − 2x + 8.) Track only the products that land on x² — the rest is distraction.",
  "choices": [
   "−1",
   "5",
   "1",
   "−5"
  ],
  "answerIndex": 0
 },
 {
  "id": "amx-018",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Equivalent expressions",
  "difficulty": 3,
  "level": 2,
  "type": "mc",
  "stimulus": "",
  "question": "Which expression is equivalent to ((x + 4)/(x − 1)) ÷ ((x + 4)/(x + 2))?",
  "solution": "Dividing by a fraction means multiplying by its reciprocal: ((x + 4)/(x − 1)) · ((x + 2)/(x + 4)). The (x + 4) factors cancel, leaving (x + 2)/(x − 1).",
  "choices": [
   "(x + 2)/(x − 1)",
   "(x − 1)/(x + 2)",
   "(x + 4)/(x + 2)",
   "(x + 2)/(x + 4)"
  ],
  "answerIndex": 0
 },
 {
  "id": "amx-019",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Equivalent expressions",
  "difficulty": 3,
  "level": 2,
  "type": "mc",
  "stimulus": "",
  "question": "Which expression is equivalent to 49x² − 25?",
  "solution": "Both terms are perfect squares: 49x² = (7x)² and 25 = 5². A difference of squares factors as (7x − 5)(7x + 5), and expanding that product returns 49x² − 25 because the middle terms cancel. The squared choices expand to expressions with a middle term, so they cannot match.",
  "choices": [
   "(7x + 5)²",
   "(7x − 5)²",
   "(7x − 5)(7x + 5)",
   "(x − 5)(x + 5)"
  ],
  "answerIndex": 2
 },
 {
  "id": "amx-020",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Equivalent expressions",
  "difficulty": 3,
  "level": 2,
  "type": "mc",
  "stimulus": "",
  "question": "Which expression is equivalent to x⁹/x¹³?",
  "solution": "Subtract the exponents: x⁹⁻¹³ = x⁻⁴. A negative exponent means the reciprocal, so x⁻⁴ = 1/x⁴. The exponent is 9 − 13 = −4, not 13 − 9 — order matters when the bottom exponent is bigger.",
  "choices": [
   "x²²",
   "1/x²²",
   "x⁴",
   "1/x⁴"
  ],
  "answerIndex": 3
 },
 {
  "id": "amx-021",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Equivalent expressions",
  "difficulty": 4,
  "level": 2,
  "type": "mc",
  "stimulus": "",
  "question": "What is the constant term of (4x³ + 2x − 7) − (x³ − 3x + 2)?",
  "solution": "The constant terms are −7 and +2, and subtraction gives −7 − 2 = −9. The trap is the sign: the +2 is being subtracted, so it contributes −2, not +2. (The full difference is 3x³ + 5x − 9.)",
  "choices": [
   "−5",
   "−2",
   "9",
   "−9"
  ],
  "answerIndex": 3
 },
 {
  "id": "amx-022",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Equivalent expressions",
  "difficulty": 4,
  "level": 3,
  "type": "mc",
  "stimulus": "",
  "question": "Which expression is equivalent to 3/(x − 2) + 2/(x + 2)?",
  "solution": "Use the common denominator (x − 2)(x + 2) = x² − 4. Rewrite each fraction: 3(x + 2)/(x² − 4) + 2(x − 2)/(x² − 4) = (3x + 6 + 2x − 4)/(x² − 4) = (5x + 2)/(x² − 4). Each numerator must be multiplied by the *other* denominator — skipping that step is what produces the 5/(x² − 4) distractor.",
  "choices": [
   "(5x + 2)/(x − 4)",
   "5/(x² − 4)",
   "(5x − 2)/(x² − 4)",
   "(5x + 2)/(x² − 4)"
  ],
  "answerIndex": 3
 },
 {
  "id": "amx-023",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Equivalent expressions",
  "difficulty": 4,
  "level": 3,
  "type": "mc",
  "stimulus": "",
  "question": "Which expression is equivalent to 1/(x − 3) + 1/(x + 3)?",
  "solution": "The common denominator is (x − 3)(x + 3) = x² − 9. The numerator becomes (x + 3) + (x − 3) = 2x — the constants cancel. Result: 2x/(x² − 9).",
  "choices": [
   "2x/(x − 9)",
   "2/(x² − 9)",
   "2x/(x² − 9)",
   "(2x + 6)/(x² − 9)"
  ],
  "answerIndex": 2
 },
 {
  "id": "amx-024",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Equivalent expressions",
  "difficulty": 4,
  "level": 3,
  "type": "grid",
  "stimulus": "",
  "question": "If (x + a)(x + b) = x² + 7x + 12 for all values of x, where a and b are positive constants with a > b, what is the value of a − b?",
  "solution": "Expanding gives x² + (a + b)x + ab, so a + b = 7 and ab = 12. The factor pairs of 12 are (1, 12), (2, 6), and (3, 4); only 3 and 4 sum to 7. With a > b, a = 4 and b = 3, so a − b = 1.",
  "choices": null,
  "answerValue": "1"
 },
 {
  "id": "amx-025",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Equivalent expressions",
  "difficulty": 4,
  "level": 3,
  "type": "grid",
  "stimulus": "",
  "question": "The expression 2x² + 12x + 23 can be rewritten in the form 2(x − h)² + k. What is the value of h?",
  "solution": "Factor the 2 out of the x-terms: 2(x² + 6x) + 23. Complete the square inside: x² + 6x = (x + 3)² − 9. So the expression is 2(x + 3)² − 18 + 23 = 2(x + 3)² + 5. Matching 2(x − h)² + k gives −h = 3, so h = −3. Mind the sign: the form has (x − h), so a +3 inside the parentheses means h = −3.",
  "choices": null,
  "answerValue": "−3"
 },
 {
  "id": "amx-026",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Equivalent expressions",
  "difficulty": 4,
  "level": 3,
  "type": "mc",
  "stimulus": "",
  "question": "Which expression is equivalent to (x² + 2x − 15)/(x + 5)?",
  "solution": "Factor the numerator: x² + 2x − 15 = (x + 5)(x − 3), since 5 and −3 multiply to −15 and add to 2. Cancel (x + 5): the quotient is x − 3.",
  "choices": [
   "x − 3",
   "x + 3",
   "x − 5",
   "x + 5"
  ],
  "answerIndex": 0
 },
 {
  "id": "amx-027",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Equivalent expressions",
  "difficulty": 5,
  "level": 3,
  "type": "mc",
  "stimulus": "",
  "question": "Which expression is equivalent to √(72x³), where x ≥ 0?",
  "solution": "Split off the largest perfect square: 72x³ = 36x² · 2x. Then √(72x³) = √(36x²) · √(2x) = 6x√(2x). Square-check: (6x)² · 2x = 36x² · 2x = 72x³. ✓",
  "choices": [
   "8x√(3x)",
   "6x√(2x)",
   "6x√(3x)",
   "12x√(2x)"
  ],
  "answerIndex": 1
 },
 {
  "id": "amx-028",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Equivalent expressions",
  "difficulty": 4,
  "level": 3,
  "type": "mc",
  "stimulus": "",
  "question": "Which expression is equivalent to ((x³)⁴)/(x⁵)?",
  "solution": "First the power of a power: (x³)⁴ = x³ˣ⁴ = x¹². Then divide: x¹²/x⁵ = x¹²⁻⁵ = x⁷. Two different exponent rules run in sequence — multiply for the power of a power, subtract for the quotient.",
  "choices": [
   "x⁷",
   "x¹⁷",
   "x¹²",
   "x²"
  ],
  "answerIndex": 0
 },
 {
  "id": "amx-029",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Equivalent expressions",
  "difficulty": 4,
  "level": 3,
  "type": "grid",
  "stimulus": "",
  "question": "If 3x² − 12x + 9 = 3(x − 1)(x − k) for all values of x, what is the value of k?",
  "solution": "Expand the right side: 3(x − 1)(x − k) = 3(x² − (1 + k)x + k) = 3x² − 3(1 + k)x + 3k. Match the constant terms: 3k = 9, so k = 3. (Check the middle: −3(1 + 3) = −12. ✓) Because the identity holds for every x, any single coefficient pins k down.",
  "choices": null,
  "answerValue": "3"
 },
 {
  "id": "amx-030",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Equivalent expressions",
  "difficulty": 4,
  "level": 3,
  "type": "mc",
  "stimulus": "",
  "question": "Which expression is equivalent to (x² − 16)/(x² − x − 12)?",
  "solution": "Factor both parts: x² − 16 = (x + 4)(x − 4) (difference of squares) and x² − x − 12 = (x − 4)(x + 3) (numbers −4 and 3 multiply to −12 and add to −1). Cancel (x − 4): (x + 4)/(x + 3).",
  "choices": [
   "(x + 4)/(x + 3)",
   "(x + 4)/(x − 3)",
   "(x + 16)/(x + 12)",
   "(x − 4)/(x + 3)"
  ],
  "answerIndex": 0
 },
 {
  "id": "amx-031",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Equivalent expressions",
  "difficulty": 4,
  "level": 3,
  "type": "mc",
  "stimulus": "",
  "question": "Which expression is equivalent to 9x² − 4y²?",
  "solution": "Both terms are perfect squares: 9x² = (3x)² and 4y² = (2y)². A difference of squares factors as (3x − 2y)(3x + 2y); expanding returns 9x² − 4y² because the middle terms −6xy and +6xy cancel.",
  "choices": [
   "(9x − 4y)(9x + 4y)",
   "(3x − 4y)(3x + 4y)",
   "(3x − 2y)(3x + 2y)",
   "(3x − 2y)²"
  ],
  "answerIndex": 2
 },
 {
  "id": "amx-032",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Nonlinear equations in one variable and systems of equations in two variables",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "x² − 5x + 6 = 0",
  "question": "What is the greater of the two solutions to the equation above?",
  "solution": "Factor: x² − 5x + 6 = (x − 2)(x − 3), using numbers that multiply to 6 and add to −5. Setting each factor to 0 gives x = 2 and x = 3. The greater solution is 3.",
  "choices": [
   "6",
   "3",
   "5",
   "2"
  ],
  "answerIndex": 1
 },
 {
  "id": "amx-033",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Nonlinear equations in one variable and systems of equations in two variables",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "x² + x − 12 = 0",
  "question": "What is the smaller of the two solutions to the equation above?",
  "solution": "Factor: x² + x − 12 = (x + 4)(x − 3), using numbers that multiply to −12 and add to 1. The solutions are x = −4 and x = 3. The smaller solution is −4 — watch the sign; −4 is less than 3 even though 4 is the bigger absolute value.",
  "choices": [
   "4",
   "−4",
   "3",
   "−3"
  ],
  "answerIndex": 1
 },
 {
  "id": "amx-034",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Nonlinear equations in one variable and systems of equations in two variables",
  "difficulty": 1,
  "level": 1,
  "type": "grid",
  "stimulus": "",
  "question": "If (x − 4)² = 25, what is the greater of the two possible values of x?",
  "solution": "Take the square root of both sides — remembering both signs: x − 4 = 5 or x − 4 = −5. So x = 9 or x = −1. The greater value is 9. Forgetting the negative root is the classic error with this form.",
  "choices": null,
  "answerValue": "9"
 },
 {
  "id": "amx-035",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Nonlinear equations in one variable and systems of equations in two variables",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "√(x + 11) = 5",
  "question": "What is the solution to the equation above?",
  "solution": "Square both sides: x + 11 = 25. Subtract 11: x = 14. Check: √(14 + 11) = √25 = 5. ✓ With a plain radical like this, squaring once isolates the variable.",
  "choices": [
   "36",
   "16",
   "14",
   "9"
  ],
  "answerIndex": 2
 },
 {
  "id": "amx-036",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Nonlinear equations in one variable and systems of equations in two variables",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "",
  "question": "If 3^x = 81, what is the value of x?",
  "solution": "Rewrite 81 as a power of 3: 81 = 3 · 3 · 3 · 3 = 3⁴. With the same base on both sides, the exponents must be equal, so x = 4.",
  "choices": [
   "4",
   "27",
   "3",
   "9"
  ],
  "answerIndex": 0
 },
 {
  "id": "amx-037",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Nonlinear equations in one variable and systems of equations in two variables",
  "difficulty": 1,
  "level": 1,
  "type": "grid",
  "stimulus": "",
  "question": "What is the value of the discriminant of the equation 3x² + 6x + 2 = 0?",
  "solution": "The discriminant is b² − 4ac. Here a = 3, b = 6, and c = 2, so b² − 4ac = 6² − 4(3)(2) = 36 − 24 = 12. (Since 12 is positive, the equation has two distinct real solutions — but the question asks only for the value.)",
  "choices": null,
  "answerValue": "12"
 },
 {
  "id": "amx-038",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Nonlinear equations in one variable and systems of equations in two variables",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "y = x² − 2x + 1\ny = 4",
  "question": "The graphs of the two equations above intersect at two points. What is the greater of the two x-coordinates of the intersection points?",
  "solution": "At an intersection, the y-values agree, so set x² − 2x + 1 = 4. Rearrange: x² − 2x − 3 = 0, which factors as (x − 3)(x + 1) = 0. The x-coordinates are 3 and −1; the greater is 3.",
  "choices": [
   "−1",
   "3",
   "4",
   "1"
  ],
  "answerIndex": 1
 },
 {
  "id": "amx-039",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Nonlinear equations in one variable and systems of equations in two variables",
  "difficulty": 1,
  "level": 1,
  "type": "grid",
  "stimulus": "",
  "question": "If |x − 6| = 3, what is the smaller of the two possible values of x?",
  "solution": "The expression inside must equal 3 or −3: x − 6 = 3 gives x = 9, and x − 6 = −3 gives x = 3. The smaller value is 3. Geometrically, these are the two points at distance 3 from 6 on the number line.",
  "choices": null,
  "answerValue": "3"
 },
 {
  "id": "amx-040",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Nonlinear equations in one variable and systems of equations in two variables",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "",
  "question": "If 18/x = 6, what is the value of x?",
  "solution": "Multiply both sides by x: 18 = 6x. Divide by 6: x = 3. Check: 18/3 = 6. ✓ Getting the variable out of the denominator is always the first move.",
  "choices": [
   "4",
   "12",
   "2",
   "3"
  ],
  "answerIndex": 3
 },
 {
  "id": "amx-041",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Nonlinear equations in one variable and systems of equations in two variables",
  "difficulty": 3,
  "level": 2,
  "type": "mc",
  "stimulus": "2x² − 3x − 2 = 0",
  "question": "What is the greater of the two solutions to the equation above?",
  "solution": "Factor with the leading coefficient in play: 2x² − 3x − 2 = (2x + 1)(x − 2). Setting each factor to 0 gives x = −1/2 and x = 2. The greater solution is 2. (The quadratic formula gives the same pair: (3 ± √(9 + 16))/4 = (3 ± 5)/4.)",
  "choices": [
   "3",
   "−1/2",
   "2",
   "1/2"
  ],
  "answerIndex": 2
 },
 {
  "id": "amx-042",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Nonlinear equations in one variable and systems of equations in two variables",
  "difficulty": 3,
  "level": 2,
  "type": "mc",
  "stimulus": "√(2x − 3) = x − 3",
  "question": "What is the solution to the equation above?",
  "solution": "Square both sides: 2x − 3 = (x − 3)² = x² − 6x + 9. Rearrange: 0 = x² − 8x + 12 = (x − 2)(x − 6), so x = 2 or x = 6. Now check both in the original equation, because squaring can manufacture fake solutions. x = 2: √1 = 1, but x − 3 = −1 — extraneous. x = 6: √9 = 3, and 6 − 3 = 3. ✓ The only solution is 6. The '2 and 6' choice is exactly the trap for skipping the check.",
  "choices": [
   "2 and 6",
   "6",
   "No solution",
   "2"
  ],
  "answerIndex": 1
 },
 {
  "id": "amx-043",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Nonlinear equations in one variable and systems of equations in two variables",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "",
  "question": "If 4/(x − 2) = 6/(x + 1), what is the value of x?",
  "solution": "Cross-multiply: 4(x + 1) = 6(x − 2). Expand: 4x + 4 = 6x − 12. Collect terms: 16 = 2x, so x = 8. Check the denominators: 8 − 2 = 6 and 8 + 1 = 9, both nonzero, and 4/6 = 6/9 = 2/3. ✓",
  "choices": [
   "4",
   "6",
   "16",
   "8"
  ],
  "answerIndex": 3
 },
 {
  "id": "amx-044",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Nonlinear equations in one variable and systems of equations in two variables",
  "difficulty": 3,
  "level": 2,
  "type": "grid",
  "stimulus": "",
  "question": "If 9^x = 27, what is the value of x?",
  "solution": "Write both sides as powers of 3: 9^x = (3²)^x = 3^(2x) and 27 = 3³. Equal bases mean equal exponents: 2x = 3, so x = 3/2. The fractional answer is the point — 9 is not a whole-number power multiple of 27.",
  "choices": null,
  "answerValue": "3/2"
 },
 {
  "id": "amx-045",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Nonlinear equations in one variable and systems of equations in two variables",
  "difficulty": 3,
  "level": 2,
  "type": "grid",
  "stimulus": "",
  "question": "If the equation x² + 10x + k = 0, where k is a constant, has exactly one real solution, what is the value of k?",
  "solution": "Exactly one solution means the discriminant is 0: b² − 4ac = 0. Here 100 − 4k = 0, so k = 25. (Indeed, x² + 10x + 25 = (x + 5)² — a perfect square touching zero at the single point x = −5.)",
  "choices": null,
  "answerValue": "25"
 },
 {
  "id": "amx-046",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Nonlinear equations in one variable and systems of equations in two variables",
  "difficulty": 3,
  "level": 2,
  "type": "mc",
  "stimulus": "y = x² + 2x − 3\ny = 2x + 1",
  "question": "The graphs of the two equations above intersect at two points. What is the x-coordinate of the intersection point with the greater x-value?",
  "solution": "Set the expressions equal: x² + 2x − 3 = 2x + 1. The 2x terms cancel, leaving x² = 4, so x = 2 or x = −2. The greater x-coordinate is 2.",
  "choices": [
   "−2",
   "2",
   "4",
   "0"
  ],
  "answerIndex": 1
 },
 {
  "id": "amx-047",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Nonlinear equations in one variable and systems of equations in two variables",
  "difficulty": 3,
  "level": 2,
  "type": "mc",
  "stimulus": "",
  "question": "If |2x + 1| = 9, what is the smaller of the two possible values of x?",
  "solution": "Split into the two cases. 2x + 1 = 9 gives x = 4. 2x + 1 = −9 gives 2x = −10, so x = −5. The smaller value is −5.",
  "choices": [
   "4",
   "5",
   "−4",
   "−5"
  ],
  "answerIndex": 3
 },
 {
  "id": "amx-048",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Nonlinear equations in one variable and systems of equations in two variables",
  "difficulty": 3,
  "level": 2,
  "type": "grid",
  "stimulus": "A rectangular garden has a length that is 3 feet greater than its width. The area of the garden is 40 square feet.",
  "question": "What is the width, in feet, of the garden?",
  "solution": "Let w be the width; the length is w + 3. Area: w(w + 3) = 40, so w² + 3w − 40 = 0 = (w + 8)(w − 5). Thus w = 5 or w = −8. A width cannot be negative, so the width is 5 feet. (Check: 5 by 8 gives 40. ✓)",
  "choices": null,
  "answerValue": "5"
 },
 {
  "id": "amx-049",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Nonlinear equations in one variable and systems of equations in two variables",
  "difficulty": 3,
  "level": 2,
  "type": "mc",
  "stimulus": "x³ − 4x = 0",
  "question": "What is the greatest of the solutions to the equation above?",
  "solution": "Factor out x: x(x² − 4) = x(x − 2)(x + 2) = 0. A product is zero when any factor is zero, so x = 0, x = 2, or x = −2. The greatest solution is 2. Watch out: dividing both sides by x at the start would throw away the x = 0 solution entirely.",
  "choices": [
   "0",
   "2",
   "4",
   "−2"
  ],
  "answerIndex": 1
 },
 {
  "id": "amx-050",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Nonlinear equations in one variable and systems of equations in two variables",
  "difficulty": 4,
  "level": 2,
  "type": "mc",
  "stimulus": "",
  "question": "What is the solution to the equation x/(x − 4) = 4/(x − 4)?",
  "solution": "Multiply both sides by (x − 4): x = 4. But x = 4 makes both denominators in the original equation equal to 0, and division by 0 is undefined — so the only candidate is not actually allowed. The equation has no solution. Algebraic candidates must always be checked against the denominators.",
  "choices": [
   "0",
   "4",
   "−4",
   "No solution"
  ],
  "answerIndex": 3
 },
 {
  "id": "amx-051",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Nonlinear equations in one variable and systems of equations in two variables",
  "difficulty": 5,
  "level": 3,
  "type": "mc",
  "stimulus": "x² − 6x + 4 = 0",
  "question": "What is the greater of the two solutions to the equation above?",
  "solution": "This quadratic does not factor with integers, so use the quadratic formula with a = 1, b = −6, c = 4: x = (6 ± √(36 − 16))/2 = (6 ± √20)/2 = (6 ± 2√5)/2 = 3 ± √5. The two solutions are 3 − √5 and 3 + √5; the greater is 3 + √5 (about 5.24).",
  "choices": [
   "−3 + √5",
   "3 + √5",
   "6 + √5",
   "3 − √5"
  ],
  "answerIndex": 1
 },
 {
  "id": "amx-052",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Nonlinear equations in one variable and systems of equations in two variables",
  "difficulty": 5,
  "level": 3,
  "type": "grid",
  "stimulus": "x² + y² = 25\ny = x + 1",
  "question": "The graphs of the two equations above intersect at two points. What is the x-coordinate of the intersection point with the greater x-value?",
  "solution": "Substitute y = x + 1 into the circle: x² + (x + 1)² = 25, so 2x² + 2x + 1 = 25 and 2x² + 2x − 24 = 0. Divide by 2: x² + x − 12 = 0 = (x + 4)(x − 3). The intersection points have x = −4 and x = 3 (namely (−4, −3) and (3, 4)). The greater x-coordinate is 3.",
  "choices": null,
  "answerValue": "3"
 },
 {
  "id": "amx-053",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Nonlinear equations in one variable and systems of equations in two variables",
  "difficulty": 4,
  "level": 3,
  "type": "mc",
  "stimulus": "y = x² + 1\ny = 2x",
  "question": "How many distinct points are common to the graphs of the two equations above?",
  "solution": "Set the expressions equal: x² + 1 = 2x, so x² − 2x + 1 = 0 = (x − 1)². There is only one x-value, x = 1, giving the single point (1, 2) — the line is tangent to the parabola. Equivalently, the discriminant of x² − 2x + 1 is 4 − 4 = 0, the signature of exactly one intersection.",
  "choices": [
   "2",
   "3",
   "1",
   "0"
  ],
  "answerIndex": 2
 },
 {
  "id": "amx-054",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Nonlinear equations in one variable and systems of equations in two variables",
  "difficulty": 4,
  "level": 3,
  "type": "mc",
  "stimulus": "√(3x + 7) − 2 = 3",
  "question": "What is the solution to the equation above?",
  "solution": "Isolate the radical first: √(3x + 7) = 5. Square: 3x + 7 = 25, so 3x = 18 and x = 6. Check: √(18 + 7) − 2 = √25 − 2 = 5 − 2 = 3. ✓ Squaring before isolating would leave a radical behind — isolation is what makes this one clean step.",
  "choices": [
   "6",
   "9",
   "4",
   "32/3"
  ],
  "answerIndex": 0
 },
 {
  "id": "amx-055",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Nonlinear equations in one variable and systems of equations in two variables",
  "difficulty": 4,
  "level": 3,
  "type": "grid",
  "stimulus": "",
  "question": "If 2^(x + 2) = 8^(x − 1), what is the value of x?",
  "solution": "Express 8 as a power of 2: 8^(x − 1) = (2³)^(x − 1) = 2^(3x − 3). Equal bases mean equal exponents: x + 2 = 3x − 3, so 5 = 2x and x = 5/2. Check: 2^(9/2) on the left; 8^(3/2) = (√8)³ = 16√2 = 2^(9/2) on the right. ✓",
  "choices": null,
  "answerValue": "5/2"
 },
 {
  "id": "amx-056",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Nonlinear equations in one variable and systems of equations in two variables",
  "difficulty": 4,
  "level": 3,
  "type": "grid",
  "stimulus": "",
  "question": "If the equation x² + kx + 9 = 0, where k is a positive constant, has exactly one real solution, what is the value of k?",
  "solution": "Exactly one solution requires discriminant 0: k² − 4(1)(9) = 0, so k² = 36 and k = 6 or k = −6. The problem states k is positive, so k = 6. (With k = 6 the equation is (x + 3)² = 0.)",
  "choices": null,
  "answerValue": "6"
 },
 {
  "id": "amx-057",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Nonlinear equations in one variable and systems of equations in two variables",
  "difficulty": 4,
  "level": 3,
  "type": "mc",
  "stimulus": "",
  "question": "If (x + 6)/x = (x + 10)/(x − 2), what is the value of x?",
  "solution": "Cross-multiply: (x + 6)(x − 2) = x(x + 10). Expand both sides: x² + 4x − 12 = x² + 10x. The x² terms cancel — the equation is secretly linear: 4x − 12 = 10x, so −12 = 6x and x = −2. Check: (−2 + 6)/(−2) = −2 and (−2 + 10)/(−2 − 2) = 8/(−4) = −2. ✓",
  "choices": [
   "2",
   "3",
   "−2",
   "−6"
  ],
  "answerIndex": 2
 },
 {
  "id": "amx-058",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Nonlinear equations in one variable and systems of equations in two variables",
  "difficulty": 4,
  "level": 3,
  "type": "grid",
  "stimulus": "",
  "question": "What is the sum of the two solutions to the equation |3x − 2| = x + 4?",
  "solution": "Case 1: 3x − 2 = x + 4 gives 2x = 6, so x = 3. Case 2: 3x − 2 = −(x + 4) gives 4x = −2, so x = −1/2. Both must be checked because the right side must be nonnegative: at x = 3, |7| = 7 = 3 + 4 ✓; at x = −1/2, |−7/2| = 7/2 = −1/2 + 4 ✓. Both survive, and their sum is 3 + (−1/2) = 5/2.",
  "choices": null,
  "answerValue": "5/2"
 },
 {
  "id": "amx-059",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Nonlinear equations in one variable and systems of equations in two variables",
  "difficulty": 4,
  "level": 3,
  "type": "mc",
  "stimulus": "y = x² − 2x\ny = x + 4",
  "question": "The graphs of the two equations above intersect at two points. What is the y-coordinate of the intersection point with the greater x-value?",
  "solution": "Set equal: x² − 2x = x + 4, so x² − 3x − 4 = 0 = (x − 4)(x + 1). The x-coordinates are 4 and −1. The greater is x = 4, and its y-coordinate comes from the line: y = 4 + 4 = 8. The question asks for the y-value, not the x-value — answering 4 is the trap.",
  "choices": [
   "8",
   "4",
   "−1",
   "3"
  ],
  "answerIndex": 0
 },
 {
  "id": "amx-060",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Nonlinear equations in one variable and systems of equations in two variables",
  "difficulty": 4,
  "level": 3,
  "type": "mc",
  "stimulus": "x³ + 4x² − 9x − 36 = 0",
  "question": "What is the positive solution to the equation above?",
  "solution": "Factor by grouping: x²(x + 4) − 9(x + 4) = (x + 4)(x² − 9) = (x + 4)(x − 3)(x + 3). The solutions are x = −4, x = 3, and x = −3. The positive one is 3. Grouping works here because both pairs share the (x + 4) factor — always check for that shared factor before expanding anything.",
  "choices": [
   "−3",
   "4",
   "9",
   "3"
  ],
  "answerIndex": 3
 },
 {
  "id": "amx-061",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Nonlinear equations in one variable and systems of equations in two variables",
  "difficulty": 4,
  "level": 3,
  "type": "grid",
  "stimulus": "",
  "question": "If x² + 6x = 40, what is the greater of the two possible values of x?",
  "solution": "Complete the square: add (6/2)² = 9 to both sides, giving x² + 6x + 9 = 49, or (x + 3)² = 49. Take roots: x + 3 = 7 or x + 3 = −7, so x = 4 or x = −10. The greater value is 4.",
  "choices": null,
  "answerValue": "4"
 },
 {
  "id": "amx-062",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Nonlinear functions",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "",
  "question": "If f(x) = 2x² + 3x − 1, what is the value of f(−2)?",
  "solution": "Substitute −2 everywhere, in parentheses: f(−2) = 2(−2)² + 3(−2) − 1 = 2(4) − 6 − 1 = 8 − 6 − 1 = 1. The parentheses matter: (−2)² = +4, and 3(−2) = −6. The 13 distractor comes from turning 3(−2) into +6.",
  "choices": [
   "5",
   "1",
   "13",
   "−15"
  ],
  "answerIndex": 1
 },
 {
  "id": "amx-063",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Nonlinear functions",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "",
  "question": "If f(x) = x² − 5x + 2, what is the value of f(3)?",
  "solution": "Substitute 3: f(3) = 3² − 5(3) + 2 = 9 − 15 + 2 = −4. Work left to right and keep the subtraction signs: −5(3) is −15, not +15 (that error gives 26).",
  "choices": [
   "16",
   "26",
   "−4",
   "−8"
  ],
  "answerIndex": 2
 },
 {
  "id": "amx-064",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Nonlinear functions",
  "difficulty": 1,
  "level": 1,
  "type": "grid",
  "stimulus": "",
  "question": "The function f is defined by f(x) = 5(2)^x. What is the value of f(3)?",
  "solution": "Substitute 3: f(3) = 5(2)³ = 5 · 8 = 40. Evaluate the power before multiplying — 2³ is 8, not 6.",
  "choices": null,
  "answerValue": "40"
 },
 {
  "id": "amx-065",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Nonlinear functions",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "",
  "question": "The function f is defined by f(x) = (x − 3)(x + 7). Which of the following is a zero of f?",
  "solution": "A zero is an input that makes the output 0. A product is 0 when either factor is 0: x − 3 = 0 gives x = 3, and x + 7 = 0 gives x = −7. Of the choices, only −7 is a zero. Watch the sign: the factor (x + 7) produces the zero −7, not 7.",
  "choices": [
   "−3",
   "−7",
   "7",
   "10"
  ],
  "answerIndex": 1
 },
 {
  "id": "amx-066",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Nonlinear functions",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "A savings account starts with a balance of $2,000 and increases by 8% each year.",
  "question": "Which function B gives the balance, in dollars, t years after the account was opened?",
  "solution": "Percent growth is exponential: each year the balance is multiplied by 1 + 0.08 = 1.08. Starting from 2,000, B(t) = 2,000(1.08)^t. Sanity check at t = 1: 2,000(1.08) = 2,160 — an 8% increase. ✓ The (0.08)^t choice would shrink the balance to almost nothing, and the last choice grows by a flat $1.08 a year.",
  "choices": [
   "B(t) = 2,000(1.8)^t",
   "B(t) = 2,000 + 1.08t",
   "B(t) = 2,000(0.08)^t",
   "B(t) = 2,000(1.08)^t"
  ],
  "answerIndex": 3
 },
 {
  "id": "amx-067",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Nonlinear functions",
  "difficulty": 1,
  "level": 1,
  "type": "grid",
  "stimulus": "",
  "question": "The function f is defined by f(x) = x² + 10x + 9. What is the x-coordinate of the vertex of the graph of f?",
  "solution": "The vertex sits on the axis of symmetry, x = −b/(2a). Here a = 1 and b = 10, so x = −10/2 = −5. (Completing the square agrees: x² + 10x + 9 = (x + 5)² − 16, with vertex at (−5, −16).)",
  "choices": null,
  "answerValue": "−5"
 },
 {
  "id": "amx-068",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Nonlinear functions",
  "difficulty": 1,
  "level": 1,
  "type": "grid",
  "stimulus": "",
  "question": "The function f is defined by f(x) = x³ − 2x + 4. What is the value of f(2)?",
  "solution": "Substitute 2: f(2) = 2³ − 2(2) + 4 = 8 − 4 + 4 = 8.",
  "choices": null,
  "answerValue": "8"
 },
 {
  "id": "amx-069",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Nonlinear functions",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "",
  "question": "The graph of the function f(x) = x² − 7x + 10 in the xy-plane crosses the x-axis at (5, 0) and at one other point. What is the x-coordinate of the other point?",
  "solution": "X-intercepts are the solutions of x² − 7x + 10 = 0, which factors as (x − 5)(x − 2) = 0. The intercepts are x = 5 and x = 2, so the other point has x-coordinate 2. (Quick check via the sum of roots: the roots add to 7, and 7 − 5 = 2.)",
  "choices": [
   "5",
   "2",
   "7",
   "10"
  ],
  "answerIndex": 1
 },
 {
  "id": "amx-070",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Nonlinear functions",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "x: −1, 0, 1, 2\nf(x): 6, 3, 2, 3",
  "question": "The table above shows values of the function f for selected values of x. What is the value of f(−1) + f(2)?",
  "solution": "Read straight from the table: f(−1) = 6 (the output paired with x = −1) and f(2) = 3. Their sum is 6 + 3 = 9. The only skill here is matching each input to the output directly under it.",
  "choices": [
   "5",
   "8",
   "3",
   "9"
  ],
  "answerIndex": 3
 },
 {
  "id": "amx-071",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Nonlinear functions",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "A culture of bacteria starts with 80 bacteria and doubles every 3 hours. The population after t hours is modeled by P(t) = 80(2)^(t/3).",
  "question": "According to the model, what is the population after 9 hours?",
  "solution": "Substitute t = 9: P(9) = 80(2)^(9/3) = 80(2)³ = 80 · 8 = 640. The exponent 9/3 = 3 counts three doublings: 80 → 160 → 320 → 640. ✓",
  "choices": [
   "320",
   "480",
   "160",
   "640"
  ],
  "answerIndex": 3
 },
 {
  "id": "amx-072",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Nonlinear functions",
  "difficulty": 3,
  "level": 2,
  "type": "grid",
  "stimulus": "",
  "question": "What is the maximum value of the function f(x) = −2x² + 8x − 5?",
  "solution": "The parabola opens downward (a = −2 < 0), so its vertex is the maximum. The vertex is at x = −b/(2a) = −8/(−4) = 2. Evaluate: f(2) = −2(4) + 16 − 5 = 3. So the maximum value is 3 — the question asks for the output value, not the x = 2 where it occurs.",
  "choices": null,
  "answerValue": "3"
 },
 {
  "id": "amx-073",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Nonlinear functions",
  "difficulty": 3,
  "level": 2,
  "type": "mc",
  "stimulus": "An investment is modeled by A(t) = 1,500(1.06)^t, where A is the value of the investment, in dollars, t years after it was made.",
  "question": "In the function, what does the number 1,500 represent?",
  "solution": "In an exponential model a(b)^t, the number out front is the value at t = 0: A(0) = 1,500(1.06)⁰ = 1,500. So 1,500 is the initial amount invested, in dollars. The growth rate lives in the base: 1.06 means 6% growth per year, and the value after 1 year is 1,500(1.06) = 1,590, not 1,500.",
  "choices": [
   "The initial amount invested, in dollars",
   "The amount of interest earned in the first year, in dollars",
   "The value of the investment after 1 year, in dollars",
   "The value of the investment after 6 years, in dollars"
  ],
  "answerIndex": 0
 },
 {
  "id": "amx-074",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Nonlinear functions",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "",
  "question": "The functions f and g are defined by f(x) = 3x − 2 and g(x) = x² + 1. What is the value of f(g(2))?",
  "solution": "Work from the inside out. First g(2) = 2² + 1 = 5. Then feed that output into f: f(5) = 3(5) − 2 = 13. The inside function is always evaluated first — f(g(2)) is not g(f(2)) (that would be g(4) = 17).",
  "choices": [
   "17",
   "13",
   "11",
   "23"
  ],
  "answerIndex": 1
 },
 {
  "id": "amx-075",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Nonlinear functions",
  "difficulty": 3,
  "level": 2,
  "type": "mc",
  "stimulus": "A ball is thrown upward from a platform 4 feet above the ground. Its height above the ground, in feet, t seconds after it is thrown is modeled by h(t) = −16t² + 48t + 4.",
  "question": "After how many seconds does the ball reach its maximum height?",
  "solution": "The height is a downward-opening parabola, and its maximum is at the vertex, t = −b/(2a) = −48/(2 · −16) = 48/32 = 1.5 seconds. Note what is being asked: the time (an input), not the height itself, which would be h(1.5) = 40 feet.",
  "choices": [
   "4",
   "1.5",
   "40",
   "3"
  ],
  "answerIndex": 1
 },
 {
  "id": "amx-076",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Nonlinear functions",
  "difficulty": 3,
  "level": 2,
  "type": "mc",
  "stimulus": "",
  "question": "The function f is defined by f(x) = x² − 4x + 1, and the function g is defined by g(x) = f(x + 2). What is the value of g(0)?",
  "solution": "g(0) means evaluate f at 0 + 2: g(0) = f(2) = 2² − 4(2) + 1 = 4 − 8 + 1 = −3. The +2 inside the function shifts the input before f ever sees it — substitute into f first, and only then compute.",
  "choices": [
   "−7",
   "−3",
   "1",
   "5"
  ],
  "answerIndex": 1
 },
 {
  "id": "amx-077",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Nonlinear functions",
  "difficulty": 3,
  "level": 2,
  "type": "mc",
  "stimulus": "A phone is purchased for $900. Its value decreases by 2% each month.",
  "question": "Which function V gives the value of the phone, in dollars, t months after it is purchased?",
  "solution": "Percent decrease means each month the phone keeps 100% − 2% = 98% of its previous value, so the multiplier is 0.98 and V(t) = 900(0.98)^t. Check at t = 1: 900(0.98) = 882, a 2% loss. ✓ The (0.02)^t choice would leave the phone worth 2% of its value after one month — a 98% loss, not a 2% loss.",
  "choices": [
   "V(t) = 900(0.98)^t",
   "V(t) = 900(1.02)^t",
   "V(t) = 900 − 0.98t",
   "V(t) = 900(0.02)^t"
  ],
  "answerIndex": 0
 },
 {
  "id": "amx-078",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Nonlinear functions",
  "difficulty": 3,
  "level": 2,
  "type": "grid",
  "stimulus": "",
  "question": "The function f is defined by f(x) = (x − 2)(x + 5)(x − 1). What is the sum of the zeros of f?",
  "solution": "Each factor gives a zero: x − 2 = 0 → 2; x + 5 = 0 → −5; x − 1 = 0 → 1. The sum is 2 + (−5) + 1 = −2. Mind the sign on the middle zero: the factor (x + 5) corresponds to the zero −5.",
  "choices": null,
  "answerValue": "−2"
 },
 {
  "id": "amx-079",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Nonlinear functions",
  "difficulty": 4,
  "level": 2,
  "type": "mc",
  "stimulus": "The function f is defined by f(x) = a(x − 2)(x − 6), where a is a constant. The graph of f in the xy-plane passes through the point (0, 24).",
  "question": "What is the value of f(3)?",
  "solution": "Use the point to find a: 24 = a(0 − 2)(0 − 6) = 12a, so a = 2. Then f(3) = 2(3 − 2)(3 − 6) = 2(1)(−3) = −6. The negative sign comes from the (3 − 6) factor — 3 lies between the two intercepts, where the parabola dips below the axis.",
  "choices": [
   "−12",
   "−6",
   "6",
   "24"
  ],
  "answerIndex": 1
 },
 {
  "id": "amx-080",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Nonlinear functions",
  "difficulty": 3,
  "level": 2,
  "type": "mc",
  "stimulus": "The population of a bacteria colony is modeled by P(t) = 50(2)^(t/20), where P is the population and t is the time, in minutes, since the colony was first observed.",
  "question": "According to the model, what is the population 1 hour after the colony was first observed?",
  "solution": "Convert units first: 1 hour is 60 minutes, and t is measured in minutes, so substitute t = 60: P(60) = 50(2)^(60/20) = 50(2)³ = 50 · 8 = 400. The trap is plugging in t = 1 (which gives 100) — the exponent counts 20-minute doubling periods, and 3 of them fit in an hour.",
  "choices": [
   "100",
   "400",
   "800",
   "200"
  ],
  "answerIndex": 1
 },
 {
  "id": "amx-081",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Nonlinear functions",
  "difficulty": 5,
  "level": 3,
  "type": "grid",
  "stimulus": "",
  "question": "The function f is defined by f(x) = a(x − 3)² + 2, where a is a constant. If f(1) = 18, what is the value of a?",
  "solution": "Substitute x = 1: f(1) = a(1 − 3)² + 2 = a(4) + 2 = 18. So 4a = 16 and a = 4. Note (−2)² = +4 — the squared factor is positive even though 1 − 3 is negative.",
  "choices": null,
  "answerValue": "4"
 },
 {
  "id": "amx-082",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Nonlinear functions",
  "difficulty": 5,
  "level": 3,
  "type": "grid",
  "stimulus": "The amount, in grams, of a radioactive sample remaining after t days is modeled by A(t) = 1,200(0.5)^(t/4).",
  "question": "After how many days will 75 grams of the sample remain?",
  "solution": "Set A(t) = 75: 1,200(0.5)^(t/4) = 75, so (0.5)^(t/4) = 75/1,200 = 1/16. Since 1/16 = (0.5)⁴, the exponents must match: t/4 = 4, giving t = 16 days. Counting halvings agrees: 1,200 → 600 → 300 → 150 → 75 is four halvings, at 4 days each.",
  "choices": null,
  "answerValue": "16"
 },
 {
  "id": "amx-083",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Nonlinear functions",
  "difficulty": 4,
  "level": 3,
  "type": "mc",
  "stimulus": "",
  "question": "The functions f and g are defined by f(x) = x² − 3 and g(x) = 2x + 1. What is the value of g(f(3))?",
  "solution": "Inside first: f(3) = 3² − 3 = 6. Then g(6) = 2(6) + 1 = 13. Compare with the reversed order, f(g(3)) = f(7) = 46 — composition order changes the answer, so read the nesting carefully.",
  "choices": [
   "13",
   "11",
   "17",
   "46"
  ],
  "answerIndex": 0
 },
 {
  "id": "amx-084",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Nonlinear functions",
  "difficulty": 4,
  "level": 3,
  "type": "mc",
  "stimulus": "",
  "question": "The function f is defined by f(x) = (x − 1)² + 4. The function g is defined by g(x) = f(x + 2) − 5. What is the minimum value of g?",
  "solution": "f is in vertex form: its minimum value is 4, at x = 1. The shift f(x + 2) moves the graph left, which does not change the minimum value; the −5 outside moves it down 5. So the minimum value of g is 4 − 5 = −1. Only vertical shifts (outside the function) change the minimum value.",
  "choices": [
   "−9",
   "9",
   "−1",
   "1"
  ],
  "answerIndex": 2
 },
 {
  "id": "amx-085",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Nonlinear functions",
  "difficulty": 4,
  "level": 3,
  "type": "mc",
  "stimulus": "A ball is launched upward from a platform 80 feet above the ground. Its height above the ground, in feet, t seconds after launch is modeled by h(t) = −16t² + 64t + 80.",
  "question": "What is the maximum height, in feet, reached by the ball?",
  "solution": "The maximum occurs at the vertex, t = −b/(2a) = −64/(−32) = 2 seconds. Evaluate the height there: h(2) = −16(4) + 64(2) + 80 = −64 + 128 + 80 = 144 feet. The 80 in the model is only the starting height — the ball climbs another 64 feet from there.",
  "choices": [
   "128",
   "144",
   "80",
   "112"
  ],
  "answerIndex": 1
 },
 {
  "id": "amx-086",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Nonlinear functions",
  "difficulty": 4,
  "level": 3,
  "type": "grid",
  "stimulus": "A population is modeled by P(t) = 100(3)^(t/2), where P is the population and t is the time, in days, since the population was first measured.",
  "question": "After how many days will the population reach 8,100?",
  "solution": "Set P(t) = 8,100: 100(3)^(t/2) = 8,100, so (3)^(t/2) = 81. Since 81 = 3⁴, the exponents match: t/2 = 4, and t = 8 days. Counting triplings agrees: 100 → 300 → 900 → 2,700 → 8,100 is four triplings at 2 days each.",
  "choices": null,
  "answerValue": "8"
 },
 {
  "id": "amx-087",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Nonlinear functions",
  "difficulty": 4,
  "level": 3,
  "type": "mc",
  "stimulus": "",
  "question": "The function f is defined by f(x) = (x + 4)(x − 1)(x − 5). What is the product of the zeros of f?",
  "solution": "The zeros come from the three factors: x + 4 = 0 → −4; x − 1 = 0 → 1; x − 5 = 0 → 5. Their product is (−4)(1)(5) = −20. The sign is the whole battle here — exactly one zero is negative, so the product is negative.",
  "choices": [
   "20",
   "−20",
   "8",
   "−8"
  ],
  "answerIndex": 1
 },
 {
  "id": "amx-088",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Nonlinear functions",
  "difficulty": 4,
  "level": 3,
  "type": "mc",
  "stimulus": "",
  "question": "If f(x) = (x + 8)/(x − 3), what is the value of f(5)?",
  "solution": "Substitute 5: f(5) = (5 + 8)/(5 − 3) = 13/2 = 6.5. Evaluate the numerator and denominator separately before dividing — and note f is undefined at x = 3, though that is not what is asked here.",
  "choices": [
   "13",
   "−6.5",
   "6.5",
   "13/8"
  ],
  "answerIndex": 2
 },
 {
  "id": "amx-089",
  "section": "Math",
  "domain": "Advanced Math",
  "topic": "Nonlinear functions",
  "difficulty": 4,
  "level": 3,
  "type": "grid",
  "stimulus": "",
  "question": "The function f is defined by f(x) = √(2x + 9) + 1. What is the value of f(8)?",
  "solution": "Substitute 8: f(8) = √(2 · 8 + 9) + 1 = √25 + 1 = 5 + 1 = 6. Work inside the radical first; the +1 sits outside it and is added last.",
  "choices": null,
  "answerValue": "6"
 },
 {
  "id": "psd-001",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Ratios, rates, proportional relationships, and units",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "A printer prints 216 pages in 6 minutes at a constant rate.",
  "question": "How many pages does the printer print per minute?",
  "solution": "Unit rate = total pages ÷ total minutes = 216 ÷ 6 = 36 pages per minute.",
  "choices": [
   "42",
   "36",
   "30",
   "48"
  ],
  "answerIndex": 1
 },
 {
  "id": "psd-002",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Ratios, rates, proportional relationships, and units",
  "difficulty": 1,
  "level": 1,
  "type": "grid",
  "stimulus": "A 5-pound bag of apples costs $12.50.",
  "question": "What is the cost, in dollars, per pound of apples?",
  "solution": "Unit price = $12.50 ÷ 5 = $2.50 per pound. Grid in 2.5.",
  "choices": null,
  "answerValue": "2.5"
 },
 {
  "id": "psd-003",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Ratios, rates, proportional relationships, and units",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "A recipe that makes 24 cookies uses 3 cups of flour.",
  "question": "How many cups of flour are needed to make 40 cookies at the same ratio?",
  "solution": "Set up a proportion: 3/24 = x/40. The ratio is 1 cup per 8 cookies, so 40 cookies need 40 ÷ 8 = 5 cups.",
  "choices": [
   "8",
   "6",
   "4",
   "5"
  ],
  "answerIndex": 3
 },
 {
  "id": "psd-004",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Ratios, rates, proportional relationships, and units",
  "difficulty": 1,
  "level": 1,
  "type": "grid",
  "stimulus": "",
  "question": "A movie marathon lasts 3.5 hours. What is the length of the marathon, in minutes?",
  "solution": "Each hour is 60 minutes, so 3.5 × 60 = 210 minutes.",
  "choices": null,
  "answerValue": "210"
 },
 {
  "id": "psd-005",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Ratios, rates, proportional relationships, and units",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "A cyclist rides 45 miles in 2.5 hours at a constant speed.",
  "question": "What is the cyclist's speed, in miles per hour?",
  "solution": "Speed = distance ÷ time = 45 ÷ 2.5 = 18 miles per hour.",
  "choices": [
   "18",
   "22.5",
   "20",
   "15"
  ],
  "answerIndex": 0
 },
 {
  "id": "psd-006",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Ratios, rates, proportional relationships, and units",
  "difficulty": 1,
  "level": 1,
  "type": "grid",
  "stimulus": "On a blueprint, 2 centimeters represent an actual length of 5 meters.",
  "question": "A wall is 14 centimeters long on the blueprint. What is the actual length of the wall, in meters?",
  "solution": "Each centimeter represents 5 ÷ 2 = 2.5 meters, so 14 centimeters represent 14 × 2.5 = 35 meters.",
  "choices": null,
  "answerValue": "35"
 },
 {
  "id": "psd-007",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Percentages",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "",
  "question": "What is 35% of 240?",
  "solution": "35% of 240 = 0.35 × 240 = 84.",
  "choices": [
   "105",
   "96",
   "70",
   "84"
  ],
  "answerIndex": 3
 },
 {
  "id": "psd-008",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Percentages",
  "difficulty": 1,
  "level": 1,
  "type": "grid",
  "stimulus": "A jacket originally priced at $45 is on sale for 20% off.",
  "question": "What is the sale price, in dollars, of the jacket?",
  "solution": "The discount is 20% of $45 = $9, so the sale price is 45 − 9 = $36. (Equivalently, you pay 80% of $45.)",
  "choices": null,
  "answerValue": "36"
 },
 {
  "id": "psd-009",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Percentages",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "A book costs $60, and a sales tax of 5% is added to the price.",
  "question": "What is the total cost, in dollars, of the book including tax?",
  "solution": "Tax = 5% of $60 = $3, so the total is 60 + 3 = $63.",
  "choices": [
   "$60.30",
   "$63",
   "$65",
   "$57"
  ],
  "answerIndex": 1
 },
 {
  "id": "psd-010",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Percentages",
  "difficulty": 1,
  "level": 1,
  "type": "grid",
  "stimulus": "In a class of 50 students, 15 students walk to school.",
  "question": "What percent of the students in the class walk to school?",
  "solution": "Percent = 15/50 × 100 = 30%. Grid in 30.",
  "choices": null,
  "answerValue": "30"
 },
 {
  "id": "psd-011",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Percentages",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "A gym had 80 members last year and has 92 members this year.",
  "question": "By what percent did the number of members increase?",
  "solution": "The increase is 92 − 80 = 12 members. Percent increase = 12/80 × 100 = 15%. The denominator is the original value, 80 — not the new one.",
  "choices": [
   "15%",
   "13%",
   "12%",
   "20%"
  ],
  "answerIndex": 0
 },
 {
  "id": "psd-012",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Percentages",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "A restaurant bill is $48.",
  "question": "What is a 15% tip on the bill, in dollars?",
  "solution": "Tip = 15% of $48 = 0.15 × 48 = $7.20.",
  "choices": [
   "$8.00",
   "$6.40",
   "$7.20",
   "$7.50"
  ],
  "answerIndex": 2
 },
 {
  "id": "psd-013",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "One-variable data: distributions and measures of center and spread",
  "difficulty": 1,
  "level": 1,
  "type": "grid",
  "stimulus": "",
  "question": "What is the mean of the numbers 12, 19, 23, and 26?",
  "solution": "Sum = 12 + 19 + 23 + 26 = 80. Mean = 80 ÷ 4 = 20.",
  "choices": null,
  "answerValue": "20"
 },
 {
  "id": "psd-014",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "One-variable data: distributions and measures of center and spread",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "Data set: 9, 14, 7, 21, 14, 18, 11",
  "question": "What is the median of the data set?",
  "solution": "Order the values: 7, 9, 11, 14, 14, 18, 21. With 7 values, the median is the 4th value, 14. Watch out: 21 is the maximum and 7 the minimum — neither is a measure of center.",
  "choices": [
   "11",
   "21",
   "15",
   "14"
  ],
  "answerIndex": 3
 },
 {
  "id": "psd-015",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "One-variable data: distributions and measures of center and spread",
  "difficulty": 1,
  "level": 1,
  "type": "grid",
  "stimulus": "The high temperatures, in degrees Fahrenheit, on six days were 58, 64, 71, 69, 75, and 62.",
  "question": "What is the range of the temperatures?",
  "solution": "Range = maximum − minimum = 75 − 58 = 17.",
  "choices": null,
  "answerValue": "17"
 },
 {
  "id": "psd-016",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "One-variable data: distributions and measures of center and spread",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "A student earned quiz scores of 86, 92, 78, and 88.",
  "question": "What is the mean of the student's quiz scores?",
  "solution": "Sum = 86 + 92 + 78 + 88 = 344. Mean = 344 ÷ 4 = 86.",
  "choices": [
   "90",
   "88",
   "84",
   "86"
  ],
  "answerIndex": 3
 },
 {
  "id": "psd-017",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Two-variable data: models and scatterplots",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "A survey asked 240 adults whether they prefer coffee or tea in the morning. Of the adults surveyed, 90 said they prefer coffee.",
  "question": "What percent of the adults surveyed prefer coffee?",
  "solution": "Percent = 90/240 × 100 = 37.5%.",
  "choices": [
   "37.5%",
   "30%",
   "62.5%",
   "40%"
  ],
  "answerIndex": 0
 },
 {
  "id": "psd-018",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Two-variable data: models and scatterplots",
  "difficulty": 1,
  "level": 1,
  "type": "grid",
  "stimulus": "A taxi company charges a pickup fee of $10 plus $3 per mile. The total fare, in dollars, for a ride of x miles is modeled by y = 3x + 10.",
  "question": "What is the total fare, in dollars, for a 7-mile ride?",
  "solution": "Substitute x = 7: y = 3(7) + 10 = 21 + 10 = 31.",
  "choices": null,
  "answerValue": "31"
 },
 {
  "id": "psd-019",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Two-variable data: models and scatterplots",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "A scatterplot shows the number of hours a group of students spent studying for an exam and the scores the students earned on the exam. As the number of hours studied increases, the exam scores generally increase.",
  "question": "Which statement best describes the association in the scatterplot?",
  "solution": "When one variable tends to increase as the other increases, the association is positive. The variables move in the same direction here, so the association is positive (it does not have to be perfectly linear to be positive).",
  "choices": [
   "Studying more caused every student to earn a higher score.",
   "There is a negative association between hours studied and exam score.",
   "There is a positive association between hours studied and exam score.",
   "There is no association between hours studied and exam score."
  ],
  "answerIndex": 2
 },
 {
  "id": "psd-020",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Two-variable data: models and scatterplots",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "Of the 100 students at a school who were surveyed, 60 said they play video games. Of the students who play video games, 45 said they also read every day.",
  "question": "What percent of the students who play video games read every day?",
  "solution": "The question restricts you to the 60 students who play video games. Of those, 45 read every day: 45/60 = 0.75 = 75%. Watch out: 45% divides 45 by all 100 students, ignoring the restriction.",
  "choices": [
   "45%",
   "80%",
   "75%",
   "60%"
  ],
  "answerIndex": 2
 },
 {
  "id": "psd-021",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Probability and conditional probability",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "A box contains 12 pens: 5 black, 4 blue, and 3 red. One pen is selected at random from the box.",
  "question": "What is the probability that the pen selected is black?",
  "solution": "Probability = favorable outcomes ÷ total outcomes = 5/12.",
  "choices": [
   "5/7",
   "5/12",
   "1/3",
   "7/12"
  ],
  "answerIndex": 1
 },
 {
  "id": "psd-022",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Probability and conditional probability",
  "difficulty": 1,
  "level": 1,
  "type": "grid",
  "stimulus": "A jar contains 20 marbles, of which 8 are green and the rest are white. One marble is selected at random from the jar.",
  "question": "What is the probability that the marble selected is green?",
  "solution": "Probability = 8/20, which reduces to 2/5. Grid in 2/5 (or 0.4).",
  "choices": null,
  "answerValue": "2/5"
 },
 {
  "id": "psd-023",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Probability and conditional probability",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "A spinner is divided into 8 equal sectors. Three of the sectors are labeled A, and the rest are labeled B. The spinner is spun once.",
  "question": "What is the probability that the spinner does NOT land on a sector labeled A?",
  "solution": "Five of the 8 sectors are labeled B, so the probability of not landing on A is 5/8. (Equivalently, 1 − 3/8 = 5/8.)",
  "choices": [
   "8/5",
   "1/2",
   "5/8",
   "3/8"
  ],
  "answerIndex": 2
 },
 {
  "id": "psd-024",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Probability and conditional probability",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "A survey of 150 students found that 45 students chose art as their favorite subject. One of the students surveyed is selected at random.",
  "question": "What is the probability that the student selected chose art as their favorite subject?",
  "solution": "Probability = 45/150 = 3/10 after reducing (divide numerator and denominator by 15).",
  "choices": [
   "3/10",
   "9/20",
   "1/5",
   "3/7"
  ],
  "answerIndex": 0
 },
 {
  "id": "psd-025",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Probability and conditional probability",
  "difficulty": 1,
  "level": 1,
  "type": "grid",
  "stimulus": "The probability that a certain carnival game is won on one play is 1/4. A player plans to play the game 200 times.",
  "question": "Based on the probability, how many times is the player expected to win?",
  "solution": "Expected wins = probability × number of plays = (1/4) × 200 = 50. This is a long-run expectation, not a guarantee.",
  "choices": null,
  "answerValue": "50"
 },
 {
  "id": "psd-026",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Inference from sample statistics and margin of error",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "A polling organization surveyed a random sample of voters and estimated that 62% of the voters in a state support a ballot measure, with a margin of error of ±3 percentage points.",
  "question": "Which of the following is the most plausible range for the percent of all voters in the state who support the measure?",
  "solution": "A margin of error of ±3 percentage points means the true percent is plausibly 62 − 3 = 59% to 62 + 3 = 65%. The margin goes in both directions — it is not a one-sided bound, and the estimate is not exact.",
  "choices": [
   "59% to 65%",
   "62% to 65%",
   "56% to 62%",
   "Exactly 62%"
  ],
  "answerIndex": 0
 },
 {
  "id": "psd-027",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Inference from sample statistics and margin of error",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "A principal wants to estimate the percent of the 900 students at a school who walk to school.",
  "question": "Which of the following methods is most likely to produce a random sample of the students at the school?",
  "solution": "A random sample gives every student an equal chance of being chosen, with no group favored. Assigning each student a number and using a random number generator to pick 60 numbers does exactly that. Surveying only bus riders, first-period students, or volunteers lets who is available — not chance — decide who is included.",
  "choices": [
   "Survey 60 students who ride the same bus",
   "Survey the 60 students who arrive at school earliest",
   "Assign each student a number and use a random number generator to select 60 students",
   "Survey 60 students who volunteer to answer questions"
  ],
  "answerIndex": 2
 },
 {
  "id": "psd-028",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Evaluating statistical claims: observational studies and experiments",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "Researchers recorded the number of hours of sleep reported by 500 adults and compared it with the adults' scores on a memory test. The researchers did not assign any treatments or change anyone's sleep habits.",
  "question": "Which statement best describes this study?",
  "solution": "The researchers only observed and measured — they assigned nothing and changed nothing. A study with no treatment assigned by the researchers is an observational study, no matter how carefully the measurements are made.",
  "choices": [
   "It is an experiment, because the researchers compared two groups.",
   "It is neither, because the researchers did not survey every adult.",
   "It is an experiment, because the researchers collected data from 500 adults.",
   "It is an observational study, because the researchers did not assign treatments."
  ],
  "answerIndex": 3
 },
 {
  "id": "psd-029",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Evaluating statistical claims: observational studies and experiments",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "A radio host asked listeners to call in and say whether they support a plan to build a new stadium. Of the people who called in, 78% said they support the plan. The host concluded that 78% of the city's residents support the plan.",
  "question": "Which of the following best explains why the host's conclusion may not be valid?",
  "solution": "The sample chose itself: only listeners who cared enough to call in responded, and people with strong feelings are the most likely to call. That voluntary response sample can badly misrepresent all residents — a larger pile of calls would not fix a sample that was never drawn from the whole city fairly.",
  "choices": [
   "The sample of callers was too small to say anything about the city.",
   "Residents who do not listen to the radio cannot have an opinion about the stadium.",
   "The host should have asked residents about other topics as well.",
   "The people who called in are a voluntary response sample, which may not represent all city residents."
  ],
  "answerIndex": 3
 },
 {
  "id": "psd-030",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Ratios, rates, proportional relationships, and units",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "A train travels at a constant speed of 90 kilometers per hour.",
  "question": "What is the train's speed, in meters per minute?",
  "solution": "Convert both units: 90 kilometers = 90,000 meters, and 1 hour = 60 minutes. Speed = 90,000 ÷ 60 = 1,500 meters per minute. Watch out: 1.5 comes from converting only the distance to kilometers-per-minute thinking — both units must change.",
  "choices": [
   "5,400",
   "540",
   "150",
   "1,500"
  ],
  "answerIndex": 3
 },
 {
  "id": "psd-031",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Ratios, rates, proportional relationships, and units",
  "difficulty": 2,
  "level": 2,
  "type": "grid",
  "stimulus": "A city has a population of 45,600 people and a land area of 12 square miles.",
  "question": "What is the population density of the city, in people per square mile?",
  "solution": "Density = population ÷ area = 45,600 ÷ 12 = 3,800 people per square mile.",
  "choices": null,
  "answerValue": "3800"
 },
 {
  "id": "psd-032",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Ratios, rates, proportional relationships, and units",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "A 24-ounce box of cereal costs $6.00.",
  "question": "What is the unit price, in dollars per ounce, of the cereal?",
  "solution": "Unit price = $6.00 ÷ 24 = $0.25 per ounce.",
  "choices": [
   "$0.40",
   "$0.30",
   "$0.25",
   "$4.00"
  ],
  "answerIndex": 2
 },
 {
  "id": "psd-033",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Ratios, rates, proportional relationships, and units",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "The ratio of boys to girls in a chess club is 3 to 5. The club has 72 members in total.",
  "question": "How many girls are in the chess club?",
  "solution": "The ratio has 3 + 5 = 8 equal parts, so each part is 72 ÷ 8 = 9 members. Girls are 5 parts: 5 × 9 = 45. Watch out: 27 is the number of boys (3 parts).",
  "choices": [
   "45",
   "27",
   "40",
   "48"
  ],
  "answerIndex": 0
 },
 {
  "id": "psd-034",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Ratios, rates, proportional relationships, and units",
  "difficulty": 2,
  "level": 2,
  "type": "grid",
  "stimulus": "A machine fills 480 bottles in 8 minutes at a constant rate.",
  "question": "At this rate, how many bottles does the machine fill in 25 minutes?",
  "solution": "Rate = 480 ÷ 8 = 60 bottles per minute. In 25 minutes: 60 × 25 = 1,500 bottles.",
  "choices": null,
  "answerValue": "1500"
 },
 {
  "id": "psd-035",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Ratios, rates, proportional relationships, and units",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "One batch of a drink mix uses 2/3 cup of powder. A caterer makes 5 batches.",
  "question": "How many cups of powder does the caterer use in total?",
  "solution": "Total = 5 × 2/3 = 10/3 cups.",
  "choices": [
   "7/3",
   "10/3",
   "5/3",
   "13/3"
  ],
  "answerIndex": 1
 },
 {
  "id": "psd-036",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Percentages",
  "difficulty": 2,
  "level": 2,
  "type": "grid",
  "stimulus": "After a 25% increase, the rent for an apartment is $90 more per month than before, and the new rent is $450 per month.",
  "question": "What was the rent, in dollars, before the increase?",
  "solution": "The new rent is 125% of the old rent: 1.25 × (old) = 450, so old = 450 ÷ 1.25 = $360. Watch out: subtracting 25% of $450 ($112.50) uses the wrong base — percents in reverse problems divide by the multiplier.",
  "choices": null,
  "answerValue": "360"
 },
 {
  "id": "psd-037",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Percentages",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "A scale shows a weight of 48 kilograms for an object whose actual weight is 50 kilograms.",
  "question": "What is the percent error in the measurement?",
  "solution": "Percent error = |measured − actual| ÷ actual × 100 = 2/50 × 100 = 4%. The actual value is always the denominator.",
  "choices": [
   "4%",
   "8%",
   "2%",
   "5%"
  ],
  "answerIndex": 0
 },
 {
  "id": "psd-038",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Percentages",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "At a school of 800 students, 60% of the students play a sport. Of the students who play a sport, 25% play soccer.",
  "question": "How many students at the school play soccer?",
  "solution": "First find the athletes: 60% of 800 = 480. Then 25% of those play soccer: 0.25 × 480 = 120. The second percent applies only to the subgroup, not to all 800 students.",
  "choices": [
   "120",
   "240",
   "480",
   "200"
  ],
  "answerIndex": 0
 },
 {
  "id": "psd-039",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Percentages",
  "difficulty": 2,
  "level": 2,
  "type": "grid",
  "stimulus": "A jacket is priced at $150. It is discounted by 30%, and then a sales tax of 8% is applied to the discounted price.",
  "question": "What is the final cost, in dollars, of the jacket?",
  "solution": "Discount first: 150 × 0.70 = $105. Tax applies to $105, not $150: 105 × 1.08 = $113.40. Grid in 113.4.",
  "choices": null,
  "answerValue": "113.4"
 },
 {
  "id": "psd-040",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Percentages",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "A laptop's price dropped from $250 to $190.",
  "question": "By what percent did the price decrease?",
  "solution": "The decrease is 250 − 190 = $60. Percent decrease = 60/250 × 100 = 24%. The denominator is the original price, $250.",
  "choices": [
   "30%",
   "31.6%",
   "24%",
   "20%"
  ],
  "answerIndex": 2
 },
 {
  "id": "psd-041",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "One-variable data: distributions and measures of center and spread",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "The mean of 5 numbers is 18. A sixth number, 30, is added to the list.",
  "question": "What is the mean of the 6 numbers?",
  "solution": "The original sum is 5 × 18 = 90. Adding 30 gives a new sum of 120 over 6 numbers: 120 ÷ 6 = 20. Watch out: averaging 18 and 30 gives 24, but the single new number should not count as much as all five original numbers together.",
  "choices": [
   "24",
   "20",
   "21",
   "19"
  ],
  "answerIndex": 1
 },
 {
  "id": "psd-042",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "One-variable data: distributions and measures of center and spread",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "Data set: 6, 10, 14, 18, 22, 26, 30, 34",
  "question": "What is the median of the data set?",
  "solution": "The values are already in order. With 8 values, the median is the average of the 4th and 5th values: (18 + 22)/2 = 20.",
  "choices": [
   "22",
   "20",
   "18",
   "24"
  ],
  "answerIndex": 1
 },
 {
  "id": "psd-043",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "One-variable data: distributions and measures of center and spread",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "Class A has 20 students with a mean test score of 78. Class B has 10 students with a mean test score of 93.",
  "question": "What is the mean test score of all 30 students in the two classes combined?",
  "solution": "Use total points, not the average of the two means. Class A total = 20 × 78 = 1,560; class B total = 10 × 93 = 930. Combined mean = (1,560 + 930) ÷ 30 = 2,490 ÷ 30 = 83. Watch out: (78 + 93)/2 = 85.5 ignores that the classes have different sizes.",
  "choices": [
   "80",
   "85.5",
   "83",
   "88"
  ],
  "answerIndex": 2
 },
 {
  "id": "psd-044",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "One-variable data: distributions and measures of center and spread",
  "difficulty": 2,
  "level": 2,
  "type": "grid",
  "stimulus": "Data set: 4, 7, 9, 11, 13, 15, 18, 20, 23, 26, 29",
  "question": "What is the interquartile range (IQR) of the data set?",
  "solution": "The median of the 11 values is 15. The first quartile is the median of the five values below it (4, 7, 9, 11, 13), which is 9. The third quartile is the median of the five values above it (18, 20, 23, 26, 29), which is 23. IQR = 23 − 9 = 14.",
  "choices": null,
  "answerValue": "14"
 },
 {
  "id": "psd-045",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "One-variable data: distributions and measures of center and spread",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "Data set: 23, 31, 29, 45, 38, 52, 27",
  "question": "What is the range of the data set?",
  "solution": "Range = maximum − minimum = 52 − 23 = 29. Watch out: 52 is just the maximum and 23 is just the minimum — the range is the difference between them.",
  "choices": [
   "29",
   "52",
   "23",
   "35"
  ],
  "answerIndex": 0
 },
 {
  "id": "psd-046",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Two-variable data: models and scatterplots",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "The height of a sunflower, in inches, t weeks after it sprouts is modeled by h = 2.5t + 8.",
  "question": "According to the model, what is the predicted height, in inches, of the sunflower after 6 weeks?",
  "solution": "Substitute t = 6: h = 2.5(6) + 8 = 15 + 8 = 23 inches.",
  "choices": [
   "15",
   "23",
   "38",
   "21"
  ],
  "answerIndex": 1
 },
 {
  "id": "psd-047",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Two-variable data: models and scatterplots",
  "difficulty": 2,
  "level": 2,
  "type": "grid",
  "stimulus": "A culture starts with 50 bacteria. The number of bacteria doubles every hour, so after t hours the number of bacteria is modeled by N = 50(2)^t.",
  "question": "How many bacteria does the model predict after 4 hours?",
  "solution": "Substitute t = 4: N = 50 × 2^4 = 50 × 16 = 800.",
  "choices": null,
  "answerValue": "800"
 },
 {
  "id": "psd-048",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Two-variable data: models and scatterplots",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "A fitness center has 80 members in its morning program. Of these members, 36 attend yoga classes.",
  "question": "What percent of the members in the morning program attend yoga classes?",
  "solution": "Percent = 36/80 × 100 = 45%.",
  "choices": [
   "55%",
   "80%",
   "36%",
   "45%"
  ],
  "answerIndex": 3
 },
 {
  "id": "psd-049",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Two-variable data: models and scatterplots",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "The total cost, in dollars, of renting a car for a trip is modeled by C = 15 + 0.5m, where m is the number of miles driven.",
  "question": "Which statement best explains the meaning of 0.5 in the model?",
  "solution": "The number multiplied by the variable is the rate of change: each additional mile driven adds $0.50 to the cost. The 15 standing alone is the starting value — the fixed fee before any miles are driven, which is what one of the other choices describes.",
  "choices": [
   "The car can be driven at most 0.5 miles per dollar.",
   "The rental includes a fixed fee of $0.50 before any miles are driven.",
   "Each additional mile driven increases the total cost by $0.50.",
   "The total cost of driving 1 mile is $0.50."
  ],
  "answerIndex": 2
 },
 {
  "id": "psd-050",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Two-variable data: models and scatterplots",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "The table shows the values of a function f for selected values of x.\n\nx: 0, 1, 2, 3, 4\nf(x): 3, 6, 12, 24, 48",
  "question": "Which statement best describes the growth of f?",
  "solution": "Look at ratios, not just differences: 6/3 = 2, 12/6 = 2, 24/12 = 2, 48/24 = 2. The output is multiplied by the same factor (2) for each increase of 1 in x, which is exponential growth. The differences (3, 6, 12, 24) are not constant, so the growth is not linear.",
  "choices": [
   "f grows linearly, because the differences between consecutive outputs are constant.",
   "f grows exponentially, because the outputs are multiplied by 2 for each increase of 1 in x.",
   "f grows exponentially, because the outputs increase by larger and larger amounts.",
   "f grows linearly, because the outputs increase as x increases."
  ],
  "answerIndex": 1
 },
 {
  "id": "psd-051",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Probability and conditional probability",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "At a gym with 160 members, 64 members swim. Of the members who swim, 28 also lift weights. One member who swims is selected at random.",
  "question": "What is the probability that the member selected also lifts weights?",
  "solution": "The condition restricts the group to the 64 members who swim. Of those, 28 lift weights: 28/64 = 7/16. Watch out: 7/40 (28/160) uses all members as the denominator and ignores the condition.",
  "choices": [
   "7/40",
   "1/4",
   "9/16",
   "7/16"
  ],
  "answerIndex": 3
 },
 {
  "id": "psd-052",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Probability and conditional probability",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "A bag contains 4 red marbles and 6 blue marbles. One marble is drawn at random, its color is recorded, and it is replaced in the bag. A second marble is then drawn at random.",
  "question": "What is the probability that both marbles drawn are blue?",
  "solution": "Because the marble is replaced, the draws are independent and the probability stays 6/10 each time: (6/10) × (6/10) = 36/100 = 9/25.",
  "choices": [
   "3/5",
   "9/25",
   "1/3",
   "3/10"
  ],
  "answerIndex": 1
 },
 {
  "id": "psd-053",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Probability and conditional probability",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "Events A and B are independent. The probability of event A is 0.3, and the probability of event B is 0.4.",
  "question": "What is the probability that both events A and B occur?",
  "solution": "For independent events, multiply: P(A and B) = 0.3 × 0.4 = 0.12. Watch out: adding (0.7) is the rule for mutually exclusive events, not independent ones.",
  "choices": [
   "0.7",
   "1.2",
   "0.1",
   "0.12"
  ],
  "answerIndex": 3
 },
 {
  "id": "psd-054",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Probability and conditional probability",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "Two fair six-sided dice are rolled.",
  "question": "What is the probability that the sum of the numbers rolled is 7?",
  "solution": "There are 36 equally likely outcomes. The pairs that sum to 7 are (1,6), (2,5), (3,4), (4,3), (5,2), and (6,1) — 6 outcomes. Probability = 6/36 = 1/6.",
  "choices": [
   "1/12",
   "1/6",
   "5/36",
   "7/36"
  ],
  "answerIndex": 1
 },
 {
  "id": "psd-055",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Inference from sample statistics and margin of error",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "A researcher plans to survey a random sample of residents to estimate the percent who support a new library. The researcher wants a smaller margin of error without changing the survey questions.",
  "question": "Which change would most directly reduce the margin of error of the estimate?",
  "solution": "Margin of error shrinks as the random sample gets larger, because a bigger sample represents the population more precisely. Changing the wording, surveying volunteers, or asking about more topics does not reduce the margin of error — and a non-random sample has no trustworthy margin of error at all.",
  "choices": [
   "Ask each resident more questions",
   "Survey residents who volunteer at the library",
   "Survey only residents who live near the library",
   "Increase the size of the random sample"
  ],
  "answerIndex": 3
 },
 {
  "id": "psd-056",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Inference from sample statistics and margin of error",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "In a random sample of 200 voters, 45 voters said they plan to vote for a certain candidate. There are 4,000 voters in the town.",
  "question": "Based on the sample, what is the best estimate of the number of voters in the town who plan to vote for the candidate?",
  "solution": "The sample proportion is 45/200 = 0.225. Apply it to the whole town: 0.225 × 4,000 = 900 voters. This is an estimate from the sample, not an exact count.",
  "choices": [
   "45",
   "900",
   "1,800",
   "450"
  ],
  "answerIndex": 1
 },
 {
  "id": "psd-057",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Evaluating statistical claims: observational studies and experiments",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "A study found that on days when ice cream sales are higher, the number of drowning incidents is also higher. A report claimed that eating ice cream increases the risk of drowning.",
  "question": "Which of the following best explains why the claim is not justified?",
  "solution": "Both variables rise together in hot summer weather: heat drives people to buy ice cream AND to swim more, which leads to more drowning incidents. Temperature is a confounding variable that can explain the association without ice cream causing anything.",
  "choices": [
   "Drowning incidents are too rare to be studied statistically.",
   "The report is justified, because the two variables are strongly associated.",
   "Hot weather is a possible confounding variable, because it can increase both ice cream sales and swimming.",
   "The study should have recorded ice cream sales for an entire year."
  ],
  "answerIndex": 2
 },
 {
  "id": "psd-058",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Evaluating statistical claims: observational studies and experiments",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "A gardener randomly assigned 40 tomato plants to two groups. One group received a new fertilizer and the other did not, while all other conditions were kept the same. The fertilized plants produced more tomatoes on average.",
  "question": "Which conclusion is best supported by this study?",
  "solution": "Treatments were randomly assigned and other conditions were held constant, so the only systematic difference between the groups is the fertilizer. A well-designed experiment like this can support a causal conclusion — limited to the conditions and plants studied.",
  "choices": [
   "The new fertilizer caused the increase in tomato production for plants in conditions like these.",
   "The fertilizer is the only factor that can affect tomato production.",
   "Any tomato plant anywhere will produce more tomatoes with this fertilizer.",
   "No conclusion can be drawn, because only 40 plants were studied."
  ],
  "answerIndex": 0
 },
 {
  "id": "psd-059",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Ratios, rates, proportional relationships, and units",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "The ratio of two numbers is 7 to 4. The difference between the two numbers is 39.",
  "question": "What is the greater of the two numbers?",
  "solution": "The ratio parts differ by 7 − 4 = 3 parts, and those 3 parts equal 39, so each part is 13. The greater number is 7 parts: 7 × 13 = 91.",
  "choices": [
   "52",
   "117",
   "91",
   "65"
  ],
  "answerIndex": 2
 },
 {
  "id": "psd-060",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Ratios, rates, proportional relationships, and units",
  "difficulty": 3,
  "level": 3,
  "type": "grid",
  "stimulus": "",
  "question": "If (x + 3)/15 = 4/6, what is the value of x?",
  "solution": "Cross-multiply: 6(x + 3) = 60, so x + 3 = 10 and x = 7.",
  "choices": null,
  "answerValue": "7"
 },
 {
  "id": "psd-061",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Ratios, rates, proportional relationships, and units",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "A car travels at a constant speed of 60 miles per hour. (1 mile = 5,280 feet; 1 hour = 3,600 seconds.)",
  "question": "What is the car's speed, in feet per second?",
  "solution": "Convert: 60 miles = 60 × 5,280 = 316,800 feet, and 1 hour = 3,600 seconds. Speed = 316,800 ÷ 3,600 = 88 feet per second.",
  "choices": [
   "88",
   "60",
   "120",
   "96"
  ],
  "answerIndex": 0
 },
 {
  "id": "psd-062",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Ratios, rates, proportional relationships, and units",
  "difficulty": 3,
  "level": 3,
  "type": "grid",
  "stimulus": "A wildlife reserve has a deer population density of 250 deer per square mile. The reserve is home to approximately 18,500 deer.",
  "question": "What is the approximate area, in square miles, of the reserve?",
  "solution": "Area = population ÷ density = 18,500 ÷ 250 = 74 square miles.",
  "choices": null,
  "answerValue": "74"
 },
 {
  "id": "psd-063",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Ratios, rates, proportional relationships, and units",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "A painter mixes red paint and blue paint in a ratio of 5 to 3 to make 40 liters of purple paint.",
  "question": "How many more liters of red paint than blue paint are in the mixture?",
  "solution": "There are 5 + 3 = 8 parts, so each part is 40 ÷ 8 = 5 liters. Red = 5 × 5 = 25 liters and blue = 3 × 5 = 15 liters. The difference is 25 − 15 = 10 liters. Watch out: 25 is the amount of red paint, not the difference the question asks for.",
  "choices": [
   "40",
   "15",
   "25",
   "10"
  ],
  "answerIndex": 3
 },
 {
  "id": "psd-064",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Ratios, rates, proportional relationships, and units",
  "difficulty": 3,
  "level": 3,
  "type": "grid",
  "stimulus": "On a map, 0.75 inch represents an actual distance of 20 miles.",
  "question": "Two cities are 5.25 inches apart on the map. What is the actual distance, in miles, between the cities?",
  "solution": "Each inch represents 20 ÷ 0.75 = 80/3 miles. The distance is 5.25 × 80/3 = 140 miles.",
  "choices": null,
  "answerValue": "140"
 },
 {
  "id": "psd-065",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Percentages",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "The price of a phone was $500. The price was first increased by 20% and later decreased by 20% from the increased price.",
  "question": "What is the final price, in dollars, of the phone?",
  "solution": "After the increase: 500 × 1.20 = $600. The 20% decrease applies to $600, not $500: 600 × 0.80 = $480. The two 20% changes do not cancel, because they are percents of different amounts.",
  "choices": [
   "$520",
   "$480",
   "$500",
   "$460"
  ],
  "answerIndex": 1
 },
 {
  "id": "psd-066",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Percentages",
  "difficulty": 3,
  "level": 3,
  "type": "grid",
  "stimulus": "A coat is on sale for $68 after a discount of 15% off the original price.",
  "question": "What was the original price, in dollars, of the coat?",
  "solution": "The sale price is 85% of the original: 0.85 × (original) = 68, so original = 68 ÷ 0.85 = $80. Watch out: adding 15% of $68 to $68 uses the wrong base.",
  "choices": null,
  "answerValue": "80"
 },
 {
  "id": "psd-067",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Percentages",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "",
  "question": "45 is 12% of what number?",
  "solution": "Let the number be n: 0.12n = 45, so n = 45 ÷ 0.12 = 375.",
  "choices": [
   "540",
   "54",
   "375",
   "270"
  ],
  "answerIndex": 2
 },
 {
  "id": "psd-068",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Percentages",
  "difficulty": 3,
  "level": 3,
  "type": "grid",
  "stimulus": "An investment of $1,000 earns 10% interest per year, compounded annually.",
  "question": "What is the value, in dollars, of the investment after 2 years?",
  "solution": "After 1 year: 1,000 × 1.10 = $1,100. After 2 years: 1,100 × 1.10 = $1,210. The second year's interest is earned on $1,100, not on the original $1,000 — that is what compounding means.",
  "choices": null,
  "answerValue": "1210"
 },
 {
  "id": "psd-069",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Percentages",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "Store A sells a bicycle for $250, and store B sells the same bicycle for $200.",
  "question": "The price at store A is what percent greater than the price at store B?",
  "solution": "The difference is 250 − 200 = $50. 'Percent greater than B' uses B's price as the base: 50/200 × 100 = 25%. Watch out: 20% divides by $250, which answers the reverse question (B's price as a percent less than A's).",
  "choices": [
   "50%",
   "25%",
   "20%",
   "125%"
  ],
  "answerIndex": 1
 },
 {
  "id": "psd-070",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "One-variable data: distributions and measures of center and spread",
  "difficulty": 3,
  "level": 3,
  "type": "grid",
  "stimulus": "The mean of 10 numbers is 25. One of the numbers, 40, is replaced by 55.",
  "question": "What is the new mean of the 10 numbers?",
  "solution": "The original sum is 10 × 25 = 250. Replacing 40 with 55 raises the sum by 15, to 265. New mean = 265 ÷ 10 = 26.5.",
  "choices": null,
  "answerValue": "26.5"
 },
 {
  "id": "psd-071",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "One-variable data: distributions and measures of center and spread",
  "difficulty": 3,
  "level": 3,
  "type": "grid",
  "stimulus": "The numbers 8, 11, x, 17, and 20 have a median of 14.",
  "question": "What is the value of x?",
  "solution": "With five numbers, the median is the third number when the values are ordered. For the median to be 14, x must sit in the middle position and equal 14: ordered as 8, 11, 14, 17, 20. (If x were below 11 the median would be 11; if x were above 17 the median would be 17.)",
  "choices": null,
  "answerValue": "14"
 },
 {
  "id": "psd-072",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "One-variable data: distributions and measures of center and spread",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "Data set A: 10, 12, 14, 16, 18\nData set B: 13, 14, 14, 14, 15",
  "question": "Which statement correctly compares the two data sets?",
  "solution": "Both sets sum to 70 over 5 values, so both means are 14. The values in A are spread much farther from 14 (from 10 to 18) than the values in B (from 13 to 15), so A has the greater standard deviation.",
  "choices": [
   "B has a greater mean than A, and A has the greater standard deviation.",
   "A has a greater mean than B, and B has the greater standard deviation.",
   "A and B have the same mean, and B has the greater standard deviation.",
   "A and B have the same mean, and A has the greater standard deviation."
  ],
  "answerIndex": 3
 },
 {
  "id": "psd-073",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "One-variable data: distributions and measures of center and spread",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "The monthly salaries of 9 employees at a small company are mostly between $3,000 and $4,500. A tenth person, the owner, earns $40,000 per month and is added to the list.",
  "question": "Which statement best describes how adding the owner's salary affects the mean and median of the salaries?",
  "solution": "The mean adds every value, so one salary of $40,000 pulls it up sharply. The median only depends on the middle position of the ordered list, so it moves very little when one extreme value is added at the end. Extreme values move the mean far more than the median.",
  "choices": [
   "The median increases by much more than the mean increases.",
   "The mean increases by much more than the median increases.",
   "The mean and median both stay exactly the same.",
   "The mean decreases and the median increases."
  ],
  "answerIndex": 1
 },
 {
  "id": "psd-074",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "One-variable data: distributions and measures of center and spread",
  "difficulty": 3,
  "level": 3,
  "type": "grid",
  "stimulus": "Data set: 12, 15, 18, 21, 24, 27, 30, 33",
  "question": "What is the interquartile range (IQR) of the data set?",
  "solution": "The median of the 8 values is (21 + 24)/2 = 22.5. The first quartile is the median of the lower half (12, 15, 18, 21): (15 + 18)/2 = 16.5. The third quartile is the median of the upper half (24, 27, 30, 33): (27 + 30)/2 = 28.5. IQR = 28.5 − 16.5 = 12.",
  "choices": null,
  "answerValue": "12"
 },
 {
  "id": "psd-075",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Two-variable data: models and scatterplots",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "The population of a town is modeled by P = 1,200(1.05)^t, where P is the population and t is the number of years since the study began.",
  "question": "What was the population of the town when the study began?",
  "solution": "When the study began, t = 0, and (1.05)^0 = 1, so P = 1,200 × 1 = 1,200. Watch out: 1,260 is the population after 1 year (t = 1).",
  "choices": [
   "1,140",
   "1,260",
   "60",
   "1,200"
  ],
  "answerIndex": 3
 },
 {
  "id": "psd-076",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Two-variable data: models and scatterplots",
  "difficulty": 3,
  "level": 3,
  "type": "grid",
  "stimulus": "A bacteria culture starts with 150 bacteria. The number of bacteria doubles every 3 hours.",
  "question": "How many bacteria will there be after 12 hours?",
  "solution": "In 12 hours there are 12 ÷ 3 = 4 doubling periods. The count is 150 × 2^4 = 150 × 16 = 2,400.",
  "choices": null,
  "answerValue": "2400"
 },
 {
  "id": "psd-077",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Two-variable data: models and scatterplots",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "A model predicts a student's test score from the number of hours spent studying: y = 4x + 50, where x is the hours studied and y is the predicted score. A student who studied for 8 hours earned an actual score of 90.",
  "question": "What is the residual for this student?",
  "solution": "Residual = actual − predicted. The predicted score is 4(8) + 50 = 82. Residual = 90 − 82 = 8. The positive residual means the student scored above what the model predicted.",
  "choices": [
   "82",
   "90",
   "−8",
   "8"
  ],
  "answerIndex": 3
 },
 {
  "id": "psd-078",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Two-variable data: models and scatterplots",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "In a survey of 320 adults, 180 said they exercise regularly. Of the adults who exercise regularly, 126 said they eat breakfast every day.",
  "question": "What percent of the adults who exercise regularly eat breakfast every day?",
  "solution": "The question restricts you to the 180 adults who exercise regularly. Of those, 126 eat breakfast daily: 126/180 = 0.70 = 70%. Watch out: 39.375% divides 126 by all 320 adults, ignoring the restriction.",
  "choices": [
   "39.375%",
   "70%",
   "56.25%",
   "126%"
  ],
  "answerIndex": 1
 },
 {
  "id": "psd-079",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Two-variable data: models and scatterplots",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "A plumber's total charge for a job is modeled by y = 25x + 40, where x is the number of hours of labor and y is the total charge, in dollars.",
  "question": "A job cost $240 in total. How many hours of labor did the job take?",
  "solution": "Set y = 240: 240 = 25x + 40. Subtract 40: 200 = 25x. Divide by 25: x = 8 hours.",
  "choices": [
   "9.6",
   "8",
   "11.2",
   "6"
  ],
  "answerIndex": 1
 },
 {
  "id": "psd-080",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Probability and conditional probability",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "A box contains 9 raffle tickets, of which 4 are winning tickets. Two tickets are drawn at random from the box without replacement.",
  "question": "What is the probability that both tickets drawn are winning tickets?",
  "solution": "First draw: 4/9. Without replacement, 3 winning tickets remain out of 8: 3/8. Multiply: (4/9) × (3/8) = 12/72 = 1/6. Watch out: 16/81 keeps the denominator at 9 for both draws, which would only be right with replacement.",
  "choices": [
   "2/9",
   "1/6",
   "16/81",
   "7/18"
  ],
  "answerIndex": 1
 },
 {
  "id": "psd-081",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Probability and conditional probability",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "A bag contains 5 red marbles and 7 blue marbles. Two marbles are drawn at random from the bag without replacement.",
  "question": "What is the probability that at least one of the marbles drawn is red?",
  "solution": "Use the complement: P(at least one red) = 1 − P(both blue). P(both blue) = (7/12) × (6/11) = 42/132 = 7/22. So the probability is 1 − 7/22 = 15/22. Watch out: 7/22 is the probability of the complement event itself.",
  "choices": [
   "15/22",
   "5/12",
   "25/144",
   "7/22"
  ],
  "answerIndex": 0
 },
 {
  "id": "psd-082",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Probability and conditional probability",
  "difficulty": 3,
  "level": 3,
  "type": "grid",
  "stimulus": "A bag contains 6 red marbles and 4 blue marbles. One marble is drawn at random and is red; it is not replaced. A second marble is then drawn at random.",
  "question": "What is the probability that the second marble drawn is red?",
  "solution": "After one red marble is removed, 5 red marbles remain out of 9 marbles total: 5/9. Grid in 5/9.",
  "choices": null,
  "answerValue": "5/9"
 },
 {
  "id": "psd-083",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Probability and conditional probability",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "For events A and B, the probability of A is 1/3, the probability of B is 1/4, and the probability that both A and B occur is 1/12.",
  "question": "What is the probability that A or B occurs?",
  "solution": "Add the separate probabilities, then subtract the overlap so it is not counted twice: 1/3 + 1/4 − 1/12 = 4/12 + 3/12 − 1/12 = 6/12 = 1/2. Watch out: 7/12 forgets to subtract the overlap.",
  "choices": [
   "1/12",
   "1/2",
   "7/12",
   "2/3"
  ],
  "answerIndex": 1
 },
 {
  "id": "psd-084",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Inference from sample statistics and margin of error",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "A survey of a random sample of residents estimates that 38% of residents favor a recycling program, with a margin of error of ±5.2 percentage points.",
  "question": "Based on the survey, what is the greatest percent of residents that plausibly favor the program?",
  "solution": "The plausible range runs from 38 − 5.2 = 32.8% to 38 + 5.2 = 43.2%. The greatest plausible percent is the top of the range: 43.2%.",
  "choices": [
   "38%",
   "43.2%",
   "48%",
   "32.8%"
  ],
  "answerIndex": 1
 },
 {
  "id": "psd-085",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Inference from sample statistics and margin of error",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "To estimate how all adults in a country feel about a new technology, a magazine surveyed only its online subscribers who chose to complete a poll on the magazine's website.",
  "question": "Which of the following best explains why the results may not accurately represent all adults in the country?",
  "solution": "The survey only reached people who subscribe to the magazine, use its website, and chose to respond. Adults without internet access, non-subscribers, and people who ignored the poll had no real chance to be included, so whole groups are underrepresented — the sample frame never covered the population it claims to describe.",
  "choices": [
   "The sample underrepresents adults who are not online subscribers, so it may not reflect the views of all adults.",
   "The poll had too many questions about technology.",
   "The results are accurate as long as at least 1,000 people responded.",
   "The magazine should have offered a prize to everyone who completed the poll."
  ],
  "answerIndex": 0
 },
 {
  "id": "psd-086",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Inference from sample statistics and margin of error",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "Two polling organizations surveyed random samples from the same population about the same question. Poll A used a random sample of 400 people, and Poll B used a random sample of 1,600 people. Both polls report the same estimated percent.",
  "question": "Which statement is best supported by this information?",
  "solution": "With random samples from the same population, the larger sample gives the more precise estimate: Poll B's margin of error is smaller, so its plausible range around the same estimate is narrower. A bigger random sample does not change the estimate itself, but it tightens the range.",
  "choices": [
   "The two polls must have identical margins of error because their estimates are the same.",
   "Poll B's estimate must be exactly correct because its sample is larger.",
   "Poll B has a smaller margin of error than Poll A.",
   "Poll A has a smaller margin of error than Poll B."
  ],
  "answerIndex": 2
 },
 {
  "id": "psd-087",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Evaluating statistical claims: observational studies and experiments",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "An observational study found that students who attended optional review sessions earned higher exam scores, on average, than students who did not attend. A report concluded that attending the review sessions caused the higher scores.",
  "question": "Which of the following best explains why the conclusion is not necessarily valid?",
  "solution": "Students chose whether to attend, so the groups may have differed before any session took place — students who attend optional sessions are often more motivated or better prepared to begin with. Because there was no random assignment, those differences, not the sessions themselves, could explain the higher scores.",
  "choices": [
   "Exam scores cannot be compared between two groups of students.",
   "Students who chose to attend may have differed from those who did not in ways that also affect scores, such as motivation.",
   "The study should have included students from other schools.",
   "The conclusion is valid because the review-session group had higher scores on average."
  ],
  "answerIndex": 1
 },
 {
  "id": "psd-088",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Evaluating statistical claims: observational studies and experiments",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "In an experiment testing a new headache medicine, researchers randomly assigned each volunteer to receive either the new medicine or a placebo.",
  "question": "What is the main purpose of randomly assigning volunteers to the two groups?",
  "solution": "Random assignment spreads out all the other differences between people — age, health, severity of headaches — roughly evenly between the groups, by chance. That way, a difference in outcomes at the end can be attributed to the treatment rather than to a pre-existing difference between the groups.",
  "choices": [
   "To guarantee that every volunteer receives the treatment that works best for them",
   "To make the two groups similar, on average, in all other characteristics, so that differences in outcomes can be attributed to the treatment",
   "To allow each volunteer to choose the group they prefer",
   "To make sure the sample of volunteers represents the entire population"
  ],
  "answerIndex": 1
 },
 {
  "id": "psd-089",
  "section": "Math",
  "domain": "Problem-Solving and Data Analysis",
  "topic": "Evaluating statistical claims: observational studies and experiments",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "A researcher interviewed runners as they crossed the finish line of a marathon and, based on their answers, concluded that the average adult in the city runs at least 20 miles per week.",
  "question": "Which of the following best explains why the researcher's conclusion is not valid?",
  "solution": "People who finish a marathon are among the most dedicated runners anywhere — they are nothing like a typical adult in the city. A conclusion about all adults cannot be drawn from a group selected precisely because they are extreme on the very thing being measured.",
  "choices": [
   "The researcher should have interviewed runners before the race instead of after it.",
   "Twenty miles per week is too far for any adult to run.",
   "Marathon finishers are not representative of all adults in the city, because they run far more than typical adults.",
   "The conclusion would be valid if the researcher had interviewed twice as many finishers."
  ],
  "answerIndex": 2
 },
 {
  "id": "geo-001",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Lines, angles, and triangles",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "Two lines intersect in a plane.",
  "question": "One of the angles formed by the intersecting lines measures 73°. What is the measure, in degrees, of the angle vertical to that angle?",
  "solution": "Vertical angles — the angles directly opposite each other when two lines cross — have equal measures. So the vertical angle also measures 73°. (The angles next to it are supplementary and measure 180 − 73 = 107°.)",
  "choices": [
   "17",
   "73",
   "107",
   "283"
  ],
  "answerIndex": 1
 },
 {
  "id": "geo-002",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Lines, angles, and triangles",
  "difficulty": 1,
  "level": 1,
  "type": "grid",
  "stimulus": "An angle measures 86°. A ray starting at the angle's vertex bisects the angle.",
  "question": "What is the measure, in degrees, of each of the two resulting angles?",
  "solution": "To bisect means to cut into two equal parts: 86 ÷ 2 = 43°.",
  "choices": null,
  "answerValue": "43"
 },
 {
  "id": "geo-003",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Lines, angles, and triangles",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "Two angles of a triangle measure 47° and 68°.",
  "question": "What is the measure, in degrees, of the third angle of the triangle?",
  "solution": "The three angle measures of a triangle sum to 180°. The third angle measures 180 − 47 − 68 = 65°.",
  "choices": [
   "115",
   "75",
   "55",
   "65"
  ],
  "answerIndex": 3
 },
 {
  "id": "geo-004",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Lines, angles, and triangles",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "An isosceles triangle has a vertex angle that measures 40°. The two base angles have equal measures.",
  "question": "What is the measure, in degrees, of each base angle?",
  "solution": "The two base angles together measure 180 − 40 = 140°. They are equal, so each measures 140 ÷ 2 = 70°.",
  "choices": [
   "70",
   "140",
   "50",
   "40"
  ],
  "answerIndex": 0
 },
 {
  "id": "geo-005",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Lines, angles, and triangles",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "Two parallel lines are cut by a transversal. One of the angles formed measures 110°.",
  "question": "What is the measure, in degrees, of an angle in a same-side interior position relative to the 110° angle?",
  "solution": "Same-side interior angles formed by parallel lines are supplementary — their measures sum to 180°. The angle measures 180 − 110 = 70°.",
  "choices": [
   "250",
   "90",
   "110",
   "70"
  ],
  "answerIndex": 3
 },
 {
  "id": "geo-006",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Lines, angles, and triangles",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "In a triangle, one exterior angle is formed by extending a side. The two nonadjacent (remote) interior angles of the triangle measure 52° and 61°.",
  "question": "What is the measure, in degrees, of the exterior angle?",
  "solution": "An exterior angle of a triangle has the same measure as the sum of the two remote interior angles: 52 + 61 = 113°.",
  "choices": [
   "9",
   "113",
   "123",
   "103"
  ],
  "answerIndex": 1
 },
 {
  "id": "geo-007",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Lines, angles, and triangles",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "",
  "question": "What is the measure, in degrees, of each interior angle of a regular hexagon?",
  "solution": "The interior angles of a hexagon sum to (6 − 2) × 180 = 720°. A regular hexagon has 6 equal angles, so each measures 720 ÷ 6 = 120°.",
  "choices": [
   "120",
   "135",
   "108",
   "90"
  ],
  "answerIndex": 0
 },
 {
  "id": "geo-008",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Lines, angles, and triangles",
  "difficulty": 1,
  "level": 1,
  "type": "grid",
  "stimulus": "Three angles of a quadrilateral measure 95°, 88°, and 102°.",
  "question": "What is the measure, in degrees, of the fourth angle of the quadrilateral?",
  "solution": "The angle measures of a quadrilateral sum to 360°. The fourth angle measures 360 − 95 − 88 − 102 = 75°.",
  "choices": null,
  "answerValue": "75"
 },
 {
  "id": "geo-009",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Area and volume",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "A triangle has a base of length 10 inches and a height of 7 inches.",
  "question": "What is the area, in square inches, of the triangle?",
  "solution": "Area of a triangle = (1/2) × base × height = (1/2)(10)(7) = 35 square inches. Watch out: 70 is the full base-times-height product — the factor of 1/2 is what makes it a triangle rather than a parallelogram.",
  "choices": [
   "140",
   "70",
   "35",
   "17.5"
  ],
  "answerIndex": 2
 },
 {
  "id": "geo-010",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Area and volume",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "A circle has a radius of 8 units.",
  "question": "What is the circumference of the circle?",
  "solution": "Circumference = 2πr = 2π(8) = 16π units.",
  "choices": [
   "8π",
   "4π",
   "64π",
   "16π"
  ],
  "answerIndex": 3
 },
 {
  "id": "geo-011",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Area and volume",
  "difficulty": 1,
  "level": 1,
  "type": "grid",
  "stimulus": "A rectangular prism has a length of 5 units, a width of 4 units, and a height of 3 units.",
  "question": "What is the volume, in cubic units, of the prism?",
  "solution": "Volume = length × width × height = 5 × 4 × 3 = 60 cubic units.",
  "choices": null,
  "answerValue": "60"
 },
 {
  "id": "geo-012",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Area and volume",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "A square has a perimeter of 36 units.",
  "question": "What is the area, in square units, of the square?",
  "solution": "Each side of the square measures 36 ÷ 4 = 9 units. The area is 9² = 81 square units. Watch out: the perimeter must be split into four sides before squaring — squaring first is the most common error here.",
  "choices": [
   "18",
   "324",
   "36",
   "81"
  ],
  "answerIndex": 3
 },
 {
  "id": "geo-013",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Area and volume",
  "difficulty": 1,
  "level": 1,
  "type": "grid",
  "stimulus": "A trapezoid has bases of length 8 units and 12 units and a height of 5 units.",
  "question": "What is the area, in square units, of the trapezoid?",
  "solution": "Area of a trapezoid = (1/2) × (sum of the bases) × height = (1/2)(8 + 12)(5) = (1/2)(20)(5) = 50 square units.",
  "choices": null,
  "answerValue": "50"
 },
 {
  "id": "geo-014",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Area and volume",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "A regular pentagon has sides of length 9 units.",
  "question": "What is the perimeter, in units, of the pentagon?",
  "solution": "A regular pentagon has 5 equal sides: perimeter = 5 × 9 = 45 units.",
  "choices": [
   "45",
   "40",
   "36",
   "54"
  ],
  "answerIndex": 0
 },
 {
  "id": "geo-015",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Area and volume",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "A parallelogram has a base of length 11 units and a height of 6 units.",
  "question": "What is the area, in square units, of the parallelogram?",
  "solution": "Area of a parallelogram = base × height = 11 × 6 = 66 square units. (No factor of 1/2 — that belongs to triangles.)",
  "choices": [
   "17",
   "33",
   "66",
   "132"
  ],
  "answerIndex": 2
 },
 {
  "id": "geo-016",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Area and volume",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "A circle has a diameter of 14 units.",
  "question": "What is the area of the circle?",
  "solution": "The radius is half the diameter: 14 ÷ 2 = 7. Area = πr² = π(7²) = 49π square units. Watch out: using the diameter as the radius gives 196π — always halve first.",
  "choices": [
   "196π",
   "28π",
   "49π",
   "98π"
  ],
  "answerIndex": 2
 },
 {
  "id": "geo-017",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Right triangles and trigonometry",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "A right triangle has legs of length 6 units and 8 units.",
  "question": "What is the length, in units, of the hypotenuse of the triangle?",
  "solution": "By the Pythagorean theorem, hypotenuse² = 6² + 8² = 36 + 64 = 100, so the hypotenuse is √100 = 10 units.",
  "choices": [
   "48",
   "10",
   "14",
   "100"
  ],
  "answerIndex": 1
 },
 {
  "id": "geo-018",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Right triangles and trigonometry",
  "difficulty": 1,
  "level": 1,
  "type": "grid",
  "stimulus": "A right triangle has a hypotenuse of length 13 units and one leg of length 5 units.",
  "question": "What is the length, in units, of the other leg of the triangle?",
  "solution": "By the Pythagorean theorem, leg² + 5² = 13², so leg² = 169 − 25 = 144 and the leg is √144 = 12 units.",
  "choices": null,
  "answerValue": "12"
 },
 {
  "id": "geo-019",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Right triangles and trigonometry",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "A right triangle is isosceles, with the two legs each of length 7 units.",
  "question": "What is the length, in units, of the hypotenuse of the triangle?",
  "solution": "In a 45°-45°-90° triangle, the hypotenuse is the leg length times √2: 7√2 units. (From the Pythagorean theorem: √(7² + 7²) = √98 = 7√2.)",
  "choices": [
   "49",
   "7√3",
   "7√2",
   "14"
  ],
  "answerIndex": 2
 },
 {
  "id": "geo-020",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Right triangles and trigonometry",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "In right triangle ABC, the right angle is at vertex C. The side opposite angle A has length 5, and the hypotenuse has length 13.",
  "question": "What is the value of sin A?",
  "solution": "Sine is opposite over hypotenuse, from the angle named. For angle A: sin A = 5/13. Watch out: 12/13 is cos A (adjacent over hypotenuse) — naming the angle first keeps the sides straight.",
  "choices": [
   "5/13",
   "5/12",
   "12/13",
   "13/5"
  ],
  "answerIndex": 0
 },
 {
  "id": "geo-021",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Right triangles and trigonometry",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "In a right triangle, the side opposite angle P has length 8, the side adjacent to angle P has length 15, and the hypotenuse has length 17.",
  "question": "What is the value of tan P?",
  "solution": "Tangent is opposite over adjacent: tan P = 8/15. (The hypotenuse, 17, is not used for tangent.)",
  "choices": [
   "8/15",
   "15/8",
   "8/17",
   "15/17"
  ],
  "answerIndex": 0
 },
 {
  "id": "geo-022",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Right triangles and trigonometry",
  "difficulty": 1,
  "level": 1,
  "type": "grid",
  "stimulus": "",
  "question": "If sin(25°) = cos(x°) and 0 < x < 90, what is the value of x?",
  "solution": "The sine of an acute angle equals the cosine of its complement: the two angles must sum to 90°. So x = 90 − 25 = 65.",
  "choices": null,
  "answerValue": "65"
 },
 {
  "id": "geo-023",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Right triangles and trigonometry",
  "difficulty": 1,
  "level": 1,
  "type": "grid",
  "stimulus": "In a 30°-60°-90° triangle, the side opposite the 30° angle has length 9 units.",
  "question": "What is the length, in units, of the hypotenuse?",
  "solution": "In a 30°-60°-90° triangle, the hypotenuse is twice the side opposite the 30° angle: 2 × 9 = 18 units.",
  "choices": null,
  "answerValue": "18"
 },
 {
  "id": "geo-024",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Circles",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "A circle in the xy-plane is represented by the equation (x + 4)² + (y − 5)² = 81.",
  "question": "What is the center of the circle?",
  "solution": "In the standard form (x − h)² + (y − k)² = r², the center is (h, k). Here (x + 4) means h = −4 and (y − 5) means k = 5, so the center is (−4, 5). The signs flip because the form subtracts h and k.",
  "choices": [
   "(4, 5)",
   "(4, −5)",
   "(−4, 5)",
   "(−4, −5)"
  ],
  "answerIndex": 2
 },
 {
  "id": "geo-025",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Circles",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "A circle has center (2, 3) and passes through the point (2, 7).",
  "question": "What is the radius of the circle?",
  "solution": "The radius is the distance from the center to any point on the circle. From (2, 3) to (2, 7) is a vertical distance of 7 − 3 = 4, so the radius is 4.",
  "choices": [
   "5",
   "16",
   "2",
   "4"
  ],
  "answerIndex": 3
 },
 {
  "id": "geo-026",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Circles",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "An arc of a circle with radius 10 units is intercepted by a central angle of 90°.",
  "question": "What is the length of the arc?",
  "solution": "Arc length is the fraction of the circumference set by the central angle: (90/360) × 2π(10) = (1/4)(20π) = 5π units.",
  "choices": [
   "10π",
   "50π",
   "20π",
   "5π"
  ],
  "answerIndex": 3
 },
 {
  "id": "geo-027",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Circles",
  "difficulty": 1,
  "level": 1,
  "type": "grid",
  "stimulus": "A sector of a circle with radius 6 units is formed by a central angle of 90°. The area of the sector can be written as kπ square units, where k is a constant.",
  "question": "What is the value of k?",
  "solution": "The sector is 90/360 = 1/4 of the circle. The full area is π(6²) = 36π, so the sector area is (1/4)(36π) = 9π, and k = 9.",
  "choices": null,
  "answerValue": "9"
 },
 {
  "id": "geo-028",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Circles",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "",
  "question": "An angle measures 150°. What is the measure of the angle, in radians?",
  "solution": "Convert with the factor π radians = 180°: 150 × (π/180) = 150π/180 = 5π/6 radians.",
  "choices": [
   "5π/3",
   "3π/4",
   "2π/3",
   "5π/6"
  ],
  "answerIndex": 3
 },
 {
  "id": "geo-029",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Circles",
  "difficulty": 1,
  "level": 1,
  "type": "grid",
  "stimulus": "",
  "question": "An angle measures π/4 radians. What is the measure of the angle, in degrees?",
  "solution": "Convert with the factor 180° = π radians: (π/4) × (180/π) = 180/4 = 45°.",
  "choices": null,
  "answerValue": "45"
 },
 {
  "id": "geo-030",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Circles",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "A central angle of a circle measures 100°. An inscribed angle intercepts the same arc as the central angle.",
  "question": "What is the measure, in degrees, of the inscribed angle?",
  "solution": "An inscribed angle has half the measure of the central angle that intercepts the same arc: 100 ÷ 2 = 50°.",
  "choices": [
   "200",
   "100",
   "50",
   "25"
  ],
  "answerIndex": 2
 },
 {
  "id": "geo-031",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Lines, angles, and triangles",
  "difficulty": 2,
  "level": 2,
  "type": "grid",
  "stimulus": "Two parallel lines are cut by a transversal. Two alternate interior angles formed measure (4x + 10)° and (6x − 30)°.",
  "question": "What is the value of x?",
  "solution": "Alternate interior angles formed by parallel lines have equal measures: 4x + 10 = 6x − 30. Add 30 and subtract 4x: 40 = 2x, so x = 20.",
  "choices": null,
  "answerValue": "20"
 },
 {
  "id": "geo-032",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Lines, angles, and triangles",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "The measures of the three angles of a triangle are x°, 2x°, and 3x°.",
  "question": "What is the measure, in degrees, of the largest angle of the triangle?",
  "solution": "The measures sum to 180°: x + 2x + 3x = 180, so 6x = 180 and x = 30. The largest angle is 3x = 3(30) = 90°. Watch out: 30 is the value of x, not an angle measure.",
  "choices": [
   "90",
   "30",
   "60",
   "120"
  ],
  "answerIndex": 0
 },
 {
  "id": "geo-033",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Lines, angles, and triangles",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "Triangle ABC is similar to triangle DEF. The side lengths of triangle ABC are 6, 9, and 12. The shortest side of triangle DEF has length 10.",
  "question": "What is the length of the longest side of triangle DEF?",
  "solution": "Corresponding sides scale by the same factor. The shortest sides give the scale factor: 10 ÷ 6 = 5/3. The longest side of DEF is 12 × (5/3) = 20.",
  "choices": [
   "15",
   "20",
   "18",
   "24"
  ],
  "answerIndex": 1
 },
 {
  "id": "geo-034",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Lines, angles, and triangles",
  "difficulty": 2,
  "level": 2,
  "type": "grid",
  "stimulus": "Two triangles are similar. In the smaller triangle, two sides have lengths 4 and 6. In the larger triangle, the side corresponding to the side of length 4 has length 10.",
  "question": "What is the length of the side of the larger triangle that corresponds to the side of length 6?",
  "solution": "Set up a proportion: 6/4 = x/10. Then x = 6 × 10 ÷ 4 = 15.",
  "choices": null,
  "answerValue": "15"
 },
 {
  "id": "geo-035",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Lines, angles, and triangles",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "In an isosceles triangle, the vertex angle measures (3x)° and each base angle measures (x + 30)°.",
  "question": "What is the measure, in degrees, of the vertex angle?",
  "solution": "All three angles sum to 180°: 3x + (x + 30) + (x + 30) = 180, so 5x + 60 = 180 and x = 24. The vertex angle is 3x = 3(24) = 72°. Watch out: 54° is each base angle (x + 30) — read which angle the question asks for.",
  "choices": [
   "72",
   "96",
   "24",
   "54"
  ],
  "answerIndex": 0
 },
 {
  "id": "geo-036",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Lines, angles, and triangles",
  "difficulty": 2,
  "level": 2,
  "type": "grid",
  "stimulus": "In a triangle, an exterior angle measures (4x + 20)°. The two remote interior angles measure 60° and (2x)°.",
  "question": "What is the value of x?",
  "solution": "An exterior angle equals the sum of the two remote interior angles: 4x + 20 = 60 + 2x. Subtract 2x and 20: 2x = 40, so x = 20.",
  "choices": null,
  "answerValue": "20"
 },
 {
  "id": "geo-037",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Lines, angles, and triangles",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "",
  "question": "Each interior angle of a regular polygon measures 140°. How many sides does the polygon have?",
  "solution": "Each exterior angle measures 180 − 140 = 40°. The exterior angles of any polygon sum to 360°, so the number of sides is 360 ÷ 40 = 9.",
  "choices": [
   "9",
   "10",
   "12",
   "8"
  ],
  "answerIndex": 0
 },
 {
  "id": "geo-038",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Lines, angles, and triangles",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "Two sides of a triangle have lengths 7 and 10.",
  "question": "Which of the following could be the length of the third side of the triangle?",
  "solution": "The third side must be longer than the difference of the other two sides (10 − 7 = 3) and shorter than their sum (10 + 7 = 17). Only 16 falls strictly between 3 and 17. (3 itself fails: the 'triangle' would collapse into a segment.)",
  "choices": [
   "3",
   "18",
   "16",
   "2"
  ],
  "answerIndex": 2
 },
 {
  "id": "geo-039",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Area and volume",
  "difficulty": 2,
  "level": 2,
  "type": "grid",
  "stimulus": "A cone has a radius of 3 units and a height of 8 units. Its volume can be written as kπ cubic units, where k is a constant.",
  "question": "What is the value of k?",
  "solution": "Volume of a cone = (1/3)πr²h = (1/3)π(3²)(8) = (1/3)π(72) = 24π, so k = 24.",
  "choices": null,
  "answerValue": "24"
 },
 {
  "id": "geo-040",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Area and volume",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "A cube has edges of length 5 units.",
  "question": "What is the surface area, in square units, of the cube?",
  "solution": "A cube has 6 identical square faces. Each face has area 5² = 25, so the surface area is 6 × 25 = 150 square units.",
  "choices": [
   "75",
   "150",
   "100",
   "125"
  ],
  "answerIndex": 1
 },
 {
  "id": "geo-041",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Area and volume",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "Two rectangles are similar. The ratio of a side of the smaller rectangle to the corresponding side of the larger rectangle is 2 to 3. The area of the smaller rectangle is 20 square units.",
  "question": "What is the area, in square units, of the larger rectangle?",
  "solution": "Areas of similar figures scale with the square of the linear scale factor. The linear factor from small to large is 3/2, so the area factor is (3/2)² = 9/4. The larger area is 20 × 9/4 = 45 square units. Watch out: 30 uses the linear factor only once.",
  "choices": [
   "40",
   "45",
   "30",
   "60"
  ],
  "answerIndex": 1
 },
 {
  "id": "geo-042",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Area and volume",
  "difficulty": 2,
  "level": 2,
  "type": "grid",
  "stimulus": "A house-shaped figure consists of a rectangle 10 units wide and 6 units tall, with a triangle on top of the rectangle. The triangle has a base of 10 units (the full width of the rectangle) and a height of 4 units.",
  "question": "What is the total area, in square units, of the figure?",
  "solution": "Rectangle area = 10 × 6 = 60. Triangle area = (1/2)(10)(4) = 20. Total = 60 + 20 = 80 square units.",
  "choices": null,
  "answerValue": "80"
 },
 {
  "id": "geo-043",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Area and volume",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "A rectangular garden measures 20 feet by 15 feet. A square patio with side length 5 feet is built in one corner of the garden, covering part of the garden.",
  "question": "What is the area, in square feet, of the part of the garden not covered by the patio?",
  "solution": "Garden area = 20 × 15 = 300 square feet. Patio area = 5² = 25 square feet. Uncovered area = 300 − 25 = 275 square feet.",
  "choices": [
   "250",
   "300",
   "275",
   "295"
  ],
  "answerIndex": 2
 },
 {
  "id": "geo-044",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Area and volume",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "A triangular prism has a triangular base that is a right triangle with legs of length 6 units and 8 units. The length of the prism (the distance between the two triangular faces) is 10 units.",
  "question": "What is the volume, in cubic units, of the prism?",
  "solution": "Volume = (area of triangular base) × length. The base area is (1/2)(6)(8) = 24, so the volume is 24 × 10 = 240 cubic units.",
  "choices": [
   "240",
   "96",
   "480",
   "120"
  ],
  "answerIndex": 0
 },
 {
  "id": "geo-045",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Area and volume",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "A flat ring (annulus) is the region between two concentric circles. The outer circle has a radius of 7 units, and the inner circle has a radius of 4 units.",
  "question": "What is the area, in square units, of the ring?",
  "solution": "Subtract the inner circle's area from the outer circle's area: π(7²) − π(4²) = 49π − 16π = 33π square units.",
  "choices": [
   "49π",
   "33π",
   "11π",
   "65π"
  ],
  "answerIndex": 1
 },
 {
  "id": "geo-046",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Area and volume",
  "difficulty": 2,
  "level": 2,
  "type": "grid",
  "stimulus": "A fish tank has a length of 2 feet, a width of 1.5 feet, and a height of 1 foot. (1 foot = 12 inches.)",
  "question": "What is the volume, in cubic inches, of the tank?",
  "solution": "First find the volume in cubic feet: 2 × 1.5 × 1 = 3 cubic feet. Each cubic foot is 12³ = 1,728 cubic inches, so the volume is 3 × 1,728 = 5,184 cubic inches. Watch out: the conversion factor is cubed too — multiplying by 12 only once is the classic error.",
  "choices": null,
  "answerValue": "5184"
 },
 {
  "id": "geo-047",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Right triangles and trigonometry",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "In a right triangle, one of the acute angles measures 30° and the hypotenuse has length 14 units.",
  "question": "What is the length, in units, of the side opposite the 30° angle?",
  "solution": "In a 30°-60°-90° triangle, the side opposite the 30° angle is half the hypotenuse: 14 ÷ 2 = 7 units. (Equivalently, sin 30° = 1/2.)",
  "choices": [
   "28",
   "14",
   "7√3",
   "7"
  ],
  "answerIndex": 3
 },
 {
  "id": "geo-048",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Right triangles and trigonometry",
  "difficulty": 2,
  "level": 2,
  "type": "grid",
  "stimulus": "In right triangle PQR, the right angle is at vertex Q. cos P = 4/5, and the hypotenuse PR has length 30.",
  "question": "What is the length of side PQ?",
  "solution": "Side PQ is adjacent to angle P. Cosine is adjacent over hypotenuse: 4/5 = PQ/30, so PQ = (4/5)(30) = 24.",
  "choices": null,
  "answerValue": "24"
 },
 {
  "id": "geo-049",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Right triangles and trigonometry",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "A ladder 15 feet long leans against a vertical wall. The base of the ladder is 9 feet from the wall, and the top of the ladder touches the wall.",
  "question": "How many feet above the ground does the top of the ladder reach?",
  "solution": "The ladder, wall, and ground form a right triangle with hypotenuse 15. By the Pythagorean theorem, height² + 9² = 15², so height² = 225 − 81 = 144 and the height is 12 feet.",
  "choices": [
   "18",
   "24",
   "12",
   "6"
  ],
  "answerIndex": 2
 },
 {
  "id": "geo-050",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Right triangles and trigonometry",
  "difficulty": 2,
  "level": 2,
  "type": "grid",
  "stimulus": "",
  "question": "What is the distance, in units, between the points (1, 2) and (7, 10) in the xy-plane?",
  "solution": "The horizontal change is 7 − 1 = 6 and the vertical change is 10 − 2 = 8. By the Pythagorean theorem, the distance is √(6² + 8²) = √100 = 10 units.",
  "choices": null,
  "answerValue": "10"
 },
 {
  "id": "geo-051",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Right triangles and trigonometry",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "A right triangle is isosceles, and its hypotenuse has length 12 units.",
  "question": "What is the length, in units, of each leg of the triangle?",
  "solution": "In a 45°-45°-90° triangle the hypotenuse is leg × √2, so the leg is 12/√2 = 6√2 units (rationalizing: 12√2/2).",
  "choices": [
   "6",
   "6√2",
   "12√2",
   "12"
  ],
  "answerIndex": 1
 },
 {
  "id": "geo-052",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Right triangles and trigonometry",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "In a 30°-60°-90° triangle, the hypotenuse has length 16 units.",
  "question": "What is the length, in units, of the side opposite the 60° angle?",
  "solution": "The side opposite the 30° angle is half the hypotenuse: 16 ÷ 2 = 8. The side opposite the 60° angle is that side times √3: 8√3 units.",
  "choices": [
   "8",
   "16√3",
   "4√3",
   "8√3"
  ],
  "answerIndex": 3
 },
 {
  "id": "geo-053",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Right triangles and trigonometry",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "In a right triangle, the side opposite angle R has length 20, the side adjacent to angle R has length 21, and the hypotenuse has length 29.",
  "question": "What is the value of tan R?",
  "solution": "Tangent is opposite over adjacent: tan R = 20/21.",
  "choices": [
   "21/20",
   "20/21",
   "21/29",
   "20/29"
  ],
  "answerIndex": 1
 },
 {
  "id": "geo-054",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Right triangles and trigonometry",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "A building casts a shadow 30 feet long on level ground. The angle of elevation from the tip of the shadow to the top of the building is 60°.",
  "question": "How tall, in feet, is the building?",
  "solution": "The building's height is opposite the 60° angle and the shadow is the adjacent side: tan 60° = height/30. Since tan 60° = √3, the height is 30√3 feet.",
  "choices": [
   "30",
   "60",
   "10√3",
   "30√3"
  ],
  "answerIndex": 3
 },
 {
  "id": "geo-055",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Circles",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "A circle in the xy-plane has center (−2, 4) and radius 5.",
  "question": "Which of the following is an equation of the circle?",
  "solution": "The standard form is (x − h)² + (y − k)² = r² with center (h, k) = (−2, 4) and r = 5: (x + 2)² + (y − 4)² = 25. Note that the right side is r² = 25, not 5, and each coordinate's sign flips because the form subtracts h and k.",
  "choices": [
   "(x − 2)² + (y + 4)² = 25",
   "(x + 2)² + (y − 4)² = 25",
   "(x + 2)² + (y − 4)² = 5",
   "(x − 2)² + (y − 4)² = 25"
  ],
  "answerIndex": 1
 },
 {
  "id": "geo-056",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Circles",
  "difficulty": 2,
  "level": 2,
  "type": "grid",
  "stimulus": "A circle in the xy-plane is represented by the equation x² + y² − 6x + 4y = 12.",
  "question": "What is the radius of the circle?",
  "solution": "Complete the square: (x² − 6x + 9) + (y² + 4y + 4) = 12 + 9 + 4, giving (x − 3)² + (y + 2)² = 25. So r² = 25 and the radius is 5.",
  "choices": null,
  "answerValue": "5"
 },
 {
  "id": "geo-057",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Circles",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "An arc of a circle with radius 4 units is intercepted by a central angle that measures 3π/2 radians.",
  "question": "What is the length of the arc?",
  "solution": "With the angle in radians, arc length is s = rθ = 4 × (3π/2) = 6π units.",
  "choices": [
   "12π",
   "3π",
   "8π",
   "6π"
  ],
  "answerIndex": 3
 },
 {
  "id": "geo-058",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Circles",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "A sector of a circle with radius 9 units is formed by a central angle of 120°.",
  "question": "What is the area, in square units, of the sector?",
  "solution": "The sector is 120/360 = 1/3 of the circle. The full area is π(9²) = 81π, so the sector area is (1/3)(81π) = 27π square units.",
  "choices": [
   "9π",
   "27π",
   "54π",
   "81π"
  ],
  "answerIndex": 1
 },
 {
  "id": "geo-059",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Circles",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "An arc of a circle measures 130°. An inscribed angle intercepts the arc.",
  "question": "What is the measure, in degrees, of the inscribed angle?",
  "solution": "An inscribed angle has half the measure of its intercepted arc: 130 ÷ 2 = 65°.",
  "choices": [
   "260",
   "50",
   "65",
   "130"
  ],
  "answerIndex": 2
 },
 {
  "id": "geo-060",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Circles",
  "difficulty": 2,
  "level": 2,
  "type": "grid",
  "stimulus": "A line is tangent to a circle at point T. The center of the circle is O, the radius OT has length 5, and point P outside the circle lies on the tangent line. The distance from P to the center O is 13.",
  "question": "What is the length of segment PT?",
  "solution": "A radius to a point of tangency is perpendicular to the tangent line, so triangle OTP is right at T. By the Pythagorean theorem, PT² + 5² = 13², so PT² = 169 − 25 = 144 and PT = 12.",
  "choices": null,
  "answerValue": "12"
 },
 {
  "id": "geo-061",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Circles",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "Points A, B, and C lie on a circle. Segment AB is a diameter of the circle.",
  "question": "What is the measure, in degrees, of angle ACB?",
  "solution": "An angle inscribed in a semicircle is a right angle. Angle ACB intercepts the diameter, which spans a 180° arc, so the angle measures 180 ÷ 2 = 90°.",
  "choices": [
   "90",
   "180",
   "45",
   "60"
  ],
  "answerIndex": 0
 },
 {
  "id": "geo-062",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Lines, angles, and triangles",
  "difficulty": 3,
  "level": 3,
  "type": "grid",
  "stimulus": "Two triangles are similar. A side of length x + 2 in one triangle corresponds to a side of length 12 in the other triangle, and a side of length 6 in the first triangle corresponds to a side of length 9 in the second triangle.",
  "question": "What is the value of x?",
  "solution": "Corresponding sides are proportional: (x + 2)/12 = 6/9 = 2/3. So x + 2 = 12 × (2/3) = 8, and x = 6.",
  "choices": null,
  "answerValue": "6"
 },
 {
  "id": "geo-063",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Lines, angles, and triangles",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "Two similar triangles have corresponding side lengths in a ratio of 3 to 5 (smaller to larger). The area of the smaller triangle is 27 square units.",
  "question": "What is the area, in square units, of the larger triangle?",
  "solution": "Areas scale with the square of the linear ratio: (5/3)² = 25/9. The larger area is 27 × 25/9 = 75 square units. Watch out: 45 multiplies by the linear ratio 5/3 only once.",
  "choices": [
   "45",
   "81",
   "75",
   "125"
  ],
  "answerIndex": 2
 },
 {
  "id": "geo-064",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Lines, angles, and triangles",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "In triangles ABC and DEF, the measure of angle A equals the measure of angle D, and the measure of angle B equals the measure of angle E.",
  "question": "Which of the following additional pieces of information would be sufficient to prove that triangle ABC is congruent to triangle DEF?",
  "solution": "Two angles of one triangle equal to two angles of another prove the triangles are similar, not congruent — a size condition is still needed. Side AB is the side included between angles A and B, and DE is the side included between angles D and E; if those included sides are equal, the triangles are congruent by the ASA postulate. The other choices pair sides that do not correspond, or restate an angle equality that is already forced by the two given ones.",
  "choices": [
   "Side AB has the same length as side DE.",
   "Side AC has the same length as side DE.",
   "Side BC has the same length as side DF.",
   "Angle C has the same measure as angle F."
  ],
  "answerIndex": 0
 },
 {
  "id": "geo-065",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Lines, angles, and triangles",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "In isosceles triangle VWX, sides VW and VX are equal, so the base is WX and the base angles at W and X have equal measures. The exterior angle at vertex V measures 130°.",
  "question": "What is the measure, in degrees, of each base angle?",
  "solution": "An exterior angle equals the sum of the two remote interior angles — here, the two base angles. They are equal and sum to 130°, so each measures 130 ÷ 2 = 65°.",
  "choices": [
   "25",
   "50",
   "130",
   "65"
  ],
  "answerIndex": 3
 },
 {
  "id": "geo-066",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Lines, angles, and triangles",
  "difficulty": 3,
  "level": 3,
  "type": "grid",
  "stimulus": "Two parallel lines are cut by a transversal. Two same-side interior angles formed measure (2x + 40)° and (4x + 20)°.",
  "question": "What is the value of x?",
  "solution": "Same-side interior angles formed by parallel lines are supplementary: (2x + 40) + (4x + 20) = 180. So 6x + 60 = 180, 6x = 120, and x = 20.",
  "choices": null,
  "answerValue": "20"
 },
 {
  "id": "geo-067",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Lines, angles, and triangles",
  "difficulty": 3,
  "level": 3,
  "type": "grid",
  "stimulus": "",
  "question": "Each exterior angle of a regular polygon measures 24°. How many sides does the polygon have?",
  "solution": "The exterior angles of any polygon sum to 360°. The number of sides is 360 ÷ 24 = 15.",
  "choices": null,
  "answerValue": "15"
 },
 {
  "id": "geo-068",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Lines, angles, and triangles",
  "difficulty": 3,
  "level": 3,
  "type": "grid",
  "stimulus": "The measures of the three angles of a triangle are x°, 2x°, and (x + 30)°.",
  "question": "What is the value of x?",
  "solution": "The measures sum to 180°: x + 2x + (x + 30) = 180, so 4x + 30 = 180, 4x = 150, and x = 37.5.",
  "choices": null,
  "answerValue": "37.5"
 },
 {
  "id": "geo-069",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Lines, angles, and triangles",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "Two sides of a triangle have lengths 9 and 14.",
  "question": "How many integer values are possible for the length of the third side of the triangle?",
  "solution": "The third side must be longer than 14 − 9 = 5 and shorter than 14 + 9 = 23. The possible integer lengths are 6 through 22, which is 22 − 6 + 1 = 17 values.",
  "choices": [
   "23",
   "17",
   "16",
   "18"
  ],
  "answerIndex": 1
 },
 {
  "id": "geo-070",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Area and volume",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "Two similar solids have corresponding lengths in a ratio of 1 to 3 (smaller to larger). The surface area of the smaller solid is 50 square units.",
  "question": "What is the surface area, in square units, of the larger solid?",
  "solution": "Surface areas scale with the square of the linear ratio: 3² = 9. The larger surface area is 50 × 9 = 450 square units. Watch out: 150 uses the linear ratio, and 1,350 uses the cube (that is for volumes).",
  "choices": [
   "300",
   "150",
   "450",
   "1350"
  ],
  "answerIndex": 2
 },
 {
  "id": "geo-071",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Area and volume",
  "difficulty": 3,
  "level": 3,
  "type": "grid",
  "stimulus": "A storage silo is made of a cylinder with radius 3 units and height 10 units, topped by a hemisphere of radius 3 units. The volume of the silo can be written as kπ cubic units, where k is a constant.",
  "question": "What is the value of k?",
  "solution": "Cylinder volume = πr²h = π(3²)(10) = 90π. Hemisphere volume = (1/2)(4/3)πr³ = (2/3)π(27) = 18π. Total = 90π + 18π = 108π, so k = 108.",
  "choices": null,
  "answerValue": "108"
 },
 {
  "id": "geo-072",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Area and volume",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "A sphere fits exactly inside a cube with edges of length 6 units, touching every face of the cube.",
  "question": "What is the volume, in cubic units, of the sphere?",
  "solution": "Because the sphere touches every face, its diameter equals the edge of the cube: the diameter is 6, so the radius is 3. Volume = (4/3)πr³ = (4/3)π(27) = 36π cubic units.",
  "choices": [
   "48π",
   "36π",
   "144π",
   "288π"
  ],
  "answerIndex": 1
 },
 {
  "id": "geo-073",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Area and volume",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "A circle is inscribed in a square with side length 10 units, so the circle touches all four sides of the square. The region of the square outside the circle is shaded.",
  "question": "What is the area, in square units, of the shaded region?",
  "solution": "The square's area is 10² = 100. The inscribed circle has diameter 10, so its radius is 5 and its area is π(5²) = 25π. The shaded area is 100 − 25π square units.",
  "choices": [
   "75π",
   "100 − 100π",
   "100 − 50π",
   "100 − 25π"
  ],
  "answerIndex": 3
 },
 {
  "id": "geo-074",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Area and volume",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "A rectangular box has a volume of 45 cubic units. A second box is built so that every dimension (length, width, and height) is twice the corresponding dimension of the first box.",
  "question": "What is the volume, in cubic units, of the second box?",
  "solution": "Doubling all three dimensions multiplies the volume by 2 × 2 × 2 = 8. The new volume is 45 × 8 = 360 cubic units. Watch out: 90 doubles only once — volume responds to all three dimensions.",
  "choices": [
   "90",
   "360",
   "180",
   "720"
  ],
  "answerIndex": 1
 },
 {
  "id": "geo-075",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Area and volume",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "A solid metal cube has edges of length 4 centimeters and a mass of 512 grams.",
  "question": "What is the density, in grams per cubic centimeter, of the metal?",
  "solution": "The cube's volume is 4³ = 64 cubic centimeters. Density = mass ÷ volume = 512 ÷ 64 = 8 grams per cubic centimeter.",
  "choices": [
   "4",
   "16",
   "128",
   "8"
  ],
  "answerIndex": 3
 },
 {
  "id": "geo-076",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Area and volume",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "A rectangular prism has a length of 3 units, a width of 4 units, and a height of 5 units.",
  "question": "What is the surface area, in square units, of the prism?",
  "solution": "Surface area = 2(lw + lh + wh) = 2(3·4 + 3·5 + 4·5) = 2(12 + 15 + 20) = 2(47) = 94 square units.",
  "choices": [
   "47",
   "120",
   "60",
   "94"
  ],
  "answerIndex": 3
 },
 {
  "id": "geo-077",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Right triangles and trigonometry",
  "difficulty": 3,
  "level": 3,
  "type": "grid",
  "stimulus": "",
  "question": "If sin(3x°) = cos(27°), what is the value of x?",
  "solution": "Sine and cosine of complementary angles are equal, so the angles must sum to 90°: 3x + 27 = 90. Then 3x = 63 and x = 21.",
  "choices": null,
  "answerValue": "21"
 },
 {
  "id": "geo-078",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Right triangles and trigonometry",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "In a right triangle, sin A = 5/13, where A is an acute angle of the triangle.",
  "question": "What is the value of cos A?",
  "solution": "If sin A = 5/13, take the side opposite A as 5 and the hypotenuse as 13. The adjacent side is √(13² − 5²) = √144 = 12. So cos A = adjacent/hypotenuse = 12/13.",
  "choices": [
   "5/12",
   "12/13",
   "13/12",
   "12/5"
  ],
  "answerIndex": 1
 },
 {
  "id": "geo-079",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Right triangles and trigonometry",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "In a right triangle, one acute angle measures 60°. The side adjacent to the 60° angle has length 10 units.",
  "question": "What is the length, in units, of the hypotenuse?",
  "solution": "Cosine is adjacent over hypotenuse: cos 60° = 10/hypotenuse. Since cos 60° = 1/2, hypotenuse = 10 ÷ (1/2) = 20 units.",
  "choices": [
   "5",
   "20",
   "40",
   "10√3"
  ],
  "answerIndex": 1
 },
 {
  "id": "geo-080",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Right triangles and trigonometry",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "From the top of a 60-foot building, the angle of depression to a car on the level street below measures 30°.",
  "question": "How many feet from the base of the building is the car?",
  "solution": "The angle of depression equals the angle of elevation from the car (alternate interior angles), so tan 30° = 60/distance. Since tan 30° = 1/√3, distance = 60√3 feet.",
  "choices": [
   "60",
   "60√3",
   "30√3",
   "120"
  ],
  "answerIndex": 1
 },
 {
  "id": "geo-081",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Right triangles and trigonometry",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "A right triangle has legs of length 4 units and 7 units.",
  "question": "What is the length, in units, of the hypotenuse of the triangle?",
  "solution": "By the Pythagorean theorem, hypotenuse² = 4² + 7² = 16 + 49 = 65, so the hypotenuse is √65 units. Not every Pythagorean answer is a whole number — leave it in radical form.",
  "choices": [
   "√65",
   "11",
   "65",
   "√33"
  ],
  "answerIndex": 0
 },
 {
  "id": "geo-082",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Right triangles and trigonometry",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "A square has sides of length 8 units.",
  "question": "What is the length, in units, of a diagonal of the square?",
  "solution": "A diagonal splits the square into two 45°-45°-90° triangles, so the diagonal is the side times √2: 8√2 units.",
  "choices": [
   "4√2",
   "8√2",
   "16",
   "8"
  ],
  "answerIndex": 1
 },
 {
  "id": "geo-083",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Right triangles and trigonometry",
  "difficulty": 3,
  "level": 3,
  "type": "grid",
  "stimulus": "In right triangle ABC, the right angle is at vertex C, and tan A = 1.",
  "question": "What is the measure, in degrees, of angle A?",
  "solution": "Tangent is opposite over adjacent. tan A = 1 means the legs are equal, so the triangle is isosceles right and its acute angles each measure 45°.",
  "choices": null,
  "answerValue": "45"
 },
 {
  "id": "geo-084",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Right triangles and trigonometry",
  "difficulty": 3,
  "level": 3,
  "type": "grid",
  "stimulus": "A rectangular box has a length of 3 units, a width of 4 units, and a height of 12 units.",
  "question": "What is the length, in units, of the longest segment that fits inside the box (the segment joining two opposite corners of the box)?",
  "solution": "Apply the Pythagorean theorem twice. The diagonal of the 3-by-4 base is √(3² + 4²) = 5. Then the space diagonal is √(5² + 12²) = √169 = 13 units.",
  "choices": null,
  "answerValue": "13"
 },
 {
  "id": "geo-085",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Circles",
  "difficulty": 3,
  "level": 3,
  "type": "grid",
  "stimulus": "A circle in the xy-plane is represented by the equation x² + y² + 8x − 10y + 32 = 0.",
  "question": "What is the radius of the circle?",
  "solution": "Complete the square: (x² + 8x + 16) + (y² − 10y + 25) = −32 + 16 + 25, giving (x + 4)² + (y − 5)² = 9. So r² = 9 and the radius is 3.",
  "choices": null,
  "answerValue": "3"
 },
 {
  "id": "geo-086",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Circles",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "A circle in the xy-plane has center (1, −2) and radius 5.",
  "question": "Which of the following points lies on the circle?",
  "solution": "A point lies on the circle when its distance from the center equals 5, i.e., when (x − 1)² + (y + 2)² = 25. For (4, 2): (4 − 1)² + (2 + 2)² = 9 + 16 = 25. The other points give 16, 16, and 9 — all inside the circle.",
  "choices": [
   "(1, 2)",
   "(4, 2)",
   "(−2, −2)",
   "(5, −2)"
  ],
  "answerIndex": 1
 },
 {
  "id": "geo-087",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Circles",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "An arc of a circle with radius 8 units has a length of 6π units.",
  "question": "What is the radian measure of the central angle that intercepts the arc?",
  "solution": "Arc length is s = rθ, so θ = s/r = 6π/8 = 3π/4 radians.",
  "choices": [
   "3π/4",
   "4π/3",
   "π/4",
   "3π/2"
  ],
  "answerIndex": 0
 },
 {
  "id": "geo-088",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Circles",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "A circle has an area of 200π square units. A sector of the circle is formed by a central angle of 72°.",
  "question": "What is the area, in square units, of the sector?",
  "solution": "The sector is 72/360 = 1/5 of the circle, so its area is (1/5)(200π) = 40π square units.",
  "choices": [
   "50π",
   "144π",
   "40π",
   "200π"
  ],
  "answerIndex": 2
 },
 {
  "id": "geo-089",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Circles",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "Two tangent lines are drawn to a circle from a single point outside the circle. The two radii to the points of tangency form a central angle of 110°.",
  "question": "What is the measure, in degrees, of the angle formed by the two tangent lines?",
  "solution": "Each radius meets its tangent line at a right angle, so the quadrilateral formed by the two radii, the two tangent segments, and the external point has angles 110°, 90°, 90°, and the unknown. The unknown measures 360 − 110 − 90 − 90 = 70°. (In general, the angle between two tangents is supplementary to the central angle.)",
  "choices": [
   "55",
   "70",
   "110",
   "290"
  ],
  "answerIndex": 1
 },
 {
  "id": "geo-090",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Circles",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "An inscribed angle of a circle measures (2x + 10)°. The inscribed angle intercepts an arc that measures 100°.",
  "question": "What is the value of x?",
  "solution": "An inscribed angle is half its intercepted arc: 2x + 10 = 100 ÷ 2 = 50. So 2x = 40 and x = 20.",
  "choices": [
   "25",
   "20",
   "45",
   "40"
  ],
  "answerIndex": 1
 },
 {
  "id": "geo-091",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Circles",
  "difficulty": 3,
  "level": 3,
  "type": "grid",
  "stimulus": "A chord of a circle with radius 10 units is 6 units from the center of the circle.",
  "question": "What is the length, in units, of the chord?",
  "solution": "The segment from the center perpendicular to the chord bisects the chord, forming a right triangle with hypotenuse 10 (a radius) and one leg 6. The other leg — half the chord — is √(10² − 6²) = √64 = 8. So the chord is 2 × 8 = 16 units.",
  "choices": null,
  "answerValue": "16"
 },
 {
  "id": "geo-092",
  "section": "Math",
  "domain": "Geometry and Trigonometry",
  "topic": "Circles",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "",
  "question": "An angle measures 7π/6 radians. What is the measure of the angle, in degrees?",
  "solution": "Convert with the factor 180° = π radians: (7π/6) × (180/π) = 7 × 30 = 210°.",
  "choices": [
   "150",
   "270",
   "210",
   "300"
  ],
  "answerIndex": 2
 },
 {
  "id": "sec-001",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Form, Structure, and Sense",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "The basket of ripe peaches ______ on the kitchen counter.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: The verb must agree with the subject head, not with a noun inside an intervening prepositional phrase. The subject head here is 'basket' (singular), so the verb must be singular and present-tense to match the stative present frame. A) sit — wrong: plural form; 'peaches' is inside a prepositional phrase and is not the subject. B) are sitting — wrong: plural progressive form; the subject is singular. C) have sat — wrong: plural perfect form ('have' takes a plural subject here); the subject is singular. D) sits — correct: singular present-tense form agreeing with 'basket.'",
  "choices": [
   "sit",
   "are sitting",
   "have sat",
   "sits"
  ],
  "answerIndex": 3
 },
 {
  "id": "sec-002",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Form, Structure, and Sense",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "The volunteers at the animal shelter ______ every Saturday morning.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: The subject 'volunteers' is plural, and 'every Saturday morning' sets a habitual present frame, so the verb must be the plural present form. A) walking the dogs — wrong: a participle with no auxiliary verb cannot serve as the main verb. B) walked the dogs — wrong: past tense clashes with the habitual present frame ('every Saturday morning'). C) walk the dogs — correct: plural present form agreeing with 'volunteers' in the habitual frame set by 'every Saturday morning.' D) walks the dogs — wrong: singular form; the subject is plural.",
  "choices": [
   "walking the dogs",
   "walked the dogs",
   "walk the dogs",
   "walks the dogs"
  ],
  "answerIndex": 2
 },
 {
  "id": "sec-003",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Form, Structure, and Sense",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "Each of the novels in the trilogy ______ a different narrator.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: 'Each' is a singular indefinite pronoun; a prepositional phrase after it does not change its number, so the verb must be singular. A) were — wrong: plural past form; wrong number and no past-time anchor exists. B) has — correct: singular present form agreeing with 'Each.' C) have — wrong: plural form; 'novels' is inside a prepositional phrase. D) are — wrong: plural form; the subject 'Each' is singular.",
  "choices": [
   "were",
   "has",
   "have",
   "are"
  ],
  "answerIndex": 1
 },
 {
  "id": "sec-004",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Form, Structure, and Sense",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "The band director and the choir teacher ______ a joint concert each spring.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: Two subjects joined by 'and' form a plural subject, so the verb must be plural; 'each spring' sets a habitual present frame. A) plan — correct: plural present form for the compound subject in a habitual present frame. B) plans — wrong: singular form; a compound subject joined by 'and' is plural. C) planning — wrong: a participle alone cannot be the main verb. D) planned — wrong: past tense clashes with 'each spring.'",
  "choices": [
   "plan",
   "plans",
   "planning",
   "planned"
  ],
  "answerIndex": 0
 },
 {
  "id": "sec-005",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Form, Structure, and Sense",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "The science museum announced that ______ newest exhibit would open in March.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: The blank needs a possessive determiner for the singular antecedent 'museum.' 'Its' is the possessive form; 'it's' means 'it is.' A) their — wrong: plural possessive; the antecedent is singular. B) it's — wrong: a contraction of 'it is,' which cannot modify 'exhibit.' C) they're — wrong: a contraction of 'they are,' wrong in both form and number. D) its — correct: possessive form matching the singular antecedent 'museum.'",
  "choices": [
   "their",
   "it's",
   "they're",
   "its"
  ],
  "answerIndex": 3
 },
 {
  "id": "sec-006",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Form, Structure, and Sense",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "After the final rehearsal, the dancers hung ______ costumes in the dressing room.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: The antecedent 'dancers' is plural, so the possessive pronoun must be plural. A) his or her — wrong: singular phrasing; the antecedent is plural. B) our — wrong: first-person plural; the text is third-person throughout. C) their — correct: plural possessive matching 'dancers.' D) its — wrong: singular possessive; the antecedent is plural.",
  "choices": [
   "his or her",
   "our",
   "their",
   "its"
  ],
  "answerIndex": 2
 },
 {
  "id": "sec-007",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Form, Structure, and Sense",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "Yesterday afternoon, the city council met and ______ a new budget.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: The anchor verb 'met' and the time marker 'Yesterday afternoon' put the sentence in the past, and the coordinated verb must match. A) will approve — wrong: future tense clashes with 'Yesterday afternoon.' B) approved — correct: simple past form matching 'met' and 'Yesterday afternoon.' C) approves — wrong: present tense clashes with the past-time frame. D) approving — wrong: a participle alone cannot be the main verb.",
  "choices": [
   "will approve",
   "approved",
   "approves",
   "approving"
  ],
  "answerIndex": 1
 },
 {
  "id": "sec-008",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Form, Structure, and Sense",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "Every morning, the ferry ______ the harbor promptly at six.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: 'Every morning' sets a habitual present frame, so the verb must be simple present, singular to agree with 'ferry.' A) leaves — correct: singular simple present form matching the habitual frame. B) left — wrong: past tense clashes with 'Every morning.' C) leaving — wrong: a participle alone cannot be the main verb. D) will have left — wrong: future perfect clashes with the habitual present frame.",
  "choices": [
   "leaves",
   "left",
   "leaving",
   "will have left"
  ],
  "answerIndex": 0
 },
 {
  "id": "sec-009",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Form, Structure, and Sense",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "By the time we reached the theater, the play ______ already begun.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: 'By the time we reached' (past) requires the earlier action to be in the past perfect, formed with 'had.' A) has — wrong: present perfect clashes with the past anchor. B) will — wrong: 'will' forms a future, clashing with the past anchor. C) is — wrong: present tense clashes with the past anchor. D) had — correct: 'had' forms the past perfect, placing the beginning before the past anchor 'reached.'",
  "choices": [
   "has",
   "will",
   "is",
   "had"
  ],
  "answerIndex": 3
 },
 {
  "id": "sec-010",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Form, Structure, and Sense",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "The courthouse bell ______ at noon every day.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: The phrase 'every day' sets a habitual present frame; the singular subject 'bell' takes the -s form. A) ringing — wrong: a participle alone cannot be the main verb. B) has ringing — wrong: 'has ringing' is not a valid verb form. C) rings — correct: singular simple present form for the daily routine. D) rang — wrong: past tense clashes with 'every day.'",
  "choices": [
   "ringing",
   "has ringing",
   "rings",
   "rang"
  ],
  "answerIndex": 2
 },
 {
  "id": "sec-011",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Form, Structure, and Sense",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "For her triathlon training, Ana swims laps, rides her bike, and ______ three times a week.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: The series lists base present-tense verbs ('swims,' 'rides'), so the third item must be the matching plural-subject-free present form 'runs' — here, the third-person singular present form parallel to the other two. A) runner — wrong: a noun cannot serve as the third verb in the series. B) runs — correct: present-tense verb form parallel to 'swims' and 'rides.' C) running — wrong: a gerund does not match the finite verbs in the series. D) ran — wrong: past tense breaks both parallelism and tense consistency.",
  "choices": [
   "runner",
   "runs",
   "running",
   "ran"
  ],
  "answerIndex": 1
 },
 {
  "id": "sec-012",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Form, Structure, and Sense",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "The workshop teaches participants to draft a résumé, to design a portfolio, and ______ a professional network.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: The first two items in the series are full infinitives ('to draft,' 'to design'), so the third must also be a full infinitive. A) to build — correct: full infinitive parallel to 'to draft' and 'to design.' B) building — wrong: a gerund does not match the infinitives in the series. C) build — wrong: the bare stem drops the 'to' that the first two items carry. D) builder — wrong: a noun cannot complete the verb series.",
  "choices": [
   "to build",
   "building",
   "build",
   "builder"
  ],
  "answerIndex": 0
 },
 {
  "id": "sec-013",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Form, Structure, and Sense",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "His favorite weekend activities are hiking, swimming, and ______ in the mountains.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: The series is built from gerunds ('hiking,' 'swimming'), so the third activity must also be a gerund. A) to camp — wrong: an infinitive does not match the gerunds in the series. B) camp — wrong: a bare verb stem does not match the gerunds. C) camper — wrong: a noun naming a person does not match the activity gerunds. D) camping — correct: gerund parallel to 'hiking' and 'swimming.'",
  "choices": [
   "to camp",
   "camp",
   "camper",
   "camping"
  ],
  "answerIndex": 3
 },
 {
  "id": "sec-014",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Form, Structure, and Sense",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "The job posting asks for patience, accuracy, and ______ in all applicants.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: The series lists abstract nouns ('patience,' 'accuracy'), so the third item must be a noun of the same kind. A) to be careful — wrong: an infinitive phrase does not match the nouns. B) carefully — wrong: an adverb cannot name a quality in the noun series. C) care — correct: abstract noun parallel to 'patience' and 'accuracy.' D) caring — wrong: a gerund shifts the form away from the plain nouns in the series.",
  "choices": [
   "to be careful",
   "carefully",
   "care",
   "caring"
  ],
  "answerIndex": 2
 },
 {
  "id": "sec-015",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Form, Structure, and Sense",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "Walking through the botanical garden, ______",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: An introductory participial phrase must describe the subject of the main clause. Only one completion makes the walker the subject; the others attach the walking to something that cannot walk. A) the butterfly surprised Maria. — wrong: the subject is the butterfly, which cannot walk — dangling modifier. B) Maria spotted a rare butterfly. — correct: the subject, Maria, is the person walking through the garden. C) a rare butterfly was spotted by Maria. — wrong: the subject is the butterfly, which cannot walk through the garden — dangling modifier. D) Maria's attention was caught by a rare butterfly. — wrong: the subject is 'attention,' which cannot walk — dangling modifier.",
  "choices": [
   "the butterfly surprised Maria.",
   "Maria spotted a rare butterfly.",
   "a rare butterfly was spotted by Maria.",
   "Maria's attention was caught by a rare butterfly."
  ],
  "answerIndex": 1
 },
 {
  "id": "sec-016",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Form, Structure, and Sense",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "Covered in a thick layer of dust, ______",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: The introductory phrase 'Covered in a thick layer of dust' must describe the subject of the main clause. A) the old piano sat forgotten in the attic. — correct: the subject, the piano, is what was covered in dust. B) we finally found the old piano in the attic. — wrong: the subject 'we' is not covered in dust — dangling modifier. C) the attic was cleaned by the new owners. — wrong: the subject is the attic, which is not the dust-covered object named — dangling modifier. D) a soft cloth was draped over the old piano. — wrong: the subject is the cloth, which does the covering rather than being covered — dangling modifier.",
  "choices": [
   "the old piano sat forgotten in the attic.",
   "we finally found the old piano in the attic.",
   "the attic was cleaned by the new owners.",
   "a soft cloth was draped over the old piano."
  ],
  "answerIndex": 0
 },
 {
  "id": "sec-017",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Boundaries",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "The salad recipe calls for romaine lettuce, cherry tomatoes ______ and crumbled feta cheese.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: Items in a series of three or more are separated by commas, including a comma before the coordinating conjunction 'and.' A) tomatoes — wrong: with no comma, the final two items are not separated in the series. B) tomatoes; — wrong: a semicolon is too strong between items of a simple series. C) tomatoes — — wrong: a dash does not separate items in a standard series. D) tomatoes, — correct: a comma separates the second series item from 'and' plus the final item.",
  "choices": [
   "tomatoes",
   "tomatoes;",
   "tomatoes —",
   "tomatoes,"
  ],
  "answerIndex": 3
 },
 {
  "id": "sec-018",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Boundaries",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "My uncle, who lives in Denver ______ visits us every summer.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: The clause 'who lives in Denver' is nonrestrictive and was opened with a comma, so it must be closed with a comma before the main verb. A) Denver; — wrong: a semicolon cannot appear inside a single clause. B) Denver — — wrong: a closing mark must match the opening comma; a dash does not match. C) Denver, — correct: a comma closes the nonrestrictive clause that a comma opened. D) Denver — wrong: with no punctuation, the nonrestrictive clause is left unclosed.",
  "choices": [
   "Denver;",
   "Denver —",
   "Denver,",
   "Denver"
  ],
  "answerIndex": 2
 },
 {
  "id": "sec-019",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Boundaries",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "The rain finally stopped ______ the clouds drifted away to the east.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: Two independent clauses with no conjunction must be joined by a semicolon (or a period); a comma alone creates a comma splice, and no punctuation creates a run-on. A) stopped: — wrong: a colon is used to introduce a list or explanation, not to join two equal clauses here. B) stopped; — correct: a semicolon joins the two independent clauses. C) stopped, — wrong: a comma alone between independent clauses is a comma splice. D) stopped — wrong: no punctuation between independent clauses is a run-on.",
  "choices": [
   "stopped:",
   "stopped;",
   "stopped,",
   "stopped"
  ],
  "answerIndex": 1
 },
 {
  "id": "sec-020",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Boundaries",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "The survival kit contains everything a hiker might need ______ a tent, a stove, and a first-aid kit.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: A colon introduces a list when it follows a complete independent clause. A) need: — correct: a colon follows the independent clause and introduces the list. B) need; — wrong: a semicolon joins clauses; it does not introduce a list. C) need, — wrong: a comma alone cannot introduce a list after a complete clause in this construction. D) need — wrong: with no punctuation, the list runs into the clause without a proper boundary.",
  "choices": [
   "need:",
   "need;",
   "need,",
   "need"
  ],
  "answerIndex": 0
 },
 {
  "id": "sec-021",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Boundaries",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "The garden was lush and green ______ visitors lingered among the flower beds until dusk.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: When a coordinating conjunction ('and') joins two independent clauses, a comma precedes the conjunction. A) green; and — wrong: a semicolon is not used together with a coordinating conjunction in this way. B) green and — wrong: with no comma, the conjunction joins two independent clauses without the required comma. C) green — and — wrong: a dash does not pair with 'and' to join clauses. D) green, and — correct: a comma plus 'and' joins the two independent clauses.",
  "choices": [
   "green; and",
   "green and",
   "green — and",
   "green, and"
  ],
  "answerIndex": 3
 },
 {
  "id": "sec-022",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Boundaries",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "After the long hike ______ the climbers rested at the summit.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: A comma follows an introductory prepositional phrase before the main clause begins. A) hike — wrong: with no comma, the introductory phrase is not set off from the main clause. B) hike: — wrong: a colon does not follow an introductory phrase. C) hike, — correct: a comma marks the end of the introductory phrase. D) hike; — wrong: a semicolon cannot appear between an introductory phrase and its clause.",
  "choices": [
   "hike",
   "hike:",
   "hike,",
   "hike;"
  ],
  "answerIndex": 2
 },
 {
  "id": "sec-023",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Form, Structure, and Sense",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "On the top shelf of the bookcase ______ a porcelain vase and two framed photographs.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: In an inverted sentence the verb precedes its subject. The subject here — 'a porcelain vase and two framed photographs' — is compound and plural, so the verb must be plural. A) stands — wrong: singular form; the compound subject is plural. B) are — correct: plural present form agreeing with the compound subject that follows the blank. C) is — wrong: singular form; the compound subject is plural. D) has been — wrong: singular perfect form; the compound subject is plural.",
  "choices": [
   "stands",
   "are",
   "is",
   "has been"
  ],
  "answerIndex": 1
 },
 {
  "id": "sec-024",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Boundaries",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "The library extended its evening hours ______ more students could study after dinner.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: The second clause states the result of the first. Two independent clauses are correctly joined by a comma plus the coordinating conjunction 'so.' A) hours, so — correct: comma + 'so' joins the clauses and marks the result relationship. B) hours so — wrong: a conjunction joining two independent clauses requires a comma before it. C) hours, but — wrong: 'but' signals contrast, but the second clause is a result, not a contrast. D) hours; but — wrong: a semicolon is not paired with a coordinating conjunction this way.",
  "choices": [
   "hours, so",
   "hours so",
   "hours, but",
   "hours; but"
  ],
  "answerIndex": 0
 },
 {
  "id": "sec-025",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Boundaries",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "She packed exactly three essentials for the trek ______ a map, a compass, and a flashlight.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: A colon introduces a list after a complete independent clause. A) trek; — wrong: a semicolon does not introduce a list. B) trek, — wrong: a comma alone does not properly introduce the list here. C) trek — wrong: with no punctuation, the list is not set off from the clause. D) trek: — correct: a colon follows the independent clause and introduces the three-item list.",
  "choices": [
   "trek;",
   "trek,",
   "trek",
   "trek:"
  ],
  "answerIndex": 3
 },
 {
  "id": "sec-026",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Form, Structure, and Sense",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "The ______ tail wagged excitedly as its owner came through the door.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: One dog owns the tail, so the possessive of the singular noun 'dog' is formed by adding apostrophe + s. A) dogs' — wrong: apostrophe after the s is the plural possessive, but only one dog is meant. B) dog — wrong: the bare noun shows no possession. C) dog's — correct: singular possessive form for one dog. D) dogs — wrong: the plain plural names more than one dog and shows no possession.",
  "choices": [
   "dogs'",
   "dog",
   "dog's",
   "dogs"
  ],
  "answerIndex": 2
 },
 {
  "id": "sec-027",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Form, Structure, and Sense",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "All of the ______ uniforms were hanging in the locker room after the tournament.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: The uniforms belong to several teams, so the possessive of the regular plural 'teams' adds only an apostrophe after the s. A) teames' — wrong: a misspelled plural cannot take the possessive apostrophe. B) teams' — correct: plural possessive form for multiple teams. C) team's — wrong: singular possessive; the context ('All of the') requires several teams. D) teams — wrong: the plain plural shows no possession.",
  "choices": [
   "teames'",
   "teams'",
   "team's",
   "teams"
  ],
  "answerIndex": 1
 },
 {
  "id": "sec-028",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Form, Structure, and Sense",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "The robot raised ______ arm and pointed toward the door.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: The blank needs the possessive determiner 'its' for the antecedent 'robot'; 'it's' is a contraction of 'it is.' A) its — correct: possessive determiner for the singular antecedent 'robot.' B) it's — wrong: a contraction of 'it is,' not a possessive. C) their — wrong: plural possessive; the antecedent is singular. D) they're — wrong: a contraction of 'they are,' not a possessive.",
  "choices": [
   "its",
   "it's",
   "their",
   "they're"
  ],
  "answerIndex": 0
 },
 {
  "id": "sec-029",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Form, Structure, and Sense",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "The boxes of old photographs in the attic ______ carefully labeled by year when we sorted them last spring.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: The subject head is 'boxes' (plural); the phrases between it and the verb do not change its number, and 'last spring' anchors the verb in the past. A) was — wrong: singular past form; 'photographs' and 'boxes' — the head is plural. B) is — wrong: singular present form; wrong number and wrong tense. C) has been — wrong: singular perfect form; the subject is plural. D) were — correct: plural past form agreeing with 'boxes' in the past frame.",
  "choices": [
   "was",
   "is",
   "has been",
   "were"
  ],
  "answerIndex": 3
 },
 {
  "id": "sec-030",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Form, Structure, and Sense",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "One of the students who won regional science awards ______ invited to present at the state fair.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: The subject is 'One' (singular); the plural noun inside the relative clause does not control the main verb. A) are — wrong: plural present form; wrong number. B) have been — wrong: plural perfect form; the main subject is singular. C) was — correct: singular past form agreeing with 'One.' D) were — wrong: plural form; the main subject is 'One,' not 'students.'",
  "choices": [
   "are",
   "have been",
   "was",
   "were"
  ],
  "answerIndex": 2
 },
 {
  "id": "sec-031",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Form, Structure, and Sense",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "There ______ several reasons the train is running late this morning.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: In a 'there' construction the verb agrees with the subject that follows it — here 'several reasons' (plural) — and the present-tense clause 'is running' anchors the verb in the present. A) being — wrong: a participle alone cannot serve as the main verb. B) are — correct: plural present form agreeing with 'several reasons.' C) is — wrong: singular form; the subject 'reasons' is plural. D) be — wrong: the bare stem cannot serve as the finite verb in this construction.",
  "choices": [
   "being",
   "are",
   "is",
   "be"
  ],
  "answerIndex": 1
 },
 {
  "id": "sec-032",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Form, Structure, and Sense",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "Neither the coach nor the players ______ aware of the schedule change.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: With 'neither ... nor,' the verb agrees with the nearer subject. The nearer subject, 'players,' is plural, and the past frame ('the schedule change' already in effect) requires the plural past form. A) were — correct: plural past form agreeing with the nearer subject 'players.' B) was — wrong: singular past form; the nearer subject is plural. C) is — wrong: singular present form; wrong number. D) has been — wrong: singular perfect form; the nearer subject is plural.",
  "choices": [
   "were",
   "was",
   "is",
   "has been"
  ],
  "answerIndex": 0
 },
 {
  "id": "sec-033",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Form, Structure, and Sense",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "Either the twins or their younger sister ______ driving everyone to the airport right now.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: With 'either ... or,' the verb agrees with the nearer subject. The nearer subject, 'sister,' is singular, and 'right now' requires a present progressive form. A) are — wrong: plural auxiliary; the nearer subject is singular. B) was — wrong: past auxiliary clashes with 'right now.' C) have — wrong: plural auxiliary; the nearer subject is singular. D) is — correct: singular present auxiliary forming the progressive with 'driving,' agreeing with 'sister.'",
  "choices": [
   "are",
   "was",
   "have",
   "is"
  ],
  "answerIndex": 3
 },
 {
  "id": "sec-034",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Form, Structure, and Sense",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "The committee ______ its final decision at tomorrow's meeting.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: A collective noun such as 'committee' takes a singular verb when the group acts as one unit, as the singular possessive 'its' in the sentence confirms. A) announcing — wrong: a participle alone cannot be the main verb. B) have announcing — wrong: 'have announcing' is not a valid verb form. C) announces — correct: singular present form treating the committee as one unit, consistent with 'its.' D) announce — wrong: plural form; the committee acts as a unit here, as 'its' shows.",
  "choices": [
   "announcing",
   "have announcing",
   "announces",
   "announce"
  ],
  "answerIndex": 2
 },
 {
  "id": "sec-035",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Form, Structure, and Sense",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "Five dollars ______ a fair price for a sandwich at the fair.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: A sum of money named as one amount takes a singular verb. A) have been — wrong: plural perfect form; the amount is a unit. B) is — correct: singular present form treating 'Five dollars' as one amount. C) are — wrong: plural form; the amount is treated as a single unit. D) were being — wrong: plural progressive form; the amount is a unit.",
  "choices": [
   "have been",
   "is",
   "are",
   "were being"
  ],
  "answerIndex": 1
 },
 {
  "id": "sec-036",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Form, Structure, and Sense",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "Winds of the Valley, a novel set during the drought, ______ required reading in many high schools.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: The title of a single work is singular even when it contains a plural-looking word, so the verb must be singular. A) is — correct: singular present form agreeing with the single title. B) are — wrong: plural form; a title naming one work is singular. C) were — wrong: plural past form; a title is singular. D) have been — wrong: plural perfect form; a title is singular.",
  "choices": [
   "is",
   "are",
   "were",
   "have been"
  ],
  "answerIndex": 0
 },
 {
  "id": "sec-037",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Form, Structure, and Sense",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "When Elena met with Priya to review the budget, ______ presented the revised figures to the board.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: A pronoun must have one clear antecedent. With two women in the sentence, 'she' could refer to either, so the sentence must repeat the name of the person who presented the figures — the host of the meeting, Elena. A) she — wrong: ambiguous: 'she' could refer to Elena or to Priya. B) her — wrong: an object-case pronoun cannot serve as the subject of the clause. C) they — wrong: plural; both possible antecedents are singular. D) Elena — correct: repeating the name removes the ambiguity that a pronoun would create.",
  "choices": [
   "she",
   "her",
   "they",
   "Elena"
  ],
  "answerIndex": 3
 },
 {
  "id": "sec-038",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Form, Structure, and Sense",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "The bank updated ______ website to make account access easier for customers.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: The antecedent 'bank' is a singular organization, so the possessive determiner must be singular. A) it's — wrong: a contraction of 'it is,' not a possessive. B) they — wrong: a plural subject pronoun cannot modify 'website.' C) its — correct: singular possessive matching 'bank.' D) their — wrong: plural possessive; the antecedent is singular.",
  "choices": [
   "it's",
   "they",
   "its",
   "their"
  ],
  "answerIndex": 2
 },
 {
  "id": "sec-039",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Form, Structure, and Sense",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "Writers should revise their drafts with care. ______ should also set a draft aside before giving it a final read.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: The passage speaks of 'Writers' in the third person ('their drafts'), so the next sentence must stay in the third person plural. A) One — wrong: 'one' shifts to a generic singular, breaking the plural third-person frame. B) They — correct: third-person plural pronoun consistent with 'Writers ... their.' C) You — wrong: second person shifts away from the third-person frame. D) We — wrong: first person shifts away from the third-person frame.",
  "choices": [
   "One",
   "They",
   "You",
   "We"
  ],
  "answerIndex": 1
 },
 {
  "id": "sec-040",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Form, Structure, and Sense",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "The scientist ______ the committee honored at the ceremony had studied coastal erosion for decades.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: The relative pronoun is the object of 'honored' (the committee honored her), so the object form 'whom' is required. A) whom — correct: object relative pronoun for a person, as the object of 'honored.' B) who — wrong: the subject form cannot serve as the object of 'honored.' C) which — wrong: 'which' refers to things, not people. D) whose — wrong: a possessive form; nothing is possessed here.",
  "choices": [
   "whom",
   "who",
   "which",
   "whose"
  ],
  "answerIndex": 0
 },
 {
  "id": "sec-041",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Form, Structure, and Sense",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "The explorer crossed the desert on foot and ______ detailed notes about each oasis.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: The anchor verb 'crossed' is past tense, and the coordinated verb in the same narrative must be past tense as well. A) keeps — wrong: present tense breaks the past narrative frame. B) keeping — wrong: a participle alone cannot be the main verb. C) will keep — wrong: future tense breaks the past narrative frame. D) kept — correct: simple past form matching 'crossed.'",
  "choices": [
   "keeps",
   "keeping",
   "will keep",
   "kept"
  ],
  "answerIndex": 3
 },
 {
  "id": "sec-042",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Form, Structure, and Sense",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "Since its first season in 2015, the music festival ______ thousands of visitors to the town.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: A time span beginning with 'Since ... 2015' and continuing to the present requires the present perfect, formed with 'has' plus the past participle. A) draws — wrong: simple present cannot cover a span from 2015 to now. B) drawing — wrong: a participle alone cannot be the main verb. C) has drawn — correct: present perfect form matching the 'Since 2015' time span. D) drew — wrong: simple past treats the action as finished at a definite past time, clashing with 'since.'",
  "choices": [
   "draws",
   "drawing",
   "has drawn",
   "drew"
  ],
  "answerIndex": 2
 },
 {
  "id": "sec-043",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Form, Structure, and Sense",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "By next June, the engineers ______ the new bridge across the river.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: Completion before a future deadline ('By next June') requires the future perfect, formed with 'will have' plus the past participle. A) completing — wrong: a participle alone cannot be the main verb. B) will have completed — correct: future perfect form for completion before next June. C) complete — wrong: simple present cannot express completion by a future deadline. D) completed — wrong: simple past places the completion in the past, clashing with 'next June.'",
  "choices": [
   "completing",
   "will have completed",
   "complete",
   "completed"
  ],
  "answerIndex": 1
 },
 {
  "id": "sec-044",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Form, Structure, and Sense",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "Walking along the forest trail with binoculars, ______",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: The introductory phrase describes someone walking with binoculars; only one completion makes that person the subject of the main clause. A) the hiker spotted a bear in the clearing. — correct: the subject, the hiker, is the one walking with binoculars. B) a bear was spotted in the clearing by the hiker. — wrong: the subject is the bear, which is not walking with binoculars — dangling modifier. C) the hiker's binoculars focused on a bear in the clearing. — wrong: the subject is the binoculars, which cannot walk — dangling modifier. D) a bear appeared suddenly in the clearing. — wrong: the subject is the bear, which is not walking — dangling modifier.",
  "choices": [
   "the hiker spotted a bear in the clearing.",
   "a bear was spotted in the clearing by the hiker.",
   "the hiker's binoculars focused on a bear in the clearing.",
   "a bear appeared suddenly in the clearing."
  ],
  "answerIndex": 0
 },
 {
  "id": "sec-045",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Form, Structure, and Sense",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "The survey covers both customer satisfaction ______ product quality.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: The correlative pair is 'both ... and'; once 'both' opens the pair, only 'and' can complete it. A) as well as — wrong: 'both ... as well as' is not a correlative pair. B) plus — wrong: 'plus' cannot complete the 'both' construction. C) together with — wrong: 'together with' cannot complete the 'both' construction. D) and — correct: 'and' completes the correlative pair begun by 'both.'",
  "choices": [
   "as well as",
   "plus",
   "together with",
   "and"
  ],
  "answerIndex": 3
 },
 {
  "id": "sec-046",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Form, Structure, and Sense",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "She enjoys neither swimming ______ cycling, preferring to run instead.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: The correlative pair is 'neither ... nor'; once 'neither' opens the pair, only 'nor' can complete it. A) and — wrong: 'and' cannot complete the 'neither' construction. B) but — wrong: 'but' cannot complete the 'neither' construction. C) nor — correct: 'nor' completes the correlative pair begun by 'neither.' D) or — wrong: 'or' pairs with 'either,' not with 'neither.'",
  "choices": [
   "and",
   "but",
   "nor",
   "or"
  ],
  "answerIndex": 2
 },
 {
  "id": "sec-047",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Boundaries",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "Denver, the capital of Colorado ______ is known for its sunny weather.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: The appositive 'the capital of Colorado' is nonrestrictive and was opened with a comma, so it must be closed with a comma. A) Colorado — — wrong: a closing mark must match the opening comma. B) Colorado, — correct: a comma closes the appositive that a comma opened. C) Colorado — wrong: with no punctuation, the appositive is left unclosed. D) Colorado; — wrong: a semicolon cannot appear inside a single clause.",
  "choices": [
   "Colorado —",
   "Colorado,",
   "Colorado",
   "Colorado;"
  ],
  "answerIndex": 1
 },
 {
  "id": "sec-048",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Boundaries",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "The old lighthouse — built in 1850 ______ still guides ships into the harbor.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: A parenthetical set off with a dash must be closed with a dash; the closing mark must match the opening mark. A) 1850 — — correct: a dash closes the parenthetical that a dash opened. B) 1850, — wrong: a comma does not match the opening dash. C) 1850; — wrong: a semicolon cannot close a parenthetical inside a clause. D) 1850 — wrong: with no mark, the parenthetical is left unclosed.",
  "choices": [
   "1850 —",
   "1850,",
   "1850;",
   "1850"
  ],
  "answerIndex": 0
 },
 {
  "id": "sec-049",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Boundaries",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "The first trial failed ______ the researchers redesigned the experiment and tried again.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: Two independent clauses joined by the conjunctive adverb 'nevertheless' require a semicolon before the adverb and a comma after it. (Here the adverb appears in the choices as part of the joining pattern.) A) failed, nevertheless, — wrong: a comma before 'nevertheless' creates a comma splice between the clauses. B) failed nevertheless, — wrong: with no punctuation before 'nevertheless,' the clauses run together. C) failed: nevertheless, — wrong: a colon does not join clauses linked by a conjunctive adverb. D) failed; nevertheless, — correct: a semicolon before 'nevertheless' and a comma after it correctly join the two independent clauses.",
  "choices": [
   "failed, nevertheless,",
   "failed nevertheless,",
   "failed: nevertheless,",
   "failed; nevertheless,"
  ],
  "answerIndex": 3
 },
 {
  "id": "sec-050",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Boundaries",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "The museum offers the following programs ______ lectures, workshops, and guided tours.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: The phrase 'the following' signals a list, and a colon after the complete clause introduces it. A) programs, — wrong: a comma alone does not properly introduce the list. B) programs — wrong: with no punctuation, the list is not set off. C) programs: — correct: a colon introduces the list promised by 'the following.' D) programs; — wrong: a semicolon does not introduce a list.",
  "choices": [
   "programs,",
   "programs",
   "programs:",
   "programs;"
  ],
  "answerIndex": 2
 },
 {
  "id": "sec-051",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Boundaries",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "Running through the park on Saturday mornings ______",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: The gerund phrase 'Running through the park on Saturday mornings' can serve as a subject, but the sentence still needs a finite verb to be complete; only one choice supplies one. A) with my training partner beside me. — wrong: adds a prepositional phrase; the sentence still has no finite verb — a fragment. B) is my favorite way to start the weekend. — correct: the verb 'is' completes the sentence with the gerund phrase as its subject. C) and feeling the cool air on my face. — wrong: adds another participle phrase; the sentence still has no finite verb — a fragment. D) because the paths are quiet then. — wrong: adds a subordinate clause; the sentence still has no main verb — a fragment.",
  "choices": [
   "with my training partner beside me.",
   "is my favorite way to start the weekend.",
   "and feeling the cool air on my face.",
   "because the paths are quiet then."
  ],
  "answerIndex": 1
 },
 {
  "id": "sec-052",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Boundaries",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "Because the mountain roads were icy ______ the ski resort closed for the day.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: A comma separates an introductory subordinate clause ('Because ...') from the main clause that follows it. A) icy, — correct: a comma follows the introductory 'Because' clause. B) icy; — wrong: a semicolon cannot join a subordinate clause to its main clause. C) icy — wrong: with no comma, the subordinate clause runs into the main clause. D) icy — — wrong: a dash does not mark the end of an introductory subordinate clause.",
  "choices": [
   "icy,",
   "icy;",
   "icy",
   "icy —"
  ],
  "answerIndex": 0
 },
 {
  "id": "sec-053",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Boundaries",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "The guide pointed at the map and said, \"Follow the marked trail at all times ______",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: In standard American English, a period that ends a quoted statement goes inside the closing quotation mark. A) times\". — wrong: the period outside the closing quote violates the convention for quoted statements. B) times\", — wrong: a comma cannot end the quoted statement here. C) times\"; — wrong: a semicolon cannot end the quoted statement. D) times.\" — correct: the period sits inside the closing quotation mark, ending the quoted statement.",
  "choices": [
   "times\".",
   "times\",",
   "times\";",
   "times.\""
  ],
  "answerIndex": 3
 },
 {
  "id": "sec-054",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Boundaries",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "The engineer designed the suspension bridge ______ and supervised its construction for two years.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: A comma is not used before 'and' when it joins two predicates of the same subject rather than two independent clauses. A) bridge; — wrong: a semicolon cannot appear between predicates of one clause. B) bridge — — wrong: a dash cannot interrupt the compound predicate here. C) bridge — correct: no punctuation: 'and' joins the compound predicates 'designed' and 'supervised' of one subject. D) bridge, — wrong: a comma before 'and' is not used between predicates of the same subject.",
  "choices": [
   "bridge;",
   "bridge —",
   "bridge",
   "bridge,"
  ],
  "answerIndex": 2
 },
 {
  "id": "sec-055",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Form, Structure, and Sense",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "______ a shame that the old theater lost its funding this year.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: The sentence needs the contraction of 'it is' to open the clause; the possessive 'its' cannot serve as a subject-plus-verb. A) It — wrong: 'It' alone leaves the clause without a verb. B) It's — correct: 'It's' (it is) supplies the subject and verb the clause requires. C) Its — wrong: the possessive form cannot act as subject and verb. D) Their — wrong: a plural possessive cannot open this clause.",
  "choices": [
   "It",
   "It's",
   "Its",
   "Their"
  ],
  "answerIndex": 1
 },
 {
  "id": "sec-056",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Form, Structure, and Sense",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "The ______ toys were scattered across the playroom floor.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: The plural of 'child' is 'children,' which does not end in s, so its possessive adds apostrophe + s: 'children's.' A) children's — correct: 'children's' is the possessive of the irregular plural 'children.' B) childrens — wrong: 'childrens' is not the plural of 'child.' C) childrens' — wrong: the apostrophe form is built on a plural that does not exist. D) childs' — wrong: 'childs' is not the plural of 'child.'",
  "choices": [
   "children's",
   "childrens",
   "childrens'",
   "childs'"
  ],
  "answerIndex": 0
 },
 {
  "id": "sec-057",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Form, Structure, and Sense",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "The pair of muddy shoes by the door ______ left there by the hikers.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: The subject head is 'pair,' a singular noun naming one set; the plural noun inside the prepositional phrase does not control the verb, and the past frame requires the singular past form. A) were — wrong: plural past form; 'shoes' sits inside a prepositional phrase. B) are — wrong: plural present form; wrong number and tense. C) have been — wrong: plural perfect form; the subject is singular. D) was — correct: singular past form agreeing with 'pair.'",
  "choices": [
   "were",
   "are",
   "have been",
   "was"
  ],
  "answerIndex": 3
 },
 {
  "id": "sec-058",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Form, Structure, and Sense",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "Along the riverbank ______ a row of willows and a small wooden dock.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: The verb precedes its subject in this inverted sentence. The subject — 'a row of willows and a small wooden dock' — joins two things with 'and' and is therefore plural, so the present-tense verb must be plural. A) standing — wrong: a participle alone cannot be the main verb. B) standed — wrong: 'standed' is not a form of the verb 'stand.' C) stand — correct: plural present form agreeing with the compound subject after the blank. D) stands — wrong: singular form; although 'row' alone is singular, the subject is compound ('row ... and ... dock').",
  "choices": [
   "standing",
   "standed",
   "stand",
   "stands"
  ],
  "answerIndex": 2
 },
 {
  "id": "sec-059",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Form, Structure, and Sense",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "The number of applicants for the scholarship ______ increased sharply this year.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: With 'the number of,' the subject head is 'number' (singular); the plural noun in the prepositional phrase does not control the verb. A) were — wrong: plural past form; the head is singular. B) has — correct: singular perfect auxiliary agreeing with 'The number.' C) have — wrong: plural auxiliary; the head noun 'number' is singular in this construction. D) are — wrong: plural present form; the head is singular.",
  "choices": [
   "were",
   "has",
   "have",
   "are"
  ],
  "answerIndex": 1
 },
 {
  "id": "sec-060",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Form, Structure, and Sense",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "A number of applicants ______ still waiting in the lobby for interviews.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: In the idiom 'a number of,' the phrase means 'several' and the verb agrees with the plural noun that follows it — here, 'applicants.' A) are — correct: plural present form agreeing with 'applicants' in the 'a number of' idiom. B) is — wrong: singular form; 'a number of' takes a plural verb. C) was — wrong: singular past form; wrong number and tense. D) has been — wrong: singular perfect form; the idiom requires a plural verb.",
  "choices": [
   "are",
   "is",
   "was",
   "has been"
  ],
  "answerIndex": 0
 },
 {
  "id": "sec-061",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Form, Structure, and Sense",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "Maya is one of the few students in the program who ______ already completed a research thesis.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: The relative pronoun 'who' refers to 'students' (plural) — Maya is one of several who have done this — so the verb inside the relative clause must be plural. A) has — wrong: singular form; 'who' refers to the plural 'students,' not to 'one.' B) is — wrong: singular form; the relative clause's subject is plural. C) was — wrong: singular past form; the relative clause's subject is plural. D) have — correct: plural perfect auxiliary agreeing with 'who' (= the students).",
  "choices": [
   "has",
   "is",
   "was",
   "have"
  ],
  "answerIndex": 3
 },
 {
  "id": "sec-062",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Form, Structure, and Sense",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "The coach singled out the one player on the team who ______ scored in every game this season.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: Here 'who' refers to 'the one player' (singular) — the only player who did this — so the verb inside the relative clause must be singular. A) are — wrong: plural present form; the antecedent is singular. B) were — wrong: plural past form; the antecedent is singular. C) has — correct: singular perfect auxiliary agreeing with 'who' (= the one player). D) have — wrong: plural form; 'who' refers to the singular 'one player.'",
  "choices": [
   "are",
   "were",
   "has",
   "have"
  ],
  "answerIndex": 2
 },
 {
  "id": "sec-063",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Form, Structure, and Sense",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "Either the night manager or the day-shift employees ______ responsible for locking the building tonight.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: With 'either ... or,' the verb agrees with the nearer subject. The nearer subject, 'employees,' is plural, so the verb must be plural. A) has been — wrong: singular perfect form; the nearer subject is plural. B) are — correct: plural present form agreeing with the nearer subject 'employees.' C) is — wrong: singular form; the nearer subject is plural. D) was being — wrong: singular progressive form; the nearer subject is plural.",
  "choices": [
   "has been",
   "are",
   "is",
   "was being"
  ],
  "answerIndex": 1
 },
 {
  "id": "sec-064",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Form, Structure, and Sense",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "Collecting rare stamps from around the world ______ been his hobby for more than forty years.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: A gerund phrase used as a subject ('Collecting rare stamps ...') is singular, so it takes a singular verb. A) has — correct: singular perfect auxiliary agreeing with the gerund-phrase subject. B) have — wrong: plural auxiliary; a gerund-phrase subject is singular. C) are — wrong: plural present form; the subject is singular. D) were — wrong: plural past form; the subject is singular.",
  "choices": [
   "has",
   "have",
   "are",
   "were"
  ],
  "answerIndex": 0
 },
 {
  "id": "sec-065",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Form, Structure, and Sense",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "When the director, Ms. Alvarez, met with the lead actor, Ms. Chen, she announced that ______ had been chosen for the touring production.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: Both possible antecedents are women identified by name, so 'she' in the blank would be ambiguous; standard English requires repeating the name of the person chosen — the lead actor, Chen. A) she — wrong: ambiguous: 'she' could refer to Alvarez or to Chen. B) her — wrong: an object-case pronoun cannot serve as the subject here. C) they — wrong: plural; both possible antecedents are singular. D) Chen — correct: repeating 'Chen' identifies the chosen person unambiguously.",
  "choices": [
   "she",
   "her",
   "they",
   "Chen"
  ],
  "answerIndex": 3
 },
 {
  "id": "sec-066",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Form, Structure, and Sense",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "Neither of the two companies disclosed ______ earnings for the quarter.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: 'Neither' is singular, so the possessive pronoun that refers back to it must be singular as well. A) it's — wrong: a contraction of 'it is,' not a possessive. B) they're — wrong: a contraction of 'they are,' not a possessive. C) its — correct: singular possessive matching the singular 'Neither.' D) their — wrong: plural possessive; 'neither' is singular.",
  "choices": [
   "it's",
   "they're",
   "its",
   "their"
  ],
  "answerIndex": 2
 },
 {
  "id": "sec-067",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Form, Structure, and Sense",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "On the 2019 tour, the guide explained that the old trail ______ at the waterfall.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: In reported speech after a past-tense verb ('explained'), the verb in the reported clause is backshifted to the past. A) will be ending — wrong: future progressive clashes with the past reporting frame. B) ended — correct: simple past form backshifted after 'explained.' C) ends — wrong: present tense fails to backshift after the past reporting verb. D) ending — wrong: a participle alone cannot serve as the verb of the reported clause.",
  "choices": [
   "will be ending",
   "ended",
   "ends",
   "ending"
  ],
  "answerIndex": 1
 },
 {
  "id": "sec-068",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Form, Structure, and Sense",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "If the reservoir had been full last summer, the town ______ water restrictions now.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: The condition is set in the past ('had been full last summer'), but the result is located in the present ('now'), so the result clause takes 'would' plus the base form, not the perfect. A) would not need — correct: 'would not need' pairs a past unreal condition with a present unreal result. B) would not have needed — wrong: the perfect form places the result in the past, clashing with 'now.' C) will not need — wrong: 'will' expresses a real future, not an unreal result of a past condition. D) needs — wrong: the plain present cannot express an unreal conditional result.",
  "choices": [
   "would not need",
   "would not have needed",
   "will not need",
   "needs"
  ],
  "answerIndex": 0
 },
 {
  "id": "sec-069",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Form, Structure, and Sense",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "The committee recommended that the full report ______ revised before it is published.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: After verbs of recommendation or demand ('recommended that'), the verb in the that-clause takes the subjunctive base form — here, 'be.' A) is — wrong: the indicative present does not satisfy the mandative subjunctive construction. B) was — wrong: the indicative past does not satisfy the mandative subjunctive construction. C) are — wrong: the plural indicative form does not satisfy the mandative subjunctive construction. D) be — correct: subjunctive base form 'be' after 'recommended that.'",
  "choices": [
   "is",
   "was",
   "are",
   "be"
  ],
  "answerIndex": 3
 },
 {
  "id": "sec-070",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Form, Structure, and Sense",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "If the survey data ______ more complete, the researchers' conclusion would be far stronger.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: In a hypothetical (counterfactual) condition paired with 'would,' the verb 'be' takes the subjunctive form 'were' for every subject. A) is — wrong: present indicative cannot appear in this counterfactual condition. B) are — wrong: plural indicative does not satisfy the subjunctive construction. C) were — correct: subjunctive 'were' for the counterfactual condition. D) was — wrong: 'was' is the indicative form; the 'would' result clause marks the condition as counterfactual, requiring 'were.'",
  "choices": [
   "is",
   "are",
   "were",
   "was"
  ],
  "answerIndex": 2
 },
 {
  "id": "sec-071",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Form, Structure, and Sense",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "By the time the guests arrived at the hall, Elena ______ dinner for nearly two hours.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: An action in progress up to a past moment ('By the time the guests arrived') takes the past perfect progressive: 'had been' plus the -ing form. A) will cook — wrong: future tense clashes with the past anchor. B) had been cooking — correct: past perfect progressive placing the cooking before and up to the guests' arrival. C) has been cooking — wrong: present perfect progressive clashes with the past anchor 'arrived.' D) cooks — wrong: simple present cannot express duration before a past moment.",
  "choices": [
   "will cook",
   "had been cooking",
   "has been cooking",
   "cooks"
  ],
  "answerIndex": 1
 },
 {
  "id": "sec-072",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Form, Structure, and Sense",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "The documentary opens in the year 1900. Miners descend into the deep shaft, lamps flicker in the darkness, and the narrator ______ the dangers they face daily.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: The passage narrates in the historical present ('opens,' 'descend,' 'flicker'), so the next verb must also be simple present, singular to agree with 'narrator.' A) describes — correct: simple present form maintaining the historical-present narration. B) described — wrong: past tense breaks the historical-present frame. C) describing — wrong: a participle alone cannot be the main verb. D) will describe — wrong: future tense breaks the historical-present frame.",
  "choices": [
   "describes",
   "described",
   "describing",
   "will describe"
  ],
  "answerIndex": 0
 },
 {
  "id": "sec-073",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Form, Structure, and Sense",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "If the debate team had practiced its rebuttals more, it ______ the championship round.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: A past unreal condition ('had practiced') takes a result clause with 'would have' plus the past participle. A) will win — wrong: 'will win' is for real future conditions, not past unreal ones. B) wins — wrong: present tense cannot express an unreal past result. C) win — wrong: the bare stem cannot express an unreal past result. D) would have won — correct: 'would have won' completes the third conditional.",
  "choices": [
   "will win",
   "wins",
   "win",
   "would have won"
  ],
  "answerIndex": 3
 },
 {
  "id": "sec-074",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Form, Structure, and Sense",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "Having studied for the examination all night, ______",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: The introductory phrase describes the person who studied. Only one completion makes that person the subject; a possessive ('Ana's confidence') or a non-person subject leaves the modifier dangling. A) Ana's confidence grew steadily. — wrong: the subject is 'confidence,' not Ana herself — the modifier has no person to attach to. B) the examination was approached with confidence by Ana. — wrong: the subject is the examination, which did not study — dangling modifier. C) Ana felt fully prepared the next morning. — correct: the subject, Ana, is the person who studied all night. D) the examination seemed far less daunting to Ana. — wrong: the subject is the examination, which did not study — dangling modifier.",
  "choices": [
   "Ana's confidence grew steadily.",
   "the examination was approached with confidence by Ana.",
   "Ana felt fully prepared the next morning.",
   "the examination seemed far less daunting to Ana."
  ],
  "answerIndex": 2
 },
 {
  "id": "sec-075",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Form, Structure, and Sense",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "Using a powerful telescope, ______",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: The introductory phrase describes the person using the telescope; only one completion makes that person the subject of the main clause. A) the comet appeared much larger and brighter. — wrong: the subject is the comet, which cannot use a telescope — dangling modifier. B) the astronomer photographed the comet. — correct: the subject, the astronomer, is the one using the telescope. C) the comet was photographed by the astronomer. — wrong: the subject is the comet, which cannot use a telescope — dangling modifier. D) the astronomer's camera captured the comet. — wrong: the subject is the camera, not the telescope user — dangling modifier.",
  "choices": [
   "the comet appeared much larger and brighter.",
   "the astronomer photographed the comet.",
   "the comet was photographed by the astronomer.",
   "the astronomer's camera captured the comet."
  ],
  "answerIndex": 1
 },
 {
  "id": "sec-076",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Form, Structure, and Sense",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "Covered with morning dew, ______",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: The introductory phrase 'Covered with morning dew' must describe the subject of the main clause. A) the meadow grass sparkled in the early sunlight. — correct: the subject, the grass, is what was covered with dew. B) we crossed the meadow in our bare feet. — wrong: the subject 'we' is not covered with dew — dangling modifier. C) the gardener began mowing the meadow. — wrong: the subject is the gardener, who is not covered with dew — dangling modifier. D) the lawn chairs were folded and stored. — wrong: the subject is the chairs, not the dew-covered grass named by the phrase — dangling modifier.",
  "choices": [
   "the meadow grass sparkled in the early sunlight.",
   "we crossed the meadow in our bare feet.",
   "the gardener began mowing the meadow.",
   "the lawn chairs were folded and stored."
  ],
  "answerIndex": 0
 },
 {
  "id": "sec-077",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Form, Structure, and Sense",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "The report argues that emissions fell sharply, that new jobs were created, and ______",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: The series is built from parallel 'that' clauses, so the third item must also be a complete 'that' clause. A) the policy achieved its goals. — wrong: drops the 'that' that the first two items carry, breaking the parallel pattern. B) achieving the policy's goals. — wrong: a participial phrase is not a clause and breaks the pattern. C) that the policy's goals. — wrong: 'that the policy's goals' has no verb — not a clause at all. D) that the policy achieved its goals. — correct: a complete 'that' clause parallel to the first two items.",
  "choices": [
   "the policy achieved its goals.",
   "achieving the policy's goals.",
   "that the policy's goals.",
   "that the policy achieved its goals."
  ],
  "answerIndex": 3
 },
 {
  "id": "sec-078",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Form, Structure, and Sense",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "Her stated goals for the year were to publish the study, to present at the conference, and ______ junior researchers in the lab.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: The first two goals are full infinitives ('to publish,' 'to present'), so the third must also be a full infinitive. A) mentor — wrong: the bare stem drops the 'to' that both earlier items carry. B) mentorship of — wrong: a noun phrase cannot serve as the third infinitive in the series. C) to mentor — correct: full infinitive parallel to 'to publish' and 'to present.' D) mentoring — wrong: a gerund does not match the infinitives.",
  "choices": [
   "mentor",
   "mentorship of",
   "to mentor",
   "mentoring"
  ],
  "answerIndex": 2
 },
 {
  "id": "sec-079",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Form, Structure, and Sense",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "The treaty was signed by the diplomats, witnessed by the generals, and ______",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: The series is built from passive participles with 'by' phrases ('was signed by,' 'witnessed by'), so the third item must be the matching passive participle form. A) to be ratified by the senate. — wrong: an infinitive does not match the passive participles in the series. B) ratified by the senate. — correct: passive participle with a 'by' phrase, parallel to 'signed by' and 'witnessed by.' C) the senate ratified it. — wrong: switches to an active clause with a new subject, breaking the passive series. D) ratifying by the senate. — wrong: 'ratifying by' is not a valid passive form.",
  "choices": [
   "to be ratified by the senate.",
   "ratified by the senate.",
   "the senate ratified it.",
   "ratifying by the senate."
  ],
  "answerIndex": 1
 },
 {
  "id": "sec-080",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Boundaries",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "The novelist's latest book ______ which took five years to write, was published to wide acclaim in May.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: The clause 'which took five years to write' is nonrestrictive — it adds information about an already-identified book — so it must be set off with a comma before 'which.' A) book, — correct: a comma opens the nonrestrictive 'which' clause. B) book — wrong: with no comma, the nonrestrictive clause is not set off. C) book; — wrong: a semicolon cannot appear inside a single clause. D) book — — wrong: a dash is not the standard mark opening this nonrestrictive clause, and it would need a matching dash to close.",
  "choices": [
   "book,",
   "book",
   "book;",
   "book —"
  ],
  "answerIndex": 0
 },
 {
  "id": "sec-081",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Boundaries",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "The report that the review committee released last week ______ summarizes the agency's findings in plain language.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: The clause 'that the review committee released last week' is restrictive — it identifies which report — so it is not set off by punctuation, and no mark may separate it from the main verb. A) week, — wrong: a comma would wrongly set off a restrictive clause and split it from the verb. B) week; — wrong: a semicolon cannot appear inside a single clause. C) week — — wrong: a dash would wrongly set off a restrictive clause. D) week — correct: no punctuation: the restrictive clause runs directly into the main verb 'summarizes.'",
  "choices": [
   "week,",
   "week;",
   "week —",
   "week"
  ],
  "answerIndex": 3
 },
 {
  "id": "sec-082",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Boundaries",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "The historic mansion — built by a sea captain in 1840, and vacant for several decades ______ stood at the end of the harbor road.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: The parenthetical was opened with a dash, so it must close with a dash — even though commas appear inside the parenthetical itself. A) decades; — wrong: a semicolon cannot close a parenthetical inside a clause. B) decades — wrong: with no mark, the parenthetical is left unclosed. C) decades — — correct: a dash closes the parenthetical that a dash opened. D) decades, — wrong: a comma does not match the opening dash, however many commas the parenthetical contains.",
  "choices": [
   "decades;",
   "decades",
   "decades —",
   "decades,"
  ],
  "answerIndex": 2
 },
 {
  "id": "sec-083",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Boundaries",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "The conference drew scholars from Austin, Texas ______ Denver, Colorado; and Miami, Florida.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: When items in a series contain commas themselves, semicolons separate the items so the grouping stays clear. A) Texas: — wrong: a colon introduces a list; it does not separate items inside one. B) Texas; — correct: a semicolon separates series items that contain internal commas. C) Texas, — wrong: a comma alone cannot separate items that already contain commas. D) Texas — — wrong: a dash does not separate items in a formal series.",
  "choices": [
   "Texas:",
   "Texas;",
   "Texas,",
   "Texas —"
  ],
  "answerIndex": 1
 },
 {
  "id": "sec-084",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Boundaries",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "The roads had turned to ice overnight ______ therefore, the school district canceled all classes.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: Two independent clauses joined by the conjunctive adverb 'therefore' require a semicolon before the adverb and a comma after it. A) overnight; therefore, — correct: a semicolon before 'therefore' and a comma after it join the clauses correctly. B) overnight, therefore, — wrong: a comma before 'therefore' creates a comma splice. C) overnight therefore, — wrong: with no punctuation, the clauses run together. D) overnight: therefore, — wrong: a colon does not join clauses linked by a conjunctive adverb.",
  "choices": [
   "overnight; therefore,",
   "overnight, therefore,",
   "overnight therefore,",
   "overnight: therefore,"
  ],
  "answerIndex": 0
 },
 {
  "id": "sec-085",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Boundaries",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "The orchestra finished tuning its instruments ______ the audience gradually grew quiet.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: The two parts are independent clauses of equal weight; the second neither lists nor explains the contents of the first, so a semicolon — not a colon — joins them. A) instruments: — wrong: a colon must introduce a list or an elaboration; the second clause is a separate event, not an elaboration of the first. B) instruments, — wrong: a comma alone creates a comma splice. C) instruments — wrong: no punctuation creates a run-on. D) instruments; — correct: a semicolon joins the two independent clauses.",
  "choices": [
   "instruments:",
   "instruments,",
   "instruments",
   "instruments;"
  ],
  "answerIndex": 3
 },
 {
  "id": "sec-086",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Boundaries",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "The band played a single encore ______ and then left the stage to loud applause.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: The word 'and' joins two predicates ('played' and 'left') of the same subject, so no comma precedes it — the comma rule applies only when 'and' joins two full independent clauses. A) encore; — wrong: a semicolon cannot split the predicates of one clause. B) encore — — wrong: a dash cannot split the predicates of one clause. C) encore — correct: no punctuation before 'and' joining the compound predicates. D) encore, — wrong: a comma is not used before 'and' between predicates of one subject.",
  "choices": [
   "encore;",
   "encore —",
   "encore",
   "encore,"
  ],
  "answerIndex": 2
 },
 {
  "id": "sec-087",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Boundaries",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "In the soft light of early morning, just beyond the old lighthouse on the point ______ the trail finally begins.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: A comma follows a long introductory prepositional phrase (here, two stacked phrases) before the main clause begins. A) point: — wrong: a colon does not follow an introductory phrase. B) point, — correct: a comma closes the long introductory phrase before 'the trail finally begins.' C) point — wrong: with no comma, the long introductory phrase runs into the main clause. D) point; — wrong: a semicolon cannot separate a phrase from its clause.",
  "choices": [
   "point:",
   "point,",
   "point",
   "point;"
  ],
  "answerIndex": 1
 },
 {
  "id": "sec-088",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Boundaries",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "The visitor turned to the docent and asked, \"Where is the gift shop ______",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: When the quoted material itself is a question, the question mark goes inside the closing quotation mark. A) shop?\" — correct: the question mark sits inside the closing quote because the quotation is the question. B) shop\"? — wrong: placing the question mark outside the quote is wrong when the quote itself is the question. C) shop? — wrong: with no closing punctuation pattern, the quotation is left unclosed. D) shop.\" — wrong: a period would erase the fact that the quoted words ask a question.",
  "choices": [
   "shop?\"",
   "shop\"?",
   "shop?",
   "shop.\""
  ],
  "answerIndex": 0
 },
 {
  "id": "sec-089",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Boundaries",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "The overnight flight was delayed for hours ______ the passengers, however, remained patient in the terminal.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: The two parts are independent clauses. 'However' is a parenthetical inside the second clause, not the joining word, so the boundary between the clauses still requires a semicolon. A) hours, — wrong: a comma alone creates a comma splice; 'however' inside the second clause cannot join the clauses. B) hours — wrong: no punctuation creates a run-on. C) hours: — wrong: a colon does not join these two coordinate clauses. D) hours; — correct: a semicolon marks the boundary between the two independent clauses.",
  "choices": [
   "hours,",
   "hours",
   "hours:",
   "hours;"
  ],
  "answerIndex": 3
 },
 {
  "id": "sec-090",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Form, Structure, and Sense",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "All three ______ offices were repainted during the summer break.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: The offices belong to three managers, so the possessive of the regular plural 'managers' adds only an apostrophe after the s. A) managers — wrong: the plain plural shows no possession. B) managers's — wrong: 'managers's' double-marks the possessive; a regular plural takes only the apostrophe. C) managers' — correct: plural possessive for the three managers named in the sentence. D) manager's — wrong: singular possessive; the sentence states there are three owners.",
  "choices": [
   "managers",
   "managers's",
   "managers'",
   "manager's"
  ],
  "answerIndex": 2
 },
 {
  "id": "sec-091",
  "section": "Reading & Writing",
  "domain": "Standard English Conventions",
  "topic": "Form, Structure, and Sense",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "After two ______ rest at the lodge, the hikers felt ready for the summit attempt.",
  "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
  "solution": "Rule: In time expressions, the period of time possesses the noun that follows: two weeks requires the plural possessive 'weeks'.' A) week — wrong: the bare singular neither matches the number nor shows possession. B) weeks' — correct: plural possessive matching the stated span of two weeks. C) week's — wrong: singular possessive; the span is two weeks, not one. D) weeks — wrong: the plain plural shows no possession in this time expression.",
  "choices": [
   "week",
   "weeks'",
   "week's",
   "weeks"
  ],
  "answerIndex": 1
 },
 {
  "id": "inf-001",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Central Ideas and Details",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "In 2019, the town of Millbrook set aside a single vacant lot for a community garden, expecting a handful of volunteers. Within three years, the garden had expanded to twelve lots, and its growers were supplying fresh vegetables to the town's food bank every week. Local schools now bring students to the garden for science lessons, and the town council has voted to fund a full-time garden coordinator.",
  "question": "Which choice best states the main idea of the text?",
  "solution": "A main idea must cover the whole text, not one detail. A) Wrong: no crops or watering needs are mentioned anywhere in the text. B) Correct: it covers the whole text: the single lot, the growth to twelve lots, the food bank supply, the school lessons, and the town's funding decision. C) Wrong: this is one detail from the final sentence; it is true but far too narrow to state the main idea of the whole text. D) Wrong: the text describes steady growth and expanding support, the opposite of a near-closure.",
  "choices": [
   "The garden's tomato plants required more water than its other crops.",
   "A small community garden project grew into a resource that feeds and teaches the whole town.",
   "Millbrook's town council voted to fund a full-time garden coordinator.",
   "The garden nearly closed in its second year because volunteers lost interest."
  ],
  "answerIndex": 1
 },
 {
  "id": "inf-002",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Central Ideas and Details",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "When the reservoir behind the Alden Dam was drained for repairs in 2021, biologists expected the exposed lakebed to stay bare for years. Instead, seeds that had lain dormant in the sediment sprouted within months, and by the following summer the lakebed was covered with grasses and wildflowers. Researchers now use the site to study how quickly plant communities can reestablish themselves after a long absence.",
  "question": "Which choice best states the main idea of the text?",
  "solution": "A main idea must cover the whole text, not one detail. A) Wrong: the repairs are only the setup for the text; nothing is said about their extent, and they are not the main idea. B) Wrong: this is one supporting detail; the text is about the speed of the lakebed's overall regrowth and its research value, not only about seed survival. C) Correct: it captures both the surprise (growth within months, not years) and the result (a research site for studying regrowth). D) Wrong: the text says the recovery was much faster than expected, not slower.",
  "choices": [
   "The Alden Dam required extensive repairs in 2021.",
   "Dormant seeds can remain alive in lake sediment for many years.",
   "Plants returned to a drained lakebed far faster than biologists expected, turning the site into a place to study rapid regrowth.",
   "Biologists were disappointed by how slowly the lakebed recovered."
  ],
  "answerIndex": 2
 },
 {
  "id": "inf-003",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Central Ideas and Details",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "For decades, the salt marsh at the edge of Port Sibley was treated as wasteland, and sections of it were filled in for parking lots. In 2015, the town began removing the fill and replanting native marsh grasses. The restored marsh now absorbs stormwater that once flooded nearby streets, and herons and egrets have returned to feed in its channels.",
  "question": "Which choice best states the main idea of the text?",
  "solution": "A main idea must cover the whole text, not one detail. A) Wrong: the text says the birds returned to the marsh; it never ranks them against other birds in the area. B) Wrong: this is background history from the first sentence, not the main idea of the whole text. C) Wrong: the town is doing the opposite: removing fill and replanting. D) Correct: it covers the marsh's history, the restoration, and both stated benefits: flood control and returning birds.",
  "choices": [
   "Herons and egrets are the most common birds in the Port Sibley area.",
   "Sections of the marsh were filled in to create parking lots.",
   "The town plans to fill in the rest of the marsh for more parking.",
   "Restoring a marsh that was once partly filled in has reduced flooding and brought wildlife back to Port Sibley."
  ],
  "answerIndex": 3
 },
 {
  "id": "inf-004",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Central Ideas and Details",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "The gristmill on Hollow Creek ground grain for local farms from 1840 until it closed in 1932. In 1978, the county historical society restored the building, repairing its waterwheel and millstones. Rather than reopening it as a working mill, the society converted the interior into an archive, where it now stores and displays the county's collection of farm records, photographs, and letters.",
  "question": "According to the text, the restored mill was converted for use as",
  "solution": "The question asks what the text directly states. A) Correct: the final sentence states that the society converted the interior into an archive for farm records, photographs, and letters. B) Wrong: the text explicitly says the society did not reopen it as a working mill. C) Wrong: no school or training is mentioned. D) Wrong: the waterwheel was repaired, but the building's use is an archive of records, not a museum of machinery.",
  "choices": [
   "an archive for the county's historical records",
   "a working mill that grinds grain for local farms",
   "a school for training new millers",
   "a museum displaying restored waterwheels from across the county"
  ],
  "answerIndex": 0
 },
 {
  "id": "inf-005",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Central Ideas and Details",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "To follow the movements of juvenile sea turtles, researchers at the Cape Aldis marine station attach small satellite tags to the turtles' shells. The tags, which are designed to detach harmlessly after about six months, transmit the turtles' locations each time the animals surface. Using these transmissions, the researchers map the routes the young turtles take through the open ocean.",
  "question": "According to the text, the researchers learn the turtles' locations when",
  "solution": "The question asks what the text directly states. A) Wrong: detachment ends the tracking after about six months; it is not when locations are transmitted. B) Correct: the text states the tags transmit the turtles' locations each time the animals surface. C) Wrong: recapture is never mentioned. D) Wrong: the text describes open-ocean routes, not a return to a beach.",
  "choices": [
   "the tags detach from the turtles' shells",
   "the turtles surface and their tags transmit",
   "the researchers recapture the turtles at the marine station",
   "the turtles return to the beach where they hatched"
  ],
  "answerIndex": 1
 },
 {
  "id": "inf-006",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Central Ideas and Details",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "Cartographer Ines Vidal spent ten years as a ship's navigator before she began drawing maps professionally. Her years at sea, she later wrote, taught her which details sailors actually needed on a chart: the depth of a harbor entrance mattered more than the decoration along its edges. Her charts became known for their plain, practical style.",
  "question": "According to the text, Vidal worked as a ship's navigator",
  "solution": "The question asks what the text directly states. A) Wrong: her navigation years came first; the fame of her charts came later. B) Wrong: no season or schedule for her navigation work is mentioned. C) Correct: the first sentence states she spent ten years as a navigator before she began drawing maps professionally. D) Wrong: no second job is mentioned.",
  "choices": [
   "after her charts had made her famous",
   "only during the winter months",
   "before she began drawing maps professionally",
   "while also working as a harbor pilot"
  ],
  "answerIndex": 2
 },
 {
  "id": "inf-007",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Central Ideas and Details",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "The lens of the Gull Rock lighthouse rotates once every twenty seconds. The rotation, the lighthouse's first keeper explained, serves a practical purpose: a moving beam appears to flash as it passes a ship, and a flashing light can be distinguished from the steady lights of the town behind the lighthouse. Each lighthouse on the coast was given its own pattern of flashes so that sailors could tell them apart.",
  "question": "According to the text, the lens of the Gull Rock lighthouse rotates in order to",
  "solution": "The question asks what the text directly states. A) Wrong: the text never says rotation extends the beam's range. B) Wrong: heat is never mentioned. C) Wrong: the light serves the ships, warning and guiding them; the text does not describe signaling the town. D) Correct: the text gives exactly this purpose: the moving beam appears to flash, and a flashing light stands out from steady town lights.",
  "choices": [
   "project the beam farther out to sea",
   "keep the lens from overheating",
   "signal the town when a ship is approaching",
   "make the light appear to flash so ships can distinguish it from the town's steady lights"
  ],
  "answerIndex": 3
 },
 {
  "id": "inf-008",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Central Ideas and Details",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "The lock gates on the Brindle Canal are opened and closed by electric motors installed in 1985. Before that, gatekeepers turned the gates with hand cranks, a task that took two workers nearly an hour for each boat. The motors, by contrast, move the gates in under five minutes, and a single operator can now run the lock from a small control house beside the gates.",
  "question": "According to the text, before 1985 the canal's lock gates were moved by",
  "solution": "The question asks what the text directly states. A) Correct: the text states that before the motors, gatekeepers turned the gates with hand cranks. B) Wrong: the motors were installed in 1985; they are what replaced the earlier method. C) Wrong: the current is never mentioned as moving the gates. D) Wrong: no animals are mentioned.",
  "choices": [
   "gatekeepers using hand cranks",
   "electric motors",
   "the force of the canal's current",
   "horses walking in a circle beside the lock"
  ],
  "answerIndex": 0
 },
 {
  "id": "inf-009",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Command of Evidence",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "City transportation director Ana Ruiz claims that the city's new bike-share program has reduced car traffic downtown.",
  "question": "Which finding, if true, would best support Ruiz's claim?",
  "solution": "The evidence must bear on the claim itself: car traffic downtown. A) Wrong: growing membership alone does not show that car traffic fell; members might use the bikes only for recreation. B) Correct: it links the program directly to fewer car trips, with riders reporting that the trips replaced drives. C) Wrong: sales are a different outcome; the claim is about car traffic, not commerce. D) Wrong: car ownership by riders, by itself, works against the idea that the program took cars off the road; nothing here shows reduced driving.",
  "choices": [
   "Membership in the bike-share program grew steadily during its first year.",
   "A traffic survey found that on streets with bike-share stations, car trips fell by 12 percent in the program's first year, and most surveyed riders said they would otherwise have driven.",
   "Downtown businesses reported that sales rose during the program's first year.",
   "A survey found that most bike-share riders also own cars."
  ],
  "answerIndex": 1
 },
 {
  "id": "inf-010",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Command of Evidence",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "Botanist Helen Amari claims that she identified the unknown plant she found in the Kestrel Valley by the shape of its leaves rather than by its flowers.",
  "question": "Which quotation from Amari's notebook would best support her claim?",
  "solution": "The quotation must show identification by leaves, not flowers. A) Wrong: this describes the flowers later; it does not show she identified the plant by its leaves. B) Wrong: pressing a specimen does not show which feature she used to identify it. C) Correct: it states she could not use flowers (the plant was not in bloom) and that the leaves' features made the identification. D) Wrong: this credits the flowers with easy identification, the opposite of her claim that she used the leaves.",
  "choices": [
   "“The plant's flowers, when they opened the following week, were a deep violet color.”",
   "“I pressed a specimen of the plant, flowers and all, into my notebook.”",
   "“The plant was not in bloom, so I turned to the leaves: their serrated edges and three-lobed shape matched only one species in my guide.”",
   "“The flowers were so distinctive that any botanist would have recognized the species at once.”"
  ],
  "answerIndex": 2
 },
 {
  "id": "inf-011",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Command of Evidence",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "A teacher claims that having young children practice forming letters by hand helps them learn to recognize those letters when reading.",
  "question": "Which finding, if true, would best support the teacher's claim?",
  "solution": "The evidence must test the claimed benefit: recognition when reading. A) Wrong: enjoyment of writing tools does not show better letter recognition. B) Wrong: neatness is a different outcome; the claim concerns recognizing letters when reading. C) Wrong: this favors the comparison method over handwriting practice, working against the claim. D) Correct: it compares handwriting practice against looking only, and shows better letter recognition — exactly the claimed benefit.",
  "choices": [
   "Children generally enjoy using pencils and crayons during classroom activities.",
   "Children who practiced writing letters by hand wrote more neatly than other children.",
   "Children who only looked at letters on flashcards learned their names fastest of all.",
   "Children who practiced writing letters by hand later identified those letters in books more accurately than children who had only looked at the letters."
  ],
  "answerIndex": 3
 },
 {
  "id": "inf-012",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Command of Evidence",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "Music historian Paul Okafor claims that composer Marta Lindgren revised her second symphony after hearing it performed for the first time.",
  "question": "Which quotation from Lindgren's letters would best support Okafor's claim?",
  "solution": "The quotation must connect the revision to the first performance. A) Correct: it ties the revision directly to hearing the first performance: she heard the problem at the premiere and rewrote the movement afterward. B) Wrong: finishing and copying the score says nothing about revising it after a performance. C) Wrong: a commission for a new work is unrelated to revising this symphony. D) Wrong: this states she never revises after performance, directly against the claim.",
  "choices": [
   "“Only at the premiere, hearing the slow movement played, did I see that it dragged; I rewrote its second half within the month.”",
   "“I finished the score of the symphony in March and sent it to the copyist the same week.”",
   "“The orchestra's conductor has asked me for a new work for next season.”",
   "“I never alter a note once a symphony of mine has been performed.”"
  ],
  "answerIndex": 0
 },
 {
  "id": "inf-013",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Command of Evidence",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "Wildlife biologist Dana Ferreira claims that burrowing owls in the San Pedro grasslands benefit from living near prairie dog colonies.",
  "question": "Which finding, if true, would best support Ferreira's claim?",
  "solution": "The evidence must show a benefit to the owls from the colonies. A) Wrong: colony growth says nothing about whether owls benefit. B) Correct: it shows a concrete benefit (more chicks raised) and a mechanism (alarm calls) tied to living near the colonies. C) Wrong: shared activity hours do not by themselves show a benefit to the owls. D) Wrong: greater nest losses near colonies would show harm, not benefit.",
  "choices": [
   "Prairie dog colonies in the San Pedro grasslands have grown larger over the past decade.",
   "Burrowing owls nesting at the edges of prairie dog colonies raised more chicks than owls nesting far from any colony, partly because the prairie dogs' alarm calls warned the owls of approaching predators.",
   "Burrowing owls and prairie dogs are both active during the day.",
   "Burrowing owls nesting near prairie dog colonies were more likely to have their nests raided by predators than owls elsewhere."
  ],
  "answerIndex": 1
 },
 {
  "id": "inf-014",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Command of Evidence",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "A school librarian claims that keeping the library open in the evenings increased students' use of the library.",
  "question": "Which choice best supports the librarian's claim?",
  "solution": "The evidence must measure use of the library itself. A) Wrong: new furniture does not measure whether students used the library more. B) Wrong: enthusiasm about reading is not the same as increased use of the library. C) Correct: it measures student use directly and shows it grew once evening hours existed. D) Wrong: who requested the hours says nothing about whether use increased.",
  "choices": [
   "The library purchased new furniture for its reading room during the same semester.",
   "Teachers reported that students seemed more enthusiastic about reading that year.",
   "In the semester after evening hours began, the number of students checking out books after 6 p.m. rose from almost none to nearly a third of all checkouts.",
   "Evening hours were requested by the school's parent association the year before."
  ],
  "answerIndex": 2
 },
 {
  "id": "inf-015",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Command of Evidence",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "Explorer James Hartwell claims in his memoir that his expedition turned back from the northern pass because of ice, not because the party had run short of food.",
  "question": "Which quotation from Hartwell's expedition journal would best support his claim?",
  "solution": "The quotation must name ice, and exclude food, as the reason. A) Wrong: cold slowing progress is not the stated reason for turning back; the claim specifies ice blocking the pass. B) Wrong: this detail gives no reason for the decision to turn back. C) Wrong: this names food shortage as the reason — exactly what Hartwell denies. D) Correct: it rules out the food explanation (stores were ample) and names ice as the reason for turning back.",
  "choices": [
   "“By the third week, the cold had slowed our progress to a few miles a day.”",
   "“We buried the last of the sled dogs in the snow that morning.”",
   "“With our flour nearly gone, we had no choice but to abandon the pass.”",
   "“Our stores were still ample, but the pass was sealed by a wall of ice no axe could clear; there was nothing to do but turn back.”"
  ],
  "answerIndex": 3
 },
 {
  "id": "inf-016",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Command of Evidence",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "A textile researcher claims that the fabric her team developed dries faster than standard cotton fabric.",
  "question": "Which finding, if true, would best support the researcher's claim?",
  "solution": "The evidence must compare drying speed directly. A) Correct: it is a direct timed comparison of drying speed between the two fabrics. B) Wrong: softness is a different property; the claim is about drying speed. C) Wrong: a preference for feel does not measure drying time. D) Wrong: absorbing more water would tend to slow drying, working against the claim.",
  "choices": [
   "In timed trials, identical swatches soaked in water dried completely in 40 minutes with the new fabric, compared with 95 minutes for standard cotton.",
   "The new fabric was softer to the touch than standard cotton in blind tests.",
   "Athletes surveyed said they preferred the feel of the new fabric for sportswear.",
   "The new fabric absorbed more water than standard cotton when both were soaked."
  ],
  "answerIndex": 0
 },
 {
  "id": "inf-017",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Command of Evidence",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "A reading specialist claims that students who regularly quiz each other on vocabulary words retain the words longer than students who reread the word list.",
  "question": "Which finding, if true, would best support the specialist's claim?",
  "solution": "The evidence must measure retention over time, not first learning. A) Wrong: enjoyment does not show longer retention. B) Correct: it compares the two methods on delayed retention — the exact outcome the claim names. C) Wrong: speed of first learning is not the claim; the claim is about how long the words are retained. D) Wrong: an immediate-test advantage for rereading does not support a claim about longer retention through quizzing; if anything it points the other way.",
  "choices": [
   "Students reported that quizzing each other was more enjoyable than rereading the list.",
   "Two weeks after learning a set of words, students who had quizzed each other remembered 80 percent of the words, while students who had reread the list remembered 55 percent.",
   "Students who quizzed each other learned the words faster during the first lesson.",
   "Students who reread the list scored highest on a test given immediately after the lesson."
  ],
  "answerIndex": 1
 },
 {
  "id": "inf-018",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Central Ideas and Details",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "The Harborview bookmobile began in 1988 as a single converted bus that visited four neighborhoods once a month. Today it operates three vehicles, stops at twenty-two locations each week, and carries not only books but also laptops that visitors can use on board. Library officials credit the bookmobile with reaching residents who live far from any branch library.",
  "question": "Which choice best states the main idea of the text?",
  "solution": "A main idea must cover the whole text, not one detail. A) Wrong: laptops are mentioned, but their popularity is never compared with that of the books. B) Wrong: the starting date is one detail, not the main idea of the whole text. C) Correct: it covers the small beginning, the present scale, the added services, and the bookmobile's role in reaching distant residents. D) Wrong: nothing in the text mentions opposition; officials praise the service instead.",
  "choices": [
   "The bookmobile's laptops are its most popular service.",
   "The bookmobile first began operating in 1988.",
   "A bookmobile service that started small has grown into a major way for the library to reach residents across the area.",
   "Residents of Harborview opposed the bookmobile when it was proposed."
  ],
  "answerIndex": 2
 },
 {
  "id": "inf-019",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Command of Evidence",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "A gardener grew seedlings under three lighting conditions for two weeks and measured their average height.\n\nLighting condition | Average height (cm)\nFull sunlight | 14\nPartial shade | 9\nFull shade | 5",
  "question": "Which statement is best supported by the data in the table?",
  "solution": "The statement must match the numbers in the table. A) Wrong: the table gives 5 cm for full shade and 9 cm for partial shade; the relationship is the reverse. B) Wrong: partial shade (9 cm) is less than full sunlight (14 cm), not twice it. C) Wrong: the table reports heights only; it offers no explanation of causes. D) Correct: 14 cm in full sunlight exceeds both 9 cm in partial shade and 5 cm in full shade.",
  "choices": [
   "Seedlings in full shade grew taller, on average, than seedlings in partial shade.",
   "Seedlings in partial shade grew twice as tall as seedlings in full sunlight.",
   "Seedlings in full sunlight grew taller because sunlight increases photosynthesis.",
   "Seedlings in full sunlight grew taller, on average, than seedlings in either of the other conditions."
  ],
  "answerIndex": 3
 },
 {
  "id": "inf-020",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Command of Evidence",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "A city transit agency recorded the number of bus riders on a route in two different months.\n\nMonth | Riders\nMarch | 8,400\nJune | 11,200",
  "question": "Based on the table, which statement is accurate?",
  "solution": "The statement must match the numbers in the table. A) Correct: 11,200 − 8,400 = 2,800. B) Wrong: June's figure is higher, not lower; the difference is an increase. C) Wrong: twice 8,400 would be 16,800, not 11,200. D) Wrong: the table gives ridership only; no cause is stated.",
  "choices": [
   "The route carried 2,800 more riders in June than in March.",
   "The route carried 2,800 fewer riders in June than in March.",
   "The route carried twice as many riders in June as in March.",
   "Ridership rose because of a fare reduction in June."
  ],
  "answerIndex": 0
 },
 {
  "id": "inf-021",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Command of Evidence",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "An engineer compared the insulation values (R-values) of four materials. A higher R-value means the material resists heat flow better.\n\nMaterial | R-value\nFiberglass | 11\nFoam board | 15\nCellulose | 13\nStraw bale | 8",
  "question": "Based on the table, which material resists heat flow the best?",
  "solution": "The text defines the measure: higher R-value means better resistance. A) Wrong: fiberglass (11) is below foam board (15). B) Correct: foam board has the highest R-value, 15, and the text states that a higher R-value means better resistance to heat flow. C) Wrong: cellulose (13) is below foam board (15). D) Wrong: straw bale has the lowest R-value, 8.",
  "choices": [
   "Fiberglass",
   "Foam board",
   "Cellulose",
   "Straw bale"
  ],
  "answerIndex": 1
 },
 {
  "id": "inf-022",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Command of Evidence",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "A weather station recorded weekly rainfall over four weeks.\n\nWeek | Rainfall (inches)\nWeek 1 | 2\nWeek 2 | 1\nWeek 3 | 4\nWeek 4 | 3",
  "question": "What was the total rainfall, in inches, over the four weeks?",
  "solution": "The question asks for the sum of all four weeks. A) Wrong: 9 is not the sum of the four weekly values (2 + 1 + 4 + 3 = 10). B) Wrong: 11 is not the sum of the four weekly values (2 + 1 + 4 + 3 = 10). C) Correct: 2 + 1 + 4 + 3 = 10. D) Wrong: 4 inches is only Week 3's rainfall, not the four-week total.",
  "choices": [
   "9",
   "11",
   "10",
   "4"
  ],
  "answerIndex": 2
 },
 {
  "id": "inf-023",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Inferences",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "The desert tortoise spends most of the year underground in burrows. Unlike most other tortoises, it can store large amounts of water in its bladder, drawing on that supply during dry months. Biologists have recorded desert tortoises surviving for more than a year without drinking any water at all.",
  "question": "The text most strongly suggests that the desert tortoise",
  "solution": "A 'most strongly suggests' answer must stay close to what the text states. A) Wrong: the text emphasizes how little it needs to drink, surviving a year or more with none. B) Wrong: the text says it spends most of the year underground, not all of its life. C) Wrong: size is never mentioned. D) Correct: the text states this nearly directly: stored bladder water carries it through dry months, and individuals have survived more than a year without drinking.",
  "choices": [
   "drinks more water than other tortoise species",
   "lives underground for its entire life",
   "is the largest tortoise species in the desert",
   "can endure long periods without drinking water"
  ],
  "answerIndex": 3
 },
 {
  "id": "inf-024",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Inferences",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "In the 1880s, the town of Hartley had the only printing press within sixty miles. Printers in three surrounding counties therefore sent their newspapers and pamphlets to Hartley to be printed, and the Hartley print shop employed a dozen workers at its busiest.",
  "question": "The text most strongly suggests that in the 1880s, communities near Hartley",
  "solution": "A 'most strongly suggests' answer must stay close to what the text states. A) Correct: printers in three counties sent their work to Hartley because it had the only press within sixty miles — they had no local press to use. B) Wrong: the numbers of newspapers published in each place are never compared. C) Wrong: the counties relied on Hartley's press; nothing suggests refusal. D) Wrong: no such plan is mentioned.",
  "choices": [
   "lacked printing facilities of their own",
   "published more newspapers than Hartley did",
   "refused to read newspapers printed in Hartley",
   "planned to build a shared printing press of their own"
  ],
  "answerIndex": 0
 },
 {
  "id": "inf-025",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Inferences",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "The wood frog, found across northern North America, survives winter in an unusual way. As temperatures fall, ice crystals form in the frog's body and its heart stops beating. In spring, the frog thaws, its heart restarts, and it resumes its normal activity, apparently unharmed.",
  "question": "The text most strongly suggests that the wood frog",
  "solution": "A 'most strongly suggests' answer must stay close to what the text states. A) Wrong: the frog stays and freezes in place; no migration is described. B) Correct: the text describes ice forming in its body and its heart stopping, followed by a full recovery in spring. C) Wrong: the text calls the frog 'found across' the region; it never says it is the only species there. D) Wrong: its heart stops beating in winter, so it is not active.",
  "choices": [
   "avoids cold regions by migrating south each winter",
   "can survive having its body partially frozen",
   "is the only frog species found in northern North America",
   "remains active throughout the winter"
  ],
  "answerIndex": 1
 },
 {
  "id": "inf-026",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Inferences",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "Before shaping bread dough into loaves, bakers let the dough rest for twenty minutes after kneading. During kneading, the dough's gluten strands become tightly stretched, and dough in that state springs back when a baker tries to roll it flat. Resting allows the gluten to relax, so ______.",
  "question": "Which choice most logically completes the text?",
  "solution": "The completion must follow from the stated mechanism. A) Wrong: rising speed is never mentioned; the text is about elasticity and shaping. B) Wrong: the resting happens after kneading, which remains part of the process described. C) Correct: the text sets up a problem (tightly stretched gluten springs back during shaping) and a remedy (resting relaxes the gluten); the completion must state the result of the remedy: shaping without the spring-back. D) Wrong: resting relaxes the gluten — the opposite of tightening it.",
  "choices": [
   "the dough will rise faster than it would without resting",
   "bakers no longer need to knead the dough at all",
   "the dough can then be shaped without springing back",
   "the gluten becomes even more tightly stretched"
  ],
  "answerIndex": 2
 },
 {
  "id": "inf-027",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Inferences",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "A town's water tower holds the supply that firefighters draw on during emergencies. During a drought in 2019, the town asked residents to stop watering lawns, and water use fell by a third within two weeks. The tower's level, which had been dropping steadily, stabilized. Town officials concluded that lawn watering had accounted for a large share of the town's water use, because ______.",
  "question": "Which choice most logically completes the text?",
  "solution": "The completion must supply the evidence behind the officials' conclusion. A) Wrong: complaints about taste say nothing about how much water lawn watering used. B) Wrong: the text credits the change to the request during the drought; it does not say the drought ended. C) Wrong: the tower's age is irrelevant to what share of use lawn watering represented. D) Correct: the conclusion that lawn watering was a large share of use rests on the timing the text reports: when watering stopped, use dropped by a third and the decline halted.",
  "choices": [
   "residents had complained about the taste of the water that summer",
   "the drought ended shortly after the request was made",
   "the water tower had been built many years earlier",
   "use fell sharply and the tower stabilized as soon as lawn watering stopped"
  ],
  "answerIndex": 3
 },
 {
  "id": "inf-028",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Inferences",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "Most metals in the Harborview museum's collection tarnished within a few years of being put on display. The collection's bronze bell, however, still looks polished after forty years in the same gallery. Before the bell was installed, conservators coated it with a clear wax, a treatment none of the other metal objects received.",
  "question": "The text most strongly suggests that the bronze bell's lasting shine is due to",
  "solution": "A 'most strongly suggests' answer must stay close to what the text states. A) Correct: the bell is the only object that received the wax coating, and it is the only one that did not tarnish in the same gallery. B) Wrong: the text says most metals in the collection tarnished and singles out the coating as the bell's only difference; it does not claim bronze never tarnishes. C) Wrong: cleaning schedules are never mentioned. D) Wrong: the objects share the same gallery, and lighting differences are never mentioned.",
  "choices": [
   "the protective wax coating applied before it was displayed",
   "the bronze being a metal that never tarnishes",
   "the bell being cleaned more often than the other objects",
   "the gallery's lighting being gentler near the bell"
  ],
  "answerIndex": 0
 },
 {
  "id": "inf-029",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Central Ideas and Details",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "Since 2018, the city of Norwood has required new buildings to include rain gardens — shallow planted basins that collect runoff from roofs and pavement. Engineers estimate that the gardens now absorb about a fifth of the stormwater that once flowed directly into the city's drains. Flooding on several chronically wet streets has decreased, though the city's oldest neighborhoods, where few new buildings have gone up, have seen little change.",
  "question": "Which choice best states the main idea of the text?",
  "solution": "A main idea must cover the whole text, including its stated limitation. A) Wrong: this is a definition of one term, not the main idea of the text. B) Correct: it covers the requirement, the measured effect on stormwater, the flooding benefit, and the stated limitation in older neighborhoods. C) Wrong: the text says older neighborhoods saw little change; it never ranks their flooding against other areas. D) Wrong: engineers are cited as the source of the estimates; no opposition is mentioned.",
  "choices": [
   "Rain gardens are shallow planted basins that collect runoff from roofs and pavement.",
   "Norwood's rain garden requirement has cut the stormwater reaching city drains and reduced flooding, though unevenly across neighborhoods.",
   "Norwood's oldest neighborhoods have the worst flooding in the city.",
   "Engineers opposed Norwood's rain garden requirement when it was proposed."
  ],
  "answerIndex": 1
 },
 {
  "id": "inf-030",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Central Ideas and Details",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "The community radio station in Ellery broadcasts from a former firehouse, staffed entirely by volunteers. Its programs range from a morning farm report to evening readings of local poets. Although its signal reaches only about thirty miles, the station has become the area's main source of school-closing announcements and local election results, information that larger regional stations rarely provide.",
  "question": "Which choice best states the main idea of the text?",
  "solution": "A main idea must cover the whole text, not one detail. A) Wrong: these programs are examples of its range, not the main idea. B) Wrong: the text says larger stations rarely provide this information; it mentions no plans to change. C) Correct: it captures the contrast the text builds: tiny signal and volunteer staff, yet the main source of local announcements and results. D) Wrong: no expansion hope or plan is mentioned.",
  "choices": [
   "Ellery's radio station broadcasts a morning farm report and evening poetry readings.",
   "Larger regional stations plan to expand their local coverage.",
   "Despite its small reach, Ellery's volunteer radio station serves as the area's key source of local information.",
   "The station's volunteers hope to increase its signal range to fifty miles."
  ],
  "answerIndex": 2
 },
 {
  "id": "inf-031",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Central Ideas and Details",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "High in the Andes, the weather station at Mount Caya has operated continuously since 1962, one of the longest-running high-altitude stations in the world. Its daily records of temperature, wind, and  snowfall — kept first in paper ledgers and now digitally — give scientists an unbroken record of how the climate at extreme elevations has changed over six decades. Researchers say such long, consistent records are rare and especially valuable.",
  "question": "Which choice best states the main idea of the text?",
  "solution": "A main idea must cover the whole text, not one detail. A) Wrong: the record-keeping format is a minor detail, not the main idea. B) Wrong: cost and difficulty of maintenance are never discussed. C) Wrong: the text calls it one of the longest-running high-altitude stations, not the highest station in the world. D) Correct: it covers the station's continuous operation since 1962, the records it keeps, and why scientists prize them.",
  "choices": [
   "The station's records were first kept in paper ledgers.",
   "High-altitude weather stations are difficult and expensive to maintain.",
   "Mount Caya has the highest elevation of any weather station in the world.",
   "Mount Caya's weather station provides an unusually long and unbroken climate record that researchers value highly."
  ],
  "answerIndex": 3
 },
 {
  "id": "inf-032",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Central Ideas and Details",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "When the city of Aldgate formed its first community orchestra in 1975, it had eleven members and rehearsed in a school basement. Today the orchestra has ninety players, performs in the city's concert hall, and runs a program that lends instruments to students who cannot afford to buy them. Its director says the orchestra's founding goal — making music a part of everyday life in Aldgate — still guides its decisions.",
  "question": "Which choice best states the main idea of the text?",
  "solution": "A main idea must cover the whole text, not one detail. A) Correct: it covers the growth (eleven to ninety players, basement to concert hall), the outreach program, and the continuity of the founding goal. B) Wrong: the lending program is one detail of the orchestra's work, not the main idea. C) Wrong: the director is quoted, but when she joined is never stated. D) Wrong: no comparison with professional orchestras is made.",
  "choices": [
   "Aldgate's community orchestra has grown from a small basement ensemble into a large institution still guided by its founding goal.",
   "The orchestra lends instruments to students who cannot afford to buy them.",
   "The orchestra's director joined the ensemble in 1975.",
   "Community orchestras are more popular than professional ones in Aldgate."
  ],
  "answerIndex": 0
 },
 {
  "id": "inf-033",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Central Ideas and Details",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "To develop a quieter aircraft propeller, engineers tested three prototypes. The first, made of aluminum, reduced noise only slightly. The second prototype kept the aluminum blades but added a serrated edge, which cut the noise nearly in half. Only the third prototype changed the blade material, using a carbon-fiber composite that reduced the noise still further.",
  "question": "According to the text, the second prototype differed from the first in that it",
  "solution": "The question asks what the text directly states about one specific prototype. A) Wrong: the material change came only in the third prototype. B) Correct: the text states the second prototype kept the aluminum blades and added a serrated edge. C) Wrong: the third prototype reduced the noise 'still further' than the second. D) Wrong: testing speeds are never mentioned.",
  "choices": [
   "used a carbon-fiber composite instead of aluminum",
   "added a serrated edge to the aluminum blades",
   "reduced the noise more than the third prototype did",
   "was tested at a higher speed than the first"
  ],
  "answerIndex": 1
 },
 {
  "id": "inf-034",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Central Ideas and Details",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "Two warbler species look nearly identical, but the text of a field guide distinguishes them as follows. The pine warbler, the guide notes, feeds by picking insects from bark and pine needles high in the trees, while the palm warbler feeds mostly on the ground, bobbing its tail as it walks. Birders are advised that where a bird is feeding is often the fastest way to tell the two apart.",
  "question": "According to the text, the palm warbler differs from the pine warbler in that the palm warbler",
  "solution": "The question asks what the text directly states about one specific species. A) Wrong: the species are described as nearly identical in appearance; no brightness difference is given. B) Wrong: feeding high in the trees is the pine warbler's behavior, not the palm warbler's. C) Correct: the text states the palm warbler feeds mostly on the ground, in contrast to the pine warbler's high feeding. D) Wrong: the text says the palm warbler bobs its tail as it walks.",
  "choices": [
   "has brighter feathers than the pine warbler",
   "feeds high in pine trees",
   "feeds mostly on the ground",
   "does not bob its tail as it walks"
  ],
  "answerIndex": 2
 },
 {
  "id": "inf-035",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Central Ideas and Details",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "The city council voted to postpone the bridge inspection contract for a second time. Council members said the delay was necessary because the only engineering firm that had bid on the contract had not yet submitted its safety certifications. Without those documents, the council's attorney explained, the city could not legally sign the contract, even though the bridge's inspection was already overdue.",
  "question": "According to the text, the council postponed the contract because",
  "solution": "The question asks for the reason the text itself gives. A) Wrong: the overdue inspection is background pressure, not the reason given for postponing; the missing documents are the reason. B) Wrong: the text says only one firm had bid. C) Wrong: the attorney's role concerned the legal requirement for certifications, not a design review. D) Correct: the text gives this as the council's stated reason: without the certifications, the contract could not legally be signed.",
  "choices": [
   "the bridge's inspection was already overdue",
   "several firms were competing for the contract",
   "the council's attorney had not reviewed the bridge's design",
   "the bidding firm had not yet submitted its safety certifications"
  ],
  "answerIndex": 3
 },
 {
  "id": "inf-036",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Central Ideas and Details",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "In a tide pool, the green anemone survives hours of exposure to air at low tide by closing its tentacles into a tight ball. Closed, the anemone traps a small amount of seawater inside its body, keeping its tissues moist until the tide returns. The anemone's bright green color, meanwhile, comes from algae living within its tissues.",
  "question": "According to the text, the green anemone closes its tentacles at low tide in order to",
  "solution": "The question asks what the text directly states. A) Correct: the text states that closed, the anemone traps seawater inside, keeping its tissues moist until the tide returns. B) Wrong: feeding is not mentioned in connection with closing. C) Wrong: the algae explain the anemone's color; protecting them is never given as the reason for closing. D) Wrong: predators and visibility are never mentioned.",
  "choices": [
   "trap seawater inside its body so its tissues stay moist",
   "capture small animals that wander into the pool",
   "protect the algae living in its tissues from sunlight",
   "make itself less visible to predators"
  ],
  "answerIndex": 0
 },
 {
  "id": "inf-037",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Central Ideas and Details",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "Tool-lending libraries, where residents can borrow hammers, drills, and ladders the way they borrow books, have spread to more than a hundred American towns in the past decade. Supporters say the libraries save residents money and storage space, since most power tools are used only a few times a year. Some libraries also offer repair workshops, teaching borrowers to fix lamps, chairs, and bicycles instead of replacing them.",
  "question": "Which choice best states the main idea of the text?",
  "solution": "A main idea must cover the whole text, not one detail. A) Wrong: this fact supports the main idea but is only one detail within it. B) Correct: it covers the spread, both stated reasons for the appeal, and the additional workshop role. C) Wrong: the text gives saving money and space as the appeal; workshops are an additional feature of only some libraries. D) Wrong: the text dates the spread to the past decade and gives no earlier origin.",
  "choices": [
   "Most power tools are used only a few times a year.",
   "Tool-lending libraries have spread widely because they save residents money and space, and some also teach repair skills.",
   "Repair workshops are the main reason tool-lending libraries have spread.",
   "Tool-lending libraries began in the United States a century ago."
  ],
  "answerIndex": 1
 },
 {
  "id": "inf-038",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Command of Evidence",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "A school principal claims that a mentoring program improved graduation rates mainly for students who met with their mentors every week.",
  "question": "Which finding, if true, would best support the principal's claim?",
  "solution": "The claim is about a specific frequency of meetings; the evidence must isolate that frequency. A) Wrong: this supports a general benefit of the program, but the claim is specifically about weekly meetings; the finding does not separate meeting frequencies. B) Wrong: enjoyment does not measure graduation rates. C) Correct: the claim is frequency-specific: the benefit appears only with weekly meetings, and this finding shows exactly that pattern. D) Wrong: this reverses the claim's frequency pattern.",
  "choices": [
   "Students in the mentoring program graduated at a higher rate than students who were not in the program.",
   "Students said they enjoyed meeting their mentors and looked forward to the sessions.",
   "Students who met mentors weekly graduated at a rate 15 points higher than similar students without mentors, while students who met mentors once a month graduated at about the same rate as students without mentors.",
   "Students who met mentors once a month graduated at a higher rate than students who met mentors weekly."
  ],
  "answerIndex": 2
 },
 {
  "id": "inf-039",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Command of Evidence",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "Historian Grace Liu claims that the negotiators who signed the Treaty of Harlow in 1911 did so reluctantly, doubting that its terms would hold.",
  "question": "Which quotation from a negotiator's diary would best support Liu's claim?",
  "solution": "The quotation must show both reluctance and doubt about the terms. A) Wrong: ceremony details reveal nothing about the signers' attitudes. B) Wrong: procedure at the signing does not show reluctance or doubt about the terms. C) Wrong: this expresses confidence in the treaty's durability, the opposite of doubt. D) Correct: it shows both reluctance (he signed only to avoid war) and doubt that the terms would hold (five years at most).",
  "choices": [
   "“The hall was crowded and hot, and the signing ceremony lasted nearly three hours.”",
   "“The treaty's terms were read aloud twice before we signed, as custom requires.”",
   "“At last we have a settlement built to last; every party signed with confidence.”",
   "“I signed because the alternative was a renewed war we could not afford, though I give this peace five years at most.”"
  ],
  "answerIndex": 3
 },
 {
  "id": "inf-040",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Command of Evidence",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "An agronomist claims that a new irrigation method conserves water mainly by reducing evaporation, rather than by delivering less water to the crops.",
  "question": "Which finding, if true, would best support the agronomist's claim?",
  "solution": "The claim specifies a mechanism; the evidence must match the mechanism, not just the outcome. A) Correct: the claim names a mechanism — reduced evaporation with delivery unchanged — and this finding confirms both halves. B) Wrong: total savings alone do not identify the mechanism; the water might have been saved by delivering less, which the claim denies is the main route. C) Wrong: crop height does not address how water was conserved. D) Wrong: this credits reduced delivery — the mechanism the claim says is not the main one.",
  "choices": [
   "Fields using the new method received the same amount of water as other fields, but moisture measurements showed far less water lost to the air during the hottest hours.",
   "Fields using the new method used 30 percent less water overall than other fields.",
   "Crops in fields using the new method grew taller than crops in other fields.",
   "Measurements showed the new method worked by releasing water more slowly from smaller pipes, so crops received less water each day."
  ],
  "answerIndex": 0
 },
 {
  "id": "inf-041",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Command of Evidence",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "Ornithologist Tomas Rhee claims that the warblers in his study area have begun migrating earlier in spring because spring temperatures there have risen.",
  "question": "Which finding, if true, would most directly support Rhee's claim?",
  "solution": "The claim links two variables; the evidence must link them too. A) Wrong: the claim concerns spring temperatures in the study area where the birds arrive, not conditions on the wintering grounds. B) Correct: it links the two variables the claim connects: warmer springs and earlier arrival, compared across years. C) Wrong: earlier arrival alone is only half the claim; without the temperature comparison it does not support the stated cause. D) Wrong: staying longer in warm years would delay, not advance, migration.",
  "choices": [
   "The warblers' wintering grounds have also grown warmer over the past twenty years.",
   "In years when spring temperatures in the study area were warmer than average, the warblers arrived earlier than in cooler years.",
   "The warblers now arrive in the study area about a week earlier than they did thirty years ago.",
   "In warmer springs, the warblers stayed on their wintering grounds longer than in cooler springs."
  ],
  "answerIndex": 1
 },
 {
  "id": "inf-042",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Command of Evidence",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "Literary scholar Anne Whitfield claims that novelist Robert Sayre based the character of the lighthouse keeper in his most famous novel on his own brother.",
  "question": "Which quotation from Sayre's biography would best support Whitfield's claim?",
  "solution": "The quotation must connect the character to the brother specifically. A) Wrong: the brother's real occupation makes the theory plausible but does not show Sayre modeled the character on him. B) Wrong: praise for the character says nothing about whom it was based on. C) Correct: it matches specific traits of the fictional keeper to the brother, which is what 'based on' requires. D) Wrong: this denies that any character was based on a real person.",
  "choices": [
   "“Sayre's brother Daniel worked for twenty years as a lighthouse keeper on the New England coast.”",
   "“The lighthouse keeper is the most fully realized character in any of Sayre's novels.”",
   "“Sayre gave the keeper his brother Daniel's red beard, his habit of humming while he worked, and even Daniel's fear of deep water.”",
   "“Sayre insisted in interviews that every character in the novel was invented from whole cloth.”"
  ],
  "answerIndex": 2
 },
 {
  "id": "inf-043",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Command of Evidence",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "In a trial, patients received either a combination of two medicines or each medicine alone. The combination relieved symptoms in 70 percent of patients. Medicine A alone relieved symptoms in 30 percent, and medicine B alone in 25 percent.",
  "question": "Which choice best supports the conclusion that the two medicines are more effective together than either is by itself?",
  "solution": "The conclusion is comparative; the evidence must make the comparison. A) Wrong: comparing A with B does not address the combination, which is what the conclusion is about. B) Wrong: the text says the combination relieved symptoms in 70 percent of patients; it does not say 70 percent received it. C) Wrong: dosing and patient preference are never mentioned. D) Correct: the conclusion is a comparison, and this choice states the comparison with the text's own figures.",
  "choices": [
   "Medicine A alone relieved symptoms in more patients than medicine B alone did.",
   "Seventy percent of patients in the trial received the combination.",
   "Patients preferred the combination because it required fewer doses.",
   "The combination's 70 percent relief rate is higher than the rate for medicine A alone (30 percent) or medicine B alone (25 percent)."
  ],
  "answerIndex": 3
 },
 {
  "id": "inf-044",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Command of Evidence",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "A charity's director claims that redesigning the charity's website increased small donations but had no effect on large ones.",
  "question": "Which finding, if true, would best support the director's claim?",
  "solution": "The claim has two parts; the evidence must match both. A) Correct: it shows both halves of the claim: small donations up, large donations unchanged. B) Wrong: a total rise could come from either category; the claim separates small from large donations. C) Wrong: time on site does not measure donation amounts. D) Wrong: the claim says large donations were unaffected; this says they rose sharply.",
  "choices": [
   "After the redesign, donations under $50 rose by 40 percent, while donations of $500 or more stayed at the same level as before.",
   "Total donations to the charity rose by 25 percent after the redesign.",
   "Visitors to the redesigned website stayed on the site longer than visitors to the old site.",
   "After the redesign, donations of $500 or more rose sharply, driving most of the charity's growth."
  ],
  "answerIndex": 0
 },
 {
  "id": "inf-045",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Command of Evidence",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "A gerontologist claims that a balance-training program benefited older adults more than younger adults who took the same program.",
  "question": "Which finding, if true, would best support the gerontologist's claim?",
  "solution": "A comparative claim needs comparative evidence. A) Wrong: the older group's gain alone does not support a claim comparing them with younger participants. B) Correct: it compares the two age groups on the same measure and shows the older group gaining more, as claimed. C) Wrong: enrollment rates say nothing about who benefited more. D) Wrong: a faster early gain by the younger group points against the claim's comparison of overall benefit.",
  "choices": [
   "Participants over 70 improved their balance scores by an average of 30 percent during the program.",
   "Participants over 70 improved their balance scores by an average of 30 percent, while participants under 40 improved by an average of 8 percent.",
   "Older adults were more likely than younger adults to enroll in the program.",
   "Younger participants improved their balance scores faster than older participants in the first week."
  ],
  "answerIndex": 1
 },
 {
  "id": "inf-046",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Command of Evidence",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "A library system recorded book checkouts at three branches in 2020 and again in 2024.\n\nBranch | Checkouts in 2020 | Checkouts in 2024\nNorth | 12,000 | 15,000\nEast | 9,000 | 10,500\nWest | 7,500 | 11,000",
  "question": "Based on the table, which branch had the greatest increase in checkouts between 2020 and 2024?",
  "solution": "The question asks about the increase, not the totals. A) Wrong: North has the highest totals, but its increase (3,000) is smaller than West's (3,500); the question asks about the increase. B) Wrong: East's increase is 1,500, the smallest of the three. C) Correct: West rose by 11,000 − 7,500 = 3,500, more than North's 3,000 and East's 1,500. D) Wrong: the increases are 3,000, 1,500, and 3,500 — all different.",
  "choices": [
   "North",
   "East",
   "West",
   "All three branches increased by the same amount"
  ],
  "answerIndex": 2
 },
 {
  "id": "inf-047",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Command of Evidence",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "The table shows the high temperatures, in degrees Fahrenheit, recorded in four cities on two days in July.\n\nCity | July 10 | July 11\nAlder | 88 | 91\nBexley | 84 | 82\nCorwin | 90 | 93\nDunmore | 79 | 84",
  "question": "Which statement is best supported by the data in the table?",
  "solution": "Check each statement against every row of the table. A) Wrong: on July 11 Corwin reached 93, higher than Dunmore's 84. B) Wrong: both rose by exactly 3 degrees (88→91 and 90→93). C) Wrong: three of the four cities warmed, and the table gives no causes. D) Correct: Bexley went from 84 to 82, a decrease; Alder, Corwin, and Dunmore all rose.",
  "choices": [
   "Dunmore had the highest temperature of the four cities on July 11.",
   "Alder warmed by more degrees than Corwin did.",
   "Temperatures fell across the region on July 11 because of a cold front.",
   "Bexley was the only city whose high temperature fell from July 10 to July 11."
  ],
  "answerIndex": 3
 },
 {
  "id": "inf-048",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Command of Evidence",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "Students grew bean plants with two fertilizers and measured each plant's height, in centimeters, after three weeks.\n\nFertilizer A heights: 12, 15, 14, 13\nFertilizer B heights: 18, 16, 19, 17",
  "question": "Based on the data, which statement is accurate?",
  "solution": "Compare the groups' averages, not single plants. A) Correct: B's heights average 17.5 cm; A's average 13.5 cm. B) Wrong: the averages run the other way: B averages 17.5 cm against A's 13.5 cm. C) Wrong: A's heights are 12, 15, 14, and 13 — none is below 12. D) Wrong: the data give heights only; fertilizer contents are not reported.",
  "choices": [
   "Plants grown with fertilizer B were taller, on average, than plants grown with fertilizer A.",
   "Plants grown with fertilizer A were taller, on average, than plants grown with fertilizer B.",
   "Every plant grown with fertilizer A was shorter than 12 centimeters.",
   "Fertilizer B contains more nitrogen than fertilizer A."
  ],
  "answerIndex": 0
 },
 {
  "id": "inf-049",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Command of Evidence",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "The table shows tickets sold by three theaters during one weekend.\n\nTheater | Saturday | Sunday\nRialto | 240 | 190\nGrand | 310 | 260\nPalace | 180 | 150",
  "question": "What was the total number of tickets sold by the Rialto and the Palace combined over the two days?",
  "solution": "Add only the two theaters the question names, across both days. A) Wrong: 730 does not match the sum of the Rialto and Palace rows (430 + 330 = 760). B) Correct: Rialto: 240 + 190 = 430. Palace: 180 + 150 = 330. Combined: 430 + 330 = 760. C) Wrong: 1,330 is the total for all three theaters, including the Grand, which the question excludes. D) Wrong: 570 is the Grand's total alone, not the Rialto and Palace combined.",
  "choices": [
   "730",
   "760",
   "1,330",
   "570"
  ],
  "answerIndex": 1
 },
 {
  "id": "inf-050",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Command of Evidence",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "A soil scientist measured the moisture content of soil at four depths below the surface of a field.\n\nDepth (cm) | Moisture (%)\n10 | 28\n20 | 24\n30 | 19\n40 | 15",
  "question": "Which statement is best supported by the data in the table?",
  "solution": "Follow the values down the table in order. A) Wrong: the values fall with depth, not rise. B) Wrong: the table gives 15 percent at 40 cm and 24 percent at 20 cm. C) Correct: the moisture values fall at every step: 28, 24, 19, 15 as depth increases from 10 to 40 cm. D) Wrong: the table reports depths, not seasons.",
  "choices": [
   "Soil moisture increased steadily as depth increased.",
   "Soil at 40 cm was wetter than soil at 20 cm.",
   "Soil moisture decreased steadily as depth increased.",
   "The field's soil held the most water in spring."
  ],
  "answerIndex": 2
 },
 {
  "id": "inf-051",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Command of Evidence",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "Four volunteers had their resting heart rates measured before and after a six-week exercise program.\n\nVolunteer | Before (bpm) | After (bpm)\nAna | 72 | 68\nBen | 78 | 70\nCora | 69 | 66\nDan | 75 | 64",
  "question": "Based on the table, which volunteer showed the greatest decrease in resting heart rate?",
  "solution": "Compute each decrease; do not just compare the 'after' values. A) Wrong: Ben's decrease (78→70) is 8 bpm, less than Dan's 11. B) Wrong: Ana's decrease (72→68) is only 4 bpm. C) Wrong: Cora's decrease (69→66) is 3 bpm, the smallest. D) Correct: Dan fell from 75 to 64, a decrease of 11 bpm — larger than Ben's 8, Ana's 4, and Cora's 3.",
  "choices": [
   "Ben",
   "Ana",
   "Cora",
   "Dan"
  ],
  "answerIndex": 3
 },
 {
  "id": "inf-052",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Inferences",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "In a study of a new reading program, researchers randomly assigned students to two groups. One group used the new program for a semester; the other used the school's standard materials. At the end of the semester, both groups took the same reading test. The new-program group scored higher on questions about passages they had never seen before, but the two groups scored about the same on questions about passages they had studied in class. The researchers concluded that the new program's benefit was specific rather than general: ______.",
  "question": "Which choice most logically completes the text?",
  "solution": "The completion must match the pattern of results the text reports. A) Correct: the results split exactly this way: gains on unseen passages, no difference on studied passages — a benefit confined to new material. B) Wrong: scores on studied passages were about the same in both groups, so the benefit was not across every kind of question. C) Wrong: interest is never measured or mentioned. D) Wrong: a recommendation about adoption goes beyond the conclusion about the benefit's specificity that the sentence sets up.",
  "choices": [
   "it improved students' ability to comprehend unfamiliar texts without changing how well they recalled familiar ones",
   "it raised students' reading scores across every kind of question",
   "it worked because its materials were more interesting than the standard ones",
   "it should replace the school's standard materials in all classes"
  ],
  "answerIndex": 0
 },
 {
  "id": "inf-053",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Inferences",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "A historian examining a bundle of letters attributed to a seventeenth-century merchant noticed that several letters describe, in detail, events that occurred months after the dates written on the letters themselves. Other letters in the bundle contain no such impossibilities. The most likely explanation is that ______.",
  "question": "Which choice most logically completes the text?",
  "solution": "The completion must explain the anomaly without overreaching it. A) Wrong: nothing in the text supports precognition; the dating anomaly calls for a documentary explanation. B) Correct: a letter cannot describe in detail events that had not yet happened when it was supposedly written; later composition explains the anomaly, and the absence of anomalies in the rest leaves them possibly authentic. C) Wrong: only some letters contain impossibilities; extending the conclusion to the whole bundle overreaches the evidence. D) Wrong: the text gives no reason to redating the events themselves; the anomaly is in the letters' dates.",
  "choices": [
   "the merchant had an unusual ability to predict future events",
   "the letters with impossible dates were written later than their stated dates, while the others may be genuine",
   "all of the letters in the bundle are forgeries",
   "the events described in the letters actually happened earlier than historians believe"
  ],
  "answerIndex": 1
 },
 {
  "id": "inf-054",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Inferences",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "For years, the population of snowshoe hares on Isle Marren remained low, and biologists noted that lynx, which prey on hares, were abundant. After a disease sharply reduced the lynx population, the hare population grew rapidly, even though the hares' food supply had not changed.",
  "question": "The text most strongly suggests that on Isle Marren, the lynx",
  "solution": "Use the change the text reports: one factor changed, the other was held constant. A) Wrong: the text identifies lynx as predators of hares, not as competitors for the hares' food. B) Wrong: if lynx protected hares, the hare population should have fallen when lynx declined; it rose instead. C) Correct: when lynx numbers fell, hares rose despite an unchanged food supply — pointing to predation, not food, as the limit that was removed. D) Wrong: the disease's origin is never discussed.",
  "choices": [
   "competed with the hares for the same food",
   "protected the hares from other predators",
   "had been keeping the hare population low through predation",
   "caused the disease that reduced their own numbers"
  ],
  "answerIndex": 2
 },
 {
  "id": "inf-055",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Inferences",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "Engineers building a bridge in a region with extreme temperature swings replaced the steel originally specified for the deck joints with a new alloy. The alloy expands and contracts only half as much as steel when temperatures change. Bridges with steel joints in the region had often developed cracks at the joints after a few winters.",
  "question": "The text most strongly suggests that the engineers expected the new alloy to",
  "solution": "Connect the material's stated property to the problem the text describes. A) Wrong: costs are never mentioned. B) Wrong: the alloy is used for the joints, which remain part of the design. C) Wrong: the alloy responds to temperature changes; nothing suggests it prevents them. D) Correct: the text links steel joints' cracking to a material that expands and contracts a great deal, and the alloy's defining feature is that it moves only half as much.",
  "choices": [
   "make the bridge cheaper to build",
   "eliminate the need for deck joints entirely",
   "keep the bridge deck at a constant temperature",
   "reduce cracking at the deck joints"
  ],
  "answerIndex": 3
 },
 {
  "id": "inf-056",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Inferences",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "When the Hartwell textile mill closed in 2009, two of the three local businesses that had supplied the mill with dyes and machine parts also closed within a year. The third supplier, which sold most of its products to customers in other states, remained open. A local economist concluded that the two closures were caused primarily by ______.",
  "question": "Which choice most logically completes the text?",
  "solution": "The completion must explain why two suppliers closed and the third did not. A) Correct: the two closed suppliers depended on the mill, while the supplier with mostly out-of-state customers survived — the contrast points to the lost customer as the cause. B) Wrong: no cost changes are mentioned. C) Wrong: the surviving supplier faced the same regional economy; what distinguished the closed businesses was their dependence on the mill, so a general downturn does not explain the contrast the text sets up. D) Wrong: management quality is never mentioned.",
  "choices": [
   "the loss of the mill as a customer",
   "the rising cost of dyes and machine parts",
   "the same economic downturn that closed the mill",
   "poor management at the two businesses"
  ],
  "answerIndex": 0
 },
 {
  "id": "inf-057",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Inferences",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "A clinical study found that a certain medication relieved patients' symptoms when it was taken with food but had little effect when taken on an empty stomach. The researchers noted that food slows the medication's passage through the digestive system, giving the body more time to absorb it.",
  "question": "The text most strongly suggests that patients who take the medication without food",
  "solution": "Follow the mechanism the text spells out. A) Wrong: side effects are never mentioned. B) Correct: the text states the medication has little effect without food and explains absorption: food slows passage, allowing more absorption — so without food, less is absorbed. C) Wrong: the text suggests a mechanism; it makes no dosing recommendation. D) Wrong: the text says the medication had little effect on an empty stomach, not more benefit.",
  "choices": [
   "experience stronger side effects from the medication",
   "absorb less of the medication than patients who take it with food",
   "should take a larger dose to make up the difference",
   "absorb the medication faster but benefit more from it"
  ],
  "answerIndex": 1
 },
 {
  "id": "inf-058",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Central Ideas and Details",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "When European mapmakers adopted the Mercator projection in the sixteenth century, they did so not because it showed the sizes of continents accurately — it greatly enlarges land near the poles — but because it rendered lines of constant compass bearing as straight lines, which made plotting a ship's course far simpler. The projection's distortions were a price navigators willingly paid for that practical advantage, and the map remained standard on ships long after its flaws were widely understood.",
  "question": "Which choice best states the main idea of the text?",
  "solution": "A main idea must hold the text's central contrast together. A) Wrong: the distortion is one detail, presented as the cost, not the main idea. B) Wrong: the text says the map remained standard long after its flaws were widely understood, and navigators knowingly accepted them. C) Correct: it captures the text's central contrast: real and understood distortions, adopted anyway for the straight-bearing advantage. D) Wrong: the text says it did not show continental sizes accurately.",
  "choices": [
   "The Mercator projection greatly enlarges land near the poles.",
   "European mapmakers did not understand the Mercator projection's distortions when they adopted it.",
   "The Mercator projection became standard for navigation because its practical benefit for plotting courses outweighed its well-known distortions.",
   "The Mercator projection was the first map to show the continents accurately."
  ],
  "answerIndex": 2
 },
 {
  "id": "inf-059",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Central Ideas and Details",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "In the nineteenth century, the Cherokee syllabary — a writing system in which each symbol represents a syllable — spread through the Cherokee Nation with remarkable speed. Within a few years of its introduction, a large share of Cherokee adults could read and write their own language, a literacy rate higher than that of settlers in the region at the time. Historians attribute the rapid spread partly to the system's design: because its symbols matched the sounds of spoken Cherokee, learners could master it in a matter of weeks.",
  "question": "Which choice best states the main idea of the text?",
  "solution": "A main idea must cover the whole text, not one detail. A) Wrong: this defines the system; it does not state the main idea about its spread and effects. B) Wrong: the comparison is one striking detail within the larger account of the syllabary's spread. C) Wrong: the text calls it a writing system for the Cherokee language that spread through the Nation; it does not attribute its introduction to settlers, and the comparison treats settlers as a separate group. D) Correct: it covers the spread, the literacy outcome, and the stated reason historians give for the speed.",
  "choices": [
   "The Cherokee syllabary's symbols each represent a syllable rather than a single sound.",
   "Cherokee adults were more literate than settlers in the region.",
   "The syllabary was introduced by settlers to the Cherokee Nation.",
   "The Cherokee syllabary spread quickly and produced high literacy in part because its symbols matched the sounds of the language."
  ],
  "answerIndex": 3
 },
 {
  "id": "inf-060",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Central Ideas and Details",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "Governments and charities maintain seed banks — vaults where seeds from thousands of plant varieties are stored at low temperatures. The largest of these, in Svalbard, holds backup copies of collections kept elsewhere. The purpose is not to supply farmers directly but to preserve genetic variety: if a disease or a changing climate wipes out a variety in the field, its seeds can be withdrawn and the variety regrown. Curators note that several stored varieties are no longer grown anywhere on Earth.",
  "question": "Which choice best states the main idea of the text?",
  "solution": "A main idea must state the text's central purpose, not a supporting detail. A) Correct: it states the purpose the text emphasizes — preservation of variety as insurance against loss — and the regrowth mechanism. B) Wrong: Svalbard's size and location are one detail in the account. C) Wrong: the text explicitly denies this: the purpose is not to supply farmers directly. D) Wrong: this is a supporting observation about the collections, not the main idea.",
  "choices": [
   "Seed banks preserve the genetic variety of plants so that varieties lost in the field can be restored from stored seed.",
   "The largest seed bank is located in Svalbard.",
   "Seed banks supply farmers with seeds for each planting season.",
   "Several stored varieties are no longer grown anywhere on Earth."
  ],
  "answerIndex": 0
 },
 {
  "id": "inf-061",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Central Ideas and Details",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "Before the 1880s, each American railroad town kept its own local time, set by the sun's position, so a traveler crossing the country might reset a watch dozens of times. In 1883, the major railroads jointly adopted four standard time zones for the continent, and station clocks across the country were reset on a single November day. The system was not required by law, but the public adopted it so completely that Congress eventually made it official, decades later.",
  "question": "Which choice best states the main idea of the text?",
  "solution": "A main idea must cover the whole text, not one detail. A) Wrong: this vivid detail illustrates the problem; it is not the main idea. B) Correct: it covers the problem (dozens of local times), the railroads' solution, and its eventual legal adoption. C) Wrong: the railroads adopted the zones in 1883; Congress made the system official only decades later. D) Wrong: this describes the old practice, one part of the background.",
  "choices": [
   "Travelers in the nineteenth century had to reset their watches dozens of times on a cross-country trip.",
   "Standard time zones were introduced by the railroads to end the confusion of local times and were later made official law.",
   "Congress created the standard time zones in 1883.",
   "Local time was set by the position of the sun."
  ],
  "answerIndex": 1
 },
 {
  "id": "inf-062",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Central Ideas and Details",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "A research team studying a new vaccine considered three explanations for the mild fevers some participants developed. The team first tested whether the fevers were caused by the vaccine's preservative, by comparing participants who received versions with and without it; the fevers occurred equally in both groups. The team next tested whether the fevers tracked the dose of the active ingredient, and found that higher doses produced fevers more often. A third explanation, contamination of one production batch, was examined last and ruled out when fevers appeared across all batches.",
  "question": "According to the text, which explanation did the team test second?",
  "solution": "Track the order the text itself gives: first, next, last. A) Wrong: the preservative explanation was tested first, not second. B) Wrong: contamination was examined last. C) Correct: the text marks the order explicitly: the preservative was tested first, the dose explanation 'next,' and contamination last. D) Wrong: this explanation is never mentioned.",
  "choices": [
   "That the fevers were caused by the vaccine's preservative",
   "That one production batch was contaminated",
   "That the fevers tracked the dose of the active ingredient",
   "That the fevers were a normal response to any injection"
  ],
  "answerIndex": 2
 },
 {
  "id": "inf-063",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Central Ideas and Details",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "The barreleye fish lives hundreds of meters below the ocean's surface, where almost no sunlight reaches. Its eyes sit inside a transparent, fluid-filled dome on top of its head. The eyes usually point upward, detecting the silhouettes of prey against the faint light from above; when the fish spots food, the eyes can rotate forward to track it as the fish rises to feed.",
  "question": "According to the text, the barreleye's eyes usually point upward in order to",
  "solution": "Match each eye position to the function the text assigns it. A) Wrong: predators are never mentioned; the stated purpose concerns prey. B) Wrong: tracking food while rising is what the eyes do when rotated forward, not their usual upward function. C) Wrong: the dome houses the eyes, but the text does not give protection as the reason the eyes point upward. D) Correct: the text gives this purpose directly for the upward position.",
  "choices": [
   "watch for predators approaching from the surface",
   "track food as the fish rises to feed",
   "keep the eyes protected inside the dome",
   "detect the silhouettes of prey against the faint light from above"
  ],
  "answerIndex": 3
 },
 {
  "id": "inf-064",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Central Ideas and Details",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "Two expeditions attempted to reach the summit of Mount Corvath in the 1920s. The first, in 1924, climbed the mountain's north ridge and was forced back by storms less than three hundred meters from the top. The second, in 1927, chose the longer south route, which sheltered the climbers from the prevailing winds; it also waited for a forecast of five clear days before starting the final ascent. The second expedition reached the summit.",
  "question": "According to the text, the second expedition succeeded in part because it",
  "solution": "The question asks for the differences the text itself states. A) Correct: the text gives both differences from the failed attempt: the sheltered south route and the wait for five clear days. B) Wrong: the north ridge was the first expedition's route; the second chose the south route. C) Wrong: team sizes are never mentioned. D) Wrong: equipment is never mentioned.",
  "choices": [
   "took a route sheltered from the prevailing winds and waited for clear weather before the final ascent",
   "climbed the north ridge during a break in the storms",
   "had more climbers than the first expedition",
   "used lighter equipment than the first expedition"
  ],
  "answerIndex": 0
 },
 {
  "id": "inf-065",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Central Ideas and Details",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "The economist's argument runs as follows. When a city builds a new transit line, travel times between neighborhoods fall. Employers, in turn, gain access to a larger pool of workers, because jobs become reachable for people who live farther away. It is this enlarged labor pool — not the construction spending itself — that the economist identifies as the line's main long-term benefit to the city's economy.",
  "question": "According to the text, the economist identifies the main long-term benefit of a new transit line as",
  "solution": "The text marks its answer explicitly; do not stop at an earlier link in the chain. A) Wrong: the text explicitly says the benefit is not the construction spending itself. B) Correct: the final sentence states this directly and explicitly sets it against the construction-spending alternative. C) Wrong: shorter travel times are the first link in the chain, but the economist names the enlarged labor pool as the main benefit. D) Wrong: ridership on existing lines is never mentioned.",
  "choices": [
   "the money spent on constructing the line",
   "employers' access to a larger pool of workers",
   "shorter travel times between neighborhoods",
   "increased ridership on existing transit lines"
  ],
  "answerIndex": 1
 },
 {
  "id": "inf-066",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Command of Evidence",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "A transportation analyst claims that the city's congestion charge reduced downtown traffic mainly by persuading commuters to switch to public transit, rather than by causing them to drive at different times.",
  "question": "Which finding, if true, would best support the analyst's claim?",
  "solution": "The claim distinguishes between two mechanisms; only evidence that separates them can support it. A) Wrong: a fall in total traffic is consistent with both mechanisms; it does not show which one did the work. B) Wrong: commuters' opinions do not identify the mechanism behind the traffic change. C) Correct: the claim contrasts two mechanisms — switching modes versus shifting times — and this finding shows the first rising and the second flat. D) Wrong: this credits time-shifting and denies the transit switch — the reverse of the claim.",
  "choices": [
   "Total traffic entering downtown fell by 18 percent in the year after the charge began.",
   "Surveys found that most downtown commuters disliked the charge.",
   "After the charge began, transit ridership on routes into downtown rose sharply, while traffic counts during uncharged hours changed little.",
   "Traffic during uncharged early-morning hours rose as drivers shifted their trips to avoid the charge, while transit ridership stayed flat."
  ],
  "answerIndex": 2
 },
 {
  "id": "inf-067",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Command of Evidence",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "Theater historian Ruth Calloway claims that the playwright Edmund Voss wrote the final act of his play The Winter Ledger before he wrote the first act.",
  "question": "Which quotation from Voss's manuscripts would best support Calloway's claim?",
  "solution": "The quotation must establish the order in which the acts were written. A) Wrong: heavy revision of the ending says nothing about when it was first written relative to the beginning. B) Wrong: the ending's power does not speak to the order of composition. C) Wrong: this states the opposite order of composition. D) Correct: it dates the closing scene earlier than the opening scene — the exact reversed order the claim asserts.",
  "choices": [
   "“I revised the closing scene more heavily than any other part of the play.”",
   "“Audiences have always found the final act the most powerful part of the play.”",
   "“As is my custom, I wrote the play straight through from the first scene to the last.”",
   "“The closing scene was drafted in the spring of 1903; only the following winter did I begin the opening scene that now precedes it.”"
  ],
  "answerIndex": 3
 },
 {
  "id": "inf-068",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Command of Evidence",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "Marine ecologist Ines Duarte claims that the recovery of the Caldera Bay coral reef was driven mainly by the return of herbivorous fish, which graze on algae that would otherwise smother young corals, rather than by the corals' own rate of reproduction.",
  "question": "Which finding, if true, would most directly support Duarte's claim?",
  "solution": "The claim names a mechanism and a rival; the evidence must separate them. A) Correct: it varies the claimed cause (fish presence) while holding the rival explanation (reproduction) constant, and recovery tracks the fish. B) Wrong: overall recovery alone does not show which mechanism drove it. C) Wrong: a regional rise in fish does not connect the fish to this reef's recovery. D) Wrong: if corals thrived under the algae, the grazing mechanism would be undermined, not supported.",
  "choices": [
   "Reef sections where herbivorous fish returned recovered quickly, while sections where the fish remained absent stayed covered in algae and recovered slowly, even though coral reproduction rates were similar in both sections.",
   "Coral cover in Caldera Bay increased by 30 percent over the decade after protections were introduced.",
   "Herbivorous fish populations rose throughout the region during the same period.",
   "Young corals in Caldera Bay grew fastest in sections where algae were thickest."
  ],
  "answerIndex": 0
 },
 {
  "id": "inf-069",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Command of Evidence",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "A medieval manuscript of a chronicle shows two distinct patterns of letter formation: some pages consistently form the letter 'g' with a flat top, while other pages just as consistently form it with a rounded top. The ink composition is the same throughout the manuscript.",
  "question": "Which observation would best support the conclusion that the manuscript was copied by two different scribes?",
  "solution": "The conclusion needs evidence of two hands, not just two letterforms. A) Wrong: materials variation does not speak to how many hands wrote the text. B) Correct: a second, independent handwriting habit splitting along the same page division strengthens the two-scribe explanation beyond a single letterform. C) Wrong: the form's regional popularity does not show two scribes worked on this manuscript. D) Wrong: this offers a one-scribe explanation for differing letterforms, working against the conclusion.",
  "choices": [
   "The manuscript's parchment varies in thickness from page to page.",
   "The pages with the flat-topped 'g' also share a distinctive way of abbreviating common words that never appears on the rounded-'g' pages.",
   "Flat-topped 'g' forms were common in the region where the manuscript was produced.",
   "A single scribe's letterforms are known to change gradually over the years a long copying project requires."
  ],
  "answerIndex": 1
 },
 {
  "id": "inf-070",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Command of Evidence",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "An environmental historian claims that most of the decline in the River Sorn's salmon population occurred before 1990, with the population roughly stable since then.",
  "question": "Which finding, if true, would best support the historian's claim?",
  "solution": "The claim is about timing; the evidence must be dated. A) Wrong: the endpoints alone cannot show when the decline happened; it could have been gradual or late. B) Wrong: a restriction date does not measure the population's trajectory. C) Correct: it shows the large drop concentrated before 1990 (40,000 to 9,000) and only fluctuation afterward — both halves of the claim. D) Wrong: this places most of the decline after 1990, the reverse of the claim.",
  "choices": [
   "Surveys counted about 40,000 salmon in 1960 and 9,500 in 2020.",
   "Commercial fishing on the River Sorn was restricted in 1988.",
   "Surveys counted about 40,000 salmon in 1960 and 9,000 in 1990, while counts between 1990 and 2020 stayed between 8,000 and 10,000.",
   "Counts show the salmon population fell from 30,000 in 1995 to 9,000 in 2020."
  ],
  "answerIndex": 2
 },
 {
  "id": "inf-071",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Command of Evidence",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "A workplace researcher claims that the benefits of a one-time safety training program fade within a year unless employees attend refresher sessions.",
  "question": "Which finding, if true, would best support the researcher's claim?",
  "solution": "The claim is about what happens over time; the evidence must track time. A) Wrong: an immediate effect does not address whether benefits fade or persist, which is the claim. B) Wrong: engagement ratings do not measure accident rates over time. C) Wrong: this denies the fading the claim asserts. D) Correct: it compares the two conditions over time and shows exactly the claimed pattern: persistence with refreshers, fading without them.",
  "choices": [
   "Accident rates fell sharply in the month right after the initial training at all workplaces.",
   "Employees rated the refresher sessions as more engaging than the initial training.",
   "Workplaces with only the initial training maintained low accident rates for five years.",
   "Workplaces that held refresher sessions kept their accident rates low for three years, while workplaces with only the initial training saw accident rates return to earlier levels within twelve months."
  ],
  "answerIndex": 3
 },
 {
  "id": "inf-072",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Command of Evidence",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "A cognitive scientist claims that a new study technique helps students most on tests given days after learning, rather than on tests given immediately.",
  "question": "Which finding, if true, would best support the scientist's claim?",
  "solution": "The claim compares two testing times; the evidence must too. A) Correct: the claim is about when the advantage appears; this finding shows no immediate advantage and a clear delayed one. B) Wrong: an advantage on every test, including immediate ones, does not match the claim that the technique helps most on delayed tests. C) Wrong: confidence does not measure performance differences between immediate and delayed tests. D) Wrong: a description of the technique is not evidence about when it helps.",
  "choices": [
   "Students using the technique scored about the same as other students on a test given right after the lesson, but scored markedly higher on a test given one week later.",
   "Students using the technique scored higher than other students on every test they took.",
   "Students using the technique said they felt more confident during tests.",
   "The technique requires students to write summaries of what they read."
  ],
  "answerIndex": 0
 },
 {
  "id": "inf-073",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Command of Evidence",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "An inventor's biographer claims that the inventor kept her design for a new loom secret for years because she feared a rival manufacturer would copy it.",
  "question": "Which quotation from the inventor's letters would best support the biographer's claim?",
  "solution": "The quotation must show both the secrecy and the fear of copying behind it. A) Wrong: the loom's performance does not address secrecy or its reason. B) Correct: it states both the secrecy (shown the drawings to no one) and the reason (a rival's interest, and patenting first). C) Wrong: another person's urging says nothing about why the inventor herself kept the design secret. D) Wrong: this gives cost, not fear of copying, as the reason for delay.",
  "choices": [
   "“The loom is nearly finished, and I expect it to weave twice as fast as any in the county.”",
   "“I have shown the drawings to no one. Hartley's agents would pay dearly for a sight of them, and I mean to patent the loom before any eye but mine has seen how it works.”",
   "“My brother urges me to exhibit the loom at the county fair this autumn.”",
   "“I delayed the patent only because the filing fees were more than I could spare.”"
  ],
  "answerIndex": 1
 },
 {
  "id": "inf-074",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Command of Evidence",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "The table shows carbon dioxide emissions, in millions of tons, from three sectors of a country's economy in 2000 and 2020.\n\nSector | 2000 | 2020\nTransport | 500 | 450\nIndustry | 800 | 560\nHomes | 300 | 270",
  "question": "Based on the table, which sector had the greatest percentage decrease in emissions between 2000 and 2020?",
  "solution": "The question asks for the greatest percentage decrease, not the greatest absolute drop. A) Wrong: transport fell by 50 of 500, only 10 percent — less than industry's 30 percent. B) Wrong: homes fell by 30 of 300, only 10 percent. C) Correct: industry fell by 240 of 800, a 30 percent decrease — greater than transport's 10 percent and homes' 10 percent. D) Wrong: the decreases are 10, 30, and 10 percent — not equal.",
  "choices": [
   "Transport",
   "Homes",
   "Industry",
   "All three sectors decreased by the same percentage"
  ],
  "answerIndex": 2
 },
 {
  "id": "inf-075",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Command of Evidence",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "In a reaction-time experiment, participants responded to a signal under three conditions. Times, in milliseconds, are shown for four participants per condition.\n\nCondition A (quiet room): 240, 260, 250, 250\nCondition B (music playing): 230, 220, 240, 230\nCondition C (intermittent noise): 280, 300, 290, 290",
  "question": "Based on the data, which statement is accurate?",
  "solution": "Compare the condition averages the data provide. A) Wrong: A's average is 250 ms, slower than B's 230 ms. B) Wrong: one participant under B recorded 240 ms, which only ties the fastest time under A (240 ms) rather than beating every A time; the accurate claim is about averages, not every individual. C) Wrong: the data show an association in this experiment's averages; the statement as a general causal claim goes beyond what the table alone reports. D) Correct: the averages are A: 250, B: 230, C: 290 milliseconds; the lowest average time is the fastest response.",
  "choices": [
   "Participants responded fastest, on average, under condition A.",
   "Every participant under condition B was faster than every participant under condition A.",
   "Music caused participants to respond faster.",
   "Participants responded fastest, on average, under condition B."
  ],
  "answerIndex": 3
 },
 {
  "id": "inf-076",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Command of Evidence",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "Biologists counted breeding bird species at three wetland sites in 2015 and again in 2023.\n\nSite | Species in 2015 | Species in 2023\nAlder Marsh | 24 | 31\nBirch Fen | 18 | 29\nCedar Swamp | 30 | 34",
  "question": "Based on the table, which site gained the most species between 2015 and 2023?",
  "solution": "The question asks about the gain, not the totals. A) Correct: Birch Fen gained 29 − 18 = 11 species, more than Alder Marsh's 7 and Cedar Swamp's 4. B) Wrong: Alder Marsh gained 7 species, fewer than Birch Fen's 11. C) Wrong: Cedar Swamp has the highest counts but gained only 4 species; the question asks about the gain. D) Wrong: the gains are 7, 11, and 4 — all different.",
  "choices": [
   "Birch Fen",
   "Alder Marsh",
   "Cedar Swamp",
   "All three sites gained the same number of species"
  ],
  "answerIndex": 0
 },
 {
  "id": "inf-077",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Command of Evidence",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "A traveler compares the total cost, in dollars, of three ways to reach the airport. Each option's cost has two parts: a ticket or fare, and a baggage or parking fee.\n\nOption | Fare | Fee\nTrain | 24 | 6\nShuttle | 19 | 12\nTaxi | 38 | 0",
  "question": "Based on the table, which option has the lowest total cost?",
  "solution": "Total cost means fare plus fee for each option. A) Wrong: the shuttle's fare is lowest, but with its fee its total is 31, one dollar more than the train's 30. B) Correct: train totals 24 + 6 = 30 dollars, below the shuttle's 31 and the taxi's 38. C) Wrong: the taxi totals 38 dollars, the highest of the three. D) Wrong: the totals are 30, 31, and 38 dollars.",
  "choices": [
   "Shuttle",
   "Train",
   "Taxi",
   "All three options cost the same in total"
  ],
  "answerIndex": 1
 },
 {
  "id": "inf-078",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Command of Evidence",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "A chemist measured the pH of samples from a stream at four points, moving downstream from point 1 to point 4.\n\nPoint | pH\n1 | 7.4\n2 | 7.1\n3 | 6.8\n4 | 6.5",
  "question": "Which statement is best supported by the data in the table?",
  "solution": "Track the direction of the values and what pH measures. A) Wrong: falling pH means rising acidity, not falling acidity. B) Wrong: point 4 reads 6.5, below point 2's 7.1. C) Correct: pH falls steadily from 7.4 to 6.5, and lower pH means greater acidity. D) Wrong: the table reports measurements only; no cause is given.",
  "choices": [
   "The water became less acidic as it moved downstream.",
   "The pH at point 4 was higher than the pH at point 2.",
   "The water became more acidic as it moved downstream.",
   "A factory upstream was responsible for the change in pH."
  ],
  "answerIndex": 2
 },
 {
  "id": "inf-079",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Command of Evidence",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "The table shows average daily water use, in gallons, for households of three sizes in one town, along with the number of people in each household size.\n\nHousehold size | Gallons per day\n1 person | 45\n2 people | 70\n4 people | 110",
  "question": "Based on the table, which statement is accurate?",
  "solution": "Divide each total by the household size before comparing. A) Wrong: the per-person figures are 45, 35, and 27.5 gallons — not equal. B) Wrong: the totals run the other way: 110 gallons against 45. C) Wrong: the table reports use, not waste; no judgment about waste is supported. D) Correct: per person: 45/1 = 45 gallons, 70/2 = 35 gallons, 110/4 = 27.5 gallons — the one-person households used the most per person.",
  "choices": [
   "Water use per person was the same for all household sizes.",
   "Four-person households used less water in total than one-person households.",
   "Larger households wasted more water than smaller ones.",
   "Water use per person was highest in one-person households."
  ],
  "answerIndex": 3
 },
 {
  "id": "inf-080",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Inferences",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "An astronomer's notebook from 1611 contains detailed drawings of four moons orbiting Jupiter, with their positions recorded night by night over several weeks. The same notebook contains no drawings of Saturn's rings, although the astronomer's telescope was powerful enough to show them as a strange bulge on either side of the planet, and the notebook does describe Saturn as 'triple-bodied.' Scholars conclude that the astronomer saw something at Saturn he could not interpret, because ______.",
  "question": "Which choice most logically completes the text?",
  "solution": "The completion must rest on the specific combination of evidence given. A) Correct: the conclusion rests on the combination the text reports: he described Saturn as triple-bodied (he saw the bulge) yet produced no ring drawings (he could not interpret it as rings). B) Wrong: the text says the telescope could show the bulge and that he described Saturn's appearance. C) Wrong: his priorities are never discussed; the conclusion concerns interpretation, not importance. D) Wrong: the notebook's silence about rings, paired with the 'triple-bodied' description, is the puzzle; no other publication is mentioned.",
  "choices": [
   "he recorded Saturn's odd appearance but drew no rings, suggesting he could not make sense of what the telescope showed him",
   "his telescope was too weak to show him anything at Saturn at all",
   "he considered Jupiter's moons more important than Saturn",
   "he had already published his interpretation of Saturn's rings elsewhere"
  ],
  "answerIndex": 0
 },
 {
  "id": "inf-081",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Inferences",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "In a trial of a vaccine against a respiratory virus, researchers found that vaccinated participants overall were half as likely to become infected as unvaccinated ones. But when the results were broken down by age, the entire benefit appeared in participants over sixty; among participants under forty, infection rates were nearly identical in the vaccinated and unvaccinated groups. The researchers therefore cautioned that the headline figure ______.",
  "question": "Which choice most logically completes the text?",
  "solution": "The caution must follow from the subgroup pattern the text reports. A) Wrong: sample size is never questioned in the text. B) Correct: the overall figure averages a large benefit in one subgroup with none in another; the caution must name that concealment. C) Wrong: the older group benefited substantially; 'ineffective for everyone' contradicts that result. D) Wrong: immune strength is never measured; the text reports infection rates only.",
  "choices": [
   "was based on too few participants to be trusted",
   "concealed a sharp difference between age groups, since the average benefit came wholly from the older participants",
   "proved the vaccine was ineffective for everyone",
   "showed that younger participants had stronger immune systems"
  ],
  "answerIndex": 1
 },
 {
  "id": "inf-082",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Inferences",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "Archaeologists excavating two ancient coastal kingdoms, Aldania and Bresk, have found many Aldanian coins at sites in Bresk but no Bresk coins at any site in Aldania. Aldanian pottery, by contrast, appears in both kingdoms, as does Bresk pottery. The pattern of the coins most likely indicates that ______.",
  "question": "Which choice most logically completes the text?",
  "solution": "The completion must fit both the coin pattern and the pottery pattern. A) Wrong: each kingdom's pottery appears in the other, showing contact and exchange. B) Wrong: the text refers to Bresk coins as things that could have been found, implying they existed. C) Correct: goods (pottery) moved in both directions, but Aldanian money ended up in Bresk without Bresk money reaching Aldania — consistent with Aldanian traders spending their coins in Bresk and trade in the other direction being conducted without Bresk coins, or by other means. D) Wrong: conquest is never mentioned, and conquest alone would not obviously leave Bresk pottery circulating in Aldania.",
  "choices": [
   "the two kingdoms had no trade contact with each other",
   "Bresk used no coins of its own",
   "merchants traveled from Aldania to Bresk to trade, while Bresk's merchants did not make the reverse journey with their own coinage",
   "Aldania conquered Bresk and imposed its currency"
  ],
  "answerIndex": 2
 },
 {
  "id": "inf-083",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Inferences",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "Vervet monkeys give different alarm calls for different predators: one call for leopards, another for eagles, and a third for snakes. When researchers played recordings of the calls to monkeys in the absence of any predator, the monkeys responded appropriately to each — running into trees at the leopard call, looking up at the eagle call, and standing and scanning the ground at the snake call. The researchers concluded that the calls ______.",
  "question": "Which choice most logically completes the text?",
  "solution": "The completion must be warranted by the playback results. A) Wrong: how the calls are acquired is never investigated in the text. B) Wrong: the responses described are the monkeys' own escape behaviors; no effect on predators is reported. C) Wrong: loudness and distance are never mentioned. D) Correct: each distinct call produced the response suited to that predator even with no predator present, so the calls themselves carry predator-specific information.",
  "choices": [
   "are learned by young monkeys from their mothers",
   "frighten predators away from the monkey troop",
   "differ in loudness according to how close the predator is",
   "convey information about the type of predator, rather than merely expressing general alarm"
  ],
  "answerIndex": 3
 },
 {
  "id": "inf-084",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Inferences",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "As a glacier in the Almar Valley retreated up the mountainside over the past century, it exposed a band of bare rock and gravel that had been under ice for thousands of years. Within ten years of exposure, the bare ground nearest the glacier's old edge was covered with grasses and small shrubs, even though no soil had covered the rock when the ice first melted away.",
  "question": "The text most strongly suggests that in the Almar Valley, plants",
  "solution": "A 'most strongly suggests' answer must stay close to the reported timeline. A) Correct: the text reports bare, soil-free rock becoming covered with grasses and shrubs within ten years of the ice leaving. B) Wrong: the plants colonized ground where no soil had covered the rock. C) Wrong: no planting or researchers are mentioned. D) Wrong: the ground was under ice for thousands of years and was colonized after exposure.",
  "choices": [
   "can become established on newly exposed ground relatively quickly, even where little soil is present",
   "require deep soil before they can grow at all",
   "were planted on the exposed ground by researchers",
   "grew on the ground while it was still covered by the glacier"
  ],
  "answerIndex": 0
 },
 {
  "id": "inf-085",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Inferences",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "In the port city of Vessia, guild records show that master shipwrights were required to train apprentices for seven years before the apprentices could work independently. The same records show that most apprentices came from outside the shipwrights' own families, recruited from villages along the coast. Yet the city's council, which regulated the guild, was composed largely of master shipwrights themselves. A historian concludes that the seven-year requirement served the masters' interests as well as the apprentices', because ______.",
  "question": "Which choice most logically completes the text?",
  "solution": "The completion must connect the rule to the masters' interests specifically. A) Wrong: this would explain a benefit to apprentices and customers, but the conclusion to be supported is about the masters' own interests. B) Correct: the historian's point turns on who held power: the masters regulated themselves through the council, and a long apprenticeship restricts how many new independent shipwrights — competitors — can enter the trade. C) Wrong: talent comparisons are never mentioned. D) Wrong: the council was composed largely of the masters themselves; nothing suggests it overruled them.",
  "choices": [
   "seven years was the time genuinely needed to learn the trade's most basic skills",
   "it kept the number of independent shipwrights small, limiting competition for the masters who controlled the guild",
   "apprentices from coastal villages were more talented than the masters' own children",
   "the council frequently overruled the guild's training rules"
  ],
  "answerIndex": 1
 },
 {
  "id": "inf-086",
  "section": "Reading & Writing",
  "domain": "Information and Ideas",
  "topic": "Inferences",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "Speakers of the coastal dialect of the Rhenish language use the word 'brant' for the foam left on the shore by a retreating wave. The word has no equivalent in the inland dialect, whose speakers, when they need to describe the same foam, borrow 'brant' from the coastal dialect rather than using a phrase of their own. Linguists note that inland speakers borrow coastal words almost exclusively for things connected with the sea. This pattern most strongly suggests that ______.",
  "question": "Which choice most logically completes the text?",
  "solution": "The completion must explain why the borrowing is confined to one subject area. A) Wrong: borrowing for a specific subject area does not establish which dialect is older. B) Wrong: their need to borrow sea vocabulary points the other way: the sea was not part of their everyday environment. C) Correct: inland speakers lack their own words precisely for sea-related things and must borrow them — the gap maps onto what their environment did not present to them. D) Wrong: no prediction about the dialects' future is supported by the borrowing pattern.",
  "choices": [
   "the coastal dialect is older than the inland dialect",
   "inland speakers are in frequent daily contact with the sea",
   "the inland dialect's vocabulary reflects an environment in which sea-related things were rarely encountered",
   "the two dialects will eventually merge into one"
  ],
  "answerIndex": 2
 },
 {
  "id": "cft-001",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Words in Context",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "After the spring floods of 1987, the town of Alden built a series of low earthen dikes along the river. The dikes check the flow of floodwater, slowing it before it can reach the homes on the lower streets.",
  "question": "As used in the text, “check” most nearly means",
  "solution": "A) Wrong: the dikes do not inspect the water. B) Correct: the dikes slow and hold back the floodwater before it reaches the homes. C) Wrong: no payment of any kind is involved. D) Wrong: the water is slowed, not eliminated; it still flows, just more slowly.",
  "choices": [
   "examine carefully",
   "hold back",
   "a written order for payment",
   "eliminate entirely"
  ],
  "answerIndex": 1
 },
 {
  "id": "cft-002",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Words in Context",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "Training a young horse takes time. The trainer, Rosa Delgado, is patient with each animal, repeating the same gentle exercises day after day without ever raising her voice.",
  "question": "As used in the text, “patient” most nearly means",
  "solution": "A) Correct: Delgado repeats the same exercises day after day without raising her voice, calmly enduring a slow process. B) Wrong: that is the noun sense of the word; Delgado is the trainer, not someone being treated. C) Wrong: her unhurried repetition shows the opposite of eagerness for quick results. D) Wrong: nothing in the text concerns healing injuries.",
  "choices": [
   "calmly enduring",
   "a person receiving medical care",
   "eager for quick results",
   "skilled at healing injuries"
  ],
  "answerIndex": 0
 },
 {
  "id": "cft-003",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Words in Context",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "Before the city council voted on the new budget, members worked from a draft of the document. Several figures in this early version were changed before the final budget was approved.",
  "question": "As used in the text, “draft” most nearly means",
  "solution": "A) Wrong: no moving air is involved. B) Wrong: the text stresses that figures in this early version were changed before the final budget was approved, so the draft is not the final version. C) Wrong: no military service is mentioned. D) Correct: the members worked from an early version whose figures were still being changed.",
  "choices": [
   "a current of moving air",
   "the final, approved version of a document",
   "compulsory military service",
   "an early, unfinished version of a document"
  ],
  "answerIndex": 3
 },
 {
  "id": "cft-004",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Words in Context",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "The doctor's expression turned grave as she studied the test results, and she asked the family to sit down before she explained what the scans showed.",
  "question": "As used in the text, “grave” most nearly means",
  "solution": "A) Wrong: that is the noun sense; here the word describes an expression. B) Wrong: nothing is being carved. C) Correct: the doctor's expression, and her request that the family sit down before hearing the results, show a serious and solemn manner. D) Wrong: the scene is somber, not cheerful.",
  "choices": [
   "a place of burial",
   "carved into a surface",
   "serious and solemn",
   "cheerful and lighthearted"
  ],
  "answerIndex": 2
 },
 {
  "id": "cft-005",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Words in Context",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "With careful pruning and regular watering, the small orchard behind the farmhouse can yield nearly two hundred baskets of apples each autumn.",
  "question": "As used in the text, “yield” most nearly means",
  "solution": "A) Wrong: nothing is collapsing or giving way. B) Correct: the orchard produces nearly two hundred baskets of apples each autumn. C) Wrong: there is no opponent or contest. D) Wrong: the orchard produces a large harvest, the opposite of stopping.",
  "choices": [
   "give way under pressure",
   "produce or provide",
   "surrender to an opponent",
   "stop producing entirely"
  ],
  "answerIndex": 1
 },
 {
  "id": "cft-006",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Words in Context",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "Good news about the harvest tempered the villagers' worries about the coming winter: they still prepared carefully, but their fear of going hungry eased.",
  "question": "As used in the text, “tempered” most nearly means",
  "solution": "A) Wrong: that is the noun 'temper'; here the word is a verb acting on the villagers' worries. B) Wrong: no metal is involved. C) Wrong: the fear eased, so it was not intensified. D) Correct: the good news lessened the worries, moderating the villagers' fear.",
  "choices": [
   "a fit of anger",
   "the hardness of a metal",
   "increased or intensified",
   "lessened or moderated"
  ],
  "answerIndex": 3
 },
 {
  "id": "cft-007",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Words in Context",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "During the storm, the tiny fishing village harbored more than forty travelers whose boats could not safely remain at sea, giving them food and dry rooms until the weather cleared.",
  "question": "As used in the text, “harbored” most nearly means",
  "solution": "A) Correct: the village gave the travelers food and dry rooms until the weather cleared, sheltering them. B) Wrong: that is the noun sense; here the word is a verb describing what the village did. C) Wrong: the village helped the travelers rather than resenting them. D) Wrong: the travelers were taken in, not driven away.",
  "choices": [
   "gave shelter to",
   "a place where ships dock",
   "held a grudge against",
   "drove away or expelled"
  ],
  "answerIndex": 0
 },
 {
  "id": "cft-008",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Words in Context",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "The restorer worked with a fine brush, filling minute cracks in the painting's surface that were almost invisible to the naked eye.",
  "question": "As used in the text, “minute” most nearly means",
  "solution": "A) Wrong: no unit of time is involved. B) Wrong: that sense (the plural 'minutes') concerns meeting records, not cracks. C) Correct: the cracks were almost invisible to the naked eye, so they were extremely small. D) Wrong: the cracks were nearly invisible, not enormous and obvious.",
  "choices": [
   "sixty seconds of time",
   "the record of a meeting",
   "extremely small",
   "enormous and obvious"
  ],
  "answerIndex": 2
 },
 {
  "id": "cft-009",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Words in Context",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "The town's ______ festival takes place every spring, and residents begin preparing for it months in advance, just as they did last year and the year before.",
  "question": "Which choice completes the text with the most logical and precise word or phrase?",
  "solution": "A) Wrong: the festival happens every spring without fail, so it is not occasional. B) Wrong: 'frequent' says only that it happens often; the text specifies a once-a-year rhythm. C) Correct: a festival that takes place every spring, as it did last year and the year before, is annual. D) Wrong: a festival is an event, not something permanent.",
  "choices": [
   "occasional",
   "frequent",
   "annual",
   "permanent"
  ],
  "answerIndex": 2
 },
 {
  "id": "cft-010",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Words in Context",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "So that she would not wake the baby sleeping in the next room, Ana leaned close and began to ______ the directions to her brother.",
  "question": "Which choice completes the text with the most logical and precise word or phrase?",
  "solution": "A) Wrong: announcing is done loudly, which would wake the baby. B) Correct: leaning close so as not to wake the baby calls for speaking in a whisper. C) Wrong: repeating says nothing about keeping her voice down, which is the point of the sentence. D) Wrong: explaining likewise ignores the need for quiet.",
  "choices": [
   "announce",
   "whisper",
   "repeat",
   "explain"
  ],
  "answerIndex": 1
 },
 {
  "id": "cft-011",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Words in Context",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "The hikers had eaten nothing since dawn, so when they finally reached the lodge, they ______ the stew that the cook set before them, finishing every bowl within minutes.",
  "question": "Which choice completes the text with the most logical and precise word or phrase?",
  "solution": "A) Correct: after eating nothing since dawn, the hikers ate the stew eagerly and completely, finishing every bowl within minutes. B) Wrong: sampling means tasting a little, but they finished every bowl. C) Wrong: examining the stew would not finish the bowls. D) Wrong: the cook, not the hikers, prepared the stew.",
  "choices": [
   "devoured",
   "sampled",
   "examined",
   "prepared"
  ],
  "answerIndex": 0
 },
 {
  "id": "cft-012",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Words in Context",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "Although the storm tore branches from the trees and flooded the road, the bridge remained ______, and cars were crossing it again the next morning.",
  "question": "Which choice completes the text with the most logical and precise word or phrase?",
  "solution": "A) Wrong: the bridge's age is not at issue; the point is that it withstood the storm. B) Wrong: decoration is irrelevant to surviving the storm. C) Wrong: cars crossed the bridge the next morning, so it was not damaged. D) Correct: a bridge that survives a storm intact and carries cars again is sturdy.",
  "choices": [
   "ancient",
   "decorated",
   "damaged",
   "sturdy"
  ],
  "answerIndex": 3
 },
 {
  "id": "cft-013",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Words in Context",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "After the windstorm, volunteers worked in the orchard to ______ the fallen apples into baskets before they could spoil on the ground.",
  "question": "Which choice completes the text with the most logical and precise word or phrase?",
  "solution": "A) Wrong: the apples had already fallen from the trees; they were not being planted. B) Correct: the volunteers collected the fallen apples into baskets before they could spoil. C) Wrong: counting the apples would not get them into baskets or save them from spoiling. D) Wrong: polishing does not address the need to collect the fruit quickly.",
  "choices": [
   "plant",
   "gather",
   "count",
   "polish"
  ],
  "answerIndex": 1
 },
 {
  "id": "cft-014",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Text Structure and Purpose",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "Why do some frogs survive being frozen solid all winter? Researchers who study the wood frog have found the answer in the animal's blood. As ice begins to form, the frog's liver releases glucose into the bloodstream, and this natural antifreeze keeps the frog's cells from being damaged until the spring thaw.",
  "question": "Which choice best describes the overall structure of the text?",
  "solution": "A) Wrong: only one animal, the wood frog, is discussed. B) Wrong: no problem is identified and no solution is argued for. C) Wrong: no experiment or sequence of steps is described. D) Correct: the text opens with a question and then explains the answer researchers found.",
  "choices": [
   "It compares two animals that survive winter in different ways.",
   "It describes a problem and argues for a solution.",
   "It lists the steps of an experiment in the order they were performed.",
   "It poses a question and then explains the answer to it."
  ],
  "answerIndex": 3
 },
 {
  "id": "cft-015",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Text Structure and Purpose",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "A single tree can change the life of a whole street. On Maple Avenue, for example, the row of oaks planted in 1998 now shades the sidewalks so completely that summer temperatures there are noticeably lower, and neighbors gather outside in the evening instead of staying indoors.",
  "question": "Which choice best describes the function of the text as a whole?",
  "solution": "A) Wrong: cars and bans are never mentioned. B) Wrong: the text gives one example, not a history of tree planting. C) Correct: the opening sentence states a general claim, and the Maple Avenue oaks are then offered as a specific example of it. D) Wrong: the tone is positive; no one is criticized.",
  "choices": [
   "It argues that cities should ban cars from residential streets.",
   "It traces the history of tree planting in one city.",
   "It states a general claim and then supports it with a specific example.",
   "It criticizes residents for spending too much time indoors."
  ],
  "answerIndex": 2
 },
 {
  "id": "cft-016",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Text Structure and Purpose",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "By 2015, the wells that supplied the village of San Pedro were running dry each summer, and families had to walk miles to fetch water. The village council therefore built a system of rooftop tanks that collect rainwater during the wet season. Since the tanks were installed, the village has had enough stored water to last through every dry season.",
  "question": "Which choice best describes the overall structure of the text?",
  "solution": "A) Wrong: no theory is attacked. B) Correct: the text first describes the problem — wells running dry — and then explains the response, the rooftop tank system, and its result. C) Wrong: only one village appears. D) Wrong: no experiment is described.",
  "choices": [
   "It presents a theory and then offers evidence against it.",
   "It describes a problem and then explains how the problem was addressed.",
   "It compares the customs of two different villages.",
   "It explains the steps of a scientific experiment."
  ],
  "answerIndex": 1
 },
 {
  "id": "cft-017",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Text Structure and Purpose",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "On cold mornings, drivers often find the insides of their car windows covered with a thin layer of frost. This happens because the air inside the car holds moisture from passengers' breath. When that moist air touches the cold glass, the water vapor in it changes directly into ice crystals.",
  "question": "Which choice best describes the function of the text as a whole?",
  "solution": "A) Correct: the text first describes the familiar sight of frost on car windows and then explains the cause, moist air touching cold glass. B) Wrong: no recommendation about driving is made. C) Wrong: no removal methods are mentioned. D) Wrong: there is no story and no individual driver.",
  "choices": [
   "It describes an everyday occurrence and explains why it happens.",
   "It argues that drivers should avoid driving on cold mornings.",
   "It compares two different methods of removing frost.",
   "It tells the story of a driver who discovered frost."
  ],
  "answerIndex": 0
 },
 {
  "id": "cft-018",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Text Structure and Purpose",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "Many desert plants have developed ways to store water. The saguaro cactus, for instance, can absorb and hold hundreds of gallons of water in its pleated stem after a single heavy rain. Its roots spread wide just below the surface to catch rain before it sinks into the sand.",
  "question": "Which choice best describes the function of the second sentence?",
  "solution": "A) Wrong: the sentence supports rather than objects to the first sentence. B) Wrong: it offers no discussion of proof. C) Correct: introduced by 'for instance,' the saguaro is a specific example of the general claim that desert plants store water. D) Wrong: the saguaro directly continues the topic of water storage.",
  "choices": [
   "It raises an objection to the claim made in the first sentence.",
   "It explains why the claim in the first sentence is difficult to prove.",
   "It provides a specific example of the general claim made in the first sentence.",
   "It introduces a new topic unrelated to the first sentence."
  ],
  "answerIndex": 2
 },
 {
  "id": "cft-019",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Text Structure and Purpose",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "To make paper by hand, artisans first soak shredded cotton rags in water until they soften into pulp. Next, they lift a thin layer of the pulp onto a mesh screen and press out the excess water. Finally, the sheet is hung to dry, and once it is fully dry it can be trimmed and used.",
  "question": "Which choice best describes the overall structure of the text?",
  "solution": "A) Wrong: handmade paper is never compared favorably with anything. B) Wrong: no history is given. C) Wrong: only one method is described. D) Correct: the text walks through the process in order, marked by 'first,' 'Next,' and 'Finally.'",
  "choices": [
   "It argues for the superiority of handmade paper.",
   "It describes the history of papermaking.",
   "It compares two methods of making paper.",
   "It explains the steps of a process in the order in which they are performed."
  ],
  "answerIndex": 3
 },
 {
  "id": "cft-020",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Text Structure and Purpose",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "When the beavers built their dam across Willow Creek, the water behind it slowed and spread into a shallow pond. The new pond attracted frogs, herons, and dragonflies that had never been seen along the creek before. Within two years, the stretch of creek below the dam supported far more species than it had in the past.",
  "question": "Which choice best describes the overall structure of the text?",
  "solution": "A) Wrong: only one view of the dam is presented. B) Correct: the text begins with the dam's construction and then traces what followed — the pond, the new animals, and the richer ecosystem. C) Wrong: no term is defined. D) Wrong: no question is posed.",
  "choices": [
   "It presents two opposing views of beaver dams.",
   "It describes an event and then traces the effects that followed from it.",
   "It defines a scientific term and gives examples of it.",
   "It poses a question about beavers and answers it."
  ],
  "answerIndex": 1
 },
 {
  "id": "cft-021",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Text Structure and Purpose",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "It is easy to assume that the busiest animals in a garden are the ones doing it the most good. In fact, the quiet earthworm may matter more than any of them: by tunneling through the soil, earthworms let air and water reach plant roots, and their droppings enrich the soil with nutrients.",
  "question": "Which choice best describes the main purpose of the text?",
  "solution": "A) Correct: the text opens with an easy assumption, overturns it with 'In fact,' and then gives the evidence for the earthworm's importance. B) Wrong: no instructions for attracting earthworms are given. C) Wrong: no other animal's habits are described. D) Wrong: the text says nothing about leaving gardens undisturbed.",
  "choices": [
   "It questions a common assumption and then presents evidence that challenges it.",
   "It explains how to attract earthworms to a garden.",
   "It compares the habits of several garden animals in detail.",
   "It argues that gardens should be left completely undisturbed."
  ],
  "answerIndex": 0
 },
 {
  "id": "cft-022",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Text Structure and Purpose",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "Every morning at six, Marta Ellison unlocks the doors of the Harrow Street bakery and begins the day's work. She mixes the dough that has been rising overnight, slides the first trays into the oven, and writes the day's specials on the chalkboard by the register. By the time the first customers arrive at seven, the smell of fresh bread fills the street, and a line has already formed at the counter.",
  "question": "Which choice best describes the main purpose of the text?",
  "solution": "A) Wrong: the text recommends nothing about opening hours. B) Wrong: although dough is mentioned, its chemistry is never explained. C) Wrong: no other bakery appears. D) Correct: the text walks through one person's morning routine at the bakery, from unlocking the doors to the first customers, simply describing the preparations.",
  "choices": [
   "To argue that bakeries should open earlier in the morning",
   "To explain the chemical process by which bread rises",
   "To compare Marta Ellison's bakery with others on the street",
   "To describe a typical morning at a bakery and the preparations it involves"
  ],
  "answerIndex": 3
 },
 {
  "id": "cft-023",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Cross-Text Connections",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "Text 1\n\nThe public library should extend its evening hours. Many residents work until six or later and cannot reach the library before it closes at seven. Longer hours would let working people use the library's computers, meeting rooms, and collections.\n\nText 2\n\nAs a librarian, I see the same problem every week: patrons rush in minutes before closing, apologizing for the traffic on their commute. Extending our evening hours, even by one hour, would serve exactly the residents who now have the least access.",
  "question": "Based on the texts, the authors of Text 1 and Text 2 would most likely agree that",
  "solution": "A) Correct: Text 1 says workers cannot reach the library before it closes, and Text 2 describes patrons rushing in minutes before closing — both identify the closing time as a barrier for working residents. B) Wrong: weekend hours are never mentioned. C) Wrong: meeting rooms appear only in Text 1's list, and neither author ranks them as most important. D) Wrong: neither text mentions fees.",
  "choices": [
   "the library's current closing time prevents many working residents from using it.",
   "the library should reduce its weekend hours.",
   "meeting rooms are the library's most important resource.",
   "residents should be charged a fee for evening use."
  ],
  "answerIndex": 0
 },
 {
  "id": "cft-024",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Cross-Text Connections",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "Text 1\n\nThe city should keep the Northside Pool open through September. The water stays warm well into the fall, and swim lessons for children are in high demand.\n\nText 2\n\nKeeping the pool open an extra month sounds appealing, but the pool's budget is already stretched thin. The cost of lifeguards and heating for September would force cuts to the summer programs that serve far more children.",
  "question": "Based on the texts, how would the author of Text 2 most likely respond to the proposal in Text 1?",
  "solution": "A) Wrong: Text 2 never addresses the demand for lessons. B) Wrong: Text 2 opposes the extension, not the pool itself. C) Correct: Text 2's objection is budgetary — the cost of September lifeguards and heating would force cuts to summer programs serving far more children. D) Wrong: Text 2 does not dispute the water temperature; Text 1 says the water stays warm.",
  "choices": [
   "By agreeing that September lessons are in high demand",
   "By suggesting that the pool be closed permanently",
   "By arguing that the cost of staying open longer would harm more popular programs",
   "By claiming that the water is too cold in September"
  ],
  "answerIndex": 2
 },
 {
  "id": "cft-025",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Cross-Text Connections",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "Text 1\n\nProtected bike lanes make cycling safer. In cities that have installed them, injuries to cyclists have fallen sharply, because a physical barrier separates riders from car traffic.\n\nText 2\n\nI began cycling to work only after my street got a protected lane. Before, I feared riding beside fast-moving cars; now the curb between my bike and traffic lets me ride with confidence.",
  "question": "Based on the texts, the authors of Text 1 and Text 2 would most likely agree that",
  "solution": "A) Wrong: neither text discusses speed of travel. B) Wrong: neither author makes a universal claim about all streets. C) Wrong: car numbers are never mentioned. D) Correct: Text 1 credits the physical barrier for falling injuries, and Text 2 credits the curb between bike and traffic for the rider's confidence — both tie safety to separation from cars.",
  "choices": [
   "cycling is the fastest way to travel in a city.",
   "all streets in every city should have protected lanes.",
   "bike lanes reduce the number of cars on the road.",
   "a physical separation from car traffic makes cycling safer."
  ],
  "answerIndex": 3
 },
 {
  "id": "cft-026",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Cross-Text Connections",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "Text 1\n\nHomework reinforces what students learn in class. When students practice problems at home, they remember the material longer and perform better on tests.\n\nText 2\n\nPractice matters, but where it happens matters too. Studies of elementary students find little benefit from homework at young ages, and the practice students need can be built into the school day, when a teacher is there to help.",
  "question": "Based on the texts, how would the author of Text 2 most likely respond to the claim in Text 1 that practicing at home helps students remember material?",
  "solution": "A) Wrong: Text 2 opens by granting that 'Practice matters.' B) Correct: Text 2 accepts the value of practice but relocates it, saying the practice students need can be built into the school day. C) Wrong: tests are never mentioned in Text 2. D) Wrong: Text 2 says nothing about the amount of homework assigned.",
  "choices": [
   "By denying that practice helps students learn",
   "By suggesting that the needed practice can happen during school hours instead of at home",
   "By arguing that tests should be abolished",
   "By claiming that teachers assign too much homework"
  ],
  "answerIndex": 1
 },
 {
  "id": "cft-027",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Cross-Text Connections",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "Text 1\n\nThe Saturday farmers market benefits the whole town. Local growers earn a fair price for their produce, and residents get fresher food than the supermarket offers.\n\nText 2\n\nAs one of the growers at the Saturday market, I can say the market has changed my farm's fortunes. Selling directly to neighbors pays better than selling to distributors, and my customers tell me the vegetables taste fresher.",
  "question": "Based on the texts, the authors of Text 1 and Text 2 would most likely agree that",
  "solution": "A) Correct: Text 1 says growers earn a fair price and residents get fresher food; Text 2 confirms both halves from experience — direct selling pays better and customers find the vegetables fresher. B) Wrong: neither author proposes closing supermarkets. C) Wrong: prices are praised as fair, not criticized as high. D) Wrong: the market's schedule is never discussed as a problem.",
  "choices": [
   "the market benefits both the growers who sell there and the residents who buy there.",
   "supermarkets in the town should be closed.",
   "growers should lower the prices they charge at the market.",
   "the market should be held every day of the week."
  ],
  "answerIndex": 0
 },
 {
  "id": "cft-028",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Cross-Text Connections",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "Text 1\n\nPutting a recycling bin on every street corner would dramatically increase recycling. People throw recyclable bottles in the trash mainly because no bin is nearby.\n\nText 2\n\nBins alone will not solve the problem. In the pilot program on Fifth Street, corner bins filled up with ordinary trash because passersby did not sort their waste. Without education, more bins just means more contaminated recycling.",
  "question": "Based on the texts, the author of Text 2 would most likely respond to the claim in Text 1 by",
  "solution": "A) Wrong: Text 2 disputes the convenience explanation, pointing to unsorted waste instead. B) Wrong: home bins are never proposed. C) Correct: Text 2 argues bins alone fail because people do not sort, concluding that without education more bins just means more contaminated recycling. D) Wrong: Text 2 criticizes a strategy, not recycling itself.",
  "choices": [
   "agreeing that convenience is the main obstacle to recycling.",
   "proposing that bins be placed inside homes instead.",
   "arguing that adding bins without teaching people to sort will not work.",
   "claiming that recycling should be abandoned."
  ],
  "answerIndex": 2
 },
 {
  "id": "cft-029",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Cross-Text Connections",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "Text 1\n\nReading aloud to young children builds their vocabularies. Children who are read to daily hear thousands more words than children who are not, and they start school better prepared.\n\nText 2\n\nIn my kindergarten classroom, the difference is easy to see. The children who were read to at home arrive knowing more words and follow stories more easily than their classmates.",
  "question": "Based on the texts, the authors of Text 1 and Text 2 would most likely agree that",
  "solution": "A) Wrong: neither text discusses children reading independently or any age target. B) Correct: Text 1 says read-to children hear thousands more words, and Text 2 observes that they arrive at school knowing more words — both credit being read to with a vocabulary advantage. C) Wrong: buying books is never mentioned. D) Wrong: classroom reading practices are not Text 1's subject, and Text 2 describes home reading.",
  "choices": [
   "children should learn to read on their own before age four.",
   "being read to gives young children an advantage in word knowledge.",
   "parents should buy more books for their children.",
   "kindergarten teachers should read aloud more often."
  ],
  "answerIndex": 1
 },
 {
  "id": "cft-030",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Words in Context",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "When the artist died in obscurity, her paintings sold for almost nothing. Over the following decades, however, the works began to appreciate, and today a single canvas can sell for more than a million dollars.",
  "question": "As used in the text, “appreciate” most nearly means",
  "solution": "A) Wrong: the passage concerns selling prices, not critical enjoyment. B) Wrong: nothing is said about producing more paintings. C) Correct: works that once sold for almost nothing now sell for over a million dollars, so they increased in value. D) Wrong: the prices rose dramatically rather than falling.",
  "choices": [
   "be enjoyed and understood by critics",
   "be produced in larger numbers",
   "increase in value",
   "fall steadily in price"
  ],
  "answerIndex": 2
 },
 {
  "id": "cft-031",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Words in Context",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "At first, the committee refused to entertain the proposal, calling it too expensive to discuss. Only after a new cost estimate arrived did the members agree to consider it at the next meeting.",
  "question": "As used in the text, “entertain” most nearly means",
  "solution": "A) Wrong: no performance is involved. B) Wrong: no guests are being hosted. C) Wrong: the parallel ending — the members later 'agree to consider it' — shows that entertaining the proposal means giving it consideration, the opposite of dismissing it unconsidered. D) Correct: the committee at first refused to consider the proposal seriously.",
  "choices": [
   "amuse an audience with a performance",
   "provide hospitality to guests",
   "dismiss without any consideration",
   "consider seriously"
  ],
  "answerIndex": 3
 },
 {
  "id": "cft-032",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Words in Context",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "Throughout her career, Senator Ana Ruiz championed the cause of rural hospitals, speaking for them in debate after debate and fighting for their funding year after year.",
  "question": "As used in the text, “championed” most nearly means",
  "solution": "A) Correct: Ruiz spoke for the hospitals in debate after debate and fought for their funding, publicly supporting and defending their cause. B) Wrong: no contest or opponent is mentioned. C) Wrong: no celebration is described. D) Wrong: her support was public and sustained, not private opposition.",
  "choices": [
   "publicly supported and defended",
   "won a contest against",
   "celebrated with a parade",
   "privately opposed"
  ],
  "answerIndex": 0
 },
 {
  "id": "cft-033",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Words in Context",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "The engineers studied the bridge's collapse for months but could not fathom why the central support had failed, since it had passed every inspection.",
  "question": "As used in the text, “fathom” most nearly means",
  "solution": "A) Wrong: that is the nautical sense; no water is being measured. B) Correct: after months of study the engineers still could not understand why the support had failed. C) Wrong: the engineers were investigating, not repairing. D) Wrong: they studied the collapse for months, so they did not ignore it.",
  "choices": [
   "measure the depth of water",
   "understand or comprehend",
   "repair or rebuild",
   "deliberately ignore"
  ],
  "answerIndex": 1
 },
 {
  "id": "cft-034",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Words in Context",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "The temple wall is carved in relief: the figures of the king and his attendants stand out from the flat stone background, casting small shadows in the afternoon light.",
  "question": "As used in the text, “relief” most nearly means",
  "solution": "A) Wrong: no one's feelings are described. B) Wrong: no aid is given. C) Wrong: the figures stand out from the background, so the carving is not flat. D) Correct: the figures are carved so that they stand out from the flat stone — a sculptural design raised from a surface.",
  "choices": [
   "a feeling of reassurance",
   "aid given to those in need",
   "a completely flat surface",
   "a sculptural design raised from a surface"
  ],
  "answerIndex": 3
 },
 {
  "id": "cft-035",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Words in Context",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "Stranded by the storm with limited supplies, the sailors husbanded their fresh water, drinking only a few sips at a time so that the barrels would last until rescue came.",
  "question": "As used in the text, “husbanded” most nearly means",
  "solution": "A) Wrong: no marriage is involved; the word is a verb describing the management of water. B) Wrong: drinking only a few sips at a time is the opposite of wasting. C) Correct: the sailors used their water sparingly and carefully so it would last until rescue. D) Wrong: no strangers or sharing arrangement appears.",
  "choices": [
   "married",
   "wasted through carelessness",
   "used sparingly and carefully",
   "shared equally with strangers"
  ],
  "answerIndex": 2
 },
 {
  "id": "cft-036",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Words in Context",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "The old harbormaster would brook no argument about the safety rules: any sailor who questioned them was ordered off the dock at once.",
  "question": "As used in the text, “brook” most nearly means",
  "solution": "A) Correct: the harbormaster would tolerate no argument — questioners were ordered off the dock at once. B) Wrong: that is the noun sense; here the word is a verb. C) Wrong: arguments were cut off, not discussed at length. D) Wrong: nothing is written down.",
  "choices": [
   "tolerate or allow",
   "a small stream",
   "discuss at length",
   "write down officially"
  ],
  "answerIndex": 0
 },
 {
  "id": "cft-037",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Words in Context",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "Before signing the report, the auditor was ______ about every figure, checking each calculation three times and questioning even the smallest discrepancy.",
  "question": "Which choice completes the text with the most logical and precise word or phrase?",
  "solution": "A) Wrong: checking each calculation three times is the opposite of careless. B) Correct: triple-checking every figure and questioning the smallest discrepancy shows meticulous attention to detail. C) Wrong: the repeated checking shows she was not hurried. D) Wrong: confidence alone does not capture the careful scrutiny the sentence describes.",
  "choices": [
   "careless",
   "meticulous",
   "hurried",
   "confident"
  ],
  "answerIndex": 1
 },
 {
  "id": "cft-038",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Words in Context",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "Although the committee pressed him for weeks, the mayor remained ______ to approve the stadium plan, and only after long hesitation did he finally agree to consider it.",
  "question": "Which choice completes the text with the most logical and precise word or phrase?",
  "solution": "A) Correct: weeks of pressure and long hesitation before even considering the plan show the mayor was reluctant — unwilling and hesitant. B) Wrong: an eager mayor would not need weeks of pressing. C) Wrong: the mayor was able to approve the plan; he was unwilling, not incapable. D) Wrong: his qualifications are not at issue.",
  "choices": [
   "reluctant",
   "eager",
   "unable",
   "qualified"
  ],
  "answerIndex": 0
 },
 {
  "id": "cft-039",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Words in Context",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "Once every office adopted digital files, the filing cabinets that had filled the basement for decades became ______, and the staff eventually hauled them away.",
  "question": "Which choice completes the text with the most logical and precise word or phrase?",
  "solution": "A) Wrong: cost is never mentioned. B) Wrong: the cabinets were full of files, but the point is that digital files replaced them. C) Wrong: the cabinets were decades old and discarded, not modern. D) Correct: once digital files were adopted, the cabinets were no longer used or needed — obsolete — and were hauled away.",
  "choices": [
   "expensive",
   "crowded",
   "modern",
   "obsolete"
  ],
  "answerIndex": 3
 },
 {
  "id": "cft-040",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Words in Context",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "The vote was ______: every one of the twelve council members voted in favor of the proposal, and not a single member voted against it.",
  "question": "Which choice completes the text with the most logical and precise word or phrase?",
  "solution": "A) Wrong: with not a single vote against, the vote was not close. B) Wrong: the text gives the full result, so secrecy is not the point. C) Correct: when every member votes the same way, the vote is unanimous. D) Wrong: nothing suggests the vote was postponed.",
  "choices": [
   "close",
   "secret",
   "unanimous",
   "delayed"
  ],
  "answerIndex": 2
 },
 {
  "id": "cft-041",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Words in Context",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "The new aquarium tunnel is made of a special acrylic that is completely ______: visitors standing inside can see the sharks and rays swimming overhead as clearly as if no barrier existed.",
  "question": "Which choice completes the text with the most logical and precise word or phrase?",
  "solution": "A) Wrong: flexibility is not what lets visitors see through the tunnel. B) Correct: visitors see the animals as clearly as if no barrier existed because the acrylic lets light pass through — it is transparent. C) Wrong: waterproofing may be true of the tunnel but does not explain the clear view. D) Wrong: an opaque material cannot be seen through at all.",
  "choices": [
   "flexible",
   "transparent",
   "waterproof",
   "opaque"
  ],
  "answerIndex": 1
 },
 {
  "id": "cft-042",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Words in Context",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "Even after winning the lottery, Mrs. Chen remained ______ in her habits, mending her own clothes and comparing prices at three stores before buying groceries.",
  "question": "Which choice completes the text with the most logical and precise word or phrase?",
  "solution": "A) Correct: mending her own clothes and comparing prices at three stores are habits of someone careful not to waste money — frugal. B) Wrong: although the lottery made her wealthy, the sentence describes her habits, not her bank balance. C) Wrong: her habits are the opposite of extravagant. D) Wrong: nothing describes giving to others.",
  "choices": [
   "frugal",
   "wealthy",
   "extravagant",
   "generous"
  ],
  "answerIndex": 0
 },
 {
  "id": "cft-043",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Text Structure and Purpose",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "Farmers in the valley control weeds in two very different ways. Some rely on herbicides, spraying their fields early in the season; this method is fast but can harm insects that visit the crops. Others release grazing geese into the fields; the geese are slower, but they eat the weeds without chemicals and leave the crops untouched.",
  "question": "Which choice best describes the overall structure of the text?",
  "solution": "A) Correct: the text sets two approaches side by side — fast but harmful herbicides versus slower but chemical-free geese — weighing each one's advantages and drawbacks. B) Wrong: neither method is condemned or proposed for a ban. C) Wrong: no history is given. D) Wrong: both methods already exist; no new solution is proposed.",
  "choices": [
   "It contrasts two approaches to the same task, noting advantages and drawbacks of each.",
   "It argues that one of the two methods should be banned.",
   "It describes the history of weed control in the valley.",
   "It explains a problem and then proposes a new solution to it."
  ],
  "answerIndex": 0
 },
 {
  "id": "cft-044",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Text Structure and Purpose",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "Biologist Ken Watanabe suspected that the lake's fish were avoiding the shallow bays because the water there had grown too warm. To test this idea, he placed temperature sensors in the bays and tracked the fish with sonar for a full summer. The data confirmed his suspicion: on the hottest days, the fish gathered almost entirely in the deep, cool center of the lake.",
  "question": "Which choice best describes the overall structure of the text?",
  "solution": "A) Wrong: the hypothesis is confirmed, not refuted. B) Correct: the text moves from Watanabe's suspicion to the test he designed and then to the data that confirmed it. C) Wrong: only one lake is studied. D) Wrong: equipment is mentioned only as part of the investigation, not listed as the text's subject.",
  "choices": [
   "It presents an argument and then refutes it.",
   "It introduces a hypothesis and then describes an investigation and its findings.",
   "It compares the fish populations of two different lakes.",
   "It lists the equipment used in a scientific study."
  ],
  "answerIndex": 1
 },
 {
  "id": "cft-045",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Text Structure and Purpose",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "Regular exercise strengthens the heart, improves sleep, and lifts mood. For most healthy adults, even thirty minutes of brisk walking a day brings these benefits. This holds true, however, only for those whose doctors have confirmed that such activity is safe for them.",
  "question": "Which choice best describes the function of the final sentence?",
  "solution": "A) Wrong: the final sentence gives no example. B) Wrong: no new benefit is added. C) Correct: beginning 'This holds true, however, only for those...,' the sentence restricts the earlier claim to people cleared by their doctors. D) Wrong: the sentence adds a qualification rather than restating the whole text.",
  "choices": [
   "It provides an example of the benefits listed earlier.",
   "It introduces an additional benefit of exercise.",
   "It limits the claim made earlier by noting a condition on it.",
   "It summarizes the entire text."
  ],
  "answerIndex": 2
 },
 {
  "id": "cft-046",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Text Structure and Purpose",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "A lever is a simple machine consisting of a rigid bar that pivots around a fixed point, allowing a small force applied at one end to move a heavy load at the other. This principle is at work in tools as different as crowbars, seesaws, and bottle openers.",
  "question": "Which choice best describes the function of the text as a whole?",
  "solution": "A) Wrong: no argument about use is made. B) Wrong: the invention's history is never mentioned. C) Wrong: no other machine is discussed. D) Correct: the first sentence defines the lever, and the second gives tools that apply the principle.",
  "choices": [
   "It argues that simple machines are underused in daily life.",
   "It traces the invention of the lever.",
   "It compares the lever with other simple machines.",
   "It defines a concept and then gives examples of its application."
  ],
  "answerIndex": 3
 },
 {
  "id": "cft-047",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Text Structure and Purpose",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "When the composer Elena Vidal died in 1974, she left behind a trunk of unfinished scores that her family donated to the national library. For decades the trunk sat unopened in a storage room. In 2019, musicologist David Chen obtained permission to examine its contents and found drafts of a symphony Vidal had never mentioned in her letters. Chen's edition of the symphony was performed for the first time in 2022, forty-eight years after the composer's death.",
  "question": "Which choice best describes the main purpose of the text?",
  "solution": "A) Correct: the text narrates the symphony's path from the trunk Vidal left behind, through decades of storage and Chen's discovery, to its first performance. B) Wrong: the text recommends no policy for libraries. C) Wrong: the symphony is never compared with other works. D) Wrong: Chen's editing is mentioned in one clause, not explained as a process.",
  "choices": [
   "To recount how a composer's lost work was preserved, discovered, and eventually performed",
   "To argue that libraries should preserve composers' papers",
   "To compare Vidal's symphony with her other works",
   "To explain the process of editing a musical score"
  ],
  "answerIndex": 0
 },
 {
  "id": "cft-048",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Text Structure and Purpose",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "In 1962, a postal worker in Ohio mailed a package to himself using only a series of individual stamps, one added at each stop, to test whether the sorting system worked. His experiment may sound like a joke, but it illustrates a serious point: the postal network of the era depended on thousands of small, careful decisions by clerks at every stage.",
  "question": "Which choice best describes the function of the first sentence?",
  "solution": "A) Wrong: the conclusion comes later, in the 'serious point.' B) Correct: the opening incident — the self-mailed package — is the concrete case through which the text introduces its general point about the postal network. C) Wrong: the incident supports rather than contradicts the point. D) Wrong: no term is defined.",
  "choices": [
   "It states the text's main conclusion.",
   "It introduces, through a specific incident, the general point the text goes on to make.",
   "It presents evidence that contradicts the text's claim.",
   "It defines a key term used later in the text."
  ],
  "answerIndex": 1
 },
 {
  "id": "cft-049",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Text Structure and Purpose",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "Historians have long debated why the mountain kingdom of Zafra collapsed in the twelfth century. Some point to a series of droughts that ruined its farms. Others note that Zafra's kings spent heavily on palaces while neglecting the roads that carried its trade. The second explanation fits the evidence better: tax records show road tolls falling for decades, while harvests, though smaller in dry years, never failed completely.",
  "question": "Which choice best describes the overall structure of the text?",
  "solution": "A) Wrong: the weather explanation is the one the text finds weaker. B) Wrong: the text resolves the debate in favor of the roads explanation. C) Correct: two explanations are presented — drought and neglected roads — and the text argues the second fits the evidence better. D) Wrong: only Zafra is discussed.",
  "choices": [
   "It describes a collapse and blames it entirely on the weather.",
   "It presents a mystery and leaves it unresolved.",
   "It presents two explanations for an event and argues that one is better supported.",
   "It compares two kingdoms that collapsed in the same period."
  ],
  "answerIndex": 2
 },
 {
  "id": "cft-050",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Text Structure and Purpose",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "The guidebook describes the old town in the order a visitor would walk through it: first the harbor, then the market square, then the narrow lanes climbing to the castle. Along the way it pauses at each fountain and church, noting when it was built and what a traveler should look for.",
  "question": "Which choice best describes the function of the text as a whole?",
  "solution": "A) Wrong: the text makes no preservation argument. B) Wrong: the castle is only the walk's endpoint, and its history is not narrated. C) Wrong: no modern city appears. D) Correct: the text explains that the guidebook follows a walking sequence — harbor, square, lanes, castle — pausing to point out features a traveler should notice.",
  "choices": [
   "To argue that the old town should be preserved",
   "To narrate the history of the castle",
   "To compare the old town with modern cities",
   "To guide a reader through a place in the sequence of a visit, pointing out features to notice"
  ],
  "answerIndex": 3
 },
 {
  "id": "cft-051",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Text Structure and Purpose",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "Critics of the new library design call the glass atrium a waste of money. Admittedly, the atrium was the most expensive part of the building. Yet it is also the part residents use most: the reading seats beneath it are full from morning to night, and the space hosts free classes every weekend.",
  "question": "Which choice best describes the main purpose of the text?",
  "solution": "A) Wrong: the text defends this building rather than criticizing costs. B) Correct: the text concedes the critics' point ('Admittedly, the atrium was the most expensive part') and then answers it ('Yet it is also the part residents use most'). C) Wrong: no architectural history is given. D) Wrong: the building already exists; no design is proposed.",
  "choices": [
   "To criticize the cost of public buildings",
   "To acknowledge a criticism of a design choice and then argue that the choice was justified",
   "To describe the architectural history of libraries",
   "To propose a new design for the library"
  ],
  "answerIndex": 1
 },
 {
  "id": "cft-052",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Cross-Text Connections",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "Text 1\n\nCity museums should charge admission. Ticket revenue would pay for the maintenance and new exhibitions that current budgets cannot cover, and visitors who pay are more likely to value what they see.\n\nText 2\n\nFree admission is the whole point of a public museum. The moment a family must pay at the door, the museum stops belonging to everyone and becomes a service for those who can afford it. Cities should fund their museums as they fund their parks.",
  "question": "Based on the texts, the authors of Text 1 and Text 2 would most likely disagree about whether",
  "solution": "A) Wrong: both texts assume museums need funding — they differ over the source, not the need. B) Wrong: enjoyment is not in dispute. C) Wrong: parks appear only in Text 2's analogy. D) Correct: Text 1 endorses admission fees as the funding source, while Text 2 holds that charging at the door betrays the museum's purpose — a direct disagreement.",
  "choices": [
   "museums need money for maintenance and exhibitions.",
   "visitors enjoy museum exhibitions.",
   "public parks should be free to enter.",
   "charging admission is an acceptable way to fund a public museum."
  ],
  "answerIndex": 3
 },
 {
  "id": "cft-053",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Cross-Text Connections",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "Text 1\n\nStatewide tests give parents and taxpayers an honest picture of how schools are doing. Without a common measure, struggling schools can hide behind their own easy grading.\n\nText 2\n\nA common measure sounds fair, but a single test on a single day cannot capture what a school does. Schools serving poorer neighborhoods start with fewer resources, and the tests mostly record that inequality rather than the quality of teaching.",
  "question": "Based on the texts, how would the author of Text 2 most likely respond to the claim in Text 1 that statewide tests give an honest picture of schools?",
  "solution": "A) Wrong: Text 2 never takes up grading practices. B) Wrong: no such proposal appears. C) Correct: Text 2 answers the 'honest picture' claim by arguing the tests mostly record inequality of resources rather than the quality of teaching. D) Wrong: taxpayers' attitudes are not discussed in Text 2.",
  "choices": [
   "By agreeing that easy grading is a serious problem",
   "By proposing that parents should grade the schools themselves",
   "By arguing that test results reflect unequal resources more than school quality",
   "By claiming that taxpayers do not care about school quality"
  ],
  "answerIndex": 2
 },
 {
  "id": "cft-054",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Cross-Text Connections",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "Text 1\n\nWorking from home has made employees more productive. Freed from commuting, workers report finishing tasks faster and taking fewer sick days.\n\nText 2\n\nThe productivity gains from remote work are real, especially for focused, independent tasks. Managers should nevertheless remember that new employees learn a great deal by watching experienced colleagues in person.",
  "question": "Based on the texts, the authors of Text 1 and Text 2 would most likely agree that",
  "solution": "A) Wrong: neither author proposes a mandate. B) Correct: Text 1 states the productivity gain directly, and Text 2 calls the gains 'real' before adding a caution — both accept the gain itself. C) Wrong: Text 2 notes a benefit of in-person learning but never proposes a ban for new employees. D) Wrong: sick days appear in Text 1 without any claim about their main cause.",
  "choices": [
   "remote work should be mandatory for all employees.",
   "working from home can increase employees' productivity.",
   "new employees should never be allowed to work remotely.",
   "commuting is the main cause of sick days."
  ],
  "answerIndex": 1
 },
 {
  "id": "cft-055",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Cross-Text Connections",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "Text 1\n\nThe city's ban on plastic bags has failed. Shoppers have simply switched to paper bags, and the total weight of bag waste has barely changed.\n\nText 2\n\nIt is true that paper bags have replaced many plastic ones since the ban. But plastic bags were the ones clogging storm drains and washing into the river; on the measure that matters most — plastic in the waterways — the ban has plainly worked.",
  "question": "Based on the texts, how would the author of Text 2 most likely respond to the claim in Text 1 that the bag ban has failed?",
  "solution": "A) Correct: Text 2 concedes the switch to paper ('It is true that paper bags have replaced many plastic ones') but answers the failure claim by pointing to the ban's main goal — plastic in the waterways — where it 'has plainly worked.' B) Wrong: Text 2 explicitly grants the switch. C) Wrong: Text 2 treats the drains and river as the measure that matters most. D) Wrong: no further ban is proposed.",
  "choices": [
   "By granting that paper bags have replaced plastic ones but arguing that the ban succeeded at its main goal",
   "By denying that shoppers have switched to paper bags",
   "By arguing that storm drains are unimportant to the city",
   "By proposing that paper bags should also be banned"
  ],
  "answerIndex": 0
 },
 {
  "id": "cft-056",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Cross-Text Connections",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "Text 1\n\nModern zoos are essential to conservation. Their breeding programs have returned several species to the wild, and zoo research protects animals that would otherwise vanish.\n\nText 2\n\nBreeding programs help a handful of species, but they cannot justify keeping wide-ranging animals in enclosures. A tiger that paces a fenced yard is not being conserved; it is being displayed.",
  "question": "Based on the texts, the authors of Text 1 and Text 2 would most likely disagree about whether",
  "solution": "A) Wrong: Text 2 grants that breeding programs help some species. B) Wrong: Text 2 itself calls the animals wide-ranging, and Text 1 does not dispute it. C) Wrong: research is asserted in Text 1 and not contested in Text 2. D) Correct: Text 1 calls zoos essential to conservation, while Text 2 says the benefits 'cannot justify' the enclosures — the core disagreement.",
  "choices": [
   "any species has ever been returned to the wild by a zoo.",
   "tigers are wide-ranging animals.",
   "zoos conduct research on animals.",
   "the conservation benefits of zoos justify keeping animals in captivity."
  ],
  "answerIndex": 3
 },
 {
  "id": "cft-057",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Cross-Text Connections",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "Text 1\n\nTraffic cameras at busy intersections reduce accidents. After cameras were installed at twelve intersections in our city, collisions fell by a fifth within a year.\n\nText 2\n\nCollisions did fall at those twelve intersections. But drivers who know about the cameras brake suddenly as they approach them, and rear-end collisions just before the intersections have actually risen.",
  "question": "Based on the texts, the author of Text 2 would most likely characterize the claim in Text 1 as",
  "solution": "A) Wrong: Text 2 grants that collisions fell at the twelve intersections. B) Wrong: Text 2 accepts the figures and adds to them rather than calling them fabricated. C) Correct: Text 2 confirms the drop at the intersections but faults the claim for ignoring the rise in rear-end collisions just before them. D) Wrong: Text 2 treats the claim as directly relevant, just incomplete.",
  "choices": [
   "entirely false, because collisions rose everywhere.",
   "supported by evidence that Text 2 rejects as fabricated.",
   "accurate about the intersections themselves but incomplete, because it ignores a harmful side effect nearby.",
   "irrelevant to the question of traffic safety."
  ],
  "answerIndex": 2
 },
 {
  "id": "cft-058",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Cross-Text Connections",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "Text 1\n\nRooftop gardens can cool a city. Plants on roofs absorb sunlight that would otherwise heat the building and the air around it.\n\nText 2\n\nRooftop gardens do lower the temperature of the buildings beneath them, sometimes by several degrees. Their effect on a whole city's air, however, is small unless thousands of roofs are planted.",
  "question": "Based on the texts, both Text 1 and Text 2 support which of the following claims?",
  "solution": "A) Wrong: neither text proposes a requirement. B) Correct: Text 1 says the plants keep the building from heating, and Text 2 states outright that the gardens lower the temperature of the buildings beneath them — the claim both support. C) Wrong: cost is never mentioned. D) Wrong: neither text ranks cities' problems.",
  "choices": [
   "Cities should require rooftop gardens on all new buildings.",
   "Planting gardens on roofs lowers temperatures at least for the buildings involved.",
   "Rooftop gardens are inexpensive to install and maintain.",
   "Air temperature is the most serious problem facing cities."
  ],
  "answerIndex": 1
 },
 {
  "id": "cft-059",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Words in Context",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "For the expedition's doctor, the cardinal rule was simple: no one drank water that had not been boiled. She treated this precaution as more important than any other, repeating it to the team every morning.",
  "question": "As used in the text, “cardinal” most nearly means",
  "solution": "A) Wrong: no church official is involved. B) Wrong: the color sense does not fit a rule. C) Wrong: the doctor treated the precaution as more important than any other. D) Correct: the rule outranked every other precaution, so it was of foremost importance.",
  "choices": [
   "relating to a church official",
   "bright red in color",
   "of minor importance",
   "of foremost importance"
  ],
  "answerIndex": 3
 },
 {
  "id": "cft-060",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Words in Context",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "The idea that the Earth moves around the Sun gained currency only slowly: for more than a century after it was proposed, most astronomers still rejected it, and only gradually did it become the accepted view.",
  "question": "As used in the text, “currency” most nearly means",
  "solution": "A) Wrong: no money is involved. B) Correct: the idea gained currency as it gradually became the accepted view — it won general acceptance over time. C) Wrong: that is the sense of the related word 'current' in its electrical use, not of 'currency' here. D) Wrong: the idea was eventually accepted, not rejected outright at the end.",
  "choices": [
   "money used in a country",
   "general acceptance or circulation",
   "an electrical flow",
   "immediate rejection"
  ],
  "answerIndex": 1
 },
 {
  "id": "cft-061",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Words in Context",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "The first attempt to cross the desert failed for want of water: the travelers had planned their food carefully but carried far too little to drink.",
  "question": "As used in the text, “want” most nearly means",
  "solution": "A) Wrong: the travelers' desires are not the issue; they physically lacked water. B) Wrong: no moral judgment is made. C) Correct: the attempt failed because water was lacking — they carried far too little to drink. D) Wrong: they had too little water, not a surplus.",
  "choices": [
   "a strong desire",
   "a moral failing",
   "a lack or absence of something needed",
   "an excess or surplus"
  ],
  "answerIndex": 2
 },
 {
  "id": "cft-062",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Words in Context",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "To make the dye, the weavers steep the yarn in a vat of indigo for a full day, letting the fibers absorb the color before the yarn is lifted out and dried.",
  "question": "As used in the text, “steep” most nearly means",
  "solution": "A) Correct: the yarn sits in a vat of indigo for a full day absorbing color — it is soaked in liquid. B) Wrong: that is the adjective sense, describing slopes, not a process done to yarn. C) Wrong: that sense describes prices. D) Wrong: drying happens only after the yarn is lifted out of the liquid.",
  "choices": [
   "soak in liquid",
   "sharply sloped",
   "unreasonably expensive",
   "dry out completely"
  ],
  "answerIndex": 0
 },
 {
  "id": "cft-063",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Words in Context",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "Because the full report ran to nine hundred pages, the committee published a digest of it: a forty-page version presenting the main findings and recommendations in condensed form.",
  "question": "As used in the text, “digest” most nearly means",
  "solution": "A) Wrong: that is the verb sense; here the word names a publication. B) Wrong: the forty-page version presents findings, not an index. C) Wrong: a condensed forty-page version of a nine-hundred-page report is not an exact copy. D) Correct: the digest is the report's main findings presented in condensed form — a summary.",
  "choices": [
   "break down food in the body",
   "a detailed index of names",
   "an exact copy of the original",
   "a condensed summary"
  ],
  "answerIndex": 3
 },
 {
  "id": "cft-064",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Words in Context",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "The peace talks foundered after three weeks when neither side would yield on the border question, and the negotiators returned home without an agreement.",
  "question": "As used in the text, “foundered” most nearly means",
  "solution": "A) Wrong: that is the sense of the similar-looking verb 'found,' not of 'founder.' B) Correct: the talks broke down after three weeks and the negotiators left without an agreement — the talks failed. C) Wrong: no ship is involved, and nothing is sunk deliberately. D) Wrong: the talks ended without an agreement.",
  "choices": [
   "established an institution",
   "failed or collapsed",
   "sank a ship deliberately",
   "reached a successful conclusion"
  ],
  "answerIndex": 1
 },
 {
  "id": "cft-065",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Words in Context",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "The desert flower is ______: it opens at dawn after a rare rain, releases its seeds, and withers away before sunset of the same day.",
  "question": "Which choice completes the text with the most logical and precise word or phrase?",
  "solution": "A) Correct: a flower that opens at dawn and withers before sunset of the same day lasts a very short time — it is ephemeral. B) Wrong: a perennial returns year after year, but this flower is gone within a day. C) Wrong: fragrance is never mentioned. D) Wrong: hardiness suggests endurance, the opposite of the flower's brief life.",
  "choices": [
   "ephemeral",
   "perennial",
   "fragrant",
   "hardy"
  ],
  "answerIndex": 0
 },
 {
  "id": "cft-066",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Words in Context",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "The historian's claim that the treaty was signed in 1812 was ______ by the discovery of a dated copy in the archives, which matched her account in every detail.",
  "question": "Which choice completes the text with the most logical and precise word or phrase?",
  "solution": "A) Wrong: the archival copy matched her account, so the claim was not invented. B) Wrong: a matching dated copy supports the claim rather than casting doubt on it. C) Correct: independent evidence that matches a claim in every detail corroborates it. D) Wrong: publication is not what the discovery did to the claim.",
  "choices": [
   "invented",
   "questioned",
   "corroborated",
   "published"
  ],
  "answerIndex": 2
 },
 {
  "id": "cft-067",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Words in Context",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "Rather than break the regulation, the factory found a way to ______ it, redesigning its process so that the rule, which applied only to the old method, no longer covered its operations.",
  "question": "Which choice completes the text with the most logical and precise word or phrase?",
  "solution": "A) Wrong: the rule still exists and still applies to the old method, so it was not repealed. B) Wrong: the factory acted rather than break the regulation, so it did not violate it. C) Wrong: publicizing the rule would not free the factory from it. D) Correct: by redesigning its process so the rule no longer covered its operations, the factory circumvented the rule — it found a way around it without breaking it.",
  "choices": [
   "repeal",
   "violate",
   "publicize",
   "circumvent"
  ],
  "answerIndex": 3
 },
 {
  "id": "cft-068",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Words in Context",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "The rain was ______ throughout the day: it would pour for twenty minutes, stop entirely while the sun came out, and then begin again an hour later.",
  "question": "Which choice completes the text with the most logical and precise word or phrase?",
  "solution": "A) Wrong: the rain stopped entirely between spells, so it was not continuous. B) Correct: rain that pours, stops completely, and begins again is intermittent. C) Wrong: the text emphasizes the stopping and starting, not the rain's intensity. D) Wrong: nothing places the rain in a season.",
  "choices": [
   "continuous",
   "intermittent",
   "torrential",
   "seasonal"
  ],
  "answerIndex": 1
 },
 {
  "id": "cft-069",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Words in Context",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "In her memoir, the general is remarkably ______ about her failures, describing her worst decisions in plain language and admitting exactly where her judgment went wrong.",
  "question": "Which choice completes the text with the most logical and precise word or phrase?",
  "solution": "A) Correct: describing her worst decisions plainly and admitting exactly where her judgment failed is frank honesty — candor. B) Wrong: she admits her errors outright rather than evading them. C) Wrong: the emphasis is on honesty about failure, not pride. D) Wrong: length is not the quality the sentence describes.",
  "choices": [
   "candid",
   "evasive",
   "proud",
   "lengthy"
  ],
  "answerIndex": 0
 },
 {
  "id": "cft-070",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Words in Context",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "Before the museum would display the manuscript, experts had to ______ it, examining the ink, paper, and handwriting to confirm that it was genuinely written in the twelfth century.",
  "question": "Which choice completes the text with the most logical and precise word or phrase?",
  "solution": "A) Wrong: copying would not confirm the manuscript's age. B) Wrong: translation concerns the text's language, not its genuineness. C) Correct: examining ink, paper, and handwriting to confirm genuine twelfth-century origin is authentication. D) Wrong: forging means creating a fake — the opposite of the experts' purpose.",
  "choices": [
   "copy",
   "translate",
   "authenticate",
   "forge"
  ],
  "answerIndex": 2
 },
 {
  "id": "cft-071",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Words in Context",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "Vegetation on the plateau is ______: a few drought-resistant shrubs are scattered widely across the dry ground, with long stretches of bare rock between them.",
  "question": "Which choice completes the text with the most logical and precise word or phrase?",
  "solution": "A) Wrong: a few widely scattered shrubs are not dense growth. B) Wrong: dry ground with bare rock is not lush. C) Wrong: the sentence stresses how little vegetation there is, not how many kinds. D) Correct: vegetation that is thinly scattered, with long stretches of bare rock between plants, is sparse.",
  "choices": [
   "dense",
   "lush",
   "varied",
   "sparse"
  ],
  "answerIndex": 3
 },
 {
  "id": "cft-072",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Text Structure and Purpose",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "What caused the sudden collapse of the harbor's fish population in 1998? Pollution was an early suspect, but water tests from that year show contaminant levels no higher than in previous years. Overfishing is likewise unlikely: the fleet had been reduced by half a decade earlier. The remaining explanation is the heat wave that struck that summer, which raised the harbor's temperature beyond what the fish could tolerate — and die-off records from neighboring harbors show losses only where the heat was most extreme.",
  "question": "Which choice best describes the overall structure of the text?",
  "solution": "A) Wrong: no policy is recommended. B) Correct: the text works through candidate explanations — pollution and overfishing are each ruled out by evidence — and argues for the heat wave, the explanation the evidence leaves standing. C) Wrong: neighboring harbors appear only in a single supporting clause. D) Wrong: the text is organized by explanations, not by a timeline of events.",
  "choices": [
   "It describes a problem and recommends a policy to solve it.",
   "It considers several possible explanations for an event and argues for the one the evidence leaves standing.",
   "It compares the fish populations of several harbors in detail.",
   "It presents a chronology of events in the harbor during 1998."
  ],
  "answerIndex": 1
 },
 {
  "id": "cft-073",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Text Structure and Purpose",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "In the novel's opening chapter, the narrator describes the house room by room, lingering on objects — a cracked teapot, a child's drawing — that later chapters reveal to be charged with memory. By the final page, the house has been sold, but the narrator's inventory of its contents has become the book's true subject: not the place itself, but the lives that accumulated inside it.",
  "question": "Which choice best describes the main purpose of the text?",
  "solution": "A) Wrong: only the opening inventory and the sale are mentioned; the plot is not summarized. B) Wrong: no judgment of the novel's length is made. C) Wrong: no other work by the author appears. D) Correct: the text explains how the room-by-room inventory of objects serves the novel's deeper subject — the lives that accumulated in the house.",
  "choices": [
   "To summarize the plot of a novel",
   "To argue that the novel should have been shorter",
   "To compare the novel with the author's other works",
   "To explain how a novel's descriptive technique serves its deeper subject"
  ],
  "answerIndex": 3
 },
 {
  "id": "cft-074",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Text Structure and Purpose",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "A city's oldest trees are not merely scenery. They shade streets, store carbon, and shelter birds that nest nowhere else. When the city of Branton announced plans to cut down its century-old elms for a road widening, residents organized, petitioned, and ultimately persuaded the council to reroute the road. The elms, in short, proved to be infrastructure as real as any road.",
  "question": "Which choice best describes the function of the final sentence?",
  "solution": "A) Correct: the final sentence returns to the opening claim that old trees are 'not merely scenery' and restates it — the elms are real infrastructure — now backed by the Branton example. B) Wrong: the sentence concerns the same elms. C) Wrong: the council rerouted the road, and the sentence endorses that outcome. D) Wrong: the sentence applies the word 'infrastructure' rhetorically; it does not define it.",
  "choices": [
   "It restates the text's central claim in light of the example that has been given.",
   "It introduces a new argument unrelated to the elms.",
   "It concedes that the road should have been built as planned.",
   "It provides a scientific definition of infrastructure."
  ],
  "answerIndex": 0
 },
 {
  "id": "cft-075",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Text Structure and Purpose",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "The mayor's speech never mentioned the scandal directly. Instead, she spoke at length about 'the ordinary decencies of public life' — returning calls, publishing budgets, answering letters — while the audience, aware of the missing funds, heard every commonplace phrase as an accusation.",
  "question": "Which choice best describes how the text explains the speech's effect?",
  "solution": "A) Wrong: the speech never mentioned the scandal directly, so there was no direct attack to quote. B) Wrong: the audience is portrayed as understanding the speech exactly as intended. C) Correct: the text explains the effect through omission — because the audience knew about the missing funds, the speech's ordinary phrases landed as accusations precisely because the scandal went unnamed. D) Wrong: no budget figures are given.",
  "choices": [
   "By quoting the speech's direct attack on the officials responsible",
   "By arguing that the audience misunderstood the speech",
   "By showing that the speech gained its force from what it pointedly left unsaid",
   "By summarizing the budget figures the speech presented"
  ],
  "answerIndex": 2
 },
 {
  "id": "cft-076",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Text Structure and Purpose",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "There are two reasons the night train between the capital and the port was restored in 2019. First, highway congestion had made the drive between the cities unreliable, often taking five hours. Second, the railway had completed electrification of the line, cutting the train's journey to just under three hours and making the service profitable again.",
  "question": "Which choice best describes the overall structure of the text?",
  "solution": "A) Wrong: the text explains one decision, not the line's history. B) Correct: after stating the restoration, the text gives its two reasons, explicitly numbered 'First' and 'Second.' C) Wrong: the drive is mentioned only as one reason, not as half of a general comparison. D) Wrong: no general argument about electrification is made.",
  "choices": [
   "It narrates the history of a railway line.",
   "It states a development and then gives two reasons for it.",
   "It compares train travel with highway travel in general.",
   "It argues that all rail lines should be electrified."
  ],
  "answerIndex": 1
 },
 {
  "id": "cft-077",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Text Structure and Purpose",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "For generations, the stone towers of the high valley were explained as watchtowers, built to spot raiders approaching from the north. That reading rested on little more than their height. Excavations in the last decade, however, have found grain stores at the base of several towers and no trace of weapons or signal fires, leading most scholars now to describe them as fortified granaries — protection not against armies, but against theft in lean years.",
  "question": "Which choice best describes the main purpose of the text?",
  "solution": "A) Wrong: no rebuilding is proposed. B) Wrong: beyond their height, the towers' architecture is not described. C) Wrong: no other region's towers appear. D) Correct: the text moves from the traditional watchtower reading to the revised granary interpretation, which rests on the new excavation evidence.",
  "choices": [
   "To argue that the towers should be rebuilt",
   "To describe the architecture of the towers in detail",
   "To compare the valley's towers with those of other regions",
   "To present a revised understanding of a structure's purpose based on new evidence"
  ],
  "answerIndex": 3
 },
 {
  "id": "cft-078",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Text Structure and Purpose",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "The profile of the chess champion proceeds almost entirely through small scenes: the champion at six, playing her grandfather on a porch; at twelve, sleeping with a tactics book under her pillow; at twenty, silent for an hour before a match, replaying old games in her head. No scene is dramatic on its own, but together they build a portrait of a mind formed by a single, lifelong concentration.",
  "question": "Which choice best describes the function of the text as a whole?",
  "solution": "A) Correct: the text analyzes the profile's method — small, individually undramatic scenes accumulating into a portrait of lifelong concentration. B) Wrong: although the scenes span the champion's life, the text's subject is the profile's technique, not the career itself. C) Wrong: the text takes no position on innate talent. D) Wrong: only one player is discussed.",
  "choices": [
   "It explains how a piece of writing achieves its portrait through accumulated small scenes.",
   "It narrates the chess champion's career as a straightforward chronology.",
   "It argues that chess champions are born rather than made.",
   "It compares two chess players' training methods."
  ],
  "answerIndex": 0
 },
 {
  "id": "cft-079",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Text Structure and Purpose",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "It is often said that desert animals must be active at night to escape the heat. The fennec fox fits this pattern, hunting after dark and sleeping in its burrow by day. The desert lark, however, sings and forages in the full midday sun, its pale feathers reflecting the light and its body tolerating temperatures that would kill most birds.",
  "question": "Which choice best describes the function of the third sentence?",
  "solution": "A) Wrong: the sentence introduces a contrasting animal, not a restatement. B) Wrong: unlike the fox, the lark does not fit the pattern of nighttime activity. C) Correct: marked by 'however,' the lark — active in the full midday sun — is an exception to the general pattern the fox illustrates. D) Wrong: the sentence gives a counterexample, not a cause.",
  "choices": [
   "It repeats the general claim in different words.",
   "It provides a second example supporting the general claim.",
   "It presents an exception to the general pattern described earlier.",
   "It explains the cause of the general pattern."
  ],
  "answerIndex": 2
 },
 {
  "id": "cft-080",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Text Structure and Purpose",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "The standard story of the printing press in the town of Aldgate credits one man, the printer Johann Reber, with transforming local life in a single decade. The records tell a slower story: Reber's press stood idle for long stretches, two rival printers opened and failed, and most townspeople encountered printed books only a generation later, through a lending library founded by Reber's daughter.",
  "question": "Which choice best describes the main purpose of the text?",
  "solution": "A) Wrong: the text shows change happening, just more slowly than the standard story claims. B) Correct: against the simple one-man, one-decade story, the records show a slower process involving rivals and Reber's daughter — the purpose is to qualify the simplified account. C) Wrong: the library is one detail, not the text's thesis. D) Wrong: the press's operation is never described.",
  "choices": [
   "To prove that printing had no effect on Aldgate",
   "To qualify a simplified account of change by showing it was slower and more widely shared",
   "To argue that lending libraries matter more than printing presses",
   "To describe the technical operation of a printing press"
  ],
  "answerIndex": 1
 },
 {
  "id": "cft-081",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Cross-Text Connections",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "Text 1\n\nRemoving the Miller Dam would restore the river's natural flow and allow fish to reach their old spawning grounds upstream. The dam, built in 1930, no longer generates power, and its reservoir has filled with silt.\n\nText 2\n\nThe case for removing the Miller Dam is strong: it produces no electricity, and fish passage matters. But the reservoir behind it now supports a wetland that migrating birds depend on, and any removal plan must replace that habitat, not simply drain it.",
  "question": "Based on the texts, the author of Text 2 would most likely respond to the proposal in Text 1 by",
  "solution": "A) Wrong: Text 2 explicitly grants that 'fish passage matters.' B) Wrong: Text 2 calls the case for removal strong; the dam's age is never raised. C) Correct: Text 2 accepts the main case ('The case for removing the Miller Dam is strong') while adding a condition — the wetland habitat behind the dam must be replaced, not simply drained. D) Wrong: the silt is asserted in Text 1 and not disputed in Text 2.",
  "choices": [
   "rejecting the idea that fish need access to spawning grounds.",
   "arguing that the dam should be kept because of its age.",
   "accepting the main case for removal while insisting that the habitat created by the reservoir be replaced.",
   "denying that the reservoir has filled with silt."
  ],
  "answerIndex": 2
 },
 {
  "id": "cft-082",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Cross-Text Connections",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "Text 1\n\nKeeping beehives on city rooftops helps pollinate community gardens, but a city block can support only a limited number of hives before the bees begin competing with wild pollinators for flowers.\n\nText 2\n\nRooftop hives are a genuine benefit to urban gardens. Problems arise only when enthusiasts crowd too many hives into one neighborhood, leaving too little forage for the native bees that were there first.",
  "question": "Based on the texts, both Text 1 and Text 2 support which of the following claims?",
  "solution": "A) Correct: both texts pair the same benefit with the same limit — Text 1 says hives help gardens but a block supports only a limited number before competition begins, and Text 2 calls hives a genuine benefit whose problems arise only when too many are crowded together. B) Wrong: neither text proposes a ban. C) Wrong: the pollinators' relative effectiveness is never compared. D) Wrong: neither text claims gardens depend entirely on hives.",
  "choices": [
   "Rooftop beekeeping is beneficial but can harm wild pollinators if hives become too concentrated.",
   "Cities should ban rooftop hives in residential neighborhoods.",
   "Wild pollinators are more effective pollinators than honeybees.",
   "Community gardens depend entirely on rooftop hives."
  ],
  "answerIndex": 0
 },
 {
  "id": "cft-083",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Cross-Text Connections",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "Text 1\n\nThe Grand Theater should be restored to its 1925 appearance in every detail. Its value lies in its authenticity: visitors should see the same gilded plaster and painted ceiling that audiences saw a century ago.\n\nText 2\n\nWhat matters about the Grand Theater is that it remains a working theater, not a museum piece. If modern lighting, wider seats, and a rebuilt stage are what keep audiences coming, those changes honor the building better than a frozen replica of 1925.",
  "question": "Based on the texts, the authors of Text 1 and Text 2 would most likely disagree about whether",
  "solution": "A) Wrong: both authors treat the theater as a historic building worth preserving. B) Correct: Text 1 insists on the 1925 appearance 'in every detail,' while Text 2 welcomes modern changes as honoring the building better than 'a frozen replica' — a direct disagreement over unchanged appearance. C) Wrong: audience enjoyment is assumed by both, not disputed. D) Wrong: the date appears only in Text 1 and is not contested.",
  "choices": [
   "the Grand Theater is an old building.",
   "preserving the theater requires keeping its original appearance unchanged.",
   "audiences enjoy attending performances at the theater.",
   "the theater was built in 1925."
  ],
  "answerIndex": 1
 },
 {
  "id": "cft-084",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Cross-Text Connections",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "Text 1\n\nThe fairest way to conserve water is to charge every household the same price per gallon. Equal prices treat everyone alike, and high users naturally pay more because they use more.\n\nText 2\n\nEqual prices are equal only on paper. A wealthy household barely notices a higher water bill, while a poor family may cut back on bathing and laundry. Conservation pricing works only if the first block of water — the amount every family needs — is kept cheap.",
  "question": "Based on the texts, the author of Text 2 would most likely respond to the claim in Text 1 that equal pricing is the fairest approach by",
  "solution": "A) Wrong: Text 2 never endorses Text 1's point about high users; its focus is the burden on poor families. B) Wrong: Text 2 proposes tiered pricing, not free water. C) Wrong: Text 2 accepts charging for water beyond the basic block. D) Correct: Text 2 answers the fairness claim directly — equal prices are 'equal only on paper' because they burden the poor more, so conservation pricing must keep the first, essential block cheap.",
  "choices": [
   "agreeing that high users should pay more in total.",
   "proposing that water be provided free to everyone.",
   "arguing that households should not be charged for water at all.",
   "arguing that identical prices burden poor households more, so the basic amount of water must stay cheap."
  ],
  "answerIndex": 3
 },
 {
  "id": "cft-085",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Cross-Text Connections",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "Text 1\n\nSeed libraries, where gardeners borrow seeds and return seeds from their harvest, keep heirloom varieties alive. Many of these varieties are no longer sold commercially, and without seed libraries they would disappear.\n\nText 2\n\nWhen our town's seed library opened, skeptics predicted gardeners would never return seeds. In fact, returns have exceeded withdrawals in two of the last three years, and the collection now holds varieties that local stores stopped carrying long ago.",
  "question": "Based on the texts, Text 2 does which of the following?",
  "solution": "A) Wrong: Text 2 confirms that stores stopped carrying the varieties rather than challenging their disappearance. B) Wrong: Text 2 describes the same seed-library method, not a different one. C) Correct: Text 2 reports an actual library whose collection holds varieties stores no longer carry — a concrete instance of the preservation Text 1 describes. D) Wrong: ending commercial sales is never proposed.",
  "choices": [
   "It challenges the claim that heirloom varieties are disappearing.",
   "It proposes a different method of preserving seed varieties.",
   "It offers a real-world example consistent with the value Text 1 describes.",
   "It argues that commercial seed sales should be ended."
  ],
  "answerIndex": 2
 },
 {
  "id": "cft-086",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Cross-Text Connections",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "Text 1\n\nAutomated tutoring programs can give every student immediate feedback on practice problems, something no teacher with thirty students can do. Schools should adopt them for daily practice.\n\nText 2\n\nImmediate feedback is valuable, and tutoring programs supply it well. But feedback on practice problems is the easiest part of teaching; a program cannot notice the discouraged student who has stopped trying, and schools that adopt the software as a substitute for teachers will lose exactly that.",
  "question": "Based on the texts, the author of Text 2 would most likely view the proposal in Text 1 as",
  "solution": "A) Correct: Text 2 grants that the programs 'supply it well' but warns against adopting the software 'as a substitute for teachers' — useful for feedback, not a replacement. B) Wrong: Text 2 praises the feedback rather than calling it poor. C) Wrong: Text 2 never disputes the point about teachers' limits. D) Wrong: Text 2 calls feedback on practice valuable, not unimportant.",
  "choices": [
   "useful for practice feedback, provided the programs are not treated as replacements for teachers.",
   "a plan that should be rejected because the programs give poor feedback.",
   "wrong in claiming that teachers cannot give immediate feedback to thirty students.",
   "unimportant, because practice problems do not help students learn."
  ],
  "answerIndex": 0
 },
 {
  "id": "cft-087",
  "section": "Reading & Writing",
  "domain": "Craft and Structure",
  "topic": "Cross-Text Connections",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "Text 1\n\nReintroducing wolves to the northern range has changed more than the deer population. With deer grazing less boldly near rivers, willows have recovered along the banks, and beavers have returned to dam the streams.\n\nText 2\n\nEcologists once judged a predator's importance by how many prey it killed. The northern range shows the inadequacy of that measure: the wolves' greatest effects there have come not from the deer they take but from the deer they frighten, whose changed grazing has let streamside plants recover.",
  "question": "Based on the texts, both Text 1 and Text 2 support which of the following claims?",
  "solution": "A) Wrong: neither text makes a general reintroduction recommendation. B) Wrong: Text 1 presents beavers as returning because of the changes, not as the main cause of the willows' recovery. C) Wrong: deer remain present in both texts — grazing differently, not eliminated. D) Correct: Text 1 says the wolves changed 'more than the deer population' through grazing behavior and recovering willows, and Text 2 says the greatest effects came from the deer the wolves frighten rather than the deer they take.",
  "choices": [
   "Wolves should be reintroduced in every region where they once lived.",
   "Beavers are the main cause of the willows' recovery.",
   "The deer population in the northern range has been eliminated.",
   "The wolves' influence extends beyond the prey they kill, reshaping deer behavior and streamside vegetation."
  ],
  "answerIndex": 3
 },
 {
  "id": "eoi-001",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Transitions",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "The community center now offers evening art classes for adults. ______ it hosts weekend workshops for children on Saturdays.",
  "question": "Which choice most logically completes the text?",
  "solution": "The second sentence adds another offering in the same direction as the first; nothing reverses or results from anything. A) Wrong: the workshops continue the list of offerings rather than opposing the first sentence. B) Wrong: the workshops are not presented as an effect of the evening classes. C) Correct: it links two parallel additions to the center's schedule; the workshops are a further offering, not a contrast or a result. D) Wrong: the workshops are a separate offering, not an instance of the art classes.",
  "choices": [
   "However,",
   "As a result,",
   "In addition,",
   "For example,"
  ],
  "answerIndex": 2
 },
 {
  "id": "eoi-002",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Transitions",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "The first model of the phone had a small screen and a short battery life. ______ the newest model has one of the largest screens available and lasts two days on a charge.",
  "question": "Which choice most logically completes the text?",
  "solution": "The two sentences describe opposite features of the two models. A) Correct: the newest model is the opposite of the first in both named respects, so a contrast marker is required. B) Wrong: the second sentence does not add a similar feature; it reverses the first model's features. C) Wrong: the newest model is not an example of the first model. D) Wrong: the new model's features are not an effect of the old model's features.",
  "choices": [
   "In contrast,",
   "In addition,",
   "For example,",
   "As a result,"
  ],
  "answerIndex": 0
 },
 {
  "id": "eoi-003",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Transitions",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "The public library installed solar panels on its roof last spring. ______ its monthly electricity bills have fallen sharply.",
  "question": "Which choice most logically completes the text?",
  "solution": "The second sentence states the consequence of the action in the first. A) Wrong: lower bills follow naturally from the panels; nothing is opposed. B) Wrong: the bills are a consequence of the panels, not a second unrelated item. C) Wrong: the lower bills are not an example of the installation. D) Correct: the fallen bills are the effect of installing the panels, so a result marker fits.",
  "choices": [
   "However,",
   "In addition,",
   "For example,",
   "As a result,"
  ],
  "answerIndex": 3
 },
 {
  "id": "eoi-004",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Transitions",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "To bake the bread, first mix the flour, water, and yeast in a large bowl. ______ knead the dough on a floured surface for ten minutes.",
  "question": "Which choice most logically completes the text?",
  "solution": "The text gives steps in order, and the blank introduces the following step. A) Wrong: kneading does not oppose mixing; it comes after it. B) Correct: the kneading is the step that follows mixing, so a sequence marker is needed. C) Wrong: kneading is the next step, not an example of mixing. D) Wrong: the procedure is not finished; a middle step is being introduced.",
  "choices": [
   "However,",
   "Next,",
   "For example,",
   "In conclusion,"
  ],
  "answerIndex": 1
 },
 {
  "id": "eoi-005",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Transitions",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "Many kinds of fruit grow well in the valley's mild climate. ______ orchards there produce peaches, plums, and apricots each summer.",
  "question": "Which choice most logically completes the text?",
  "solution": "The second sentence gives concrete cases of the general claim in the first. A) Wrong: the orchards illustrate the claim rather than opposing it. B) Correct: the peaches, plums, and apricots are specific instances of the fruit that grows well. C) Wrong: the fruit production is not caused by the general statement. D) Wrong: the second sentence adds new specifics rather than restating the claim in different words.",
  "choices": [
   "In contrast,",
   "For example,",
   "As a result,",
   "In other words,"
  ],
  "answerIndex": 1
 },
 {
  "id": "eoi-006",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Transitions",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "This summer, the town repaved the roads near the elementary school. ______ it repainted the crosswalks and added new crossing signs.",
  "question": "Which choice most logically completes the text?",
  "solution": "Both sentences list improvements the town made near the school. A) Wrong: the repainting does not run against any expectation set by the repaving. B) Wrong: repainting crosswalks is a new action, not a restatement of repaving roads. C) Wrong: nothing is being summed up; another action is being added. D) Correct: the repainting is a second, related improvement added to the first.",
  "choices": [
   "Nevertheless,",
   "In other words,",
   "In conclusion,",
   "Moreover,"
  ],
  "answerIndex": 3
 },
 {
  "id": "eoi-007",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Transitions",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "Summer afternoons in the desert are extremely hot, often above 110 degrees. ______ the nights can be surprisingly cold.",
  "question": "Which choice most logically completes the text?",
  "solution": "The second sentence reverses the temperature picture given in the first. A) Correct: cold nights stand in direct contrast to extremely hot afternoons. B) Wrong: cold nights are the opposite of hot afternoons, not a likeness. C) Wrong: the cold nights are not an effect of the hot afternoons. D) Wrong: the sentence does not add another hot-weather fact; it contrasts with the first.",
  "choices": [
   "However,",
   "Similarly,",
   "As a result,",
   "In addition,"
  ],
  "answerIndex": 0
 },
 {
  "id": "eoi-008",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Transitions",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "During the spring floods, the dam released extra water in controlled amounts. ______ the river stayed within its banks all season.",
  "question": "Which choice most logically completes the text?",
  "solution": "The second sentence states the outcome produced by the action in the first. A) Wrong: the outcome agrees with the purpose of the releases; nothing is opposed. B) Wrong: the river's behavior is the result of the releases, not an example of them. C) Correct: the river staying in its banks is the direct consequence of the controlled releases. D) Wrong: the point is causation, not two events happening at the same time.",
  "choices": [
   "In contrast,",
   "For instance,",
   "Consequently,",
   "Meanwhile,"
  ],
  "answerIndex": 2
 },
 {
  "id": "eoi-009",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Transitions",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "The tour group gathered in the museum lobby at nine o'clock. ______ the guide led them into the first gallery.",
  "question": "Which choice most logically completes the text?",
  "solution": "The sentences narrate two steps of a visit in time order. A) Wrong: entering the gallery does not oppose gathering in the lobby. B) Wrong: entering the gallery is the next event, not an example of gathering. C) Wrong: the visit is just beginning; nothing is being concluded. D) Correct: the move into the gallery is the step that follows gathering in the lobby.",
  "choices": [
   "However,",
   "For example,",
   "In conclusion,",
   "Then,"
  ],
  "answerIndex": 3
 },
 {
  "id": "eoi-010",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Transitions",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "Some familiar metals are magnetic. ______ iron and nickel are both strongly attracted to magnets.",
  "question": "Which choice most logically completes the text?",
  "solution": "The second sentence names instances of the general category in the first. A) Wrong: iron and nickel confirm the claim rather than opposing it. B) Correct: iron and nickel are specific examples of the magnetic metals just mentioned. C) Wrong: the metals' magnetism is not an effect of the general statement. D) Wrong: the sentence does not add a separate point; it illustrates the first one.",
  "choices": [
   "However,",
   "For instance,",
   "Consequently,",
   "In addition,"
  ],
  "answerIndex": 1
 },
 {
  "id": "eoi-011",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Transitions",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "______ the cold wind blowing off the lake, the runners completed the entire marathon.",
  "question": "Which choice most logically completes the text?",
  "solution": "Finishing the race happened in the face of an obstacle, which calls for a concession phrase. A) Wrong: the wind did not cause the runners to finish; it made finishing harder. B) Wrong: the wind is not another item on a list alongside the marathon. C) Correct: the marathon was completed in spite of the wind; the wind hindered rather than caused the achievement. D) Wrong: the completion is not an effect produced by the wind.",
  "choices": [
   "Because of",
   "In addition to",
   "Despite",
   "As a result of"
  ],
  "answerIndex": 2
 },
 {
  "id": "eoi-012",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Transitions",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "The violin makes sound when a bow is drawn across its strings. ______ the cello is played by drawing a bow across strings.",
  "question": "Which choice most logically completes the text?",
  "solution": "The second sentence describes the same method of playing as the first. A) Correct: the cello is played in the same way as the violin, so a similarity marker fits. B) Wrong: the two instruments are played alike, not differently. C) Wrong: the cello's playing method is not an effect of the violin's. D) Wrong: the cello is a parallel case, not an instance of the violin.",
  "choices": [
   "Similarly,",
   "In contrast,",
   "As a result,",
   "For example,"
  ],
  "answerIndex": 0
 },
 {
  "id": "eoi-013",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Transitions",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "The new bus route stops at the hospital and the central market. ______ it stops at the train station and the university.",
  "question": "Which choice most logically completes the text?",
  "solution": "The second sentence extends the list of stops begun in the first. A) Correct: the train station and university are further stops added to the list. B) Wrong: the extra stops do not run against any expectation. C) Wrong: the new stops are additional list items, not examples of the first two stops. D) Wrong: the route description is being continued, not summed up.",
  "choices": [
   "Additionally,",
   "Nevertheless,",
   "For instance,",
   "In conclusion,"
  ],
  "answerIndex": 0
 },
 {
  "id": "eoi-014",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Transitions",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "The first draft of the essay was disorganized and hard to follow. ______ the final draft was clear and well structured.",
  "question": "Which choice most logically completes the text?",
  "solution": "The two drafts are described in opposite terms. A) Wrong: the final draft does not add a similar quality; it reverses the first draft's quality. B) Wrong: the final draft's clarity is not presented as an effect of the first draft. C) Correct: the final draft's clarity is the opposite of the first draft's disorganization. D) Wrong: clear and well structured is the opposite of disorganized, not a likeness.",
  "choices": [
   "In addition,",
   "As a result,",
   "By contrast,",
   "Similarly,"
  ],
  "answerIndex": 2
 },
 {
  "id": "eoi-015",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Transitions",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "The factory switched to a four-day workweek last year. ______ employee turnover fell within twelve months.",
  "question": "Which choice most logically completes the text?",
  "solution": "The second sentence reports the consequence that followed the change in the first. A) Wrong: falling turnover follows from the change; it does not oppose it. B) Correct: the drop in turnover is presented as the effect of the schedule change. C) Wrong: the turnover figure is an outcome, not an example of the workweek. D) Wrong: the point is that one change produced the other, not that they merely coincided.",
  "choices": [
   "In contrast,",
   "Therefore,",
   "For example,",
   "Meanwhile,"
  ],
  "answerIndex": 1
 },
 {
  "id": "eoi-016",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Transitions",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "To assemble the model, first attach the wheels to the base. ______ attach the handle to the top piece.",
  "question": "Which choice most logically completes the text?",
  "solution": "The instructions proceed step by step, and the blank introduces the following step. A) Wrong: attaching the handle does not oppose attaching the wheels. B) Wrong: a new step is given, not a rewording of the first step. C) Wrong: the assembly is not finished; another step remains. D) Correct: attaching the handle is the step that follows attaching the wheels.",
  "choices": [
   "However,",
   "In other words,",
   "In conclusion,",
   "Next,"
  ],
  "answerIndex": 3
 },
 {
  "id": "eoi-017",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Rhetorical Synthesis",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "While researching a topic, a student has taken the following notes:\n\n• Dr. Lena Ortiz, an ecologist, studied how the landscape around beehives affects honey production.\n• Ortiz monitored 40 honeybee colonies over two years.\n• Colonies kept near wildflower fields produced an average of 18 kilograms of honey per season.\n• Colonies kept near cornfields produced an average of 9 kilograms of honey per season.",
  "question": "The student wants to emphasize a difference between the honey production of the two groups of colonies. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
  "solution": "The goal requires both groups' results in a single comparison. A) Wrong: it reports only the wildflower colonies' yield, so no difference between the two groups is shown. B) Wrong: it introduces the study and the researcher but never compares the two groups' results. C) Correct: it sets the two groups' yields side by side (18 kilograms against 9), making the difference explicit. D) Wrong: the notes give no blooming-time explanation; that cause is invented.",
  "choices": [
   "Colonies kept near wildflower fields produced an average of 18 kilograms of honey per season.",
   "Dr. Lena Ortiz, an ecologist, monitored 40 honeybee colonies over two years to study how landscape affects honey production.",
   "Colonies kept near wildflower fields produced an average of 18 kilograms of honey per season, while colonies kept near cornfields produced only 9 kilograms.",
   "Colonies near wildflower fields produced more honey because wildflowers bloom earlier in the season than corn does."
  ],
  "answerIndex": 2
 },
 {
  "id": "eoi-018",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Rhetorical Synthesis",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "While researching a topic, a student has taken the following notes:\n\n• Marta Ruiz is a potter based in Santa Fe, New Mexico.\n• Ruiz is known for hand-built clay vessels painted with natural pigments.\n• Her vessels are displayed at the Desert Arts Museum.\n• Ruiz teaches weekend pottery classes for beginners.",
  "question": "The student wants to introduce Marta Ruiz to an audience that is unfamiliar with her. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
  "solution": "An introduction must say who the person is and what she is known for. A) Correct: it names her craft and location and the work she is known for, which is what an unfamiliar audience needs. B) Wrong: a class detail does not introduce her or say what she is known for. C) Wrong: it never says what kind of artist she is or what she makes, omitting the work she is known for. D) Wrong: the notes mention no awards.",
  "choices": [
   "Marta Ruiz is a potter based in Santa Fe, New Mexico, who is known for hand-built clay vessels painted with natural pigments.",
   "Marta Ruiz teaches weekend pottery classes for beginners in Santa Fe.",
   "Marta Ruiz is an artist whose vessels are displayed at the Desert Arts Museum.",
   "Marta Ruiz is a potter who has won three national ceramics awards for her vessels."
  ],
  "answerIndex": 0
 },
 {
  "id": "eoi-019",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Rhetorical Synthesis",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "While researching a topic, a student has taken the following notes:\n\n• The Northside Library lends musical instruments to its members.\n• The Southside Library lends musical instruments to its members.\n• At both libraries, instruments may be borrowed for three weeks at a time.\n• The Northside Library has a collection of 80,000 books.\n• The Southside Library has a collection of 45,000 books.",
  "question": "The student wants to emphasize a similarity between the Northside Library and the Southside Library. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
  "solution": "The goal requires a feature the two libraries have in common. A) Wrong: it emphasizes a difference between the libraries, the opposite of the goal. B) Wrong: it covers only one library and omits the shared loan period, so no similarity between the two is established. C) Wrong: the notes say nothing about when or how the program began. D) Correct: it names both libraries and the instrument-lending program, including the loan period, that they share.",
  "choices": [
   "The Northside Library, with 80,000 books, has a much larger collection than the Southside Library, which has 45,000 books.",
   "The Northside Library lends musical instruments to its members.",
   "Both libraries lend musical instruments, a program the two libraries launched together in 2015.",
   "Both the Northside Library and the Southside Library lend musical instruments to their members for three weeks at a time."
  ],
  "answerIndex": 3
 },
 {
  "id": "eoi-020",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Rhetorical Synthesis",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "While researching a topic, a student has taken the following notes:\n\n• Researchers tagged 300 monarch butterflies in southern Canada in the fall.\n• Several of the tagged butterflies were later recovered in the mountains of central Mexico.\n• The recovery sites are about 3,000 kilometers from the tagging sites.\n• The researchers recorded the wing patterns of each butterfly before release.",
  "question": "The student wants to present the study's main finding. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
  "solution": "A finding states what the study discovered, not how it was carried out. A) Wrong: it omits the distance traveled, a central part of the finding. B) Correct: it states what the tagging showed: the butterflies traveled roughly 3,000 kilometers to central Mexico. C) Wrong: it recounts the procedure, not the finding. D) Wrong: the notes do not state the butterflies' reasons or breeding behavior.",
  "choices": [
   "Several butterflies tagged in southern Canada were later recovered in the mountains of central Mexico.",
   "The study found that monarch butterflies tagged in southern Canada traveled about 3,000 kilometers to the mountains of central Mexico.",
   "Researchers tagged 300 monarch butterflies in southern Canada in the fall and recorded the wing patterns of each one.",
   "The butterflies traveled to Mexico in order to escape the Canadian winter and breed there."
  ],
  "answerIndex": 1
 },
 {
  "id": "eoi-021",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Rhetorical Synthesis",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "While researching a topic, a student has taken the following notes:\n\n• The Greenfield farmers market was held in a parking lot for ten years.\n• In 2022, the market moved to the town's central plaza.\n• The move was necessary because the parking lot was being repaved.\n• After the move, the number of vendors grew from 20 to 35.",
  "question": "The student wants to emphasize the reason the farmers market moved. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
  "solution": "The goal is the cause of the move, so the repaving must appear. A) Wrong: it states the move but omits the repaving that made the move necessary. B) Correct: it gives the move and the repaving that made the move necessary. C) Wrong: it emphasizes a result of the move, not the reason for it. D) Wrong: the notes never mention tourists; the only stated reason is the repaving.",
  "choices": [
   "In 2022, the Greenfield farmers market moved from a parking lot to the town's central plaza.",
   "The Greenfield farmers market moved to the town's central plaza in 2022 because its longtime parking-lot site was being repaved.",
   "After the move to the central plaza, the number of vendors at the Greenfield farmers market grew from 20 to 35.",
   "The market moved to the central plaza to attract more tourists to Greenfield."
  ],
  "answerIndex": 1
 },
 {
  "id": "eoi-022",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Rhetorical Synthesis",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "While researching a topic, a student has taken the following notes:\n\n• Vertical farming is a method of growing crops in stacked layers inside a building.\n• Vertical farms use LED lamps instead of sunlight.\n• The method uses far less water than traditional field farming.\n• The first vertical farm in the city of Norwood opened in 2021.",
  "question": "The student wants to introduce the topic of vertical farming to readers who are unfamiliar with it. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
  "solution": "An introduction for unfamiliar readers must say what the thing is. A) Wrong: it gives one benefit but never explains what vertical farming is. B) Wrong: a single local opening does not introduce the method itself. C) Wrong: the notes make no such ranking or comparison. D) Correct: it defines the method and names its defining feature, which is what an introduction requires.",
  "choices": [
   "Vertical farming uses far less water than traditional field farming.",
   "The first vertical farm in the city of Norwood opened in 2021.",
   "Vertical farming is the most important advance in agriculture of the past century.",
   "Vertical farming is a method of growing crops in stacked layers inside a building, using LED lamps instead of sunlight."
  ],
  "answerIndex": 3
 },
 {
  "id": "eoi-023",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Rhetorical Synthesis",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "While researching a topic, a student has taken the following notes:\n\n• In 2010, the town of Millbrook recycled 22 percent of its household waste.\n• Millbrook began curbside recycling pickup in 2014.\n• By 2020, the town was recycling 47 percent of its household waste.",
  "question": "The student wants to emphasize how Millbrook's recycling rate changed over time. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
  "solution": "A change over time needs both the earlier and the later figures. A) Correct: it gives the starting and ending rates with their years, so the change is explicit. B) Wrong: with only the final figure, no change over time is shown. C) Wrong: it names a program milestone but gives no rates, so no change is emphasized. D) Wrong: the notes contain no national figure to compare with.",
  "choices": [
   "Millbrook's recycling rate rose from 22 percent of household waste in 2010 to 47 percent by 2020.",
   "By 2020, Millbrook was recycling 47 percent of its household waste.",
   "Millbrook began curbside recycling pickup in 2014.",
   "Millbrook's recycling rate rose to 47 percent, higher than the national average."
  ],
  "answerIndex": 0
 },
 {
  "id": "eoi-024",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Rhetorical Synthesis",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "While researching a topic, a student has taken the following notes:\n\n• The Northgate Pool opens at 6 a.m. and closes at 8 p.m.\n• The Eastside Pool opens at 10 a.m. and closes at 6 p.m.\n• Both pools offer swim lessons for children.\n• The Eastside Pool has a diving board; the Northgate Pool does not.",
  "question": "The student wants to emphasize a difference between the two pools' hours. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
  "solution": "The goal is specifically about the pools' hours. A) Wrong: it gives only one pool's hours, so no difference appears. B) Wrong: it points out something the pools share, not a difference in their hours. C) Correct: it contrasts the two opening times directly, which is the difference in hours the goal asks for. D) Wrong: the notes say nothing about swim teams or reasons for the hours.",
  "choices": [
   "The Northgate Pool is open from 6 a.m. to 8 p.m. each day.",
   "Both the Northgate Pool and the Eastside Pool offer swim lessons for children.",
   "The Northgate Pool opens at 6 a.m., four hours earlier than the Eastside Pool, which opens at 10 a.m.",
   "The Northgate Pool opens earlier because it serves competitive swim teams."
  ],
  "answerIndex": 2
 },
 {
  "id": "eoi-025",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Rhetorical Synthesis",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "While researching a topic, a student has taken the following notes:\n\n• Tomas Vega is a marine biologist at the Coastal Institute.\n• Vega developed a method for replanting seagrass in damaged bays.\n• Seagrass meadows provide habitat for young fish and crabs.\n• Vega's replanting method has been used in three bays so far.",
  "question": "The student wants to introduce Tomas Vega to an audience that is unfamiliar with him. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
  "solution": "An introduction must identify the person and what he does. A) Wrong: it describes seagrass, not Vega; a reader still learns nothing about him. B) Wrong: it never says he is a marine biologist or that he developed the method. C) Wrong: the notes mention no award. D) Correct: it gives his field, his workplace, and his contribution, a complete introduction.",
  "choices": [
   "Seagrass meadows provide habitat for young fish and crabs.",
   "Tomas Vega works at the Coastal Institute, where his replanting method has been used in three bays.",
   "Tomas Vega is a marine biologist who won the Coastal Institute's Researcher of the Year award.",
   "Tomas Vega is a marine biologist at the Coastal Institute who developed a method for replanting seagrass in damaged bays."
  ],
  "answerIndex": 3
 },
 {
  "id": "eoi-026",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Rhetorical Synthesis",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "While researching a topic, a student has taken the following notes:\n\n• A school study followed 200 students for one semester.\n• Students who ate breakfast before school averaged 84 on a math test.\n• Students who skipped breakfast averaged 76 on the same math test.\n• The study was conducted at a middle school in Ohio.",
  "question": "The student wants to present the study's finding about breakfast and math scores. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
  "solution": "The finding is the comparison between the two groups' scores. A) Wrong: without the comparison group's score, the finding's contrast disappears. B) Correct: it reports both groups' averages, which together are the finding. C) Wrong: it describes the study's setup rather than its finding. D) Wrong: the notes report scores only; they offer no explanation involving memory.",
  "choices": [
   "Students who ate breakfast before school averaged 84 on a math test.",
   "The study found that students who ate breakfast averaged 84 on a math test, while students who skipped breakfast averaged 76.",
   "The study followed 200 middle school students in Ohio for one semester.",
   "Students who ate breakfast scored higher because breakfast improves memory."
  ],
  "answerIndex": 1
 },
 {
  "id": "eoi-027",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Rhetorical Synthesis",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "While researching a topic, a student has taken the following notes:\n\n• Sourdough bread is made with a starter, a mixture of flour and water containing wild yeast.\n• The starter must ferment for several days before it is used.\n• After the starter is mixed into the dough, the dough rises for several hours.\n• The risen dough is then baked in a hot oven.",
  "question": "The student wants to describe the main steps in making sourdough bread. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
  "solution": "A process description needs the main steps, not just one ingredient or fact. A) Wrong: it covers only the first ingredient and skips the fermenting, rising, and baking steps. B) Wrong: it explains one ingredient's nature, not the sequence of steps. C) Correct: it walks through the fermenting, rising, and baking steps in order. D) Wrong: the notes describe the process only; they say nothing about its history.",
  "choices": [
   "Sourdough bread is made with a starter, a mixture of flour and water containing wild yeast.",
   "Sourdough's starter contains wild yeast rather than commercial yeast.",
   "To make sourdough, a starter of flour and water is fermented for several days, mixed into dough that rises for hours, and then baked in a hot oven.",
   "Sourdough bread was first baked in ancient Egypt thousands of years ago."
  ],
  "answerIndex": 2
 },
 {
  "id": "eoi-028",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Rhetorical Synthesis",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "While researching a topic, a student has taken the following notes:\n\n• The city transit agency bought twelve electric buses in 2023.\n• Electric buses are quieter than diesel buses.\n• According to the agency's director, the buses' main advantage is their lower maintenance cost.\n• The buses are charged overnight at the depot.",
  "question": "The student wants to emphasize the main advantage of the city's electric buses, according to the transit agency's director. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
  "solution": "The goal is tied to the director's stated judgment, so that judgment must appear. A) Correct: it repeats the exact advantage the director named as the main one. B) Wrong: quietness is a benefit, but the director named maintenance cost as the main advantage. C) Wrong: it gives purchase and charging details but never mentions any advantage. D) Wrong: the notes quote the director only on maintenance cost, not on payback time.",
  "choices": [
   "According to the transit agency's director, the main advantage of the electric buses is their lower maintenance cost.",
   "Electric buses are quieter than diesel buses.",
   "The city transit agency bought twelve electric buses in 2023 and charges them overnight at the depot.",
   "The director said the electric buses will pay for themselves within two years."
  ],
  "answerIndex": 0
 },
 {
  "id": "eoi-029",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Rhetorical Synthesis",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "While researching a topic, a student has taken the following notes:\n\n• The Harbor Lights Festival is an annual event held in the town of Brindle.\n• The festival's main event is a parade of boats decorated with lights.\n• The first Harbor Lights Festival was held in 1998.\n• The festival now draws about 10,000 visitors each year.",
  "question": "The student wants to introduce the Harbor Lights Festival to readers who have never heard of it. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
  "solution": "An introduction must identify the event and its signature feature. A) Correct: it says what and where the festival is and what its main event is. B) Wrong: attendance alone does not tell an unfamiliar reader what the festival is. C) Wrong: it gives the festival's age but not what the festival is or features. D) Wrong: the notes make no size comparison with other festivals.",
  "choices": [
   "The Harbor Lights Festival is an annual event in the town of Brindle whose main event is a parade of boats decorated with lights.",
   "The Harbor Lights Festival now draws about 10,000 visitors each year.",
   "The first Harbor Lights Festival was held in 1998 in the town of Brindle.",
   "The Harbor Lights Festival is the largest boat festival on the East Coast."
  ],
  "answerIndex": 0
 },
 {
  "id": "eoi-030",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Rhetorical Synthesis",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "While researching a topic, a student has taken the following notes:\n\n• The TrailFlask bottle keeps drinks cold for 12 hours.\n• The CampCup bottle keeps drinks cold for 5 hours.\n• Both bottles are made of stainless steel.\n• The TrailFlask costs $30, and the CampCup costs $18.",
  "question": "The student wants to emphasize a difference in how long the two bottles keep drinks cold. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
  "solution": "The goal is specifically about cooling time, not price or material. A) Wrong: only one bottle's performance is given, so no difference is emphasized. B) Wrong: it contrasts the prices, not the cooling times the goal asks about. C) Correct: it contrasts the two cooling times directly, which is the difference requested. D) Wrong: the notes give no explanation based on wall thickness.",
  "choices": [
   "The TrailFlask bottle, made of stainless steel, keeps drinks cold for 12 hours.",
   "The TrailFlask costs $30, while the CampCup costs $18.",
   "The TrailFlask keeps drinks cold for 12 hours, while the CampCup keeps them cold for only 5 hours.",
   "The TrailFlask keeps drinks cold longer because its walls are thicker."
  ],
  "answerIndex": 2
 },
 {
  "id": "eoi-031",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Rhetorical Synthesis",
  "difficulty": 1,
  "level": 1,
  "type": "mc",
  "stimulus": "While researching a topic, a student has taken the following notes:\n\n• Researchers recorded the songs of sparrows in city parks and in rural forests.\n• The city sparrows sang at a higher pitch than the rural sparrows.\n• The researchers measured the pitch of more than 400 songs.\n• Both groups of sparrows belonged to the same species.",
  "question": "The student wants to present the researchers' finding. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
  "solution": "The finding is the difference the measurements showed. A) Wrong: it reports the scale of the measurements but not what they showed. B) Correct: it states the pitch difference the recordings revealed. C) Wrong: it describes the study settings, not the finding. D) Wrong: the notes do not mention traffic or any reason for the pitch difference.",
  "choices": [
   "The researchers measured the pitch of more than 400 sparrow songs from the same species.",
   "The researchers found that sparrows in city parks sang at a higher pitch than sparrows in rural forests.",
   "The sparrows in the study were recorded in two settings: city parks and rural forests.",
   "City sparrows sang at a higher pitch in order to be heard over traffic noise."
  ],
  "answerIndex": 1
 },
 {
  "id": "eoi-032",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Transitions",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "The mayor gave the transit plan her full support at Tuesday's hearing. ______ several council members remained unconvinced and asked for another study.",
  "question": "Which choice most logically completes the text?",
  "solution": "The second sentence holds against the expectation created by the first. A) Wrong: the members' doubts are not an effect of the mayor's support. B) Wrong: the second sentence adds a new reaction, not a rewording of the first. C) Wrong: the council members are not an instance of the mayor's support. D) Correct: the members' doubts persist despite the mayor's support, a concession relation.",
  "choices": [
   "As a result,",
   "In other words,",
   "For example,",
   "Even so,"
  ],
  "answerIndex": 3
 },
 {
  "id": "eoi-033",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Transitions",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "By all accounts, the ancient city was abandoned within a single generation. ______ its entire population left in a remarkably short span of time.",
  "question": "Which choice most logically completes the text?",
  "solution": "The second sentence says the same thing as the first in different words. A) Wrong: the population's departure is not an example of the abandonment; it is the abandonment restated. B) Wrong: nothing in the second sentence opposes the first. C) Correct: the second sentence restates the abandonment in plainer terms without adding a new event. D) Wrong: the departure is not a consequence of the abandonment; it is the same event.",
  "choices": [
   "For example,",
   "However,",
   "In other words,",
   "As a result,"
  ],
  "answerIndex": 2
 },
 {
  "id": "eoi-034",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Transitions",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "______ the heavy snowfall overnight, the airport canceled all of its morning flights.",
  "question": "Which choice most logically completes the text?",
  "solution": "The blank introduces the reason for the cancellations that follow. A) Correct: the snowfall is the cause of the cancellations. B) Wrong: the flights were canceled because of the snow, not in spite of it. C) Wrong: the snowfall is not an extra item listed beside the cancellations. D) Wrong: the snowfall caused the cancellations; it did not result from them.",
  "choices": [
   "Because of",
   "Despite",
   "In addition to",
   "As a result of"
  ],
  "answerIndex": 0
 },
 {
  "id": "eoi-035",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Transitions",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "The scholarship committee reviewed more than two hundred applications during January. ______ it announced the five winners at a ceremony in March.",
  "question": "Which choice most logically completes the text?",
  "solution": "The second event follows the first in time. A) Wrong: announcing winners does not oppose reviewing applications; it follows from the process. B) Wrong: the announcement is the next event, not an instance of the review. C) Wrong: the announcement is a new event, not a rewording of the review. D) Correct: the announcement came after the review, a later step in time.",
  "choices": [
   "In contrast,",
   "For example,",
   "In other words,",
   "Subsequently,"
  ],
  "answerIndex": 3
 },
 {
  "id": "eoi-036",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Transitions",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "The heart acts as a pump, pushing blood through the circulatory system with each beat. ______ the diaphragm acts as a pump for air, expanding and contracting to move air in and out of the lungs.",
  "question": "Which choice most logically completes the text?",
  "solution": "The second sentence describes a second organ doing the same kind of work as the first. A) Wrong: the diaphragm is likened to the heart, not set against it. B) Correct: the diaphragm's pumping action is presented as parallel to the heart's. C) Wrong: the diaphragm's action is not caused by the heart's action. D) Wrong: nothing in the second sentence runs against an expectation.",
  "choices": [
   "In contrast,",
   "Similarly,",
   "As a result,",
   "Nevertheless,"
  ],
  "answerIndex": 1
 },
 {
  "id": "eoi-037",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Transitions",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "The trail is well marked, the shelters along it are sturdy, and drinking water is available at regular intervals. ______ the route is a good choice for first-time backpackers.",
  "question": "Which choice most logically completes the text?",
  "solution": "After the list of favorable features, the text sums them up in a judgment. A) Wrong: the judgment is not an instance of the listed features; it follows from all of them. B) Correct: the final sentence draws a conclusion from the three favorable facts listed before it. C) Wrong: no second simultaneous event is introduced. D) Wrong: the judgment agrees with the features; it does not oppose them.",
  "choices": [
   "For example,",
   "Overall,",
   "Meanwhile,",
   "In contrast,"
  ],
  "answerIndex": 1
 },
 {
  "id": "eoi-038",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Transitions",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "The novel's first half unfolds slowly, lingering on small domestic details. ______ the second half races through a series of dramatic reversals.",
  "question": "Which choice most logically completes the text?",
  "solution": "The two halves of the novel are described in opposite terms. A) Wrong: racing is the opposite of unfolding slowly, not a likeness. B) Wrong: the point is the opposition between the halves, not another similar trait. C) Wrong: the second half's pace is not an effect of the first half's pace. D) Correct: the racing second half is set against the slow first half.",
  "choices": [
   "Similarly,",
   "In addition,",
   "As a result,",
   "In contrast,"
  ],
  "answerIndex": 3
 },
 {
  "id": "eoi-039",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Transitions",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "The latest software update fixes several security flaws that were found last month. ______ it introduces a redesigned home screen.",
  "question": "Which choice most logically completes the text?",
  "solution": "Both sentences list changes the update makes. A) Correct: the redesigned screen is a second change added to the security fixes. B) Wrong: the new screen does not run against any expectation set by the fixes. C) Wrong: the home screen is a separate change, not an instance of a security fix. D) Wrong: nothing is being summed up; another change is being added.",
  "choices": [
   "Moreover,",
   "Nevertheless,",
   "For instance,",
   "In conclusion,"
  ],
  "answerIndex": 0
 },
 {
  "id": "eoi-040",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Transitions",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "Several of the region's industries depend heavily on the river for their operations. ______ the paper mills along its banks use river water in nearly every stage of production.",
  "question": "Which choice most logically completes the text?",
  "solution": "The second sentence narrows the general claim to one specific industry. A) Wrong: the mills add a specific case rather than rewording the general claim. B) Wrong: the mills support the claim; they do not oppose it. C) Correct: the paper mills are singled out as a specific case of the industries that depend on the river. D) Wrong: the mills' water use is not an effect of the general claim.",
  "choices": [
   "In other words,",
   "However,",
   "In particular,",
   "Consequently,"
  ],
  "answerIndex": 2
 },
 {
  "id": "eoi-041",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Transitions",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "The orchestra's funding was cut by a third this year. ______ it reduced its season from twenty concerts to twelve.",
  "question": "Which choice most logically completes the text?",
  "solution": "The second sentence states what the orchestra did because of the first sentence's news. A) Wrong: the reduction follows from the cut; it does not oppose it. B) Wrong: the shorter season is a consequence, not an example of the cut. C) Wrong: the reduction is exactly what the cut would lead one to expect, not a defiance of expectation. D) Correct: the shortened season is the direct effect of the funding cut.",
  "choices": [
   "In contrast,",
   "For example,",
   "Even so,",
   "Consequently,"
  ],
  "answerIndex": 3
 },
 {
  "id": "eoi-042",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Transitions",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "The new treatment relieved symptoms in most of the patients who received it. ______ it did not cure the underlying disease.",
  "question": "Which choice most logically completes the text?",
  "solution": "The second sentence qualifies the good news with a persisting problem. A) Wrong: failing to cure is not a likeness to relieving symptoms; it limits the success. B) Correct: despite the relief, the disease remained; the second sentence concedes a limit against a positive expectation. C) Wrong: the failure to cure is not another benefit added to the relief. D) Wrong: the sentence states a fact, not a summary judgment.",
  "choices": [
   "Similarly,",
   "Nevertheless,",
   "In addition,",
   "In conclusion,"
  ],
  "answerIndex": 1
 },
 {
  "id": "eoi-043",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Transitions",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "The sculpture is not carved from a single block of marble but assembled from hundreds of small pieces. ______ it is a mosaic in three dimensions.",
  "question": "Which choice most logically completes the text?",
  "solution": "The second sentence gives a name for what the first sentence describes. A) Wrong: the mosaic is not an example of the sculpture; it is what the sculpture is. B) Wrong: the second sentence clarifies the first rather than opposing it. C) Correct: the second sentence renames the construction just described; it restates the idea in a single term. D) Wrong: no later event is introduced.",
  "choices": [
   "For instance,",
   "However,",
   "That is,",
   "Subsequently,"
  ],
  "answerIndex": 2
 },
 {
  "id": "eoi-044",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Transitions",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "The engineers spent the morning testing the prototype on the outdoor track. ______ the designers revised the product's casing back in the studio.",
  "question": "Which choice most logically completes the text?",
  "solution": "The two activities happen simultaneously in different places. A) Correct: the designers' work went on at the same time as the engineers' testing. B) Wrong: a second activity is introduced, not a summary. C) Wrong: the two activities are parallel, not opposed. D) Wrong: the designers' revisions are not presented as caused by the testing.",
  "choices": [
   "Meanwhile,",
   "In conclusion,",
   "In contrast,",
   "As a result,"
  ],
  "answerIndex": 0
 },
 {
  "id": "eoi-045",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Transitions",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "The outdoor concert was postponed ______ the lead singer's illness.",
  "question": "Which choice most logically completes the text?",
  "solution": "The phrase after the blank gives the cause of the postponement. A) Correct: the illness is the reason for the postponement. B) Wrong: the concert was postponed because of the illness, not despite it. C) Wrong: the illness is not an extra item added to the postponement. D) Wrong: the illness caused the postponement; the postponement did not cause the illness.",
  "choices": [
   "because of",
   "in spite of",
   "in addition to",
   "as a result of"
  ],
  "answerIndex": 0
 },
 {
  "id": "eoi-046",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Transitions",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "The two manuscripts share vocabulary, sentence structure, and even the same copying errors. ______ they were almost certainly written by the same scribe.",
  "question": "Which choice most logically completes the text?",
  "solution": "The shared features are summed up in a single inference. A) Wrong: the conclusion is not an instance of the shared features; it is drawn from them. B) Wrong: no simultaneous event is introduced. C) Correct: the final sentence compresses the listed evidence into a conclusion. D) Wrong: the conclusion agrees with the evidence rather than opposing it.",
  "choices": [
   "For example,",
   "Meanwhile,",
   "In short,",
   "In contrast,"
  ],
  "answerIndex": 2
 },
 {
  "id": "eoi-047",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Transitions",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "Early automobiles were noisy, unreliable machines that broke down often. ______ modern cars are quiet, dependable, and built to last for decades.",
  "question": "Which choice most logically completes the text?",
  "solution": "The two sentences set two eras of cars against each other. A) Wrong: quiet and dependable is the opposite of noisy and unreliable. B) Correct: modern cars are described as the opposite of early automobiles in every named respect. C) Wrong: the sentence does not add another trait of early cars; it opposes them with modern ones. D) Wrong: modern cars' quality is not an effect of early cars' flaws.",
  "choices": [
   "Similarly,",
   "On the other hand,",
   "In addition,",
   "Therefore,"
  ],
  "answerIndex": 1
 },
 {
  "id": "eoi-048",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Rhetorical Synthesis",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "While researching a topic, a student has taken the following notes:\n\n• Dr. Ines Halvorsen, a marine biologist, studied color change in tide-pool octopuses.\n• Halvorsen found that the octopuses change color to match the rocks around them.\n• Dr. Paul Mensah studied color change in cuttlefish.\n• Mensah found that cuttlefish can change color despite being colorblind.",
  "question": "The student wants to explain Halvorsen's finding about tide-pool octopuses. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
  "solution": "The goal names Halvorsen, so the finding must be hers, not Mensah's. A) Wrong: it gives Halvorsen credit for Mensah's cuttlefish finding. B) Wrong: it says what she studied but not what she found. C) Wrong: it accurately reports Mensah's finding, but the goal is Halvorsen's. D) Correct: it attributes the octopus camouflage finding to Halvorsen, exactly as the notes do.",
  "choices": [
   "Halvorsen found that cuttlefish can change color despite being colorblind.",
   "Halvorsen, a marine biologist, studied color change in tide-pool octopuses.",
   "Mensah found that cuttlefish can change color despite being colorblind.",
   "Halvorsen found that tide-pool octopuses change color to match the rocks around them."
  ],
  "answerIndex": 3
 },
 {
  "id": "eoi-049",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Rhetorical Synthesis",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "While researching a topic, a student has taken the following notes:\n\n• A city study found that wetlands along the river removed nitrates from runoff.\n• After a section of wetland was drained, nitrate levels in the river rose by 40 percent.\n• City engineers estimate that restored wetlands could lower the cost of treating drinking water.\n• The study monitored the river for five years.",
  "question": "The student wants to present the study's finding and explain its significance for the city's water treatment. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
  "solution": "The goal has two parts: the finding and why it matters for treatment costs. A) Wrong: it gives the finding but omits its significance for water-treatment costs. B) Wrong: it describes the study's duration, neither its finding nor its significance. C) Correct: it gives the nitrate finding, the 40 percent rise that confirms it, and the cost significance the goal requires. D) Wrong: the notes mention lower costs but give no dollar figure.",
  "choices": [
   "The study found that wetlands along the river removed nitrates from runoff, and nitrate levels rose by 40 percent after a section was drained.",
   "The study monitored the river's nitrate levels for five years.",
   "The study found that wetlands removed nitrates from runoff — when a section was drained, river nitrate levels rose by 40 percent — so restoring wetlands could lower the city's drinking-water treatment costs.",
   "Restoring the wetlands would save the city $2 million a year in water treatment costs."
  ],
  "answerIndex": 2
 },
 {
  "id": "eoi-050",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Rhetorical Synthesis",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "While researching a topic, a student has taken the following notes:\n\n• The ember newt is a small amphibian that lives in mountain streams.\n• Unlike most newts, which are active during the day, the ember newt hunts at night.\n• The ember newt's skin glows faintly orange in the dark.\n• The ember newt feeds on small insects and larvae.",
  "question": "The student wants to emphasize what makes the ember newt unusual among newts. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
  "solution": "The goal requires the traits that set this newt apart from the rest. A) Correct: it sets the newt's night hunting and glowing skin against the daytime habits of most newts. B) Wrong: habitat and diet are ordinary details; neither sets the newt apart from other newts. C) Wrong: it gives one unusual trait but omits the glowing skin. D) Wrong: the notes never claim it is the only glowing amphibian.",
  "choices": [
   "Unlike most newts, which are active during the day, the ember newt hunts at night, and its skin glows faintly orange in the dark.",
   "The ember newt is a small amphibian that lives in mountain streams and feeds on small insects and larvae.",
   "The ember newt hunts at night.",
   "The ember newt is the only glowing amphibian in the world."
  ],
  "answerIndex": 0
 },
 {
  "id": "eoi-051",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Rhetorical Synthesis",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "While researching a topic, a student has taken the following notes:\n\n• Dr. Yuki Tanaka is a linguist at Kyoto University.\n• Tanaka is also trained as a computer scientist.\n• She developed software that helps document endangered languages.\n• Her software is now used by researchers in twelve countries.",
  "question": "The student wants to introduce Dr. Yuki Tanaka, emphasizing that her work bridges two fields. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
  "solution": "The introduction must present both fields, not just one. A) Wrong: it presents only her linguistics side, so the two-field bridge disappears. B) Wrong: it describes the software's reach, not Tanaka or her two fields. C) Wrong: the notes mention no prize. D) Correct: it names both of her fields and the software where they meet.",
  "choices": [
   "Dr. Yuki Tanaka is a linguist at Kyoto University who develops software to document endangered languages.",
   "Tanaka's language-documentation software is now used by researchers in twelve countries.",
   "Dr. Yuki Tanaka won an international prize for her endangered-language software.",
   "Dr. Yuki Tanaka is a linguist at Kyoto University who is also trained as a computer scientist and develops software to document endangered languages."
  ],
  "answerIndex": 3
 },
 {
  "id": "eoi-052",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Rhetorical Synthesis",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "While researching a topic, a student has taken the following notes:\n\n• A bus trip between the two towns takes 45 minutes and costs $3.\n• A ferry trip between the two towns takes 25 minutes and costs $8.\n• Both the bus and the ferry run once an hour.",
  "question": "The student wants to compare the bus and the ferry in terms of travel time. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
  "solution": "Only travel time is to be compared, so both times and nothing else are needed. A) Wrong: it compares the fares, but the goal is travel time. B) Correct: it sets the two travel times side by side, the dimension the goal specifies. C) Wrong: with only the ferry's time, no comparison is made. D) Wrong: the notes say nothing about comfort.",
  "choices": [
   "The bus trip costs $3, while the ferry trip costs $8.",
   "The bus trip between the two towns takes 45 minutes, while the ferry takes only 25 minutes.",
   "The ferry trip between the two towns takes 25 minutes.",
   "The ferry is the faster option, and it is also more comfortable than the bus."
  ],
  "answerIndex": 1
 },
 {
  "id": "eoi-053",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Rhetorical Synthesis",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "While researching a topic, a student has taken the following notes:\n\n• The school board voted to move the high school start time from 7:30 a.m. to 8:45 a.m.\n• The decision followed a year of surveys of parents and students.\n• Research cited by the board links later start times to improved sleep for teenagers.\n• The new schedule takes effect next fall.",
  "question": "The student wants to explain the school board's decision and the reason behind it. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
  "solution": "The goal needs both the decision and its stated reason. A) Wrong: it states the decision but not the sleep research behind it. B) Correct: it states the decision and attaches the sleep research the board relied on. C) Wrong: it describes the process leading up to the vote, not the decision or its reason. D) Wrong: the notes never mention traffic; the stated reason is teenage sleep.",
  "choices": [
   "The board voted to move the high school start time from 7:30 a.m. to 8:45 a.m., effective next fall.",
   "The board voted to move the high school start time from 7:30 a.m. to 8:45 a.m. because research links later start times to improved sleep for teenagers.",
   "The decision followed a year of surveys of parents and students.",
   "The board moved the start time to reduce morning traffic around the school."
  ],
  "answerIndex": 1
 },
 {
  "id": "eoi-054",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Rhetorical Synthesis",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "While researching a topic, a student has taken the following notes:\n\n• Elias Brandt invented the first mechanical seed planter in 1863.\n• His brother, Tomas Brandt, improved the design in 1871 by adding a fertilizer attachment.\n• The planter allowed farmers to sow seeds in evenly spaced rows.\n• By 1880, the planter was used on farms across the Midwest.",
  "question": "The student wants to describe Tomas Brandt's contribution to the seed planter. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
  "solution": "The goal is Tomas's own contribution, not the invention itself. A) Wrong: it credits Tomas with Elias's invention; Tomas's contribution was the later improvement. B) Wrong: it identifies Tomas but never says what he contributed. C) Wrong: it describes the planter's spread, not Tomas's contribution. D) Correct: it credits Tomas with the improvement that the notes assign to him.",
  "choices": [
   "Tomas Brandt invented the first mechanical seed planter in 1863.",
   "Tomas Brandt was the brother of Elias Brandt, who invented the seed planter.",
   "By 1880, the seed planter was used on farms across the Midwest.",
   "Tomas Brandt improved his brother Elias's seed planter in 1871 by adding a fertilizer attachment."
  ],
  "answerIndex": 3
 },
 {
  "id": "eoi-055",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Rhetorical Synthesis",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "While researching a topic, a student has taken the following notes:\n\n• In a study, adults who walked for thirty minutes daily improved their memory test scores.\n• The improvement appeared only in participants over the age of 60.\n• Participants under 60 showed no significant change in memory scores.\n• The study lasted six months and included 240 participants.",
  "question": "The student wants to present the study's finding about walking and memory accurately. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
  "solution": "Accuracy here requires the qualifier, not just the headline result. A) Correct: it reports the improvement together with the age limit that the notes attach to it. B) Wrong: it drops the age limit, overstating the finding. C) Wrong: the notes say the younger group showed no significant change, the opposite of this claim. D) Wrong: it gives study details but not the finding.",
  "choices": [
   "The study found that daily walking improved memory scores, but only in participants over the age of 60.",
   "The study found that adults who walked for thirty minutes daily improved their memory test scores.",
   "Participants under 60 showed the greatest improvement in memory scores.",
   "The six-month study included 240 participants who walked daily."
  ],
  "answerIndex": 0
 },
 {
  "id": "eoi-056",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Rhetorical Synthesis",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "While researching a topic, a student has taken the following notes:\n\n• Archaeologists at the Kellan site use ground-penetrating radar to study buried remains.\n• The device sends radio waves into the soil.\n• Reflections from the waves reveal the outlines of buried structures.\n• Using radar lets archaeologists map structures without digging.\n• With radar, the team mapped a buried wall at the Kellan site.",
  "question": "The student wants to explain how ground-penetrating radar works and why archaeologists use it. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
  "solution": "The goal has two halves: how the device works and what it is for. A) Wrong: it explains the mechanism but not the purpose — mapping without excavation. B) Wrong: it gives one result at one site, not how the method works or why it is used. C) Correct: it covers the mechanism (waves and reflections) and the purpose (mapping without digging). D) Wrong: the notes give the device no such unlimited power.",
  "choices": [
   "Ground-penetrating radar sends radio waves into the soil, and their reflections reveal buried structures.",
   "Using radar, the team mapped a buried wall at the Kellan site.",
   "Ground-penetrating radar sends radio waves into the soil, and their reflections reveal buried structures, letting archaeologists map them without digging.",
   "Ground-penetrating radar can detect objects at any depth, even through solid rock."
  ],
  "answerIndex": 2
 },
 {
  "id": "eoi-057",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Rhetorical Synthesis",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "While researching a topic, a student has taken the following notes:\n\n• Green Valley Farm grows almonds in a dry region of the state.\n• Hillcrest Farm grows grapes in the same dry region.\n• Both farms irrigate their crops with drip irrigation.\n• After switching to drip irrigation, each farm cut its water use by 30 percent.",
  "question": "The student wants to emphasize a similarity between Green Valley Farm and Hillcrest Farm. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
  "solution": "The goal requires something the two farms have in common. A) Wrong: it emphasizes a difference between the farms, not a similarity. B) Wrong: it covers only one farm, so no similarity between the two is shown. C) Wrong: the notes give no year for the switch. D) Correct: it names the shared irrigation method and the shared 30 percent saving.",
  "choices": [
   "Green Valley Farm grows almonds, while Hillcrest Farm grows grapes.",
   "Green Valley Farm cut its water use by 30 percent after switching to drip irrigation.",
   "Both farms adopted drip irrigation in 2018 and have used it ever since.",
   "Both Green Valley Farm and Hillcrest Farm use drip irrigation, and each cut its water use by 30 percent after switching."
  ],
  "answerIndex": 3
 },
 {
  "id": "eoi-058",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Rhetorical Synthesis",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "While researching a topic, a student has taken the following notes:\n\n• A food desert is an area where residents have limited access to affordable, fresh food.\n• In the Marlow district, the nearest supermarket is three miles away.\n• Many Marlow residents do not own cars.\n• The city has responded by funding mobile grocery markets that visit Marlow weekly.",
  "question": "The student wants to introduce the concept of a food desert to readers who are unfamiliar with the term. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
  "solution": "An introduction of a concept needs the definition, ideally with an instance. A) Wrong: it gives an example but never defines the term. B) Correct: it defines the term and anchors it with the Marlow example. C) Wrong: it describes the city's response, not the concept itself. D) Wrong: the notes give no such statistic.",
  "choices": [
   "In the Marlow district, the nearest supermarket is three miles away, and many residents do not own cars.",
   "A food desert is an area where residents have limited access to affordable, fresh food, as in the Marlow district, where the nearest supermarket is three miles away.",
   "The city has responded by funding mobile grocery markets that visit Marlow weekly.",
   "One in five city residents lives in a food desert."
  ],
  "answerIndex": 1
 },
 {
  "id": "eoi-059",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Rhetorical Synthesis",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "While researching a topic, a student has taken the following notes:\n\n• The water level of Lake Sereno rose noticeably after 2018.\n• A dam upstream of the lake was removed in 2018.\n• Before the removal, the dam had held back much of the river's flow.\n• Fish populations in the lake also changed after 2018.",
  "question": "The student wants to emphasize the change in Lake Sereno and what caused it. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
  "solution": "The goal requires both the change and its cause. A) Wrong: it states the change but not the dam removal behind it. B) Wrong: it mentions a different change and gives no cause. C) Correct: it pairs the rise with the dam removal that produced it. D) Wrong: the notes attribute the rise to the dam removal, not to rainfall.",
  "choices": [
   "The water level of Lake Sereno rose noticeably after 2018.",
   "Fish populations in Lake Sereno changed after 2018.",
   "After an upstream dam that had held back the river's flow was removed in 2018, Lake Sereno's water level rose noticeably.",
   "Lake Sereno's water level rose because of record rainfall in 2018."
  ],
  "answerIndex": 2
 },
 {
  "id": "eoi-060",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Rhetorical Synthesis",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "While researching a topic, a student has taken the following notes:\n\n• Dr. Ingrid Voss dated the manuscript to the twelfth century based on its handwriting.\n• Dr. Samuel Adeyemi independently reached the same conclusion from the chemical composition of the ink.\n• The manuscript was discovered in a monastery library in 1960.\n• Both scholars published their analyses in 2019.",
  "question": "The student wants to emphasize that the two scholars reached the same conclusion about the manuscript's date. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
  "solution": "The goal is the agreement itself, so both names and the shared date are required. A) Correct: it names both scholars and the conclusion they share. B) Wrong: it reports only Voss's conclusion, so the agreement disappears. C) Wrong: it assigns Adeyemi's ink-chemistry method to Voss. D) Wrong: it gives background facts but never states the shared conclusion.",
  "choices": [
   "Both Dr. Ingrid Voss and Dr. Samuel Adeyemi concluded that the manuscript dates to the twelfth century.",
   "Dr. Ingrid Voss dated the manuscript to the twelfth century based on its handwriting.",
   "Dr. Ingrid Voss based her dating of the manuscript on the chemical composition of its ink.",
   "The manuscript was discovered in a monastery library in 1960, and both scholars published their analyses in 2019."
  ],
  "answerIndex": 0
 },
 {
  "id": "eoi-061",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Rhetorical Synthesis",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "While researching a topic, a student has taken the following notes:\n\n• The new pedestrian bridge over the Corin River is built from laminated bamboo.\n• The engineers chose bamboo mainly because it regrows quickly after harvesting.\n• Bamboo is also lightweight and surprisingly strong.\n• The bridge opened to the public in 2024.",
  "question": "The student wants to emphasize the main reason the engineers chose bamboo for the bridge. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
  "solution": "The goal singles out the main reason, so secondary virtues do not satisfy it. A) Correct: it repeats the reason the notes identify as the main one. B) Wrong: light weight and strength are secondary reasons; the notes name regrowth as the main one. C) Wrong: it describes the bridge but gives no reason for the material choice. D) Wrong: the notes never mention cost.",
  "choices": [
   "The engineers chose bamboo for the pedestrian bridge mainly because it regrows quickly after harvesting.",
   "The engineers also valued bamboo because it is lightweight and surprisingly strong.",
   "The new pedestrian bridge over the Corin River, which opened in 2024, is built from laminated bamboo.",
   "Bamboo was chosen because it was the cheapest building material available."
  ],
  "answerIndex": 0
 },
 {
  "id": "eoi-062",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Rhetorical Synthesis",
  "difficulty": 2,
  "level": 2,
  "type": "mc",
  "stimulus": "While researching a topic, a student has taken the following notes:\n\n• The Solstice Run, a 10-kilometer race, was first held in 1985.\n• Only 40 runners took part in the first race.\n• The race is held every June along the riverfront.\n• The most recent Solstice Run drew about 5,000 runners.",
  "question": "The student wants to give a brief history of the Solstice Run. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
  "solution": "A history needs the origin and the development, not a single snapshot. A) Wrong: it describes the race as it is now but gives none of its history. B) Wrong: a single current figure is not a history of the event. C) Correct: it traces the race from its small 1985 start to its current size, which is a brief history. D) Wrong: the notes name no founder.",
  "choices": [
   "The Solstice Run is a 10-kilometer race held every June along the riverfront.",
   "The most recent Solstice Run drew about 5,000 runners.",
   "The Solstice Run began in 1985 with only 40 runners and has grown to draw about 5,000 runners in its most recent edition.",
   "The Solstice Run was founded by marathoner June Park in 1985."
  ],
  "answerIndex": 2
 },
 {
  "id": "eoi-063",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Transitions",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "The biologist's theory was initially met with skepticism from her colleagues. ______ later studies using larger samples confirmed her central claim.",
  "question": "Which choice most logically completes the text?",
  "solution": "The second sentence reports what happened after the first. A) Wrong: the confirmation is a later event, not a rewording of the skepticism. B) Correct: the confirmation came later in time than the skepticism, so a sequence marker fits. C) Wrong: the later studies are not an instance of the skepticism. D) Wrong: the studies confirmed the theory; the point is the later vindication, not an opposing claim about the theory itself.",
  "choices": [
   "In other words,",
   "Subsequently,",
   "For example,",
   "In contrast,"
  ],
  "answerIndex": 1
 },
 {
  "id": "eoi-064",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Transitions",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "______ its small size, the island nation maintains a navy, a university, and a national airline.",
  "question": "Which choice most logically completes the text?",
  "solution": "The phrase must mark the size as an obstacle the facts overcome. A) Wrong: the small size does not cause the nation to maintain these institutions. B) Wrong: the size is not an extra item on a list with the institutions. C) Wrong: the institutions are not an effect of the small size. D) Correct: the institutions are maintained in spite of the country's size, a concession.",
  "choices": [
   "Because of",
   "In addition to",
   "As a result of",
   "Despite"
  ],
  "answerIndex": 3
 },
 {
  "id": "eoi-065",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Transitions",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "In formal logic, a valid argument is one whose conclusion cannot be false if its premises are true. ______ validity concerns the argument's structure, not whether its premises are actually true.",
  "question": "Which choice most logically completes the text?",
  "solution": "The second sentence unpacks the definition given in the first. A) Wrong: no example of an argument is given; the definition is being clarified. B) Wrong: the second sentence agrees with and clarifies the first rather than opposing it. C) Correct: the second sentence restates the definition's implication in different terms. D) Wrong: the structural nature of validity is not an effect of the definition.",
  "choices": [
   "For example,",
   "However,",
   "In other words,",
   "As a result,"
  ],
  "answerIndex": 2
 },
 {
  "id": "eoi-066",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Transitions",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "The city's archives hold tax records, maps, letters, and photographs spanning three centuries. ______ they offer an unusually complete record of the city's development.",
  "question": "Which choice most logically completes the text?",
  "solution": "The list of holdings is summed up in one concluding assessment. A) Correct: the final sentence compresses the inventory into a single summary judgment. B) Wrong: no simultaneous event is introduced. C) Wrong: the completeness is a conclusion from the list, not an item on it. D) Wrong: the assessment follows from the holdings; it does not run against them.",
  "choices": [
   "In short,",
   "Meanwhile,",
   "For instance,",
   "Nevertheless,"
  ],
  "answerIndex": 0
 },
 {
  "id": "eoi-067",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Transitions",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "The expedition was called off ______ deteriorating weather in the high mountains.",
  "question": "Which choice most logically completes the text?",
  "solution": "The phrase after the blank states the cause of the cancellation. A) Wrong: the expedition was canceled because of the weather, not despite it. B) Wrong: the weather is not an extra item added to the cancellation. C) Wrong: the weather caused the cancellation; the cancellation did not cause the weather. D) Correct: the weather is the reason the expedition was canceled.",
  "choices": [
   "in spite of",
   "in addition to",
   "as a result of",
   "because of"
  ],
  "answerIndex": 3
 },
 {
  "id": "eoi-068",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Transitions",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "The economist predicted that automation would eliminate most jobs in the sector within a decade. ______ automation created entirely new categories of work even as it displaced others.",
  "question": "Which choice most logically completes the text?",
  "solution": "The second sentence contradicts the prediction in the first. A) Wrong: creating new work is not a likeness to eliminating most jobs. B) Correct: what automation actually did runs counter to the prediction, so a contrast marker is required. C) Wrong: the second sentence does not add a supporting point; it overturns the forecast. D) Wrong: the creation of new jobs is not a consequence of the prediction.",
  "choices": [
   "Similarly,",
   "However,",
   "In addition,",
   "Therefore,"
  ],
  "answerIndex": 1
 },
 {
  "id": "eoi-069",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Transitions",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "Some of the composer's works depart radically from the conventions of her time. ______ her final symphony abandons a fixed key signature altogether.",
  "question": "Which choice most logically completes the text?",
  "solution": "The second sentence narrows the general claim to one concrete work. A) Wrong: the symphony is a new, specific case, not a rewording of the general claim. B) Correct: the symphony is a specific instance of the radical departures just described. C) Wrong: the symphony illustrates the departures; it does not oppose them. D) Wrong: the symphony's design is not an effect of the general tendency.",
  "choices": [
   "In other words,",
   "Specifically,",
   "However,",
   "As a result,"
  ],
  "answerIndex": 1
 },
 {
  "id": "eoi-070",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Transitions",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "The journal received a record number of submissions this year. ______ the editors extended the review period by a month.",
  "question": "Which choice most logically completes the text?",
  "solution": "The second sentence states the measure that followed from the first. A) Wrong: extending the period agrees with the pressure of submissions; it does not oppose it. B) Wrong: the extension is a response, not an instance of the submissions. C) Wrong: the extension is exactly what the situation calls for, not a move against expectation. D) Correct: the extension is the action taken in response to the record submissions.",
  "choices": [
   "In contrast,",
   "For example,",
   "Even so,",
   "Accordingly,"
  ],
  "answerIndex": 3
 },
 {
  "id": "eoi-071",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Transitions",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "A thermostat maintains a set temperature by switching the heat on and off as needed. ______ the human body maintains a stable internal temperature through sweating and shivering.",
  "question": "Which choice most logically completes the text?",
  "solution": "Two different systems are shown doing the same kind of regulation. A) Correct: the body's temperature control is presented as parallel to the thermostat's. B) Wrong: the body is likened to the thermostat, not set against it. C) Wrong: the body's regulation is not caused by the thermostat's operation. D) Wrong: nothing runs against an expectation set by the first sentence.",
  "choices": [
   "Likewise,",
   "In contrast,",
   "As a result,",
   "Nevertheless,"
  ],
  "answerIndex": 0
 },
 {
  "id": "eoi-072",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Transitions",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "The report documents the steady decline of the region's wetlands over forty years. ______ it proposes a restoration plan to be funded by the state.",
  "question": "Which choice most logically completes the text?",
  "solution": "The second sentence adds a second thing the report does. A) Wrong: proposing a plan does not run against documenting the decline. B) Wrong: the plan is not an instance of the decline's documentation. C) Correct: the proposal is a further component of the report, added to its documentation. D) Wrong: the plan is an addition to the report's contents, not a summary of them.",
  "choices": [
   "Nevertheless,",
   "For instance,",
   "Furthermore,",
   "In conclusion,"
  ],
  "answerIndex": 2
 },
 {
  "id": "eoi-073",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Transitions",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "The novel was a commercial failure when it appeared in 1932, selling barely a thousand copies. ______ it is now regarded as a classic of modern literature.",
  "question": "Which choice most logically completes the text?",
  "solution": "The second sentence's judgment stands against the background of the first sentence's failure. A) Wrong: the classic status is not presented as an effect of the poor sales. B) Wrong: being a classic is not a rewording of being a commercial failure. C) Wrong: classic status is the opposite of the initial reception, not a likeness. D) Correct: the novel's current standing holds in spite of its original failure.",
  "choices": [
   "As a result,",
   "In other words,",
   "Similarly,",
   "Despite this,"
  ],
  "answerIndex": 3
 },
 {
  "id": "eoi-074",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Transitions",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "For centuries, the manuscript was copied by hand, one scribe at a time. ______ with the arrival of printing, it reached thousands of new readers.",
  "question": "Which choice most logically completes the text?",
  "solution": "The second sentence moves the timeline forward to a later era. A) Wrong: printing's arrival is a new development, not a rewording of hand copying. B) Correct: the wider reach came at a later stage, after the long hand-copying period. C) Wrong: the printing era is not an instance of the hand-copying era. D) Wrong: the emphasis is on the later stage arriving, not on opposing the earlier practice.",
  "choices": [
   "In other words,",
   "Eventually,",
   "For example,",
   "In contrast,"
  ],
  "answerIndex": 1
 },
 {
  "id": "eoi-075",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Transitions",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "The first remedy is inexpensive; ______ it addresses only the symptoms, not the underlying cause.",
  "question": "Which choice most logically completes the text?",
  "solution": "The clause after the blank qualifies the first clause with an opposing drawback. A) Wrong: treating only symptoms is a drawback, not another point in the remedy's favor. B) Wrong: the narrow effect is not caused by the low price. C) Correct: the limitation after the semicolon cuts against the advantage before it. D) Wrong: the second clause is not an instance of the remedy's cheapness.",
  "choices": [
   "Moreover,",
   "As a result,",
   "However,",
   "For example,"
  ],
  "answerIndex": 2
 },
 {
  "id": "eoi-076",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Transitions",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "______ the museum's endowment had grown substantially, the director expanded the education program.",
  "question": "Which choice most logically completes the text?",
  "solution": "The opening clause supplies the cause of the main clause's action. A) Correct: the growth of the endowment is the reason the expansion was possible. B) Wrong: the growth enabled the expansion; the expansion did not happen in spite of it. C) Wrong: no two things are being set against each other. D) Wrong: the endowment did grow; the sentence is not stating a condition that had to be met.",
  "choices": [
   "Because",
   "Although",
   "Whereas",
   "Unless"
  ],
  "answerIndex": 0
 },
 {
  "id": "eoi-077",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Transitions",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "______ its predecessor, the new tractor model consumes half as much fuel per acre.",
  "question": "Which choice most logically completes the text?",
  "solution": "The opening word must mark a comparison of difference. A) Correct: the new model is set against its predecessor on fuel use. B) Wrong: the new model differs from the old one; it is not said to resemble it. C) Wrong: the predecessor is not the cause of the new model's fuel use. D) Wrong: the predecessor is not an extra item on a list.",
  "choices": [
   "Unlike",
   "Like",
   "Because of",
   "In addition to"
  ],
  "answerIndex": 0
 },
 {
  "id": "eoi-078",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Transitions",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "Inspectors found that the bridge's cables had corroded far more quickly than expected. ______ the transit authority ordered the bridge closed to all traffic immediately.",
  "question": "Which choice most logically completes the text?",
  "solution": "The second sentence states the action the findings produced. A) Wrong: closing the bridge is exactly what the findings call for, not a move against expectation. B) Wrong: the closure is a new action, not a rewording of the findings. C) Correct: the closure is the direct consequence of the inspection findings. D) Wrong: the closure is a response to the corrosion, not an instance of it.",
  "choices": [
   "Nevertheless,",
   "In other words,",
   "As a result,",
   "For example,"
  ],
  "answerIndex": 2
 },
 {
  "id": "eoi-079",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Rhetorical Synthesis",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "While researching a topic, a student has taken the following notes:\n\n• Lake Alden Reservoir can hold 90 billion liters of water.\n• Bexley Reservoir can hold 35 billion liters of water.\n• Both reservoirs supply drinking water to the same region.\n• During the 2021 drought, Bexley Reservoir fell to a quarter of its capacity.",
  "question": "The student wants to emphasize the difference in capacity between the two reservoirs. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
  "solution": "The goal requires both capacities in direct comparison. A) Wrong: it gives only one reservoir's capacity, so no difference is shown. B) Correct: it sets the two capacities against each other with their exact figures. C) Wrong: it reverses the two capacities given in the notes. D) Wrong: the notes make no comparison with other reservoirs in the state.",
  "choices": [
   "Lake Alden Reservoir, which can hold 90 billion liters, supplies drinking water to the region.",
   "Lake Alden Reservoir can hold 90 billion liters of water, far more than Bexley Reservoir's 35 billion liters.",
   "Bexley Reservoir, at 90 billion liters, holds far more water than Lake Alden Reservoir's 35 billion liters.",
   "Lake Alden Reservoir is the largest reservoir in the state."
  ],
  "answerIndex": 1
 },
 {
  "id": "eoi-080",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Rhetorical Synthesis",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "While researching a topic, a student has taken the following notes:\n\n• Dr. Priya Nair is a physical chemist.\n• Nair is also a professional violinist who performs with the City Orchestra.\n• Her research examines how concert-hall design affects sound.\n• She has published studies in both chemistry and music journals.",
  "question": "The student wants to introduce Dr. Priya Nair, emphasizing that she is active in two different fields. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
  "solution": "Both fields must appear for the introduction to meet the goal. A) Wrong: it presents only her chemistry career, so the second field never appears. B) Wrong: it mentions her publications but does not introduce her as a person active in two fields. C) Wrong: the notes mention no awards. D) Correct: it introduces her through both of her fields, as the goal requires.",
  "choices": [
   "Dr. Priya Nair is a physical chemist whose research examines how concert-hall design affects sound.",
   "Nair has published studies in both chemistry and music journals.",
   "Dr. Priya Nair is a chemist and violinist who has won awards in both fields.",
   "Dr. Priya Nair is a physical chemist who is also a professional violinist performing with the City Orchestra."
  ],
  "answerIndex": 3
 },
 {
  "id": "eoi-081",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Rhetorical Synthesis",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "While researching a topic, a student has taken the following notes:\n\n• The population of lake trout in Lake Harrow declined sharply after 2005.\n• Zebra mussels, an invasive species, were first detected in the lake in 2004.\n• Zebra mussels compete with young lake trout for the same food.\n• Other fish species in the lake were not affected as strongly.",
  "question": "The student wants to present the decline of the lake trout and its likely cause, according to the notes. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
  "solution": "The goal requires the decline and its likely cause together. A) Wrong: it gives the decline but not the mussel competition behind it. B) Wrong: the notes never mention warming water. C) Correct: it pairs the decline with the mussel competition the notes identify as the mechanism. D) Wrong: it notes the trout's distinctiveness but says nothing about the cause.",
  "choices": [
   "The population of lake trout in Lake Harrow declined sharply after 2005.",
   "The lake trout declined because the lake's water grew warmer after 2005.",
   "Lake trout in Lake Harrow declined sharply after 2005, likely because zebra mussels, detected in 2004, compete with young trout for food.",
   "Other fish species in Lake Harrow were not affected as strongly as the lake trout."
  ],
  "answerIndex": 2
 },
 {
  "id": "eoi-082",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Rhetorical Synthesis",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "While researching a topic, a student has taken the following notes:\n\n• Hand pollination of the orchard costs about $40 per tree each season.\n• Drone pollination costs about $110 per tree each season.\n• Drones can pollinate a tree in less than half the time hand pollination takes.\n• Both methods produced similar fruit yields in trials.",
  "question": "The student wants to compare the two pollination methods in terms of cost. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
  "solution": "Only cost is to be compared, so both costs are required. A) Correct: it sets the two per-tree costs side by side, the dimension specified. B) Wrong: it compares speed, but the goal is cost. C) Wrong: with only one method's cost, no comparison is made. D) Wrong: the notes say the two methods produced similar yields, not higher ones for drones.",
  "choices": [
   "Hand pollination costs about $40 per tree each season, while drone pollination costs about $110 per tree.",
   "Drones can pollinate a tree in less than half the time hand pollination takes.",
   "Drone pollination costs about $110 per tree each season.",
   "Drone pollination costs more, but it also produces higher fruit yields."
  ],
  "answerIndex": 0
 },
 {
  "id": "eoi-083",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Rhetorical Synthesis",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "While researching a topic, a student has taken the following notes:\n\n• Dr. Rao measured the alloy's melting point.\n• Dr. Kim measured the alloy's electrical conductivity.\n• Dr. Alvarez measured the alloy's tensile strength.\n• The three researchers were studying a new alloy for use in aircraft.",
  "question": "The student wants to identify Dr. Kim's contribution to the alloy study. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
  "solution": "With three researchers, the goal turns on correct attribution. A) Wrong: the melting point was Rao's measurement, not Kim's. B) Wrong: it accurately reports Alvarez's work, but the goal is Kim's contribution. C) Wrong: the notes mention no prize. D) Correct: it assigns Kim the measurement the notes assign to her.",
  "choices": [
   "Dr. Kim measured the alloy's melting point.",
   "Dr. Alvarez measured the alloy's tensile strength.",
   "Dr. Kim's conductivity measurements won the team's annual research prize.",
   "Dr. Kim measured the alloy's electrical conductivity."
  ],
  "answerIndex": 3
 },
 {
  "id": "eoi-084",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Rhetorical Synthesis",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "While researching a topic, a student has taken the following notes:\n\n• The city's bike-share program recorded 12,000 trips in 2015, its first year.\n• Trips rose to 45,000 in 2018.\n• By 2021, annual trips had reached 98,000.\n• The program also expanded from 20 stations to 75 stations over the same period.",
  "question": "The student wants to emphasize how use of the bike-share program changed between 2015 and 2021. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
  "solution": "The endpoints of the period define the change. A) Wrong: it reverses the two years' figures. B) Correct: it gives the first and last years' figures, spanning exactly the period named in the goal. C) Wrong: it gives only the middle year, so the full change across the period is not shown. D) Wrong: the notes make no comparison with any other city.",
  "choices": [
   "Bike-share use grew from 98,000 trips in 2015 to 12,000 trips in 2021.",
   "Bike-share use grew from 12,000 trips in 2015 to 98,000 trips in 2021.",
   "Bike-share trips rose to 45,000 in 2018.",
   "By 2021, the city's bike-share program was carrying more riders than Denver's."
  ],
  "answerIndex": 1
 },
 {
  "id": "eoi-085",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Rhetorical Synthesis",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "While researching a topic, a student has taken the following notes:\n\n• Halloway is a town of about 4,000 people.\n• The town is known for its glassblowing studios, which line its main street.\n• Halloway was founded in 1820 as a mill town.\n• Each fall, the town hosts a glass festival that draws visitors from across the region.",
  "question": "The student wants to introduce the town of Halloway to readers who have never heard of it. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
  "solution": "An introduction must say what the place is and what distinguishes it. A) Wrong: it gives size and age but not what the town is known for. B) Correct: it identifies the town and the feature it is known for. C) Wrong: it describes one event rather than introducing the town itself. D) Wrong: the notes give a founding year but no such ranking.",
  "choices": [
   "Halloway is a town of about 4,000 people that was founded in 1820 as a mill town.",
   "Halloway is a town of about 4,000 people known for the glassblowing studios that line its main street.",
   "Each fall, Halloway hosts a glass festival that draws visitors from across the region.",
   "Halloway is the oldest town in the state."
  ],
  "answerIndex": 1
 },
 {
  "id": "eoi-086",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Rhetorical Synthesis",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "While researching a topic, a student has taken the following notes:\n\n• Some desert plants open their pores only at night, unlike most plants, which open them during the day.\n• Open pores allow a plant to take in carbon dioxide but also let water escape.\n• In experiments, plants that opened their pores during the day lost three times as much water as night-opening plants.\n• Night-opening plants grow more slowly than day-opening plants.",
  "question": "The student wants to explain the night-opening adaptation and the evidence that it conserves water. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
  "solution": "The goal requires both the adaptation and its supporting evidence. A) Wrong: it describes the adaptation but gives none of the experimental evidence. B) Wrong: it states a drawback, not the water-conservation evidence. C) Wrong: the notes discuss water loss only, not heat protection. D) Correct: it states the adaptation and cites the experimental comparison that supports the water-saving claim.",
  "choices": [
   "Some desert plants open their pores only at night, unlike most plants, which open them during the day.",
   "Night-opening plants grow more slowly than day-opening plants.",
   "Night opening also protects the plants from the desert's midday heat.",
   "Some desert plants open their pores only at night, and experiments show this conserves water: day-opening plants lost three times as much water as night-opening ones."
  ],
  "answerIndex": 3
 },
 {
  "id": "eoi-087",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Rhetorical Synthesis",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "While researching a topic, a student has taken the following notes:\n\n• In 1800, the journey from the town of Alder to the port of Bexhill took about six weeks by wagon.\n• A railroad between Alder and Bexhill was completed in 1869.\n• By 1870, the same journey by rail took about five days.\n• The railroad also carried freight between the two towns.",
  "question": "The student wants to emphasize how the journey from Alder to Bexhill changed over time. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
  "solution": "The change is defined by the two journey times at the two dates. A) Correct: it contrasts the wagon journey of 1800 with the rail journey of 1870. B) Wrong: it gives only the earlier journey, so no change appears. C) Wrong: it gives the railroad's completion and freight role, not the change in travel time. D) Wrong: the notes say nothing about the cost of either journey.",
  "choices": [
   "The journey from Alder to Bexhill, which took about six weeks by wagon in 1800, took only about five days by rail by 1870.",
   "In 1800, the journey from Alder to Bexhill took about six weeks by wagon.",
   "A railroad between Alder and Bexhill was completed in 1869 and also carried freight.",
   "Rail travel between the towns was also far cheaper than wagon travel."
  ],
  "answerIndex": 0
 },
 {
  "id": "eoi-088",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Rhetorical Synthesis",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "While researching a topic, a student has taken the following notes:\n\n• A conservation committee recommends planting native grasses on the hillside.\n• Native grasses have deep roots that hold soil in place.\n• The hillside lost much of its topsoil in last year's storms.\n• Non-native grasses planted there previously had shallow roots.",
  "question": "The student wants to state the committee's recommendation and the reason for it. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
  "solution": "Both the recommendation and its reason are required. A) Wrong: it states the recommendation but not the reason behind it. B) Wrong: it describes the problem, not the recommendation or its reason. C) Correct: it gives the recommendation and the root-based reason the notes supply. D) Wrong: the committee recommended native grasses; the notes say the non-native ones had shallow roots.",
  "choices": [
   "A conservation committee recommends planting native grasses on the hillside.",
   "The hillside lost much of its topsoil in last year's storms.",
   "The committee recommends planting native grasses on the hillside because their deep roots hold soil in place.",
   "The committee recommends planting non-native grasses because of their deep roots."
  ],
  "answerIndex": 2
 },
 {
  "id": "eoi-089",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Rhetorical Synthesis",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "While researching a topic, a student has taken the following notes:\n\n• An urban heat island is a city area that is measurably warmer than the surrounding countryside.\n• The effect is caused mainly by pavement and buildings absorbing and re-radiating heat.\n• The urban heat island effect is distinct from the greenhouse effect, which operates on a global scale.\n• Some cities have recorded nighttime temperatures up to 5 degrees higher than nearby rural areas.",
  "question": "The student wants to introduce the term “urban heat island” and distinguish it from the greenhouse effect. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
  "solution": "The goal has two parts: a definition and a distinction. A) Wrong: it defines the term but never distinguishes it from the greenhouse effect. B) Wrong: it explains the cause but neither introduces the term plainly nor distinguishes it. C) Wrong: the notes give no history of the term. D) Correct: it defines the term and draws the local-versus-global distinction the goal demands.",
  "choices": [
   "An urban heat island is a city area that is measurably warmer than the surrounding countryside.",
   "The effect is caused mainly by pavement and buildings absorbing and re-radiating heat.",
   "Urban heat islands were first identified in Tokyo in the 1970s.",
   "An urban heat island is a city area measurably warmer than the surrounding countryside — a local effect distinct from the global greenhouse effect."
  ],
  "answerIndex": 3
 },
 {
  "id": "eoi-090",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Rhetorical Synthesis",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "While researching a topic, a student has taken the following notes:\n\n• Helena Brooks writes mystery novels.\n• David Lindqvist writes historical fiction.\n• Brooks drafts each of her novels by hand in notebooks.\n• Lindqvist also writes his first drafts by hand, saying it slows his thinking.",
  "question": "The student wants to emphasize a similarity between Helena Brooks and David Lindqvist. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
  "solution": "The goal requires a shared trait, stated for both writers. A) Wrong: it contrasts their genres, a difference rather than a similarity. B) Correct: it names the drafting habit the two novelists share. C) Wrong: it covers only Brooks, so no similarity between the two is shown. D) Wrong: the notes mention no prizes.",
  "choices": [
   "Helena Brooks writes mystery novels, while David Lindqvist writes historical fiction.",
   "Both Helena Brooks and David Lindqvist write their first drafts by hand.",
   "Helena Brooks drafts each of her novels by hand in notebooks.",
   "Both novelists have won the National Fiction Prize."
  ],
  "answerIndex": 1
 },
 {
  "id": "eoi-091",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Rhetorical Synthesis",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "While researching a topic, a student has taken the following notes:\n\n• A study of a tutoring program found that participants' test scores rose by an average of 8 points.\n• The study included only students who attended every tutoring session.\n• The authors note that the results may not apply to students who attend irregularly.\n• The program served 150 students over one school year.",
  "question": "The student wants to present the study's finding together with its main limitation. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
  "solution": "The goal explicitly pairs the finding with its limitation. A) Wrong: it gives the finding without the limitation on who was studied. B) Wrong: it gives the program's scale, neither the finding nor the limitation. C) Correct: it reports the gain and immediately attaches the attendance limitation. D) Wrong: the authors explicitly limit the finding; this choice claims the opposite.",
  "choices": [
   "The study found that the tutoring program raised participants' test scores by an average of 8 points.",
   "The program served 150 students over one school year.",
   "The study found that the tutoring program raised scores by an average of 8 points, though it included only students who attended every session, so the results may not apply to irregular attendees.",
   "The authors conclude that the program improves scores for all students, regardless of attendance."
  ],
  "answerIndex": 2
 },
 {
  "id": "eoi-092",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Rhetorical Synthesis",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "While researching a topic, a student has taken the following notes:\n\n• Construction of the Kestrel Dam began in 1955 and was completed in 1962.\n• Workers built the dam by pouring concrete in sections, one block at a time.\n• The dam stands on the Kestrel River in the northern part of the state.\n• At the time, it was the largest public works project in the state's history.",
  "question": "The student wants to describe how the Kestrel Dam was built and how long construction took. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
  "solution": "The goal requires the method and the duration together. A) Correct: it gives the section-by-section method and the seven-year span. B) Wrong: it gives the method but not the duration. C) Wrong: it gives the location, not the construction method or duration. D) Wrong: the notes call it the largest public works project of its time, not the largest dam today.",
  "choices": [
   "The Kestrel Dam was built by pouring concrete in sections, one block at a time, over seven years, from 1955 to 1962.",
   "Workers built the Kestrel Dam by pouring concrete in sections, one block at a time.",
   "The Kestrel Dam stands on the Kestrel River in the northern part of the state.",
   "The Kestrel Dam remains the largest dam in the state today."
  ],
  "answerIndex": 0
 },
 {
  "id": "eoi-093",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Rhetorical Synthesis",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "While researching a topic, a student has taken the following notes:\n\n• The Barrow Strait station generates electricity from the movement of the tides.\n• According to the station's engineers, tidal power's main advantage is that tides are predictable years in advance.\n• Wind, by contrast, cannot be predicted with the same accuracy.\n• The station supplies electricity to about 20,000 homes.",
  "question": "The student wants to emphasize the main advantage of tidal power, according to the station's engineers. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
  "solution": "The goal is tied to the engineers' stated judgment. A) Correct: it repeats the advantage the engineers themselves named as the main one. B) Wrong: it describes the station but never mentions the advantage. C) Wrong: the notes say the opposite: wind cannot be predicted as accurately as tides. D) Wrong: it says how the station works, not what its main advantage is.",
  "choices": [
   "According to the station's engineers, tidal power's main advantage is that tides are predictable years in advance.",
   "The Barrow Strait station generates electricity from the tides and supplies about 20,000 homes.",
   "The engineers note that wind is more predictable than the tides.",
   "The Barrow Strait station generates electricity from the movement of the tides."
  ],
  "answerIndex": 0
 },
 {
  "id": "eoi-094",
  "section": "Reading & Writing",
  "domain": "Expression of Ideas",
  "topic": "Rhetorical Synthesis",
  "difficulty": 3,
  "level": 3,
  "type": "mc",
  "stimulus": "While researching a topic, a student has taken the following notes:\n\n• The town of Corville's textile factory closed in 2010.\n• Corville's population was 8,200 in 2010.\n• By 2020, the town's population had fallen to 5,900.\n• In 2015, Corville's school merged with a neighboring district's school.",
  "question": "The student wants to emphasize the change in Corville's population that followed the factory closing. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
  "solution": "The change needs the starting and ending populations. A) Wrong: with only the final figure, the size of the change is not emphasized. B) Wrong: it mentions a consequence for the school, not the population change itself. C) Correct: it ties the population drop directly to the period after the closing, with both figures. D) Wrong: the notes do not say where departing residents went.",
  "choices": [
   "By 2020, Corville's population had fallen to 5,900.",
   "In 2015, Corville's school merged with a neighboring district's school.",
   "After Corville's textile factory closed in 2010, the town's population fell from 8,200 to 5,900 by 2020.",
   "Most of Corville's departing residents moved to the state capital."
  ],
  "answerIndex": 2
 }
];
