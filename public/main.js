// ここからコードを書いてください
// タブ切り替え機能
document.addEventListener('DOMContentLoaded', function() {
    // すべてのタブアイテムを取得
    const tabItems = document.querySelectorAll('.tab-item, .sidebar-home');
    
    // タブクリック時の処理
    tabItems.forEach(function(tab) {
        tab.addEventListener('click', function(e) {
            e.preventDefault();
            
            // クリックされたタブのdata-tab属性を取得
            const targetTab = this.getAttribute('data-tab');
            
            // すべてのコンテンツセクションを非表示
            const allSections = document.querySelectorAll('.content-section');
            allSections.forEach(function(section) {
                section.style.display = 'none';
            });
            
            // 選択されたセクションのみ表示
            const targetSection = document.getElementById(targetTab);
            if (targetSection) {
                targetSection.style.display = 'block';
            }
        });
    });
    
    // 変換機能を初期化
    setupConverter();
});

// 単位変換機能
function setupConverter() {
    const input = document.querySelector('.converter-input');
    const fromSelect = document.querySelector('.converter-from');
    const toSelect = document.querySelector('.converter-to');
    const result = document.querySelector('.converter-result');
    
    // 単位名を完全名に変換
    const unitNames = {
        'km': 'kilometer',
        'miles': 'mile'
    };
    
    function convert() {
        const value = parseFloat(input.value);
        
        if (isNaN(value)) {
            result.textContent = 'Please enter a valid number';
            return;
        }
        
        const from = fromSelect.value;
        const to = toSelect.value;
        
        let convertedValue;
        
        if (from === 'km' && to === 'miles') {
            convertedValue = value * 0.621371;
        } else if (from === 'miles' && to === 'km') {
            convertedValue = value * 1.60934;
        } else {
            convertedValue = value; // 同じ単位
        }
        
    result.textContent = `${value} ${unitNames[from]} = ${convertedValue.toFixed(3)} ${unitNames[to]}`;  
    }
    
    input.addEventListener('input', convert);
    fromSelect.addEventListener('change', convert);
    toSelect.addEventListener('change', convert);
}