import Image from 'next/image'

const fetchComments = async (id) => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
        next: {
            revalidate: 60
        }
    })
    .then(res => res.json())
}

export default async function Comments({ params }) {
    const { id } = params
    const comments = await fetchComments(id)

    return (
        <ul style={{ background: '#444', fontSize: '15px' }}>
            { comments.map( comment => (
                <li style={{ listStyle: 'none' }} key={comment.id}>
                    <Image alt={comment.name} width={55} height={55} src={`https://api.dicebear.com/5.x/adventurer/svg?seed=${comment.email}.svg`} />
                    <h3>{comment.name}</h3>
                    <small>{comment.body}</small>
                </li>
            )) }
        </ul>
    )
}