function handleButtonClick(option) {
    console.log("Button clicked:", option);
    const messages = document.getElementById("chatbot-messages");

    const userMessage = document.createElement("div");
    userMessage.classList.add("message", "user-message");
    userMessage.textContent = option;
    messages.appendChild(userMessage);
    scrollToBottom();

    const typingBubble = document.createElement("div");
    typingBubble.classList.add("message", "bot-message", "typing");

    const dotsContainer = document.createElement("div");
    dotsContainer.classList.add("typing-dots");

    for (let i = 0; i < 3; i++) {
        const dot = document.createElement("div");
        dot.classList.add("typing-dot");
        dotsContainer.appendChild(dot);
    }

    typingBubble.appendChild(dotsContainer);
    messages.appendChild(typingBubble);
    scrollToBottom();

    setTimeout(() => {
        messages.removeChild(typingBubble);

        let botMessage = "";
                

switch (option) {
    case "Option 1️⃣":
        const botResponse = document.createElement("div");
        botResponse.classList.add("message", "bot-message");
        botResponse.innerHTML = "<strong>Awesome!</strong> 👏 You're now interacting with our live demo chatbot. I'll show you some of the helpful features I can offer your business — from answering customer questions to pulling data from your site and more. Feel free to explore!";
        messages.appendChild(botResponse);
        scrollToBottom();
        return;


        case "Beer Menu🍺":
            botMessage = "Now you're talking!😏 <strong>Let's see what we have available...</strong><br> What're you in the mood for?";
            break;        
            case "Features ⚡":
                botMessage = 'Great choice! 🚀 Let me show you some <strong>powerful features</strong> this chatbot can offer your business.';
                break;
            case "Taproom 📍":
                botMessage = `Our taproom is open <strong>Wednesday-Sunday from 4pm-11:30pm!</strong><br>
                <strong>Located at:</strong>⬇️<br> 22 Your Ave. YourCity, YourState, 12345<br>
                <strong>See you soon!</strong>🍻`;
                break;                                
            case "Food Menu🍕":
                botMessage = "Hungry, are we?🍟 Whether you're craving crispy bites, cheesy delights, or something sweet to snack on, we've got a plate <strong>(or three)</strong> waiting for you. <a href='food.html' target='_blank' style='color: #F4A261; text-decoration: underline;'>Dig in here and explore the goods!👈</a>";
                break;                
            case "IPA🌿":
                botMessage = 'Ah, an IPA fan! 🍺 Here comes a hoppy ride — bold, bitter, and bursting with flavor. Want to see what we’ve got on tap?<br> Check out our <strong>IPA selection</strong> <a href="ipa.html" target="_blank" style="color: #F4A261; text-decoration: underline;">here!</a> 🔍';
                break;                
            case "Ales🌾":
                botMessage = 'Ah, ales — the cozy campfire of the beer world 🍂 From nutty browns to smooth ambers, you are in for a malt-forward journey. Ready to explore our <strong>ale lineup</strong>? Let’s pour into the <a href="ales.html" target="_blank" style="color: #F4A261; text-decoration: underline;">details</a>! 🍺'
                break;
            case "Lagers❄️":
                botMessage = "Ah, lagers — the crisp, refreshing giants of the beer world! ❄️🍺 Whether you're into light and clean or rich and malty, there's a lager for every taste. Ready to chill and explore our <strong>lager selection</strong>? Check it out <a href='lagers.html' target='_blank' style='color: #F4A261; text-decoration: underline;'>here</a>! 🍻";
                break;                
            case "Non-Alcoholic🚫":
                botMessage = "Looking for a refreshing sip without the buzz? 🍹 We've got a variety of delicious <strong>non-alcoholic options</strong> just for you! Whether you're relaxing or on the go, we've got something tasty to keep you refreshed. Let's <a href='na.html' target='_blank' style='color: #F4A261; text-decoration: underline;'>explore the selection!</a> 🌱";
                break;
            case "Events🗓️":
                botMessage = "Mark your calendars! 🗓️ From <strong>live music</strong> nights to <strong>trivia throwdowns</strong>, there's always something brewing around here. Ready to see what’s coming up? Check out the good times ahead right <a href='events.html' target='_blank' style='color: #F4A261; text-decoration: underline;'>here</a>! 🎊";
                break;                
            default:
                botMessage = "I'm not sure how to respond to that. Please choose a valid option.";
                break;
        }

        const botResponse = document.createElement("div");
        botResponse.classList.add("message", "bot-message");
        botResponse.innerHTML = botMessage;
        messages.appendChild(botResponse);
        scrollToBottom();

        if (option === "Beer Menu🍺") {
            setTimeout(() => {
                const buttonContainer = document.createElement("div");
                buttonContainer.classList.add("button-container");
                buttonContainer.appendChild(createButton("IPA🌿"));
                buttonContainer.appendChild(createButton("Ales🌾"));
                buttonContainer.appendChild(createButton("Lagers❄️"));
                buttonContainer.appendChild(createButton("Non-Alcoholic🚫"));
                messages.appendChild(buttonContainer);
                scrollToBottom();
            }, 1000);
        }

    }, 1000);
}

function createButton(label, url = null) {
    let button;

    if (url) {
        button = document.createElement("a");
        button.href = url;
        button.target = "_blank";
        button.classList.add("chatbot-btn", "chatbot-link-btn");
    } else {
        button = document.createElement("button");
        button.classList.add("chatbot-btn");
        button.onclick = () => handleButtonClick(label);
    }

    button.textContent = label;
    return button;
}

function greetUser() {
    const messages = document.getElementById("chatbot-messages");

// First greeting message
const greetingMessage1 = document.createElement("div");
greetingMessage1.classList.add("message", "bot-message");
greetingMessage1.innerHTML = "Hey there!🍻 Welcome to <strong>MudHornet Brewing Company</strong>!";
messages.appendChild(greetingMessage1);

// Optional delay for realism (500ms)
setTimeout(() => {
    // Second follow-up message
    const greetingMessage2 = document.createElement("div");
    greetingMessage2.classList.add("message", "bot-message");
    greetingMessage2.innerHTML = "My name is <strong>Hops</strong>! I'll be your virtual-assistant during your visit today! <strong>Let's get started!</strong> 🤖💬";
    messages.appendChild(greetingMessage2);
    scrollToBottom();
}, 500); // Adjust delay as needed

scrollToBottom();

}


window.onload = greetUser;

function scrollToBottom() {
    const chatBody = document.querySelector(".chat-body");
    if (chatBody) {
        chatBody.scrollTo({
            top: chatBody.scrollHeight,
            behavior: "smooth"
        });
    }
    
}