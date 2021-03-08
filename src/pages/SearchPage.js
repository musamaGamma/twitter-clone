import React, { useState } from 'react'
import FooterNav from '../components/FooterNav'
import { Avatar} from '@material-ui/core'
import { SearchSharp, SettingsOutlined, ArrowBack } from '@material-ui/icons'
import useStyles from "./SearchPageStyles"
import { useEffect } from 'react'

const SearchPage = () => {

    const [focus, setFocus] = useState(false) 
    const styles = useStyles()

    const handleFocus = () => {
      setFocus(true)
    }
    const defocus = () => {
        setFocus(false)
    }

    useEffect(()=> {
     document.title = "Explore /Twitter"
    }, [])
    return (
        <div>
        
            <div className={styles.header}>
                {focus? (<ArrowBack onClick={defocus} style={{color: "rgba(29,161,242,1.00)"}} />) : (<Avatar />)}
                
                <div className={focus ? styles.activeSearch :styles.searchBar}>
                    <SearchSharp />
                    <input onFocus={handleFocus} type="text" placeholder="Search Twitter"/>
                    
                </div>
                <SettingsOutlined style={{color: "rgba(29,161,242,1.00)"}}/>
            </div>
            <FooterNav />
        </div>
    )
}

export default SearchPage
