---
title: contact
visible: true
form:
    name: contact-form
    fields:
        -
            name: name
            label: 'Name & surname / company name'
            placeholder: ''
            autofocus: 'on'
            autocomplete: 'on'
            type: text
            validate:
                required: true
        -
            name: email
            label: E-mail
            placeholder: ''
            type: email
            validate:
                required: true
        -
            name: phone
            label: phone
            placeholder: ''
            type: number
            validate:
                required: true
        -
            name: message
            label: message
            placeholder: ''
            type: textarea
            validate:
                required: true
    buttons:
        -
            type: submit
            value: Submit
        -
            type: reset
            value: Reset
    process:
        -
            email:
                from: '{{ config.plugins.email.from }}'
                to: ['{{ config.plugins.email.from }}', '{{ form.value.email }}']
                subject: '[Feedback] {{ form.value.name|e }}'
                body: '{% include ''forms/data.html.twig'' %}'
        -
            save:
                fileprefix: feedback-
                dateformat: Ymd-His-u
                extension: txt
                body: '{% include ''forms/data.txt.twig'' %}'
        -
            message: 'Thank you for your feedback!'
        -
            display: thankyou
---

# contact
