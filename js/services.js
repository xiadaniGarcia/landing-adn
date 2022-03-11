$('#whatsApp').floatingWhatsApp({
    phone: '+5213324955112',
    popupMessage: 'Hola, ¿Cómo te puedo ayudar?',
    showPopup: true
});


window.addEventListener("load", function() {
    const form = document.getElementById('my-form');
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        const data = new FormData(form);
        const action = e.target.action;
        fetch(action, {
            method: 'POST',
            body: data,
        })
            .then(() => {
                alert("Pronto te contáctaremos!");
            })
    });
});