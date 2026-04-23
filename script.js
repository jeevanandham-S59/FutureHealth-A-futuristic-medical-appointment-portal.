document.addEventListener('DOMContentLoaded', () => {
    // 1. FORM SUBMISSION
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            document.getElementById('loader').style.display = 'flex';

            localStorage.setItem('uName', document.getElementById('pName').value);
            localStorage.setItem('uDept', document.getElementById('pDept').value);
            localStorage.setItem('uDate', document.getElementById('pDate').value);
            localStorage.setItem('uTime', document.getElementById('pTime').value);

            setTimeout(() => {
                window.location.href = 'summary.html';
            }, 1500);
        });
    }

    // 2. SUMMARY DISPLAY
    const outName = document.getElementById('outName');
    if (outName) {
        outName.innerText = localStorage.getItem('uName');
        document.getElementById('outDept').innerText = localStorage.getItem('uDept');
        document.getElementById('outDate').innerText = localStorage.getItem('uDate');
        document.getElementById('outTime').innerText = localStorage.getItem('uTime');
    }
});

function downloadReceipt() {
    const element = document.getElementById('receiptArea');
    html2pdf().from(element).save();
}

function goHome() {
    localStorage.clear();
    window.location.href = 'index.html';
}