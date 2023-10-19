"use client";

import { useRef, useState, useEffect, ReactElement } from "react";

export function ContactForm(props: {
    isOpen?: boolean
  }) {
    const [isOpen, setOpen] = useState(false);

    const getChatConversation = () => {
        let messages = document.querySelectorAll("#chatContainer > div > div")
        var convo = '';
        ([...messages]).reverse().forEach(e=>{ 
            console.log(e);
            convo += ( e as HTMLElement)?.innerText;
        })

        let hiddenTextfield = document.querySelector<HTMLTextAreaElement>("textarea[name='chatConversation']")
        if (hiddenTextfield) {
            hiddenTextfield.value = convo;
        }

    }

    useEffect(() => { 
        if (isOpen) {
            getChatConversation();
        }
    }, [isOpen]);

    const toggleContact = () => {
        setOpen(!isOpen);
    }

    return (
    <div>
    <button onClick={toggleContact}>Report a Problem</button>
        {isOpen && (
            <form name="reportABug" action="/success" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="reportABug" />
                <p>
                <label>Your Name: <input type="text" name="name" /></label>
                </p>
                <p>
                <label>Your Email: <input type="email" name="email" /></label>
                </p>
                <p>
                <label>Message: <textarea name="message"></textarea></label>
                </p>
                <textarea name="chatConversation" style={{display: "none"}}></textarea>
                <p>
                <button type="submit">Send</button>
                </p>
            </form>
        )}
    </div>
    );
  }