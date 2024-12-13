let count = 0;
        const counterElement = document.getElementById('counter');

        function increment() {
            count++;
            updateCounter('green');
        }

        function decrement() {
            count--;
            updateCounter('red');
        }

        function resetCounter() {
            count = 0;
            updateCounter();
        }

        function updateCounter(color) {
            counterElement.textContent = count;
            counterElement.className = color || '';
        }