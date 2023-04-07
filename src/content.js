document.addEventListener('DOMContentLoaded', function () {
    let input = document.getElementById('colorInput');
    let colorResult = document.getElementById('colorResult');
    let colorResultHidden = document.getElementById('colorResultHidden');

    input.addEventListener('keyup', function (event) {
        colorResult.style.background = this.value;
        colorResultHidden.value = this.value;
    });

    colorResultHidden.addEventListener('change', function (event) {
        colorResult.style.background = this.value;
        input.value = this.value;
    });
    
    colorResult.addEventListener('click', function (event) {
        colorResultHidden.click();
    });

})