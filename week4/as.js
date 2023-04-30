<script>
      const options = ['Rock', 'Paper', 'Scissors'];

      // Function to get a random integer learned from book JavaScript for Beginners 
      function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      // Function to handle player's choice and compare with computer's choice
      function playGame(playerChoice) {
        const computerChoice = getRandomInt(0, 2);
        let result = '';
        if (playerChoice === computerChoice) {
          result = 'Tie!';
        } else if (playerChoice === 0 && computerChoice === 2 ||
                   playerChoice === 1 && computerChoice === 0 ||
                   playerChoice === 2 && computerChoice === 1) {
          result = 'You win!';
        } else {
          result = 'Computer wins!';
        }
        const message = `You chose ${options[playerChoice]}. Computer chose ${options[computerChoice]}. ${result}`;
        document.getElementById('result').textContent = message;
      }

      // Event listeners for the buttons
      document.getElementById('rock').addEventListener('click', function() {
        playGame(0);
      });
      document.getElementById('paper').addEventListener('click', function() {
        playGame(1);
      });
      document.getElementById('scissors').addEventListener('click', function() {
        playGame(2);
      });
    </script>
