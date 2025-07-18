import {
    useParams,
    useNavigate,
    Link
} from "react-router-dom"
import {
    useRepos
} from '@/hooks/useRepos'
import {
    useEffect
} from "react"
const RepoList = () => {
    // 可以通过useParams获取路由参数,我们在路由设置的动态路由中,可以通过:id来获取id的值
    const { id } = useParams()
    console.log(useParams());
    const navigate = useNavigate()
    // 自定义hooks
    const { repos, loading, error } = useRepos(id)
    console.log(repos, loading, error);
    useEffect(() => {
        if (!id.trim()) {
            navigate('/')
        }
    }, [])
    if (loading) return (<>Loading...</>)
    if (error) return (<>Error:{error}</>)
    return (
        <>
            <h2>Repositor for {id}</h2>
            {
                repos.map((repo) => (
                    <div key={repo.id}>
                        <Link key={repo.id} to={`/users/${id}/repos/${repo.name}`}>
                            {repo.name}
                        </Link>
                    </div>
                ))
            }
        </>
    )
}
export default RepoList