import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import AppLayout from "components/globals/AppLayout"

export default function Home() {
    return (
        <AppLayout title="Welcome here">
            <h1>
                Welcome to <a href="https://nextjs.org">Devter!</a>
            </h1>
            <nav>
                <Link href="/timeline">
                    <a>timeline</a>
                </Link>
            </nav>
        </AppLayout>
    )
}
