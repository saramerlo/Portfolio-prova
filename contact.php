<?php
// Verifica se il metodo di richiesta è POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Verifica se sono stati inviati i dati del modulo
    if (isset($_POST['inputName']) && isset($_POST['inputEmail']) && isset($_POST['Textarea'])) {
        // Recupera i dati inviati dal modulo
        $name = $_POST['inputName'];
        $email = $_POST['inputEmail'];
        $message = $_POST['Textarea'];
        
        // Email di destinazione
        $to = "merlo.sara94@gmail.com";

        // Oggetto dell'email
        $subject = "Messaggio da $name";

        // Corpo dell'email
        $body = "Nome: $name\n";
        $body .= "Email: $email\n\n";
        $body .= "Messaggio:\n$message";


        // Invia l'email
        if (mail($to, $subject, $body, $headers)) {
            // Se l'email è stata inviata con successo, puoi fare qualcosa qui
            echo "Grazie per averci contattato! Ti risponderemo al più presto.";
        } else {
            // Se si è verificato un errore durante l'invio dell'email
            echo "Errore nell'invio del messaggio. Riprova più tardi.";
        }
    } else {
        // Se non sono stati forniti tutti i campi richiesti
        echo "Per favore, fornisci tutti i dettagli richiesti nel modulo.";
    }
} else {
    // Se il metodo di richiesta non è POST
    echo "Metodo di richiesta non consentito.";
}
?>