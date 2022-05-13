import React, { useState } from "react";
import Head from "next/head";

import { AuthLink, Input, Button, Gap } from "@components/atoms";
import { Form, Footer } from "@components/molecules";

let inputInvalid = [];

function checkConfirmPassword(thisConfirmPassword, passwordRelated) {
    const isPasswordNotSame = thisConfirmPassword !== passwordRelated;

    if (passwordRelated && thisConfirmPassword) {
        return isPasswordNotSame;
    }
}

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [password, setPassword] = useState("");
    const [validatePassword, setValidatePassword] = useState("");
    const [isError, setIsError] = useState(false);

    return (
        <div className="h-full min-h-screen bg-primary text-white flex flex-col">
            <Head>
                <title>Toqcer | Register</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex-1 flex flex-col items-center">
                <h1 className="text-orange font-bold text-4xl my-14">ToqCer</h1>
                {/* Form */}
                <div className="max-w-2xl w-full">
                    <Form title="Sign Up" autoComplete="off">
                        <div className="px-2">
                            <Input
                                label="name"
                                placeholder="Name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                minLength="5"
                                required
                            />
                            <Gap height={15} />
                            <Input
                                label="email"
                                placeholder="Email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <Gap height={15} />
                            <Input
                                label="Telephone"
                                placeholder="Masukan Nomor Telephone"
                                type="tel"
                                value={telephone}
                                onInput={(e) => {
                                    e.target.value = e.target.value
                                        .replace(/[^0-9.]/g, "")
                                        .replace(/(\..*?)\..*/g, "$1");
                                    setTelephone(e.target.value);
                                }}
                                required
                            />
                            <Gap height={15} />
                            <Input
                                label="password"
                                placeholder="Password"
                                type="password"
                                value={password}
                                minLength="8"
                                onChange={(e) => setPassword(e.target.value)}
                                autoComplete="new-password"
                                id="new-password"
                                onBlur={() =>
                                    setIsError(
                                        checkConfirmPassword(
                                            password,
                                            validatePassword
                                        )
                                    )
                                }
                                required
                            />
                            <Gap height={25} />
                            <Input
                                label="Confirm Password"
                                placeholder="Masukan password sekali lagi"
                                type="password"
                                id="confirm-password"
                                value={validatePassword}
                                autoComplete="new-password"
                                minLength="8"
                                onChange={(e) =>
                                    setValidatePassword(e.target.value)
                                }
                                onBlur={() =>
                                    setIsError(
                                        checkConfirmPassword(
                                            password,
                                            validatePassword
                                        )
                                    )
                                }
                                required
                            />
                            {isError && (
                                <small
                                    className="input-error-message text-red-500"
                                    data-input-id="#confirm-password"
                                >
                                    Password Tidak Sama
                                </small>
                            )}
                            <Gap height={25} />
                            <Button className="rounded-lg">
                                Create account
                            </Button>
                        </div>
                    </Form>
                    <div className="flex justify-between text-sm px-2 py-3 text-muted ">
                        <AuthLink href="/" title="Sign in" />
                    </div>
                </div>
                {/* Form End */}
            </div>
            <Footer />
        </div>
    );
}

export default Register;
