import './App.css'
import { TwitterFollorCard } from './TwitterFollowCard'

const users = [
    {
        userName: 'midudev',
        name: 'Miguel Ángel Durán',
        isFollowing: true
    },
    {
        userName: 'pheralb',
        name: 'Pablo Hernandez',
        isFollowing: false
    },
    {
        userName: 'elonmusk',
        name: 'Elon Musk',
        isFollowing: true
    },
    {
        userName: 'LauraHayIMC',
        name: 'Laura Haylan',
        isFollowing: false
    }
]

export function App (){
    const formatUserName= (userName) => `@${userName}`

    return (
        <section className='App'>
            {
                users.map(({ userName, name, isFollowing})=>(                       
                        <TwitterFollorCard
                            key={userName}
                            userName={userName}
                            initialIsFollowing={isFollowing}
                        >
                            {name}                        
                        </TwitterFollorCard>          
                    )
                )
            }
        </section>
    )
}