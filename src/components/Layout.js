import UserProvider from '../providers/User'
import NavBar from './NavBar'

class Layout extends React.Component {

    render() {
        const { userLogged } = this.props

        return (
            <UserProvider userLogged={userLogged}>
                <div className="container">
                <figure className="image">
                    <img src="http://elpajaroburlon.com/wp-content/uploads/2013/09/excalibur-11.jpg" />
                </figure>
                <NavBar />
                <section className="section">
                    { this.props.children }
                </section>
                <style jsx scoped>{`
                img {
                    max-height: 160px;
                }
                `}</style>
                </div>
            </UserProvider>
        )
    }
}

export default Layout