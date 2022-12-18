// import Cards from '@/screens/cards/Cards'
import CardsList from "@/screens/cards/cards-list/CardsList";
import Layout from "@/layout/Layout";
import {FC} from "react";

const CardsPage: FC = () => {
    return (
        <Layout title='Cards'>
        {/*// <Cards />*/}
        <CardsList/>
        </Layout>
    )
}

export default CardsPage