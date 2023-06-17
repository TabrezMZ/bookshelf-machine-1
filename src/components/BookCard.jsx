export const BookCard = ({_id,img,name,author,category,isCategory, allBooksData, setAllBooksData,setsearhbooks,searchBooks, text}) => {
    const moveBooks = (value, id)=> {
        // console.log(value, id);
        if(value == 'Open this select Category'){
            return
        }else{
            if(value == 'None'){
                const newBooksData = allBooksData.map((book) => ({
                    ...book,
                    isCategory: book._id === id ? false : book.isCategory
                  }));
                  setAllBooksData(newBooksData)
                  if(text !== undefined ){
                    setsearhbooks(newBooksData.filter((book)=> book.name.toLowerCase().includes(text.toLowerCase())))
                  }
                  
            }else{
                const newBooksData = allBooksData.map((book) => ({
                    ...book,
                    category: book._id === id ? value : book.category ,   isCategory: book._id === id ? true : book.isCategory
                  }));
                setAllBooksData(newBooksData)
                if(text !== undefined){
                    setsearhbooks(newBooksData.filter((book)=> book.name.toLowerCase().includes(text.toLowerCase())))
                  }
            }
        }
        
    }
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={img} className="card-img-top cover" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
          {author}
          </p>
          <select  onChange={(e)=> moveBooks(e.target.value, _id)} className="form-select" aria-label="Default select example">
            <option value='Open this select Category' >Open this select Category</option>
            <option value="Currently Reading"> {'Currently Reading' === category && isCategory && '☑️'} Currently Reading</option>
            <option value="Read">{'Read' === category && '☑️'}Read</option>
            <option  value="Want to Read">{'Want to Read' === category && '☑️'}Want to Read</option>
            <option value="None">None</option>
          </select>
        </div>
      </div>
    </>
  );
};
