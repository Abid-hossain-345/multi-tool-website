// Function to show the selected tool and hide others
function showTool(toolId) {
    const homeSection = document.getElementById('home');
    const toolsSection = document.getElementById('tools');
    const toolContent = document.getElementById('toolContent');

    // Hide home section and show tools section
    homeSection.style.display = 'none';
    toolsSection.style.display = 'block';

    // Load the selected tool's content
    switch (toolId) {
        case 'home':
            homeSection.style.display = 'block';
            toolsSection.style.display = 'none';
            break;
        case 'ageCalculator':
            toolContent.innerHTML = `
                <div class="card tool-card">
                    <div class="card-body">
                        <h2 class="text-center mb-4">Age Calculator</h2>
                        <form id="ageCalculatorForm">
                            <div class="mb-3">
                                <label for="birthdate" class="form-label">Enter your birthdate:</label>
                                <input type="date" class="form-control" id="birthdate" required>
                            </div>
                            <button type="submit" class="btn btn-primary">Calculate Age</button>
                        </form>
                        <div id="ageResult" class="mt-3"></div>
                    </div>
                </div>
            `;
            document.getElementById('ageCalculatorForm').addEventListener('submit', function(event) {
                event.preventDefault();
                const birthdate = new Date(document.getElementById('birthdate').value);
                const today = new Date();
                let age = today.getFullYear() - birthdate.getFullYear();
                const monthDifference = today.getMonth() - birthdate.getMonth();
                if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthdate.getDate())) {
                    age--;
                }
                document.getElementById('ageResult').innerHTML = `<p>Your age is: <strong>${age}</strong> years</p>`;
            });
            break;

        case 'wordCounter':
            toolContent.innerHTML = `
                <div class="card tool-card">
                    <div class="card-body">
                        <h2 class="text-center mb-4">Word Counter</h2>
                        <textarea id="textInput" class="form-control" rows="5" placeholder="Enter your text here..."></textarea>
                        <button onclick="countWords()" class="btn btn-primary mt-3">Count Words</button>
                        <div id="wordCountResult" class="mt-3"></div>
                    </div>
                </div>
            `;
            break;

        case 'calorieCalculator':
            toolContent.innerHTML = `
                <div class="card tool-card">
                    <div class="card-body">
                        <h2 class="text-center mb-4">Calorie Calculator</h2>
                        <form id="calorieCalculatorForm">
                            <div class="mb-3">
                                <label for="age" class="form-label">Age:</label>
                                <input type="number" class="form-control" id="age" required>
                            </div>
                            <div class="mb-3">
                                <label for="weight" class="form-label">Weight (kg):</label>
                                <input type="number" class="form-control" id="weight" required>
                            </div>
                            <div class="mb-3">
                                <label for="height" class="form-label">Height (cm):</label>
                                <input type="number" class="form-control" id="height" required>
                            </div>
                            <div class="mb-3">
                                <label for="activity" class="form-label">Activity Level:</label>
                                <select class="form-control" id="activity" required>
                                    <option value="1.2">Sedentary</option>
                                    <option value="1.375">Lightly Active</option>
                                    <option value="1.55">Moderately Active</option>
                                    <option value="1.725">Very Active</option>
                                    <option value="1.9">Extra Active</option>
                                </select>
                            </div>
                            <button type="submit" class="btn btn-primary">Calculate Calories</button>
                        </form>
                        <div id="calorieResult" class="mt-3"></div>
                    </div>
                </div>
            `;
            document.getElementById('calorieCalculatorForm').addEventListener('submit', function(event) {
                event.preventDefault();
                const age = document.getElementById('age').value;
                const weight = document.getElementById('weight').value;
                const height = document.getElementById('height').value;
                const activity = document.getElementById('activity').value;
                const bmr = 10 * weight + 6.25 * height - 5 * age + 5;
                const calories = bmr * activity;
                document.getElementById('calorieResult').innerHTML = `<p>Daily Calorie Needs: <strong>${calories.toFixed(2)}</strong> kcal</p>`;
            });
            break;

        case 'bmiCalculator':
            toolContent.innerHTML = `
                <div class="card tool-card">
                    <div class="card-body">
                        <h2 class="text-center mb-4">BMI Calculator</h2>
                        <form id="bmiCalculatorForm">
                            <div class="mb-3">
                                <label for="weightBmi" class="form-label">Weight (kg):</label>
                                <input type="number" class="form-control" id="weightBmi" required>
                            </div>
                            <div class="mb-3">
                                <label for="heightBmi" class="form-label">Height (cm):</label>
                                <input type="number" class="form-control" id="heightBmi" required>
                            </div>
                            <button type="submit" class="btn btn-primary">Calculate BMI</button>
                        </form>
                        <div id="bmiResult" class="mt-3"></div>
                    </div>
                </div>
            `;
            document.getElementById('bmiCalculatorForm').addEventListener('submit', function(event) {
                event.preventDefault();
                const weight = document.getElementById('weightBmi').value;
                const height = document.getElementById('heightBmi').value / 100;
                const bmi = weight / (height * height);
                document.getElementById('bmiResult').innerHTML = `<p>Your BMI: <strong>${bmi.toFixed(2)}</strong></p>`;
            });
            break;

        case 'percentageCalculator':
            toolContent.innerHTML = `
                <div class="card tool-card">
                    <div class="card-body">
                        <h2 class="text-center mb-4">Percentage Calculator</h2>
                        <form id="percentageCalculatorForm">
                            <div class="mb-3">
                                <label for="number" class="form-label">Number:</label>
                                <input type="number" class="form-control" id="number" required>
                            </div>
                            <div class="mb-3">
                                <label for="percentage" class="form-label">Percentage:</label>
                                <input type="number" class="form-control" id="percentage" required>
                            </div>
                            <button type="submit" class="btn btn-primary">Calculate</button>
                        </form>
                        <div id="percentageResult" class="mt-3"></div>
                    </div>
                </div>
            `;
            document.getElementById('percentageCalculatorForm').addEventListener('submit', function(event) {
                event.preventDefault();
                const number = document.getElementById('number').value;
                const percentage = document.getElementById('percentage').value;
                const result = (number * percentage) / 100;
                document.getElementById('percentageResult').innerHTML = `<p>Result: <strong>${result}</strong></p>`;
            });
            break;
    }
}

// Word Counter Functionality
function countWords() {
    const text = document.getElementById('textInput').value;
    const wordCount = text.trim().split(/\s+/).filter(word => word.length > 0).length;
    document.getElementById('wordCountResult').innerHTML = `<p>Word Count: <strong>${wordCount}</strong></p>`;
}
