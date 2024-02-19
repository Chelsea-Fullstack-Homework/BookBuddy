function SingleBookDetails({bookDetails}){
    return (
        <>
            <ul>
                <div>
                    <h1>{bookDetails.title}</h1>
                    <p>by {bookDetails.author}</p>
                </div>
                <li>{bookDetails.description}</li>
                <img src={bookDetails.coverimage}></img>
                {
                    bookDetails.available?
                    (
                        <>
                        <li>This book is currently available for checkout</li>
                        <button><h3>Checkout</h3></button>
                        </>
                    ):
                    <li>This book is currently unavailable for checkout</li>
                }
            </ul>
        </>
    )
}

export default SingleBookDetails
