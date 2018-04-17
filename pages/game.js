import Layout from "../src/components/Layout";
import { whoAmi } from "../src/apis";
import Router from 'next/router'

class Game extends React.Component {
    static async getInitialProps({ res }) {
        const userLogged = await whoAmi()

        if (res && !userLogged) {
            res.writeHead(302, { Location: '/'})
            res.end()
            res.finished = true
        } else if(!userLogged) {
            Router.replace('/')
        }

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