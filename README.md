# Week 8 Practical 1: sessionStorage
This practical includes a guided tutorial for sessionStorage and some practice exercises. In stage 1, you will see how you can use sessionStorage to pass data between pages. In stage 2, you will create a counter application that uses sessionStorage to save different counter states across multiple tabs. The third stage will help you to make a plan for how you will store data in your assessment.

## Stage 1: Passing data between pages
Sometimes, you might want to pass data from one HTML page to another but you don't need to store it in the browser long term. `sessionStorage` is useful for this.
1. Create a folder for this exercise then add two HTML files called index.html and preview.html.
2. Create a Javascript file called storeText.js and link it to index.html.
3. Create another Javascript file called readText.js and link it to preview.html.
4. Add links in the HTML pages so that you can navigate between them.
5. In index.html, add a `textarea` element. In the associated Javascript file write some code to store the contents of the textarea in `sessionStorage` every time there is an input event. It should look something like this:
```
document.getElementById("your-textarea-id").addEventListener("input", function (event) {
    // Your code to store the text area contents
})
```
6. In preview.html, add a paragraph element. In the associated Javascript file write some code to get the saved text out of `sessionStorage` and display it in the paragraph. Don't forget to check that the saved text is not `null` before displaying it.
7. Test your code by running index.html, typing something in the textarea, then navigating to see preview.html to see if is displayed. 
8. If you navigate back to index.html, you may see that the textarea is empty. Modify your code so that the textarea will display any previously saved text. Try not to repeat any code you've already written! 


## Stage 2: sessionStorage counter
1. Create a folder for this exercise then add an HTML file and a JavaScript file. Connect the JS file to the HTML file.
2. In the HTML file, add a text input with id "name" and a "save" button. Also add an element with id "currentValue" that will display the current value of the counter. Below this element, add a button called "count".
3. You will store the counter information in as a single object in `sessionStorage`. Each object will have the following properties: `name` and `value`. Choose a key name for the stored counter (e.g. "counter").
4. Write a function called `getCounter()` that returns the object stored at the key you chose in step 3, if it exists. If there is no saved counter, the function should return an object with default values for the `name` and `value` properties. Your function should look something like this:
```
function getCounter() {
    const storedCounter = sessionStorage.getItem("counter");
    if (storedCounter !== null) {
        // Don't forget to convert saved data to JSON!
        return JSON.parse(storedCounter);
    } else {
        return {
            "name": "default counter",
            "value": "0",
        }
    }
}
```
5. At the bottom of your JavaScript file, call the `getCounter()` function and use its return value to populate the name input field and the `innerText` of the element that will display the counter value. You can see an example below (`nameInput` is a reference to the name input text field and `valueOut` is a reference to the "currentValue" element). We haven't implemented saving anything to storage yet so run your code to check that the default values are displayed in the right places.
```
const savedCounter = getCounter();
nameInput.value = savedCounter.name;
valueOut.innerText = savedCounter.value;
```
6. Write a function called `saveCounter()` that creates an object literal with two properties, `name` and `value`. These properties should be populated with the value of the name input field and the `innerText` of the "currentValue" element. Save this object literal to `sessionStorage` using the key you chose in step 3. Your function should look something like this:
```
function saveCounter() {
    sessionStorage.setItem("counter", JSON.stringify({
        "name": nameInput.value,
        "value": valueOut.innerText
    }));
}
```
7. Add an event listener to call `saveCounter()` when the save button is clicked.
8. Test your code by giving the counter a new name then clicking the save button. If you refresh the page, you should see the saved name in the input field. If you open the URL in a new tab, you should see the default name. If anything looks odd, use Chrome Developer Tools to view the tab's stored data (go to the Application tab in Developer Tools, click "Sesssion Storage" and select the URL for the current tab). You can manually delete the stored data if necessary.
9. Finally, write code to increment the value of the counter when the count button is pressed. The value should be updated in `sessionStorage` and on screen. The implementation details are left for you to figure out. Hint: the value of the counter retrieved from storage and displayed on screen will be a string. Use the `parseInt()` function to convert it to a number before changing it's value.

## Stage 3: Choose a data storage approach for your assessment
By now, you should have a rough idea of what you're building for the assessment, and the type of data you want to store. With this practical, you have tried both data storage approaches that are available to you. Now is a good time to figure out which approach will work for your assessment. 

- `sessionStorage` - best for storing "work-in-progress" data such as partially completed forms or blog posts. Remember that the data is tab-specific and will be removed once the tab is closed. `sessionStorage` is not suitable for data that should be remembered across multiple sessions.
- `localStorage` - best for storing simple data that should be remembered across multiple sessions e.g. user preferences. `localStorage` can only store data that can be "stringified", such as JSON objects, but not images / files.

If in doubt, talk it through with the module staff.