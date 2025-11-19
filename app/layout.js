import Menu from "../componentes/menu";

export const metadata = {
    title: 'Glowskin',
    description: 'Projeto Node.js com Next.js',

}

export default function RootLayout ({children}) {
    return (
        <html lang="en">
            <body>
                <header>
                    <Menu/>
                </header>
                <main>
                    {children}
                </main>
                <footer>
                    <p>Sua pele brilhando, a GS prosperando</p>
                </footer>
            </body>
        </html>
    );
}