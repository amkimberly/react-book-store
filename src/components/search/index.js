import { useState } from 'react'
import { books } from './dataSearch'
import Input from '../input'
import styled from 'styled-components'

const SearchContainer = styled.section`
   background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
   color: #FFF;
   text-align: center;
   padding: 85px 0;
   height: 470px;
   width: 100%;
`
const Title = styled.h2`
   color: #FFF;
   font-size: 36px;
   text-align: center;
   width: 100%;
`
const Subtitle = styled.h3`
   font-size: 16px;
   font-weight: 500;
   margin-bottom: 40px;
`
const Result = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   margin-bottom: 20px;
   cursor: pointer;
   p {
       width: 200px;
   }
   img {
       width: 100px;
   }
   &:hover {
       border: 1px solid white;
   }
`


function Search() {
    const [searchedBooks, setSearchedBooks] = useState([])
    function DoSearch(event) {
        const typedText = event.target.value
        const searchResult = books.filter( book => book.name.includes(typedText))
        setSearchedBooks(searchResult)
    }
    console.log(searchedBooks)
    return(
        <SearchContainer>
            <Title>Already know where to start from?</Title>
            <Subtitle>Find your book</Subtitle>
            <Input 
                placeholder = 'Search'
                onChange = {event => DoSearch(event)}
            />
            { searchedBooks.map( book => (
                <Result>
                   <img src={book.src}/>
                   <p>{book.name}</p>
                </Result>
            ) ) }
    </SearchContainer>
    )
}
export default Search;
