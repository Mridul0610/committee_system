import React from "react";

export default function Phone(){
    var MyClass = React.createClass({
    render: function() {
      return (
        <div>
          ajax = true;
          $contact-&gt;to = $receiving_email_address;
          $contact-&gt;from_name = $_POST['name'];
          $contact-&gt;from_email = $_POST['email'];
          $contact-&gt;subject = $_POST['subject'];
          // Uncomment below code if you want to use SMTP to send emails. You need to enter your correct SMTP credentials
          /*
          $contact-&gt;smtp = array(
          'host' =&gt; 'example.com',
          'username' =&gt; 'example',
          'password' =&gt; 'pass',
          'port' =&gt; '587'
          );
          */
          $contact-&gt;add_message( $_POST['name'], 'From');
          $contact-&gt;add_message( $_POST['email'], 'Email');
          $contact-&gt;add_message( $_POST['message'], 'Message', 10);
          echo $contact-&gt;send();
          ?&gt;
        </div>
      );
    }
  });}

