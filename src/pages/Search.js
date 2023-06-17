import { useNavigate } from "react-router-dom"
import { allBooks } from "../Data"
import { BookCard } from "../components/BookCard"
import { useState } from "react"

export const SearchPage = ({allBooksData, setAllBooksData}) => {
    const [searchBooks, setsearhbooks] = useState([])
    const [text , setText] = useState('')
    const navigate = useNavigate()
    const getBooks = (value) => {
        if(value != ''){

            const newserchBooks = allBooksData.filter((book)=> book.name.toLowerCase().includes(value.toLowerCase()))
            setsearhbooks(newserchBooks)
        }else{
            setsearhbooks([])
        }
    }
    return(
       <>
       <div><button  onClick={()=> navigate('/')}> Go Home Page </button><br/><label>Search books :  </label>
       <input placeholder="search books" style={{width : '50vw', margin : '50px auto'}} type="search" onChange={(e)=> {
        getBooks(e.target.value)
        setText(e.target.value)
       }}  /></div>
        <div style={{display : 'flex', flexWrap : 'wrap', margin : '8rem', padding : '10px'}}>
       {searchBooks?.map((book,index)=> 
       <BookCard  key={index} {...book} allBooksData={allBooksData} setAllBooksData={setAllBooksData} searchBooks={searchBooks} setsearhbooks={setsearhbooks} text={text} />
       )}
        </div>
       </>
    )
}