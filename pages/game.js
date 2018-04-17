import Layout from "../src/components/Layout";
import { whoAmi } from "../src/apis";

class Game extends React.Component {
    static async getInitialProps() {
        const userLogged = await whoAmi()

        return {
          userLogged
        }
    }

    render() {
        const { userLogged } = this.props

        return (
            <Layout userLogged={userLogged}>
                <div className="tile is-ancestor is-vertical">
                    Hello Game
                </div>
            </Layout>
        )
    }
}

export default Game