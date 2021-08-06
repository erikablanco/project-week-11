import React, {useState} from 'react'

const Search = ({searchText}) => {
    const [text, setText] = useState('')

    const handleInputChange = (e) => {
        e.preventDefault()

        searchText(text)
    }

    return (
        <div>
            <form onSubmit={handleInputChange}>
                <input type="text"
                  placeholder="Search... Hit Enter"
                  className="py-1 px-7 "
                  name="Text"
                  autoComplete="off"
                  onChange={(e) => setText(e.target.value)}
                  />              
                
            </form>
        </div>
    )
}

export default Search;

//cosas pendientes por mejorar e invocar el q con useMeno y useForm 
