"use client";
import {Label} from '@/components/ui/label';
import {Input} from '@/components/ui/input';
import {buttonVariants} from '@/components/ui/button';
import {useState} from "react";
import {Textarea} from "@/components/ui/textarea";
import {ChatBubbleIcon, DesktopIcon, GitHubLogoIcon, LinkedInLogoIcon} from "@radix-ui/react-icons";

const MessageForm = () => {
    const [state, setState] = useState<string>();

    async function handleOnSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const formData = Object.fromEntries(new FormData(e.currentTarget));

        setState('loading');

        await fetch('/api/email', {
            method: 'POST',
            body: JSON.stringify(formData)
        });

        setState('ready');
    }

    return (
        <section className="container grid h-full items-center gap-6 pb-8 pt-6 md:py-10">
            <div className="flex flex-col md:flex-row h-full max-w-[980px] items-center justify-center mx-auto">
                <div className="md:mr-16"
                     style={{fontSize: '1.5em', marginLeft: '6px', lineHeight: '2'}}>
                    <h2>Contactgegevens</h2>
                    <p style={{display: 'flex', alignItems: 'center'}}><ChatBubbleIcon
                        style={{marginRight: '10px'}}/> 0493455285</p>

                    <p style={{display: 'flex', alignItems: 'center'}}><LinkedInLogoIcon
                        style={{marginRight: '10px'}}/> <a
                        href="https://www.linkedin.com/in/quinten-vercruysse/"> quinten-vercruysse</a></p>

                    <p style={{display: 'flex', alignItems: 'center'}}><GitHubLogoIcon
                        style={{marginRight: '10px'}}/> <a
                        href="https://www.github.com/Quivesy2/"> Quivesy2</a></p>
                </div>

                <div className="flex flex-col">
                <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl mb-5">
                        Contacteer mij via dit formulier.
                    </h1>
                    <form className="flex flex-col gap-4" onSubmit={handleOnSubmit}>
                        <Label htmlFor="firstName">Uw voornaam</Label>
                        <Input id="firstName" name="firstName" required/>
                        <Label htmlFor="email">
                            Uw e-mail (nodig om contact met u op te nemen).</Label>
                        <Input id="email" name="email" type="email" required/>
                        <Label htmlFor="message">Uw bericht</Label>
                        <Textarea id="message" name="message" required></Textarea>
                        <button className={buttonVariants()} disabled={state === 'loading'}>
                            Verstuur
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default MessageForm;
