// =================================================================
// 1. DATA TRANSACTIONS & VARIABLES SETUP
// =================================================================
// No API key needed anymore — Puter.js gives free AI access directly.

var affirmationQuotes = [
    '"Your worth is not defined by a single exam score. You are growing, learning, and capable of incredible things."',
    '"Take a deep breath. You do not have to know everything today. Just focus on the very next little step."',
    '"Mistakes are just proof that you are trying so hard. Be proud of yourself for showing up today."',
    '"Your peace of mind matters so much more than a number on a page. Be gentle with your tired mind."',
    '"You have survived tough exam weeks before, and you will make it through this one beautifully too. Trust yourself."'
];
var currentIndex = 0;

function rotateAffirmation() {
    currentIndex = (currentIndex + 1) % affirmationQuotes.length;
    var display = document.getElementById("affirmationDisplay");
    if (display) {
        display.innerText = affirmationQuotes[currentIndex];
    }
}

function appendMessage(textString, styleClassName) {
    var chatBox = document.getElementById("chatBox");
    if (!chatBox) return;

    var messageBubble = document.createElement("div");
    messageBubble.className = "message " + styleClassName;
    messageBubble.innerText = textString;

    chatBox.appendChild(messageBubble);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function toggleChat() {
    var chatWindow = document.getElementById("chatContainer");
    if (chatWindow) {
        chatWindow.classList.toggle("d-none");
    }
}

// =================================================================
// 2. SECURE AI CONNECTION CONTROLLERS
// =================================================================
async function callAI(studentText) {
    var lowerText = studentText.toLowerCase();

    if (lowerText.includes("suicide") || lowerText.includes("end my life") || lowerText.includes("kill myself")) {
        return "You are not alone in this. Please connect right away with Tele-MANAS at 14416 or the Vandrevala Foundation at +91 9999 666 555. Help is here for you.";
    }

    var baseInstructions = "You are DinMitra, a deeply empathetic, warm, and protective friend to Indian students preparing for competitive exams. Speak like a supportive peer who wants to give them a comforting hug. Start your responses informally like 'Hey buddy', 'Hello friend', or 'Hey there'. Keep your response very brief, conversational, and limited to 2 or 3 sentences max.";
    try {
        var response = await puter.ai.chat(baseInstructions + "\n\nStudent: " + studentText);

        // Puter.js returns an object; the actual reply text lives in response.message.content
        if (response && response.message && response.message.content) {
            return response.message.content;
        }
        return String(response);

    } catch (error) {
        console.error("AI connection error:", error);
        return "I had a tiny hiccup connecting to the network. Take a deep breath and let's try that again.";
    }
}

async function sendMessage() {
    var inputField = document.getElementById("userInput");
    if (!inputField) return;

    var messageText = inputField.value.trim();
    if (messageText === "") return;

    appendMessage(messageText, "user-message");
    inputField.value = "";

    appendMessage("DinMitra is typing...", "ai-message");
    var aiReply = await callAI(messageText);

    var chatBox = document.getElementById("chatBox");
    if (chatBox && chatBox.lastChild) {
        chatBox.removeChild(chatBox.lastChild);
    }

    appendMessage(aiReply, "ai-message");
}

async function sendMood(moodValue) {
    var chatWindow = document.getElementById("chatContainer");
    if (chatWindow) {
        chatWindow.classList.remove("d-none");
    }

    appendMessage("I am feeling " + moodValue.toLowerCase() + " today.", "user-message");
    appendMessage("DinMitra is thinking...", "ai-message");

    var aiReply = await callAI("The user just updated their application dashboard mood state tracker badge to: " + moodValue);

    var chatBox = document.getElementById("chatBox");
    if (chatBox && chatBox.lastChild) {
        chatBox.removeChild(chatBox.lastChild);
    }

    appendMessage(aiReply, "ai-message");
}

// =================================================================
// 3. CLEAN EVENTS WIRE-UP ON MOUNT
// =================================================================
document.addEventListener("DOMContentLoaded", function() {
    // 1. Navigation Text Trigger
    var navTalkAI = document.getElementById("navTalkAI");
    if (navTalkAI) {
        navTalkAI.addEventListener("click", function(e) {
            e.preventDefault();
            toggleChat();
        });
    }

    // 2. Main Floating Button Trigger
    var chatToggleMain = document.getElementById("chatToggleMain");
    if (chatToggleMain) {
        chatToggleMain.addEventListener("click", toggleChat);
    }

    // 3. Inside-Chat Close Button Trigger
    var chatCloseBtn = document.getElementById("chatCloseBtn");
    if (chatCloseBtn) {
        chatCloseBtn.addEventListener("click", toggleChat);
    }

    // 4. Affirmation Box Click Tracker
    var hugCard = document.getElementById("hugAffirmationCard");
    if (hugCard) {
        hugCard.addEventListener("click", rotateAffirmation);
    }

    // 5. Submit Message Click Trigger
    var sendMsgBtn = document.getElementById("sendMsgBtn");
    if (sendMsgBtn) {
        sendMsgBtn.addEventListener("click", sendMessage);
    }

    // 6. Input Keyboard Enter Key Trigger
    var userInput = document.getElementById("userInput");
    if (userInput) {
        userInput.addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                sendMessage();
            }
        });
    }

    // 7. Automated Loop for Mood Grid Buttons
    var moodButtons = document.querySelectorAll(".btn-mood");
    moodButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            var selectedMood = this.getAttribute("data-mood");
            sendMood(selectedMood);
        });
    });
});