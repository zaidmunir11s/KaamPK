import React from 'react'
import { View, Text, TextInput } from 'react-native'
import RNSmtpMailer from "react-native-smtp-mailer";


export default function emailtest(to, code) {
    RNSmtpMailer.sendMail({
        mailhost: "smtp.gmail.com",
        port: "465",
        ssl: true,
        username: "kaaamPk",
        password: "Kaampakistan1",
        from: "kaaampk@gmail.com",
        recipients: to,
        subject: 'Your Verification Code from KaamPk',
        htmlBody: "<p>" + code + "</p>",
        attachmentPaths: [],
        attachmentNames: [],
        attachmentTypes: []
    })
        .then(success => {

            alert("Message sent successfully. We will respond you within next 2 working days. Thank you for your patience.");
        })
        .catch(err => {

            alert("Could not send message due to some error. Please contact us through our helpline Number. " + err);
        });


}