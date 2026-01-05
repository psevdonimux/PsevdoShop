const products = {
	'VPN VLESS': `
Надежный VPN на базе протокола VLESS для обхода блокировок.

🌍 1 страна 🇳🇱 Нидерланды - 50₽ / в месяц

🌍 11 стран: - 100 ₽ / в месяц
1. 🇳🇱 Нидерланды.
2. 🇷🇺 Россия.
3. 🇺🇸 США.
4. 🇵🇱 Польша.
5. 🇬🇧 Великобритания.
6. 🇩🇪 Германия.
7. 🇰🇿 Казахстан
8. 🇮🇹 Италия.
9. 🇯🇵 Япония.
10. 🇫🇮 Финляндия.
11. 🇸🇪 Швеция.
`,
	'Spotify Premium Individual': `
Ваш личный аккаунт (новый)
• Без рекламы: непрерывное прослушивание треков.
• Оффлайн-режим: скачивание музыки для доступа без интернета.
• Максимальное качество: стриминг в 320 кбит/с.
• Безлимитные пропуски: возможность переключать любое количество песен.
`
};
const modal = document.getElementById('modal');
const modalImg = modal.querySelector('.modal-img');
const modalTitle = modal.querySelector('.modal-title');
const modalDesc = modal.querySelector('.modal-desc');
document.onclick = (e) => {
	const btn = e.target.closest('.product-card .buy-btn');
	if(btn){
		const card = btn.closest('.product-card');
		const title = card.querySelector('.product-title').textContent;
		modalImg.src = card.querySelector('.product-img').src;
		modalTitle.textContent = title;
		modalDesc.textContent = products[title] || 'Описание отсутствует';
		return modal.showModal();
	}
	if(e.target.classList.contains('contact')) location.href = 'https://t.me/psevdonimux_bot';
	if(e.target === modal) modal.close();
};