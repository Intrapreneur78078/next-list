import style from '../../styles/Next.module.css'
import Link from 'next/link'

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    return{
        props:{
            users : data
        }
    }
}

const index = ({users}) => {
    return (
        <div>
            <h1>All Next Users</h1>
            {users.map(user=>(
                <Link key={user.id} href={'/next/'+user.id}>
                    <a className={style.single}>
                        <h3>{user.name}</h3>
                    </a>
                </Link>
            ))}
        </div>
    )
}

export default index
