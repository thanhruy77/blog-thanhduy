document.addEventListener("DOMContentLoaded", function () {
    // 1. Định nghĩa HTML cho Menu
    const navHTML = `
        <nav class="navbar">
            <div class="nav-container">
                <a href="index.html" class="nav-logo">ThanhDuy Blog</a>

                <div class="menu-toggle" id="mobile-menu">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </div>

                <ul class="nav-menu">
                    <li><a href="index.html" class="nav-links">Trang chủ</a></li>
                    <li><a href="travel.html" class="nav-links">Du Lịch</a></li>
                    <li><a href="sach.html" class="nav-links">Sách</a></li>
                    <li><a href="duan.html" class="nav-links">Dự án</a></li>
                    <li><a href="phim.html" class="nav-links">Phim</a></li>
                    <li><a href="amnhac.html" class="nav-links">Âm nhạc</a></li>
                    <li><a href="thantuong.html" class="nav-links">Thần Tượng</a></li>
                    <li><a href="loginforthanhduy.html" class="nav-links nav-btn">Đăng nhập</a></li>
                </ul>
            </div>
        </nav>
    `;

    // 2. Chèn vào trang
    const navbarPlaceholder = document.getElementById("main-navbar");
    if (navbarPlaceholder) {
        navbarPlaceholder.innerHTML = navHTML;
    }

    // 3. Xử lý sự kiện click menu Mobile
    const menuToggle = document.querySelector('#mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle) {
        menuToggle.addEventListener('click', function () {
            menuToggle.classList.toggle('is-active'); // Hiệu ứng xoay nút 3 gạch
            navMenu.classList.toggle('active');       // Hiện/Ẩn menu
        });
    }

    // 4. (Tùy chọn) Highlight trang đang mở
    const currentLocation = location.href;
    const menuItem = document.querySelectorAll('.nav-links');
    const menuLength = menuItem.length;
    for (let i = 0; i < menuLength; i++) {
        if (menuItem[i].href === currentLocation) {
            menuItem[i].classList.add("highlight");
        }
    }
});