document.addEventListener('DOMContentLoaded', function() {
    // Initialisation d'EmailJS avec votre clé publique
    emailjs.init({
        publicKey: "aeA0gPE8eZEdNgiE6U6vF",
        blockHeadless: false, // Nécessaire pour le développement local
    });

    const form = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Désactiver le bouton pendant l'envoi
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Envoi en cours...';

            // Préparer les paramètres pour EmailJS
            const templateParams = {
                from_name: document.getElementById('name').value,
                from_email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value,
                reply_to: document.getElementById('email').value // Ajout du champ reply_to
            };

            console.log('Tentative d\'envoi avec les paramètres:', templateParams);

            // Envoyer l'email via EmailJS
            emailjs.send('service_nrzi1q7', 'template_mzj562r', templateParams)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    submitBtn.innerHTML = '<i class="fa fa-check"></i> Message envoyé!';
                    setTimeout(() => {
                        window.location.href = 'merci.html';
                    }, 1000);
                })
                .catch(function(error) {
                    console.error('Erreur lors de l\'envoi:', error);
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = '<i class="fa fa-paper-plane"></i> Envoyer le message';
                    alert('Erreur lors de l\'envoi du message. Détails dans la console.');
                });
        });
    }
}); 