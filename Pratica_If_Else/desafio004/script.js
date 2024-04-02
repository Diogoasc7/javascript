function contar() {
    let num = document.getElementById('num').value;
    let tab = document.getElementById('tab');
    
    if (num.length == 0 || isNaN(num)) {
        alert('Digite um número válido');
    } else {
        num = Number(num);
        tab.innerHTML = ''; // Limpa o conteúdo anterior do select
        
        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option');
            item.text = `${num} x ${c} = ${num * c}`;
            tab.appendChild(item);
        }
    }
}
