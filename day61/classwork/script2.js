let count = 0;

        function changeCount(peack, color) {
            if ((count + peack > 100) || (count + peack < -100)) {
                alert("ღირებულება უნდა იყოს -100-დან 100-მდე!");
                return;
            }
            count += peack;
            updateCounter(color);
            document.getElementById('warning').style.display = 'none';
        }

        function resetCounter() {
            if (count === 0) {
                document.getElementById('warning').style.display = 'block';
                return;
            }
            count = 0;
            updateCounter();
        }

        function updateCounter(color) {
            const counterElement = document.getElementById('counter');
            counterElement.textContent = count;
            counterElement.className = color || '';
        }