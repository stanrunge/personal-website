import Layout from "../components/layout";
import ButtonAppBar from "../components/ButtonAppBar";

export default function Contact() {
    return (
        <Layout home={false}>
            <ButtonAppBar title={"Contact"}></ButtonAppBar>
            <h1>Contact</h1>
            <p>
                You can contact me at <a href="mailto:stan@stanrunge.dev">this email</a>.
            </p>
        </Layout>
    )
}