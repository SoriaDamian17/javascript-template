import Layout from "../components/Layout";

export default function NotFound() {
    const views = `
        <h1>Not Found</h1>
        <p>Esto es una aplication SPA</p>
    `;

    return Layout(views);
}