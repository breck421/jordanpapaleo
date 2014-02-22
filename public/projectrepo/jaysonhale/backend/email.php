<?php
function sanitizeInput($input) {
    $sanitized_string = stripslashes($input);
    return htmlentities($sanitized_string);
}

function get_post($var) {
    $postvar = $_POST[$var];
    return sanitizeInput($postvar);
}

function send_email($email, $message) {

        $date = date("Y-m-d");
        $to = "papaleobus@gmail.com";
        // $to = "$email";
        $subject = "Test Data";
        $header = "From: $email\r\n";
        $headers .= "MIME-Version: 1.0\r\n";
        $header .= "Content-Type: text/html\r\n";
        $body = <<<EMAILBODY
                <html>
                <header></header>
                <body>
                <table>
                    <tbody>
                    <tr>
                        <th>Email</th>
                        <td>$email</td>
                    </tr>
                    <tr>
                        <th>Message</th>
                        <td>$message</td>
                    </tr>
                    <tr>
                        <th>Date</th>
                        <td>$date</td>
                    </tr>
                    <tr>
                        <th>Name</th>
                        <td>$name</td>
                    </tr>
                    </tbody>
                </table>
                </body>
                </html>
EMAILBODY;

        return mail($to, $subject, $body, $header);
}

$message = get_post("name");
$email = get_post("email");
$message = get_post("message");

if(filter_var($email, FILTER_VALIDATE_EMAIL) && send_email($email, $message)) {
    echo $email;
    echo "<br />";
    echo $message;
    echo "<br />";
    echo $name;
}

else {
    echo "$email is not a valid email address or error sending email";
}

?>