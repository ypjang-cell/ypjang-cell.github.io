// 언어 전환 기능
function switchLanguage(lang) {
    // 모든 언어 버튼의 active 클래스 제거
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // 선택된 언어 버튼에 active 클래스 추가
    document.querySelector(`[data-lang="${lang}"]`).classList.add('active');
    
    // 모든 data 속성이 있는 요소들의 텍스트 변경
    document.querySelectorAll('[data-ko], [data-en]').forEach(element => {
        if (element.hasAttribute(`data-${lang}`)) {
            element.textContent = element.getAttribute(`data-${lang}`);
        }
    });
}

// 언어 버튼 이벤트 리스너
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const lang = this.getAttribute('data-lang');
        switchLanguage(lang);
    });
});

// 프로필 이미지 호버 효과
const profileImage = document.querySelector('.profile-image');
profileImage.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.05)';
    this.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.4)';
    this.style.transition = 'all 0.3s ease';
});

profileImage.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
    this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
});
