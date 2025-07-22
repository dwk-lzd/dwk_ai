import {
    useEffect,

} from 'react'
import {
    useRepoStore

} from '../../store/repos'
const RepoList = () => {
    const { repos, loading, error, fetchRepos } = useRepoStore()
    // console.log(useRepoStore());
    useEffect(() => {
        fetchRepos('dwk-lzd')
    }, [])
    if (loading) return <div>加载中...</div>
    if (error) return <div>{error}</div>
    return (
        <>
            <ul>
                {
                    repos.map(repo => (
                        <li key={repo.id}>
                            <a href={repo.html_url} target='_blank' rel='noreferrer'>{repo.name}</a>
                            <p>{repo.description || 'No description'}</p>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}
export default RepoList;