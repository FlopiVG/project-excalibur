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
                    {this.renderResources()}
                    <figure className="image">
                        <img src="https://img1.cgtrader.com/items/117683/7bcf6531ce/cartoon-village-mobile-3d-model-max-obj-fbx-tga.jpg" />
                    </figure>
                    <br />
                    <div className="tile is-child box">
                        <h3 className="title is-3 has-text-centered">Farm</h3>
                        <div className="columns">
                            <div className="column is-2">
                                <img src="http://game-icons.net/icons/delapouite/originals/svg/farmer.svg"/>
                            </div>
                            <div className="column is-9">
                                A farm is an area of land that is devoted primarily to agricultural processes with the primary objective of producing food and other crops; it is the basic facility in food production.[1] The name is used for specialised units such as arable farms, vegetable farms, fruit farms, dairy, pig and poultry farms, and land used for the production of natural fibres, biofuel and other commodities. It includes ranches, feedlots, orchards, plantations and estates, smallholdings and hobby farms, and includes the farmhouse and agricultural buildings as well as the land. In modern times the term has been extended so as to include such industrial operations as wind farms and fish farms, both of which can operate on land or sea.
                            </div>
                            <div className="column is-3">
                                <a className="button">Upgrade</a>
                            </div>
                        </div>
                    </div>
                </div>
                <style jsx scoped>{`
                img {
                    max-height: 560px;
                }
                `}</style>
            </Layout>
        )
    }

    renderResources() {
        return (
            <div className="columns">
                <div className="column">
                    <div className="tile is-child box has-text-centered">
                        <span className="is-size-5">Food:</span> 3000
                    </div>
                </div>
                <div className="column">
                    <div className="tile is-child box has-text-centered">
                        <span className="is-size-5">Wood:</span> 3000
                    </div>
                </div>
            </div>
        )
    }
}

export default Game