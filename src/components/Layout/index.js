import Nav from "../Nav";

export default function Layout(view) {
    return `
        <header>
            ${Nav()}
        </header>
        <section>
            ${view}
        </section>
    `;
}