function displayCard() {
    // Get the input element where the user types the card value
    const valueInput = document.getElementById("cardValue");
    //  Get the selected suit (♠//2660->alt+x, ♥//2665->alt+x, ♦//2666->alt+x, ♣//2663->alt+x) from the dropdown
    const suit = document.getElementById("cardSuit").value;
    // Get and format the entered card value (uppercase and trimmed)
    const value = valueInput.value.toUpperCase().trim();
    // Get the container where cards will be displayed
    const output = document.getElementById("cardOutput");
    // Define valid card values
    const valid = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    // If entered value is not valid, show an alert and stop the function
    if (!valid.includes(value)) {
      alert("Enter a valid card (A, 2-10, J, Q, K)");
      return;
    } 
    // Create a new card div element
    const card = document.createElement("div");
    // Add appropriate class for the card color based on the suit
    card.className = `card ${suit === '♥' || suit === '♦' ? 'hearts' : 'spades'}`;
    // Set the text inside the card (value + suit)
    card.textContent = `${value}${suit}`;
    // Create a delete button for removing the card
    const btn = document.createElement("button");
    // Add styling class for the delete button
    btn.className = "delete-btn";
    // Set the text for the delete button (you used "*", but can also be "×")
    btn.textContent = "❌";  //274C
 // When the delete button is clicked, remove the card
    btn.onclick = () => card.remove();
    // Add the delete button inside the card element
    card.appendChild(btn);
    // Add the card to the card display container
    output.appendChild(card);
    // Clear the input field after adding the card
    valueInput.value = "";
  }