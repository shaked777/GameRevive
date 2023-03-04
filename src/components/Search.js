import React, { useState } from 'react'
import { Button, Form, FormControl, Badge } from 'react-bootstrap'

import { useNavigate } from "react-router-dom";



function Search() {
    const search = <span className='fas fa-shopping-cart'></span>
    const [keyword, setKeyword] = useState('')

    let navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        if (keyword) {
            navigate(`/?keyword=${keyword}`);
        } else {
            navigate("/");
        }
    }
    return (
        <div>
        <Form onSubmit={submitHandler} inline='true'>
        
            <Form.Control 
                placeholder='Search'
                type='text'
                name='q'
                onChange={(e) => setKeyword(e.target.value)}
                className='mr-sm-2 ml-sm-5'
            ></Form.Control>
        </Form>
        </div>
    )
}

export default Search