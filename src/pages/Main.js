import { useNavigate } from "react-router-dom"
import { BookCard } from "../components/BookCard"

export const MainPage = ({allBooksData, setAllBooksData}) => {
    const navigate = useNavigate()


    

    const currentlyReadBook = allBooksData.filter((book)=> book.category === 'Currently Reading' && book.isCategory)
    const wantToRead = allBooksData.filter((book)=> book.category === 'Want to Read' && book.isCategory)
    const readBook = allBooksData.filter((book)=> book.category === 'Read' && book.isCategory)

    return(
        <>
        <button  onClick={()=> navigate('/search')}> Go Serch Page </button>
        <hr/>
        <div>
            <h3>Currently reading</h3>
            <div className="row">
                {currentlyReadBook?.map((book,index)=> (
                    <BookCard key={index} {...book} allBooksData={allBooksData} setAllBooksData={setAllBooksData}/>
                ))}
            </div>
        </div>
        <hr/>
        <div>
            <h3>Want To Read</h3>
            <div className="row">
                {wantToRead?.map((book,index)=> (
                    <BookCard key={index} {...book} allBooksData={allBooksData} setAllBooksData={setAllBooksData}/>
                ))}
            </div>
        </div>
        <hr/>
        <div>
            <h3>Read</h3>
            <div className="row">
                {readBook?.map((book,index)=> (
                    <BookCard key={index} {...book} allBooksData={allBooksData} setAllBooksData={setAllBooksData}/>
                ))}
            </div>
        </div>
        </>
    )
}