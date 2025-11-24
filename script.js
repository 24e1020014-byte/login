// Lắng nghe sự kiện khi người dùng bấm nút Đăng nhập (submit form)
document.getElementById('loginForm').addEventListener('submit', function(event) {
    
    // 1. Ngăn chặn hành động mặc định (load lại trang) của Form
    event.preventDefault();

    // 2. Lấy giá trị từ ô input
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;
    const errorMsg = document.getElementById('error-message');

    // 3. Kiểm tra điều kiện theo đề bài
    // Tên đăng nhập: admin, Mật khẩu: 123
    if (usernameInput === 'admin' && passwordInput === '123') {
        // Nếu đúng: Chuyển hướng sang trang chủ
        alert('Đăng nhập thành công!');
        window.location.href = 'index.html'; 
    } else {
        // Nếu sai: Hiện thông báo lỗi
        errorMsg.style.display = 'block';
        errorMsg.innerText = 'Tên đăng nhập hoặc mật khẩu không đúng!';
    }
});