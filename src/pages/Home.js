import Layout from "../components/Layout";

export default function Home() {
    const views = `
        <h1>Hello World<h1>
        <p>Esto es una aplication SPA</p>
    `;

    return Layout(views);
}