let timerInterval;
        let seconds = 0;

        function updateTimer() {
            document.getElementById("timer").textContent = seconds;
        }

        document.getElementById("start").addEventListener("click", () => {
            if (!timerInterval) {
                timerInterval = setInterval(() => {
                    seconds++;
                    updateTimer();
                }, 1000);
            }
        });

        document.getElementById("pause").addEventListener("click", () => {
            clearInterval(timerInterval);
            timerInterval = null;
        });

        document.getElementById("reset").addEventListener("click", () => {
            clearInterval(timerInterval);
            timerInterval = null;
            seconds = 0;
            updateTimer();
        });