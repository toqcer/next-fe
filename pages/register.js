import Card from "@components/Card";
import Input from "@components/Input";
import Button from "@components/atoms/Button/Button";
import Footer from "@components/Footer";
import Link from "next/link";
import Head from "next/head"

function Register() {
    return (
        <div className="h-full bg-primary text-white flex flex-col">
            <Head>
                <title>Toqcer | Register</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex-1 flex flex-col items-center">
                <h1 className="text-orange font-bold text-4xl my-14">ToqCer</h1>
                {/* Form */}
                <div className="max-w-xl w-full">
                    <Card title="Sign Up">
                        <Input
                            label="name"
                            placeholder="Name"
                            type="text"
                            required />
                        <Input
                            label="email"
                            placeholder="Email"
                            type="email"
                            required />
                        <Input
                            label="password"
                            placeholder="Password"
                            type="password"
                            required />
                        <Button>Sign in</Button>
                    </Card>
                    <div className="flex justify-between text-sm px-2 py-3 text-muted ">
                        <Link href='./login' passHref>
                            <a className="hover:text-white">Sign In</a>
                        </Link>
                    </div>
                </div>
                {/* Form End */}
            </div>
            <Footer />
        </div>
    )
}

export default Register