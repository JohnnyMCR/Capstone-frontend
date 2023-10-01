import Comments from './Comment';

export default function ForumCard({ forum ,user }) {

    return (
        <div className="column">
            <div className="card mb-5">
                <div className="card-content">
                    <div className='columns'>
                        <div className='column has-text-left is-full has-background-info'>
                            <h1 className='column is-one-half has-text-centered title has-text-primary'>{forum.title}</h1>
                            <span className='column is-one-quarter is-size-6 has-text-dark'>{forum.date}</span>
                            <p className='column is-one-quarter is-size-6 has-text-dark'>{forum.username}</p>
                            <p className='column is-one-quarter is-size-6 has-text-dark'>{forum.category}</p>
                            <p className='column is-one-quarter is-size-6 has-text-dark'>{forum.content}</p>
                            <Comments user={user}  />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
