const resultDisplay = document.getElementById("result");
const slotElement = document.getElementById("slot");

const images = ["🪨", "📃", "✂️"]; // Fixed images for the slot

function spinSlot(selectedImage) {
  resultDisplay.textContent = ""; // Clear previous result
  slotElement.textContent = ""; // Clear slot during spin animation

  // Simulate spinning by showing random images temporarily
  const spinInterval = setInterval(() => {
    const randomIndex = Math.floor(Math.random() * images.length);
    slotElement.textContent = images[randomIndex];
  }, 100);

  // Stop spinning after 2 seconds and display the final result
  setTimeout(() => {
    clearInterval(spinInterval);
    const finalIndex = Math.floor(Math.random() * images.length);
    const finalResult = images[finalIndex];
    slotElement.textContent = finalResult;
    resultDisplay.textContent = `You got: ${finalResult} `;
  }, 2000); // Spin duration in milliseconds
}