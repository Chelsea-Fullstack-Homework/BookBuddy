function Book({book}){

    return (
        <>
            <div className='book'>
                <h3>{book.title}</h3>
                <img src={book.coverimage}></img>
                <button onClick={()=>{}}><h3>Details</h3></button>
            </div>
        </>
    )
}

export default Book
