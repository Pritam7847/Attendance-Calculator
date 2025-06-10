// 
function calculateAttendance() {
    const attended = document.getElementById("userId").value;
    const total = document.getElementById("password").value;
    const resultDiv = document.getElementById("result");

    if (attended === "" || total === "" || total == 0) {
        resultDiv.innerHTML = `<p style="color: yellow;">Please enter valid numbers!</p>`;
        return;
    }

    const percentage = (attended / total) * 100;
    resultDiv.innerHTML = `<p>Your attendance is <strong>${percentage.toFixed(2)}%</strong></p>`;
}
