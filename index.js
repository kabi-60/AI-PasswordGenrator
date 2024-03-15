// Function to generate random password
function generatePassword() {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}|:<>?-=[];,.";
    let password1 = "";
    let password2 = "";
    for (let i = 0; i < 10; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password1 += charset[randomIndex];
    }
    for (let i = 0; i < 12; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password2 += charset[randomIndex];
    }
    document.getElementById("firstEle").textContent = password1;
    document.getElementById("secondEle").textContent = password2;
    
    // Add generated passwords to history list
    addToHistory(password1);
    addToHistory(password2);
}

// Function to add password to history list
function addToHistory(password) {
    // Create a new list item element
    const li = document.createElement("li");
    li.textContent = password;
    li.classList.add("t", "lg:w-1/2", "lg:ml-24", "mb-2", "text-2xl", "text-[#008E97]","cursor-pointer","w-[82px]","mx-auto" );
    
    // Append the new list item to the history list
    const historyList = document.getElementById("historyList");
    
    // Check if the number of items in the history list exceeds 7
    if (historyList.children.length >= 7) {
        // Remove the oldest item
        historyList.removeChild(historyList.firstChild);
    }
    
    // Append the new list item to the history list
    historyList.appendChild(li);
    
    // Add event listener for the new list item
    li.addEventListener("click", function() {
        copyPassword(password);
    });
}

// Function to copy password to clipboard
function copyPassword(password) {
    // Create a temporary textarea to copy the password
    const textarea = document.createElement("textarea");
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);

    // Alert or indicate successful copy
    alert("Password copied to clipboard: " + password);
}

// Event listener for generating password button
document.getElementById("btn").addEventListener("click", generatePassword);

// Add event listeners for each history list item
document.querySelectorAll("#historyList li").forEach(item => {
    item.addEventListener("click", function() {
        copyPassword(item.textContent);
    });
});

// Call generatePassword function when the button is clicked
document.getElementById("btn").addEventListener("click", generatePassword);

// Add event listeners for copying passwords from firstEle and secondEle
document.getElementById("firstEle").addEventListener("click", function() {
    copyPassword(document.getElementById("firstEle").textContent);
});

document.getElementById("secondEle").addEventListener("click", function() {
    copyPassword(document.getElementById("secondEle").textContent);
});

// Function to copy password to clipboard
function copyPassword(password) {
    // Create a temporary textarea to copy the password
    const textarea = document.createElement("textarea");
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);

    // Alert or indicate successful copy
    alert("Password copied to clipboard: " + password);
}
