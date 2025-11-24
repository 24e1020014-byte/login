document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;
    const errorMsg = document.getElementById('error-message');

    if (usernameInput === 'admin' && passwordInput === '123') {
        // --- ĐOẠN ĐÃ SỬA ---
        // Đã xóa dòng: alert('Đăng nhập thành công!');
        
        // Chuyển hướng ngay lập tức
        // Lưu ý: Hãy điền đúng tên file trang chủ của bạn (ví dụ: index.html hoặc home.html)
        window.location.href = 'home.html'; 
        // -------------------
    } else {
        errorMsg.style.display = 'block';
        errorMsg.innerText = 'Tên đăng nhập hoặc mật khẩu không đúng!';
    }
});