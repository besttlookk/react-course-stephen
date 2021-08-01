import React, {useState, useEffect} from 'react'
import axios from 'axios'


// we are going to add debounce so that we are not making network request after each key press: we gonna use two useState
// first useState will have timer to update "debounceText" and return a cleanup function that cancles this timer
// second useEffect will make reuqest with debouncedTExt
const Convert = ({language, text}) =>{

    const [translated, setTranslated] = useState('')
    const [debouncedText, setDebouncedText] = useState(text)

    useEffect(()=>{
        const timerId = setTimeout(()=>{
            setDebouncedText(text)
        }, 500)

        return ()=> {
            clearTimeout(timerId)
        }
    },[text])

    
    useEffect(()=>{

        const doTraslation = async()=> {
            const {data} = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                params: {
                    q: debouncedText,
                    target:language.value,
                    key:'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
            })
            setTranslated(data.data.translations[0].translatedText)
        }

        doTraslation()
    
    }, [language,debouncedText])

    // useEffect(()=>{

    //     const doTraslation = async()=> {
    //         const {data} = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
    //             params: {
    //                 q: text,
    //                 target:language.value,
    //                 key:'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
    //             }
    //         })
    //         setTranslated(data.data.translations[0].translatedText)
    //     }

    //     doTraslation()
    
    // }, [language,text])

    return (
        <div>
            <h1 className="ui header">{translated}</h1>

        </div>
    )
}

export default Convert