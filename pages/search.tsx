import dynamic from 'next/dynamic'
import { GetServerSideProps } from 'next'
import React, { useState, useEffect } from 'react'
import MainLayout from '../layouts/main'
import './styles.less'
import SearchField from '../layouts/searchfield'

/**
 * Initiatialize resource for maps service
 */
// Adapter.updateDefaults({ baseURL: 'http://localhost:3000' })


const Search: React.FC<any> = ({ data }): JSX.Element => {
    const [display, setDisplay] = useState(true);
    const [query, setQuery] = useState('')

    // Effect to manage the display for card items
    useEffect(() => {
        data !== undefined || data !== null ? setDisplay(false) : setDisplay(true)
    });


    const useFuse = (value: string): React.SetStateAction<string> => {
        setQuery(value)
        return value
    }
    const handleChange = (value: string): string => {
        setDisplay(true)
        useFuse(value)

        return value
    }

    return (
        <MainLayout>
            <SearchField handleSearch={useFuse} handleChange={handleChange} />
        </MainLayout>
    )
}



export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { query } = ctx

    const res = await fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${query.lat},${query.lng}&radius=${query.radius}&type=hospital&key=${process.env.GOOGLE_API_KEY}`);
    const places = await res.json()
    return {
        props: {
            data: places.results
        }
    }
}

export default Search