import Menu from "../componentes/menu";
import "./css/base.css"

export const metadata = {
    title: 'Glowskin',
    description: 'Projeto Node.js com Next.js',

}

export default function RootLayout ({children}) {
    return (
        <html lang="en">
            <head>
            <link
  href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&display=swap"
  rel="stylesheet"
/>
            </head>
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