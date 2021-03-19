import React, { useState } from 'react'
import FooterNav from '../components/FooterNav'
import { Avatar} from '@material-ui/core'
import { SearchSharp, SettingsOutlined, ArrowBack } from '@material-ui/icons'
import useStyles from "./SearchPageStyles"
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

const SearchPage = ({history}) => {

    const [focus, setFocus] = useState(false) 
    const styles = useStyles()

    const handleFocus = () => {
      setFocus(true)
    }
    const defocus = () => {
        setFocus(false)
    }

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    useEffect(()=> {
     if(!userInfo) {
         history.push("/login")
     }
    }, [])

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
